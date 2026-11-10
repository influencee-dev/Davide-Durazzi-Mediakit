import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { creator } from '../data/creator';
import { fmtShort, formatDate, mailto } from '../lib/format';
import { PlatformIcon } from './ui/PlatformIcon';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Luce e leggero parallax che seguono il puntatore: solo con mouse e senza "riduci movimento".
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty('--mx', `${x * 100}%`);
        el.style.setProperty('--my', `${y * 100}%`);
        if (photo.current) photo.current.style.transform = `translate3d(${(x - 0.5) * -14}px, ${(y - 0.5) * -10}px, 0)`;
      });
    };
    el.addEventListener('pointermove', move);
    return () => {
      el.removeEventListener('pointermove', move);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  const tk = creator.kpis[0];
  const ig = creator.audience.insights[0];

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32" style={{ ['--mx' as string]: '70%', ['--my' as string]: '30%' }}>
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_65%_at_var(--mx)_var(--my),#000_0%,transparent_75%)]" />
      <div aria-hidden="true" className="absolute -top-40 right-[-10%] -z-10 h-[620px] w-[620px] rounded-full bg-blue-deep/25 blur-[120px]" />
      <div aria-hidden="true" className="absolute bottom-0 left-[-10%] -z-10 h-[360px] w-[360px] rounded-full bg-orange/10 blur-[120px]" />

      <div className="wrap grid items-center gap-14 pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="kicker">
            {creator.hero.eyebrow}
            <span className="hidden font-medium tracking-normal text-muted normal-case sm:inline">· aggiornato al {formatDate(creator.updatedAt)}</span>
          </motion.p>
          <h1 className="h-display mt-7 text-[clamp(2.3rem,4.8vw,4.8rem)]">
            {creator.hero.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.1em]">
                <motion.span
                  className={`block ${i === 1 ? 'serif-i text-blue' : ''}`}
                  initial={{ y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {creator.hero.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href={mailto(creator.email, creator.emailSubject)} className="btn btn-primary">
              Proponi una collaborazione
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#numeri" className="btn btn-ghost">
              Guarda i numeri
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none"
        >
          <div ref={photo} className="relative transition-transform duration-300 ease-out will-change-transform">
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-paper">
              <img
                src="images/davide-hero-1000.webp"
                srcSet="images/davide-hero-640.webp 640w, images/davide-hero-1000.webp 1000w"
                sizes="(min-width: 1024px) 40vw, 90vw"
                width={1000}
                height={1000}
                alt="Davide Durazzi in auto, di profilo, con occhiali scuri"
                fetchPriority="high"
                className="aspect-square w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-scafo/20" />
              <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60 mix-blend-overlay" />
              {['left-3 top-3', 'right-3 top-3 rotate-90', 'right-3 bottom-3 rotate-180', 'left-3 bottom-3 -rotate-90'].map((p) => (
                <svg key={p} aria-hidden="true" viewBox="0 0 24 24" className={`absolute h-7 w-7 text-blue ${p}`} fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 10V2h8" />
                </svg>
              ))}
              <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-bg/80 px-3.5 py-2 text-xs font-bold backdrop-blur">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-ok" aria-hidden="true" />
                Diretta ogni martedì · 21:30
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="panel absolute -bottom-7 left-3 max-w-[210px] bg-scafo p-4 backdrop-blur sm:-left-8"
            >
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-muted uppercase">
                <PlatformIcon id="tiktok" className="h-3.5 w-3.5" /> TikTok · 60 giorni
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight">{fmtShort(tk.stat.value)}</p>
              <p className="text-xs text-muted">visualizzazioni dei post</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.8 }}
              className="panel absolute -top-5 right-3 max-w-[190px] bg-scafo p-4 backdrop-blur sm:-right-6"
            >
              <p className="text-3xl font-extrabold tracking-tight text-orange">{ig.value}</p>
              <p className="text-xs leading-snug text-muted">{ig.label}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="overflow-hidden border-y border-line bg-scafo/60 py-4" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-sm font-bold tracking-[0.18em] text-muted uppercase">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-12">
              {[...creator.hero.topics, 'Prove reali', 'Dirette', 'Progetti propri'].map((t) => (
                <span key={t + k} className="flex items-center gap-12">
                  {t}
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
