import { useState } from 'react';
import { HiOutlineMail, HiOutlineUser, HiOutlineChat } from 'react-icons/hi';
import { profile } from '../data';
import './Contact.css';

const API_BASE = import.meta.env.DEV ? '' : (import.meta.env.VITE_API_URL || '');

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: data.message || 'Message sent!' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact__wrap">
          <div className="contact__info">
            <p className="contact__text">
              I'm open to opportunities and collaborations. Drop a message and I'll get back to you.
            </p>
            <a href={`mailto:${profile.email}`} className="contact__email">
              <HiOutlineMail size={20} /> {profile.email}
            </a>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__label">
              <HiOutlineUser size={18} />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="contact__label">
              <HiOutlineMail size={18} />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="contact__label">
              <HiOutlineChat size={18} />
              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                value={form.subject}
                onChange={handleChange}
              />
            </label>
            <label className="contact__label contact__label--full">
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </label>
            {status && (
              <p className={`contact__status contact__status--${status.type}`}>{status.message}</p>
            )}
            <button type="submit" className="contact__submit" disabled={loading}>
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
