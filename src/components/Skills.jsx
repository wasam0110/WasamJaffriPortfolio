// ═══════════════════════════════════════════════════════════════
// src/components/Skills.jsx
//
// Skills section — all categories inside one glass card.
// DATA SOURCE: src/data/skills.js
// ═══════════════════════════════════════════════════════════════
import Reveal      from './Reveal'
import SectionHead from './SectionHead'
import { SKILLS_DATA } from '../data/skills'

export default function Skills() {
  return (
    <div id="skills">
      <div className="sec">
        <SectionHead label="Technical Proficiency" title="Skills" />

        {/* Single glass card wrapping all categories */}
        <Reveal>
          <div className="gc skills-wrap">
            {SKILLS_DATA.map((category, i) => (
              <div key={i} className="sk-cat">

                {/* Category label with extending gold rule */}
                <div className="sk-label">{category.cat}</div>

                {/* Skill pills */}
                <div className="sk-tags" aria-label={category.cat}>
                  {category.items.map((skill, j) => (
                    <span key={j} className="sk-tag">{skill}</span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </div>
  )
}
