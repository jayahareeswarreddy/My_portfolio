import { HiBadgeCheck } from 'react-icons/hi';
import { certifications } from '../data';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <ul className="certifications__list">
          {certifications.map((cert, i) => (
            <li key={i} className="cert-item">
              <HiBadgeCheck className="cert-item__icon" size={22} />
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
