import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
  brand?: string;
}

export function Navbar({
  navItems = [],
  brand = "SANSKRITI",
}: NavbarProps) {
  return (
    <nav className="relative w-full bg-[#5b0f1b] text-[#f7e7b3] overflow-hidden">
      {/* Manuscript texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,150,0.08),_transparent_65%)]" />

      {/* Top gold frame */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      {/* Main bar */}
      <div className="relative z-10 flex items-center justify-between px-10 h-[72px]">
        {/* Brand */}
        <div className="text-xl tracking-[0.35em] font-semibold text-[#f3d37a]">
          {brand}
        </div>

        {/* Nav items */}
        <ul className="flex gap-12 text-xs uppercase tracking-widest">
          {navItems.map((item) => (
            <li key={item.href} className="relative cursor-pointer group">
              <a
                href={item.href}
                className="transition-colors duration-300 hover:text-white cursor-pointer"
              >
                {item.label}
              </a>

              {/* Underline */}
              <span className="absolute left-1/2 -bottom-2 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full -translate-x-1/2" />
            </li>
          ))}
        </ul>

        {/* Search */}
        <input
          placeholder="Search…"
          className="bg-[#2a060b] text-xs px-4 py-2 rounded-full
                     border border-[#8c6b2f]/70
                     focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
        />
      </div>

      {/* Floor platform */}
      <div className="relative h-10 mt-2">
        <div className="absolute inset-x-0 top-0 h-px bg-[#d4af37]/60" />

        {/* Diyas */}
        <div className="absolute inset-x-0 top-2 flex justify-center gap-16">
          {navItems.map((_, i) => (
            <Diya key={i} delay={i * 0.3} />
          ))}
        </div>
      </div>

      {/* Bottom glow */}
      <div className="h-6 bg-gradient-to-b from-[#3a0a12] to-transparent" />
    </nav>
  );
}

/* ---------------- */
/* Diya Component  */
/* ---------------- */

const flameVariants = {
  rest: {
    opacity: [0.6, 1, 0.7],
    y: 0,
    scaleY: 1,
  },
  hover: {
    opacity: [0.7, 1, 0.85],
    y: -10,
    scaleY: 1.25,
  },
};

function Diya({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* Flame */}
      <motion.div
        className="absolute left-1/2 -top-3 w-2 h-3 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full blur-[1px]"
        variants={flameVariants}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "easeInOut",
          delay,
        }}
        style={{ transform: "translateX(-50%)" }}
      />

      {/* Bowl */}
      <div className="w-6 h-2 bg-[#d4af37] rounded-b-full shadow-md" />

      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-[#d4af37]/30 blur-md" />
    </motion.div>
  );
}
