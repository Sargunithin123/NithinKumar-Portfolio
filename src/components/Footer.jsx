import { NAV_LINKS } from '../data';

const scrollTo = (id) =>
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

const Footer = () => (
  <footer
    style={{
      background: 'var(--surf)',
      borderTop: '1px solid var(--br)',
      padding: '3rem 1.5rem',
      textAlign: 'center',
    }}
  >
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div
        style={{
          fontWeight: 900,
          fontSize: '1.4rem',
          background: 'linear-gradient(135deg, var(--a1), var(--a2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.7rem',
        }}
      >
        Nithin Kumar Sargu
      </div>

      <p style={{ marginBottom: '1.4rem', fontSize: '0.85rem' }}>
        Full Stack Developer · Java Programmer · CSE Student
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '1.8rem',
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--dm)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontFamily: 'inherit',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.target.style.color = 'var(--a1)'; }}
            onMouseLeave={(e) => { e.target.style.color = 'var(--dm)'; }}
          >
            {link}
          </button>
        ))}
      </div>

      <p style={{ color: 'var(--dm)', fontSize: '0.78rem' }}>
        © {new Date().getFullYear()} Nithin Kumar Sargu · Built with ❤️ using React & Framer Motion
      </p>
    </div>
  </footer>
);

export default Footer;
