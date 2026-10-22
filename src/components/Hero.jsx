import { Github, Linkedin, Search, Database, Sparkles } from 'lucide-react'
import { scrollToSection } from '../utils/scroll'
import Magnetic from './Magnetic'
import ResumePreview from './ResumePreview'

const workflow = [
  { label: 'Understand the question', detail: 'Query', Icon: Search },
  { label: 'Find useful context', detail: 'Retrieve', Icon: Database },
  { label: 'Shape a useful answer', detail: 'Generate', Icon: Sparkles },
]

function tiltWorkflow(event) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width
  const y = (event.clientY - bounds.top) / bounds.height
  card.style.setProperty('--tilt-x', `${(0.5 - y) * 3}deg`)
  card.style.setProperty('--tilt-y', `${(x - 0.5) * 3}deg`)
}

function resetWorkflowTilt(event) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg')
  event.currentTarget.style.setProperty('--tilt-y', '0deg')
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="hero-tag"><span aria-hidden="true" />AI engineer · Karachi, Pakistan</div>
        <h1 className="hero-name"><span>Syed Wasam</span><span className="hero-name-accent">Jaffri</span></h1>
        <div className="hero-role">I build practical AI and backend systems.</div>
        <p className="hero-bio">
          I work across machine learning, retrieval systems, and backend engineering—turning ideas into useful, reliable software.
        </p>
        <div className="hero-btns">
          <Magnetic><button className="btn btn-g" onClick={() => scrollToSection('projects')}>View projects</button></Magnetic>
          <button className="btn btn-o" onClick={() => scrollToSection('experience')}>Experience</button>
          <ResumePreview />
          <div className="hero-socials">
            <a href="https://github.com/wasam0110" target="_blank" rel="noreferrer noopener" className="btn btn-o" aria-label="GitHub profile"><Github size={14} />GitHub</a>
            <a href="https://www.linkedin.com/in/syed-wasam-jaffri" target="_blank" rel="noreferrer noopener" className="btn btn-o" aria-label="LinkedIn profile"><Linkedin size={14} />LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Illustration of an AI retrieval workflow">
        <div className="workflow-art tilt-card" onPointerMove={tiltWorkflow} onPointerLeave={resetWorkflowTilt}>
          <div className="workflow-head">
            <span>RETRIEVAL-AUGMENTED GENERATION</span>
            <span className="workflow-index">01 — 03</span>
          </div>
          <div className="workflow-body">
            <div className="workflow-rail" aria-hidden="true"><span /></div>
            <div className="workflow-steps">
              {workflow.map(({ label, detail, Icon }, index) => (
                <div className={`workflow-step step-${index + 1}`} key={detail}>
                  <div className="workflow-icon"><Icon size={17} strokeWidth={1.6} /></div>
                  <div className="workflow-copy"><span>{detail}</span><strong>{label}</strong></div>
                  <span className="workflow-number">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="workflow-foot"><span className="workflow-status" />A simple path from question to answer</div>
          <div className="art-corner art-corner-tl" /><div className="art-corner art-corner-br" />
        </div>
        <div className="visual-caption"><span>01 / A working system</span><span>AI · Retrieval · Backend</span></div>
        <div className="hero-ticker" aria-label="Areas of focus: machine learning, retrieval, backend systems">
          <span className="ticker-label">FOCUS</span>
          <div className="ticker-window" aria-hidden="true">
            <div className="ticker-track">
              {[0, 1].map((copy) => (
                <span className="ticker-run" key={copy}>
                  <span>Machine learning</span><i>·</i><span>Retrieval systems</span><i>·</i><span>Backend engineering</span><i>·</i><span>Applied AI</span><i>·</i>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
