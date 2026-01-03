
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onViewArchive: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onViewArchive }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  useEffect(() => {
    if (selectedId) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);
  const featuredProjects = PROJECTS.slice(0, 6);

  return (
    <section id="work" className="py-24 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-6">
            <h2 className="font-mono text-xl md:text-2xl text-white tracking-widest uppercase">04 / Flight Logs</h2>
            <span className="font-mono text-xs text-emerald-400 animate-pulse font-bold tracking-widest">LATEST MISSIONS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div 
                layoutId={`card-container-${project.id}`}
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }} // Snappier
                className="group relative h-96 bg-neutral-900/40 border border-white/10 p-8 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-white/40 transition-all duration-500 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <motion.span layoutId={`category-${project.id}`} className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3 block font-bold">{project.category}</motion.span>
                <motion.h3 layoutId={`title-${project.id}`} className="text-2xl text-white font-light group-hover:text-emerald-300 transition-colors">{project.title}</motion.h3>
              </div>
              <div className="relative z-10">
                <p className="text-gray-100 font-light text-base mb-6 line-clamp-3 group-hover:text-white transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.techStack.slice(0,2).map(tech => (
                        <span key={tech} className="text-[10px] font-mono text-white border border-white/20 px-2 py-1 bg-white/5 rounded-sm">{tech}</span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
            <button 
                onClick={onViewArchive}
                className="group flex items-center gap-4 text-white border-2 border-white/20 px-10 py-5 hover:border-white hover:bg-white/5 transition-all duration-300 font-mono text-sm uppercase tracking-[0.25em] font-bold"
            >
                Access Full Mission Archive
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[110]"
            />
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-12 pointer-events-none">
              <motion.div
                layoutId={`card-container-${selectedId}`}
                transition={{ duration: 0.3 }}
                className="w-full max-w-6xl bg-black border border-white/30 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col max-h-[85vh] pointer-events-auto"
              >
                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/20 p-12 bg-white/5">
                        <div className="mb-12">
                            <span className="font-mono text-xs text-emerald-400 tracking-[0.3em] uppercase block mb-6 font-bold">Archive Mission File</span>
                            <motion.h2 layoutId={`title-${selectedId}`} className="text-4xl text-white font-light leading-tight tracking-tight">{selectedProject.title}</motion.h2>
                        </div>
                        <div className="space-y-10">
                            <div><span className="text-xs font-mono text-gray-400 uppercase block mb-3 tracking-widest font-bold">Client</span><p className="text-white text-xl font-light">{selectedProject.client}</p></div>
                            <div><span className="text-xs font-mono text-gray-400 uppercase block mb-3 tracking-widest font-bold">Category</span><p className="text-white text-xl font-light">{selectedProject.category}</p></div>
                            <div><span className="text-xs font-mono text-gray-400 uppercase block mb-3 tracking-widest font-bold">Launch Year</span><p className="text-white text-xl font-light">{selectedProject.year}</p></div>
                        </div>
                    </div>
                    <div className="flex-1 p-12 bg-black/40 overflow-y-auto relative">
                        <button onClick={() => setSelectedId(null)} className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/40 p-2 rounded-full"><X className="w-8 h-8" /></button>
                        <h4 className="font-mono text-xs text-gray-400 uppercase tracking-[0.3em] mb-8 font-bold border-l-2 border-emerald-400 pl-4">Mission Debrief</h4>
                        <p className="text-gray-100 text-2xl font-light leading-relaxed mb-12">{selectedProject.longDescription}</p>
                        
                        <div className="mb-12">
                            <h4 className="font-mono text-xs text-gray-400 uppercase tracking-[0.3em] mb-6 font-bold border-l-2 border-blue-400 pl-4">Module Architecture</h4>
                            <div className="flex flex-wrap gap-3">
                                {selectedProject.techStack.map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-white/10 border border-white/20 rounded-sm font-mono text-xs text-white font-bold">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {selectedProject.url && (
                             <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-6 text-white border-2 border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all font-mono text-sm uppercase tracking-[0.2em] font-bold">
                                Initialize Live Sequence <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
