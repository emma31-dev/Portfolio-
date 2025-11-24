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
            <a href="https://calendly.com/emmanuelfidel07" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Book Appointment
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