import { motion, useScroll, useTransform, useSpring } from "motion/react";

export function DynamicBackground() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 40, damping: 24 });

  const ySlow = useTransform(smooth, [0, 1], ["0%", "-14%"]);
  const yMid = useTransform(smooth, [0, 1], ["0%", "-24%"]);
  const yFast = useTransform(smooth, [0, 1], ["0%", "-34%"]);
  const gridScale = useTransform(smooth, [0, 1], [1, 1.04]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[#050810]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1220] via-[#050810] to-[#060b16]" />

      <motion.div
        style={{
          y: ySlow,
          willChange: "transform, opacity",
          position: "absolute",
          top: "-22%",
          left: "-18%",
          width: "90vh",
          height: "90vh",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,40,71,0.34) 0%, rgba(10,22,48,0.22) 40%, transparent 70%)",
          filter: "blur(42px)",
        }}
      />

      <motion.div
        style={{
          y: yMid,
          willChange: "transform, opacity",
          position: "absolute",
          top: "-12%",
          right: "-10%",
          width: "80vh",
          height: "80vh",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, rgba(212,175,55,0.02) 45%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      <motion.div
        style={{
          y: yMid,
          willChange: "transform, opacity",
          position: "absolute",
          top: "25%",
          left: "-8%",
          width: "70vh",
          height: "70vh",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15,30,65,0.28) 0%, rgba(8,16,40,0.10) 50%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      <motion.div
        style={{
          y: yFast,
          willChange: "transform, opacity",
          position: "absolute",
          bottom: "8%",
          left: "20%",
          width: "100vh",
          height: "100vh",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, rgba(180,140,30,0.012) 50%, transparent 70%)",
          filter: "blur(54px)",
        }}
      />

      <motion.div
        style={{
          scale: gridScale,
          willChange: "transform, opacity",
          position: "absolute",
          inset: 0,
          transformOrigin: "center",
          backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          opacity: 0.28,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.75' stitchTiles='stitch' type='fractalNoise'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.03'/%3E%3C/svg%3E")`,
          opacity: 0.45,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 55%, rgba(3,5,12,0.62) 100%)",
        }}
      />
    </div>
  );
}
