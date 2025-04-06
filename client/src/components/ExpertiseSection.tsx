import GlassCard from './GlassCard';
import { useEffect, useRef } from 'react';

export default function ExpertiseSection() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLDivElement;
          const width = target.getAttribute('data-width') || '0%';
          target.style.width = width;
        } else {
          (entry.target as HTMLDivElement).style.width = '0%';
        }
      });
    }, { threshold: 0.1 });
    
    progressRefs.current.forEach(ref => {
      if (ref) {
        const width = ref.style.width;
        ref.setAttribute('data-width', width);
        ref.style.width = '0%';
        observer.observe(ref);
      }
    });
    
    return () => {
      progressRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="expertise" className="py-16 md:py-24 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Specialized knowledge in blockchain networks, distributed systems, and Linux infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blockchain expertise */}
          <GlassCard className="p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-lg bg-primary bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-500">
              <i className="fas fa-link text-2xl text-primary"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">Blockchain Technology</h3>
            <p className="text-gray-300 mb-6">
              Specialized in consensus algorithms, smart contract development, and network optimization 
              for blockchain systems.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <span className="text-gray-300">Consensus Protocol Development</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <span className="text-gray-300">Smart Contract Auditing & Optimization</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <span className="text-gray-300">Decentralized Application Architecture</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                <span className="text-gray-300">Layer 2 Scaling Solutions</span>
              </li>
            </ul>
          </GlassCard>
          
          {/* Linux expertise */}
          <GlassCard className="p-8 hover:shadow-lg hover:shadow-purple-600/10 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-lg bg-purple-600 bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-500">
              <i className="fab fa-linux text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-600 transition-colors duration-300">Linux Systems</h3>
            <p className="text-gray-300 mb-6">
              Expert in Linux kernel optimization, system administration, and security hardening for 
              high-performance environments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-600 mt-1 mr-3"></i>
                <span className="text-gray-300">Kernel Customization & Optimization</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-600 mt-1 mr-3"></i>
                <span className="text-gray-300">Enterprise System Administration</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-600 mt-1 mr-3"></i>
                <span className="text-gray-300">Security Hardening & Compliance</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-600 mt-1 mr-3"></i>
                <span className="text-gray-300">Automated Deployment Pipelines</span>
              </li>
            </ul>
          </GlassCard>
          
          {/* Network expertise */}
          <GlassCard className="p-8 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-lg bg-blue-500 bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-500">
              <i className="fas fa-network-wired text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">Network Engineering</h3>
            <p className="text-gray-300 mb-6">
              Designing and implementing secure, high-throughput network architectures for distributed systems.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                <span className="text-gray-300">P2P Network Optimization</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                <span className="text-gray-300">Secure Protocol Design</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                <span className="text-gray-300">Distributed System Architecture</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                <span className="text-gray-300">Network Performance Analysis</span>
              </li>
            </ul>
          </GlassCard>
        </div>
        
        {/* Skills progress section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Proficiency</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Blockchain Development</span>
                  <span className="text-gray-400">95%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    ref={el => progressRefs.current[0] = el} 
                    className="progress-value h-full bg-gradient-to-r from-primary to-primary/70 rounded-full" 
                    style={{width: '95%'}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Linux Systems Administration</span>
                  <span className="text-gray-400">90%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    ref={el => progressRefs.current[1] = el} 
                    className="progress-value h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full" 
                    style={{width: '90%'}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Network Architecture</span>
                  <span className="text-gray-400">85%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    ref={el => progressRefs.current[2] = el} 
                    className="progress-value h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" 
                    style={{width: '85%'}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Distributed Systems</span>
                  <span className="text-gray-400">88%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    ref={el => progressRefs.current[3] = el} 
                    className="progress-value h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" 
                    style={{width: '88%'}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Security & Cryptography</span>
                  <span className="text-gray-400">92%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    ref={el => progressRefs.current[4] = el} 
                    className="progress-value h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full" 
                    style={{width: '92%'}}
                  ></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
