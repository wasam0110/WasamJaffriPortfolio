// ═══════════════════════════════════════════════════════════════
// src/data/skills.js
//
// Skill tags grouped by category.
// To add a skill: push a string into the relevant `items` array.
// To add a category: push a new { cat, items } object.
// ═══════════════════════════════════════════════════════════════

/** @type {{ cat: string, items: string[] }[]} */
export const SKILLS_DATA = [
  { cat: 'Programming & Backend',  items: ['Python', 'Java', 'C', 'FastAPI', 'REST APIs', 'Async Programming'] },
  { cat: 'Web & Databases',        items: ['HTML', 'CSS', 'JavaScript', 'Streamlit', 'React', 'MySQL', 'SQLite'] },
  { cat: 'Machine Learning & AI',  items: ['Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'FAISS', 'NLP', 'RAG', 'Embeddings', 'LLMs', 'Computer Vision'] },
  { cat: 'Data & Tools',           items: ['Pandas', 'NumPy', 'PyArrow', 'MLflow', 'Docker', 'GitHub Actions'] },
  { cat: 'AI Platforms',           items: ['Hugging Face', 'Flan-T5', 'BAAI Embeddings'] },
]
