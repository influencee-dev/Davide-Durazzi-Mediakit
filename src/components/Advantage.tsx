import { creator } from '../data/creator';
import { fmt, fmtPct, fmtShort, mailto } from '../lib/format';
import { CountUp } from './ui/CountUp';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

const FORMATTERS = { int: fmt, short: fmtShort, pct: fmtPct } as const;

export function Advantage() {
  const a = creator.advantage;
  return (
    <section id="vantaggio" className="section relative border-t border-line bg-scafo/40" aria-labelledby="vantaggio-titolo">
      <div className="wrap">
        <SectionHead
          id="vantaggio-titolo"
          kicker="Il vantaggio competitivo"
          lines={['Credibile perché', <span key="b" className="accent-font text-blue">lo fa davvero.</span>]}
          intro={a.intro}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {a.points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1} className="panel panel-hover flex flex-col p-7 sm:p-9">
              <p className="text-sm font-bold text-orange">0{i + 1}</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{p.title}</h3>
              {'stat' in p && p.stat ? (
                <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
                  <p className="text-[clamp(3rem,6vw,4.6rem)] leading-none font-extrabold tracking-tight text-blue">
                    <CountUp value={p.stat.value} format={FORMATTERS[p.stat.format]} />
                  </p>
                  <p className="max-w-[16rem] pb-1 font-semibold leading-snug">{p.stat.label}</p>
                </div>
              ) : (
                <ul className="mt-6 grid gap-2.5">
                  {'checks' in p &&
                    p.checks.map((c) => (
                      <li key={c} className="flex items-start gap-3 font-semibold">
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-ok" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        {c}
                      </li>
                    ))}
                </ul>
              )}
              <p className="mt-6 leading-relaxed text-muted">{p.text}</p>
              {'proof' in p && p.proof && <p className="mt-auto border-t border-line pt-4 text-xs text-muted">{p.proof}</p>}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-[22px] border border-line bg-paper p-7 sm:p-9">
          <p className="max-w-2xl text-xl leading-snug font-bold">{a.closing}</p>
          <a href={mailto(creator.email, `${creator.emailSubject} · Parliamo del tuo progetto`)} className="btn btn-primary">
            Parliamo del tuo progetto
          </a>
        </Reveal>
      </div>
    </section>
  );
}
