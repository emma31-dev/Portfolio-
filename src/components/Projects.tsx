import React, { useState, useEffect } from 'react'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  impact: {
    users: string
    improvement: string
    metric: string
  }
  github: string
  demo: string
  image: string
}

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Crypto News Web App",
      description: "A comprehensive cryptocurrency news platform featuring dark/light mode toggle, real-time updates, clean responsive design, and intuitive user interface. Built with modern JavaScript and API integration.",
      technologies: ["React", "CSS3", "News API", "JavaScript", "Dark Mode"],
      impact: {
        users: "Live Demo Available",
        improvement: "Seamless theme switching",
        metric: "Fully responsive design"
      },
      github: "https://github.com/emmanuelfidel/crypto-news-app",
      demo: "https://crypto-news-demo.netlify.app",
      image: ""
    },
    {
      id: 2,
      title: "Countdown Timer App",
      description: "An elegant countdown timer application with light/dark theme switching, smooth animations, and intuitive user interface. Features local storage persistence and clean design patterns.",
      technologies: ["JavaScript", "CSS3", "HTML5", "Local Storage", "Animations"],
      impact: {
        users: "Interactive Demo",
        improvement: "Polished user experience",
        metric: "Theme persistence across sessions"
      },
      github: "https://github.com/emmanuelfidel/countdown-timer",
      demo: "https://countdown-timer-demo.netlify.app",
      image: ""
    },
    {
      id: 3,
      title: "Professional Portfolio",
      description: "This very portfolio! Built with modern React 18, TypeScript, and Vite. Features dark mode, responsive design, smooth animations, contact form integration, and optimized performance.",
      technologies: ["React 18", "TypeScript", "CSS3", "Vite", "EmailJS"],
      impact: {
        users: "You're experiencing it!",
        improvement: "Modern development stack",
        metric: "Optimized performance & UX"
      },
      github: "https://github.com/emmanuelfidel/portfolio",
      demo: "#home",
      image: ""
    },
    {
      id: 4,
      title: "AI-Powered Task Manager",
      description: "Smart task management application with AI-driven prioritization, natural language processing for task creation, and intelligent deadline suggestions. Features collaborative workspaces and productivity analytics.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Tailwind CSS"],
      impact: {
        users: "2,500+ active users",
        improvement: "65% productivity increase",
        metric: "4.9/5 user satisfaction"
      },
      github: "https://github.com/emmanuelfidel/ai-task-manager",
      demo: "https://ai-task-manager.vercel.app",
      image: ""
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced filtering, real-time inventory management, secure payment integration, and comprehensive admin dashboard. Built for scalability and performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      impact: {
        users: "15K+ customers served",
        improvement: "40% faster checkout",
        metric: "99.9% uptime reliability"
      },
      github: "https://github.com/emmanuelfidel/ecommerce-platform",
      demo: "https://ecommerce-demo.herokuapp.com",
      image: ""
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [projects.length])

  // Add icons for the new projects
  const getProjectIcon = (id: number) => {
    switch (id) {
      case 1:
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="white"/>
            <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="white"/>
          </svg>
        )
      case 2:
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 3:
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.09 6.09C4.93 4.93 4.93 3.07 6.09 1.91L10.5 6.32L17.68 13.5L22.09 17.91C20.93 19.07 19.07 19.07 17.91 17.91L6.09 6.09Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12L8 8M16 12C18.21 12 20 10.21 20 8C20 5.79 18.21 4 16 4C13.79 4 12 5.79 12 8C12 10.21 13.79 12 16 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 4:
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 7L12 12L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 5:
        return (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L3 6V20C3 21.11 3.89 22 5 22H19C20.11 22 21 21.11 21 20V6L18 2H6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 10C16 11.11 15.11 12 14 12C12.89 12 12 11.11 12 10C12 8.89 12.89 8 14 8C15.11 8 16 8.89 16 10Z" stroke="white" strokeWidth="2"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications that solve problems and create value for users
        </p>
        <div className="projects-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <div className="project-icon">
                      {getProjectIcon(project.id)}
                    </div>
                    <div className="project-overlay">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Live Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        View Code
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-impact">
                      <h4>Impact & Results</h4>
                      <div className="impact-metrics">
                        <div className="impact-item">
                          <span className="impact-number">{project.impact.users}</span>
                          <span className="impact-label">Active Users</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">{project.impact.improvement}</span>
                          <span className="impact-label">Performance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">{project.impact.metric}</span>
                          <span className="impact-label">User Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <div className="carousel-navigation">
            <button 
              className="carousel-btn prev"
              onClick={() => setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1)}
              aria-label="Previous project"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="15,18 9,12 15,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="carousel-btn next"
              onClick={() => setCurrentIndex((currentIndex + 1) % projects.length)}
              aria-label="Next project"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="9,18 15,12 9,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects