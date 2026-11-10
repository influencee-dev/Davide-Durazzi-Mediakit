import { creator } from '../data/creator';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

export function Ecosystem() {
  const e = creator.ecosystem;
  return (
    <section id="ecosistema" className="section border-t border-line bg-scafo/40" aria-labelledby="eco-titolo">
      <div className="wrap">
        <SectionHead
          id="eco-titolo"
          kicker="Content ecosystem"
          lines={['Non un post isolato:', <span key="b" className="serif-i text-blue">un sistema di contenuti.</span>]}
          intro={e.note}
        />
        <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {e.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <li className="panel panel-hover relative h-full list-none p-7 pt-6">
                <span className="relative grid h-[34px] w-[34px] place-items-center rounded-full border border-blue bg-bg text-sm font-extrabold text-blue">{i + 1}</span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                {s.stat && <p className="mt-4 border-t border-line pt-3 text-sm font-bold text-orange">{s.stat}</p>}
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.2}>
          <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-muted">
            <span className="text-ink">Dove si trova tutto questo:</span>
            {creator.socials.map((s) => (
              <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-blue hover:underline">
                {s.label}
              </a>
            ))}
            <a href={creator.website} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-blue hover:underline">
              davidedurazzi.it
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
