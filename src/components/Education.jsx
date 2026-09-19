// ═══════════════════════════════════════════════════════════════
// src/components/Education.jsx
//
// Compact education section shown directly below About.
// Uses a reduced top padding so it reads as a continuation
// of the About section rather than a fully separate block.
//
// DATA: defined inline (single university, no external file needed).
//       If you add more qualifications, extract to src/data/education.js.
// ═══════════════════════════════════════════════════════════════
import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'

// Education data — update here if institution/dates change
const EDUCATION = {
  degree:      'BS Artificial Intelligence',
  institution: 'DHA Suffa University',
  location:    'Karachi, Pakistan',
  period:      'Oct 2023 – Present',
  rollNo:      'AI231001',
  // Courses shown as small tag pills
  courses: [
    'Data Structures & Algorithms',
    'Machine Learning',
    'Computer Vision',
    'NLP',
    'Deep Learning',
    'Databases',
  ],
}

export default function Education() {
  return (
    <div id="education">
      {/* paddingTop: 0 — visually continues from the About section above */}
      <div className="sec" style={{ paddingTop: 0 }}>

        {/* ── Mini section heading (smaller than full SectionHead) ── */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <div className="sec-eyebrow">Academic Background</div>
            <h3
              style={{
                fontFamily:          "'Cinzel', serif",
                fontSize:            '1.4rem',
                fontWeight:          700,
                background:          'linear-gradient(135deg, #a07820, #f0d060)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing:       '.05em',
              }}
            >
              Education
            </h3>
            <div
              style={{
                width:      48,
                height:     '1.5px',
                background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                margin:     '.65rem auto 0',
              }}
            />
          </div>
        </Reveal>

        {/* ── Education card ─────────────────────────────────── */}
        <Reveal delay={1}>
          <div className="gc edu-card">

            {/* Gold icon badge */}
            <div className="edu-icon" aria-hidden="true">
              <GraduationCap size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <div className="edu-degree">{EDUCATION.degree}</div>
              <div className="edu-inst">
                {EDUCATION.institution}, {EDUCATION.location}
              </div>
              <div className="edu-meta">
                {EDUCATION.period} · Roll No: {EDUCATION.rollNo}
              </div>

              {/* Course tag pills */}
              <div className="edu-tags" aria-label="Courses">
                {EDUCATION.courses.map((course, i) => (
                  <span key={i} className="edu-tag">{course}</span>
                ))}
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </div>
  )
}
