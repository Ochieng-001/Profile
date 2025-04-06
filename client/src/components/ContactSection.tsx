import { useState } from 'react';
import GlassCard from './GlassCard';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    // Form would submit here - this is just a static site
    toast({
      title: "Success!",
      description: "Your message has been sent successfully!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Feel free to reach out for collaborations, speaking engagements, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <GlassCard className="p-8 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-envelope text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">emperoh@example.com</p>
          </GlassCard>
          
          <GlassCard className="p-8 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-map-marker-alt text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-300">San Francisco, California</p>
          </GlassCard>
          
          <GlassCard className="p-8 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-share-alt text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Social</h3>
            <div className="flex space-x-4 justify-center mt-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <i className="fab fa-github text-gray-300"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <i className="fab fa-twitter text-gray-300"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <i className="fab fa-linkedin-in text-gray-300"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <i className="fab fa-medium text-gray-300"></i>
              </a>
            </div>
          </GlassCard>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-dark border border-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300 bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-dark border border-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300 bg-transparent"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass-dark border border-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300 bg-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass-dark border border-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300 bg-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Send Message
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
