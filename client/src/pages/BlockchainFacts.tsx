import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';

interface BlockchainFact {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export default function BlockchainFacts() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Blockchain facts data
  const facts: BlockchainFact[] = [
    {
      id: 1,
      title: "Bitcoin's Origin",
      description: "Bitcoin, the first blockchain, was created in 2008 by an anonymous person or group known as Satoshi Nakamoto. The whitepaper 'Bitcoin: A Peer-to-Peer Electronic Cash System' was published on October 31, 2008, during the global financial crisis.",
      icon: "fa-bitcoin",
      category: "history"
    },
    {
      id: 2,
      title: "The First Bitcoin Transaction",
      description: "The first commercial Bitcoin transaction was for pizza. In May 2010, Laszlo Hanyecz bought two pizzas for 10,000 BTC, which would be worth hundreds of millions of dollars today.",
      icon: "fa-pizza-slice",
      category: "history"
    },
    {
      id: 3,
      title: "Blockchain Size",
      description: "The Bitcoin blockchain contains a complete record of all transactions ever made on the network, and now exceeds 400 GB in size. It continues to grow with each new block added approximately every 10 minutes.",
      icon: "fa-database",
      category: "technical"
    },
    {
      id: 4,
      title: "Decentralization",
      description: "Unlike traditional banking systems, blockchains are decentralized, meaning they operate on thousands of computers worldwide rather than from a central location, making them resistant to censorship and single points of failure.",
      icon: "fa-network-wired",
      category: "technical"
    },
    {
      id: 5,
      title: "Immutability",
      description: "Once data is recorded on a blockchain, it becomes extremely difficult to change or remove. This immutability is achieved through cryptographic hashing, consensus mechanisms, and the distributed nature of the network.",
      icon: "fa-lock",
      category: "technical"
    },
    {
      id: 6,
      title: "Smart Contracts",
      description: "Smart contracts are self-executing contracts with the terms directly written into code. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries in many complex transactions.",
      icon: "fa-file-contract",
      category: "applications"
    },
    {
      id: 7,
      title: "NFTs",
      description: "Non-Fungible Tokens (NFTs) represent ownership of unique digital items on a blockchain. Unlike cryptocurrencies, each NFT has distinct value and cannot be exchanged on a 1:1 basis like identical currencies.",
      icon: "fa-paint-brush",
      category: "applications"
    },
    {
      id: 8,
      title: "Mining Energy Consumption",
      description: "Bitcoin mining consumes more electricity annually than many countries. However, newer blockchain technologies like Proof of Stake consume up to 99.95% less energy than traditional Proof of Work systems.",
      icon: "fa-bolt",
      category: "environment"
    },
    {
      id: 9,
      title: "Market Capitalization",
      description: "As of 2023, the total market capitalization of all cryptocurrencies has exceeded $1 trillion, with Bitcoin typically accounting for around 40-60% of this value.",
      icon: "fa-chart-line",
      category: "economics"
    },
    {
      id: 10,
      title: "Blockchain Beyond Crypto",
      description: "While initially created for digital currencies, blockchain technology has applications in supply chain management, voting systems, healthcare, real estate, and many other industries.",
      icon: "fa-industry",
      category: "applications"
    },
    {
      id: 11,
      title: "Blockchain and Digital Identity",
      description: "Blockchain technology enables self-sovereign identity systems where individuals control their personal data instead of relying on centralized authorities, potentially reducing identity theft and improving privacy.",
      icon: "fa-id-card",
      category: "applications"
    },
    {
      id: 12,
      title: "Consensus Mechanisms",
      description: "Blockchains use various consensus mechanisms to validate transactions. Proof of Work (PoW) relies on computing power, while Proof of Stake (PoS) requires validators to lock up tokens as collateral.",
      icon: "fa-check-circle",
      category: "technical"
    },
    {
      id: 13,
      title: "Interoperability Challenges",
      description: "One of the major challenges in blockchain technology is developing standards for different blockchains to communicate with each other seamlessly, known as interoperability.",
      icon: "fa-exchange-alt",
      category: "technical"
    },
    {
      id: 14,
      title: "Blockchain Growth Projection",
      description: "The global blockchain market is projected to grow from $7.18 billion in 2022 to $163.83 billion by 2029, at a CAGR of 56.3%, driven by increasing adoption across multiple sectors.",
      icon: "fa-chart-bar",
      category: "economics"
    },
    {
      id: 15,
      title: "Quantum Computing Threat",
      description: "Quantum computing poses a potential future threat to current blockchain encryption. Researchers are developing quantum-resistant cryptographic algorithms to prepare for this challenge.",
      icon: "fa-atom",
      category: "future"
    }
  ];

  // Filter facts based on active category
  const filteredFacts = activeCategory === 'all' 
    ? facts 
    : facts.filter(fact => fact.category === activeCategory);
  
