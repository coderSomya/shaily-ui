import React from 'react';
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import { Flower2, Sun, Heart, Sparkles, MapPin } from 'lucide-react';
import { cn } from "@/lib/utils";

type Region = 'kashmir' | 'punjab' | 'bengal' | 'south';

interface IndicAvatarProps {
  src?: string;
  image?: string; // Alias for src
  fallback: string;
  name: string;
  caption?: string;
  variant?: 'royal' | 'saffron' | 'corporate' | 'classic';
  region?: Region;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const defaultImages: Record<Region, string> = {
  kashmir: '/avatars/kashmir.jpeg',
  punjab: '/avatars/punjab.jpeg',
  bengal: '/avatars/bengal.jpeg',
  south: '/avatars/south.jpeg'
};

export const IndicAvatar: React.FC<IndicAvatarProps> = ({ 
  src,
  image,
  fallback, 
  name,
  caption,
  variant = 'corporate', 
  region = 'punjab',
  size = 'md',
  className 
}) => {
  
  const avatarSrc = image || src || defaultImages[region];

  const sizeMap = {
    sm: "h-20 w-20",
    md: "h-32 w-32",
    lg: "h-44 w-44"
  };

  const regionStyles: Record<Region, { shape: string, decor: string, icon: any, accent: string, border: string }> = {
    kashmir: { 
      shape: "rounded-[40%_60%_70%_30%/40%_40%_60%_60%]",
      decor: "ring-emerald-500/20 bg-emerald-50/50",
      icon: <Flower2 className="w-5 h-5 text-emerald-600" />,
      accent: "bg-emerald-600",
      border: "border-emerald-500/40"
    },
    punjab: { 
      shape: "rounded-[2rem] rotate-2",
      decor: "ring-orange-500/20 bg-orange-50/50",
      icon: <Sun className="w-5 h-5 text-orange-600" />,
      accent: "bg-orange-600",
      border: "border-orange-500/40"
    },
    bengal: { 
      shape: "rounded-full",
      decor: "ring-red-500/20 bg-red-50/50",
      icon: <Heart className="w-5 h-5 text-red-600" />,
      accent: "bg-red-600",
      border: "border-red-500/40"
    },
    south: { 
      shape: "rounded-[1.5rem] rotate-[15deg]",
      decor: "ring-amber-500/20 bg-amber-50/50",
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
      accent: "bg-amber-600",
      border: "border-amber-500/40"
    }
  };

  const variantStyles = {
    royal: "from-slate-900 via-blue-900 to-slate-900 text-amber-200 border-amber-400/50 ring-8 ring-amber-500/5",
    saffron: "from-orange-500 via-amber-500 to-orange-600 text-white border-white/40 ring-8 ring-orange-500/5",
    corporate: "from-blue-700 via-blue-800 to-indigo-900 text-white border-white/20 ring-8 ring-blue-500/5",
    classic: "from-stone-800 via-stone-900 to-black text-amber-400 border-amber-500/30 ring-8 ring-amber-500/5"
  };

  const config = regionStyles[region];

  return (
    <div className={cn("flex flex-col items-center group", className)}>
      <div className={cn("relative mb-12", sizeMap[size])}>
        
        {/* Premium Indic Border System */}
        <div className={cn(
          "absolute inset-[-15px] border-[3px] border-dashed transition-all duration-1000 group-hover:rotate-180 opacity-40",
          config.shape,
          config.border
        )} />
        <div className={cn(
          "absolute inset-[-8px] border-2 border-zinc-200 dark:border-zinc-800 transition-all duration-700 group-hover:-rotate-45",
          config.shape
        )} />

        {/* Floating Aura */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: region === 'south' ? 15 : [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "absolute inset-0 -z-10 opacity-60 blur-2xl",
            config.shape,
            config.decor
          )}
        />

        {/* Main Avatar Body */}
        <AvatarPrimitive.Root
          className={cn(
            "relative h-full w-full overflow-hidden border-4 shadow-2xl bg-gradient-to-br transition-all duration-500 group-hover:shadow-blue-500/40",
            config.shape,
            variantStyles[variant],
          )}
        >
          <AvatarPrimitive.Image
            src={avatarSrc}
            className={cn(
              "aspect-square h-full w-full object-cover transition-all duration-700 group-hover:scale-110",
            )}
          />
          <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center font-bold tracking-tighter text-3xl md:text-4xl">
            {fallback}
          </AvatarPrimitive.Fallback>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </AvatarPrimitive.Root>

        {/* Decorative Regional Badge */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          className={cn(
            "absolute -bottom-4 -right-2 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center z-30",
            "bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800",
            region === 'south' ? "rotate-[15deg]" : ""
          )}
        >
          {config.icon}
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="text-center space-y-2">
        <h4 
          className="text-md md:text-md font-bold text-black tracking-tight leading-none"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {name}
        </h4>
        
        {caption && (
          <div className="flex items-center justify-center gap-2 py-1 group/caption">
            <MapPin className="w-4 h-4 text-zinc-400 group-hover/caption:text-blue-600 transition-colors" />
            <p 
              className="text-xs font-bold text-black tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {caption}
            </p>
          </div>
        )}
        
        <div className="flex justify-center pt-2">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            className={cn("h-1.5 rounded-full shadow-md", config.accent)}
          />
        </div>
      </div>
    </div>
  );
};
