import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../data';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <p className="footer__copy">
          © {year} {profile.name}. Built with MERN stack.
        </p>
      </div>
    </footer>
  );
}
