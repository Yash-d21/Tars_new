import React from 'react';
import { motion } from 'framer-motion';

const Endurance: React.FC = () => {
  return (
    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[55vw] md:h-[55vw] max-w-[1000px] max-h-[1000px] opacity-[0.15] pointer-events-none select-none z-0 overflow-visible mix-blend-plus-lighter blur-[1px]">
       <motion.div
         className="w-full h-full flex items-center justify-center origin-center"
         animate={{ rotate: 360 }}
         transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
       >
         <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl">
            <defs>
                {/* Metallic Hull Gradient simulating light source from top-left */}
                <linearGradient id="hullGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#cbd5e1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#475569" stopOpacity="0.8" />
                </linearGradient>

                {/* Darker recess gradient */}
                <linearGradient id="darkHull" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                {/* Engine Glow */}
                <radialGradient id="engineGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>

                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            {/* Central Hub Complex */}
            <g filter="url(#softGlow)">
                {/* Main Hub Body */}
                <circle cx="250" cy="250" r="35" fill="url(#hullGradient)" stroke="#334155" strokeWidth="1" />
                {/* Inner docking ring */}
                <circle cx="250" cy="250" r="15" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                <circle cx="250" cy="250" r="4" fill="white" className="animate-pulse" />
            </g>

            {/* Render 12 Module Pods */}
            {[...Array(12)].map((_, i) => {
                const angle = i * 30;
                return (
                    <g key={i} transform={`rotate(${angle} 250 250)`}>
                        {/* Connecting Strut (Tunnel) */}
                        <rect x="246" y="190" width="8" height="60" fill="#334155" transform="rotate(180 250 250)" />
                        
                        {/* The Connector Joint */}
                        <circle cx="250" cy="180" r="6" fill="#475569" />

                        {/* The Module (Pod) - Drawing a detailed trapezoid/rectangle shape */}
                        {/* We use a path to draw the specific blocky shape of the Endurance modules */}
                        <path 
                            d="M 235 120 L 265 120 L 270 165 L 230 165 Z" 
                            fill="url(#hullGradient)" 
                            stroke="#ffffff" 
                            strokeWidth="0.5"
                            strokeOpacity="0.3"
                        />
                        
                        {/* Module Detail: Top Hatch/greeble */}
                        <rect x="242" y="130" width="16" height="20" fill="url(#darkHull)" opacity="0.6" rx="1" />
                        
                        {/* Tiny lights on the module */}
                        <circle cx="238" cy="160" r="1" fill="white" opacity="0.8" />
                        <circle cx="262" cy="160" r="1" fill="white" opacity="0.8" />
                    </g>
                );
            })}
            
            {/* Outer Ring Connectors (The floor between modules) */}
            <path 
                d="M 250 110 A 140 140 0 0 1 250 390 A 140 140 0 0 1 250 110" 
                fill="none" 
                stroke="url(#hullGradient)" 
                strokeWidth="2" 
                strokeOpacity="0.2"
                strokeDasharray="10 5"
            />

         </svg>
       </motion.div>
    </div>
  );
};

export default Endurance;