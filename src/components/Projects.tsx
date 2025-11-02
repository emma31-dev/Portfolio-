import { useState, useEffect, useRef, useCallback, forwardRef } from 'react'
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

const Projects = forwardRef<HTMLElement, { className?: string }>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<number | null>(null)
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Reactive news App",
      description: "A comprehensive reactive network news platform featuring dark/light mode toggle, real-time updates, clean responsive design, and intuitive user interface. Built with modern JavaScript and API integration.",
      technologies: ["React", "Tailwind", "Nextjs", "News API", "WalletConnect", "Solidity"],
      impact: {
        users: "Live Demo Available",
        improvement: "Seamless theme switching",
        metric: "Fully responsive design"
      },
      github: "https://github.com/emmanuelfidel/Reactive-news-app",
      demo: "https://crypto-news-demo.netlify.app",
      image: "/Reactive.png"
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
      image: "/Portfolio.png"
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
      demo: "",
      image: "/Portfolio.png"
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
      image: "/Reactive.png"
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
      image: "/Portfolio.png"
    }
  ]


  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [projects.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }, [projects.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === ' ') {
      e.preventDefault()
      setIsAutoplay(!isAutoplay)
    }
  }, [nextSlide, prevSlide, isAutoplay])

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(nextSlide, 4000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoplay, nextSlide])

  // Keyboard event listener
  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown)
      return () => carousel.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false)
  const handleMouseLeave = () => setIsAutoplay(true)

  return (
    <section id="projects" className={`projects ${props.className || ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications that solve problems and create value for users
        </p>
        <div 
          className="projects-carousel"
          ref={carouselRef}
          tabIndex={0}
          role="region"
          aria-label="Projects carousel"
          aria-live="polite"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  aria-hidden={index !== currentIndex}
                >
                  <div className="project-left">
                    <div className="project-image">
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={`${project.title} screenshot`}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="project-buttons">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                          Live Demo
                        </a>
                      )}
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
              onClick={prevSlide}
              aria-label={`Previous project. Currently showing ${projects[currentIndex].title}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="15,18 9,12 15,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="carousel-btn next"
              onClick={nextSlide}
              aria-label={`Next project. Currently showing ${projects[currentIndex].title}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="9,18 15,12 9,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Autoplay Control */}
          <button 
            className="autoplay-btn"
            onClick={() => setIsAutoplay(!isAutoplay)}
            aria-label={isAutoplay ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isAutoplay ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="5,3 19,12 5,21" fill="currentColor"/>
              </svg>
            )}
          </button>
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators" role="tablist">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to ${project.title}`}
                aria-controls={`project-${project.id}`}
              />
            ))}
          </div>
          
          {/* Screen Reader Status */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Showing project {currentIndex + 1} of {projects.length}: {projects[currentIndex].title}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Projects