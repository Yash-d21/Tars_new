
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink, Activity, ChevronRight, Search, X } from 'lucide-react';

interface ArchiveViewProps {
  onBack: () => void;
}

const ArchiveView: React.FC<ArchiveViewProps> = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState('');

  const filteredProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(filter.toLowerCase()) || 
    p.category.toLowerCase().includes(filter.toLowerCase())
  );

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] overflow-y-auto no-scrollbar"
    >
      {/* Background HUD Decor */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <button 
            onClick={onBack}
            className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest mb-12 group font-bold"
        >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
            Back to Command Center
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b border-white/20 pb-12">
            <div>
                <h1 className="text-5xl md:text-8xl font-light text-white mb-6 tracking-tighter">Mission Archive</h1>
                <p className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase font-bold">TARS NETWORKS / LOGGED DATA / DECLASSIFIED</p>
            </div>
            
            <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="FILTER MISSIONS..." 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-14 pr-6 text-white font-mono text-sm focus:outline-none focus:border-emerald-400/50 transition-colors placeholder:text-gray-500"
                />
            </div>
        </div>

        <div className="space-y-4">
            {filteredProjects.map((project, idx) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.3 }}
                    onClick={() => setSelectedId(project.id)}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 px-6 md:px-12 py-10 bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all cursor-pointer group items-center"
                >
                    <div className="col-span-1 hidden md:block">
                        <span className="font-mono text-xs text-gray-400 group-hover:text-emerald-400 font-bold">#{idx + 1}</span>
                    </div>
                    <div className="col-span-5">
                        <h3 className="text-2xl text-white font-light group-hover:translate-x-2 transition-transform">{project.title}</h3>
                        <p className="text-emerald-400 text-xs font-mono mt-2 uppercase tracking-[0.2em] font-bold">{project.category}</p>
                    </div>
                    <div className="col-span-2 hidden md:block">
                        <span className="text-gray-300 font-light text-base">{project.year}</span>
                    </div>
                    <div className="col-span-3">
                        <div className="flex items-center gap-4">
                            <span className={`w-2 h-2 rounded-full ${project.missionStatus === 'CLASSIFIED' ? 'bg-red-500' : 'bg-emerald-400'} animate-pulse`}></span>
                            <span className="font-mono text-xs text-gray-300 uppercase tracking-widest font-bold">{project.missionStatus}</span>
                        </div>
                    </div>
                    <div className="col-span-1 text-right">
                        <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors ml-auto" />
                    </div>
                </motion.div>
            ))}
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
                layoutId={`archive-project-${selectedId}`}
                transition={{ duration: 0.3 }}
                className="w-full max-w-6xl bg-black border border-white/30 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col max-h-[85vh] pointer-events-auto"
              >
                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/20 p-12 bg-white/5">
                        <div className="mb-12">
                            <span className="font-mono text-xs text-emerald-400 tracking-[0.3em] uppercase block mb-6 font-bold">Archive Mission File</span>
                            <h2 className="text-4xl text-white font-light leading-tight tracking-tight">{selectedProject.title}</h2>
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
                                Initializing Live Sequence <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ArchiveView;
