import { useState, useEffect } from "react";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        
        if (sectionTop <= window.innerHeight / 3 && sectionTop + sectionHeight > window.innerHeight / 3) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setCurrentSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isLight = document.documentElement.classList.contains('theme-light');
    return (
      <a 
        href={href} 
        className={`${
          currentSection === href.substring(1) 
            ? (isLight ? 'text-blue-800 font-medium' : 'text-white font-medium') 
            : (isLight ? 'text-blue-600' : 'text-gray-300')
        } hover:${isLight ? 'text-blue-900' : 'text-white'} transition-colors duration-300`}
        onClick={closeMobileMenu}
      >
        {children}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center shadow-md">
              <i className="fas fa-crown text-yellow-300 text-lg"></i>
            </div>
            <span className="text-xl font-bold tracking-tight">Emperoh</span>
          </a>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/#expertise">Expertise</NavLink>
              <NavLink href="/#projects">Projects</NavLink>
              <NavLink href="/vision-mission">Vision & Mission</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/blockchain-facts">Blockchain Facts</NavLink>
              <a 
                href="/resume" 
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 text-white transition-colors duration-300"
              >
                Resume
              </a>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden glass-dark py-4 px-4 border-t border-gray-800 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#expertise">Expertise</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/vision-mission">Vision & Mission</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/blockchain-facts">Blockchain Facts</NavLink>
          
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-700">
            <span className="text-sm text-gray-400">Toggle Theme</span>
            <ThemeToggle />
          </div>
          
          <a 
            href="/resume" 
            className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 text-white transition-colors duration-300 text-center"
            onClick={closeMobileMenu}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
