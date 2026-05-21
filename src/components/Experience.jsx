import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import Tag from './ui/Tag';
import { EXPERIENCE } from '../data';

const Experience = () => (
  <section id="experience" style={{ padding: '6rem 0' }}>
    <div className="container">
      <SectionTitle title="Experience" sub="Work History" />

      <div
        style={{
          position: 'relative',
          paddingLeft: '2.5rem',
          maxWidth: 800,
          margin: '0 auto',
        }}
      >
        {/* Timeline vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, var(--a1), var(--a2), transparent)',
            borderRadius: 1,
          }}
        />

        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.15 }}
            style={{ marginBottom: '2.5rem', position: 'relative' }}
          >
            {/* Dot */}
            <div
              style={{
                position: 'absolute',
                left: -2 - 9,
                top: 26,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${exp.color}, var(--a2))`,
                border: '3px solid var(--bg)',
                boxShadow: `0 0 16px ${exp.color}50`,
              }}
            />

            {/* Card */}
            <div
              className="glass"
              style={{ padding: '1.9rem', marginLeft: '1rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.9rem',
                }}
              >
                <div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.05rem' }}>{exp.role}</h3>
                  <p style={{ color: exp.color, fontWeight: 700, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                    {exp.company}
                  </p>
                </div>
                <span
                  style={{
                    padding: '5px 14px',
                    borderRadius: 999,
                    height: 'fit-content',
                    whiteSpace: 'nowrap',
                    background: `${exp.color}15`,
                    border: `1px solid ${exp.color}40`,
                    color: exp.color,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  {exp.duration}
                </span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                {exp.points.map((pt, j) => (
                  <li
                    key={j}
                    style={{
                      color: 'var(--mt)',
                      paddingLeft: '1.2rem',
                      position: 'relative',
                      marginBottom: '0.5rem',
                      lineHeight: 1.75,
                      fontSize: '0.88rem',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: exp.color,
                        fontWeight: 700,
                      }}
                    >
                      ▹
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.tech.map((t) => (
                  <Tag key={t} label={t} color={exp.color} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
