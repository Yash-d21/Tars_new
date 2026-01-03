
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tars: React.FC = () => {
  const [humor, setHumor] = useState(75);
  const [honesty, setHonesty] = useState(90);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setHumor(prev => Math.min(100, Math.max(0, prev + (Math.random() * 4 - 2))));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const segmentVariants = {
    idle: { rotateX: 0, y: 0, z: 0 },
    hover: (i: number) => ({
      y: i % 2 === 0 ? -16 : 16, 
      rotateX: i % 2 === 0 ? 4 : -4,
      z: 25,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } // Snappier response
    }),
    tap: { scale: 0.98 }
  };

  return (
    <div className="relative w-64 h-96 perspective-1000 group cursor-pointer overflow-visible"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="w-full h-full relative preserve-3d flex gap-1 items-end"
        animate={{ 
          rotateY: isHovered ? 30 : 15, 
          rotateX: isHovered ? 4 : 5 
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }} // Snappier spring
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={segmentVariants}
            animate={isHovered ? "hover" : "idle"}
            whileTap="tap"
            className={`
              h-full flex-1 relative preserve-3d
              ${i === 0 ? 'rounded-l-lg' : ''} 
              ${i === 3 ? 'rounded-r-lg' : ''}
              bg-gradient-to-br from-neutral-800 to-neutral-950
              border-t border-l border-white/20 shadow-2xl overflow-hidden
            `}
          >
            <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ top: '-20%', opacity: 0 }}
                  animate={{ top: '120%', opacity: [0, 0.6, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 1.2, // Faster scanline
                    repeat: Infinity, 
                    ease: "linear", 
                    delay: i * 0.1 
                  }}
                  className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent z-20 pointer-events-none"
                />
              )}
            </AnimatePresence>

            {i === 1 && (
               <div className="absolute top-8 left-2 right-2 flex flex-col gap-1 opacity-100">
                 <motion.div 
                   animate={{ 
                     opacity: isHovered ? 1 : 0.8, 
                     boxShadow: isHovered ? "0 0 10px rgba(16,185,129,0.8)" : "0 0 0px rgba(16,185,129,0)" 
                   }}
                   className="h-1 w-full bg-emerald-400 transition-all duration-300"
                 ></motion.div>
                 <div className="flex justify-between mt-2">
                    <span className="text-[7px] font-mono text-emerald-400 font-bold">HUM</span>
                    <span className="text-[7px] font-mono text-emerald-400 font-bold">{Math.floor(humor)}%</span>
                 </div>
               </div>
            )}

            {i === 2 && (
               <div className="absolute top-8 left-2 right-2 flex flex-col gap-1 opacity-100">
                 <motion.div 
                   animate={{ 
                     opacity: isHovered ? 1 : 0.8, 
                     boxShadow: isHovered ? "0 0 10px rgba(59,130,246,0.8)" : "0 0 0px rgba(59,130,246,0)" 
                   }}
                   className="h-1 w-full bg-blue-400 transition-all duration-300"
                 ></motion.div>
                 <div className="flex justify-between mt-2">
                    <span className="text-[7px] font-mono text-blue-400 font-bold">HON</span>
                    <span className="text-[7px] font-mono text-blue-400 font-bold">{Math.floor(honesty)}%</span>
                 </div>
               </div>
            )}
            <div className="absolute bottom-12 w-full h-[1px] bg-white/10"></div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="absolute -bottom-12 left-0 md:bottom-auto md:left-full md:ml-4 md:top-10 font-mono text-xs text-gray-200 flex flex-col gap-2 font-bold tracking-widest whitespace-nowrap" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
        <span className="flex items-center gap-2"><motion.span animate={{ backgroundColor: '#10B981', boxShadow: "0 0 8px #10B981" }} className="w-2 h-2 rounded-full animate-pulse" />ONLINE</span>
        <span className="transition-colors duration-300 text-white">CASE: {isHovered ? 'ACTIVE' : 'STDBY'}</span>
        <span className="text-gray-400">KIPP: OFF</span>
      </motion.div>
    </div>
  );
};

export default Tars;
