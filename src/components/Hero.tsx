import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  const [text, setText] = useState('')
  const fullText = 'Junior Frontend Developer'
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
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Emmanuel</span>
          </h1>
          <h2 className="hero-subtitle">
            {text}<span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            A passionate frontend developer who loves building beautiful, responsive, 
            and interactive web experiences. I specialize in React, Next.js, and modern 
            web technologies, always learning and pushing the boundaries of what's possible.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-circle">
            <div className="hero-avatar">EF</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero