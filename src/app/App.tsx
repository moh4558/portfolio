import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Mail, Phone, Github, Instagram, ArrowDown } from "lucide-react";
import { DynamicBackground } from "./components/DynamicBackground";
import { AudioControl } from "./components/AudioControl";
import { ProjectCard } from "./components/ProjectCard";
import { MarqueeRow } from "./components/MarqueeRow";
import { ContactItem } from "./components/ContactItem";
import profileImage from "../38.jpg";

/* ─── Data ──────────────────────────────────────────────────── */
const projects = [
  {
    title: "Interactive Dashboard",
    description:
      "A modern, data-driven analytics platform with real-time updates and beautiful visualizations. Built with React and advanced charting libraries.",
    image:
      "https://images.unsplash.com/photo-1651505942687-efc26cb528ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGFzaGJvYXJkJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NjI1NDA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    link: "https://github.com",
  },
  {
    title: "Portfolio Showcase",
    description:
      "A minimal and elegant portfolio platform for creatives. Features smooth animations, responsive design, and optimized performance.",
    image:
      "https://images.unsplash.com/photo-1490013616775-3ca8865fb129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY3JlYXRpdmUlMjBwb3J0Zm9saW8lMjBzaG93Y2FzZXxlbnwxfHx8fDE3NzYyNTQwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Motion", "GSAP", "CSS"],
    link: "https://github.com",
  },
  {
    title: "Responsive Web App",
    description:
      "A fully responsive application that adapts seamlessly across all devices. Focused on user experience and accessibility standards.",
    image:
      "https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwZGVzaWduJTIwbW9iaWxlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzYyNTQwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Mobile-First", "PWA", "Accessibility"],
    link: "https://github.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with secure payments, inventory management, and real-time order tracking. Built with modern web technologies.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwcGxhdGZvcm0lMjBkZXNpZ258ZW58MXx8fHwxNzc2MjU0MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcCUyBkZXNpZ258ZW58MXx8fHwxNzc2MjU0MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Firebase", "Material-UI", "Redux"],
    link: "https://github.com",
  },
  {
    title: "Weather Analytics",
    description:
      "An advanced weather forecasting application with detailed analytics, historical data visualization, and location-based predictions.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwbGljYXRpb24lMjBkZXNpZ258ZW58MXx8fHwxNzc2MjU0MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    link: "https://github.com",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive social media management platform with analytics, scheduling, and multi-platform content publishing capabilities.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZCUyMGRlc2lnbnxlbnwxfHx8fDE3NzYyNTQwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Angular", "Express.js", "Socket.io", "MySQL"],
    link: "https://github.com",
  },
  {
    title: "Fitness Tracking App",
    description:
      "A mobile-first fitness application with workout tracking, progress visualization, and personalized training recommendations.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGZpdG5lc3MlMjB0cmFja2luZyUyMGFwcCUyBkZXNpZ258ZW58MXx8fHwxNzc2MjU0MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "GraphQL", "AWS", "TensorFlow"],
    link: "https://github.com",
  },
];

const skillsRow1 = [
  "React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS",
  "HTML5", "CSS3", "SASS", "Motion", "GSAP",
];
const skillsRow2 = [
  "Git", "Webpack", "Vite", "REST APIs", "GraphQL",
  "Responsive Design", "Web Performance", "Accessibility", "UI/UX Design", "Node.js",
];

/* ─── Section Number ─────────────────────────────────────────── */
function SectionNumber({ n }: { n: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="block mb-3"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.7rem",
        fontWeight: 500,
        letterSpacing: "0.18em",
        color: "#d4af37",
        textTransform: "uppercase",
      }}
    >
      {n}
    </motion.span>
  );
}

/* ─── Animated Gold Rule ─────────────────────────────────────── */
function GoldRule() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="h-px bg-gradient-to-r from-[#d4af37]/60 via-[#d4af37]/20 to-transparent mb-12 origin-left"
    />
  );
}

