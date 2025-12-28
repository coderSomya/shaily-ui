
import React from 'react';
import { motion } from 'framer-motion';

interface RiverSliderProps {
  items: React.ReactNode[];
  speed?: number; // duration of one full cycle
  gap?: number; // space between items
  accentColor?: string;
  riverColor?: string;
  reverse?: boolean;
}

export const RiverSlider: React.FC<RiverSliderProps> = ({
  items,
  speed = 30,
  gap = 40,
  accentColor = '#f97316',
  riverColor = '#312e81', // indigo
  reverse = false
}) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-20 bg-zinc-950/50 border-y border-zinc-900 group">
      {/* The River Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Wave Lines */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: reverse ? '100%' : '-100%' }}
            animate={{ x: reverse ? '-100%' : '100%' }}
            transition={{
              duration: speed / (i * 0.5),
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[200%] h-[2px] opacity-10"
            style={{ 
              backgroundColor: riverColor,
              top: `${25 * i}%`,
              boxShadow: `0 0 15px ${riverColor}`
            }}
          />
        ))}
        
        {/* Floating Bindus (Particles) in the river */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0 
            }}
            animate={{ 
              x: reverse ? '-10%' : '110%',
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rotate-45"
          />
        ))}
      </div>

      {/* The Items Layer */}
      <motion.div
        className="flex relative z-10"
        animate={{ 
          x: reverse ? [0, 1000] : [0, -1000] 
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ gap: `${gap}px` }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 4 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          >
            {/* The "Raft" - a subtle shadow/glow beneath each floating item */}
            <div className="relative">
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/40 blur-lg rounded-full" />
              <div className="relative z-10">
                {item}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stylized River Banks (Edges) */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />
      
      {/* Top and Bottom Sharp Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </div>
  );
};

