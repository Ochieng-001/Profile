import GlassCard from './GlassCard';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Computer scientist with a passion for blockchain technology and Linux systems.
            I focus on building secure, distributed, and efficient network architectures.
          </p>
        </div>
        
        <GlassCard className="p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-lg bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                  <i className="fas fa-user text-primary"></i>
                </span>
                Personal Background
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 7 years of experience in the field of computer science, I have 
                developed a deep expertise in blockchain technology, distributed systems, 
                and Linux infrastructure. My journey began with a fascination for how networks 
                function at a fundamental level, which led me to specialize in blockchain technology.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about creating secure, scalable solutions that leverage the 
                power of decentralized networks. My research focuses on optimizing consensus 
                mechanisms and improving network efficiency in distributed systems.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-lg bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                  <i className="fas fa-graduation-cap text-primary"></i>
                </span>
                Education & Experience
              </h3>
              <div className="space-y-4">
                <div className="glass-dark p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Ph.D. in Computer Science</h4>
                      <p className="text-sm text-gray-400">Stanford University</p>
                    </div>
                    <span className="text-xs bg-gray-800 px-2 py-1 rounded">2018-2022</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">Thesis: "Optimizing Consensus Mechanisms in Distributed Networks"</p>
                </div>
                
                <div className="glass-dark p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Senior Blockchain Engineer</h4>
                      <p className="text-sm text-gray-400">Ethereum Foundation</p>
                    </div>
                    <span className="text-xs bg-gray-800 px-2 py-1 rounded">2020-Present</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">Developing core infrastructure and improving network security</p>
                </div>
                
                <div className="glass-dark p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Linux Systems Architect</h4>
                      <p className="text-sm text-gray-400">Red Hat, Inc.</p>
                    </div>
                    <span className="text-xs bg-gray-800 px-2 py-1 rounded">2016-2020</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">Designed enterprise-grade Linux infrastructure solutions</p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
