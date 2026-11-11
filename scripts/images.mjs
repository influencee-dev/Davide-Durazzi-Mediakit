// Rigenera le immagini ottimizzate da _drive/ (sorgenti originali). Uso: node scripts/images.mjs
import sharp from 'sharp';
const D = '../_drive/', O = 'public/images/';
const w = (src, out, opts) => sharp(D + src).rotate().resize(opts).webp({ quality: 78 }).toFile(O + out);
await Promise.all([
  // Copertine: TikTok più visto (ritaglio dallo screenshot), frame del video Supra, avatar del canale Motori in 60 secondi
  sharp(D + 'tiktok-migliori.jpg').extract({ left: 159, top: 771, width: 216, height: 287 }).resize(432, 574).webp({ quality: 85 }).toFile(O + 'cover-tiktok-top.webp'),
  w('supra.jpg', 'cover-supra.webp', { width: 600, height: 800 }),
  w('m60.jpg', 'cover-m60.webp', { width: 600, height: 600 }),
  // Sfida plug-in, puntata 1 (miniatura YouTube): ritaglio 4:3 centrato sul volto, per la card orizzontale
  sharp(D + 'sfida-oar2.jpg').extract({ left: 0, top: 500, width: 1080, height: 810 }).resize(800, 600).webp({ quality: 82 }).toFile(O + 'cover-sfida.webp'),
  sharp(D + 'logo.png').resize(800, 800).webp({ quality: 90 }).toFile(O + 'logo-800.webp'),
  // Chi è: Davide che ride nella piscina di palline, 4:5
  // versione ad alta risoluzione (1254x1254): ritaglio 4:5 centrato sul volto
  sharp(D + 'piscina-hd.webp').extract({ left: 100, top: 0, width: 1003, height: 1254 }).resize(560, 700).webp({ quality: 80 }).toFile(O + 'davide-chi-e-560.webp'),
  sharp(D + 'piscina-hd.webp').extract({ left: 100, top: 0, width: 1003, height: 1254 }).resize(900, 1125).webp({ quality: 80 }).toFile(O + 'davide-chi-e-900.webp'),
]);
await sharp(D + 'logo.png').resize(192, 192).png().toFile(O + 'logo-192.png');
await sharp(D + 'logo.png').resize(512, 512).png().toFile('public/favicon.png');
await sharp(D + 'logo.png').resize(180, 180).flatten({ background: '#04060d' }).png().toFile('public/apple-touch-icon.png');
// Anteprima social 1200x630
const photo = await sharp(D + '01-profilo.jpg').resize(630, 630).toBuffer(); // anteprima social: ritratto
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0A1022"/><stop offset="1" stop-color="#04060D"/></linearGradient>
<linearGradient id="f" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#04060D" stop-opacity="1"/><stop offset="1" stop-color="#04060D" stop-opacity="0"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<rect x="60" y="64" width="64" height="6" fill="#7B97FF"/>
<text x="60" y="130" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" letter-spacing="4" fill="#7B97FF">MEDIA KIT 2026</text>
<text x="60" y="260" font-family="Arial, Helvetica, sans-serif" font-size="92" font-weight="800" fill="#EEF1F8">Davide</text>
<text x="60" y="352" font-family="Arial, Helvetica, sans-serif" font-size="92" font-weight="800" fill="#EEF1F8">Durazzi</text>
<text x="60" y="440" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#A3AECB">Tecnologia, AI, gaming e motori.</text>
<text x="60" y="482" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#A3AECB">Provati davvero, raccontati in prima persona.</text>
<text x="60" y="566" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#FF8A4C">davidedurazzi.it</text></svg>`;
await sharp(Buffer.from(svg)).composite([{ input: photo, left: 570, top: 0 }, { input: Buffer.from(`<svg width="1200" height="630"><defs><linearGradient id="f" x1="0" y1="0" x2="1" y2="0"><stop offset="0.45" stop-color="#04060D" stop-opacity="1"/><stop offset="0.62" stop-color="#04060D" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="630" fill="url(#f)"/></svg>`) }]).jpeg({ quality: 85 }).toFile('public/og-image.jpg');
console.log('ok');
