/**
 * Forme geometriche (triangoli, quadrati, cerchi) che vagano lentamente dietro ai contenuti.
 * Livello fisso, decorativo, sotto le card: solo trasformazioni CSS, nessun JavaScript.
 * Con "riduci movimento" restano ferme.
 */
type Shape = { kind: 'tri' | 'sq' | 'circ' | 'sqf'; x: number; y: number; size: number; color: 'blue' | 'orange'; anim: 'a' | 'b' | 'c'; dur: number; delay: number; hideOnMobile?: boolean };

const SHAPES: Shape[] = [
  { kind: 'tri', x: 6, y: 18, size: 54, color: 'blue', anim: 'a', dur: 38, delay: 0 },
  { kind: 'sq', x: 90, y: 12, size: 40, color: 'orange', anim: 'b', dur: 44, delay: -8 },
  { kind: 'circ', x: 82, y: 38, size: 28, color: 'blue', anim: 'c', dur: 36, delay: -14 },
  { kind: 'tri', x: 93, y: 62, size: 66, color: 'orange', anim: 'b', dur: 52, delay: -20 },
  { kind: 'sqf', x: 12, y: 46, size: 14, color: 'orange', anim: 'c', dur: 30, delay: -5 },
  { kind: 'sq', x: 4, y: 74, size: 58, color: 'blue', anim: 'a', dur: 48, delay: -26, hideOnMobile: true },
  { kind: 'tri', x: 48, y: 88, size: 36, color: 'blue', anim: 'c', dur: 40, delay: -11, hideOnMobile: true },
  { kind: 'sqf', x: 70, y: 82, size: 12, color: 'blue', anim: 'a', dur: 34, delay: -17 },
  { kind: 'circ', x: 30, y: 8, size: 22, color: 'orange', anim: 'b', dur: 42, delay: -3, hideOnMobile: true },
  { kind: 'sq', x: 58, y: 30, size: 30, color: 'orange', anim: 'c', dur: 56, delay: -30, hideOnMobile: true },
];

const COLOR = { blue: '#7B97FF', orange: '#FF8A4C' };

function Glyph({ kind, color }: { kind: Shape['kind']; color: string }) {
  const common = { fill: 'none', stroke: color, strokeWidth: 2.5, strokeLinejoin: 'round' as const };
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true" focusable="false">
      {kind === 'tri' && <path d="M50 10 L92 86 H8 Z" {...common} />}
      {kind === 'sq' && <rect x="12" y="12" width="76" height="76" {...common} />}
      {kind === 'circ' && <circle cx="50" cy="50" r="38" {...common} />}
      {kind === 'sqf' && <rect x="20" y="20" width="60" height="60" fill={color} />}
    </svg>
  );
}

export function Floaters() {
  return (
    <div aria-hidden="true" className="floaters pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {SHAPES.map((s, i) => (
        <span
          key={i}
          className={`floater floater-${s.anim} absolute ${s.hideOnMobile ? 'hidden md:block' : ''}`}
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, animationDuration: `${s.dur}s`, animationDelay: `${s.delay}s`, opacity: s.kind === 'sqf' ? 0.35 : 0.28 }}
        >
          <Glyph kind={s.kind} color={COLOR[s.color]} />
        </span>
      ))}
    </div>
  );
}
