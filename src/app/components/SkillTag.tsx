import { motion } from "motion/react";

interface SkillTagProps {
  name: string;
  index: number;
}

export function SkillTag({ name, index }: SkillTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
      }}
      whileHover={{ scale: 1.06, y: -3, transition: { duration: 0.2 } }}
      className="px-5 py-2.5 bg-[#0d1525]/70 backdrop-blur-sm border border-[#d4af37]/10
        rounded-xl text-[#c0c4d0] hover:border-[#d4af37]/32 hover:text-[#d4af37]
        transition-colors duration-300 cursor-default group relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", letterSpacing: "0.02em" }}
    >
      <span className="relative z-10">{name}</span>
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
