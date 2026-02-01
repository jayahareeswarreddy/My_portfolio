import { HiExternalLink } from 'react-icons/hi';
import { projects } from '../data';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects__grid">
          {projects.map((proj, i) => (
            <article key={i} className="proj-card">
              <div className="proj-card__top">
                <h3 className="proj-card__title">{proj.title}</h3>
                <span className="proj-card__tech">{proj.tech}</span>
              </div>
              <ul className="proj-card__points">
                {proj.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card__link"
              >
                View on GitHub <HiExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
