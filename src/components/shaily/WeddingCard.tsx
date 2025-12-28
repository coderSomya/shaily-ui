import { motion } from 'framer-motion';
import { Flower2, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export const WeddingCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-4"
    >
      <Card className="relative max-w-md mx-auto overflow-hidden border-none shadow-2xl bg-gradient-to-br from-red-800 to-rose-950 text-amber-100">
        
        {/* Decorative Corner Mandalas */}
        <div className="absolute -top-10 -left-10 w-32 h-32 opacity-20 border-[8px] border-amber-400 rounded-full animate-spin-slow" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20 border-[8px] border-amber-400 rounded-full" />

        <CardContent className="p-8 border-[3px] border-double border-amber-300/50 m-2 rounded-lg relative z-10">
          
          {/* Header Icon */}
          <div className="flex justify-center mb-6">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-full bg-amber-400/10 border border-amber-400/40"
            >
              <Flower2 className="w-8 h-8 text-amber-400" />
            </motion.div>
          </div>

          {/* Invitation Text */}
          <div className="text-center space-y-4 font-serif">
            <p className="text-sm tracking-[0.2em] uppercase text-amber-200/80">Save the Date</p>
            
            <h2 className="text-4xl font-bold italic text-amber-400 drop-shadow-sm">
              Arjun & Ananya
            </h2>
            
            <div className="w-24 h-px bg-amber-400/40 mx-auto my-4" />
            
            <p className="text-lg leading-relaxed">
              We request the honor of your presence at the grand celebration of our wedding.
            </p>

            {/* Event Details */}
            <div className="flex flex-col gap-3 pt-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>December 28th, 2025</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>The Royal Palace, Udaipur</span>
              </div>
            </div>

            {/* Interactive Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-2 bg-amber-500 text-red-950 font-bold rounded-full shadow-lg shadow-amber-900/20 hover:bg-amber-400 transition-colors"
            >
              RSVP Now
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};