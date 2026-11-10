import { motion } from 'motion/react';
import { creator } from '../data/creator';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

/** Schema dei territori: la tecnologia al centro, gli altri tre ambiti collegati. Solo decorativo (il testo è nelle card). */
function Graph() {
  const nodes = [
    { x: 170, y: 70, t: 'Intelligenza artificiale' },
    { x: 830, y: 70, t: 'Gaming' },
    { x: 500, y: 330, t: 'Motori e automotive' },
  ];
  const draw = {
    initial: { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true },
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const },
  };
  return (
    <svg viewBox="0 0 1000 400" className="hidden w-full md:block" aria-hidden="true" focusable="false">
      {nodes.map((n, i) => (
        <motion.path key={n.t} d={`M500 170 C ${500 + (n.x - 500) * 0.2} ${n.y + 90}, ${n.x} ${n.y + 110}, ${n.x} ${n.y + 22}`} fill="none" stroke="#7B97FF" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="1" {...draw} transition={{ ...draw.transition, delay: i * 0.15 }} />
      ))}
      <motion.path d="M170 92 C 400 200, 600 200, 830 92" fill="none" stroke="#1F2848" strokeWidth="1.5" strokeDasharray="4 6" {...draw} />
      <circle cx="500" cy="150" r="70" fill="#0E1530" stroke="#7B97FF" strokeWidth="1.5" />
      <circle cx="500" cy="150" r="96" fill="none" stroke="#1F2848" strokeDasharray="3 7" />
      <text x="500" y="156" textAnchor="middle" fill="#EEF1F8" fontSize="22" fontWeight="800" fontFamily="Archivo Variable, sans-serif">
        Tecnologia
      </text>
      {nodes.map((n) => (
        <g key={n.t}>
          <rect x={n.x - 118} y={n.y - 22} width="236" height="44" rx="22" fill="#0A1022" stroke="#FF8A4C" strokeOpacity="0.7" />
          <text x={n.x} y={n.y + 6} textAnchor="middle" fill="#EEF1F8" fontSize="17" fontWeight="700" fontFamily="Archivo Variable, sans-serif">
            {n.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function World() {
  const w = creator.world;
  return (
    <section id="mondo" className="section border-t border-line" aria-labelledby="mondo-titolo">
      <div className="wrap">
        <SectionHead
          id="mondo-titolo"
          kicker="Il mio mondo"
          lines={['Un solo filo:', <span key="b" className="accent-font text-blue">provare la tecnologia.</span>]}
          intro="Intelligenza artificiale, gaming e motori non sono quattro canali separati: sono tre modi di guardare la stessa cosa, la tecnologia applicata a ciò che le persone usano e amano."
        />
        <Graph />
        <div className="mt-6 grid gap-4 md:mt-2 md:grid-cols-3">
          {w.nodes.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.1} className="panel panel-hover flex flex-col p-7">
              <h3 className="text-2xl font-extrabold tracking-tight">{n.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{n.text}</p>
              <p className="mt-auto border-t border-line pt-4 text-sm font-semibold text-orange">{n.proof}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-2xl font-extrabold tracking-tight">Format e serie</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {w.series.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="panel panel-hover group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    {s.cover ? (
                      <img src={s.cover} width={600} height={800} loading="lazy" alt={`Copertina: ${s.title}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    ) : (
                      <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true" focusable="false">
                        <rect width="400" height="300" fill="#0A1022" />
                        <g stroke="#7B97FF" strokeOpacity=".5" strokeWidth="2" fill="none">
                          <circle cx="200" cy="150" r="96" />
                          <circle cx="200" cy="150" r="60" strokeDasharray="3 8" />
                          <path d="M40 150h320M200 20v260" strokeOpacity=".2" />
                        </g>
                        <path d="M170 118l72 32-72 32z" fill="#FF8A4C" />
                      </svg>
                    )}
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-scafo/80 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-bg/80 px-3 py-1 text-xs font-bold text-blue backdrop-blur">0{i + 1}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="text-xl font-extrabold">{s.title}</h4>
                    <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                    <span className="mt-auto pt-5 text-[15px] font-bold text-blue">
                      {s.label} <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
