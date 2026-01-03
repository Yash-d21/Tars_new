
import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="font-mono text-2xl md:text-3xl tracking-widest text-white font-bold cursor-pointer hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          tars networks
        </div>
        <div className="flex gap-8 md:gap-12 hidden md:flex">
          {['About', 'Process', 'Work', 'Transmissions', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-gray-200 hover:text-white transition-colors duration-300 font-bold"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
