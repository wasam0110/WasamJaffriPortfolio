// ═══════════════════════════════════════════════════════════════
// src/App.jsx — Root Component
//
// Top of the React component tree.
// Owns all global state and assembles every section in order.
//
// STATE OWNED HERE:
//   loaded    → controls Loader fade-out (after 2.3s)
//   menuOpen  → mobile hamburger menu open/close
//   scrollY   → pixels scrolled (passed to Navbar, BackToTop)
//   progress  → scroll % (passed to progress bar)
//
// SECTION ORDER (matches visual layout top → bottom):
//   Hero → Experience → About → Education → Skills →
//   Projects → Certifications → Extracurricular → Contact → Footer
// ═══════════════════════════════════════════════════════════════
import { useState, useEffect } from 'react'

// ── Layout / Utility ─────────────────────────────────────────
import Loader      from './components/Loader'
import Navbar      from './components/Navbar'
import Particles   from './components/Particles'
import BackToTop   from './components/BackToTop'
import ChatWidget  from './components/ChatWidget'

// ── Page Sections ─────────────────────────────────────────────
import Hero            from './components/Hero'
import Experience      from './components/Experience'
import About           from './components/About'
import Education       from './components/Education'
import Skills          from './components/Skills'
import Projects        from './components/Projects'
import Certifications  from './components/Certifications'
import Extracurricular from './components/Extracurricular'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

// ── Custom Hook ───────────────────────────────────────────────
import { useScrollProgress } from './hooks/useScrollProgress'

export default function App() {

  // ── State ──────────────────────────────────────────────────
  const [loaded,   setLoaded]   = useState(false)  // hides loader when true
  const [menuOpen, setMenuOpen] = useState(false)  // mobile nav toggle
  const { scrollY, progress }   = useScrollProgress()

  // ── Effects ────────────────────────────────────────────────
  // Hide loader after 2.3s — matches the CSS fill-bar animation
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2300)
    return () => clearTimeout(timer)  // cleanup on unmount
  }, [])

  // ── Render ─────────────────────────────────────────────────
  return (
    <div style={{ background: '#060606', minHeight: '100vh' }}>

      {/* ── Loader overlay ──────────────────────────────────── */}
      <Loader loaded={loaded} />

      {/* ── Scroll progress bar (top of page) ──────────────── */}
      <div
        className="prog"
        style={{ width: `${Math.min(progress, 100)}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* ── Floating background particles ───────────────────── */}
      <Particles />

      {/* ── Fixed navigation bar ────────────────────────────── */}
      <Navbar
        scrollY={scrollY}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* ── Page content ────────────────────────────────────── */}
      <div className="wrap">

        <Hero />

        <div className="divider" />
        <Experience />

        <div className="divider" />
        <About />
        {/* Education follows immediately below About (no divider — shared visual weight) */}
        <Education />

        <div className="divider" />
        <Skills />

        <div className="divider" />
        <Projects />

        <div className="divider" />
        <Certifications />

        <div className="divider" />
        <Extracurricular />

        <div className="divider" />
        <Contact />

        <Footer />

      </div>

      {/* ── Floating UI (always on top) ─────────────────────── */}
      {/* Chat widget — only renders when VITE_CHAT_ENABLED=true */}
      <ChatWidget />

      {/* Back-to-top button — visible after 400px scroll */}
      <BackToTop scrollY={scrollY} />

    </div>
  )
}
