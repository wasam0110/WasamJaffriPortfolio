// ═══════════════════════════════════════════════════════════════
// src/components/Footer.jsx — signature and quick contact actions
// ═══════════════════════════════════════════════════════════════
import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const EMAIL = 'wasamjaffri@gmail.com'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        Built with passion by{' '}
        <span className="footer-name">Syed Wasam Jaffri</span>
      </div>
      <div className="footer-sub">
        AI Engineer · ML Practitioner · Backend Developer · GenAI Enthusiast
      </div>
      <div className="footer-contact">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <button type="button" className="copy-email" onClick={copyEmail} aria-live="polite">
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy email'}
        </button>
      </div>
    </footer>
  )
}
