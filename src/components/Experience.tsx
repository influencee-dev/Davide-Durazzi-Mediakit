import { creator } from '../data/creator';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

export function Experience() {
  const x = creator.experience;
  return (
    <section id="esperienze" className="section border-t border-line bg-scafo/40" aria-labelledby="esp-titolo">
      <div className="wrap">
        <SectionHead
          id="esp-titolo"
          kicker="Esperienze e progetti"
          lines={['Non ne parla soltanto:', <span key="b" className="accent-font text-blue">li costruisce.</span>]}
        />

        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="panel relative overflow-hidden p-8 sm:p-10 lg:col-span-7">
            <div aria-hidden="true" className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-deep/25 blur-[90px]" />
            <p className="inline-flex rounded-full bg-blue px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-bg uppercase">Collaborazione diretta</p>
            <h3 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">{x.collab.brand}</h3>
            <p className="mt-2 font-semibold text-orange">{x.collab.kind}</p>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{x.collab.text}</p>
            <p className="mt-6 max-w-lg text-sm text-muted">Esperienza passata, conclusa. Per ora non sono pubblicati risultati di campagna.</p>
          </Reveal>

          <Reveal delay={0.1} className="panel border-dashed p-8 lg:col-span-5">
            <p className="inline-flex rounded-full border border-line px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-muted uppercase">Affiliazioni</p>
            <p className="mt-5 text-lg leading-relaxed text-muted">{x.affiliates.note}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {x.affiliates.names.map((n) => (
                <li key={n} className="rounded-full bg-paper px-4 py-2 text-sm font-bold">
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="text-2xl font-extrabold tracking-tight">Progetti personali</h3>
          <p className="mt-2 max-w-2xl text-muted">Prodotti reali, fatti da Davide: sono la prova che la tecnologia la usa davvero.</p>
        </Reveal>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {x.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <li className="panel panel-hover flex h-full flex-col p-7 list-none">
                <h4 className="text-2xl font-extrabold tracking-tight">{p.title}</h4>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 text-[15px] font-bold text-blue hover:underline">
                    {p.label} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className="mt-auto pt-6 text-sm font-semibold text-muted">Progetto interno</p>
                )}
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl font-extrabold tracking-tight">Come lavoro con i brand</h3>
            <p className="mt-2 max-w-2xl text-muted">Libertà creativa e trasparenza non sono un limite alla collaborazione: sono il motivo per cui il pubblico si fida.</p>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {creator.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <li className="panel h-full list-none p-6">
                  <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-orange" />
                  <h4 className="mt-4 text-lg font-extrabold">{p.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
