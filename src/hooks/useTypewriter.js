// ═══════════════════════════════════════════════════════════════
// src/hooks/useTypewriter.js
//
// Custom React hook — cycles through role strings with a
// typewriter animation (type → pause → delete → next role).
//
// HOW IT WORKS (state machine):
//   fwd = true  → add one character every TYPING_SPEED ms
//                 when fully typed → pause → fwd = false
//   fwd = false → remove one character every DELETE_SPEED ms
//                 when empty → advance to next role → fwd = true
//
// USAGE:
//   const displayed = useTypewriter()
//   // returns the current partial string, e.g. "AI Engin"
// ═══════════════════════════════════════════════════════════════
import { useState, useEffect } from 'react'

// Roles that cycle through the animation — edit here to change them
const ROLES = [
  'AI Engineer',
  'Machine Learning Practitioner',
  'Backend Developer',
  'Generative AI Enthusiast',
]

const TYPING_SPEED  = 65    // ms per character typed
const DELETE_SPEED  = 35    // ms per character deleted (faster than typing)
const PAUSE_AFTER   = 2000  // ms to hold the completed word

export function useTypewriter() {
  const [roleIdx,   setRoleIdx]   = useState(0)     // which role we're on
  const [displayed, setDisplayed] = useState('')    // current visible string
  const [forward,   setForward]   = useState(true)  // true = typing, false = deleting

  useEffect(() => {
    const role = ROLES[roleIdx]

    if (forward) {
      if (displayed.length < role.length) {
        // Still characters to type → add the next one
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          TYPING_SPEED
        )
        return () => clearTimeout(t)
      } else {
        // Fully typed → pause, then start deleting
        const t = setTimeout(() => setForward(false), PAUSE_AFTER)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        // Still characters to delete → remove the last one
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          DELETE_SPEED
        )
        return () => clearTimeout(t)
      } else {
        // Fully deleted → move to the next role
        setRoleIdx(prev => (prev + 1) % ROLES.length)
        setForward(true)
      }
    }
  }, [displayed, forward, roleIdx])

  return displayed
}
