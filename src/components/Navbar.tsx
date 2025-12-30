import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import './Navbar.css'

interface NavbarProps {
  onProjectSelect?: (project: Project) => void
}

const Navbar: React.FC<NavbarProps> = ({ onProjectSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
  }

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen)
  }

  const handleProjectClick = (project: Project) => {
    if (onProjectSelect) {
      onProjectSelect(project)
    }
    setIsProjectsDropdownOpen(false)
    setIsMenuOpen(false)
  }

  const handleDownloadClick = (type: 'cv' | 'resume') => {
    // For now, these are disabled - you can add actual download functionality later
    console.log(`Download ${type} clicked - Coming soon!`)
    setIsAboutDropdownOpen(false)
    setIsMenuOpen(false)
  }


  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" className="nav-brand">Portfolio</a>
        </div>
        
        <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <div className="nav-dropdown">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <button 
              className="dropdown-arrow" 
              onClick={toggleAboutDropdown}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              aria-label="Show about dropdown"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div 
              className={`dropdown-menu ${isAboutDropdownOpen ? 'active' : ''}`}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button
                className="dropdown-item disabled"
                onClick={() => handleDownloadClick('resume')}
                disabled
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Resume
                <span className="coming-soon-badge">Soon</span>
              </button>
              <button
                className="dropdown-item disabled"
                onClick={() => handleDownloadClick('cv')}
                disabled
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download CV
                <span className="coming-soon-badge">Soon</span>
              </button>
            </div>
          </div>
          <div className="nav-dropdown">
            <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <button 
              className="dropdown-arrow" 
              onClick={toggleProjectsDropdown}
              onMouseEnter={() => setIsProjectsDropdownOpen(true)}
              onMouseLeave={() => setIsProjectsDropdownOpen(false)}
              aria-label="Show project dropdown"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div 
              className={`dropdown-menu ${isProjectsDropdownOpen ? 'active' : ''}`}
              onMouseEnter={() => setIsProjectsDropdownOpen(true)}
              onMouseLeave={() => setIsProjectsDropdownOpen(false)}
            >
              {projects.map((project) => (
                <button
                  key={project.id}
                  className="dropdown-item"
                  onClick={() => handleProjectClick(project)}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
          <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Builds
          </a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
        
        <div className="nav-right">
          <a href="https://www.upwork.com/freelancers/~01d3795bc9ec0baaf9" target="_blank" rel="noopener noreferrer" className="nav-hire-btn">
            Hire Me
          </a>
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