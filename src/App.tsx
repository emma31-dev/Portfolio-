import { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Project } from './data/projects';
import './App.css';

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const navbarObserver = new IntersectionObserver(
      ([entry]) => setShowNavbar(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (heroRef.current) navbarObserver.observe(heroRef.current);
    
    return () => {
      navbarObserver.disconnect();
    };
  }, []);

  const handleProjectSelect = (project: Project | null) => {
    setSelectedProject(project);
  };

  return (
    <div className="App">
      {showNavbar && <Navbar onProjectSelect={handleProjectSelect} />}
      <Hero ref={heroRef} />
      <About />
      <Projects selectedProject={selectedProject} onProjectSelect={handleProjectSelect} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
