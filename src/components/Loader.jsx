// ═══════════════════════════════════════════════════════════════
// src/components/Loader.jsx
//
// Fullscreen loading animation shown while the app initialises.
// Fades out when the `loaded` prop becomes true.
//
// PROPS:
//   loaded {boolean} — when true, adds the .out CSS class which
//                      triggers a CSS opacity transition to 0.
// ═══════════════════════════════════════════════════════════════
export default function Loader({ loaded }) {
  return (
    <div className={`loader${loaded ? ' out' : ''}`}>
      {/* Pulsing name — see @keyframes ld-pulse in main.css */}
      <div className="loader-logo">WASAM JAFFRI</div>

      {/* Subtitle */}
      <div className="loader-sub">Initializing Portfolio</div>

      {/* Progress bar that fills from 0 → 100% over 2s */}
      <div className="loader-track">
        <div className="loader-fill" />
      </div>
    </div>
  )
}
