import { useEffect, useState } from 'react';
import { creator } from '../data/creator';
import { mailto } from '../lib/format';

const LINKS = [
  { href: '#numeri', label: 'Numeri' },
  { href: '#chi-e', label: 'Chi è' },
  { href: '#mondo', label: 'Ambiti' },
  { href: '#collabora', label: 'Collaborazioni' },
  { href: '#esperienze', label: 'Progetti' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  const cta = mailto(creator.email, creator.emailSubject);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-xl' : 'border-b border-transparent'}`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Davide Durazzi, torna in cima">
          <img src="images/logo-192.png" alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
          <span className="text-[15px] font-extrabold tracking-tight">Davide Durazzi</span>
        </a>
        <nav aria-label="Principale" className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={cta} className="btn btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            Richiedi una proposta
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="wrap grid gap-1 pb-6 lg:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3.5 text-lg font-bold hover:bg-paper">
              {l.label}
            </a>
          ))}
          <a href={cta} className="btn btn-primary mt-3">
            Richiedi una proposta
          </a>
        </nav>
      )}
    </header>
  );
}
