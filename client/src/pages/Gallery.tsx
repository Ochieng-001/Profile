import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';

// Image Gallery Item interface
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  featured?: boolean;
}

export default function Gallery() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  // Gallery data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Professional Headshot",
      description: "Official portrait for professional profiles and speaking engagements",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      category: "professional",
      featured: true
    },
    {
      id: 2,
      title: "Conference Presentation",
      description: "Delivering a keynote on blockchain security at the African Tech Summit",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "events"
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Working with the distributed systems research team",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "work"
    },
    {
      id: 4,
      title: "Dev Environment",
      description: "My workspace setup for blockchain development",
      imageUrl: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "work"
    },
    {
      id: 5,
      title: "Networking Event",
      description: "Connecting with industry professionals at a blockchain meetup",
      imageUrl: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "events"
    },
    {
      id: 6,
      title: "Professional Portrait",
      description: "Studio portrait for publications and media appearances",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "professional",
      featured: true
    },
    {
      id: 7,
      title: "Outdoor Profile",
      description: "Casual professional photo for personal branding",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      category: "professional"
    },
    {
      id: 8,
      title: "Workshop Facilitation",
      description: "Leading a technical workshop on distributed systems",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "events"
    },
    {
      id: 9,
      title: "Community Event",
      description: "Participating in a local tech community hackathon",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "community"
    }
  ];

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  // Featured item (for hero section)
  const featuredItem = galleryItems.find(item => item.featured) || galleryItems[0];
  
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
    
    // Handle escape key for modal
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('keydown', handleEscKey);
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
          
          {/* Hero Section */}
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-16 animate-on-scroll">
            <img 
              src={featuredItem.imageUrl} 
              alt={featuredItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Professional Gallery</h1>
                <p className="text-gray-200 max-w-md">A collection of professional photographs showcasing my work, events, and professional life.</p>
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'all' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('professional')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'professional' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-user-tie mr-2"></i>
              Professional
            </button>
            <button
              onClick={() => setActiveCategory('events')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'events' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              Events
            </button>
            <button
              onClick={() => setActiveCategory('work')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'work' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-laptop-code mr-2"></i>
              Workspace
            </button>
            <button
              onClick={() => setActiveCategory('community')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'community' ? 'bg-primary text-white' : 'glass-subtle hover:bg-primary/20'}`}
            >
              <i className="fas fa-users mr-2"></i>
              Community
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="animate-on-scroll glass-card overflow-hidden rounded-xl cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 px-3 py-1 m-2 bg-primary/80 text-white text-xs rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-75">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Blockchain Facts Section */}
          <GlassCard className="p-8 mb-16 animate-on-scroll">
            <h2 className="text-2xl font-bold text-center mb-6">Blockchain Facts</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-subtle p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-bitcoin text-xl text-primary"></i>
                </div>
                <h3 className="font-semibold mb-2">Bitcoin Origins</h3>
                <p className="text-sm">
                  Bitcoin, the first blockchain, was created in 2008 by an anonymous person or group known as Satoshi Nakamoto
                  as a response to the financial crisis.
                </p>
              </div>
              
              <div className="glass-subtle p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-network-wired text-xl text-primary"></i>
                </div>
                <h3 className="font-semibold mb-2">Decentralization</h3>
                <p className="text-sm">
                  Blockchain networks operate on thousands of computers worldwide, making them resilient against censorship
                  and single points of failure.
                </p>
              </div>
              
              <div className="glass-subtle p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-file-contract text-xl text-primary"></i>
                </div>
                <h3 className="font-semibold mb-2">Smart Contracts</h3>
                <p className="text-sm">
                  Smart contracts are self-executing agreements with the terms directly written into code, automating
                  transactions without intermediaries.
                </p>
              </div>
              
              <div className="glass-subtle p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-cubes text-xl text-primary"></i>
                </div>
                <h3 className="font-semibold mb-2">Immutability</h3>
                <p className="text-sm">
                  Once data is recorded on a blockchain, it becomes nearly impossible to alter, creating a permanent and
                  tamper-resistant record.
                </p>
              </div>
              
              <div className="glass-subtle p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-chart-line text-xl text-primary"></i>
                </div>
                <h3 className="font-semibold mb-2">Market Growth</h3>
                <p className="text-sm">
                  The blockchain market is projected to grow from $7.18 billion in 2022 to $163.83 billion by 2029,
                  at a CAGR of 56.3%.
                </p>
              </div>
              
              <div className="glass-subtle p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-leaf text-xl text-primary"></i>
                </div>
                <h3 className="font-semibold mb-2">Energy Innovations</h3>
                <p className="text-sm">
                  Newer blockchain consensus mechanisms like Proof of Stake consume up to 99.95% less energy than
                  traditional Proof of Work systems.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full glass-card p-4 rounded-xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <button 
                className="w-8 h-8 rounded-full glass-subtle flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                className="w-full object-contain max-h-[70vh]"
              />
            </div>
            <p className="text-sm opacity-75">{selectedImage.description}</p>
            <div className="mt-4 flex justify-between">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
              </span>
              <button className="px-4 py-1 rounded-lg glass-subtle flex items-center space-x-2">
                <i className="fas fa-share-alt"></i>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer className="lg:pl-64" />
    </div>
  );
}