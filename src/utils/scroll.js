// ═══════════════════════════════════════════════════════════════
// src/utils/scroll.js
//
// Smooth-scroll helper used by Navbar and Hero.
// Centralised here so both components share one implementation
// (DRY — Don't Repeat Yourself).
//
// SECURITY NOTE:
//   We use getElementById which is read-only and cannot modify
//   the DOM. The id parameter comes only from static NAV_ITEMS
//   arrays inside components, never from user input.
//
// USAGE:
//   import { scrollToSection } from '../utils/scroll'
//   scrollToSection('projects')  // scrolls to <div id="projects">
// ═══════════════════════════════════════════════════════════════

/**
 * Smoothly scrolls to the element with the given id.
 * @param {string} id - HTML id attribute of the target section
 */
export function scrollToSection(id) {
  // ?. (optional chaining) → silently skips if element doesn't exist
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
