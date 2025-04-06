import { useEffect, useRef } from 'react';
import GlassCard from './GlassCard';

export default function HeroSection() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      const terminalBody = terminalRef.current;
      
      // Auto-scroll terminal to bottom
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }, []);

  return (
    <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="inline-block px-6 py-2 rounded-full bg-primary bg-opacity-10 text-primary mb-4">
              <span className="text-sm font-medium flex items-center">
                <i className="fas fa-crown text-yellow-300 mr-2"></i>
                Blockchain & Linux Specialist
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span>Emperoh of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">decentralized </span>
              <span>systems</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Computer Scientist specializing in blockchain networking, distributed systems, 
              and Linux infrastructure optimization.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-lg glass border border-gray-700 hover:border-primary/40 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 glass rounded-full floating"></div>
              <div className="absolute inset-2 glass-dark rounded-full flex items-center justify-center overflow-hidden">
                <div className="terminal w-full h-full p-5">
                  <div className="terminal-header">
                    <div className="terminal-circle bg-red-500"></div>
                    <div className="terminal-circle bg-yellow-500"></div>
                    <div className="terminal-circle bg-green-500"></div>
                    <span className="ml-2 text-xs text-gray-400">blockchain@linux:~</span>
                  </div>
                  <div ref={terminalRef} className="terminal-body text-sm hide-scrollbar overflow-auto h-full">
                    <p className="text-green-500">$ <span className="text-gray-300">whoami</span></p>
                    <p className="text-gray-200 mb-2">emperoh</p>
                    
                    <p className="text-green-500">$ <span className="text-gray-300">ls -l skills/</span></p>
                    <p className="text-gray-200">drwxr-xr-x blockchain</p>
                    <p className="text-gray-200">drwxr-xr-x networking</p>
                    <p className="text-gray-200">drwxr-xr-x linux</p>
                    <p className="text-gray-200 mb-2">drwxr-xr-x distributed-systems</p>
                    
                    <p className="text-green-500">$ <span className="text-gray-300">cat about.txt</span></p>
                    <p className="text-gray-200 mb-2">Passionate computer scientist with expertise in blockchain technology and Linux systems...</p>
                    
                    <p className="text-green-500">$ <span className="text-gray-300">./welcome.sh</span></p>
                    <p className="text-primary mb-2">Welcome to my portfolio site! </p>
                    
                    <p className="text-green-500">$ <span className="text-gray-300 flex">_<span className="animate-pulse">|</span></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech stack pills */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-8">
            <h2 className="text-xl text-gray-400 font-light">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass px-6 py-3 rounded-full text-sm font-medium flex items-center">
              <i className="fab fa-ethereum mr-2 text-purple-400"></i>
              Ethereum
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium flex items-center">
              <i className="fab fa-linux mr-2 text-yellow-400"></i>
              Linux
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium flex items-center">
              <i className="fab fa-docker mr-2 text-blue-400"></i>
              Docker
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium flex items-center">
              <i className="fas fa-network-wired mr-2 text-green-400"></i>
              Networking
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium flex items-center">
              <i className="fas fa-lock mr-2 text-red-400"></i>
              Cryptography
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium flex items-center">
              <i className="fas fa-code-branch mr-2 text-orange-400"></i>
              Distributed Systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
