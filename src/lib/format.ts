// de-DE raggruppa anche i numeri a 4 cifre (9.955), come in italiano scritto per le statistiche.
const it = new Intl.NumberFormat('de-DE');
/** 75075 → "75.075". */
export const fmt = (n: number) => it.format(Math.round(n));
/** 403000 → "403K" (formato breve, per i dati che la piattaforma mostra già arrotondati). */
export const fmtShort = (n: number) => (n >= 1000 ? `${new Intl.NumberFormat('it-IT', { maximumFractionDigits: 1 }).format(Math.floor(n / 100) / 10)}K` : fmt(n));
export const fmtPct = (n: number) => `${new Intl.NumberFormat('it-IT', { maximumFractionDigits: 1 }).format(n)}%`;
export function formatDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}
export const mailto = (email: string, subject: string, body = '') =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
