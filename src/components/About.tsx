import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about animate-on-scroll" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Systems engineer with a fullstack background</p>

        <div className="about-content">
          <div className="about-intro">
            <p>
              I started out as a fullstack developer, building web apps and APIs across the stack.
              Over time my interests shifted toward lower-level systems — how things actually work
              under the hood — and I made the deliberate move into systems engineering.
            </p>
            <p>
              Today I focus on building secure, high-performance infrastructure in Rust — backend
              services and RESTful APIs with Axum, and smart contracts on NEAR Protocol and
              Solidity-based EVM chains. I'm also an Electrical/Electronics Engineering student,
              which keeps me grounded in the hardware side of the stack.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Systems &amp; Infrastructure</h3>
              <ul>
                <li>Building high-performance, memory-safe backend services in Rust</li>
                <li>Designing RESTful APIs with Axum — type-safe routing, middleware, and async handlers</li>
                <li>Applying systems-level thinking to concurrency, resource management, and fault tolerance</li>
                <li>Transitioning fullstack patterns into low-level, production-grade infrastructure</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Blockchain &amp; Smart Contracts</h3>
              <ul>
                <li>Writing smart contracts in Rust for the NEAR Protocol</li>
                <li>Developing and auditing Solidity contracts on EVM-compatible networks</li>
                <li>Building decentralized protocols with an emphasis on security and efficiency</li>
                <li>Bridging on-chain logic with performant off-chain Axum backend services</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Background</h3>
              <ul>
                <li>Started in fullstack development — React, Node.js, ElysiaJS, REST, databases</li>
                <li>Shifted focus to systems engineering and Rust as a primary language</li>
                <li>Electrical/Electronics Engineering student with hardware-level context</li>
                <li>Long-term goal: embedded systems and low-level firmware engineering</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Current Focus</h3>
              <ul>
                <li>Axum-based backend architecture — async Rust, tower middleware, structured error handling</li>
                <li>NEAR Protocol smart contracts in Rust — storage, cross-contract calls, and security patterns</li>
                <li>Solidity contract development on EVM networks</li>
                <li>Open source contributions in the Rust and blockchain space</li>
              </ul>
            </div>
          </div>

          <div className="about-cta">
            <p className="about-cta-lead">
              Most of what I build lives in the open. Rust services, NEAR contracts and  EVM experiments.
              if I'm working on it, it's probably on GitHub.
            </p>
            <a
              href="https://github.com/emma31-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta-link"
            >
              See my projects here
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
