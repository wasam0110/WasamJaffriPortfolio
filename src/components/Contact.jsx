// ═══════════════════════════════════════════════════════════════
// src/components/Contact.jsx
//
// Two-column layout: contact info on the left, email form right.
//
// FORM BEHAVIOUR:
//   Clicking "Send Message" opens the user's default mail client
//   with subject and body pre-filled via a mailto: URI.
//   No server is required. All fields are validated before submit.
//
// SECURITY:
//   - encodeURIComponent() sanitises user input before it enters
//     the mailto URI, preventing header injection.
//   - Email format is validated with a regex before submission.
//   - External links use rel="noreferrer noopener".
// ═══════════════════════════════════════════════════════════════
import { useState }          from 'react'
import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react'
import Reveal      from './Reveal'
import SectionHead from './SectionHead'

// Simple email regex — catches obvious mistakes without being overly strict
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  // ── Form state ──────────────────────────────────────────────
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')    // inline validation error
  const [sent,  setSent]  = useState(false) // success feedback state

  // ── Helpers ─────────────────────────────────────────────────
  /** Update one field, clear error when user starts typing again */
  const update = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (error) setError('')
  }

  /** Validate, then open mailto: in the system mail client */
  const handleSend = () => {
    const { name, email, message } = form

    // ── Validation ────────────────────────────────────────────
    if (!name.trim())            return setError('Please enter your name.')
    if (!EMAIL_REGEX.test(email)) return setError('Please enter a valid email address.')
    if (!message.trim())         return setError('Please enter a message.')

    // ── Build mailto URI (inputs are URL-encoded) ─────────────
    const subject = encodeURIComponent(`Contact from ${name.trim()}`)
    const body    = encodeURIComponent(message.trim())
    window.open(`mailto:wasamjaffri@gmail.com?subject=${subject}&body=${body}`)

    // ── Reset ─────────────────────────────────────────────────
    setSent(true)
    setError('')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  // ── Render ───────────────────────────────────────────────────
  return (
    <div id="contact">
      <div className="sec">
        <SectionHead label="Let's Talk" title="Get In Touch" />

        <div className="con-grid">

          {/* ── Left: contact details ─────────────────────── */}
          <div>
            {[
              { Icon: Phone,  lbl: 'Phone',    val: '0320-8306241' },
              { Icon: Mail,   lbl: 'Email',    val: 'wasamjaffri@gmail.com' },
              { Icon: MapPin, lbl: 'Location', val: 'Karachi, Pakistan' },
            ].map(({ Icon, lbl, val }, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="gc con-item">
                  <div className="con-ico" aria-hidden="true">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="con-lbl">{lbl}</div>
                    <div className="con-val">{val}</div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={4}>
              <div style={{ display: 'flex', gap: '.85rem', marginTop: '1.4rem', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/wasam0110"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-o"
                  aria-label="GitHub profile"
                >
                  <Github size={13} /><span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-wasam-jaffri"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-o"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={13} /><span>LinkedIn</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Right: contact form ───────────────────────── */}
          <Reveal delay={2}>
            <div className="gc form-wrap">

              <div className="fi-grp">
                <input
                  className="fi-inp"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={update('name')}
                  maxLength={100}
                  aria-label="Your name"
                />
              </div>

              <div className="fi-grp">
                <input
                  className="fi-inp"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={update('email')}
                  maxLength={200}
                  aria-label="Your email"
                />
              </div>

              <div className="fi-grp">
                <textarea
                  className="fi-inp"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  maxLength={2000}
                  aria-label="Your message"
                />
              </div>

              {/* Inline validation error */}
              {error && (
                <div
                  role="alert"
                  style={{
                    fontSize: '.78rem', color: '#f87171',
                    marginBottom: '.8rem', padding: '6px 10px',
                    background: 'rgba(248,113,113,.06)',
                    border: '1px solid rgba(248,113,113,.2)',
                    borderRadius: 6,
                  }}
                >
                  {error}
                </div>
              )}

              <button
                className="btn btn-g"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={handleSend}
                disabled={sent}
                aria-live="polite"
              >
                <span>{sent ? 'Message Sent ✓' : 'Send Message'}</span>
              </button>

            </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}
