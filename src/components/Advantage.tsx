import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState, type KeyboardEvent } from 'react';
import { creator } from '../data/creator';
import { fmt, fmtPct, fmtShort, mailto } from '../lib/format';
import { CountUp } from './ui/CountUp';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

const FORMATTERS = { int: fmt, short: fmtShort, pct: fmtPct } as const;

/** Posizioni dei quattro settori attorno al centro (solo da sm in su). */
const POS = [
  { x: '50%', y: '7%' },
  { x: '93%', y: '50%' },
  { x: '50%', y: '93%' },
  { x: '7%', y: '50%' },
];
const ENDS = [
  [200, 40],
  [360, 200],
  [200, 360],
  [40, 200],
];

/** Un'unica sezione: vantaggio competitivo = prove concrete + versatilità tra più settori. */
export function Advantage() {
  const a = creator.advantage;
  const v = creator.versatility;
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const cur = v.sectors[active];

  const onKey = (e: KeyboardEvent) => {
    const n = v.sectors.length;
    let next = active;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (active + 1) % n;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (active + n - 1) % n;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <section id="vantaggio" className="relative border-t border-line bg-scafo/40 py-16 sm:py-20 lg:py-24" aria-labelledby="vantaggio-titolo">
      <div className="wrap">
        <SectionHead
          id="vantaggio-titolo"
          kicker="Il vantaggio competitivo"
          lines={['Un creator,', <span key="b" className="accent-font text-blue">più linguaggi.</span>]}
          intro={a.intro}
        />

        {/* Settori: Davide al centro. Selezionandone uno cambia il modo di comunicare. */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-auto w-full max-w-[420px] sm:aspect-square">
              <div aria-hidden="true" className="absolute inset-0 hidden sm:block">
                <svg viewBox="0 0 400 400" className="animate-spin-slow absolute inset-0 h-full w-full" fill="none">
                  <circle cx="200" cy="200" r="150" stroke="#7B97FF" strokeOpacity=".28" strokeDasharray="2 9" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
                  {ENDS.map(([x, y], i) => (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke={i === active ? '#FF8A4C' : '#7B97FF'}
                      strokeOpacity={i === active ? 1 : 0.3}
                      strokeWidth={i === active ? 2.5 : 1.5}
                      strokeDasharray={i === active ? '6 6' : undefined}
                      style={{ transition: 'stroke 0.4s, stroke-opacity 0.4s' }}
                    />
                  ))}
                </svg>
                <div className="absolute top-1/2 left-1/2 h-[27%] w-[27%] -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-[-14%] rounded-full bg-blue-deep/35 blur-2xl" />
                  <img src="images/logo-192.png" alt="" width={192} height={192} className="relative h-full w-full rounded-full" />
                </div>
              </div>

              <div role="tablist" aria-label="Settori in cui Davide lavora" onKeyDown={onKey} className="relative z-10 flex flex-wrap gap-2 sm:block sm:h-full">
                {v.sectors.map((s, i) => (
                  <button
                    key={s.id}
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-selected={i === active}
                    aria-controls={`panel-${s.id}`}
                    tabIndex={i === active ? 0 : -1}
                    onClick={() => setActive(i)}
                    style={{ ['--x' as string]: POS[i].x, ['--y' as string]: POS[i].y }}
                    className={`rounded-full border px-4 py-2.5 text-sm font-bold whitespace-nowrap transition-colors duration-300 sm:absolute sm:top-[var(--y)] sm:left-[var(--x)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-5 sm:py-3 ${
                      i === active ? 'border-orange bg-orange text-bg' : 'border-line bg-scafo text-ink hover:border-blue'
                    }`}
                  >
                    {s.short}
                    <span className="sr-only"> ({s.label})</span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.id}
                role="tabpanel"
                id={`panel-${cur.id}`}
                aria-labelledby={`tab-${cur.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="panel p-6 sm:p-8"
              >
                <p className="text-sm font-bold text-orange">{cur.label}</p>
                <dl className="mt-4 grid gap-4">
                  {[
                    ['Come comunica', cur.language],
                    ['Formato', cur.format],
                    ['Esempio reale', cur.example],
                    ['In una collaborazione', cur.collab],
                  ].map(([k, val]) => (
                    <div key={k} className="grid gap-1 border-b border-line pb-4 last:border-0 last:pb-0 sm:grid-cols-[150px_1fr] sm:gap-5">
                      <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">{k}</dt>
                      <dd className="leading-relaxed font-semibold">{val}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </AnimatePresence>
            <ul className="mt-4 flex flex-wrap gap-2">
              {a.chips.map((c) => (
                <li key={c} className="rounded-full border border-line px-3.5 py-1.5 text-xs font-bold text-muted">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Prove */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="panel flex flex-col p-6">
              <h3 className="text-base font-extrabold">{p.title}</h3>
              {'stat' in p && p.stat ? (
                <div className="mt-4">
                  <p className="text-[clamp(2.4rem,4vw,3.2rem)] leading-none font-extrabold tracking-tight text-blue">
                    <CountUp value={p.stat.value} format={FORMATTERS[p.stat.format]} />
                  </p>
                  <p className="mt-2 text-sm leading-snug font-semibold">{p.stat.label}</p>
                </div>
              ) : (
                <ul className="mt-4 grid gap-2">
                  {'checks' in p &&
                    p.checks.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm font-semibold">
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-ok" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        {c}
                      </li>
                    ))}
                </ul>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.text}</p>
              {'proof' in p && p.proof && <p className="mt-auto pt-4 text-xs text-muted/90">{p.proof}</p>}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-[22px] border border-line bg-paper p-6 sm:p-8">
          <div className="max-w-2xl">
            <p className="text-lg leading-snug font-bold">{a.tagline}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{a.note}</p>
          </div>
          <a href={mailto(creator.email, `${creator.emailSubject} · Progetto su misura`)} className="btn btn-primary">
            Parliamo del tuo progetto
          </a>
        </Reveal>
      </div>
    </section>
  );
}
