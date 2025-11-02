import { useRef, useEffect, useState } from 'react';
import Toggle from './components/Toggle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [showNavbar, setShowNavbar] = useState(false);

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

  return (
    <div className="App">
      <Toggle />
      {showNavbar && <Navbar />}
      <Hero ref={heroRef} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
