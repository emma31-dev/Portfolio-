import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Projects.css'

interface Project {
  id: number,
  title: string,
  description: string,
  technologies: string[],
  github: string,
  demo: string,
  image: string
}

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  
  // Projects array
  const projects: Project[] = [
    {
      id: 1,
      title: "Klaim",
      description: "A decentralized marketplace for research data IP built on blockchain technology. Klaim enables researchers and institutions to securely buy, sell, and license intellectual property rights for research data. Features smart contract-based transactions, IPFS storage, and transparent ownership tracking.",
      technologies: ["Next.js", "Solidity", "Ethers.js", "IPFS", "Web3"],
      github: "https://github.com/emma31-dev/klaim",
      demo: "https://klaim.vercel.app",
      image: "/Klaim.png"
    },
    {
      id: 2,
      title: "Docspice",
      description: "An innovative text-to-article tool that automatically generates professional article images for users. Docspice transforms plain text into beautifully formatted articles with custom-generated cover images, making content creation faster and more visually appealing.",
      technologies: ["React", "Node.js", "AI/ML", "Canvas API"],
      github: "https://github.com/emma31-dev/docspice",
      demo: "https://docspice.vercel.app",
      image: "/Docspice.png"
    },
    {
      id: 3,
      title: "Reactive News App",
      description: "A comprehensive crypto news platform powered by reactive smart contracts featuring real-time updates, clean responsive design, and intuitive user interface. Built for Reactive network hackathon with me coming 4th place.",
      technologies: ["Next.js 15", "CoinGecko API", "WalletConnect", "Solidity"],
      github: "https://github.com/emma31-dev/Reactive-news-app",
      demo: "https://reactive-news-app-kd1p.vercel.app",
      image: "/Reactive.png"
    },
    {
      id: 4,
      title: "Professional Portfolio",
      description: "This very portfolio! Built with modern React 18, TypeScript, and Vite. Features dark mode, responsive design, smooth animations, Intersection Observer for progressive loading, and optimized performance.",
      technologies: ["React 18", "TypeScript", "CSS3", "Vite"],
      github: "https://github.com/emma31-dev/Portfolio-",
      demo: "",
      image: "/Portfolio.png"
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
                  <hr />
                  
                  <p>{project.description}</p>
                  <hr />
                  <div className='project-tech'>
                    {project.technologies.map(tech => (
                      <span>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
      </div>
    </section>
  )
}

export default Projects