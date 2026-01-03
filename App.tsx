
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ArchiveView from './components/ArchiveView';

function App() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Lock body scroll when archive is open
  useEffect(() => {
    if (isArchiveOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isArchiveOpen]);

  return (
    <div className="relative bg-black min-h-screen text-white selection:bg-white/20 selection:text-white">
      <StarBackground />
      
      {/* Main Content - Always mounted to preserve scroll position */}
      <div className={isArchiveOpen ? "pointer-events-none" : ""}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Portfolio onViewArchive={() => setIsArchiveOpen(true)} />
          <Testimonials />
        </main>
        <Footer />
      </div>

      {/* Archive Overlay */}
      <AnimatePresence>
        {isArchiveOpen && (
          <ArchiveView 
            key="archive" 
            onBack={() => setIsArchiveOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
