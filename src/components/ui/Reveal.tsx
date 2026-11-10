import { motion, type HTMLMotionProps } from 'motion/react';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; delay?: number; y?: number; className?: string } & Omit<HTMLMotionProps<'div'>, 'children'>;

/** Entrata progressiva allo scroll. Con "riduci movimento" MotionConfig la rende istantanea. */
export function Reveal({ children, delay = 0, y = 28, className, ...rest }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Titolo che si svela riga per riga (maschera + scorrimento verso l'alto). Il trigger sta sul contenitore, non sulle righe (che sono ritagliate). */
export function LineReveal({ lines, className }: { lines: ReactNode[]; className?: string }) {
  return (
    <motion.span className={className} initial="hide" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ staggerChildren: 0.1 }}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em]">
          <motion.span
            className="block"
            variants={{ hide: { y: '105%' }, show: { y: 0 } }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
