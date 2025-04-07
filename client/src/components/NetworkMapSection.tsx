import GlassCard from './GlassCard';
import BlockchainNetwork from './BlockchainNetwork';
import WorldMap from './WorldMap';
import CryptoPrices from './CryptoPrices';

export default function NetworkMapSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Network & Reach</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Visualizing blockchain interconnections and global presence
          </p>
        </div>
        
        {/* Live Cryptocurrency Prices */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Live Cryptocurrency Prices</h3>
          <CryptoPrices />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Blockchain Network Visualization */}
          <div className="order-2 lg:order-1">
            <GlassCard className="p-4 h-full">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4 text-center">Blockchain Network</h3>
                <p className="text-sm text-gray-400 text-center mb-6">
                  Real-time visualization of decentralized nodes and connections
                </p>
                <div className="flex-grow min-h-[300px] relative">
                  <BlockchainNetwork />
                  
                  {/* Legend */}
                  <div className="absolute bottom-2 left-2 text-xs text-gray-400 bg-black/40 p-2 rounded">
                    <div className="flex items-center mb-1">
                      <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                      <span>Node</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-4 h-0.5 bg-blue-500/50 mr-2"></span>
                      <span>Connection</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* World Map */}
          <div className="order-1 lg:order-2">
            <WorldMap />
          </div>
        </div>
        
        {/* Network Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GlassCard className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-gray-400">Connected Nodes</div>
          </GlassCard>
          
          <GlassCard className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">18</div>
            <div className="text-sm text-gray-400">Countries</div>
          </GlassCard>
          
          <GlassCard className="p-4 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Network Uptime</div>
          </GlassCard>
          
          <GlassCard className="p-4 text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">5+</div>
            <div className="text-sm text-gray-400">Blockchain Networks</div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}