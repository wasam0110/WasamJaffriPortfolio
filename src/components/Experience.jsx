// ═══════════════════════════════════════════════════════════════
// src/components/Experience.jsx
//
// Work experience section — vertical timeline layout.
//
// LAYOUT:
//   .exp-wrap → container with left padding for the timeline line
//     .exp-wrap::before → the vertical gold line (CSS pseudo-element)
//     .exp-node → the pulsing dot on the line (absolutely positioned)
//     .exp-card (.gc) → glass card with role, bullets, and tags
//
// DATA SOURCE: src/data/experience.js
//
// Each card shows:
//   - Role (Cinzel serif, gold-l)
//   - Company (JetBrains Mono)
//   - Period · Location
//   - "Active" + type pills
//   - One-sentence description
//   - 3-4 bullet achievements
//   - Tech stack tags
// ═══════════════════════════════════════════════════════════════
import Reveal      from './Reveal'
import SectionHead from './SectionHead'
import { EXPERIENCE } from '../data/experience'

export default function Experience() {
  return (
    <div id="experience">
      <div className="sec">
        <SectionHead label="Professional" title="Experience" />

        {/* Timeline wrapper — the vertical line is a CSS ::before */}
        <div className="exp-wrap">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={i} delay={Math.min(i + 1, 6)}>
              <div className="gc exp-card">

                {/* Pulsing dot on the timeline line */}
                <div className="exp-node" aria-hidden="true" />

                {/* ── Card header ──────────────────────────── */}
                <div className="exp-head">
                  <div>
                    <div className="exp-role">{job.role}</div>
                    <div className="exp-co">{job.company}</div>
                    <div className="exp-period">
                      {job.period} · {job.location}
                    </div>
                  </div>

                  {/* Status pills */}
                  <div className="exp-pills">
                    <span className="pill pill-active">Active</span>
                    <span className="pill pill-type">{job.type}</span>
                  </div>
                </div>

                {/* ── Description ──────────────────────────── */}
                <div className="exp-desc">{job.desc}</div>

                {/* ── Achievement bullets ───────────────────── */}
                <ul className="exp-bullets" aria-label="Achievements">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>

                {/* ── Tech stack tags ───────────────────────── */}
                <div className="exp-tags" aria-label="Technologies used">
                  {job.tags.map((tag, j) => (
                    <span key={j} className="exp-tag">{tag}</span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
