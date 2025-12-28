
import React from 'react';
import { motion } from 'framer-motion';

interface SwastikLoaderProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  speed?: number;
  showDots?: boolean;
}

/**
 * MangalLoader: A minimalist, sharp-edged loader inspired by the 
 * traditional Svastika symbol representing prosperity and auspiciousness.
 */
export const SwastikLoader: React.FC<SwastikLoaderProps> = ({
  size = 80,
  color = '#f97316', // Saffron default
  strokeWidth = 2,
  speed = 2,
  showDots = true
}) => {
  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: speed, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
        opacity: { duration: 0.3 }
      }
    }
  };

  const dotVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
      transition: {
        duration: speed,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The Svastika Path - Sharp Edges */}
        <motion.path
          d="M50 20 V80 M50 20 H80 M80 50 V80 M50 80 H20 M20 50 V20 M20 50 H80"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          variants={pathVariants as any}
          initial="initial"
          animate="animate"
        />

        {/* Bindus (Dots) - Representing the four directions/aims of life */}
        {showDots && (
          <>
            <motion.rect x="63" y="33" width="4" height="4" fill={color} variants={dotVariants as any} initial="initial" animate="animate" />
            <motion.rect x="63" y="63" width="4" height="4" fill={color} variants={dotVariants as any} initial="initial" animate="animate" />
            <motion.rect x="33" y="63" width="4" height="4" fill={color} variants={dotVariants as any} initial="initial" animate="animate" />
            <motion.rect x="33" y="33" width="4" height="4" fill={color} variants={dotVariants as any} initial="initial" animate="animate" />
          </>
        )}
      </svg>
      
      {/* Subtle Glow */}
      <div 
        className="absolute inset-0 blur-xl opacity-20 pointer-events-none" 
        style={{ backgroundColor: color }} 
      />
    </div>
  );
};
