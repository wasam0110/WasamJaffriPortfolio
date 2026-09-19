// ═══════════════════════════════════════════════════════════════
// src/data/particles.js
//
// Config for the 14 floating gold particles in the background.
// left  → horizontal position (evenly spread)
// size  → diameter in px (cycles 1.5 / 2.5 / 3.5)
// dur   → animation duration in seconds (longer = slower)
// delay → start delay so they're staggered
// ═══════════════════════════════════════════════════════════════

/** @type {{ left:string, size:number, dur:number, delay:number }[]} */
export const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left:  `${i * 7.1 + 1}%`,
  size:  1.5 + (i % 3),
  dur:   9 + i * 1.4,
  delay: i * 0.85,
}))
