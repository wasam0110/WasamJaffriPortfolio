# Public GitHub repository review

Reviewed 20 public project repositories under [wasam0110](https://github.com/wasam0110), excluding the portfolio site repository. Repository contents and README/manifests were inspected through public shallow clones on 2026-10-22. “Documented” does not imply a deployed/operational system. Work-affiliated repos are flagged separately.

## Security and privacy follow-up

- `CHATBOT` and `CryptoPredictionModel` track files named `.env`. Their contents were deliberately not opened or copied into this report. Check immediately whether they contain live credentials; if so, revoke/rotate those credentials and remove them from the repository and its history.
- `AI_PORTFOLIO_Maker` tracks a profile photo and two PDF resume files under `portfolio/media/`. Confirm these are intentionally public and remove them if not.
- No remote repository changes were made during this review.

## [AgentHive-FYP](https://github.com/wasam0110/AgentHive-FYP)
Empty repository; no README or source files.

**Recommendation:** GitHub-only until populated.

## [Agri-feed-price-system-java](https://github.com/wasam0110/Agri-feed-price-system-java)
Java 11/Eclipse console CSV feed-price analytics; record loading, latest-price lookup, year-on-year change, best profit/loss in 12-month window, optional chart export; includes CSV/repository tests.

**Recommendation:** Secondary portfolio project; currently misdescribed generically.

## [AI_PORTFOLIO_Maker](https://github.com/wasam0110/AI_PORTFOLIO_Maker)
Django 4.1/MySQL portfolio project manager with registration, email verification, CRUD/search/pagination, profile-image and PDF-resume uploads/download. No AI evidenced.

**Recommendation:** Secondary card only if portfolio-management app is worth showing; do not call AI-generated.

## [Alph4](https://github.com/wasam0110/Alph4)
React 19/Vite/TypeScript/Tailwind agency landing page with motion and contact sections, branded Alph4.

**Recommendation:** Possible UI showcase only if owned and permitted; agency/brand context unclear; repo description says agency site.

## [CHATBOT](https://github.com/wasam0110/CHATBOT)
Django conversational web/API app; authentication and persisted history. README claims Groq/Llama, Markdown, syntax highlighting, KaTeX; source reviewed by completed agent confirms Groq API calls.

**Recommendation:** Secondary AI/API card; currently generic tech labels should be precise.

## [ChurnPredictionSystem](https://github.com/wasam0110/ChurnPredictionSystem)
Telco churn pipeline with feature engineering/model training, FastAPI predict/batch/what-if API, Streamlit dashboards, SHAP, drift/monitoring utilities and tests.

**Recommendation:** Feature as CV-matching ML project; distinguish documented capabilities from deployment.

## [CryptoPredictionModel](https://github.com/wasam0110/CryptoPredictionModel)
Final-year crypto forecasting project combining LSTM, XGBoost, SARIMA with FastAPI and dashboard; README describes exchange data and charts.

**Recommendation:** Optional secondary; frame as prototype, not production.

## [DripMarketplace](https://github.com/wasam0110/DripMarketplace)
WearHowZ multi-vendor commerce project; CV says in progress. Repository contains separate backend/frontend, API docs and known limitations; deployment and full order/checkout journey are not verified.

**Recommendation:** Feature with clear “In progress” and accurate capabilities; do not imply production readiness.

## [DSA-LAB-Working-Examples](https://github.com/wasam0110/DSA-LAB-Working-Examples)
Loose Java algorithm/data-structure exercises (sorting, trees, linked lists, BFS/DFS, etc.); no README.

**Recommendation:** GitHub-only; coursework/repository archive rather than polished product card.

## [flyrank-capstone-widgetplatform](https://github.com/wasam0110/flyrank-capstone-widgetplatform)
FlyRank Backend Track capstone: FastAPI/SQLite embeddable lead-capture widgets, auth/JWT, widget CRUD/snippet, submissions, spam/geo/rate limiting tests. EVIDENCE.md contains blank proof placeholders for many checks.

**Recommendation:** Potential card only after employer permission and completion evidence; label as FlyRank capstone/work-affiliated.

## [flyrank-task-api](https://github.com/wasam0110/flyrank-task-api)
FlyRank task/assignment progression: FastAPI CRUD API with in-memory, SQLite, PostgreSQL, Supabase auth; separate scraper and an LLM enrichment job card.

**Recommendation:** Work-affiliated coursework; GitHub-only or grouped under Flyrank experience, not independent project.

## [JobBridgeAI](https://github.com/wasam0110/JobBridgeAI)
FastAPI/React/Groq job-readiness app: CV analyzer, mock interviews, LinkedIn optimizer, skills-gap view per README.

**Recommendation:** Feature/secondary card; repository is more substantive than generic current description; verify deployment before presenting as live.

## [PermissionAwareRAG](https://github.com/wasam0110/PermissionAwareRAG)
Security-first multi-tenant RAG foundation. README says Stage 0 foundation complete, Stage 1 PostgreSQL RLS next/not implemented; authentication, ingestion, retrieval/RAG/LLM security not yet implemented.

**Recommendation:** Do not describe as functioning RAG; optionally show as an in-progress architecture project.

## [Quantum4](https://github.com/wasam0110/Quantum4)
Next.js 15/Tailwind agency site branded Quantum4; premium digital agency marketing landing page.

**Recommendation:** Similar UI/agency showcase; brand ownership/permission unclear; not AI platform.

## [Rag-Document-Cataloger](https://github.com/wasam0110/Rag-Document-Cataloger)
FastAPI, FAISS, bge embeddings, Flan-T5; multi-format ingestion PDF/DOCX/TXT/CSV, semantic chunking, citations, authentication, inline PDF viewer; README and tests present.

**Recommendation:** Feature; CV-aligned lead project.

## [ShoppingStore](https://github.com/wasam0110/ShoppingStore)
MAISON single-brand fashion e-commerce app using React/TypeScript, FastAPI, PostgreSQL/Supabase, Stripe. README explicitly says single store, no third-party sellers; docs note checkout/payment limitations.

**Recommendation:** Secondary/in progress; keep clearly distinct from multi-vendor DripMarketplace.

## [SpamEmailClassifier](https://github.com/wasam0110/SpamEmailClassifier)
Minimal Python repository with one spam.py and a README containing only “Python”; implementation detail/metrics not verified.

**Recommendation:** GitHub-only until documentation and a reproducible demo exist.

## [SpendSmart-FinanceTrackingApp](https://github.com/wasam0110/SpendSmart-FinanceTrackingApp)
PHP/vanilla JS finance tracking app with account/guest mode, transaction/category CRUD, multi-currency and JSON data storage; README lists live demo.

**Recommendation:** Secondary portfolio card; current tech stack is wrong (site says Python/Streamlit/MySQL).

## [Surgery-Management-System-Java](https://github.com/wasam0110/Surgery-Management-System-Java)
Java surgery management project emphasizing SOLID/constructor DI, SurgeryStore persistence abstraction, Java serialization and Gson JSON storage, JUnit tests.

**Recommendation:** Secondary educational Java project; current description overstates full-featured system unless source verified.

## [VirtualPaint](https://github.com/wasam0110/VirtualPaint)
Repository includes only VirtualPaint.py and no README; do not claim gestures/computer vision features until script is reviewed.

**Recommendation:** GitHub-only pending code/feature verification.
