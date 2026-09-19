// ═══════════════════════════════════════════════════════════════
// src/components/ChatWidget.jsx
//
// Floating AI chat bubble powered by Claude.
// Visitors can ask questions about Wasam's skills and experience.
//
// ── HOW IT WORKS ────────────────────────────────────────────────
//   1. User clicks the MessageSquare FAB (bottom-right).
//   2. ChatPanel opens with a welcome message already visible.
//   3. User types a question and presses Enter or Send.
//   4. Message is sent to /api/v1/messages (proxied by Vite to
//      api.anthropic.com during dev — see vite.config.js).
//   5. Claude responds using a system prompt that describes Wasam.
//
// ── ENABLING IN PRODUCTION ──────────────────────────────────────
//   The Vite dev proxy only works locally (npm run dev).
//   For a deployed site, route /api/* through a serverless function
//   or backend that adds your Anthropic API key server-side.
//   Vercel example:  /api/chat.js  →  proxy to api.anthropic.com
//
//   Set VITE_CHAT_ENABLED=true in your .env to show the widget.
//   Leave it false (default) to hide it until your proxy is ready.
//
// ── SECURITY ────────────────────────────────────────────────────
//   - The API key is NEVER in this file or any client-side code.
//   - User input is sent as-is to Claude — it is not executed.
//   - maxLength on the textarea prevents oversized payloads.
//   - The system prompt strictly scopes Claude's responses to
//     Wasam's professional context.
// ═══════════════════════════════════════════════════════════════
import { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send }      from 'lucide-react'

// ── Chat configuration ──────────────────────────────────────────
const MODEL      = 'claude-sonnet-4-6'
const MAX_TOKENS = 400
// API endpoint — /api prefix gets proxied to api.anthropic.com in dev
const API_URL    = '/api/v1/messages'

// ── System prompt — scopes Claude to Wasam's portfolio context ──
const SYSTEM = `You are an AI assistant on Wasam Jaffri's portfolio website. Be helpful, concise, and professional.

About Wasam (Syed Muhammad Wasam Mehdi Jaffri):
• Location: Karachi, Pakistan
• Education: BS Artificial Intelligence, DHA Suffa University (Oct 2023–Present), Roll No AI231001
• Experience: Backend AI Engineer at FlyrankAI (2024–Present); CEO & Founder at VisualBite3D (2023–Present)
• Core Skills: Python, FastAPI, LLMs, RAG, FAISS, NLP, Scikit-learn, XGBoost, LightGBM, SHAP, OpenCV, React, Java, MySQL, Docker, MLflow, GitHub Actions, Hugging Face
• Key Projects: JobBridgeAI (LLM job matching), Rag-Document-Cataloger (RAG+FAISS), VirtualPaint (CV gestures), SpendSmart (live at spendsmart.infinityfree.me), CryptoPredictionModel, ChurnPredictionSystem, SpamEmailClassifier, CHATBOT, AI_PORTFOLIO_Maker
• Certifications: Azure AI Fundamentals, Azure Data Fundamentals, CS50x, MIT Tournament of Codes, IEEE Speed Debugging 2025
• Contact: wasamjaffri@gmail.com | GitHub: wasam0110 | LinkedIn: syed-wasam-jaffri | Phone: 0320-8306241
• Hobbies: Cricket (Captain, Runner-Up DSU Championship 2025), Badminton, Football, Table Tennis, Gym

Keep answers under 80 words unless more detail is explicitly requested. Be warm and conversational.`

// ── Initial greeting shown before the user sends anything ───────
const INITIAL_MESSAGE = {
  role:    'assistant',
  content: "Hey! I'm Wasam's AI assistant 👋\nAsk me about his skills, projects, experience, or how to reach him.",
}

// ── Chat Panel ──────────────────────────────────────────────────
function ChatPanel({ onClose }) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [input,    setInput]    = useState('')
  const [loading,  setLoading]  = useState(false)
  const [apiError, setApiError] = useState('')   // shown if API call fails
  const endRef = useRef(null)

  // Auto-scroll to bottom whenever messages update
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    // Optimistically add user message to UI
    setInput('')
    setApiError('')
    const updatedMessages = [...messages, { role: 'user', content: text }]
    setMessages(updatedMessages)
    setLoading(true)

    try {
      const response = await fetch(API_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model:      MODEL,
          max_tokens: MAX_TOKENS,
          system:     SYSTEM,
          // Send the full conversation history for context
          messages: updatedMessages.map(m => ({
            role:    m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        // Surface HTTP errors without crashing the component
        throw new Error(`API responded with status ${response.status}`)
      }

      const data  = await response.json()
      const reply = data.content?.[0]?.text

      if (!reply) throw new Error('Unexpected API response shape')

      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      // Show error inline — do not leak technical details to the user
      setApiError('Unable to reach the AI assistant right now. Please email wasamjaffri@gmail.com instead.')
      console.error('[ChatWidget] API error:', err.message)
    } finally {
      setLoading(false)
    }
  }

  // Send on Enter (Shift+Enter = newline)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="chat-panel" role="dialog" aria-label="AI chat with Wasam's assistant">

      {/* ── Header ────────────────────────────────────────── */}
      <div className="chat-head">
        <div>
          <div className="chat-title">Ask about Wasam</div>
          <div className="chat-sub">Powered by Claude AI</div>
        </div>
        <button
          className="chat-close"
          onClick={onClose}
          aria-label="Close chat"
        >
          <X size={16} />
        </button>
      </div>

      {/* ── Message list ──────────────────────────────────── */}
      <div className="chat-body" aria-live="polite" aria-relevant="additions">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`msg ${msg.role === 'user' ? 'msg-user' : 'msg-ai'}`}
          >
            {msg.content}
          </div>
        ))}

        {/* Thinking indicator */}
        {loading && (
          <div className="msg-typing" aria-label="Assistant is typing">
            Thinking…
          </div>
        )}

        {/* API error message */}
        {apiError && (
          <div className="msg msg-ai" style={{ borderColor: 'rgba(248,113,113,.25)', color: '#fca5a5' }}>
            {apiError}
          </div>
        )}

        {/* Invisible anchor to auto-scroll to */}
        <div ref={endRef} />
      </div>

      {/* ── Input row ─────────────────────────────────────── */}
      <div className="chat-foot">
        <textarea
          className="chat-ta"
          rows={1}
          placeholder="Ask anything about Wasam…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={500}
          disabled={loading}
          aria-label="Chat message input"
        />
        <button
          className="chat-send"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          aria-label="Send message"
        >
          <Send size={13} />
        </button>
      </div>

    </div>
  )
}

// ── Exported wrapper — FAB + Panel ──────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  // Feature flag — set VITE_CHAT_ENABLED=true in .env to show the widget
  // Default is false so the widget doesn't appear until a proxy is configured
  const enabled = import.meta.env.VITE_CHAT_ENABLED === 'true'
  if (!enabled) return null

  return (
    <>
      {open && <ChatPanel onClose={() => setOpen(false)} />}

      <button
        className="chat-fab"
        onClick={() => setOpen(prev => !prev)}
        aria-label={open ? 'Close AI chat' : 'Open AI chat assistant'}
        title="Ask Wasam's AI assistant"
      >
        {open ? <X size={18} /> : <MessageSquare size={18} />}
      </button>
    </>
  )
}
