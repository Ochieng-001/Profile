import GlassCard from './GlassCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  technologies: string[];
  link: string;
  textColor: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "DecentralChain",
      description: "A high-performance blockchain protocol designed for optimal throughput in decentralized financial applications.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Blockchain",
      categoryColor: "bg-primary",
      technologies: ["Solidity", "Rust", "Go", "P2P Networking"],
      link: "#",
      textColor: "text-primary"
    },
    {
      id: 2,
      title: "KernelGuard",
      description: "A Linux security framework providing advanced intrusion detection and automated hardening for enterprise systems.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Linux",
      categoryColor: "bg-purple-600",
      technologies: ["C", "Kernel Modules", "Security", "bash"],
      link: "#",
      textColor: "text-purple-600"
    },
    {
      id: 3,
      title: "MeshConnect",
      description: "A distributed mesh network protocol enabling resilient communication in unstable networking environments.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Networking",
      categoryColor: "bg-blue-500",
      technologies: ["Python", "P2P", "Network Protocols", "Encryption"],
      link: "#",
      textColor: "text-blue-400"
    },
    {
      id: 4,
      title: "DistributedLedger",
      description: "An enterprise-grade distributed ledger with advanced consensus mechanisms and cryptographic privacy features.",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Distributed Systems",
      categoryColor: "bg-green-500",
      technologies: ["Go", "Rust", "Consensus", "Cryptography"],
      link: "#",
      textColor: "text-green-400"
    },
    {
      id: 5,
      title: "SmartAudit",
      description: "Automated security analysis tool for smart contracts with AI-powered vulnerability detection.",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Smart Contracts",
      categoryColor: "bg-yellow-500",
      technologies: ["Solidity", "Python", "Security", "ML"],
      link: "#",
      textColor: "text-yellow-400"
    },
    {
      id: 6,
      title: "BlockKit",
      description: "Developer toolkit for rapid blockchain application development with pre-built components and templates.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Development",
      categoryColor: "bg-purple-500",
      technologies: ["JavaScript", "TypeScript", "Web3", "React"],
      link: "#",
      textColor: "text-purple-400"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Selected works showcasing expertise in blockchain technology, Linux systems, and network architecture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="px-8 py-3 rounded-lg glass border border-gray-700 hover:border-primary/40 transition-all duration-300 inline-flex items-center">
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-500" data-project={project.id}>
      <div className="h-56 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs ${project.categoryColor} bg-opacity-90 text-white`}>
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-3 group-hover:${project.textColor} transition-colors duration-300`}>
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-2 py-1 rounded-md text-xs bg-gray-800 text-gray-300">{tech}</span>
          ))}
        </div>
        <a href={project.link} className={`${project.textColor} text-sm font-medium flex items-center hover:opacity-80 transition-colors duration-300`}>
          View Project
          <i className="fas fa-arrow-right ml-2 text-xs"></i>
        </a>
      </div>
    </GlassCard>
  );
}
