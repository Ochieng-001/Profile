import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';

export default function Resume() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  
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
          
          <GlassCard className="p-8 mb-8 animate-on-scroll max-w-4xl mx-auto">
            <div className="cv-document">
              <div className="cv-header text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">CURRICULUM VITAE</h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
                <h2 className="text-2xl font-semibold">Emperoh</h2>
                <p className="text-sm mt-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Nairobi, Kenya
                </p>
                <div className="flex justify-center space-x-4 mt-3">
                  <a href="#" className={`${isLightTheme ? 'text-blue-600' : 'text-gray-300'} hover:text-primary transition-colors`}>
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className={`${isLightTheme ? 'text-blue-600' : 'text-gray-300'} hover:text-primary transition-colors`}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className={`${isLightTheme ? 'text-blue-600' : 'text-gray-300'} hover:text-primary transition-colors`}>
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              
              <div className="cv-section mb-8">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                  <i className="fas fa-user mr-2 text-primary"></i>
                  PROFILE
                </h3>
                <p className="mb-4">
                  Computer Scientist specializing in blockchain networking, distributed systems, and Linux infrastructure optimization.
                  Passionate about cybersecurity and software engineering with a focus on developing secure, decentralized solutions.
                </p>
              </div>
              
              <div className="cv-section mb-8">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                  <i className="fas fa-graduation-cap mr-2 text-primary"></i>
                  EDUCATION
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Master of Science in Computer Science</h4>
                    <span className="text-sm">2020 - 2022</span>
                  </div>
                  <p className="italic">University of Nairobi</p>
                  <p className="text-sm mt-1">Specialization in Cybersecurity and Blockchain Technology</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                    <span className="text-sm">2016 - 2020</span>
                  </div>
                  <p className="italic">Technical University of Kenya</p>
                  <p className="text-sm mt-1">First Class Honors</p>
                </div>
              </div>
              
              <div className="cv-section mb-8">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                  <i className="fas fa-briefcase mr-2 text-primary"></i>
                  EXPERIENCE
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Blockchain Developer</h4>
                    <span className="text-sm">2022 - Present</span>
                  </div>
                  <p className="italic">Distributed Ledger Technologies</p>
                  <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                    <li>Developed smart contracts for decentralized finance applications</li>
                    <li>Optimized blockchain consensus mechanisms for improved throughput</li>
                    <li>Implemented secure cryptographic protocols for distributed systems</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-medium">Linux Systems Administrator</h4>
                    <span className="text-sm">2020 - 2022</span>
                  </div>
                  <p className="italic">Network Solutions Kenya</p>
                  <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                    <li>Managed enterprise-level Linux server infrastructure</li>
                    <li>Implemented security hardening measures across network systems</li>
                    <li>Automated deployment processes using containerization technologies</li>
                  </ul>
                </div>
              </div>
              
              <div className="cv-section mb-8">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                  <i className="fas fa-cogs mr-2 text-primary"></i>
                  SKILLS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Technical Skills</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Blockchain Development (Ethereum, Solidity)</li>
                      <li>Linux Administration (Ubuntu, CentOS, RHEL)</li>
                      <li>Network Security & Penetration Testing</li>
                      <li>Distributed Systems Architecture</li>
                      <li>Full-Stack Web Development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Programming Languages</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Solidity</li>
                      <li>Python</li>
                      <li>JavaScript/TypeScript</li>
                      <li>Go</li>
                      <li>Rust</li>
                      <li>Shell Scripting</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="cv-section mb-8">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                  <i className="fas fa-flask mr-2 text-primary"></i>
                  RESEARCH INTERESTS
                </h3>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Zero-Knowledge Proof Implementation in Blockchain Protocols</li>
                  <li>Secure Multi-Party Computation for Decentralized Applications</li>
                  <li>Layer 2 Scaling Solutions for Blockchain Networks</li>
                  <li>Quantum-Resistant Cryptographic Algorithms</li>
                  <li>Secure Operating System Design for Critical Infrastructure</li>
                </ul>
              </div>
              
              <div className="cv-section mb-8">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                  <i className="fas fa-bullseye mr-2 text-primary"></i>
                  CAREER GOALS
                </h3>
                <p className="mb-2">
                  To become a leading expert in blockchain security and infrastructure, developing solutions that bridge the gap between
                  cybersecurity best practices and distributed systems architecture.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="glass-subtle p-3 rounded-lg">
                    <h4 className="font-medium mb-1 flex items-center">
                      <i className="fas fa-shield-alt text-primary mr-2"></i>
                      Cybersecurity
                    </h4>
                    <p className="text-sm">Advancing the implementation of security protocols in decentralized networks</p>
                  </div>
                  <div className="glass-subtle p-3 rounded-lg">
                    <h4 className="font-medium mb-1 flex items-center">
                      <i className="fas fa-code text-primary mr-2"></i>
                      Software Engineering
                    </h4>
                    <p className="text-sm">Developing robust, scalable applications with security-first architecture</p>
                  </div>
                </div>
              </div>
              
              <div className="cv-section">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                  <i className="fas fa-heart mr-2 text-primary"></i>
                  HOBBIES & INTERESTS
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center px-3 py-1 rounded-full glass-subtle text-sm">
                    <i className="fas fa-futbol mr-2 text-primary"></i>
                    Football
                  </div>
                  <div className="flex items-center px-3 py-1 rounded-full glass-subtle text-sm">
                    <i className="fas fa-book mr-2 text-primary"></i>
                    Reading
                  </div>
                  <div className="flex items-center px-3 py-1 rounded-full glass-subtle text-sm">
                    <i className="fas fa-mountain mr-2 text-primary"></i>
                    Hiking
                  </div>
                  <div className="flex items-center px-3 py-1 rounded-full glass-subtle text-sm">
                    <i className="fas fa-chess mr-2 text-primary"></i>
                    Chess
                  </div>
                  <div className="flex items-center px-3 py-1 rounded-full glass-subtle text-sm">
                    <i className="fas fa-laptop-code mr-2 text-primary"></i>
                    Open Source Contributing
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <div className="flex justify-center my-8">
            <a 
              href="#" 
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/80 text-white shadow-lg transition-all duration-300 flex items-center"
            >
              <i className="fas fa-download mr-2"></i>
              Download PDF Version
            </a>
          </div>
        </div>
      </main>
      
      <Footer className="lg:pl-64" />
    </div>
  );
}