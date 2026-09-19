// ═══════════════════════════════════════════════════════════════
// src/components/About.jsx
//
// "About Me" info grid — small cards each with an icon + label.
// DATA SOURCE: src/data/info.js
//
// Icons are Lucide React components stored as references in the
// data array. <Icon /> renders them dynamically here.
// ═══════════════════════════════════════════════════════════════
import Reveal      from './Reveal'
import SectionHead from './SectionHead'
import { INFO_ITEMS } from '../data/info'

export default function About() {
  return (
    <div id="info">
      <div className="sec">
        <SectionHead label="Who I Am" title="About" />

        <div className="info-grid">
          {INFO_ITEMS.map(({ Icon, label }, i) => (
            // Stagger delays cycle through d1–d4 for the grid
            <Reveal key={i} delay={(i % 4) + 1}>
              <div className="gc info-item">

                {/* Icon container */}
                <div className="info-icon-box" aria-hidden="true">
                  <Icon size={15} strokeWidth={1.8} />
                </div>

                <span className="info-txt">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
