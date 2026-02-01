import { skills } from '../data';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="skill-group">
              <h3 className="skill-group__title">{category}</h3>
              <div className="skill-group__tags">
                {list.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
