import { useState } from 'react';
import { creator } from '../data/creator';
import { formatDate, mailto } from '../lib/format';
import { PlatformIcon } from './ui/PlatformIcon';
import { Reveal } from './ui/Reveal';

function CopyEmail() {
  const [done, setDone] = useState<'idle' | 'ok' | 'err'>('idle');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(creator.email);
      setDone('ok');
    } catch {
      setDone('err');
    }
    setTimeout(() => setDone('idle'), 2400);
  };
  return (
    <button type="button" onClick={copy} className="btn btn-ghost">
      {done === 'ok' ? 'Copiato ✓' : done === 'err' ? 'Copia a mano: ' + creator.email : 'Copia l’indirizzo'}
      <span className="sr-only" role="status" aria-live="polite">
        {done === 'ok' ? 'Indirizzo copiato negli appunti' : ''}
      </span>
    </button>
  );
}

export function Contact() {
  const subject = `${creator.emailSubject} · [brand]`;
  const body = 'Brand:\nProdotto o servizio:\nPeriodo:\nBudget indicativo:\n';
  return (
    <section id="contatti" className="section relative isolate overflow-hidden border-t border-line" aria-labelledby="contatti-titolo">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_100%,#000,transparent_75%)]" />
      <div aria-hidden="true" className="absolute bottom-[-30%] left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-deep/30 blur-[140px]" />
      <div className="wrap text-center">
        <Reveal>
          <p className="kicker justify-center">Contatti</p>
        </Reveal>
        <h2 id="contatti-titolo" className="h-display mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,7vw,5.4rem)]">
          Parliamo del tuo <span className="serif-i text-blue">progetto.</span>
        </h2>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">{creator.contact.pitch}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-4">
          <a href={mailto(creator.email, subject, body)} className="btn btn-primary !px-8 !py-4 text-lg">
            Richiedi una proposta
          </a>
          <p className="text-xl font-extrabold tracking-tight sm:text-2xl">
            <a href={mailto(creator.email, creator.emailSubject)} className="underline decoration-orange decoration-2 underline-offset-[6px] hover:text-blue">
              {creator.email}
            </a>
          </p>
          <CopyEmail />
        </Reveal>
        <Reveal delay={0.3}>
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {creator.socials.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 rounded-full border border-line px-5 py-3 text-sm font-bold transition hover:border-blue hover:text-blue">
                  <PlatformIcon id={s.id} className="h-4 w-4" />
                  {s.label}
                  <span className="sr-only"> (si apre in una nuova scheda)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <footer className="wrap mt-24 flex flex-col gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date(creator.updatedAt).getFullYear()} Davide Durazzi · <a href={creator.website} className="hover:text-ink hover:underline">davidedurazzi.it</a></p>
        <p>Numeri aggiornati al {formatDate(creator.updatedAt)} · fonte: strumenti ufficiali delle piattaforme</p>
      </footer>
    </section>
  );
}
