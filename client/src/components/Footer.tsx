import { useState, useEffect } from 'react';

export default function Footer() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  
  useEffect(() => {
    // Initial theme check
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
    <footer className={`py-8 border-t ${isLightTheme ? 'border-blue-200' : 'border-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center shadow-sm">
                <i className="fas fa-crown text-yellow-300 text-xs"></i>
              </div>
              <span className="text-lg font-bold tracking-tight">Emperoh</span>
            </a>
          </div>
          <div className="mb-4 md:mb-0">
            <p className={`text-sm ${isLightTheme ? 'text-blue-700' : 'text-gray-400'}`}>
              © {new Date().getFullYear()} Emperoh. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className={`${isLightTheme ? 'text-blue-600 hover:text-blue-800' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}>
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className={`${isLightTheme ? 'text-blue-600 hover:text-blue-800' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={`${isLightTheme ? 'text-blue-600 hover:text-blue-800' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className={`${isLightTheme ? 'text-blue-600 hover:text-blue-800' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}>
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
