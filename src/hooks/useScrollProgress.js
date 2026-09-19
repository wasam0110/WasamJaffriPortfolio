// ═══════════════════════════════════════════════════════════════
// src/hooks/useScrollProgress.js
//
// Tracks the user's vertical scroll position and calculates
// how far through the page they are as a percentage.
//
// Returns:
//   scrollY   → pixels scrolled from top (e.g. 340)
//   progress  → 0–100 % of total scrollable height
//
// Used by:
//   App.jsx   → Navbar (solid bg past 60px), progress bar, BackToTop
// ═══════════════════════════════════════════════════════════════
import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [scrollY,  setScrollY]  = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y         = window.scrollY
      const totalScrollable =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      setScrollY(y)
      // Guard against divide-by-zero on very short pages
      setProgress(totalScrollable > 0 ? (y / totalScrollable) * 100 : 0)
    }

    // passive: true → browser can scroll without waiting for our handler
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, progress }
}
