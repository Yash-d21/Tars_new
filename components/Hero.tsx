
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Tars from './Tars';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Snappier
            className="border-l-2 border-white/20 pl-8 md:pl-12 py-8 relative z-10"
        >
          <span className="font-mono font-bold block mb-6 text-sm md:text-base text-emerald-400 tracking-[0.2em] uppercase">
            TARS NETWORKS
          </span>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-10 leading-[1.05]">
            Architecting the future <br className="hidden lg:block"/>
            of digital platforms.
          </h1>
          <p className="text-gray-100 max-w-2xl text-xl md:text-2xl font-light mb-14 leading-relaxed">
            We specialize in high-performance web development, scalable mobile applications, and robust system architecture. We transform complex ideas into reliable, production-ready software.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-4 text-white border border-white/30 px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm uppercase tracking-wider bg-white/5"
            >
              Start Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-white px-10 py-4 transition-colors duration-300 font-mono text-sm uppercase tracking-wider text-left sm:text-center"
            >
              View Portfolio
            </button>
          </div>
        </motion.div>
        <div className="flex items-center justify-center md:justify-end relative z-10 perspective-1000 scale-75 sm:scale-85 md:scale-90 lg:scale-100 overflow-visible max-w-full md:max-w-md lg:max-w-lg px-4 md:px-0 md:pr-8">
           <div className="relative w-full max-w-full">
             <div className="relative w-fit mx-auto md:mx-0 md:ml-auto">
               <Tars />
             </div>
           </div>
        </div>
      </div>
      <div className="absolute bottom-12 right-4 sm:right-12 hidden md:block z-10">
        <div className="flex flex-col items-end gap-2 text-xs font-mono text-gray-400 whitespace-nowrap">

           <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 4, repeat: Infinity }}>GRAVITY: 1.0G</motion.span>
           <span>LOC: 127.0.0.1</span>
           <span>EST. 2022</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;
