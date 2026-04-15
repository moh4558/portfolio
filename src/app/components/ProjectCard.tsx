import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  index: number;
}

// Each card enters from a different angle based on its position
const cardVariants = [
  // Left card — rotates clockwise into place from bottom-left
  {
    hidden: { opacity: 0, y: 90, x: -40, rotate: -9, scale: 0.82 },
    visible: { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 },
  },
  // Center card — rises straight up with scale
  {
    hidden: { opacity: 0, y: 110, x: 0, rotate: 0, scale: 0.78 },
    visible: { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 },
  },
  // Right card — rotates counter-clockwise into place from bottom-right
  {
    hidden: { opacity: 0, y: 90, x: 40, rotate: 9, scale: 0.82 },
    visible: { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 },
  },
];

export function ProjectCard({ title, description, image, tags, link, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Parallax effect on the card image as you scroll through it
  const imageY = useTransform(smooth, [0, 1], ["0%", "-12%"]);

  const variant = cardVariants[index % 3];

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.16, // Stagger the animations
      }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-2xl bg-[#0d1525]/90
        border border-[#d4af37]/10 hover:border-[#d4af37]/28 transition-colors duration-500
        shadow-[0_8px_24px_rgba(0,0,0,0.24)]"
      style={{ transformOrigin: "bottom center", willChange: "transform, opacity" }}
    >
      {/* Image with inner parallax */}
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-[115%] object-cover -top-[7.5%] absolute left-0"
          style={{ y: imageY }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-[#0d1525]/55 to-transparent opacity-65 group-hover:opacity-45 transition-opacity duration-500" />

        {/* Hover gold shimmer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.08) 0%, transparent 65%)",
          }}
        />

        {/* Link button — appears on hover */}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
              rounded-full bg-[#d4af37]/15 backdrop-blur-sm border border-[#d4af37]/25
              hover:bg-[#d4af37]/25 transition-all duration-300
              opacity-0 group-hover:opacity-100"
            style={{ transition: "opacity 0.3s ease" }}
          >
            <ExternalLink className="w-4 h-4 text-[#d4af37]" />
          </motion.a>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3
          className="text-[#e8e9ed] group-hover:text-[#d4af37] transition-colors duration-300"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "1.15rem",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        <p
          className="text-[#8a909e] leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-[#d4af37] bg-[#d4af37]/5 border border-[#d4af37]/18 rounded-full"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.03em" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom-right glow on hover */}
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#d4af37]/6 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
