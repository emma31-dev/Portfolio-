import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { projects, type Project } from '../data/projects'
import './Projects.css'

interface ProjectsProps {
  selectedProject?: Project | null
  onProjectSelect?: (project: Project | null) => void
}

const Projects: React.FC<ProjectsProps> = ({ selectedProject: externalSelectedProject, onProjectSelect }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (externalSelectedProject) {
      setSelectedProject(externalSelectedProject)
    }
  }, [externalSelectedProject])

  useEffect(() => {
    if (selectedProject && modalRef.current) {
      modalRef.current.focus()
    }
  }, [selectedProject])

  const handleProjectSelect = (project: Project | null) => {
    setSelectedProject(project)
    if (onProjectSelect) {
      onProjectSelect(project)
    }
  }

  return (
    <section 
      id="projects" 
      className={`projects animate-on-scroll ${isVisible ? 'visible' : ''}`}
      ref={ref}
    >
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications that solve problems and create value for users.
          Check it out yourself
        </p>
        <div className="projects-carousel" aria-label="Projects carousel" aria-live="polite">
          <div className='carousel-container'>
            {projects.map(project => (
              <div key={project.id} className='project-card'>
                <div className='project-image'>
                  <img src={project.image} alt={`${project.title} image`} />
                  <div className='project-btns'>
                    { project.demo && <a href={project.demo} className='btn btn-primary'>Live Demo</a> }
                    <a href={project.github} className='btn btn-secondary'>View code</a>
                  </div>
                </div>
                <div className='project-description'>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-short-desc'>{project.description}</p>
                  <div className='project-tech'>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>
                  <button 
                    className='btn-more-details'
                    onClick={() => handleProjectSelect(project)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal - Rendered via Portal */}
      {selectedProject && createPortal(
        <div 
          className="modal-overlay" 
          onClick={() => handleProjectSelect(null)}
          ref={modalRef}
          tabIndex={-1}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => handleProjectSelect(null)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="modal-tech">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              {/* Analytics Stats */}
              <div className="modal-analytics">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 9L13 14L9 10L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Google Analytics
                </h3>
                <div className="analytics-grid">
                  <div className="analytics-stat">
                    <div className="stat-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{selectedProject.analytics.users}</div>
                      <div className="stat-label">Users</div>
                    </div>
                  </div>
                  <div className="analytics-stat">
                    <div className="stat-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{selectedProject.analytics.pageViews}</div>
                      <div className="stat-label">Page Views</div>
                    </div>
                  </div>
                  <div className="analytics-stat">
                    <div className="stat-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{selectedProject.analytics.avgSessionDuration}</div>
                      <div className="stat-label">Avg. Session</div>
                    </div>
                  </div>
                  <div className="analytics-stat">
                    <div className="stat-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{selectedProject.analytics.bounceRate}</div>
                      <div className="stat-label">Bounce Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Problem Addressed
                </h3>
                <p>{selectedProject.details.problem}</p>
              </div>

              <div className="modal-section">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  My Approach
                </h3>
                <p>{selectedProject.details.approach}</p>
              </div>

              <div className="modal-section">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Solution
                </h3>
                <p>{selectedProject.details.solution}</p>
              </div>

              <div className="modal-section">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Result
                </h3>
                <p>{selectedProject.details.result}</p>
              </div>
            </div>

            <div className="modal-footer">
              {selectedProject.demo && (
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              )}
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Projects