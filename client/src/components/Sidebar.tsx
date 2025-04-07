import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [location] = useLocation();
  
  useEffect(() => {
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
    
    // Close sidebar on mobile when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.sidebar') && !target.closest('.sidebar-toggle')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);
  
  const closeSidebar = () => {
    setIsOpen(false);
  };
  
  const isActive = (path: string) => {
    if (path === '/') return location === '/';
    return location.startsWith(path);
  };
  
  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      />
      
      {/* Sidebar */}
      <div 
        className={`sidebar fixed top-0 left-0 z-50 h-full w-64 glass-dark transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center shadow-md">
                <i className="fas fa-crown text-yellow-300 text-lg"></i>
              </div>
              <span className="text-xl font-bold tracking-tight">Emperoh</span>
              <button 
                className="ml-auto text-gray-400 hover:text-white lg:hidden"
                onClick={closeSidebar}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-1">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 px-3 mt-2 mb-2">
                Main
              </h3>
              
              <a 
                href="/" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive('/') && !location.includes('#')
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-home w-5 mr-3"></i>
                <span>Home</span>
              </a>
              
              <a 
                href="/resume" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive('/resume')
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-file-alt w-5 mr-3"></i>
                <span>Resume / CV</span>
              </a>
              
              <h3 className="text-xs uppercase tracking-wider text-gray-500 px-3 mt-4 mb-2">
                Sections
              </h3>
              
              <a 
                href="/#about" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  location === '/#about'
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-user w-5 mr-3"></i>
                <span>About Me</span>
              </a>
              
              <a 
                href="/#expertise" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  location === '/#expertise'
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-brain w-5 mr-3"></i>
                <span>Expertise</span>
              </a>
              
              <a 
                href="/#projects" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  location === '/#projects'
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-laptop-code w-5 mr-3"></i>
                <span>Projects</span>
              </a>
              
              <a 
                href="/#contact" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  location === '/#contact'
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-envelope w-5 mr-3"></i>
                <span>Contact</span>
              </a>
              
              <h3 className="text-xs uppercase tracking-wider text-gray-500 px-3 mt-4 mb-2">
                Pages
              </h3>
              
              <a 
                href="/vision-mission" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive('/vision-mission')
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-eye w-5 mr-3"></i>
                <span>Vision & Mission</span>
              </a>
              
              <a 
                href="/gallery" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive('/gallery')
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-images w-5 mr-3"></i>
                <span>Photo Gallery</span>
              </a>
              
              <a 
                href="/blockchain-facts" 
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive('/blockchain-facts')
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <i className="fas fa-cubes w-5 mr-3"></i>
                <span>Blockchain Facts</span>
              </a>
            </div>
          </nav>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}