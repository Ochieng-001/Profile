import { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import { ArrowUp, ArrowDown, RefreshCcw } from 'lucide-react';

interface CryptoPrice {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

export default function CryptoPrices() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPrices = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      
      if (!response.ok) {
        throw new Error(`Error fetching crypto prices: ${response.status}`);
      }
      
      const data = await response.json();
      setPrices(data);
      setLastUpdated(new Date());
      setError('');
    } catch (err) {
      setError('Failed to fetch cryptocurrency prices. Please try again later.');
      console.error('Error fetching crypto prices:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    
    // Refresh prices every 5 minutes
    const interval = setInterval(fetchPrices, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mt-2">
      {loading && prices.length === 0 ? (
        <div className="col-span-full flex justify-center items-center py-8">
          <div className="animate-spin mr-2">
            <RefreshCcw size={20} />
          </div>
          <span>Loading crypto prices...</span>
        </div>
      ) : error ? (
        <div className="col-span-full">
          <GlassCard className="p-4 text-center">
            <p className="text-red-400">{error}</p>
          </GlassCard>
        </div>
      ) : (
        <>
          {prices.map(crypto => (
            <GlassCard key={crypto.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={crypto.image} alt={crypto.name} className="w-10 h-10 mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">{crypto.name}</h3>
                    <p className="text-gray-400 text-sm">{crypto.symbol.toUpperCase()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">{formatCurrency(crypto.current_price)}</div>
                  <div className={`flex items-center justify-end text-sm ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <ArrowUp size={16} className="mr-1" />
                    ) : (
                      <ArrowDown size={16} className="mr-1" />
                    )}
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </>
      )}
      
      {lastUpdated && !loading && (
        <div className="col-span-full text-xs text-gray-500 text-right mt-1">
          Last updated: {lastUpdated.toLocaleTimeString()} · 
          <button 
            onClick={fetchPrices} 
            className="ml-2 text-blue-400 hover:text-blue-300 inline-flex items-center"
            disabled={loading}
          >
            <RefreshCcw size={12} className="mr-1" /> Refresh
          </button>
        </div>
      )}
    </div>
  );
}