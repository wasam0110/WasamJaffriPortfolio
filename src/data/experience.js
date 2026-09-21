// ═══════════════════════════════════════════════════════════════
// src/data/experience.js
//
// Work experience entries shown in the Experience section.
// Each entry renders as a card on the timeline.
//
// Fields:
//   role     → job title displayed in Cinzel serif
//   company  → employer name in monospace gold
//   type     → "Full-time" | "Founder" | "Part-time" etc.
//   location → city / remote
//   period   → display string for date range
//   desc     → one-sentence summary of the role
//   bullets  → 3-4 specific achievements shown as → list
//   tags     → tech/skill chips at the bottom of the card
// ═══════════════════════════════════════════════════════════════

/** @type {{ role:string, company:string, type:string, location:string, period:string, desc:string, bullets:string[], tags:string[] }[]} */
export const EXPERIENCE = [
  {
    role:     'Backend AI Engineer',
    company:  'FlyrankAI',
    type:     'Full-time',
    location: 'Remote',
    period:   '2024 – Present',
    desc:     'Building AI-powered content ranking and generation systems using LLMs, RAG architectures, and scalable Python backends.',
    bullets: [
      'Designed FastAPI microservices powering AI content generation pipelines in production',
      'Built RAG systems with FAISS vector stores for semantic document retrieval and ranking',
      'Integrated LLM APIs for automated content scoring and generation workflows',
      'Optimised async backend performance, reducing API response times by ~40%',
    ],
    tags: ['Python', 'FastAPI', 'LLM', 'RAG', 'FAISS', 'NLP'],
  },
]
