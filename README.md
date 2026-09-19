# Wasam Jaffri — Portfolio v2

Personal portfolio built with **React 18 + Vite 5**.
Dark gold theme · Typewriter hero · Scroll animations · AI chat · Timeline experience · Live demo links.

---

## Quick Start

```bash
npm install      # install all dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # production bundle → /dist
npm run preview  # serve /dist locally to test
```

---

## Project Structure

Every file is explained below — what it does and when to edit it.

```
WasamJaffriPortfolio/
│
├── index.html                   HTML shell. React mounts into <div id="root">.
│                                Also contains: Content-Security-Policy meta tag,
│                                Open Graph tags (link preview on LinkedIn/WhatsApp),
│                                Google Fonts <link> tags.
│
├── vite.config.js               Vite build config. Contains a dev-server proxy that
│                                forwards /api/* → api.anthropic.com so the AI chat
│                                widget works locally without CORS errors.
│
├── package.json                 Project metadata, npm scripts, and dependency list.
│
├── .env.example                 Template for environment variables. Copy to .env and
│                                fill in values. NEVER commit .env to Git.
│
├── .gitignore                   Files Git should ignore (node_modules, dist, .env).
│
└── src/
    │
    ├── main.jsx                 ENTRY POINT. Mounts <App /> into #root.
    │                            Imports the global stylesheet here.
    │
    ├── App.jsx                  ROOT COMPONENT. Owns global state (loader, menu,
    │                            scroll). Assembles all sections in visual order.
    │                            Edit here to reorder or add/remove sections.
    │
    ├── styles/
    │   └── main.css             ALL STYLES in one file (1300+ lines, 25 sections).
    │                            Has a table of contents at the top — Ctrl+F to jump.
    │                            Edit here to change colours, spacing, animations.
    │
    ├── data/                    ★ START HERE to update portfolio content ★
    │   │                        All content arrays live here. No JSX needed.
    │   │
    │   ├── experience.js        Work experience entries (role, company, bullets, tags).
    │   │                        Add a new job → push a new object to the array.
    │   │
    │   ├── projects.js          All projects (feat flag, name, desc, badges, demo URL).
    │   │                        feat: true  → shown as large Featured card (top row).
    │   │                        feat: false → shown in compact secondary grid.
    │   │                        demo: 'https://...' → enables "Live Demo ↗" button.
    │   │
    │   ├── skills.js            Skill tags grouped by category.
    │   │                        Add skill → push string to the relevant items array.
    │   │
    │   ├── certifications.js    Certification entries (ico abbreviation + name).
    │   │
    │   ├── info.js              About Me info cards (Lucide icon + label).
    │   │                        Icons are imported here and stored as references.
    │   │
    │   ├── extras.js            Extracurricular activity cards (icon + text).
    │   │
    │   └── particles.js         Auto-generates config for 14 background particles.
    │                            Adjust `length` to change particle count.
    │
    ├── hooks/                   Custom React hooks — reusable stateful logic
    │   │
    │   ├── useTypewriter.js     Typewriter animation state machine.
    │   │                        Cycles ROLES array: type → pause → delete → repeat.
    │   │                        Edit the ROLES array inside to change role strings.
    │   │
    │   ├── useScrollProgress.js Tracks scrollY and page-scroll percentage (0–100%).
    │   │                        Used by: Navbar (solid bg), progress bar, BackToTop.
    │   │
    │   └── useInView.js         IntersectionObserver hook. Returns [ref, visible].
    │                            Powers the scroll-reveal animation on every section.
    │
    ├── utils/
    │   └── scroll.js            scrollToSection(id) helper. Used by Navbar + Hero
    │                            to smooth-scroll to sections. Single source of truth.
    │
    └── components/
        │                        One file per UI concern. Import order in App.jsx
        │                        matches top-to-bottom visual layout.
        │
        ├── Loader.jsx           Fullscreen loading animation (fades out after 2.3s).
        │                        Props: loaded {boolean}
        │
        ├── Navbar.jsx           Fixed top nav + mobile hamburger dropdown.
        │                        Props: scrollY, menuOpen, setMenuOpen
        │
        ├── Particles.jsx        14 floating gold dots (decorative background).
        │                        No props. Data from src/data/particles.js.
        │
        ├── Reveal.jsx           Scroll-reveal wrapper. Wraps any block and fades
        │                        + slides it up when it enters the viewport.
        │                        Props: children, delay (1-6), style
        │
        ├── SectionHead.jsx      Consistent section heading (eyebrow + title + rule).
        │                        Props: label {string}, title {string}
        │                        Wraps itself in <Reveal> automatically.
        │
        ├── Hero.jsx             Full-viewport landing section.
        │                        Contains: badge tag, name, typewriter role, bio,
        │                        CTA buttons (Experience, Projects, Resume, GitHub, LinkedIn).
        │                        UPDATE: change the resume href to your actual PDF path.
        │
        ├── Experience.jsx       Vertical timeline section.
        │                        Data from src/data/experience.js.
        │                        Shows: role, company, period, status pills,
        │                        description, achievement bullets, tech tags.
        │
        ├── About.jsx            Info grid cards (icon + label).
        │                        Data from src/data/info.js.
        │
        ├── Education.jsx        Compact education card below About.
        │                        Data is defined INLINE in the component
        │                        (single university — no separate data file needed).
        │                        Update the EDUCATION const inside to change details.
        │
        ├── Skills.jsx           Skill category groups inside a single glass card.
        │                        Data from src/data/skills.js.
        │
        ├── Projects.jsx         Featured row + compact secondary grid.
        │                        Data from src/data/projects.js.
        │                        Automatically shows "Live Demo ↗" when demo URL exists.
        │
        ├── Certifications.jsx   Certification card grid.
        │                        Data from src/data/certifications.js.
        │
        ├── Extracurricular.jsx  Activity cards with icons.
        │                        Data from src/data/extras.js.
        │
        ├── Contact.jsx          Two-column: contact info (left) + email form (right).
        │                        Form validates name, email format, and message length
        │                        before opening mailto: in the system mail client.
        │                        Inputs are encodeURIComponent'd before the URI is built.
        │
        ├── Footer.jsx           Static footer strip. No props.
        │
        ├── BackToTop.jsx        Fixed ↑ button, visible after 400px scroll.
        │                        Props: scrollY {number}
        │
        └── ChatWidget.jsx       Floating AI chat powered by Claude.
                                 DISABLED by default — set VITE_CHAT_ENABLED=true
                                 in your .env once a backend proxy is ready.
                                 See the "Enabling the Chat Widget" section below.
```

