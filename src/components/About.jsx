import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { INFO_ITEMS } from '../data/info'

// Every chip is supported by the CV or one of the selected public project repositories.
// Project references make the matrix evidence-based rather than a proficiency claim.
const MATRIX = {
  'AI & ML': [
    {
      area: 'Machine learning & evaluation',
      skills: ['Scikit-learn', 'XGBoost', 'LightGBM', 'LSTM', 'SARIMA', 'Model Calibration', 'Threshold Optimization', 'SHAP'],
      sources: 'ChurnPredictionSystem · CryptoPredictionModel · CV',
    },
    {
      area: 'LLMs & retrieval',
      skills: ['RAG', 'FAISS', 'BAAI/bge Embeddings', 'Flan-T5', 'Hugging Face', 'Semantic Chunking', 'Citations', 'Groq API'],
      sources: 'Rag-Document-Cataloger · JobBridgeAI · CV',
    },
    {
      area: 'Computer vision',
      skills: ['OpenCV', 'MediaPipe', 'Hand Landmarks', 'Face Encodings', 'PCA'],
      sources: 'VirtualPaint · CV',
    },
  ],
  'Backend & APIs': [
    {
      area: 'Languages',
      skills: ['Python', 'Java', 'C', 'JavaScript', 'PHP'],
      sources: 'CV · JobBridgeAI · SpendSmart-FinanceTrackingApp',
    },
    {
      area: 'Frameworks & APIs',
      skills: ['FastAPI', 'REST APIs', 'Uvicorn', 'Pydantic', 'JWT'],
      sources: 'Rag-Document-Cataloger · DripMarketplace · JobBridgeAI · CV',
    },
    {
      area: 'Data & persistence',
      skills: ['PostgreSQL', 'Supabase', 'SQLite', 'MySQL', 'JSON', 'CSV', 'Parquet'],
      sources: 'DripMarketplace · Rag-Document-Cataloger · SpendSmart-FinanceTrackingApp · CV',
    },
    {
      area: 'Backend engineering',
      skills: ['Asynchronous Programming', 'Layered Architecture', 'Docker', 'Docker Compose'],
      sources: 'DripMarketplace · CV',
    },
  ],
  'Web & Data': [
    {
      area: 'Interfaces & dashboards',
      skills: ['HTML', 'CSS', 'React (basic)', 'Next.js 15', 'Streamlit', 'Tkinter'],
      sources: 'JobBridgeAI · DripMarketplace · ChurnPredictionSystem · VirtualPaint · CV',
    },
    {
      area: 'Data processing',
      skills: ['pandas', 'NumPy', 'PyArrow', 'CSV/Parquet Ingestion'],
      sources: 'ChurnPredictionSystem · Agri-feed-price-system-java · CV',
    },
    {
      area: 'Documents & charts',
      skills: ['pdfplumber', 'python-docx', 'QuickChart'],
      sources: 'Rag-Document-Cataloger · Agri-feed-price-system-java · CV',
    },
  ],
  'Engineering & MLOps': [
    {
      area: 'Testing',
      skills: ['pytest', 'JUnit', 'Test-Driven Development'],
      sources: 'ChurnPredictionSystem · Surgery-Management-System-Java · CV',
    },
    {
      area: 'Model operations',
      skills: ['FastAPI Model Serving', 'PSI Drift Monitoring', 'MLflow (familiar)', 'Evidently (familiar)'],
      sources: 'ChurnPredictionSystem · CV',
    },
    {
      area: 'Code quality & delivery',
      skills: ['GitHub Actions CI', 'black', 'ruff', 'isort', 'mypy', 'Structured Logging'],
      sources: 'CV',
    },
  ],
}
const AREAS = Object.keys(MATRIX)

export default function About() {
  const [activeArea, setActiveArea] = useState(AREAS[0])

  return (
    <div id="info">
      <div className="sec">
        <SectionHead label="Who I Am" title="About" />
        <div className="info-grid about-bento">
          {INFO_ITEMS.map(({ Icon, label }, i) => (
            <Reveal key={label} delay={(i % 4) + 1}>
              <div className="gc info-item">
                <div className="info-icon-box" aria-hidden="true"><Icon size={15} strokeWidth={1.8} /></div>
                <span className="info-txt">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <section className="skills-matrix" id="skills-matrix" aria-labelledby="matrix-title">
            <div className="matrix-heading">
              <div>
                <div className="matrix-eyebrow">CV & project evidence</div>
                <h3 id="matrix-title">Skills matrix</h3>
                <p>Technologies used across the selected repositories and CV. Choose an area to explore.</p>
              </div>
              <div className="matrix-tabs" role="group" aria-label="Choose a skills area">
                {AREAS.map(area => (
                  <button
                    type="button"
                    key={area}
                    id={`matrix-tab-${area.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}
                    aria-pressed={activeArea === area}
                    className={`matrix-tab${activeArea === area ? ' active' : ''}`}
                    onClick={() => setActiveArea(area)}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
            <div
              className="matrix-rows"
              id="matrix-panel"
              aria-live="polite"
              aria-label={`${activeArea} skills`}
              key={activeArea}
            >
              {MATRIX[activeArea].map(({ area, skills, sources }) => (
                <div className="matrix-row" key={area}>
                  <div className="matrix-area">{area}</div>
                  <div className="matrix-content">
                    <div className="matrix-skills">
                      {skills.map(skill => <span className="matrix-skill" key={skill}>{skill}</span>)}
                    </div>
                    <div className="matrix-source">Evidence: {sources}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="matrix-note">Grouped by project evidence · not a proficiency ranking</div>
          </section>
        </Reveal>
      </div>
    </div>
  )
}
