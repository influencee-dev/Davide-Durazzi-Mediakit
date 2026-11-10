import { creator } from '../data/creator';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

function Num({ n }: { n: number }) {
  return <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border border-blue bg-bg text-sm font-extrabold text-blue">{n}</span>;
}

export function Ecosystem() {
  const e = creator.ecosystem;
  const main = e.steps.slice(0, 4);
  const live = e.steps[4];
  return (
    <section id="ecosistema" className="section border-t border-line bg-scafo/40" aria-labelledby="eco-titolo">
      <div className="wrap">
        <SectionHead
          id="eco-titolo"
          kicker="Content ecosystem"
          lines={['Non un post isolato:', <span key="b" className="accent-font text-blue">un sistema di contenuti.</span>]}
          intro={e.note}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {main.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="panel panel-hover flex flex-col p-7 pt-6">
              <Num n={i + 1} />
              <h3 className="mt-5 text-xl font-extrabold tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              {s.stat && <p className="mt-auto border-t border-line pt-3 text-sm font-bold text-orange">{s.stat}</p>}
            </Reveal>
          ))}
        </div>
        {/* Twitch: rettangolo largo e centrale sotto le prime quattro */}
        <Reveal delay={0.4} className="panel panel-hover mx-auto mt-4 flex max-w-3xl flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:gap-6">
          <Num n={5} />
          <div className="flex-1">
            <h3 className="text-xl font-extrabold tracking-tight">{live.title}</h3>
            <p className="mt-1 leading-relaxed text-muted">{live.text}</p>
          </div>
          <a href={creator.socials.find((s) => s.id === 'twitch')?.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-5 !py-2.5 text-sm">
            Vai alla diretta <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
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
