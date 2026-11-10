// Rigenera le immagini ottimizzate da _drive/ (sorgenti originali). Uso: node scripts/images.mjs
import sharp from 'sharp';
const D = '../_drive/', O = 'public/images/';
const w = (src, out, opts) => sharp(D + src).rotate().resize(opts).webp({ quality: 78 }).toFile(O + out);
await Promise.all([
  // Hero: ritratto in auto, quadrato, volto in alto a destra
  w('01-profilo.jpg', 'davide-hero-640.webp', { width: 640, height: 640 }),
  w('01-profilo.jpg', 'davide-hero-1000.webp', { width: 1000, height: 1000 }),
  // Chi è: ritratto verticale 4:5
  w('02-auto.jpg', 'davide-auto-560.webp', { width: 560, height: 700, position: 'attention' }),
  w('02-auto.jpg', 'davide-auto-900.webp', { width: 900, height: 1125, position: 'attention' }),
]);
await sharp(D + 'logo.png').resize(192, 192).png().toFile(O + 'logo-192.png');
await sharp(D + 'logo.png').resize(512, 512).png().toFile('public/favicon.png');
await sharp(D + 'logo.png').resize(180, 180).flatten({ background: '#04060d' }).png().toFile('public/apple-touch-icon.png');
// Anteprima social 1200x630
const photo = await sharp(D + '01-profilo.jpg').resize(630, 630).toBuffer();
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
