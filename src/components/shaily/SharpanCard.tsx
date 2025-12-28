
import React from 'react';
import { motion } from 'framer-motion';

interface SharpanCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  theme?: 'saffron' | 'emerald' | 'crimson' | 'indigo';
  className?: string;
}

export const SharpanCard: React.FC<SharpanCardProps> = ({ 
  title, 
  subtitle, 
  children, 
  footer, 
  theme = 'saffron',
  className = ''
}) => {
  const themes = {
    saffron: 'border-saffron/30 hover:border-saffron shadow-saffron/5',
    emerald: 'border-emerald/30 hover:border-emerald shadow-emerald/5',
    crimson: 'border-crimson/30 hover:border-crimson shadow-crimson/5',
    indigo: 'border-indigo/30 hover:border-indigo shadow-indigo/5'
  };

  const accentColors = {
    saffron: 'bg-saffron',
    emerald: 'bg-emerald',
    crimson: 'bg-crimson',
    indigo: 'bg-indigo'
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative p-8 border bg-zinc-950/40 transition-all duration-500 group ${themes[theme]} ${className}`}
    >
      {/* Corner Ornaments */}
      <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 50 50" className="w-full h-full">
           <path d="M50 0 L50 20 L40 10 L30 20 L20 10 L0 10 L0 0 Z" fill="currentColor" className={`text-${theme}`} />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-serif font-bold tracking-widest text-white group-hover:text-gold transition-colors">{title}</h3>
          {subtitle && <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mt-1 font-serif">{subtitle}</p>}
          <div className={`w-12 h-[2px] mt-4 ${accentColors[theme]}`} />
        </div>

        <div className="text-zinc-400 font-light leading-relaxed mb-8">
          {children}
        </div>

        {footer && (
          <div className="pt-6 border-t border-zinc-900 mt-auto">
            {footer}
          </div>
        )}
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id={`pattern-${title.replace(/\s/g, '')}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#pattern-${title.replace(/\s/g, '')})`} />
        </svg>
      </div>
    </motion.div>
  );
};

