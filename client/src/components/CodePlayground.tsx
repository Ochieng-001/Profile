import { useState, useEffect, useRef } from 'react';
import GlassCard from './GlassCard';

interface CodePlaygroundProps {
  initialCode: string;
  language: string;
  title?: string;
  readOnly?: boolean;
  className?: string;
}

export default function CodePlayground({
  initialCode,
  language,
  title = 'Code Editor',
  readOnly = false,
  className = '',
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [formattedCode, setFormattedCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
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
    
    // Format code on initial load
    formatCode(initialCode);
    
    return () => {
      observer.disconnect();
    };
  }, [initialCode]);
  
  const formatCode = (codeToFormat: string) => {
    // Simple syntax highlighting regex patterns based on language
    let formatted = codeToFormat;
    
    // Replace HTML special characters
    formatted = formatted.replace(/&/g, '&amp;')
                         .replace(/</g, '&lt;')
                         .replace(/>/g, '&gt;');
    
    // Apply language-specific syntax highlighting
    if (language === 'javascript' || language === 'typescript') {
      // Keywords
      formatted = formatted.replace(
        /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|try|catch|new|this)\b/g, 
        '<span class="keyword">$1</span>'
      );
      
      // Strings
      formatted = formatted.replace(
        /(['"`])(.*?)\1/g, 
        '<span class="string">$1$2$1</span>'
      );
      
      // Numbers
      formatted = formatted.replace(
        /\b(\d+)\b/g, 
        '<span class="number">$1</span>'
      );
      
      // Function names
      formatted = formatted.replace(
        /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, 
        '<span class="function">$1</span>('
      );
      
      // Comments
      formatted = formatted.replace(
        /(\/\/.*)/g, 
        '<span class="comment">$1</span>'
      );
      
      // Properties
      formatted = formatted.replace(
        /\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, 
        '.<span class="property">$1</span>'
      );
    } 
    else if (language === 'python') {
      // Keywords
      formatted = formatted.replace(
        /\b(def|class|if|elif|else|for|while|import|from|return|try|except|with|as|pass|raise|global|self|None|True|False)\b/g, 
        '<span class="keyword">$1</span>'
      );
      
      // Strings
      formatted = formatted.replace(
        /(['"])(.*?)\1/g, 
        '<span class="string">$1$2$1</span>'
      );
      
      // Numbers
      formatted = formatted.replace(
        /\b(\d+)\b/g, 
        '<span class="number">$1</span>'
      );
      
      // Function names
      formatted = formatted.replace(
        /\b(def)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 
        '<span class="keyword">def</span> <span class="function">$2</span>'
      );
      
      // Comments
      formatted = formatted.replace(
        /(#.*)/g, 
        '<span class="comment">$1</span>'
      );
    }
    else if (language === 'solidity') {
      // Keywords
      formatted = formatted.replace(
        /\b(pragma|solidity|contract|function|public|private|internal|external|view|pure|returns|uint|int|bytes|address|bool|string|mapping|struct|require|msg|block|tx|memory|storage|calldata|emit|event|indexed|modifier|constructor|using|for)\b/g, 
        '<span class="keyword">$1</span>'
      );
      
      // Strings
      formatted = formatted.replace(
        /(['"])(.*?)\1/g, 
        '<span class="string">$1$2$1</span>'
      );
      
      // Numbers
      formatted = formatted.replace(
        /\b(\d+)\b/g, 
        '<span class="number">$1</span>'
      );
      
      // Function names
      formatted = formatted.replace(
        /\b(function)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 
        '<span class="keyword">function</span> <span class="function">$2</span>'
      );
      
      // Comments
      formatted = formatted.replace(
        /(\/\/.*)/g, 
        '<span class="comment">$1</span>'
      );
    }
    
    // Replace newlines with <br> for HTML display
    formatted = formatted.replace(/\n/g, '<br>');
    
    setFormattedCode(formatted);
  };
  
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    formatCode(newCode);
  };
  
  const runCode = () => {
    setIsRunning(true);
    
    // Simple code execution simulation
    try {
      setOutput('');
      
      // For demonstration purposes, we'll show different simulated outputs based on the code content
      setTimeout(() => {
        if (language === 'javascript') {
          if (code.includes('console.log')) {
            setOutput('> Output from console.log statements would appear here\n> JavaScript code executed successfully!');
          } else if (code.includes('mineBlock')) {
            setOutput('Mining block...\nBlock mined: 00df8a7ee4a85d4f180c070a83b0a932fac1854a4fb7c26a4c9842a11addd1ff\n> JavaScript code executed successfully!');
          } else {
            setOutput('> JavaScript code executed successfully!');
          }
        } 
        else if (language === 'python') {
          if (code.includes('print')) {
            setOutput('Output from print statements would appear here\nPython code executed successfully!');
          } else if (code.includes('Blockchain')){
            setOutput('Blockchain initialized.\nGenesis block created.\nAdded new block to the chain.\nChain validation: True\nPython code executed successfully!');
          } else {
            setOutput('Python code executed successfully!');
          }
        } 
        else if (language === 'solidity') {
          setOutput('Compiled Solidity 0.8.17 successfully.\nDeployed contract to address: 0x8940A13a5D3016A0e96883639595532DB2480f49\nTransaction hash: 0xbf41b635389df58c3d8ce7ef949ca34c80ad1c17a76737a5624a527a373b1efb\nGas used: 104523');
        }
        setIsRunning(false);
      }, 1500);
    } catch (error) {
      setOutput(`Error: ${error}`);
      setIsRunning(false);
    }
  };
  
  // Handle tab key to insert spaces instead of shifting focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      
      // Insert 2 spaces at the cursor position or selection
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      formatCode(newCode);
      
      // Move cursor after the inserted spaces
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };
  
  return (
    <GlassCard className={`overflow-hidden flex flex-col ${className}`}>
      {/* Editor Header */}
      <div className={`flex items-center justify-between p-3 ${isLightTheme ? 'bg-gray-200/70' : 'bg-gray-800/70'} border-b ${isLightTheme ? 'border-gray-300' : 'border-gray-700'}`}>
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-xs ${isLightTheme ? 'text-gray-600' : 'text-gray-400'}`}>
            {language.toUpperCase()}
          </span>
        </div>
      </div>
      
      {/* Code Editor */}
      <div className="flex flex-1 relative">
        {/* Hidden textarea for editing */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          disabled={readOnly}
          className={`absolute inset-0 font-mono text-sm p-4 resize-none ${isLightTheme ? 'bg-gray-100/50' : 'bg-gray-900/50'} w-full h-full z-10 ${readOnly ? 'opacity-0 cursor-not-allowed' : 'opacity-40'}`}
          spellCheck="false"
        />
        
        {/* Syntax highlighted display */}
        <div 
          className={`w-full h-full overflow-auto font-mono text-sm p-4 ${isLightTheme ? 'bg-gray-100/50' : 'bg-gray-900/50'} code-playground-input`}
          dangerouslySetInnerHTML={{ __html: formattedCode }}
        ></div>
      </div>
      
      {/* Control Panel and Output */}
      <div className={`p-3 ${isLightTheme ? 'bg-gray-200/70' : 'bg-gray-700/70'} border-t ${isLightTheme ? 'border-gray-300' : 'border-gray-700'} flex flex-col`}>
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs ${isLightTheme ? 'text-gray-600' : 'text-gray-300'}`}>
            {readOnly ? 'Read-only mode' : 'Edit mode'}
          </span>
          <button
            onClick={runCode}
            disabled={isRunning || readOnly}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              isRunning
                ? 'bg-gray-500 cursor-not-allowed'
                : readOnly
                  ? 'bg-gray-500 cursor-not-allowed'
                  : isLightTheme
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : 'bg-primary hover:bg-primary/90 text-white'
            }`}
          >
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
        </div>
        
        {output && (
          <div className={`mt-2 p-3 rounded-md ${isLightTheme ? 'bg-gray-300/70 text-gray-800' : 'bg-black/80 text-green-400'} text-xs h-24 overflow-auto terminal-output`}>
            <pre>{output}</pre>
          </div>
        )}
      </div>
    </GlassCard>
  );
}