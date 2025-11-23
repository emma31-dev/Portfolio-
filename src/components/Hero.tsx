import { forwardRef, useEffect, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Hero.css'

const Hero = forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>((props, ref) => {
  const { ref: observerRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  const [text, setText] = useState('')
  const fullText = 'Frontend DApp Developer'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index])
        setIndex(index + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (
    <section 
      id="home" 
      className={`hero animate-on-scroll ${isVisible ? 'visible' : ''}`} 
      ref={(node) => {
        observerRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }} 
      {...props}
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Emmanuel</span>
          </h1>
          <h2 className="hero-subtitle">
            {text}<span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Shipped 4+ live web apps with 100+ users. Tech Founder and Freelancer.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="hero-illustration">
        <img src="/illustration.png" alt="Developer illustration" />
      </div>
    </section>
  )
})

export default Hero