import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import { useTyping } from '../hooks/useTyping';
import { ROLES, SOCIAL_LINKS } from '../data';
import LeetCodeIcon from './icons/LeetCodeIcon';

const scrollTo = (id) =>
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

const GH = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LI = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Hero = () => {
  const typed = useTyping(ROLES);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 1.5rem 4rem',
      }}
    >
      {/* ── Background ──────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Orbs */}
        {[
          { size: 350, x: '-5%',  y: '20%', color: 'var(--a1)', delay: '0s' },
          { size: 240, x: '78%',  y: '50%', color: 'var(--a2)', delay: '1.5s' },
          { size: 180, x: '55%',  y: '5%',  color: 'var(--a3)', delay: '3s' },
        ].map((o, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.07, 0.15, 0.07], scale: [1, 1.08, 1] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: parseFloat(o.delay) }}
            style={{
              position: 'absolute',
              width: o.size,
              height: o.size,
              borderRadius: '50%',
              background: o.color,
              left: o.x,
              top: o.y,
              filter: 'blur(90px)',
            }}
          />
        ))}
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ maxWidth: 780, textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 18px',
            borderRadius: 999,
            background: 'rgba(0,229,255,0.09)',
            border: '1px solid rgba(0,229,255,0.28)',
            color: 'var(--a1)',
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.07em',
            marginBottom: '2rem',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--a1)', display: 'inline-block' }}
          />
          Available for Opportunities
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontSize: 'clamp(2.5rem, 9vw, 5.2rem)',
            fontWeight: 900,
            lineHeight: 1.07,
            marginBottom: '1.4rem',
          }}
        >
          Hi, I'm{' '}
          <span className="grad-text">Nithin Kumar</span>
          <br />Sargu
        </motion.h1>

        {/* Typing line */}
        <div
          style={{
            height: '2.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.4rem)',
              fontWeight: 700,
              color: 'var(--a1)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {typed}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            style={{ color: 'var(--a1)', fontSize: 'clamp(1rem,3vw,1.4rem)', fontWeight: 300, marginLeft: 2 }}
          >
            |
          </motion.span>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ fontSize: '1rem', maxWidth: 580, margin: '0 auto 2.5rem', lineHeight: 1.9 }}
        >
          A passionate CSE student & Full Stack Developer from Hyderabad, crafting scalable,
          beautiful web applications with Java, React, and modern web technologies.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 40px rgba(0,229,255,0.28)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('projects')}
            style={{
              padding: '13px 28px', borderRadius: 13,
              background: 'linear-gradient(135deg, var(--a1), var(--a2))',
              border: 'none', color: '#fff', fontWeight: 700, fontSize: '0.92rem',
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            ⚡ View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '13px 28px', borderRadius: 13,
              border: '2px solid var(--a1)', color: 'var(--a1)', background: 'transparent',
              fontWeight: 700, fontSize: '0.92rem', cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            <Download size={16} /> Download CV
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contact')}
            style={{
              padding: '13px 28px', borderRadius: 13,
              border: '1px solid var(--br)', color: 'var(--tx)',
              background: 'rgba(168,85,247,0.1)',
              fontWeight: 700, fontSize: '0.92rem', cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            ✉ Contact Me
          </motion.button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}
        >
          {[
            { Icon: GH,           label: 'GitHub',   url: SOCIAL_LINKS.github   },
            { Icon: LI,           label: 'LinkedIn', url: SOCIAL_LINKS.linkedin },
            { Icon: LeetCodeIcon, label: 'LeetCode', url: SOCIAL_LINKS.leetcode, isComp: true },
          ].map(({ Icon, label, url, isComp }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4, color: 'var(--a1)', borderColor: 'rgba(0,229,255,0.4)' }}
              title={label}
              aria-label={label}
              style={{
                width: 46, height: 46, borderRadius: 13,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--br)',
                color: 'var(--mt)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              {isComp ? <Icon size={19} color="currentColor" /> : <Icon />}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div
          style={{
            width: 24, height: 40, borderRadius: 12,
            border: '2px solid var(--br)',
            display: 'flex', justifyContent: 'center', padding: '5px 0',
          }}
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ width: 4, height: 8, borderRadius: 2, background: 'var(--a1)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
