// ═══════════════════════════════════════════════════════════════
// src/components/Projects.jsx
//
// Projects section — two-tier layout:
//   1. Featured row (feat: true) — 3 larger cards, gold border
//   2. Regular grid (feat: false) — compact auto-fill grid
//
// DATA SOURCE: src/data/projects.js
//   Each project may have an optional `demo` URL.
//   When present → "Live Demo ↗" button (brighter outline).
//   When absent  → "View ↗" links to the GitHub repo.
//
// SECURITY:
//   All hrefs are from the static PROJECTS data array.
//   External links use rel="noreferrer noopener".
// ═══════════════════════════════════════════════════════════════
import { Github, Star } from 'lucide-react'
import Reveal      from './Reveal'
import SectionHead from './SectionHead'
import { PROJECTS } from '../data/projects'

/** Base GitHub URL — update if username changes */
const GH_BASE = 'https://github.com/wasam0110'

export default function Projects() {
  const featured = PROJECTS.filter(p => p.feat)
  const regular  = PROJECTS.filter(p => !p.feat)

  return (
    <div id="projects">
      <div className="sec">
        <SectionHead label="What I've Built" title="Projects" />

        {/* ── Featured cards (larger, gold border) ─────────── */}
        <div className="feat-grid">
          {featured.map((project, i) => (
            <Reveal key={i} delay={Math.min(i + 1, 6)}>
              <div className="gc feat-card">

                {/* ★ Featured badge */}
                <div className="feat-badge">
                  <Star size={9} fill="currentColor" aria-hidden="true" />
                  Featured
                </div>

                <div className="proj-name-lg">{project.name}</div>
                <div className="proj-desc">{project.desc}</div>

                {/* Tech stack badges */}
                <div className="proj-badges" aria-label="Tech stack">
                  {project.badges.map((badge, j) => (
                    <span key={j} className="badge">{badge}</span>
                  ))}
                </div>

                <div className="proj-acts">
                  <a
                    href={`${GH_BASE}/${project.name}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-g btn-sm"
                    aria-label={`${project.name} GitHub repo`}
                  >
                    <Github size={11} />
                    <span>GitHub</span>
                  </a>
                  {/* Live demo if available, otherwise GitHub */}
                  <a
                    href={project.demo || `${GH_BASE}/${project.name}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-o btn-sm"
                    aria-label={project.demo ? `${project.name} live demo` : `${project.name} view on GitHub`}
                  >
                    <span>{project.demo ? 'Live Demo ↗' : 'View ↗'}</span>
                  </a>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Regular projects grid ─────────────────────────── */}
        <div className="more-label" aria-label="More projects">More Projects</div>
        <div className="proj-grid">
          {regular.map((project, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <div className="gc proj-card">

                {/* Zero-padded counter */}
                <div className="proj-num">
                  PROJECT_{String(i + 1).padStart(2, '0')}
                </div>

                <div className="proj-name">{project.name}</div>
                <div className="proj-desc">{project.desc}</div>

                <div className="proj-badges" aria-label="Tech stack">
                  {project.badges.map((badge, j) => (
                    <span key={j} className="badge">{badge}</span>
                  ))}
                </div>

                <div className="proj-acts">
                  <a
                    href={`${GH_BASE}/${project.name}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-g btn-sm"
                    aria-label={`${project.name} GitHub repo`}
                  >
                    <Github size={11} />
                    <span>GitHub</span>
                  </a>

                  {/* Highlighted outline when a live demo exists */}
                  <a
                    href={project.demo || `${GH_BASE}/${project.name}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-o btn-sm"
                    style={project.demo
                      ? { borderColor: 'rgba(212,175,55,.55)', color: 'var(--gold-l)' }
                      : {}
                    }
                    aria-label={project.demo ? `${project.name} live demo` : `${project.name} view`}
                  >
                    <span>{project.demo ? 'Live Demo ↗' : 'View ↗'}</span>
                  </a>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  )
}
