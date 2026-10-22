import { useState } from 'react'
import { Github, Search, X } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Magnetic from './Magnetic'
import { PROJECTS } from '../data/projects'

const GH_BASE = 'https://github.com/wasam0110'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase()
  const filtered = PROJECTS.filter(project => (
    (!normalizedSearch || [project.name, project.repo, project.desc, ...project.categories, ...project.badges]
      .join(' ').toLocaleLowerCase().includes(normalizedSearch))
  ))
  const repoUrl = project => `${GH_BASE}/${project.repo}`

  return (
    <div id="projects">
      <div className="sec">
        <SectionHead label="What I've Built" title="Projects" />

        <div className="project-toolbar">
          <div className="project-controls">
            <label className="project-search">
              <Search size={15} aria-hidden="true" />
              <input
                type="search"
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                placeholder="Search projects or tech"
                aria-label="Search projects by name, description, or technology"
              />
              {searchTerm && (
                <button type="button" className="project-search-clear" onClick={() => setSearchTerm('')} aria-label="Clear project search" title="Clear search">
                  <X size={14} aria-hidden="true" />
                </button>
              )}
            </label>
          </div>
          <span className="project-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</span>
        </div>

        {filtered.length > 0 && (
          <div className="proj-grid project-grid-equal">
            {filtered.map((project, index) => (
              <Reveal key={project.repo}>
                <article className="gc proj-card">
                  <div className="proj-num">PROJECT_{String(index + 1).padStart(2, '0')}</div>
                  {project.status && <div className="project-status">{project.status}</div>}
                  <h3 className="proj-name">{project.name}</h3>
                  <p className="proj-desc">{project.desc}</p>
                  <div className="proj-badges" aria-label="Tech stack">
                    {project.badges.map(badge => <span key={badge} className="badge">{badge}</span>)}
                  </div>
                  <div className="proj-acts">
                    <Magnetic>
                      <a href={repoUrl(project)} target="_blank" rel="noreferrer noopener" className="btn btn-g btn-sm" aria-label={`${project.name} GitHub repo`}>
                        <Github size={11} /><span>GitHub</span>
                      </a>
                    </Magnetic>
                    <a href={project.demo || repoUrl(project)} target="_blank" rel="noreferrer noopener" className="btn btn-o btn-sm" aria-label={project.demo ? `${project.name} live demo` : `${project.name} view on GitHub`}>
                      <span>{project.demo ? 'Live Demo ↗' : 'View ↗'}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
        {filtered.length === 0 && (
          <p className="project-empty" role="status">No projects match “{searchTerm.trim()}”. Try another search term.</p>
        )}
      </div>
    </div>
  )
}
