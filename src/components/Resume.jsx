import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Resume = () => (
  <section id="resume" style={{ padding: '6rem 0' }}>
    <div className="container">
      <SectionTitle title="Resume" sub="Download" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass"
        style={{
          padding: '3rem',
          maxWidth: 600,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>📄</div>
        <h3 style={{ fontWeight: 900, fontSize: '1.35rem', marginBottom: '0.5rem' }}>
          Nithin Kumar Sargu
        </h3>
        <p style={{ marginBottom: '0.35rem', fontSize: '0.93rem' }}>
          Full Stack Developer · Java Programmer · CSE Student
        </p>
        <p style={{ color: 'var(--dm)', fontSize: '0.82rem', marginBottom: '2.5rem' }}>
          B.Tech CSE &bull; Graduating 2026 &bull; Hyderabad, India
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            href="/NithinKumarSargu_Resume21.pdf"
            download="NithinKumarSargu_Resume21.pdf"
            aria-label="Download Resume"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,229,255,0.35)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '13px 36px',
              borderRadius: 13,
              background: 'linear-gradient(135deg, var(--a1), var(--a2))',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Download size={18} /> Download PDF
          </motion.a>

          <motion.a
            href="/NithinKumarSargu_Resume21.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '13px 36px',
              borderRadius: 13,
              border: '2px solid var(--br)',
              color: 'var(--tx)',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <ExternalLink size={18} /> View Online
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Resume;
