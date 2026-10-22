import { Moon, Sun, Volume2, VolumeX } from 'lucide-react'
import { scrollToSection } from '../utils/scroll'

const NAV_ITEMS = [
  { label: 'experience', id: 'experience' },
  { label: 'skills', id: 'skills-matrix' },
  { label: 'projects', id: 'projects' },
  { label: 'contact', id: 'contact' },
  { label: 'about', id: 'info' },
]

export default function Navbar({ scrollY, menuOpen, setMenuOpen, theme, onToggleTheme, soundEnabled, onToggleSound }) {
  const handleNav = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }
  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  const ThemeIcon = theme === 'dark' ? Sun : Moon

  return (
    <>
      <nav className={`nav${scrollY > 60 ? ' solid' : ''}`}>
        <div
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={event => {
            if (event.key === 'Enter' || event.key === ' ') window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          aria-label="Syed Wasam Jaffri — scroll to top"
        >
          <img src="/logo.webp" width="30" height="30" alt="" loading="eager" decoding="async" />
          <span>Syed Wasam Jaffri</span>
        </div>

        <div className="nav-tools">
          <div className="nav-links">
            {NAV_ITEMS.map(({ label, id }) => (
              <button key={id} className="nl" onClick={() => handleNav(id)} aria-label={`Scroll to ${label} section`}>
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            aria-pressed={theme === 'dark'}
          >
            <ThemeIcon size={17} strokeWidth={1.8} aria-hidden="true" />
            <span className="theme-toggle-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
          <button
            type="button"
            className="theme-toggle sound-toggle"
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Turn interface sounds off' : 'Turn interface sounds on'}
            title={soundEnabled ? 'Interface sounds on' : 'Interface sounds off'}
            aria-pressed={soundEnabled}
          >
            {soundEnabled ? <Volume2 size={17} strokeWidth={1.8} aria-hidden="true" /> : <VolumeX size={17} strokeWidth={1.8} aria-hidden="true" />}
            <span className="theme-toggle-label">Sound {soundEnabled ? 'on' : 'off'}</span>
          </button>
        </div>

        <button
          className="hbg"
          onClick={() => setMenuOpen(previous => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mmenu open" id="mobile-menu" role="navigation" aria-label="Mobile menu">
          {NAV_ITEMS.map(({ label, id }) => (
            <button key={id} className="mml" onClick={() => handleNav(id)}>{label}</button>
          ))}
        </div>
      )}
    </>
  )
}
