import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface JhoomarLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const JhoomarLoader: React.FC<JhoomarLoaderProps> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-16 h-20",
    md: "w-24 h-32",
    lg: "w-32 h-40",
  };

  const beadSizes = {
    sm: { main: 3, secondary: 2 },
    md: { main: 4, secondary: 3 },
    lg: { main: 5, secondary: 4 },
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* Chain from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-primary/50" />
      
      {/* Main chandelier body */}
      <motion.div
        className="absolute top-4 left-1/2 -translate-x-1/2"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Top ornament */}
        <div className="w-4 h-4 mx-auto border-2 border-primary rotate-45 mb-2" />
        
        {/* Main ring */}
        <div className="relative w-16 h-2 border-2 border-primary mx-auto">
          {/* Hanging beads */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute top-full"
              style={{ left: `${i * 25}%` }}
              animate={{ y: [0, 2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            >
              <div className="w-px h-6 bg-primary/50" />
              <div
                className="bg-primary animate-rangoli-pulse"
                style={{
                  width: beadSizes[size].main,
                  height: beadSizes[size].main,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
              <div className="w-px h-4 bg-primary/30" />
              <div
                className="bg-saffron animate-rangoli-pulse"
                style={{
                  width: beadSizes[size].secondary,
                  height: beadSizes[size].secondary,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
