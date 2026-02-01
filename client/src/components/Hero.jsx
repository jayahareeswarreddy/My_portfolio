import { HiOutlineMail, HiOutlinePhone, HiCode } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../data';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__greet">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__cta">
          <a
            href="#contact"
            className="hero__btn hero__btn--primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </a>
        </div>
        <div className="hero__meta">
          <a href={`mailto:${profile.email}`} className="hero__meta-item">
            <HiOutlineMail size={18} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hero__meta-item">
            <HiOutlinePhone size={18} /> {profile.phone}
          </a>
        </div>
        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={22} />
          </a>
        </div>
        <div className="hero__scroll">
          <HiCode size={20} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
