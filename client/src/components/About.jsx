import { profile } from '../data';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about__card">
          <p className="about__text">{profile.summary}</p>
          <p className="about__text">
            I'm a quick learner with a problem-solving mindset, looking to contribute to real-world software projects.
            I enjoy building full-stack web apps with the MERN stack and experimenting with ML models.
          </p>
          <div className="about__location">
            <span className="about__label">Based in</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
