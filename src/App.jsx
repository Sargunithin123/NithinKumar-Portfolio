import { useTheme } from './hooks/useTheme';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Skills        from './components/Skills';
import Projects      from './components/Projects';
import Education     from './components/Education';
import Certifications from './components/Certifications';
import Experience    from './components/Experience';
import Achievements  from './components/Achievements';
import Resume        from './components/Resume';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import BackToTop     from './components/BackToTop';

function App() {
  const { dark, toggle } = useTheme();

  return (
    <>
      <Navbar dark={dark} toggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
