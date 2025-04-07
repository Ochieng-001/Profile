import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';
import CodePlayground from '../components/CodePlayground';

export default function CodeExamples() {
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
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Sample code examples
  const blockchainCode = `// Basic Smart Contract Example
contract SimpleStorage {
    uint private storedData;
    
    // Store a number
    function set(uint x) public {
        storedData = x;
    }
    
    // Retrieve the number
    function get() public view returns (uint) {
        return storedData;
    }
}`;

  const nodeJsCode = `// Blockchain node in JavaScript
const crypto = require('crypto');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return crypto
      .createHash('sha256')
      .update(
        this.index + 
        this.previousHash + 
        this.timestamp + 
        JSON.stringify(this.data) + 
        this.nonce
      )
      .digest('hex');
  }

  mineBlock(difficulty) {
    console.log('Mining block...');
    while (
      this.hash.substring(0, difficulty) !== 
      Array(difficulty + 1).join('0')
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log('Block mined: ' + this.hash);
  }
}`;

  const pythonCode = `# Python implementation of a simple blockchain
import hashlib
import time

class Block:
    def __init__(self, index, timestamp, data, previous_hash):
        self.index = index
        self.timestamp = timestamp
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()
        
    def calculate_hash(self):
        # Convert block data to bytes and hash it
        block_string = f"{self.index}{self.timestamp}{self.data}{self.previous_hash}"
        return hashlib.sha256(block_string.encode()).hexdigest()
        
class Blockchain:
    def __init__(self):
        # Create genesis block
        self.chain = [self.create_genesis_block()]
        
    def create_genesis_block(self):
        return Block(0, time.time(), "Genesis Block", "0")
        
    def get_latest_block(self):
        return self.chain[-1]
        
    def add_block(self, new_block):
        new_block.previous_hash = self.get_latest_block().hash
        new_block.hash = new_block.calculate_hash()
        self.chain.append(new_block)
        
    def is_chain_valid(self):
        for i in range(1, len(self.chain)):
            current = self.chain[i]
            previous = self.chain[i-1]
            
            # Verify hash is correctly calculated
            if current.hash != current.calculate_hash():
                return False
                
            # Check if this block points to the correct previous block
            if current.previous_hash != previous.hash:
                return False
                
        return True`;

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
          
          <GlassCard className="p-8 mb-8">
            <h1 className="text-3xl font-bold mb-6">Interactive Code Examples</h1>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="mb-6 text-lg">
              Explore interactive code examples to see blockchain technologies in action. Edit the code 
              and run it to see the results in real-time. These examples demonstrate various aspects of 
              blockchain development across different languages.
            </p>
          </GlassCard>
          
          {/* Solidity Smart Contract */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Solidity Smart Contract</h2>
            <p className="mb-4">
              A simple smart contract written in Solidity, the primary language for Ethereum development. 
              This contract implements a basic storage mechanism.
            </p>
            <CodePlayground
              initialCode={blockchainCode}
              language="solidity"
              title="SimpleStorage.sol"
              className="h-[350px]"
            />
          </div>
          
          {/* JavaScript Blockchain Implementation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">JavaScript Blockchain Implementation</h2>
            <p className="mb-4">
              A Node.js implementation of a basic blockchain. This example shows how to create blocks, 
              calculate hashes, and implement a simple proof-of-work mechanism.
            </p>
            <CodePlayground
              initialCode={nodeJsCode}
              language="javascript"
              title="blockchain.js"
              className="h-[450px]"
            />
          </div>
          
          {/* Python Blockchain Implementation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Python Blockchain Implementation</h2>
            <p className="mb-4">
              A Python implementation of a blockchain with blocks, hash calculation, and chain validation. 
              This demonstrates blockchain principles in a more concise syntax.
            </p>
            <CodePlayground
              initialCode={pythonCode}
              language="python"
              title="blockchain.py"
              className="h-[450px]"
            />
          </div>
          
          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
            <p className="mb-4">
              Want to learn more about blockchain development? Check out these recommended resources:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a href="https://ethereum.org/developers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Ethereum Developer Documentation
                </a>
                 - Comprehensive guides for building on Ethereum
              </li>
              <li>
                <a href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Solidity Documentation
                </a>
                 - Official language documentation
              </li>
              <li>
                <a href="https://cryptozombies.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  CryptoZombies
                </a>
                 - Interactive code school for building games on Ethereum
              </li>
              <li>
                <a href="https://github.com/ethereumbook/ethereumbook" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Mastering Ethereum
                </a>
                 - Open source book for developers
              </li>
            </ul>
          </GlassCard>
        </div>
      </main>
      
      <Footer className="lg:pl-64" />
    </div>
  );
}