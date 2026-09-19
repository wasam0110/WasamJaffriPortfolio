// ═══════════════════════════════════════════════════════════════
// src/components/Particles.jsx
//
// Decorative floating gold dots in the page background.
// Purely visual — no props, no state, no user interaction.
//
// Each dot's position, size, speed and delay come from
// src/data/particles.js and are applied as inline styles.
// The @keyframes pt-float animation is defined in main.css.
//
// aria-hidden="true" → screen readers skip this element entirely
// pointer-events: none (CSS) → clicks pass straight through
// ═══════════════════════════════════════════════════════════════
import { PARTICLES } from '../data/particles'

export default function Particles() {
  return (
    <div className="pts" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="pt"
          style={{
            left:              p.left,
            width:             p.size,
            height:            p.size,
            animationDuration: `${p.dur}s`,
            animationDelay:    `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
