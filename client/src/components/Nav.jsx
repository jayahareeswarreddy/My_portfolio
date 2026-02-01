import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { profile } from '../data';
import './Nav.css';

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#hero" className="nav__brand" onClick={() => handleClick('hero')}>
          {profile.name.split(' ')[0]}
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className="nav__link"
              onClick={() => handleClick(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
