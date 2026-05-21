import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { ACHIEVEMENTS } from '../data';

const Achievements = () => (
  <section id="achievements" style={{ padding: '6rem 0', background: 'var(--surf)' }}>
    <div className="container">
      <SectionTitle title="Achievements" sub="Milestones" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {ACHIEVEMENTS.map(({ label, value, emoji, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass"
            style={{ padding: '2rem', textAlign: 'center', transition: 'transform 0.3s' }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 17,
                margin: '0 auto 1rem',
                background: `${color}15`,
                border: `1px solid ${color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.7rem',
              }}
            >
              {emoji}
            </div>

            <div
              style={{
                fontSize: '2.3rem',
                fontWeight: 900,
                marginBottom: '0.35rem',
                background: `linear-gradient(135deg, ${color}, var(--a2))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {value}
            </div>

            <p style={{ color: 'var(--mt)', fontWeight: 600, fontSize: '0.85rem' }}>{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