/* ─── App ────────────────────────────────────────────────────── */
export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  /* ── Hero scroll-exit tracking ── */
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring so the parallax feels physical, not linear
  const smoothHero = useSpring(heroProgress, { stiffness: 70, damping: 22 });

  // ── Layered depths (background = slow, foreground = fast) ──

  // Profile image: deepest (background) — moves least
  const profileY    = useTransform(smoothHero, [0, 1], [0, -45]);
  const profileScale= useTransform(smoothHero, [0, 1], [1, 0.68]);
  const profileOp   = useTransform(smoothHero, [0, 0.75], [1, 0]);

  // Name: mid layer
  const nameY       = useTransform(smoothHero, [0, 1], [0, -100]);
  const nameOp      = useTransform(smoothHero, [0, 0.65], [1, 0]);
  const nameScale   = useTransform(smoothHero, [0, 1], [1, 0.9]);

  // Tagline: slightly in front — moves faster
  const taglineY    = useTransform(smoothHero, [0, 1], [0, -160]);
  const taglineOp   = useTransform(smoothHero, [0, 0.55], [1, 0]);

  // CTA: closest / fastest
  const ctaY        = useTransform(smoothHero, [0, 1], [0, -230]);
  const ctaOp       = useTransform(smoothHero, [0, 0.45], [1, 0]);

  // Scroll indicator fades out quickly
  const indicatorOp = useTransform(heroProgress, [0, 0.14], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DynamicBackground />
      <AudioControl />

      <div className="relative z-10">
        {/* ═══════════════════════════════════════════
            HERO — scroll-exit with layered parallax
        ═══════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <img
              src={profileImage}
              alt="Mohamad Doli hero background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/30" />
            <div className="absolute inset-x-0 bottom-0 h-72 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050d]/95 via-[#050911]/55 to-transparent" />
              <svg viewBox="0 0 1440 320" className="absolute inset-0 h-full w-full opacity-90">
                <defs>
                  <linearGradient id="heroWave" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#060b16" stopOpacity="0.92" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#heroWave)"
                  d="M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,170.7C672,192,768,224,864,213.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#02050d]/100 to-transparent" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative">

            {/* Name — mid layer, blur-out on exit */}
            <motion.div
              style={{ y: nameY, scale: nameScale, opacity: nameOp, willChange: "transform, opacity" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 text-[#eaecf0] tracking-tight"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(3rem, 10vw, 7rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                }}
              >
                Mohamad Doli
              </motion.h1>
            </motion.div>

            {/* Tagline — faster layer */}
            <motion.div
              style={{ y: taglineY, opacity: taglineOp, willChange: "transform, opacity" }}
            >
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#d4af37] max-w-2xl mx-auto mb-10"
                style={{
                  fontSize: "clamp(1rem, 2.4vw, 1.35rem)",
                  lineHeight: 1.65,
                }}
              >
                Crafting premium digital experiences with precision,
                creativity, and a passion for detail
              </motion.p>
            </motion.div>

            {/* CTA — closest / fastest exit */}
            <motion.div
              style={{ y: ctaY, opacity: ctaOp }}
            >
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 22, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#d4af37] text-[#080c18] rounded-full
                  hover:bg-[#e8c84a] transition-colors duration-300
                  shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
                style={{ fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.02em" }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity: indicatorOp }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-[#d4af37]/45" />
            </motion.div>
            <span
              className="text-[#d4af37]/30"
              style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              scroll
            </span>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════
            ABOUT — directional reveal from sides
        ═══════════════════════════════════════════ */}
        <section ref={aboutRef} id="about" className="py-36 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionNumber n="01 — About" />

            {/* Heading flies in from the LEFT */}
            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#eaecf0] mb-8"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              About
            </motion.h2>

            <GoldRule />

            {/* Paragraphs alternate direction: right, left, right */}
            {[
              {
                text: "I'm a frontend engineering student passionate about creating beautiful, functional, and accessible web experiences. My work sits at the intersection of design and development, where aesthetics meet performance.",
                dir: 1,
              },
              {
                text: "With a strong foundation in modern web technologies and a keen eye for design, I craft interfaces that feel natural, responsive, and delightful to use. Every project is an opportunity to push boundaries and explore new creative possibilities.",
                dir: -1,
              },
              {
                text: "When I'm not coding, you'll find me exploring design systems, studying motion design, or contributing to open-source projects. I believe in continuous learning and staying ahead of the ever-evolving web landscape.",
                dir: 1,
              },
            ].map(({ text, dir }, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: dir * 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-[#6e7a8a] mb-5 leading-relaxed"
                style={{ fontSize: "1.05rem" }}
              >
                {text}
              </motion.p>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              {[
                { value: "20+", label: "Projects Built" },
                { value: "3+", label: "Years Learning" },
                { value: "∞", label: "Curiosity" },
              ].map(({ value, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                  className="text-center p-6 rounded-2xl bg-[#0d1525]/60 border border-[#d4af37]/8"
                >
                  <div
                    className="text-[#d4af37] mb-1"
                    style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 700 }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-[#5a6178]"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROJECTS — rotated card entrances
        ═══════════════════════════════════════════ */}
        <section className="py-36 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionNumber n="02 — Work" />

            {/* Title wipes from left */}
            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#eaecf0] mb-6"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Selected Work
            </motion.h2>

            <GoldRule />

            {/* Cards — each enters one by one on scroll */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SKILLS — dual-direction marquee
        ═══════════════════════════════════════════ */}
        <section className="py-36 px-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
            <SectionNumber n="03 — Skills" />

            {/* Title from the RIGHT (alternates direction) */}
            <motion.h2
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#eaecf0] mb-6"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Skills &amp; Technologies
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-gradient-to-l from-[#d4af37]/60 via-[#d4af37]/20 to-transparent mb-6 origin-right"
            />
          </div>

          {/* Row 1 — sweeps in from left, scrolls right → left */}
          <div className="mb-4 px-6">
            <MarqueeRow skills={skillsRow1} direction="left" />
          </div>

          {/* Row 2 — sweeps in from right, scrolls left → right */}
          <div className="px-6">
            <MarqueeRow skills={skillsRow2} direction="right" delay={0.5} />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CONTACT — alternating side reveals
        ═══════════════════════════════════════════ */}
        <section id="contact" className="py-36 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <SectionNumber n="04 — Contact" />

            {/* Title from left */}
            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#eaecf0] mb-4"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Let's Work Together
            </motion.h2>

            <GoldRule />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-[#6e7a8a] mb-10 -mt-4"
              style={{ fontSize: "1rem", lineHeight: 1.65 }}
            >
              I'm always open to new opportunities and collaborations.
              Feel free to reach out through any of the channels below.
            </motion.p>

            <div className="space-y-3">
              <ContactItem icon={Mail}      label="Email"     value="geez.car.1234@gmail.com"         href="mailto:geez.car.1234@gmail.com"   index={0} />
              <ContactItem icon={Phone}     label="Phone"     value="+963992253825"                  href="tel:+963992253825"              index={1} />
              <ContactItem icon={Github}    label="GitHub"    value="github.com/moh4558"             href="https://github.com/moh4558"      index={2} />
              <ContactItem icon={Instagram} label="Instagram" value="@MOHAMAD.DOLE"                  href="https://instagram.com/MOHAMAD.DOLE" index={3} />
            </div>
          </div>
        </section>

        {/* ─── Footer ─────────────────────────────── */}
        <footer className="py-10 px-6 md:px-12 border-t border-[#d4af37]/8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-[#3e4558]"
              style={{ fontSize: "0.78rem", letterSpacing: "0.04em" }}
            >
              © 2026 Mohamd Alaa Doli. Designed &amp; built with precision.
            </p>
            <p
              className="text-[#3e4558]"
              style={{ fontSize: "0.78rem", letterSpacing: "0.04em" }}
            >
              Frontend Engineer · Open to Work
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
