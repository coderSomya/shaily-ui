import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
  brand?: string;
}

export const Navbar = function ({
  navItems = [],
  brand = "SANSKRITI",
}: NavbarProps) {
  return (
    <nav className="relative w-full overflow-hidden bg-[#5b0f1b] text-[#f7e7b3]">
      {/* TEXTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,150,0.08),_transparent_55%)]" />

      {/* TOP ORNAMENT BORDER */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      {/* JHOOMAR */}
      <Jhoomar />

      {/* MAIN BAR */}
      <div className="relative z-10 flex items-center justify-between px-12 py-10">
        {/* BRAND */}
        <div className="text-3xl tracking-[0.3em] font-semibold text-[#f3d37a]">
          {brand}
        </div>

        {/* NAV ITEMS */}
        <ul className="flex gap-12 text-sm uppercase tracking-widest">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                className="hover:text-white transition-all duration-300
                  after:absolute after:left-0 after:-bottom-2 after:h-[1px]
                  after:w-0 after:bg-[#d4af37]
                  hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* SEARCH */}
        <div className="relative">
          <input
            placeholder="Search…"
            className="bg-[#2a060b] text-sm px-5 py-2 rounded-full
                       border border-[#8c6b2f]
                       focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          />
        </div>
      </div>

      {/* BOTTOM DECORATIVE BORDER */}
      <DecorativeBorder />

      {/* BOTTOM GRADIENT */}
      <div className="h-4 bg-gradient-to-b from-[#3a0a12] to-transparent" />
    </nav>
  );
}

function Jhoomar() {
    return (
      <motion.div
        className="absolute left-1/2 top-0 z-20 -translate-x-1/2 pointer-events-none"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Center Jewel */}
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-900 rounded-full border-4 border-[#d4af37] shadow-xl"
          />
  
          {/* Chains */}
          <div className="mt-3 flex gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + i * 0.3,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center"
              >
                <div className="w-[2px] h-16 bg-gradient-to-b from-[#d4af37] to-transparent" />
                <div className="w-3 h-3 rounded-full bg-[#d4af37] shadow-md" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
  
  function DecorativeBorder() {
    return (
      <div className="relative h-6 overflow-hidden">
        <div className="absolute inset-0 flex justify-center gap-6">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-[#d4af37] opacity-80"
            />
          ))}
        </div>
      </div>
    );
  }
  