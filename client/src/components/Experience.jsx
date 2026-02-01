import { experience } from '../data';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience__list">
          {experience.map((item, i) => (
            <article key={i} className="exp-card">
              <div className="exp-card__header">
                <h3 className="exp-card__role">{item.role}</h3>
                <span className="exp-card__period">{item.period}</span>
              </div>
              <ul className="exp-card__points">
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
