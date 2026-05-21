import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Tag from './ui/Tag';
import { PROJECTS } from '../data';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map((p) => p.cat))];
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section id="projects" style={{ padding: '6rem 0', background: 'var(--surf)' }}>
      <div className="container">
        <SectionTitle title="Featured Projects" sub="My Work" />

        {/* Filter buttons */}
        <div
          style={{
            display: 'flex',
            gap: '0.7rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setFilter(cat)}
              style={{
                padding: '7px 20px',
                borderRadius: 999,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                ...(filter === cat
                  ? {
                      background: 'linear-gradient(135deg, var(--a1), var(--a2))',
                      border: 'none',
                      color: '#fff',
                    }
                  : {
                      background: 'transparent',
                      border: '1px solid var(--br)',
                      color: 'var(--mt)',
                    }),
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '2rem',
            }}
          >
            {shown.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.1} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, delay }) => {
  const { emoji, title, desc, tech, cat, accent, github, demo } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -9 }}
      className="glass"
      style={{ overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}45`;
        e.currentTarget.style.boxShadow = `0 20px 60px ${accent}14`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--br)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Header banner */}
      <div
        style={{
          height: 170,
          background: `linear-gradient(135deg, ${accent}18, ${accent}05)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {emoji}
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '4px 12px',
            borderRadius: 999,
            background: `${accent}20`,
            color: accent,
            fontSize: '0.7rem',
            fontWeight: 700,
            border: `1px solid ${accent}40`,
          }}
        >
          {cat}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '1.7rem' }}>
        <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.65rem' }}>{title}</h3>
        <p style={{ lineHeight: 1.75, fontSize: '0.86rem', marginBottom: '1.25rem' }}>{desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.4rem' }}>
          {tech.map((t) => (
            <Tag key={t} label={t} color={accent} />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.7rem' }}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: 11,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              background: 'transparent',
              border: '1px solid var(--br)',
              color: 'var(--mt)',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--tx)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--mt)'; }}
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: 11,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              background: `${accent}10`,
              border: `1px solid ${accent}40`,
              color: accent,
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = `${accent}20`; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = `${accent}10`; }}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
