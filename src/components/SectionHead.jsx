// ═══════════════════════════════════════════════════════════════
// src/components/SectionHead.jsx
//
// Consistent section heading used by every major section.
// Wraps itself in <Reveal> so it animates in on scroll.
//
// PROPS:
//   label {string} — small eyebrow text above the title
//                    (e.g. "Professional", "What I've Built")
//   title {string} — main section heading in Cinzel serif
// ═══════════════════════════════════════════════════════════════
import Reveal from './Reveal'

export default function SectionHead({ label, title }) {
  return (
    <Reveal>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        {/* Small uppercase label above the heading */}
        {label && <div className="sec-eyebrow">{label}</div>}

        {/* Animated gold shimmer heading */}
        <h2 className="sec-title">{title}</h2>

        {/* Short centred gold rule beneath */}
        <div className="sec-rule" />
      </div>
    </Reveal>
  )
}
