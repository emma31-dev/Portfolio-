import { useRef, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [ showNavbar, setShowNavbar ] = useState(true);

  useEffect(() => {
    if (!heroRef.current)
      return;
    const observer = new IntersectionObserver(([entry]) => {
      setShowNavbar(!entry.isIntersecting);
      //hide navbar when hero is fully in view
    }, { threshold: 1.0 }
  );

  if(heroRef.current) {
    observer.observe(heroRef.current);
  }

  return () => {
    if (heroRef.current) {
      observer.unobserve(heroRef.current);
    }
  }
  }, [])
  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
