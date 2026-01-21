"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollRevealVideoSection({
  videoSrc,
  title,
  subtitle,
}) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Grayscale transition from 1 → 0
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["grayscale(1)", "grayscale(0)"]
  );

  // Radial reveal mask scale (circular)
  const maskScale = useTransform(scrollYProgress, [0.2, 0.5], [0, 4]);

  // Control video playback speed with scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (videoRef.current) {
        const duration = videoRef.current.duration || 1;
        videoRef.current.currentTime = duration * latest;
      }
    });
  }, [smoothProgress]);

  const { ref: textRef, inView } = useInView({ threshold: 0.6 });

  return (
    <section ref={sectionRef} className="relative h-[200vh] w-full">
      {/* Sticky Video Background */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Motion wrapper to control filter */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ filter }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="object-cover w-full h-full"
            playsInline
            muted
            preload="auto"
          />
        </motion.div>

        {/* Circular white reveal */}
        <motion.div
          style={{ scale: maskScale }}
          className="absolute z-10 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full pointer-events-none top-1/2 left-1/2 mix-blend-lighten"
        />

        {/* Foreground content */}
        <div className="relative z-20 flex items-center justify-center h-full px-10">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl text-center text-white"
          >
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="mt-4 text-xl">{subtitle}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
