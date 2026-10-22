# Syed Wasam Jaffri — Portfolio

A responsive personal portfolio built with React 18 and Vite. It includes an editorial light/dark visual system, experience and education details, an evidence-based skills matrix, nine GitHub projects, a résumé preview, and a contact form.

## Requirements

- Node.js 18 or later
- npm

## Local development

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Production build

```bash
npm run build
npm run preview
```

The optimized static site is written to `dist/`. The preview command serves that build locally for a final check.

## Project structure

```text
public/                 Static assets, fonts, résumé PDF, favicon, and SEO files
src/
  components/            Page sections and reusable interface components
  data/                  Portfolio content: experience, projects, and profile details
  hooks/                  Reusable React hooks
  styles/                 Global styles and self-hosted font declarations
  utils/                  Small shared helpers
  App.jsx                 Application composition and theme/sound state
  main.jsx                React entry point
index.html                 HTML shell, metadata, and structured data
vite.config.js             Vite and React plugin configuration
```

Update portfolio content in `src/data/` and section components in `src/components/`. Static files should be placed in `public/` and referenced from the site root, for example `/WasamJaffri_Resume.pdf.pdf` for the current résumé file.

## Deployment

This is a static Vite application. Connect the repository to a static hosting provider such as Vercel, Netlify, or GitHub Pages, and use these settings:

- Build command: `npm run build`
- Output directory: `dist`

The site has no runtime API or environment-variable requirements. The contact form uses FormSubmit and requires no API key in this repository.
