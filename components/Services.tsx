
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-mono text-xl md:text-2xl text-white tracking-widest mb-16 uppercase border-b border-white/10 pb-4 inline-block">02 / System Modules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-16">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-black/90 p-10 hover:bg-neutral-900/90 transition-colors duration-500 group relative backdrop-blur-sm"
            >
              {/* Corner accent for tech feel */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-transparent group-hover:border-white/30 transition-all"></div>

              <h3 className="text-xl text-white font-normal mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
              <p className="text-gray-200 font-light text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Ashmond & Co. Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-white/20 bg-gradient-to-r from-white/[0.05] to-transparent p-8 md:p-12 relative overflow-hidden group"
        >
            {/* Subtle glow effect */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-emerald-400"></div>
                        <span className="font-mono text-xs text-emerald-400 tracking-[0.2em] uppercase font-bold">Strategic Consulting Division</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl text-white font-light tracking-tight mb-4 italic">Ashmond & Co.</h3>
                    <p className="text-gray-200 font-light text-xl leading-relaxed">
                        Our premium consulting arm dedicated to high-level architectural auditing, fractional CTO services, and digital transformation strategy. 
                        We provide the blueprint; you build the legacy.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <a 
                      href="https://ashmondco.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 border border-white/40 overflow-hidden flex items-center gap-3 transition-all duration-300 hover:border-white block"
                    >
                         <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                         <span className="relative z-10 font-mono text-xs uppercase tracking-widest text-white group-hover:text-black transition-colors font-bold">Engage Partners</span>
                         <ArrowUpRight className="relative z-10 w-4 h-4 text-white group-hover:text-black transition-colors" />
                    </a>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;