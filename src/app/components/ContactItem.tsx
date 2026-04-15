import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  index: number;
}

export function ContactItem({ icon: Icon, label, value, href, index }: ContactItemProps) {
  // Alternating directions: even from left, odd from right
  const fromLeft = index % 2 === 0;

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{
        opacity: 0,
        x: fromLeft ? -60 : 60,
        filter: "blur(8px)",
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ x: fromLeft ? 6 : -6, transition: { duration: 0.2 } }}
      className="group flex items-center gap-4 p-5 bg-[#0d1525]/60 backdrop-blur-sm
        border border-[#d4af37]/10 rounded-xl hover:border-[#d4af37]/30
        hover:bg-[#141b2e]/60 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Icon circle */}
      <div
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full
          bg-[#d4af37]/8 group-hover:bg-[#d4af37]/18 transition-all duration-300
          border border-[#d4af37]/10 group-hover:border-[#d4af37]/25"
      >
        <Icon className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div
          className="text-[#5a6178] mb-0.5"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          {label}
        </div>
        <div
          className="text-[#d0d3de] group-hover:text-[#d4af37] transition-colors duration-300 truncate"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.925rem" }}
        >
          {value}
        </div>
      </div>

      {/* Directional sweep on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        style={{
          background: fromLeft
            ? "linear-gradient(to right, rgba(212,175,55,0.04) 0%, transparent 60%)"
            : "linear-gradient(to left, rgba(212,175,55,0.04) 0%, transparent 60%)",
        }}
      />
    </motion.a>
  );
}
