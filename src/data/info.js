// ═══════════════════════════════════════════════════════════════
// src/data/info.js
//
// Cards for the "About Me" info grid.
// Each item pairs a Lucide React icon component with a label.
//
// Icon components are stored as references (not rendered yet).
// The About component renders each with: <Icon size={15} />
// ═══════════════════════════════════════════════════════════════
import {
  MapPin,
  GraduationCap,
  Building2,
  Briefcase,
  Code2,
  BrainCircuit,
  Zap,
  Terminal,
} from 'lucide-react'

/** @type {{ Icon: React.ComponentType<any>, label: string }[]} */
export const INFO_ITEMS = [
  { Icon: MapPin,         label: 'Karachi, Pakistan' },
  { Icon: GraduationCap,  label: 'BS Artificial Intelligence' },
  { Icon: Building2,      label: 'DHA Suffa University' },
  { Icon: Briefcase,      label: 'Backend AI Engineer @ FlyrankAI' },
  { Icon: Code2,          label: 'Backend Development' },
  { Icon: BrainCircuit,   label: 'AI/ML Development' },
  { Icon: Zap,            label: 'LLM & RAG Enthusiast' },
  { Icon: Terminal,       label: 'Competitive Programmer' },
]
