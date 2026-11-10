import { motion } from 'motion/react';
import { creator, type Bar } from '../data/creator';
import { fmt, fmtPct, fmtShort, formatDate } from '../lib/format';
import { CountUp } from './ui/CountUp';
import { PlatformIcon } from './ui/PlatformIcon';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

const NAMES: Record<string, string> = { tiktok: 'TikTok', youtube: 'YouTube', instagram: 'Instagram', site: 'Sito web' };

/** Barra orizzontale che si riempie quando entra nel viewport. `max` = valore che occupa il 100% della barra. */
function BarRow({ label, value, max = 100, display, accent = 'bg-blue', bare = false }: { label: string; value: number; max?: number; display?: string; accent?: string; bare?: boolean }) {
  return (
    <div className={bare ? 'grid grid-cols-[1fr] items-center text-sm' : 'grid grid-cols-[84px_1fr_auto] items-center gap-3 text-sm sm:grid-cols-[110px_1fr_auto]'}>
      {!bare && <span className="truncate text-muted">{label}</span>}
      {/* Il trigger sta sul contenitore (dimensioni fisse), non sulla barra che parte da scaleX 0 e non verrebbe mai rilevata. */}
      <motion.span
        className="h-2.5 overflow-hidden rounded-full bg-line"
        aria-hidden="true"
        initial="hide"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -5% 0px' }}
      >
        <motion.span
          className={`block h-full origin-left rounded-full ${accent}`}
          style={{ width: `${Math.max((value / max) * 100, 1.5)}%` }}
          variants={{ hide: { scaleX: 0 }, show: { scaleX: 1 } }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.span>
      {!bare && <span className="min-w-[3.4rem] text-right font-bold tabular-nums">{display ?? fmtPct(value)}</span>}
    </div>
  );
}

function Bars({ title, period, rows, accent }: { title: string; period?: string; rows: Bar[]; accent?: string }) {
  return (
    <div>
      <h4 className="text-[13px] font-bold tracking-wider text-muted uppercase">{title}</h4>
      <div className="mt-4 grid gap-3">
        {rows.map((r) => (
          <BarRow key={r.label} {...r} accent={r.value === Math.max(...rows.map((x) => x.value)) ? accent ?? 'bg-blue' : 'bg-blue/45'} />
        ))}
      </div>
      {period && <p className="mt-3 text-xs text-muted">{period}</p>}
    </div>
  );
}

export function Numbers() {
  const a = creator.audience;
  const maxViews = Math.max(...creator.topContent.map((t) => t.views));
  return (
    <section id="numeri" className="section relative" aria-labelledby="numeri-titolo">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(#000,transparent_70%)]" />
      <div className="wrap">
        <SectionHead
          id="numeri-titolo"
          kicker="I numeri"
          lines={['Dati veri,', <span key="b" className="accent-font text-blue">piattaforma per piattaforma.</span>]}
          intro={`Ogni cifra arriva dagli strumenti ufficiali delle piattaforme, con periodo e fonte. Non sommo audience diverse per fare un numero più grande. Aggiornamento: ${formatDate(creator.updatedAt)}.`}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {creator.kpis.map((k, i) => (
            <Reveal key={k.id} delay={i * 0.08} className="panel panel-hover flex flex-col p-6 sm:p-7">
              <div className="flex items-center gap-2.5 text-sm font-bold text-muted">
                {k.platform ? (
                  <PlatformIcon id={k.platform} className="h-[18px] w-[18px] text-blue" />
                ) : (
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-blue" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                  </svg>
                )}
                {NAMES[k.id]}
              </div>
              <p className="mt-6 text-[clamp(2.6rem,4.4vw,3.6rem)] leading-none font-extrabold tracking-tight">
                <CountUp value={k.stat.value} format={k.stat.approximate ? fmtShort : fmt} />
              </p>
              <p className="mt-2 font-semibold">{k.stat.label}</p>
              <p className="mt-1 text-sm text-muted">{k.stat.period}</p>
              {k.secondary.length > 0 && (
                <dl className="mt-5 grid gap-2 border-t border-line pt-4">
                  {k.secondary.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-3 text-sm">
                      <dt className="text-muted">{s.label}</dt>
                      <dd className="font-extrabold tabular-nums">{'short' in s && s.short ? fmtShort(s.value) : fmt(s.value)}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {'facts' in k && k.facts.map((f) => (
                <p key={f} className="mt-5 border-t border-line pt-4 text-sm leading-snug text-muted">{f}</p>
              ))}
              <p className="mt-auto pt-5 text-xs text-muted/90">Fonte: {k.stat.source}{k.stat.approximate ? ' · valore arrotondato dalla piattaforma' : ''}</p>
            </Reveal>
          ))}
        </div>

        {/* Pubblico */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="panel p-7 sm:p-9 lg:col-span-7">
            <h3 className="text-2xl font-extrabold tracking-tight">Chi guarda i contenuti</h3>
            <p className="mt-2 text-muted">{a.note}</p>
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              <Bars title="Instagram · età" rows={a.instagram.ages} />
              <div className="grid content-start gap-10">
                <Bars title="Instagram · genere" rows={a.instagram.gender} accent="bg-orange" />
                <Bars title="Instagram · paesi" rows={a.instagram.countries.slice(0, 3)} />
              </div>
            </div>
            <p className="mt-6 text-xs text-muted">{a.instagram.period}</p>
            <div className="mt-8 border-t border-line pt-7">
              <Bars title="TikTok · genere" rows={a.tiktok.gender.slice(0, 2)} accent="bg-orange" period={a.tiktok.period} />
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-5">
            {a.insights.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="panel flex items-center gap-6 p-7">
                <p className="text-5xl font-extrabold tracking-tight text-orange sm:text-6xl">{s.value}</p>
                <p className="text-lg leading-snug font-semibold">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Contenuti con più visualizzazioni */}
        <Reveal className="panel mt-6 p-7 sm:p-9">
          <h3 className="text-2xl font-extrabold tracking-tight">I contenuti che hanno funzionato</h3>
          <p className="mt-2 max-w-2xl text-muted">Dati per singolo contenuto, come mostrati da TikTok Studio e YouTube. Le piattaforme non sono confrontabili tra loro: ognuna ha il suo periodo.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_250px] lg:gap-10">
            <ul className="grid content-start gap-4">
              {creator.topContent.map((t) => (
                <li key={t.title}>
                  <a href={t.url} target="_blank" rel="noopener noreferrer" className="group block rounded-xl p-2 transition-colors hover:bg-paper">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="flex min-w-0 items-center gap-2.5 font-bold">
                        <PlatformIcon id={t.platform} className="h-4 w-4 shrink-0 text-blue" />
                        <span className="truncate">{t.title}</span>
                        <span className="hidden shrink-0 text-xs font-medium text-muted md:inline">· {t.note}</span>
                      </span>
                      <span className="shrink-0 font-extrabold tabular-nums">{t.views >= 100000 || t.views % 1000 === 0 ? fmtShort(t.views) : fmt(t.views)}</span>
                    </div>
                    <BarRow label="" bare value={t.views} max={maxViews} display="" accent={t.platform === 'tiktok' ? 'bg-orange' : 'bg-blue'} />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={creator.topContent[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mx-auto block w-full max-w-[250px] self-start overflow-hidden rounded-2xl border border-line bg-paper transition-colors hover:border-blue lg:mx-0"
            >
              <img
                src="images/cover-tiktok-top.webp"
                width={432}
                height={574}
                loading="lazy"
                alt={`Copertina del video TikTok ${creator.topContent[0].title}`}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-4">
                <span className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-muted uppercase">
                  <PlatformIcon id="tiktok" className="h-3.5 w-3.5" /> Il più visto
                </span>
                <span className="mt-1 block text-3xl font-extrabold tracking-tight">{fmtShort(creator.topContent[0].views)}</span>
                <span className="block text-xs text-muted">visualizzazioni · 60 giorni</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
