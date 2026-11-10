import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { creator } from './src/data/creator';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Titolo, descrizione, anteprima social e dati strutturati generati da src/data/creator.ts. */
function mediaKit(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/+$/, '');
  return {
    name: 'media-kit',
    transformIndexHtml(html) {
      const abs = (p: string) => (base ? `${base}${p}` : p);
      const jsonLd = JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: creator.name,
          url: creator.website,
          jobTitle: 'Content creator',
          email: creator.email,
          sameAs: creator.socials.map((s) => s.url),
        },
        null,
        2,
      );
      const map: Record<string, string> = {
        '%MK_TITLE%': esc(creator.seo.title),
        '%MK_DESCRIPTION%': esc(creator.seo.description),
        '%MK_NAME%': esc(creator.name),
        '%MK_OG_ALT%': esc(`${creator.name}, media kit 2026`),
        '%MK_OG_IMAGE%': abs('/og-image.jpg'),
      };
      let out = html;
      for (const [k, v] of Object.entries(map)) out = out.replaceAll(k, v);
      const head = [
        `<script type="application/ld+json">${jsonLd}</script>`,
        base ? `<link rel="canonical" href="${base}/" />\n    <meta property="og:url" content="${base}/" />` : '',
      ].join('\n    ');
      return out.replace('<!--MK_HEAD-->', head);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: './',
    plugins: [react(), tailwindcss(), mediaKit(env.SITE_URL ?? '')],
    build: { target: 'es2020', cssCodeSplit: true },
  };
});
