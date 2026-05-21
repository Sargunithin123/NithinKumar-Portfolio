import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data';
import { useScrollProgress } from '../hooks/useScrollProgress';

const scrollTo = (id) =>
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

const Navbar = ({ dark, toggleTheme }) => {
  const { progress, scrolled } = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 3,
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, var(--a1), var(--a2), var(--a3))',
          zIndex: 1001,
          transition: 'width 0.1s linear',
        }}
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0.7rem 0',
          background: scrolled
            ? dark
              ? 'rgba(6,6,15,0.92)'
              : 'rgba(240,244,255,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--br)' : 'none',
          transition: 'background 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              fontWeight: 900,
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, var(--a1), var(--a2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            NK.
          </motion.a>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }}>
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link}
                  whileHover={{ color: 'var(--a1)', y: -1 }}
                  onClick={() => scrollTo(link)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--mt)',
                    fontWeight: 500,
                    fontSize: '0.88rem',
                    fontFamily: 'inherit',
                    transition: 'color 0.2s',
                  }}
                >
                  {link}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--br)',
                  borderRadius: 10,
                  padding: '7px 10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--tx)',
                }}
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>
            </div>
          )}

          {/* Mobile controls */}
          {isMobile && (
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--br)',
                  borderRadius: 10,
                  padding: '7px',
                  cursor: 'pointer',
                  display: 'flex',
                  color: 'var(--tx)',
                }}
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--tx)',
                  display: 'flex',
                  padding: 4,
                }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: dark ? 'rgba(6,6,15,0.98)' : 'rgba(240,244,255,0.98)',
                padding: '0.5rem 1.5rem 1.5rem',
                borderTop: '1px solid var(--br)',
              }}
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => { scrollTo(link); setMenuOpen(false); }}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.85rem 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid var(--br)',
                    cursor: 'pointer',
                    color: 'var(--tx)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    fontWeight: 500,
                  }}
                >
                  {link}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
