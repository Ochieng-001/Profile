export function setupAnimations() {
  // Add intersection observer for animations on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });
  
  // Animate glass cards on scroll
  document.querySelectorAll('.glass').forEach(card => {
    observer.observe(card);
  });
  
  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });
  }
  
  // Project card hover effects
  const projectCards = document.querySelectorAll('[data-project]');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const image = this.querySelector('img');
      if (image) image.classList.add('scale-110');
    });
    
    card.addEventListener('mouseleave', function() {
      const image = this.querySelector('img');
      if (image) image.classList.remove('scale-110');
    });
  });
  
  // Append Font Awesome for icons
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css';
  document.head.appendChild(fontAwesome);
  
  // Append Google Fonts
  const googleFonts = document.createElement('link');
  googleFonts.rel = 'stylesheet';
  googleFonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Roboto:wght@300;400;500&display=swap';
  document.head.appendChild(googleFonts);
  
  // Set page title
  document.title = 'John Doe | Blockchain & Linux Specialist';
  
  // Add meta description for SEO
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = 'Professional portfolio of a computer scientist specializing in blockchain networking and Linux';
  document.head.appendChild(metaDescription);
}
