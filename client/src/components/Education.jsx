import { education } from '../data';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education__list">
          {education.map((item, i) => (
            <article key={i} className="edu-card">
              <div className="edu-card__header">
                <h3 className="edu-card__degree">{item.degree}</h3>
                <span className="edu-card__period">{item.period}</span>
              </div>
              <p className="edu-card__institution">{item.institution}</p>
              <p className="edu-card__detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
