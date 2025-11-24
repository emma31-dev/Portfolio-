import { forwardRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Skills.css'

interface DAppType {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

const Skills = forwardRef<HTMLElement, { className?: string }>((props, ref) => {
  const { ref: observerRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  
  const dappTypes: DAppType[] = [
    {
      title: "DeFi Applications",
      description: "Decentralized finance platforms for the future of banking",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ["Token Swaps & DEX", "Staking Platforms", "Yield Farming", "Lending Protocols"]
    },
    {
      title: "NFT Marketplaces",
      description: "Buy, sell, and trade digital assets on the blockchain",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      features: ["Minting Platforms", "Auction Systems", "Royalty Management", "Collection Galleries"]
    },
    {
      title: "DAO Platforms",
      description: "Decentralized governance and community-driven organizations",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 11C8.13 11 5 13.13 5 15.75V19H19V15.75C19 13.13 15.87 11 12 11Z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="6" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      features: ["Voting Systems", "Proposal Management", "Treasury Control", "Member Governance"]
    },
    {
      title: "Web3 Social Platforms",
      description: "Decentralized social networks with user ownership",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2C16.75 2 21 6.25 21 11.5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 22L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      features: ["Token-Gated Content", "Decentralized Identity", "On-Chain Messaging", "Creator Monetization"]
    },
    {
      title: "Portfolio Websites",
      description: "Modern, responsive portfolios that showcase your work",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 3V9" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8" cy="15" r="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 13L18 17M18 13L14 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      features: ["Custom Design", "Performance Optimized", "SEO Ready", "Mobile Responsive"]
    },
    {
      title: "E-commerce Platforms",
      description: "Full-featured online stores with payment integration",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2L1 6V18L9 22L17 18L23 21V9L17 6L9 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"]
    }
  ]

  return (
    <section 
      id="skills" 
      className={`skills animate-on-scroll ${isVisible ? 'visible' : ''} ${props.className || ''}`}
      ref={(node) => {
        observerRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
    >
      <div className="container">
        <h2 className="section-title">What I Can Build For You</h2>
        <p className="section-subtitle">
          Specialized in creating cutting-edge decentralized applications across various domains
        </p>
        
        <div className="skills-content">
          <div className="dapp-types-grid">
            {dappTypes.map((dapp, index) => (
              <div key={index} className="dapp-type-card">
                <div className="dapp-icon">
                  {dapp.icon}
                </div>
                <h3 className="dapp-title">{dapp.title}</h3>
                <p className="dapp-description">{dapp.description}</p>
                <ul className="dapp-features">
                  {dapp.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Skills