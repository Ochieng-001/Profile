import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';
import SkillsRadarChart from '../components/SkillsRadarChart';

export default function Resume() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  
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
    
    // Set up timeline animation on scroll
    const handleTimelineAnimation = () => {
      if (timelineRef.current) {
        const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item: Element) => {
          const rect = item.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100;
          
          if (isVisible) {
            item.classList.add('timeline-item-visible');
          }
        });
      }
    };
    
    // Run once on load
    animateOnScroll();
    
    // Add scroll event listener for general animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Add scroll event listener for timeline
    window.addEventListener('scroll', handleTimelineAnimation);
    
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
    
    // Trigger once on mount to check initial visible items
    setTimeout(() => {
      animateOnScroll();
      handleTimelineAnimation();
    }, 300);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('scroll', handleTimelineAnimation);
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
                
                {/* Interactive Timeline */}
                <div className="timeline-container" ref={timelineRef}>
                  <div className="timeline-line"></div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="timeline-date">
                      <span>2022 - Present</span>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-xl font-semibold">Blockchain Developer</h3>
                      <p className="text-primary mb-2">Distributed Ledger Technologies</p>
                      <div className="timeline-card">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Developed smart contracts for decentralized finance applications</li>
                          <li>Optimized blockchain consensus mechanisms for improved throughput</li>
                          <li>Implemented secure cryptographic protocols for distributed systems</li>
                          <li>Led a team of 5 developers on a cross-chain interoperability project</li>
                          <li>Conducted security audits for blockchain implementations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot">
                      <i className="fas fa-server"></i>
                    </div>
                    <div className="timeline-date">
                      <span>2020 - 2022</span>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-xl font-semibold">Linux Systems Administrator</h3>
                      <p className="text-primary mb-2">Network Solutions Kenya</p>
                      <div className="timeline-card">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Managed enterprise-level Linux server infrastructure</li>
                          <li>Implemented security hardening measures across network systems</li>
                          <li>Automated deployment processes using containerization technologies</li>
                          <li>Reduced system downtime by 45% through proactive monitoring solutions</li>
                          <li>Migrated legacy systems to modern cloud infrastructure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <div className="timeline-date">
                      <span>2018 - 2020</span>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-xl font-semibold">Junior Web Developer</h3>
                      <p className="text-primary mb-2">InnoTech Solutions</p>
                      <div className="timeline-card">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Designed and implemented responsive web applications</li>
                          <li>Created RESTful APIs for mobile application backends</li>
                          <li>Optimized database queries for high-traffic web services</li>
                          <li>Contributed to open-source projects in the local developer community</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cv-section mb-8">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                  <i className="fas fa-cogs mr-2 text-primary"></i>
                  SKILLS
                </h3>
                
                {/* Skills Radar Chart */}
                <div className="mb-8 animate-on-scroll">
                  <SkillsRadarChart 
                    skills={[
                      { name: 'Blockchain', value: 92, fullMark: 100 },
                      { name: 'Linux Systems', value: 95, fullMark: 100 },
                      { name: 'Cybersecurity', value: 88, fullMark: 100 },
                      { name: 'Web Development', value: 82, fullMark: 100 },
                      { name: 'Distributed Systems', value: 90, fullMark: 100 },
                      { name: 'Cloud Infrastructure', value: 85, fullMark: 100 },
                      { name: 'DevOps', value: 78, fullMark: 100 },
                      { name: 'Smart Contracts', value: 91, fullMark: 100 },
                    ]}
                    className="mb-6"
                  />
                  <p className="text-center text-sm text-gray-400 italic">
                    Hover over the radar chart to see exact proficiency levels
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-subtle p-5 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center">
                      <i className="fas fa-laptop-code text-primary mr-2"></i>
                      Technical Expertise
                    </h4>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                      <li>Blockchain Development (Ethereum, Solidity, Smart Contracts)</li>
                      <li>Linux Administration (Ubuntu, CentOS, RHEL, Security Hardening)</li>
                      <li>Network Security & Penetration Testing (Vulnerability Assessment)</li>
                      <li>Distributed Systems Architecture (Consensus Algorithms)</li>
                      <li>Full-Stack Web Development (React, Node.js, API Design)</li>
                      <li>Cloud Infrastructure (AWS, GCP, Terraform, Kubernetes)</li>
                    </ul>
                  </div>
                  
                  <div className="glass-subtle p-5 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center">
                      <i className="fas fa-code text-primary mr-2"></i>
                      Programming Languages
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Solidity</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Python</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">JavaScript</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">TypeScript</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Go</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Rust</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Shell Scripting</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">C++</span>
                      </div>
                    </div>
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