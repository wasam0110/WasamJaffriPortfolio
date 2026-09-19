// ═══════════════════════════════════════════════════════════════
// src/hooks/useInView.js
//
// Custom hook — returns a ref and a boolean that turns true
// once the attached element enters the viewport.
//
// Used by the <Reveal> component to trigger scroll animations.
// Once visible, stays visible (no toggling back).
//
// USAGE:
//   const [ref, visible] = useInView()
//   <div ref={ref} style={{ opacity: visible ? 1 : 0 }}>...</div>
//
// @param {number} threshold - 0–1, how much of the element must
//   be visible before triggering (default 0.08 = 8%)
// ═══════════════════════════════════════════════════════════════
import { useState, useEffect, useRef } from 'react'

export function useInView(threshold = 0.08) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once in view, stay visible — don't animate in/out repeatedly
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    // Cleanup on unmount to avoid memory leaks
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
