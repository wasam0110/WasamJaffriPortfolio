// ═══════════════════════════════════════════════════════════════
// src/data/projects.js
//
// All project entries for the Projects section.
//
// Fields:
//   feat   → true = shown as a large "Featured" card (top row)
//            false = shown in the compact secondary grid below
//   name   → project name; also used as the GitHub repo slug
//   desc   → one-sentence description shown on the card
//   badges → tech stack pills
//   demo   → (optional) live demo URL shown as "Live Demo ↗" button
//            when absent, the View button links to GitHub instead
//
// To add a project: push a new object to this array.
// To feature a project: set feat: true (keep featured count at 3).
// To add a live link: add demo: 'https://...' to the entry.
// ═══════════════════════════════════════════════════════════════

/** @type {{ feat:boolean, name:string, desc:string, badges:string[], demo?:string }[]} */
export const PROJECTS = [
  // ── Featured (top row, larger cards) ──────────────────────────
  {
    feat:   true,
    name:   'JobBridgeAI',
    desc:   'AI-powered job matching and recommendation platform using LLMs and semantic search.',
    badges: ['Python', 'LLM', 'FastAPI', 'RAG', 'NLP'],
  },
  {
    feat:   true,
    name:   'Rag-Document-Cataloger',
    desc:   'RAG-powered intelligent document cataloging and retrieval system using FAISS embeddings.',
    badges: ['Python', 'RAG', 'FAISS', 'Embeddings', 'LLM'],
  },
  {
    feat:   true,
    name:   'VirtualPaint',
    desc:   'Real-time computer vision virtual painting via hand gesture recognition — no hardware needed.',
    badges: ['Python', 'OpenCV', 'Computer Vision', 'CV'],
  },

  // ── Regular (compact secondary grid) ──────────────────────────
  {
    feat:   false,
    name:   'CryptoPredictionModel',
    desc:   'ML model for cryptocurrency trend prediction and signal generation.',
    badges: ['Python', 'XGBoost', 'LightGBM', 'Pandas'],
  },
  {
    feat:   false,
    name:   'Surgery-Management-System-Java',
    desc:   'Full-featured Java surgery and hospital management system with OOP architecture.',
    badges: ['Java', 'MySQL', 'OOP', 'Backend'],
  },
  {
    feat:   false,
    name:   'SpendSmart-FinanceTrackingApp',
    desc:   'Personal finance tracking and smart expense management dashboard.',
    badges: ['Python', 'Streamlit', 'MySQL'],
    // Live deployment — "View ↗" becomes "Live Demo ↗" when this is set
    demo:   'https://spendsmart.infinityfree.me/dashboard.php#overview',
  },
  {
    feat:   false,
    name:   'CHATBOT',
    desc:   'AI-powered chatbot with conversational intelligence and contextual response capabilities.',
    badges: ['Python', 'NLP', 'LLM', 'Transformers'],
  },
  {
    feat:   false,
    name:   'ChurnPredictionSystem',
    desc:   'Customer churn prediction with SHAP-based explainability for business insights.',
    badges: ['Python', 'Scikit-learn', 'SHAP', 'XGBoost'],
  },
  {
    feat:   false,
    name:   'AI_PORTFOLIO_Maker',
    desc:   'AI-based automated portfolio generation platform with content intelligence.',
    badges: ['Python', 'LLM', 'FastAPI', 'GenAI'],
  },
  {
    feat:   false,
    name:   'SpamEmailClassifier',
    desc:   'High-accuracy ML spam email detection and filtering system.',
    badges: ['Python', 'NLP', 'Scikit-learn', 'MLflow'],
  },
  {
    feat:   false,
    name:   'Agri-feed-price-system-java',
    desc:   'Agriculture feed pricing and inventory management application.',
    badges: ['Java', 'SQLite', 'Backend', 'Algorithms'],
  },
]