  useEffect(() => {
    // Initialize animations
    const animateOnScroll = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('animate-in');
        }
      });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Check theme
    setIsLightTheme(document.documentElement.classList.contains('theme-light'));
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsLightTheme(document.documentElement.classList.contains('theme-light'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col animated-bg">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 lg:pl-64">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <a 
              href="/" 
              className={`flex items-center space-x-2 ${isLightTheme ? 'text-blue-700' : 'text-gray-300'} hover:text-primary transition-colors`}
            >
              <i className="fas fa-arrow-left"></i>
              <span>Back to Home</span>
            </a>
          </div>
          
          {/* Hero Section */}
          <GlassCard className="p-8 mb-12 animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-16 -left-4 w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                <i className="fas fa-cubes text-5xl text-primary"></i>
              </div>
              <div className="pt-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Facts</h1>
                <div className="w-24 h-1 bg-primary mb-6"></div>
                <p className="text-lg max-w-3xl">
                  Explore fascinating facts about blockchain technology, from its history and technical aspects
                  to its current applications and future potential.
                </p>
              </div>
            </div>
          </GlassCard>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'all' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('history')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'history' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-history mr-2"></i>
              History
            </button>
            <button
              onClick={() => setActiveCategory('technical')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'technical' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-cogs mr-2"></i>
              Technical
            </button>
            <button
              onClick={() => setActiveCategory('applications')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'applications' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-rocket mr-2"></i>
              Applications
            </button>
            <button
              onClick={() => setActiveCategory('economics')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'economics' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-coins mr-2"></i>
              Economics
            </button>
            <button
              onClick={() => setActiveCategory('environment')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'environment' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-leaf mr-2"></i>
              Environment
            </button>
            <button
              onClick={() => setActiveCategory('future')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'future' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-meteor mr-2"></i>
              Future
            </button>
          </div>
          
          {/* Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredFacts.map((fact, index) => (
              <GlassCard 
                key={fact.id} 
                className="p-6 animate-on-scroll" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className={`fas ${fact.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{fact.title}</h3>
                <p className="text-base">{fact.description}</p>
                <div className="mt-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary">
                    {fact.category.charAt(0).toUpperCase() + fact.category.slice(1)}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
          
          {/* Did You Know Section */}
          <GlassCard className="p-8 mb-16 animate-on-scroll">
            <h2 className="text-2xl font-bold text-center mb-6">Did You Know?</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative p-6 glass-subtle rounded-lg">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-lg font-semibold mt-2 mb-3">The Name "Blockchain"</h3>
                <p>
                  The term "blockchain" wasn't used in the original Bitcoin whitepaper. Instead, Satoshi Nakamoto 
                  described it as a "chain of blocks." The term blockchain became popularized later as the technology 
                  evolved beyond just Bitcoin.
                </p>
              </div>
              
              <div className="relative p-6 glass-subtle rounded-lg">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-lg font-semibold mt-2 mb-3">Blockchain in Space</h3>
                <p>
                  In 2017, SpaceChain launched the first blockchain node into orbit. Blockchain technology in space 
                  could provide enhanced security and independence from Earth-based infrastructure.
                </p>
              </div>
              
              <div className="relative p-6 glass-subtle rounded-lg">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-lg font-semibold mt-2 mb-3">Ethereum's Founder Age</h3>
                <p>
                  Vitalik Buterin, the founder of Ethereum (the second largest blockchain platform), proposed 
                  the concept when he was just 19 years old in 2013. The network launched in 2015.
                </p>
              </div>
              
              <div className="relative p-6 glass-subtle rounded-lg">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-lg font-semibold mt-2 mb-3">Lost Bitcoin Fortune</h3>
                <p>
                  It's estimated that around 20% of all Bitcoin (worth billions of dollars) is permanently lost 
                  due to forgotten passwords, lost hardware wallets, or discarded hard drives.
                </p>
              </div>
            </div>
          </GlassCard>
          
          {/* Resources Section */}
          <GlassCard className="p-8 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6">Further Reading</h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="#" className="block p-6 glass-subtle rounded-lg hover:bg-primary/10 transition-colors duration-300">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <i className="fas fa-book text-primary mr-2"></i>
                  Original Bitcoin Whitepaper
                </h3>
                <p className="text-sm mb-4">
                  The document that started it all, written by Satoshi Nakamoto in 2008.
                </p>
                <span className="text-primary text-sm flex items-center">
                  Read more
                  <i className="fas fa-arrow-right ml-1"></i>
                </span>
              </a>
              
              <a href="#" className="block p-6 glass-subtle rounded-lg hover:bg-primary/10 transition-colors duration-300">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <i className="fas fa-graduation-cap text-primary mr-2"></i>
                  Blockchain Fundamentals
                </h3>
                <p className="text-sm mb-4">
                  A comprehensive guide to understanding the core concepts of blockchain technology.
                </p>
                <span className="text-primary text-sm flex items-center">
                  Read more
                  <i className="fas fa-arrow-right ml-1"></i>
                </span>
              </a>
              
              <a href="#" className="block p-6 glass-subtle rounded-lg hover:bg-primary/10 transition-colors duration-300">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <i className="fas fa-rocket text-primary mr-2"></i>
                  Future of Blockchain
                </h3>
                <p className="text-sm mb-4">
                  Explore emerging trends and innovations in blockchain and distributed ledger technologies.
                </p>
                <span className="text-primary text-sm flex items-center">
                  Read more
                  <i className="fas fa-arrow-right ml-1"></i>
                </span>
              </a>
            </div>
          </GlassCard>
        </div>
      </main>
      
      <Footer className="lg:pl-64" />
    </div>
  );
}