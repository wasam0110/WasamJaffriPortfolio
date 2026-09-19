// ═══════════════════════════════════════════════════════════════
// src/components/BackToTop.jsx
//
// Fixed ↑ button in the bottom-right corner.
// Fades in once the user scrolls past 400px.
//
// PROPS:
//   scrollY {number} — current scroll position from App.jsx
// ═══════════════════════════════════════════════════════════════
export default function BackToTop({ scrollY }) {
  return (
    <button
      className={`btt${scrollY > 400 ? ' on' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
    >
      ↑
    </button>
  )
}
