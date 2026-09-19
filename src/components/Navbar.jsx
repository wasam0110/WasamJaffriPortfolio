// ═══════════════════════════════════════════════════════════════
// src/components/Navbar.jsx
//
// Fixed top navigation bar with desktop links and a mobile
// hamburger menu.
//
// PROPS:
//   scrollY    {number}   — adds .solid background past 60px
//   menuOpen   {boolean}  — mobile menu open/closed state
//   setMenuOpen {Function} — toggles menuOpen in App.jsx
//
// SECURITY:
//   All navigation targets come from the static NAV_ITEMS array,
//   never from user input, so no injection risk.
// ═══════════════════════════════════════════════════════════════
import { scrollToSection } from '../utils/scroll'

// Section ids to scroll to — order here = order in the navbar
// Note: "about" maps to the element id "info" (legacy id kept)
const NAV_ITEMS = [
  { label: 'experience',    id: 'experience' },
  { label: 'skills',        id: 'skills' },
  { label: 'projects',      id: 'projects' },
  { label: 'contact',       id: 'contact' },
  { label: 'about',         id: 'info' },
]

export default function Navbar({ scrollY, menuOpen, setMenuOpen }) {
  const handleNav = (id) => {
    scrollToSection(id)
    setMenuOpen(false)   // close mobile menu after selecting a link
  }

  return (
    <>
      {/* ── Fixed top bar ──────────────────────────────────── */}
      <nav className={`nav${scrollY > 60 ? ' solid' : ''}`}>

        {/* Logo — scrolls back to top on click */}
        <div
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          SMW
        </div>

        {/* Desktop links (hidden on mobile via CSS) */}
        <div className="nav-links">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              className="nl"
              onClick={() => handleNav(id)}
              aria-label={`Scroll to ${label} section`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Hamburger — shown only on mobile (CSS display:none on desktop) */}
        <button
          className="hbg"
          style={{ display: 'none' }}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </nav>

      {/* ── Mobile dropdown ────────────────────────────────── */}
      {menuOpen && (
        <div className="mmenu open" role="navigation" aria-label="Mobile menu">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              className="mml"
              onClick={() => handleNav(id)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
