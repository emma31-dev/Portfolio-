import React from 'react'
import './Skills.css'

interface Skill {
  name: string
  level: number
  category: string
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend Technologies
    { name: "JavaScript/ES6+", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "React.js 18", level: 95, category: "Frontend" },
    { name: "Next.js 15", level: 85, category: "Frontend" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "React-Native", level: 10, category: "Frontend" },
    
    // Tools & Others
    { name: "Git/GitHub", level: 90, category: "Tools" },
    { name: "Webpack/Vite", level: 85, category: "Tools" },
    { name: "Jest/Testing Library", level: 80, category: "Tools" },
    { name: "Figma/Design", level: 75, category: "Tools" },
    { name: "Vercel", level: 70, category: "Tools" },
    { name: "PXXL", level: 60, category: "Tools"},
    { name: "Thirdweb SDK", level: 10, category: "Tools" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Next.js server", level: 50, category: "Backend" },
    { name: "Solidity", level: 30, category: "Backend" },
    { name: "Hardhat", level: 10, category: "Backend" },
    { name: "Ethers.js", level: 5, category: "Backend"},
    { name: "MongoDB", level: 40, category: "Backend" },
    { name: "Helia/IPFS", level: 40, category: "Backend"}
  ]

  const categories = ["Frontend", "Tools", "Backend"]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Constantly learning and mastering the latest technologies
        </p>
        
        <div className="skills-content">
          <div className="skills-categories">
            {categories.map((category) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skills-list">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
          
          <div className="experience-section">
            <h3>Experience Highlights</h3>
            <div className="experience-cards">
              <div className="experience-card">
                <div className="experience-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14L8 10L9.41 8.59L12 11.17L14.59 8.59L16 10L12 14Z" fill="#667eea"/>
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13.5 4.68C13.18 4.84 13 5.18 13 5.5V7.5C13 7.78 13.22 8 13.5 8H15L21 9ZM3 13V15L9 18L10.5 17.32C10.82 17.16 11 16.82 11 16.5V14.5C11 14.22 10.78 14 10.5 14H9L3 13Z" fill="#667eea"/>
                  </svg>
                </div>
                <h4>Professional Development</h4>
                <p>10+ months building scalable web applications with modern frameworks and best practices.</p>
              </div>
              <div className="experience-card">
                <div className="experience-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L22 9L13.09 15.74L15.18 22L12 18.27L8.82 22L10.91 15.74L2 9L10.91 8.26L12 2Z" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Performance Optimization</h4>
                <p>Improved application performance by up to 60% through code optimization and best practices.</p>
              </div>
              <div className="experience-card">
                <div className="experience-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19H7V21H5V19C5 18.45 5.45 18 6 18H18C18.55 18 19 18.45 19 19V21H17ZM7 16V10C7 6.69 9.69 4 13 4S19 6.69 19 10V16H17V10C17 7.79 15.21 6 13 6S9 7.79 9 10V16H7Z" fill="#667eea"/>
                    <circle cx="9" cy="13" r="1" fill="#667eea"/>
                    <circle cx="15" cy="13" r="1" fill="#667eea"/>
                    <circle cx="17" cy="13" r="1" fill="#667eea"/>
                  </svg>
                </div>
                <h4>Team Collaboration</h4>
                <p>Experience working in agile teams, code reviews, and mentoring 5 other junior developers.</p>
              </div>
              <div className="experience-card">
                <div className="experience-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#667eea"/>
                    <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="#667eea"/>
                  </svg>
                </div>
                <h4>Continuous Learning</h4>
                <p>Always staying updated with the latest technologies, frameworks, and industry trends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills