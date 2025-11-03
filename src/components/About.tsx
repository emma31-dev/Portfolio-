import { forwardRef } from 'react'
import './About.css'

const About = forwardRef<HTMLElement, { className?: string }>((props, ref) => {
  return (
    <section id="about" className={`about ${props.className || ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="quote-section">
          <blockquote className="inspirational-quote">
            <span className="quote-mark">&quot;</span>
            Simplicity is the greatest sophistication
            <span className="quote-mark">&quot;</span>
            <cite>— Leonardo da Vinci</cite>
          </blockquote>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I love Simplicity in my work and i try to make every project i work on as optimized as possible.
              I started my journey in Data analysis actually but quickly transitioned when i knew it wasn't the career for me.
              I've grown into a developer who not only writes code but also thinks in performance, design, user experience, and product goals.
            </p>
            <p className="about-paragraph">
              What sets me apart is my speed of learning and the way I take ownership of my growth. 
              I am free going working on projects with or without AI. 
              I use AI as a tool to support my ideas not replace them. 
              Every project I build is led by my vision, guided by logic, and improved by feedback.
              And no, AI isn't replacing me(*yet).
            </p>
          </div>
          <div className="about-image">
            <div className="about-card">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '0.5rem', verticalAlign: 'middle'}}>
                  <polyline points="16,18 22,12 16,6" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="8,6 2,12 8,18" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Technical Strengths
              </h3>
              <ul>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="var(--text-secondary)" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="var(--text-secondary)" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="var(--text-secondary)" strokeWidth="2"/>
                  </svg>
                  Clean UI development
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="var(--text-secondary)" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="var(--text-secondary)" strokeWidth="2"/>
                  </svg>
                  Theme toggling
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7.5L14.5 2Z" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Clean codebase organization
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Git commands expertise
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="16,18 22,12 16,6" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="8,6 2,12 8,18" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Type logic understanding
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Build MVPs quickly
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="journey-section">
          <div className="journey-grid">
            <div className="journey-card">
              <div className="journey-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17H7.5C5.567 17 4 15.433 4 13.5S5.567 10 7.5 10C8.5 8.5 10.5 8 12 8S15.5 8.5 16.5 10C18.433 10 20 11.567 20 13.5S18.433 17 16.5 17H14.337" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="13,13 12,14 11,13" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14V21" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Currently Learning</h3>
              <ul>
                <li>Deeper frontend with nextjs and Redux</li>
                <li>Deeper backend with NodeJS and Express, Nestjs maybe</li>
                <li>Mobile development with Flutter & React Native</li>
                <li>Web3 integrations preparing for dApps in 2026</li>
              </ul>
            </div>
            
            <div className="journey-card">
              <div className="journey-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.07 4.93C17.22 3.08 14.66 2 12 2C9.34 2 6.78 3.08 4.93 4.93C3.08 6.78 2 9.34 2 12C2 14.66 3.08 17.22 4.93 19.07C6.78 20.92 9.34 22 12 22C14.66 22 17.22 20.92 19.07 19.07C20.92 17.22 22 14.66 22 12C22 9.34 20.92 6.78 19.07 4.93Z" stroke="var(--text-primary)" strokeWidth="2"/>
                  <path d="M8 12H16" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8V16" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 9L9 15" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 9L15 15" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>What Drives Me</h3>
              <p>
                I love solving problems(ex-mathematician). I can solve yours for you. For a fee ofcourse. 
                I'm focused on becoming a well-rounded full-stack Web3 developer. 
                Most importantly I want to make money. 
                Truth is, everyone wants money Atleast I'm honest with you.
              </p>
            </div>
            
            <div className="journey-card">
              <div className="journey-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="var(--text-primary)" strokeWidth="2"/>
                  <path d="M2 12H22" stroke="var(--text-primary)" strokeWidth="2"/>
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="var(--text-primary)" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Vision</h3>
              <p>
                To become a standout developer who builds tools that are useful, usable, and scalable. 
                Whether through a startup idea, freelance work, or joining teams. I'm here to build 
                and leave impact through clean code and creative solutions to current and potential problems.
                Yes, potential problems, problems will always arise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About