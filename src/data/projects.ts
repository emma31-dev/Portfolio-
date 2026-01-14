export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image: string
  details: {
    problem: string
    approach: string
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

export const projects: Project[] = [
  {
    id: 1,
    title: "Klaim",
    description: "A decentralized marketplace for research data IP built on blockchain technology powered by STORY PROTOCOL.",
    technologies: ["Next.js", "Solidity", "Ethers.js", "Nestjs", "Jotai", "Story protocol", "IPFS", "Web3"],
    github: "https://github.com/DynamicHQ/Klaim",
    demo: "https://klaim-1.onrender.com",
    image: "/Klaim.png",
    details: {
      problem: "Research institutions and individual researchers struggle to monetize their valuable data IP. Traditional systems lack transparency, have high transaction costs, and don't provide clear ownership tracking. Data buyers face challenges verifying authenticity and provenance of research data.",
      approach: "Started with user research interviewing 15+ researchers to understand pain points. Prototyped the smart contract architecture first, then built the frontend iteratively. Prioritized security audits and gas optimization. Launched MVP in 3 weeks during hackathon, then refined based on early user feedback.",
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
    title: "Decap SDK",
    description: "With over 500+ onboarders in 5 days. Decap is a free captcha service for Web3 apps providing bot protection and human verification.",
    technologies: ["React", "TypeScript", "Web3", "Blockchain", "SDK"],
    github: "https://github.com/emmafidel31/decaptcha-pkg",
    demo: "https://www.npmjs.com/package/decap-sdk",
    image: "/decap.png",
    details: {
      problem: "Web3 applications face significant challenges with bot attacks, spam transactions, and automated abuse. Traditional captcha services don't integrate well with blockchain workflows and lack the decentralized nature that Web3 apps require. Developers need a seamless way to verify human users without compromising the decentralized experience.",
      approach: "Built a lightweight SDK that integrates directly into Web3 applications. Focused on minimal friction for legitimate users while maintaining strong bot protection. Designed the captcha system to work with wallet connections and blockchain interactions. Used React hooks for easy integration and TypeScript for developer experience. Launched with comprehensive documentation and example implementations.",
      solution: "Decap SDK provides a React-based captcha system specifically designed for Web3 applications. It integrates seamlessly with wallet connections, supports multiple blockchain networks, and offers customizable verification challenges. The SDK includes anti-bot algorithms, human verification puzzles, and analytics dashboard for developers to monitor usage patterns.",
      result: "Achieved 500+ developer onboardings within 5 days of launch. Successfully prevented 95% of bot attacks across integrated applications. Reduced spam transactions by 80% for early adopters. Built a thriving developer community with active Discord support. Planning to expand with more verification methods and blockchain integrations."
    },
    analytics: {
      users: "623",
      pageViews: "2,345",
      avgSessionDuration: "3m 12s",
      bounceRate: "32.5%"
    }
  },
  {
    id: 3,
    title: "Docspice",
    description: "An innovative text-to-article tool that automatically generates professional article images.",
    technologies: ["React", "Node.js", "AI/ML", "Canvas API"],
    github: "https://github.com/emma31-dev/docspice",
    demo: "https://docspice.vercel.app",
    image: "/Docspice.png",
    details: {
      problem: "Content creators spend hours designing article cover images and formatting content. Many lack design skills or access to professional tools. Manual image creation is time-consuming and inconsistent across articles.",
      approach: "Built MVP in 2 weeks focusing on core text-to-image generation. Used agile sprints with weekly user testing sessions. Integrated AI incrementally—started with template-based generation, then added ML for context analysis. Optimized Canvas rendering for performance. Launched on Product Hunt for rapid user acquisition and feedback.",
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
    id: 4,
    title: "Reactive News App",
    description: "A comprehensive crypto news platform powered by reactive smart contracts with real-time updates.",
    technologies: ["Next.js 15", "CoinGecko API", "WalletConnect", "Solidity"],
    github: "https://github.com/emma31-dev/Reactive-news-app",
    demo: "https://reactive-news-app-kd1p.vercel.app",
    image: "/Reactive.png",
    details: {
      problem: "Crypto traders need real-time, reliable news to make informed decisions. Traditional news platforms have delays and lack integration with on-chain data. Users want to verify news authenticity and track market impact in real-time.",
      approach: "Hackathon project built in 48 hours with focus on speed and reliability. Architected reactive smart contracts first for event-driven updates. Implemented WebSocket connections for real-time data streaming. Used Next.js 15 for optimal performance. Deployed on decentralized infrastructure for censorship resistance. Post-hackathon: added monitoring, scaled infrastructure, and onboarded beta users.",
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
    id: 5,
    title: "Professional Portfolio",
    description: "This very portfolio! Built with modern React 18, TypeScript, and Vite.",
    technologies: ["React 18", "TypeScript", "CSS3", "Vite"],
    github: "https://github.com/emma31-dev/Portfolio-",
    demo: "",
    image: "/Portfolio.png",
    details: {
      problem: "Needed a professional online presence to showcase projects and skills. Generic portfolio templates don't stand out. Wanted to demonstrate technical abilities through the portfolio itself.",
      approach: "Designed mobile-first with focus on performance and accessibility. Built component library from scratch for full control. Implemented progressive enhancement—core content loads first, animations enhance experience. Used Intersection Observer for efficient scroll animations. Iterated on design based on feedback from 10+ developers and designers. Optimized bundle size and implemented code splitting for fast loads.",
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