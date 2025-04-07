import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

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
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 glass-dark lg:pl-64">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Sidebar toggle button */}
              <button 
                className="sidebar-toggle text-gray-300 hover:text-white mr-4 lg:hidden focus:outline-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle sidebar"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
              
              {/* Logo - only visible on mobile */}
              <a href="/" className="flex items-center space-x-2 lg:hidden">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center shadow-md">
                  <i className="fas fa-crown text-yellow-300 text-sm"></i>
                </div>
                <span className="text-lg font-bold tracking-tight">Emperoh</span>
              </a>
            </div>
            
            {/* Right side: Contact button and theme toggle */}
            <div className="flex items-center space-x-4">
              <a 
                href="/#contact" 
                className={`hidden sm:flex items-center space-x-2 px-3 py-1 rounded-lg ${
                  isLightTheme ? 'text-blue-700 hover:text-blue-900' : 'text-gray-300 hover:text-white'
                }`}
              >
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
              
              <a 
                href="/resume" 
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 text-white transition-colors duration-300 shadow-md"
              >
                <i className="fas fa-file-alt mr-2"></i>
                <span className="hidden sm:inline">Resume</span>
              </a>
              
              <div className="block">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
