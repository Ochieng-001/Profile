import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { setupAnimations } from "@/lib/animations";

export default function Home() {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <div className="min-h-screen font-sans relative">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 animated-bg opacity-90"></div>
      <div className="fixed -z-5 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 pulse-slow"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pulse-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pulse-slow"></div>
      </div>
      
      <Header />
      
      <div className="lg:pl-64">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
