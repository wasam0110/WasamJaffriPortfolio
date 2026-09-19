// ═══════════════════════════════════════════════════════════════
// vite.config.js — Build tool configuration
//
// Vite is the modern replacement for Create React App (CRA).
//
// CHAT WIDGET NOTE:
//   The AI chat widget calls https://api.anthropic.com/v1/messages.
//   Browsers block cross-origin requests to external APIs (CORS).
//   The `server.proxy` below forwards /api/* → api.anthropic.com
//   during `npm run dev`, so the chat works locally.
//
//   For PRODUCTION you need a real backend proxy. Options:
//     A) Vercel serverless function  → /api/chat.js
//     B) Express / FastAPI server    → proxy the request server-side
//     C) Disable chat widget         → set VITE_CHAT_ENABLED=false
//
// Commands:
//   npm run dev     → http://localhost:5173  (hot reload)
//   npm run build   → production bundle in /dist
//   npm run preview → serve /dist locally to test
// ═══════════════════════════════════════════════════════════════
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    // Proxy /api/* → Anthropic API during local development.
    // This avoids CORS errors without exposing the API key on the client.
    proxy: {
      '/api': {
        target:      'https://api.anthropic.com',
        changeOrigin: true,
        // Strip the /api prefix before forwarding
        // e.g. POST /api/v1/messages → POST api.anthropic.com/v1/messages
        rewrite:     (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
