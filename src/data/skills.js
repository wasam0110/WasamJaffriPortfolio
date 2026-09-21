// ═══════════════════════════════════════════════════════════════
// src/data/skills.js
//
// Skill tags grouped by category.
// To add a skill: push a string into the relevant `items` array.
// To add a category: push a new { cat, items } object.
// ═══════════════════════════════════════════════════════════════

/** @type {{ cat: string, items: string[] }[]} */
export const SKILLS_DATA = [
  {
    cat: 'Programming & Backend',
    items: [
      'Python',
      'Java',
      'C',
      'FastAPI',
      'Django',
      'REST APIs',
      'Async Programming',
      'SQLAlchemy',
      'Pydantic',
      'Alembic',
    ],
  },

  {
    cat: 'Web & Databases',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'PHP',
      'React',
      'Next.js',
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Redis',
      'Supabase',
      'SQL',
    ],
  },

  {
    cat: 'Machine Learning & AI',
    items: [
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'XGBoost',
      'LightGBM',
      'SHAP',
      'NLP',
      'Computer Vision',
      'RAG',
      'LLMs',
      'Embeddings',
      'Semantic Search',
      'Vector Databases',
      'Prompt Engineering',
      'LangChain',
      'ChromaDB',
      'FAISS',
    ],
  },

  {
    cat: 'Data & Tools',
    items: [
      'Pandas',
      'NumPy',
      'PyArrow',
      'Matplotlib',
      'Seaborn',
      'MLflow',
      'Jupyter Notebook',
      'Git',
      'GitHub Actions',
      'pytest',
    ],
  },

  {
    cat: 'AI Platforms & Frameworks',
    items: [
      'Hugging Face',
      'Hugging Face Transformers',
      'Sentence Transformers',
      'Groq API',
      'Flan-T5',
      'BAAI Embeddings',
    ],
  },

  {
    cat: 'DevOps & Deployment',
    items: [
      'Docker',
      'Docker Compose',
      'CI/CD',
      'Vercel',
      'Railway',
    ],
  },
  {
  cat: 'AI Assistants & App Builders',
  items: [
    'ChatGPT',
    'Claude',
    'Google Gemini',
    'Manus',
    'Lovable',
    'Github Copilot',
  ],
},

{
  cat: 'Frontend & Animation',
  items: [
    'Framer Motion',
  ],
},

{
  cat: 'Design & Creative Tools',
  items: [
    'Canva',
  ],
},
];
