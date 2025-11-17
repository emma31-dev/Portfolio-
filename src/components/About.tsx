import { forwardRef, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './About.css'

const About = forwardRef<HTMLElement, { className?: string }>((props, ref) => {
  const { ref: observerRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      content: "Emmanuel's ability to turn complex ideas into working products is remarkable. His leadership during our hackathon was instrumental in creating what became Klaim.",
      author: "Sarah Chen",
      role: "Co-founder, TechVentures"
    },
    {
      content: "Working with Emmanuel on web3 projects has been incredible. His technical depth and ability to ship quickly sets him apart from other developers.",
      author: "Marcus Johnson",
      role: "Lead Developer, BlockChain Labs"
    },
    {
      content: "Emmanuel delivered Docspice ahead of schedule with features we didn't even know we needed. His attention to clean code and user experience is exceptional.",
      author: "Lisa Rodriguez",
      role: "Product Manager, ContentFlow"
    }
  ]
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }
  return (
    <section 
      id="about" 
      className={`about animate-on-scroll ${isVisible ? 'visible' : ''} ${props.className || ''}`}
      ref={(node) => {
        observerRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
    >
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I am a tech founder and innovator in the tech space. I have built on both web2 and web3 and picked up a few tools.
              I have shipped multiple web apps and dapps as well including my recent founding of <strong>Klaim</strong> a decentralized IP store for large date corpations discussed below.
              I also developed <strong>Docspice</strong> a article generation webapp that generate article images for you discussed below.
            </p>
            <p className="about-paragraph">
              I have also displayed leadership skills leading 3 hackathons, one physical and 2 virtual. I have also been a mentor and coach for 3 startups.
              I have also been a mentor for 3 startups.
            </p>
          </div>
          <div className="about-image">
            <img src="https://pbs.twimg.com/profile_images/1970977337165365248/Ae0Fa8jv.jpg" alt="Emmanuel's Picture" />
          </div>
        </div>
        <div className="testimonial-section">
          <h3 className="testimonial-title">What People Say</h3>
          <div className="testimonial-carousel">
            <button 
              className="carousel-btn carousel-btn-prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="testimonial-carousel-container">
              <div 
                className="testimonial-carousel-track"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="quote-icon">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8C10 8 9 9 9 12C9 15 10 16 10 16H7C7 16 6 15 6 12C6 9 7 8 7 8H10Z" fill="currentColor"/>
                        <path d="M18 8C18 8 17 9 17 12C17 15 18 16 18 16H15C15 16 14 15 14 12C14 9 15 8 15 8H18Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="testimonial-content">
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-btn carousel-btn-next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="journey-section">
          <div className="journey-grid">
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
                I build because waiting for permission is slower than shipping code. 
                Those late night coding sessions will not go to waste as i build the future of web3
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
                To become a standout developer who builds tools that aren't just useful but used by users around the world. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About