
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronDown } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [stage, setStage] = useState<number>(1);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    if (stage === 5) return;
    const interval = setInterval(() => {
      setStage(prev => (prev < 4 ? prev + 1 : 1));
    }, 4500); // Faster auto-cycle
    return () => clearInterval(interval);
  }, [stage]);

  const handleThrottleClick = (newStage: number) => {
    setStage(newStage);
    if (newStage === 5) {
      setIsLaunching(true);
      setTimeout(() => {
        setIsLaunching(false);
        setStage(1);
      }, 4000); // Snappier launch sequence
    }
  };

  const activeTestimonial = TESTIMONIALS.find((t) => t.id === stage) || TESTIMONIALS[0];

  return (
    <section id="transmissions" className="py-24 md:py-32 relative z-10 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-black">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="flex justify-between items-end mb-16 md:mb-24 border-b border-white/20 pb-6">
              <h2 className="font-mono text-xl md:text-2xl text-white tracking-widest uppercase font-bold">05 / Client Transmissions</h2>
              <span className="font-mono text-xs text-emerald-400 hidden md:inline-block font-bold">SIGNAL STRENGTH: 100%</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 flex gap-8 md:gap-16 h-[500px] md:h-[600px] items-end relative">
              <div className="relative h-full w-24 md:w-32 bg-neutral-900/50 border border-white/20 rounded-lg flex flex-col items-center py-8 backdrop-blur-md z-30">
                  <div className="absolute top-8 bottom-8 w-2 bg-neutral-800 rounded-full">
                      <motion.div 
                          className="w-full bg-emerald-400 rounded-full absolute top-0 shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                          animate={{ height: `${((stage - 1) / 4) * 100}%` }}
                          transition={{ type: "spring", stiffness: 120, damping: 20 }} // Faster spring
                      />
                  </div>

                  <div className="absolute top-8 bottom-8 left-0 right-0 flex flex-col justify-between items-center pointer-events-none">
                      {[1, 2, 3, 4, 5].map((s) => (
                          <div key={s} className="flex items-center w-full justify-center relative">
                              <div className="w-4 h-0.5 bg-neutral-600"></div>
                              <span className={`absolute -left-5 font-mono text-[10px] font-bold ${stage >= s ? 'text-emerald-400' : 'text-neutral-500'}`}>
                                  {s === 5 ? 'MAX' : `0${s}`}
                              </span>
                          </div>
                      ))}
                  </div>

                  <div className="absolute inset-0 z-20 flex flex-col">
                      {[1, 2, 3, 4, 5].map((s) => (
                          <div key={s} onClick={() => handleThrottleClick(s)} className="flex-1 w-full cursor-pointer hover:bg-white/10 transition-colors group" />
                      ))}
                  </div>

                  <motion.div
                      animate={{ top: `${((stage - 1) / 4) * 85}%` }}
                      transition={{ type: "spring", stiffness: 140, damping: 18 }} // Snappy lever
                      className="absolute left-1/2 -translate-x-1/2 w-16 h-12 bg-neutral-800 border-2 border-white/40 rounded shadow-2xl flex items-center justify-center z-10 pointer-events-none mt-4"
                  >
                      <div className="w-12 h-1 bg-black/50 rounded-full"></div>
                      <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${stage === 5 ? 'bg-red-500 animate-pulse' : 'bg-emerald-400'}`}></div>
                  </motion.div>
                  <div className="absolute bottom-2 font-mono text-[10px] text-gray-400 tracking-widest uppercase font-bold">Throttle</div>
              </div>

              <div className="flex-1 h-full relative flex justify-center items-end pb-12">
                  <div className="absolute top-0 left-0 w-full z-10">
                      <div className="flex items-center justify-between mb-2">
                          <h2 className="font-mono text-sm text-emerald-400 tracking-[0.3em] uppercase flex items-center gap-2 font-bold">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                              SYSTEM LAUNCH
                          </h2>
                          <div className="flex flex-col items-end">
                              <span className="font-mono text-xs text-white tracking-wider font-bold">TARS-X1</span>
                              <span className={`font-mono text-[10px] tracking-widest font-bold ${stage >= 4 ? 'text-red-500 animate-pulse' : 'text-gray-400'}`}>
                                  {stage === 1 ? 'STANDBY' : stage === 5 ? 'LIFTOFF' : 'PRESSURIZED'}
                              </span>
                          </div>
                      </div>
                      <div className="h-1 w-full bg-white/10 relative overflow-hidden rounded-full">
                          <motion.div 
                              className="absolute inset-0 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                              animate={{ width: `${stage * 20}%` }}
                              transition={{ duration: 0.3 }}
                          />
                      </div>
                  </div>

                  <motion.div
                    animate={stage >= 3 && stage < 5 ? { x: [-1, 1, -1, 1], y: [0, 1, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 0.08 }} // Faster shake
                    className="relative w-full h-full flex justify-center items-end"
                  >
                      <motion.div 
                          className="absolute bottom-0 left-0 md:left-4 w-4 md:w-8 h-[80%] bg-neutral-900 border-r border-white/20 z-20 origin-bottom-left"
                          animate={{ rotate: stage >= 4 ? -15 : 0, opacity: stage === 5 ? 0 : 1 }}
                          transition={{ duration: 1.2 }}
                      />
                      <motion.div 
                          className="absolute bottom-0 right-0 md:right-4 w-4 md:w-8 h-[80%] bg-neutral-900 border-l border-white/20 z-20 origin-bottom-right"
                          animate={{ rotate: stage >= 4 ? 15 : 0, opacity: stage === 5 ? 0 : 1 }}
                          transition={{ duration: 1.2 }}
                      />

                      <motion.div
                          className="relative z-10 w-32 md:w-48"
                          animate={{ 
                              y: stage === 5 ? -1200 : stage >= 3 ? -8 : 0,
                              scale: stage === 5 ? 0.7 : 1
                          }}
                          transition={stage === 5 ? { duration: 2.2, ease: "easeIn" } : { duration: 0.35 }}
                      >
                          <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-2xl">
                              {stage >= 2 && (
                                  <g opacity={stage >= 3 ? 1 : 0.6}>
                                      <path d="M 40 160 L 50 190 L 60 160" fill="url(#engineFire)" />
                                      {stage >= 4 && (
                                          <motion.path 
                                              d="M 35 160 L 50 240 L 65 160" 
                                              fill="url(#engineFire)" 
                                              animate={{ opacity: [0.7, 1, 0.7], scaleY: [1.1, 1.8, 1.1] }}
                                              transition={{ duration: 0.1, repeat: Infinity }}
                                          />
                                      )}
                                  </g>
                              )}
                              <defs>
                                  <linearGradient id="fuselage" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="#e2e8f0" /><stop offset="50%" stopColor="#f8fafc" /><stop offset="100%" stopColor="#cbd5e1" /></linearGradient>
                                  <linearGradient id="engineFire" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="40%" stopColor="#ffffff" /><stop offset="100%" stopColor="transparent" /></linearGradient>
                              </defs>
                              <path d="M 50 20 L 70 140 L 50 155 L 30 140 Z" fill="url(#fuselage)" />
                              <path d="M 45 60 L 55 60 L 55 70 L 45 70 Z" fill="#0f172a" />
                              <path d="M 30 110 L 10 150 L 30 140 Z" fill="#cbd5e1" />
                              <path d="M 70 110 L 90 150 L 70 140 Z" fill="#cbd5e1" />
                          </svg>
                      </motion.div>
                  </motion.div>
              </div>
            </div>

            <div className="lg:col-span-6 pl-0 lg:pl-12">
              <div className="mb-12">
                  <h2 className="font-mono text-sm text-emerald-400 tracking-[0.3em] uppercase mb-4 flex items-center gap-3 font-bold">
                      <span className={`w-3 h-3 rounded-full ${stage === 5 ? 'bg-white' : 'bg-emerald-400'} animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]`}></span>
                      Flight Data Recorder
                  </h2>
                  <div className="h-px w-full bg-white/20 relative overflow-hidden">
                      <motion.div className="absolute inset-0 bg-white/40" initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                  </div>
              </div>

              <div className="min-h-[350px] relative">
                  <AnimatePresence mode="wait">
                      <motion.div
                        key={stage}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.25 }} // Faster text swap
                      >
                        <div className="flex justify-between items-start mb-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/20 rounded font-mono text-xs text-white">
                                  <span className="font-bold">SEQ: 0{stage}</span>
                                  <span className="w-px h-4 bg-white/20"></span>
                                  <span className="text-emerald-400 uppercase tracking-widest font-bold">{activeTestimonial.attribute}</span>
                            </div>
                            <Quote className="w-16 h-16 text-white/10 rotate-180" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-light text-white leading-[1.2] mb-12 tracking-tight">"{activeTestimonial.text}"</h3>
                        <div className="space-y-6 font-mono text-xs text-gray-300 uppercase tracking-widest font-bold">
                            <div className="flex justify-between border-b border-white/10 pb-3"><span>Turbine Pressure</span><span className={stage >= 3 ? "text-emerald-400" : "text-gray-500"}>{stage * 20}%</span></div>
                            <div className="flex justify-between border-b border-white/10 pb-3"><span>Gantry Status</span><span className={stage >= 4 ? "text-red-500 animate-pulse" : "text-emerald-400"}>{stage >= 4 ? "RELEASED" : "LOCKED"}</span></div>
                            <div className="flex justify-between"><span>Client Signal</span><span className="text-white">VERIFIED // SECURE</span></div>
                        </div>
                      </motion.div>
                  </AnimatePresence>
              </div>
              <div className="mt-12 flex items-center gap-4">
                  <ChevronDown className="w-5 h-5 text-emerald-400 animate-bounce" />
                  <span className="font-mono text-sm text-white font-bold tracking-widest">ENGAGE THRUST LEVER TO MAX (05)</span>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default Testimonials;
