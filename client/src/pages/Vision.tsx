import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';

export default function Vision() {
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
          
          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-8 animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-12 -left-4 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-eye text-3xl text-primary"></i>
                </div>
                <h2 className="text-3xl font-bold mb-6 mt-8">Vision</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="mb-4 text-lg leading-relaxed">
                  To create a future where blockchain technology serves as the foundation for secure, transparent, and 
                  decentralized digital infrastructure, empowering individuals and organizations with ownership and control over 
                  their digital assets and identities.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  A world where distributed systems enable frictionless collaboration, reduce institutional dependencies, 
                  and promote innovation through open protocols and transparent governance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="glass-subtle p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <i className="fas fa-lock text-primary mr-2"></i>
                      Security First
                    </h4>
                    <p className="text-sm">
                      Building systems with security as a fundamental design principle, not an afterthought.
                    </p>
                  </div>
                  <div className="glass-subtle p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <i className="fas fa-project-diagram text-primary mr-2"></i>
                      Decentralization
                    </h4>
                    <p className="text-sm">
                      Distributing power and control to create resilient, censorship-resistant networks.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Vision concept"
                className="rounded-lg shadow-2xl max-h-96 object-cover animate-on-scroll"
              />
            </div>
          </div>
          
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col items-center justify-center space-y-4 order-2 lg:order-1">
              {/* Kenyan Flag */}
              <div className="p-4 glass-subtle rounded-lg w-full max-w-md">
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg shadow-lg">
                  <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    {/* Black */}
                    <rect width="900" height="600" fill="#000000" />
                    
                    {/* Red */}
                    <rect width="900" height="180" y="60" fill="#bb0000" />
                    
                    {/* Green */}
                    <rect width="900" height="180" y="360" fill="#006600" />
                    
                    {/* White Stripes */}
                    <rect width="900" height="60" y="0" fill="#ffffff" />
                    <rect width="900" height="60" y="240" fill="#ffffff" />
                    <rect width="900" height="60" y="540" fill="#ffffff" />
                    
                    {/* Maasai Shield and Spears */}
                    <g transform="translate(450,300) scale(2.5)">
                      {/* Shield */}
                      <path d="M0,-60 C-25,-55 -40,-30 -40,0 C-40,30 -25,55 0,60 C25,55 40,30 40,0 C40,-30 25,-55 0,-60 z" 
                        fill="#bb0000"
                        stroke="#ffffff"
                        strokeWidth="2" />
                      
                      {/* Shield Patterns */}
                      <path d="M0,-50 C-20,-45 -35,-25 -35,0 C-35,25 -20,45 0,50 C20,45 35,25 35,0 C35,-25 20,-45 0,-50 z" 
                        fill="#000000"
                        stroke="#ffffff"
                        strokeWidth="1" />
                        
                      {/* Crossed Spears */}
                      <line x1="-45" y1="-70" x2="45" y2="70" stroke="#ffffff" strokeWidth="3" />
                      <line x1="45" y1="-70" x2="-45" y2="70" stroke="#ffffff" strokeWidth="3" />
                      
                      {/* Spear Tips */}
                      <path d="M-45,-70 L-50,-80 L-40,-80 Z" fill="#ffffff" />
                      <path d="M45,-70 L50,-80 L40,-80 Z" fill="#ffffff" />
                    </g>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-lg">Republic of Kenya</h4>
                  <p className="text-sm text-gray-400">Harambee - "Let's pull together"</p>
                </div>
              </div>
              
              {/* Kenya Fast Facts */}
              <div className="glass-subtle p-4 rounded-lg w-full max-w-md">
                <h4 className="font-semibold mb-3 text-center">Kenya Fast Facts</h4>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-green-600 mt-1 mr-2"></span>
                    <span>Tech hub of East Africa with a growing blockchain community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-red-600 mt-1 mr-2"></span>
                    <span>Home to M-Pesa, a pioneering mobile payments platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 rounded-full bg-black mt-1 mr-2"></span>
                    <span>Vibrant startup ecosystem in Nairobi's "Silicon Savannah"</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <GlassCard className="p-8 animate-on-scroll order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-12 -left-4 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-flag text-3xl text-primary"></i>
                </div>
                <h2 className="text-3xl font-bold mb-6 mt-8">Mission</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="mb-4 text-lg leading-relaxed">
                  To advance blockchain and distributed systems technology through innovative research, development, and education, 
                  focusing on secure, scalable, and practical implementations that solve real-world problems.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  To bridge the gap between theoretical computer science and practical engineering, creating 
                  solutions that are accessible, user-friendly, and beneficial to society at large.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="glass-subtle p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <i className="fas fa-flask text-primary mr-2"></i>
                      Research & Innovation
                    </h4>
                    <p className="text-sm">
                      Pushing the boundaries of what's possible through continuous exploration and innovation.
                    </p>
                  </div>
                  <div className="glass-subtle p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <i className="fas fa-hands-helping text-primary mr-2"></i>
                      Knowledge Sharing
                    </h4>
                    <p className="text-sm">
                      Contributing to the global community through open-source contributions and education.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Values */}
          <GlassCard className="p-8 mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold text-center mb-6">Core Values</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-subtle p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p>
                  Upholding the highest ethical standards in all aspects of work and research.
                </p>
              </div>
              
              <div className="glass-subtle p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>
                  Embracing creativity and forward-thinking approaches to complex problems.
                </p>
              </div>
              
              <div className="glass-subtle p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-globe text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Openness</h3>
                <p>
                  Championing transparency, collaboration, and knowledge sharing.
                </p>
              </div>
            </div>
          </GlassCard>
          
          {/* Location */}
          <GlassCard className="p-8 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Location</h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-4">
                  <i className="fas fa-map-marker-alt text-xl text-primary mt-1 mr-3"></i>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Based in Nairobi, Kenya</h3>
                    <p className="mb-4">
                      Working from the heart of East Africa's technology hub, collaborating with innovative teams
                      and contributing to the region's growing blockchain and tech ecosystem.
                    </p>
                    <p>
                      Nairobi's vibrant tech community provides the perfect environment for developing cutting-edge
                      solutions and connecting with forward-thinking professionals across the continent.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mt-8">
                  <i className="fas fa-globe-africa text-xl text-primary mt-1 mr-3"></i>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Collaboration</h3>
                    <p>
                      While based in Nairobi, I collaborate with teams and projects worldwide, contributing to
                      the global blockchain and distributed systems community through remote work and international
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Nairobi Skyline Image */}
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Nairobi skyline"
                    className="rounded-lg shadow-xl max-h-80 w-full object-cover"
                  />
                </div>
                
                {/* Nairobi Map Iframe */}
                <div className="rounded-lg overflow-hidden shadow-xl w-full h-64 glass">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19039436432!2d36.75933083683293!3d-1.3028617927589906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1679322978854!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nairobi Map"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>
      
      <Footer className="lg:pl-64" />
    </div>
  );
}