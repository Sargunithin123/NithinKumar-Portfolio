import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { EDUCATION } from '../data';

const Education = () => (
  <section id="education" style={{ padding: '6rem 0' }}>
    <div className="container">
      <SectionTitle title="Education" sub="Academic Background" />

      {EDUCATION.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{
            padding: '2.5rem',
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 17,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.9rem',
              background:
                'linear-gradient(135deg, rgba(0,229,255,0.12), rgba(168,85,247,0.12))',
              border: '1px solid rgba(0,229,255,0.25)',
            }}
          >
            {edu.emoji}
          </div>

          <div style={{ flex: 1, minWidth: 200 }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              {edu.degree}
            </h3>
            <p style={{ color: 'var(--a1)', fontWeight: 700, marginBottom: '0.6rem', fontSize: '0.97rem' }}>
              {edu.institution}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--mt)', fontSize: '0.88rem' }}>📅 {edu.year}</span>
              <span style={{ color: 'var(--mt)', fontSize: '0.88rem' }}>⭐ {edu.grade}</span>
            </div>
            <p style={{ color: 'var(--mt)', lineHeight: 1.85, fontSize: '0.9rem' }}>{edu.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;
