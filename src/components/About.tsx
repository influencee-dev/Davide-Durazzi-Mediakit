import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

const TRAITS = [
  { n: '01', title: 'Impara facendo', text: 'Autodidatta: ha iniziato con riparazioni hardware e software, e continua a imparare provando.' },
  { n: '02', title: 'Costruisce', text: 'Un’app Android, un videogioco, un agente AI: non si limita a parlare di tecnologia, la usa per fare cose.' },
  { n: '03', title: 'Risponde', text: 'Commenti, dirette, domande: l’interazione con il pubblico è parte del lavoro, non un extra.' },
];

export function About() {
  return (
    <section id="chi-e" className="section border-t border-line bg-scafo/40" aria-labelledby="chi-e-titolo">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative mx-auto max-w-[420px] lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[28px] border border-line">
                <img
                  src="images/davide-auto-900.webp"
                  srcSet="images/davide-auto-560.webp 560w, images/davide-auto-900.webp 900w"
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  width={900}
                  height={1125}
                  loading="lazy"
                  alt="Davide Durazzi in auto, ripreso dal basso, con occhiali scuri e giacca"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <p className="serif-i absolute -right-2 -bottom-6 max-w-[230px] rounded-2xl border border-line bg-paper p-5 text-xl leading-snug sm:-right-8">
                «Mi interessa capire come funzionano le cose.»
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <SectionHead
            id="chi-e-titolo"
            kicker="Chi è Davide"
            lines={['Appassionato di tecnologia', <span key="b" className="serif-i text-blue">da sempre.</span>]}
          />
          <Reveal>
            <p className="max-w-2xl text-xl leading-relaxed text-ink/90">
              Davide ha iniziato da ragazzo smontando e riparando computer, e ha imparato quasi tutto da solo. Da quella curiosità sono arrivati lo streaming, la creazione di contenuti e, oggi, l’intelligenza artificiale e l’automazione.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Il suo modo di comunicare è diretto e concreto: informa, spiega o intrattiene a seconda del contenuto, ma sempre con la sua voce. Usa l’AI per supportare il lavoro; la direzione editoriale e le decisioni restano sue.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {TRAITS.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.1} className="panel p-6">
                <li className="list-none">
                  <p className="text-sm font-bold text-orange">{t.n}</p>
                  <h3 className="mt-3 text-lg font-extrabold">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