---

## Enabling the AI Chat Widget

The chat widget calls the Anthropic API. Because API keys must never live in
client-side code, the widget is **disabled by default**.

### Step 1 — Local development (already set up)

`vite.config.js` proxies `/api/*` → `api.anthropic.com` during `npm run dev`.
You still need to forward your API key from the proxy. The simplest approach:

```js
// vite.config.js — add headers to the proxy
proxy: {
  '/api': {
    target:      'https://api.anthropic.com',
    changeOrigin: true,
    rewrite:     (path) => path.replace(/^\/api/, ''),
    headers: {
      'x-api-key':         process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
  },
},
```

Add `ANTHROPIC_API_KEY=sk-ant-...` to your `.env` (not `.env.example`).

Then in `.env`:
```
VITE_CHAT_ENABLED=true
```

### Step 2 — Production (Vercel example)

Create `/api/chat.js` in your project root:

```js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method:  'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(req.body),
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
```

Update `ChatWidget.jsx` line `API_URL` from `/api/v1/messages` to `/api/chat`.

---

## Adding a Live Demo Link to a Project

Open `src/data/projects.js` and add a `demo` field:

```js
{
  feat:   false,
  name:   'MyProject',
  desc:   'Description here.',
  badges: ['Python', 'FastAPI'],
  demo:   'https://myproject.example.com',   // ← add this line
},
```

The button label automatically changes from **"View ↗"** to **"Live Demo ↗"**
and the outline brightens to distinguish it from GitHub links.

---

## Adding a Resume Download

1. Put your CV PDF at `public/WasamJaffri_Resume.pdf`
2. The Hero component already links to `/WasamJaffri_Resume.pdf` with `download`

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI library — components, state, effects |
| Vite 5 | Build tool & dev server |
| Lucide React | Icon library |
| CSS (plain) | All styling — no framework, CSS custom properties |
| Anthropic Claude | Powers the optional AI chat widget |
