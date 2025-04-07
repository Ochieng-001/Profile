import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Resume from "./pages/Resume";
import Vision from "./pages/Vision";
import Gallery from "./pages/Gallery";
import BlockchainFacts from "./pages/BlockchainFacts";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/vision-mission" component={Vision} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/blockchain-facts" component={BlockchainFacts} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize theme on app load
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme class on document
    if (savedTheme === 'light') {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    } else {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
