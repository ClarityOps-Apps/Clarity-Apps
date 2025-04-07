import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import JoinJourney from './components/JoinJourney';
import AppCards from './components/AppCards';
import TryApps from './components/TryApps';
import Footer from './components/Footer';
import Vision from './components/Vision';

export function App() {
  useEffect(() => {
    // Load SF Pro Display font
    const sfProLink = document.createElement('link');
    sfProLink.href = 'https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap';
    sfProLink.rel = 'stylesheet';
    document.head.appendChild(sfProLink);
    
    // Load League Spartan font
    const leagueSpartanLink = document.createElement('link');
    leagueSpartanLink.href = 'https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&display=swap';
    leagueSpartanLink.rel = 'stylesheet';
    document.head.appendChild(leagueSpartanLink);
    
    return () => {
      document.head.removeChild(sfProLink);
      document.head.removeChild(leagueSpartanLink);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-100 to-blue-100">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <JoinJourney />
        <TryApps />
        <AppCards />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

export default App;
