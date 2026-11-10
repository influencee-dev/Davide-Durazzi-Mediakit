import type { ReactNode } from 'react';
import { LineReveal, Reveal } from './Reveal';

export function SectionHead({ kicker, lines, intro, id }: { kicker: string; lines: ReactNode[]; intro?: string; id?: string }) {
  return (
    <header className="mb-12 max-w-3xl sm:mb-16">
      <Reveal>
        <p className="kicker">{kicker}</p>
      </Reveal>
      <h2 id={id} className="h-section mt-5">
        <LineReveal lines={lines} />
      </h2>
      {intro && (
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
        </Reveal>
      )}
    </header>
  );
}
