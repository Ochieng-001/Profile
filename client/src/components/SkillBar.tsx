import { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
  iconClass?: string;
}

export default function SkillBar({ 
  name, 
  percentage, 
  color = 'primary', 
  delay = 0, 
  iconClass 
}: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  const [isLightTheme, setIsLightTheme] = useState(false);
  
  // Get color class based on color prop
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return 'from-primary to-blue-400';
      case 'purple':
        return 'from-purple-600 to-indigo-400';
      case 'green':
        return 'from-green-500 to-emerald-300';
      case 'amber':
        return 'from-amber-500 to-yellow-300';
      case 'red':
        return 'from-red-500 to-rose-300';
      default:
        return 'from-primary to-blue-400';
    }
  };
  
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in view
        if (entry.isIntersecting) {
          setIsInView(true);
          // Start animation after delay
          setTimeout(() => {
            setWidth(percentage);
          }, delay);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage, delay]);
  
  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          {iconClass && (
            <div className={`w-6 h-6 rounded-full bg-${color}/20 flex items-center justify-center mr-2`}>
              <i className={`${iconClass} text-xs ${isLightTheme ? `text-${color}-600` : `text-${color}-400`}`}></i>
            </div>
          )}
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm font-semibold">{width}%</span>
      </div>
      
      <div 
        className={`h-2 w-full rounded-full ${
          isLightTheme ? 'bg-gray-200' : 'bg-gray-700'
        } overflow-hidden relative`}
      >
        {/* Skill bar background */}
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${getColorClass()} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
        
        {/* Glow effect */}
        <div 
          className={`absolute top-0 h-full rounded-full bg-gradient-to-r ${getColorClass()} opacity-30 blur-sm transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
        
        {/* Moving particles effect */}
        {isInView && (
          <>
            <div 
              className={`particle absolute top-0 h-full w-2 rounded-full bg-white opacity-70 transition-all duration-2000 ease-in-out`}
              style={{ 
                left: `${Math.min(width - 2, 98)}%`,
                animation: 'particleMove 3s infinite',
                animationDelay: `${delay + 500}ms`
              }}
            />
            <div 
              className={`particle absolute top-0 h-full w-1 rounded-full bg-white opacity-40 transition-all duration-2000 ease-in-out`}
              style={{ 
                left: `${Math.min(width - 1, 99)}%`,
                animation: 'particleMove 2s infinite',
                animationDelay: `${delay + 1000}ms`
              }}
            />
          </>
        )}
      </div>
      
      {/* Digital circuit line decoration */}
      <div className="h-1 mt-1 relative overflow-hidden">
        <div 
          className={`circuit-line absolute top-0 left-0 h-px ${
            isLightTheme ? 'bg-gray-300' : 'bg-gray-600'
          }`}
          style={{ 
            width: `${width}%`, 
            transition: 'width 1s ease-out',
            transitionDelay: `${delay + 300}ms`
          }}
        />
        <div 
          className={`circuit-dot absolute top-0 h-1 w-1 rounded-full ${
            isLightTheme ? 'bg-gray-400' : 'bg-gray-500'
          }`}
          style={{ 
            left: `${Math.min(width, 100)}%`, 
            transition: 'left 1s ease-out',
            transitionDelay: `${delay + 300}ms`
          }}
        />
      </div>
    </div>
  );
}