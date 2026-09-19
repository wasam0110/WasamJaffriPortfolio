// ═══════════════════════════════════════════════════════════════
// src/components/Certifications.jsx
// DATA SOURCE: src/data/certifications.js
// ═══════════════════════════════════════════════════════════════
import Reveal      from './Reveal'
import SectionHead from './SectionHead'
import { CERTS }   from '../data/certifications'

export default function Certifications() {
  return (
    <div id="certifications">
      <div className="sec">
        <SectionHead label="Credentials" title="Certifications" />

        <div className="cert-grid">
          {CERTS.map((cert, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <div className="gc cert-card">
                {/* Abbreviation badge */}
                <div className="cert-ico" aria-hidden="true">{cert.ico}</div>
                <div className="cert-name">{cert.name}</div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  )
}
