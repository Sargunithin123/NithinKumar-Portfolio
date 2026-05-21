import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import LeetCodeIcon from './icons/LeetCodeIcon';
import { CONTACT_INFO, SOCIAL_LINKS } from '../data';

const contactItems = [
  { emoji: '✉️', label: 'Email',    value: CONTACT_INFO.email,    bg: 'rgba(0,229,255,0.1)',    border: 'rgba(0,229,255,0.25)'    },
  { emoji: '📱', label: 'Phone',    value: CONTACT_INFO.phone,    bg: 'rgba(168,85,247,0.1)',   border: 'rgba(168,85,247,0.25)'   },
  { emoji: '📍', label: 'Location', value: CONTACT_INFO.location, bg: 'rgba(249,115,22,0.1)',   border: 'rgba(249,115,22,0.25)'   },
];

const GH = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LI = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const fieldStyle = {
  width: '100%',
  padding: '13px 16px',
  borderRadius: 11,
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid var(--br)',
  color: 'var(--tx)',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.3s, box-shadow 0.3s',
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 3500);
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'var(--surf)' }}>
      <div className="container">
        <SectionTitle title="Get in Touch" sub="Contact Me" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
              Let's Work Together
            </h3>
            <p style={{ lineHeight: 1.88, marginBottom: '2.2rem', fontSize: '0.95rem' }}>
              I'm currently open to full-time roles, internships, and freelance opportunities.
              Whether you have a project in mind or just want to say hello — my inbox is always open!
            </p>

            {contactItems.map(({ emoji, label, value, bg, border }) => (
              <div
                key={label}
                style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.4rem' }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 13,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    background: bg,
                    border: `1px solid ${border}`,
                  }}
                >
                  {emoji}
                </div>
                <div>
                  <p style={{ color: 'var(--dm)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {label}
                  </p>
                  <p style={{ color: 'var(--tx)', fontWeight: 600, fontSize: '0.9rem' }}>{value}</p>
                </div>
              </div>
            ))}

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              {[
                { Icon: GH,           label: 'GitHub',   url: SOCIAL_LINKS.github,   isComp: false },
                { Icon: LI,           label: 'LinkedIn', url: SOCIAL_LINKS.linkedin, isComp: false },
                { Icon: LeetCodeIcon, label: 'LeetCode', url: SOCIAL_LINKS.leetcode, isComp: true },
              ].map(({ Icon, label, url, isComp }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  title={label}
                  aria-label={label}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--br)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--mt)',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--a1)'; e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--mt)'; e.currentTarget.style.borderColor = 'var(--br)'; }}
                >
                  {isComp ? <Icon size={18} color="currentColor" /> : <Icon />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass"
            style={{ padding: '2.5rem' }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  required
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  style={fieldStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--a1)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--br)'; e.target.style.boxShadow = 'none'; }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  required
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  style={fieldStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--a1)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--br)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                required
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                style={{ ...fieldStyle, marginBottom: '1rem' }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--a1)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.12)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--br)'; e.target.style.boxShadow = 'none'; }}
              />

              <textarea
                rows={5}
                placeholder="Your Message..."
                value={form.message}
                required
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                style={{ ...fieldStyle, resize: 'none', marginBottom: '1.5rem' }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--a1)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.12)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--br)'; e.target.style.boxShadow = 'none'; }}
              />

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      textAlign: 'center',
                      color: '#22c55e',
                      fontWeight: 700,
                      padding: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                    }}
                  >
                    <CheckCircle size={20} /> Message sent successfully!
                  </motion.div>
                ) : (
                  <motion.button
                    key="btn"
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,229,255,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'linear-gradient(135deg, var(--a1), var(--a2))',
                      border: 'none',
                      borderRadius: 12,
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.97rem',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      fontFamily: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    <Send size={18} />
                    {loading ? 'Sending…' : 'Send Message'}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
