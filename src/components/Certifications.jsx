import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { CERTIFICATIONS } from '../data';

const Certifications = () => (
  <section id="certifications" style={{ padding: '6rem 0', background: 'var(--surf)' }}>
    <div className="container">
      <SectionTitle title="Certifications" sub="Credentials" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.4rem',
        }}
      >
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -6, borderColor: `${cert.color}45` }}
            className="glass"
            style={{ padding: '1.7rem', transition: 'transform 0.3s, border-color 0.3s' }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                marginBottom: '1rem',
                background: `${cert.color}15`,
                border: `1px solid ${cert.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
              }}
            >
              🏅
            </div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.35rem', fontSize: '0.92rem' }}>
              {cert.title}
            </h3>
            <p style={{ color: cert.color, fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.2rem' }}>
              {cert.issuer}
            </p>
            <p style={{ color: 'var(--dm)', fontSize: '0.75rem' }}>{cert.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
