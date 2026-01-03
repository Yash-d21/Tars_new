
import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDERS } from '../constants';
import { Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          <div>
            <h2 className="font-mono text-xl md:text-2xl text-white tracking-widest mb-10 uppercase font-bold">01 / Origin</h2>
            <p className="text-3xl md:text-4xl text-white font-light leading-snug mb-8">
              "We used to look up at the sky and wonder at our place in the stars. Now we just look down, and worry about our place in the dirt."
            </p>
            <p className="text-emerald-400 font-mono text-base font-bold tracking-widest">
                — COOPER, INTERSTELLAR
            </p>
          </div>
          <div className="flex flex-col justify-end">
             <p className="text-gray-100 text-xl leading-relaxed mb-6 font-light">
              TARS Networks was founded to reverse that sentiment. We build systems that push boundaries.
              <span className="text-white font-bold ml-1">Teaching and Accelerating Research & Startups</span>.
            </p>
            <p className="text-gray-100 text-xl leading-relaxed font-light">
              Like the robot we are named after, we prioritize <span className="text-white border-b-2 border-emerald-400/30 font-bold">utility over vanity</span>. We execute under pressure, adapt to unknown variables, and ensure your mission succeeds.
            </p>
          </div>
        </motion.div>

        {/* Founders */}
        <div className="border-t border-white/20 pt-16">
          <h3 className="font-mono text-xl md:text-2xl text-white tracking-widest mb-16 uppercase font-bold">Command Crew</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FOUNDERS.map((founder, index) => (
              <motion.div 
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative"
              >
                 <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative w-full md:w-48 aspect-[4/5] overflow-hidden bg-white/5 border border-white/20">
                        <div className="absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-emerald-400/50 rounded-sm">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                            <span className="text-[10px] font-mono text-white tracking-widest font-bold">ACTIVE</span>
                        </div>
                        <img 
                            src={founder.image} 
                            alt={founder.name} 
                            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                    </div>

                    <div className="flex-1 pt-2">
                        <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-6">
                             <div>
                                <h4 className="text-3xl text-white font-light mb-1">{founder.name}</h4>
                                <p className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] font-bold">{founder.role}</p>
                             </div>
                             <div className="flex items-center gap-4">
                                {founder.linkedin && (
                                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                  </a>
                                )}
                             </div>
                        </div>

                        <div className="space-y-6">
                            {founder.bio.map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="font-mono text-emerald-400 text-xs font-bold pt-1.5">0{i+1}</span>
                                    <p className="text-gray-100 font-light text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {line}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;