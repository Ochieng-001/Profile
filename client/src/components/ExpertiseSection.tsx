import GlassCard from './GlassCard';
import SkillBar from './SkillBar';

export default function ExpertiseSection() {

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <SkillBar 
                  name="Blockchain Development" 
                  percentage={95} 
                  color="primary" 
                  delay={100}
                  iconClass="fas fa-link"
                />
                
                <SkillBar 
                  name="Linux Systems Administration" 
                  percentage={90} 
                  color="purple" 
                  delay={300}
                  iconClass="fab fa-linux"
                />
                
                <SkillBar 
                  name="Network Architecture" 
                  percentage={85} 
                  color="blue" 
                  delay={500}
                  iconClass="fas fa-network-wired"
                />
              </div>
              
              <div className="space-y-2">
                <SkillBar 
                  name="Distributed Systems" 
                  percentage={88} 
                  color="green" 
                  delay={200}
                  iconClass="fas fa-server"
                />
                
                <SkillBar 
                  name="Security & Cryptography" 
                  percentage={92} 
                  color="red" 
                  delay={400}
                  iconClass="fas fa-shield-alt"
                />
                
                <SkillBar 
                  name="Smart Contract Development" 
                  percentage={94} 
                  color="amber" 
                  delay={600}
                  iconClass="fas fa-file-contract"
                />
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-700/50">
              <h4 className="text-xl font-semibold mb-6 text-center">Programming Languages</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <SkillBar 
                    name="Solidity" 
                    percentage={96} 
                    color="primary" 
                    delay={150}
                    iconClass="fab fa-ethereum"
                  />
                  
                  <SkillBar 
                    name="Python" 
                    percentage={92} 
                    color="blue" 
                    delay={350}
                    iconClass="fab fa-python"
                  />
                  
                  <SkillBar 
                    name="JavaScript/TypeScript" 
                    percentage={89} 
                    color="amber" 
                    delay={550}
                    iconClass="fab fa-js"
                  />
                </div>
                
                <div className="space-y-2">
                  <SkillBar 
                    name="Go" 
                    percentage={88} 
                    color="green" 
                    delay={250}
                    iconClass="fas fa-code"
                  />
                  
                  <SkillBar 
                    name="Rust" 
                    percentage={82} 
                    color="red" 
                    delay={450}
                    iconClass="fas fa-cog"
                  />
                  
                  <SkillBar 
                    name="Shell Scripting" 
                    percentage={94} 
                    color="purple" 
                    delay={650}
                    iconClass="fas fa-terminal"
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
