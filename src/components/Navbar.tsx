import { useState } from 'react'
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Emmanuel</a>
        </div>
        <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Builds
          </a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
        
        <div className="nav-right">
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar