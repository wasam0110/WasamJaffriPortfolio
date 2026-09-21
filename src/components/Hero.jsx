// ═══════════════════════════════════════════════════════════════
// src/components/Hero.jsx
//
// Full-viewport landing section — the first thing visitors see.
//
// USES:
//   useTypewriter() — returns the animated partial role string
//   scrollToSection() — smooth-scrolls to other sections
//
// The .fi / .fi1–.fi4 classes in main.css stagger the entrance
// of each block: badge → name → role → bio → buttons.
//
// SECURITY:
//   All href values are hardcoded strings from this file.
//   External links use rel="noreferrer noopener" to prevent
//   the linked page from accessing window.opener (tab-napping).
// ═══════════════════════════════════════════════════════════════
import { Github, Linkedin, Download } from 'lucide-react'
import { useTypewriter }   from '../hooks/useTypewriter'
import { scrollToSection } from '../utils/scroll'

export default function Hero() {
  const displayed = useTypewriter()

  return (
    <section className="hero" id="home">

      {/* Subtle hex-grid background texture */}
      <div className="hex-bg" aria-hidden="true" />

      <div style={{ maxWidth: 780, margin: '0 auto' }}>

        {/* ── Badge pill ────────────────────────────────────── */}
        <div className="fi">
          <div className="hero-tag">
            <span
              aria-hidden="true"
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--gold)', display: 'inline-block',
                boxShadow: '0 0 8px var(--gold)',
              }}
            />
            AI · ML · Backend · GenAI
          </div>
        </div>

        {/* ── Full name ─────────────────────────────────────── */}
        <h1 className="hero-name fi1">
          SYED WASAM  JAFFRI
        </h1>

        {/* ── Typewriter role ───────────────────────────────── */}
        <div className="hero-role fi2" aria-live="polite" aria-atomic="true">
          <span aria-hidden="true" style={{ color: 'rgba(212,175,55,.4)', marginRight: 6 }}>▸</span>
          {displayed}
          {/* Blinking cursor — @keyframes blink in main.css */}
          <span className="cursor" aria-hidden="true">_</span>
        </div>

        {/* ── Bio ───────────────────────────────────────────── */}
        <p className="hero-bio fi3">
          AI and Machine Learning practitioner with strong foundations in Data
          Structures, Algorithms, backend development, and AI-driven
          applications. Passionate about LLMs, RAG systems, and solving
          real-world problems through technology.
        </p>

        {/* ── CTA buttons ───────────────────────────────────── */}
        <div className="hero-btns fi4">
          <button
            className="btn btn-g"
            onClick={() => scrollToSection('experience')}
          >
            <span>View Experience</span>
          </button>

          <button
            className="btn btn-o"
            onClick={() => scrollToSection('projects')}
          >
            <span>Projects</span>
          </button>

          {/* Resume — update href to your actual CV PDF path */}
          <a
            href="/WasamJaffri_Resume.pdf"
            download
            className="btn btn-o"
            aria-label="Download resume PDF"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>

          <a
            href="https://github.com/wasam0110"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-o"
            aria-label="GitHub profile"
          >
            <Github size={13} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/syed-wasam-jaffri"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-o"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={13} />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  )
}
