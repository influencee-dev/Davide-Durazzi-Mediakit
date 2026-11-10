# Media kit — Davide Durazzi

Vite + React + Tailwind + motion. Base: skill `mediakit-gaming`, ridisegnata per Davide.

## Comandi
- `npm install` — installa le dipendenze
- `npm run dev` — anteprima su http://localhost:3001
- `npm run build` — compila in `dist/` (pronto da pubblicare)
- `npm run images` — rigenera le immagini ottimizzate da `../_drive/`

## Aggiornare numeri e testi
Tutto sta in `src/data/creator.ts`: cambia `value`, `period` e `updatedAt`, niente altro.
Regole: nessun dato inventato, Twitch senza statistiche, piattaforme mai sommate, affiliazioni distinte dalle collaborazioni.

## Pubblicare
Vercel: importa la cartella (framework Vite, build `npm run build`, output `dist`) e imposta `SITE_URL` con il dominio definitivo (serve per l'anteprima social).

## Colori e font
Ricavati dai CSS di davidedurazzi.it: sfondo `#04060D`, `#0A1022`, `#0E1530`; testo `#EEF1F8`; blu `#7B97FF`; arancio `#FF8A4C`. Font Archivo + Source Serif 4.
