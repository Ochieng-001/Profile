import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Initialize theme on component mount
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkTheme(false);
      applyLightTheme();
    } else {
      setIsDarkTheme(true);
      applyDarkTheme();
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      applyLightTheme();
      localStorage.setItem('theme', 'light');
    } else {
      applyDarkTheme();
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkTheme(!isDarkTheme);
  };

  const applyDarkTheme = () => {
    document.documentElement.classList.add('theme-dark');
    document.documentElement.classList.remove('theme-light');
    document.documentElement.style.setProperty('color-scheme', 'dark');
    
    // Update glass styles
    document.querySelectorAll('.glass').forEach(el => {
      (el as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      (el as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
    
    document.querySelectorAll('.glass-dark').forEach(el => {
      (el as HTMLElement).style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      (el as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.05)';
    });
    
    // Update background color
    document.body.style.backgroundColor = '#0f172a';
    document.body.style.color = '#f8fafc';
  };

  const applyLightTheme = () => {
    document.documentElement.classList.add('theme-light');
    document.documentElement.classList.remove('theme-dark');
    document.documentElement.style.setProperty('color-scheme', 'light');
    
    // Update glass styles
    document.querySelectorAll('.glass').forEach(el => {
      (el as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      (el as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.5)';
    });
    
    document.querySelectorAll('.glass-dark').forEach(el => {
      (el as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      (el as HTMLElement).style.borderColor = 'rgba(0, 0, 0, 0.1)';
    });
    
    // Update background color
    document.body.style.backgroundColor = '#f8fafc';
    document.body.style.color = '#1e293b';
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
    >
      {isDarkTheme ? (
        <i className="fas fa-sun text-yellow-300"></i>
      ) : (
        <i className="fas fa-moon text-gray-700"></i>
      )}
    </button>
  );
}