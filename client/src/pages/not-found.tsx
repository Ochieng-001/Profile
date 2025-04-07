import { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
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
    <div className="min-h-screen flex flex-col animated-bg">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 lg:pl-64 flex items-center justify-center">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <GlassCard className="w-full max-w-md p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-map-signs text-4xl text-primary"></i>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">404</h1>
            <h2 className="text-xl font-semibold mb-6">Page Not Found</h2>
            
            <p className="mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <a 
              href="/" 
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/80 text-white shadow-md transition-all duration-300 inline-flex items-center"
            >
              <i className="fas fa-home mr-2"></i>
              Return Home
            </a>
          </GlassCard>
        </div>
      </main>
      
      <Footer className="lg:pl-64" />
    </div>
  );
}
