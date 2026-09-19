// ═══════════════════════════════════════════════════════════════
// src/components/Reveal.jsx
//
// Scroll-reveal wrapper component.
// Wraps any content block and fades + slides it up when it
// enters the viewport (powered by useInView → IntersectionObserver).
//
// PROPS:
//   children {ReactNode} — the content to animate in
//   delay    {number}    — stagger delay index (1-6) applied as
//                          CSS class d1–d6 (each adds 0.1s delay)
//   style    {object}    — extra inline styles on the wrapper div
//
// CSS classes (in main.css):
//   .reveal      — starts hidden (opacity:0, translateY 30px)
//   .reveal.vis  — becomes visible (opacity:1, translateY 0)
//   .reveal.d1–d6 — transition-delay 0.1s–0.6s for staggering
// ═══════════════════════════════════════════════════════════════
import { useInView } from '../hooks/useInView'

export default function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView()

  // Build CSS class string
  const delayClass = delay ? ` d${delay}` : ''
  const visClass   = visible ? ' vis' : ''

  return (
    <div
      ref={ref}
      className={`reveal${visClass}${delayClass}`}
      style={style}
    >
      {children}
    </div>
  )
}
