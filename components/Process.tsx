
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-mono text-xl md:text-2xl text-white tracking-widest mb-20 uppercase">03 / Docking Procedure</h2>
        
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 relative">
            {PROCESS.map((item, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3, duration: 0.6 }}
                    className="relative z-10 pr-6 group"
                >
                    <div className="flex items-center gap-4 mb-6 md:block md:mb-8">
                        <div className="w-8 h-8 md:w-4 md:h-4 bg-black border-2 border-white/40 rounded-full flex items-center justify-center md:block group-hover:bg-white group-hover:border-white transition-all duration-500 relative">
                          {/* Pulse Effect */}
                          <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                        </div>
                         <span className="font-mono text-xs text-gray-400 block md:mt-4 font-bold tracking-widest">STEP {item.step}</span>
                    </div>
                    
                    <h3 className="text-2xl text-white font-light mb-4">{item.title}</h3>
                    <p className="text-base text-gray-200 leading-relaxed font-light">{item.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
