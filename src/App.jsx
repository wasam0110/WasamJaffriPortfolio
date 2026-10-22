import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero'
import Experience from './components/Experience'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Extracurricular from './components/Extracurricular'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollProgress } from './hooks/useScrollProgress'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const audioContext = useRef(null)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('wasam-portfolio-theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {}
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const { scrollY } = useScrollProgress()

  const toggleSound = () => {
    if (soundEnabled) {
      audioContext.current?.close()
      audioContext.current = null
      setSoundEnabled(false)
      return
    }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (!AudioContextClass) return
    audioContext.current = new AudioContextClass()
    audioContext.current.resume()
    setSoundEnabled(true)
  }

  useEffect(() => {
    if (!soundEnabled) return undefined
    const playTone = (frequency, duration, volume) => {
      const context = audioContext.current
      if (!context || context.state !== 'running') return
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const now = context.currentTime
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(frequency, now)
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.78, now + duration)
      gain.gain.setValueAtTime(0.0001, now)
      gain.gain.exponentialRampToValueAtTime(volume, now + 0.008)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start(now)
      oscillator.stop(now + duration + 0.01)
    }
    let lastHover = 0
    const onClick = event => {
      if (event.target.closest('.btn, .nl, .mml, .theme-toggle, .hbg, .matrix-tab, .sound-toggle')) {
        playTone(520, 0.045, 0.018)
      }
    }
    const onHover = event => {
      if (!event.target.closest('.gc')) return
      if (event.relatedTarget?.closest?.('.gc') === event.target.closest('.gc')) return
      const now = performance.now()
      if (now - lastHover < 90) return
      lastHover = now
      playTone(310, 0.035, 0.008)
    }
    document.addEventListener('click', onClick, true)
    document.addEventListener('pointerover', onHover, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('pointerover', onHover, true)
    }
  }, [soundEnabled])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('wasam-portfolio-theme', theme) } catch {}
  }, [theme])

  return (
    <>
      <Navbar scrollY={scrollY} menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} onToggleTheme={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} soundEnabled={soundEnabled} onToggleSound={toggleSound} />
      <main className="wrap">
        <Hero />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <About />
        <Education />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Extracurricular />
        <div className="divider" />
        <Contact />
        <Footer />
      </main>
      <BackToTop scrollY={scrollY} />
    </>
  )
}
