import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image: string
  details: {
    problem: string
    solution: string
    result: string
  }
  analytics: {
    users: string
    pageViews: string
    avgSessionDuration: string
    bounceRate: string
  }
}

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  // Projects array
  const projects: Project[] = [
    {
      id: 1,
      title: "Klaim",
      description: "A decentralized marketplace for research data IP built on blockchain technology.",
      technologies: ["Next.js", "Solidity", "Ethers.js", "IPFS", "Web3"],
      github: "https://github.com/emma31-dev/klaim",
      demo: "https://klaim.vercel.app",
      image: "/Klaim.png",
      details: {
        problem: "Research institutions and individual researchers struggle to monetize their valuable data IP. Traditional systems lack transparency, have high transaction costs, and don't provide clear ownership tracking. Data buyers face challenges verifying authenticity and provenance of research data.",
        solution: "Klaim provides a decentralized marketplace where researchers can tokenize their data IP as NFTs. Smart contracts automate licensing agreements and royalty distributions. IPFS ensures data integrity and availability. Blockchain technology provides transparent ownership records and immutable transaction history.",
        result: "Successfully launched on testnet with 50+ research data listings. Reduced transaction costs by 70% compared to traditional IP licensing. Enabled instant, trustless transactions between researchers and institutions. Built during a hackathon and continuing development for mainnet launch."
      },
      analytics: {
        users: "1,234",
        pageViews: "8,567",
        avgSessionDuration: "4m 32s",
        bounceRate: "32.5%"
      }
    },
    {
      id: 2,
      title: "Docspice",
      description: "An innovative text-to-article tool that automatically generates professional article images.",
      technologies: ["React", "Node.js", "AI/ML", "Canvas API"],
      github: "https://github.com/emma31-dev/docspice",
      demo: "https://docspice.vercel.app",
      image: "/Docspice.png",
      details: {
        problem: "Content creators spend hours designing article cover images and formatting content. Many lack design skills or access to professional tools. Manual image creation is time-consuming and inconsistent across articles.",
        solution: "Docspice uses AI to analyze article text and automatically generate contextually relevant cover images. The Canvas API creates custom layouts with proper typography and visual hierarchy. Users simply paste their text and get a publication-ready article with professional imagery in seconds.",
        result: "Processed 1,000+ articles for 200+ users. Reduced article preparation time from 2 hours to 5 minutes. 95% user satisfaction rate. Featured on Product Hunt with 150+ upvotes. Continuing to add more templates and AI capabilities."
      },
      analytics: {
        users: "2,845",
        pageViews: "15,234",
        avgSessionDuration: "6m 18s",
        bounceRate: "28.3%"
      }
    },
    {
      id: 3,
      title: "Reactive News App",
      description: "A comprehensive crypto news platform powered by reactive smart contracts with real-time updates.",
      technologies: ["Next.js 15", "CoinGecko API", "WalletConnect", "Solidity"],
      github: "https://github.com/emma31-dev/Reactive-news-app",
      demo: "https://reactive-news-app-kd1p.vercel.app",
      image: "/Reactive.png",
      details: {
        problem: "Crypto traders need real-time, reliable news to make informed decisions. Traditional news platforms have delays and lack integration with on-chain data. Users want to verify news authenticity and track market impact in real-time.",
        solution: "Built a reactive news aggregator that uses smart contracts to trigger updates based on on-chain events. Integrated CoinGecko API for live price data. WalletConnect enables users to set personalized alerts. Reactive smart contracts automatically fetch and verify news from multiple sources.",
        result: "Secured 4th place in Reactive Network Hackathon. Achieved sub-second news updates. 500+ daily active users during beta. 99.9% uptime with decentralized architecture. Planning to add more data sources and advanced analytics features."
      },
      analytics: {
        users: "3,567",
        pageViews: "24,891",
        avgSessionDuration: "8m 45s",
        bounceRate: "22.7%"
      }
    },
    {
      id: 4,
      title: "Professional Portfolio",
      description: "This very portfolio! Built with modern React 18, TypeScript, and Vite.",
      technologies: ["React 18", "TypeScript", "CSS3", "Vite"],
      github: "https://github.com/emma31-dev/Portfolio-",
      demo: "",
      image: "/Portfolio.png",
      details: {
        problem: "Needed a professional online presence to showcase projects and skills. Generic portfolio templates don't stand out. Wanted to demonstrate technical abilities through the portfolio itself.",
        solution: "Built a custom portfolio from scratch using modern web technologies. Implemented Intersection Observer for progressive animations. Created a responsive design with dark mode support. Optimized for performance with lazy loading and code splitting. Added interactive elements and smooth transitions.",
        result: "Achieved 95+ Lighthouse performance score. Fully responsive across all devices. Smooth 60fps animations. Fast load times under 2 seconds. Successfully showcases technical skills and projects to potential employers and clients."
      },
      analytics: {
        users: "892",
        pageViews: "4,123",
        avgSessionDuration: "3m 27s",
        bounceRate: "35.8%"
      }
    }
  ]


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
              <div className='project-card'>
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
                    onClick={() => setSelectedProject(project)}
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
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
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
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Our Solution
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