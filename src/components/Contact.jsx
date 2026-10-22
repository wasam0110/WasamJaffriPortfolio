import { useState } from 'react'
import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Magnetic from './Magnetic'

const CONTACT_EMAIL = 'wasamjaffri@gmail.com'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMPTY_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const update = field => event => {
    setForm(previous => ({ ...previous, [field]: event.target.value }))
    if (error) setError('')
    if (sent) setSent(false)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (submitting) return

    const { name, email, message } = form
    if (!name.trim()) return setError('Please enter your name.')
    if (!EMAIL_REGEX.test(email.trim())) return setError('Please enter a valid email address.')
    if (!message.trim()) return setError('Please enter a message.')

    setError('')
    setSubmitting(true)
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _replyto: email.trim(),
          _subject: `Contact from ${name.trim()}`,
          _template: 'table',
          message: message.trim(),
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error(result.message || 'The email service could not accept your message. Please try again.')
      }
      setSent(true)
      setForm(EMPTY_FORM)
    } catch (sendError) {
      setError(sendError.message || 'Could not send your message. Please try again or email directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div id="contact">
      <div className="sec">
        <SectionHead label="Let's Talk" title="Get In Touch" />
        <div className="con-grid">
          <div>
            {[
              { Icon: Phone, lbl: 'Phone', val: '0320-8306241' },
              { Icon: Mail, lbl: 'Email', val: CONTACT_EMAIL },
              { Icon: MapPin, lbl: 'Location', val: 'Karachi, Pakistan' },
            ].map(({ Icon, lbl, val }, i) => (
              <Reveal key={lbl} delay={i + 1}>
                <div className="gc con-item">
                  <div className="con-ico" aria-hidden="true"><Icon size={16} strokeWidth={1.8} /></div>
                  <div><div className="con-lbl">{lbl}</div><div className="con-val">{val}</div></div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={4}>
              <div className="contact-socials">
                <a href="https://github.com/wasam0110" target="_blank" rel="noreferrer noopener" className="btn btn-o" aria-label="GitHub profile">
                  <Github size={13} /><span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/syed-wasam-jaffri" target="_blank" rel="noreferrer noopener" className="btn btn-o" aria-label="LinkedIn profile">
                  <Linkedin size={13} /><span>LinkedIn</span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <form className="gc form-wrap" onSubmit={handleSubmit} noValidate>
              <div className="fi-grp">
                <input
                  className="fi-inp"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={update('name')}
                  maxLength={100}
                  autoComplete="name"
                  aria-label="Your name"
                  required
                />
              </div>
              <div className="fi-grp">
                <input
                  className="fi-inp"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={update('email')}
                  maxLength={200}
                  autoComplete="email"
                  aria-label="Your email"
                  required
                />
              </div>
              <div className="fi-grp">
                <textarea
                  className="fi-inp"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  maxLength={2000}
                  aria-label="Your message"
                  required
                />
              </div>

              {error && (
                <div className="form-error" role="alert">{error}</div>
              )}
              {sent && (
                <div className="form-feedback success" role="status">Thanks — your message was sent. I’ll get back to you soon.</div>
              )}

              <Magnetic className="magnetic-block">
                <button
                  type="submit"
                  className="btn btn-g"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={submitting}
                  aria-live="polite"
                >
                  <span>{submitting ? 'Sending…' : sent ? 'Message Sent ✓' : 'Send Message'}</span>
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
