"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
// import Portfolio from "../Portfolio/Portfolio";
export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollDuration, setScrollDuration] = useState(2000);
  const [videoDuration, setVideoDuration] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0); // :white_check_mark: safe height
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastKnownVideoTime = useRef(0);
  // :white_check_mark: Track window.innerHeight safely
  useEffect(() => {
    function updateHeight() {
      if (typeof window !== "undefined") {
        setInnerHeight(window.innerHeight);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  // Reset refs on mount
  useEffect(() => {
    lastScrollY.current = 0;
    lastKnownVideoTime.current = 0;
  }, []);
  // Load video metadata and set scroll duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleLoadedMetadata = () => {
      const duration = video.duration;
      setVideoDuration(duration);
      setScrollDuration(Math.round(duration * 400) + timedTexts.length * 500);
      video.currentTime = 0;
    };
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () =>
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [timedTexts.length]);
  // Reset video time when duration updates
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [videoDuration]);
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
    const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
    const progress = clampedScroll / scrollDuration;
    const targetTime = progress * videoDuration;
    const dampenedTime =
      lastKnownVideoTime.current +
      (targetTime - lastKnownVideoTime.current) * 0.1;
    const desiredFps = 30;
    const frameTimeStep = 1 / desiredFps;
    const snappedTime =
      Math.round(dampenedTime / frameTimeStep) * frameTimeStep;
    if (Math.abs(video.currentTime - snappedTime) > 0.03) {
      video.currentTime = snappedTime;
    }
    lastKnownVideoTime.current = snappedTime;
    rafRef.current = requestAnimationFrame(updateVideoTime);
  }, [videoDuration, scrollDuration]);
  // Set up scroll listener with continuous animation frame
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
  // Use Framer Motion's useScroll for text animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div
      ref={containerRef}
      className="hidden sm:flex sm:flex-col relative  h-auto"
      data-lenis-prevent
      style={{
        height: innerHeight ? `${scrollDuration + innerHeight}px` : "auto", // :white_check_mark: safe fallback for SSR
      }}
    >
      {/* Sticky Heading at Top */}
      {/* <div className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm">
        <Portfolio />
      </div> */}
      <div className="sticky top-0 z-10 flex w-full h-screen 1280:h-screen mr-0 overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 -right-12 left-auto object-contain w-full z-10 1280:w-[90%] h-full"
          muted
          playsInline
          preload="auto"
          onPlay={(e) => e.target.pause()}
        />
        {/* Top gradient */}
        <div className="absolute 1024:top-8 768:top-[122px] 1280:top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
        {/* Bottom gradient */}
        <div className="absolute 1024:bottom-12 768:bottom-[122px] 1280:bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
        {/* Text overlay */}
        <div className="absolute top-0 z-20 flex items-center h-full px-4 sm:px-0 text-black left-[max(5%,calc((100vw-1340px)/2))]">
          <div className="max-w-sm whitespace-nowrap overflow-hidden">
            {timedTexts.map((text, index) => {
              const startRange = text.start / videoDuration;
              const endRange = text.end / videoDuration;
              const holdOffset = (endRange - startRange) * 0.25;
              const opacity = useTransform(
                scrollProgress,
                [startRange, startRange + 0.02, endRange - 0.02, endRange],
                [0, 1, 1, 0],
              );
              const y = useTransform(
                scrollProgress,
                [
                  startRange,
                  startRange + holdOffset,
                  endRange - holdOffset,
                  endRange,
                ],
                [250, 0, 0, -400],
              );
              return (
                // <motion.div
                //   key={index}
                //   style={{ opacity, y, zIndex: timedTexts.length - index }}
                //   className="absolute left-1/2 top-[60%] sm:top-1/2 -translate-y-1/2"
                // >
                //   <h2 className="text-[35px] leading-[1] 768:text-[60px] 1024:text-[60px] 1280:text-[120px] 1024:leading-[65px] 1280:leading-[100px] 1366:text-[130px] font-bold whitespace-nowrap bw-sb m-0">
                //     {text.title}
                //   </h2>
                //   <p className="text-[35px] leading-[1] capitalize 768:text-[50px] 1024:text-[55px] 1024:leading-[65px] 1280:text-[70px] 1366:text-[80px] bw-r m-0 1280:leading-[85px] 1366:leading-[90px]">
                //     {text.subtitle}
                //   </p>
                //   <motion.div className="lg:flex h-[22px] 768:h-[30px] justify-start xl:h-[40px] mt-2 1280:mt-4 1366:h-[45px] overflow-hidden">
                //     <img
                //       src="/frm.svg"
                //       alt="Truck"
                //       className="object-cover h-full"
                //     />
                //   </motion.div>
                // </motion.div>
                <motion.div
                  key={index}
                  style={{ opacity, y, zIndex: timedTexts.length - index }}
                  className="absolute left-1/2 top-[60%] sm:top-1/2 -translate-y-1/2 flex  flex-col gap-4 sm:gap-3 1920:gap-0"
                >
                  {/* Text content (Heading + Paragraph) */}
                  <div className="flex  items-center gap-4 sm:gap-4">
                    <h2 className="text-[35px] leading-[1] 768:text-[80px] 768:leading-[90px] 1024:text-[100px] 1280:text-[120px] 1024:leading-[110px] 1280:leading-[100px] 1366:text-[130px] 1920:text-[100px] 1920:leading-[120px] font-bold whitespace-nowrap bw-sb m-0">
                      {text.title}
                    </h2>
                    homw
                  </div>

                  {/* Image */}
                  <motion.div className="flex  items-center gap-4 1600:gap-4 justify-start h-auto ">
                    <p className="text-[35px] leading-[1] capitalize 768:text-[50px] 1024:text-[80px] 1024:leading-[90px] 1280:text-[70px] 1366:text-[80px] bw-r m-0 1280:leading-[85px] 1366:leading-[90px] 1920:text-[85px] 1920:leading-[96px]">
                      {text.subtitle}
                    </p>
                    <img
                      src="/abstract_pattern.webp"
                      alt="Truck"
                      className="abstract_svg"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
