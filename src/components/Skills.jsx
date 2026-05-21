import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { SKILLS_DATA } from '../data';

const SkillBar = ({ name, percent, color, delay }) => (
  <div style={{ marginBottom: '0.9rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
      <span style={{ fontSize: '0.84rem', color: 'var(--mt)', fontWeight: 500 }}>{name}</span>
      <span style={{ fontSize: '0.75rem', color, fontWeight: 700 }}>{percent}%</span>
    </div>
    <div
      style={{
        height: 5,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut', delay }}
        style={{
          height: '100%',
          borderRadius: 3,
          background: `linear-gradient(90deg, ${color}, ${color}90)`,
        }}
      />
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" style={{ padding: '6rem 0' }}>
    <div className="container">
      <SectionTitle title="Technical Skills" sub="My Arsenal" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.4rem',
        }}
      >
        {SKILLS_DATA.map(({ cat, emoji, color, items }, ci) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            whileHover={{ y: -7, borderColor: `${color}42` }}
            className="glass"
            style={{ padding: '1.7rem', transition: 'transform 0.3s, border-color 0.3s' }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: `${color}15`,
                border: `1px solid ${color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                marginBottom: '1.25rem',
              }}
            >
              {emoji}
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.4rem' }}>
              {cat}
            </h3>
            {items.map(({ n, p }, i) => (
              <SkillBar
                key={n}
                name={n}
                percent={p}
                color={color}
                delay={ci * 0.1 + i * 0.07}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
