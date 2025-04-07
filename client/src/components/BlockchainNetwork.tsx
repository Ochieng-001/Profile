import { useEffect, useRef } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  connections: number[];
}

export default function BlockchainNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<Node[]>([]);
  const animationRef = useRef<number>();
  
  // Initialize the nodes
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Clear any existing animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create nodes
    const numNodes = 15;
    const nodeArray: Node[] = [];
    
    for (let i = 0; i < numNodes; i++) {
      const size = Math.random() * 3 + 2; // Node size between 2-5px
      nodeArray.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speed: Math.random() * 0.5 + 0.1, // Speed between 0.1-0.6
        color: getRandomColor(),
        connections: [] // Will be populated after all nodes are created
      });
    }
    
    // Create connections between nodes (not all nodes connect to all other nodes)
    nodeArray.forEach(node => {
      const numConnections = Math.floor(Math.random() * 3) + 1; // 1-3 connections per node
      const possibleConnections = nodeArray.filter(n => n.id !== node.id && !node.connections.includes(n.id));
      
      for (let i = 0; i < numConnections && i < possibleConnections.length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleConnections.length);
        const targetNode = possibleConnections[randomIndex];
        node.connections.push(targetNode.id);
        
        // Remove the selected node from possible connections to avoid duplicates
        possibleConnections.splice(randomIndex, 1);
      }
    });
    
    nodes.current = nodeArray;
    
    // Animation function
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first (so they appear behind nodes)
      ctx.lineWidth = 0.5;
      
      nodes.current.forEach(node => {
        node.connections.forEach(targetId => {
          const targetNode = nodes.current.find(n => n.id === targetId);
          if (targetNode) {
            // Calculate distance between nodes to determine opacity
            const dx = node.x - targetNode.x;
            const dy = node.y - targetNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
            const opacity = 0.3 - (distance / maxDistance) * 0.3;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.strokeStyle = `rgba(0, 153, 255, ${opacity})`;
            ctx.stroke();
            
            // Draw data transfer particles along connection lines
            if (Math.random() > 0.98) { // Occasionally create a data packet
              const packetOffset = Math.random();
              const packetX = node.x + dx * packetOffset;
              const packetY = node.y + dy * packetOffset;
              
              ctx.beginPath();
              ctx.arc(packetX, packetY, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              ctx.fill();
            }
          }
        });
      });
      
      // Draw nodes
      nodes.current.forEach(node => {
        // Move the node
        node.x += (Math.random() - 0.5) * node.speed;
        node.y += (Math.random() - 0.5) * node.speed;
        
        // Keep the node within canvas bounds
        if (node.x < 0) node.x = 0;
        if (node.x > canvas.width) node.x = canvas.width;
        if (node.y < 0) node.y = 0;
        if (node.y > canvas.height) node.y = canvas.height;
        
        // Draw the node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Draw a glow effect
        const gradient = ctx.createRadialGradient(node.x, node.y, node.size, node.x, node.y, node.size * 3);
        gradient.addColorStop(0, `rgba(0, 153, 255, 0.2)`);
        gradient.addColorStop(1, 'rgba(0, 153, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  function getRandomColor() {
    const colors = [
      'rgba(0, 153, 255, 0.9)',  // Blue
      'rgba(0, 204, 255, 0.9)',  // Light blue
      'rgba(51, 102, 255, 0.9)', // Royal blue
      'rgba(102, 0, 255, 0.9)',  // Purple
      'rgba(153, 51, 255, 0.9)'  // Light purple
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  return (
    <div className="w-full h-full">
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full" 
      />
    </div>
  );
}