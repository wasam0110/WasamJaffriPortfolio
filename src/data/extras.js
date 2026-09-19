// ═══════════════════════════════════════════════════════════════
// src/data/extras.js
//
// Extracurricular activity cards.
// Same pattern as info.js — Icon component reference + text.
// ═══════════════════════════════════════════════════════════════
import { Trophy, Dumbbell, Activity } from 'lucide-react'

/** @type {{ Icon: React.ComponentType<any>, text: string }[]} */
export const EXTRAS = [
  { Icon: Trophy,   text: 'Runner-Up – 15th DSU Inter-Dept Box Cricket Championship 2025 (Captain)' },
  { Icon: Activity, text: 'Badminton' },
  { Icon: Activity, text: 'Football' },
  { Icon: Activity, text: 'Table Tennis' },
  { Icon: Dumbbell, text: 'Gym' },
]
