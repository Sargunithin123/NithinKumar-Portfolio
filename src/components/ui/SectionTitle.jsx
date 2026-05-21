import { motion } from 'framer-motion';

const SectionTitle = ({ title, sub }) => (
  <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        color: 'var(--a1)',
        fontWeight: 700,
        letterSpacing: '0.18em',
        fontSize: '0.78rem',
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}
    >
      {sub}
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        fontSize: 'clamp(1.9rem, 5vw, 2.7rem)',
        fontWeight: 900,
        color: 'var(--tx)',
      }}
    >
      {title}
    </motion.h2>

    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      style={{
        width: 56,
        height: 4,
        background: 'linear-gradient(90deg, var(--a1), var(--a2))',
        borderRadius: 2,
        margin: '1rem auto 0',
      }}
    />
  </div>
);

export default SectionTitle;
