import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface MarqueeRowProps {
  skills: string[];
  direction: "left" | "right";
  delay?: number;
}

export function MarqueeRow({ skills, direction, delay = 0 }: MarqueeRowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Row sweeps in from the matching side as it enters the viewport
  const entryX = useTransform(
    scrollYProgress,
    [0.05, 0.28],
    [direction === "left" ? -70 : 70, 0]
  );
  const entryOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  // Duplicate items so the CSS marquee loop is seamless
  const doubled = [...skills, ...skills];

  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <motion.div
      ref={ref}
      style={{ x: entryX, opacity: entryOpacity }}
      className="overflow-hidden py-2"
    >
      <div
        className={`flex gap-4 w-max ${animClass}`}
        style={{ animationDelay: `${delay}s` }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-5 py-2.5 bg-[#0d1525]/65 backdrop-blur-sm
              border border-[#d4af37]/10 rounded-xl text-[#b8bcc8]
              hover:border-[#d4af37]/32 hover:text-[#d4af37]
              transition-all duration-300 cursor-default select-none relative overflow-hidden group"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              letterSpacing: "0.02em",
            }}
          >
            <span className="relative z-10">{skill}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/6 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
