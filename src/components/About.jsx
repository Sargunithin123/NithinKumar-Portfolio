import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const stats = [
  { v: '2+',  l: 'Projects Built'  },
  { v: '100+', l: 'Problems Solved' },
  { v: '5+',  l: 'Technologies'    },
  { v: '2026', l: 'Graduation Year' },
];

const About = () => (
  <section id="about" style={{ padding: '6rem 0', background: 'var(--surf)' }}>
    <div className="container">
      <SectionTitle title="About Me" sub="Get to know me" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: 270,
                height: 270,
                borderRadius: 28,
                background:
                  'linear-gradient(135deg, rgba(0,229,255,0.12), rgba(168,85,247,0.12))',
                border: '2px solid rgba(0,229,255,0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              👨‍💻
            </div>
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{
                position: 'absolute',
                bottom: -14,
                right: -14,
                padding: '8px 16px',
                borderRadius: 12,
                background: 'rgba(0,229,255,0.12)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,229,255,0.35)',
                color: 'var(--a1)',
                fontSize: '0.76rem',
                fontWeight: 700,
              }}
            >
              🚀 Open to Work
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '1rem' }}
          >
            Crafting Digital Experiences with Code
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ lineHeight: 1.9, marginBottom: '1rem' }}
          >
            I'm <strong style={{ color: 'var(--tx)' }}>Nithin Kumar Sargu</strong>, a passionate
            Computer Science & Engineering(CSIT) student from Hyderabad, India. I love transforming
            complex ideas into clean, efficient, and elegant solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ lineHeight: 1.9, marginBottom: '2rem' }}
          >
            My journey is driven by curiosity and a passion for problem-solving. I specialize in
            Full Stack Development, Java programming, and Data Structures & Algorithms, constantly
            exploring new technologies to stay at the cutting edge of software development.
          </motion.p>

          {/* Stats grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.9rem',
            }}
          >
            {stats.map(({ v, l }, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  padding: '1.25rem',
                  background: 'var(--card)',
                  border: '1px solid var(--br)',
                  borderRadius: 13,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, var(--a1), var(--a2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {v}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--mt)', fontWeight: 500, marginTop: 4 }}>
                  {l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
