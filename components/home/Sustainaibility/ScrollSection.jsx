"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Sustainaibility from "./Sustainaibility";
export default function ScrollSection({ videoSrc }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollDuration, setScrollDuration] = useState(2000);
  const [videoDuration, setVideoDuration] = useState(0);
  const [innerHeight, setInnerHeight] = useState(null); // :white_check_mark: safe innerHeight
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastKnownVideoTime = useRef(0);
  // :white_check_mark: Capture window.innerHeight safely
  useEffect(() => {
    function updateHeight() {
      setInnerHeight(window.innerHeight);
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  // Load video metadata
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleLoadedMetadata = () => {
      const duration = video.duration;
      setVideoDuration(duration);
      setScrollDuration(Math.round(duration * 400) + 1000); // buffer
      video.currentTime = 0;
    };
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () =>
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);
  // Smooth scroll → video mapping
  const updateVideoTime = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || !videoDuration) {
      rafRef.current = requestAnimationFrame(updateVideoTime);
      return;
    }
    const scrollY = window.scrollY;
    if (Math.abs(scrollY - lastScrollY.current) < 1) {
      rafRef.current = requestAnimationFrame(updateVideoTime);
      return;
    }
    lastScrollY.current = scrollY;
    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const relativeScroll = scrollY - containerTop;
    const clampedScroll = Math.max(
      0,
      Math.min(scrollDuration - 1000, relativeScroll)
    );
    const progress = clampedScroll / (scrollDuration - 1000);
    const targetTime = progress * videoDuration;
    const dampenedTime =
      lastKnownVideoTime.current +
      (targetTime - lastKnownVideoTime.current) * 0.1;
    if (Math.abs(video.currentTime - dampenedTime) > 0.03) {
      video.currentTime = dampenedTime;
    }
    lastKnownVideoTime.current = dampenedTime;
    rafRef.current = requestAnimationFrame(updateVideoTime);
  }, [videoDuration, scrollDuration]);
  useEffect(() => {
    if (!videoDuration) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateVideoTime);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastScrollY.current = 0;
      lastKnownVideoTime.current = 0;
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
      }
    };
  }, [updateVideoTime, videoDuration]);
  // Framer Motion scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(
    scrollYProgress,
    [0.6, 0.75, 0.9, 1],
    [200, 0, 0, -200]
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.75, 0.9, 1],
    [0, 1, 1, 0]
  );
  return (
    <div
      ref={containerRef}
      className="relative w-full"
      // :white_check_mark: Safe: fallback to scrollDuration until innerHeight is available
      style={{
        height: innerHeight
          ? `${scrollDuration + innerHeight}px`
          : `${scrollDuration}px`,
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        {/* Animated card */}
        <motion.div
          style={{
            y: cardY,
            scale: useTransform(scrollYProgress, [0.6, 0.75], [0.8, 1]),
            opacity: cardOpacity,
            filter: useTransform(
              scrollYProgress,
              [0.6, 0.75],
              ["blur(20px)", "blur(0px)"]
            ),
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute bottom-6 right-[max(5%,calc((100vw-1340px)/2))] left-[max(5%,calc((100vw-1340px)/2))]"
        >
          <Sustainaibility />
        </motion.div>
      </div>
    </div>
  );
}