// ═══════════════════════════════════════════════════════════════
// src/main.jsx — React Entry Point
//
// First JS file that runs in the browser.
// Mounts <App /> into the <div id="root"> in index.html.
//
// React.StrictMode intentionally double-renders components
// during development to surface bugs. Has zero effect on
// the production build.
// ═══════════════════════════════════════════════════════════════
import React    from 'react'
import ReactDOM from 'react-dom/client'
import App      from './App'
import './styles/main.css'   // global stylesheet — loaded once

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
