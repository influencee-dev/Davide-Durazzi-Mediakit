import { creator } from '../data/creator';
import { mailto } from '../lib/format';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

export function Offers() {
  return (
    <section id="collabora" className="section relative border-t border-line" aria-labelledby="collabora-titolo">
      <div aria-hidden="true" className="absolute top-20 right-[-10%] -z-10 h-[480px] w-[480px] rounded-full bg-blue-deep/20 blur-[130px]" />
      <div className="wrap">
        <SectionHead
          id="collabora-titolo"
          kicker="Collaborazioni"
          lines={['Come può partecipare', <span key="b" className="accent-font text-blue">il tuo brand.</span>]}
          intro="Sei formati, organizzati per obiettivo. Si possono scegliere da soli o combinare in un progetto su misura."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {creator.offers.map((o, i) => (
            <Reveal key={o.title} delay={(i % 3) * 0.08} className="panel panel-hover group flex flex-col p-7">
              <p className="inline-flex w-fit rounded-full border border-orange/50 px-3 py-1 text-[11px] font-bold tracking-wider text-orange uppercase">{o.goal}</p>
              <h3 className="mt-5 text-2xl leading-tight font-extrabold tracking-tight">{o.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{o.text}</p>
              {o.channels.length > 0 && <ul className="mt-5 flex flex-wrap gap-2">
                {o.channels.map((c) => (
                  <li key={c} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-muted">
                    {c}
                  </li>
                ))}
              </ul>}
              <a
                href={mailto(creator.email, `${creator.emailSubject} · ${o.title}`)}
                className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-bold text-blue"
              >
                <span className="underline-offset-4 group-hover:underline">Richiedi una proposta</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="sr-only">per {o.title}</span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">{creator.offersNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
