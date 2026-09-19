// ═══════════════════════════════════════════════════════════════
// src/components/Extracurricular.jsx
// DATA SOURCE: src/data/extras.js
// ═══════════════════════════════════════════════════════════════
import Reveal      from './Reveal'
import SectionHead from './SectionHead'
import { EXTRAS }  from '../data/extras'

export default function Extracurricular() {
  return (
    <div id="extra">
      <div className="sec">
        <SectionHead label="Outside the Code" title="Extracurricular" />

        <div className="extra-grid">
          {EXTRAS.map(({ Icon, text }, i) => (
            <Reveal key={i} delay={(i % 5) + 1}>
              <div className="gc extra-card">
                <div className="extra-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <div className="extra-t">{text}</div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  )
}
