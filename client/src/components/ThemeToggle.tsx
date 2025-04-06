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
    
    // Update glass styles with better contrast
    document.querySelectorAll('.glass').forEach(el => {
      (el as HTMLElement).style.backgroundColor = 'rgba(220, 230, 255, 0.5)';
      (el as HTMLElement).style.borderColor = 'rgba(100, 120, 200, 0.3)';
    });
    
    document.querySelectorAll('.glass-dark').forEach(el => {
      (el as HTMLElement).style.backgroundColor = 'rgba(200, 220, 255, 0.85)';
      (el as HTMLElement).style.borderColor = 'rgba(50, 100, 200, 0.2)';
    });
    
    // Update background color with subtle blue tint
    document.body.style.backgroundColor = '#eef2ff';
    document.body.style.color = '#1e3a8a';
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
        <i className="fas fa-moon text-blue-800"></i>
      )}
    </button>
  );
}