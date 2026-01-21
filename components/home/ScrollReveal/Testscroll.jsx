"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export default function TestScroll({ videoSrc, timedTexts = [] }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const scrollDuration = 2000;

  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Ensure video metadata is loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Use useCallback to memoize the update function
  const updateVideoTime = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || !videoDuration) return;

    const scrollY = window.scrollY;
    const containerTop = container.offsetTop;
    const relativeScroll = scrollY - containerTop;

    const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
    const progress = clampedScroll / scrollDuration;
    const time = progress * videoDuration;

    // Use a small threshold to avoid constant updates and potential jitter
    // but without the large 0.05 value. A direct assignment is often best
    // but this is a good balance.
    if (Math.abs(video.currentTime - time) > 0.01) {
      video.currentTime = time;
      setCurrentTime(time);
    }
  }, [videoDuration]);

  // Sync scroll to video using a passive scroll event and requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame to ensure the video update happens on the next repaint,
      // which is ideal for animations and visual updates.
      window.requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateVideoTime]);

  const activeText = timedTexts.find(
    (t) => currentTime >= t.start && currentTime <= t.end
  );

  return (
    <div
      ref={containerRef}
      style={{ height: `${scrollDuration + window.innerHeight}px` }}
    >
      <div className="relative sticky top-0 z-10 w-full h-screen px-8">
        {/* Background Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 object-cover w-full h-full"
          muted
          playsInline
          preload="auto"
        />

        {/* Left Text (positioned on top) */}
        <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-white">
          <div className="max-w-sm transition-opacity duration-500 ease-in-out">
            {activeText && (
              <div>
                <h2 className="text-2xl sm:text-8xl bw-b">
                  {activeText.title}
                </h2>
                <p className="mt-2 text-base sm:text-lg">
                  {activeText.subtitle}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function TestScroll({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const scrollDuration = 2000;

//   const [videoDuration, setVideoDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);

//   // Ensure video metadata is loaded
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       setVideoDuration(video.duration);
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () => {
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//     };
//   }, []);

//   // Use useCallback to memoize the update function
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) return;

//     const scrollY = window.scrollY;
//     const containerTop = container.offsetTop;
//     const relativeScroll = scrollY - containerTop;

//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const time = progress * videoDuration;

//     // Use a small threshold to avoid constant updates and potential jitter
//     if (Math.abs(video.currentTime - time) > 0.01) {
//       video.currentTime = time;
//       setCurrentTime(time);
//     }
//   }, [videoDuration]);

//   // Sync scroll to video using a passive scroll event and requestAnimationFrame
//   useEffect(() => {
//     const handleScroll = () => {
//       // Use requestAnimationFrame to ensure the video update happens on the next repaint
//       window.requestAnimationFrame(updateVideoTime);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [updateVideoTime]);

//   const activeText = timedTexts.find(
//     (t) => currentTime >= t.start && currentTime <= t.end
//   );

//   // Framer Motion variants for the text animation
//   const textVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
//   };

//   return (
//     <div
//       ref={containerRef}
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="sticky top-0 z-10 w-full h-screen ">
//         {/* Background Video */}
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 object-cover w-full h-full"
//           muted
//           playsInline
//           preload="auto"
//         />

//         {/* Animated Text Container */}
//         <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-white">
//           <AnimatePresence mode="wait">
//             {activeText && (
//               <motion.div
//                 key={activeText.title} // Unique key for AnimatePresence to detect change
//                 className="max-w-sm"
//                 variants={textVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//               >
//                 <h2 className="text-2xl sm:text-8xl bw-b">
//                   {activeText.title}
//                 </h2>
//                 <p className="mt-2 text-base sm:text-lg">
//                   {activeText.subtitle}
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [scrollDuration, setScrollDuration] = useState(2000);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const lastKnownVideoTime = useRef(0);

//   // load video duration
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       const duration = video.duration;
//       setVideoDuration(duration);
//       setScrollDuration(Math.round(duration * 300));
//       video.currentTime = 0;
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // scroll → video time mapping
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     lastScrollY.current = scrollY;
//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // smooth + snap
//     const dampenedTime =
//       lastKnownVideoTime.current +
//       (targetTime - lastKnownVideoTime.current) * 0.1;
//     const frameTimeStep = 1 / 30;
//     const snappedTime =
//       Math.round(dampenedTime / frameTimeStep) * frameTimeStep;

//     if (Math.abs(video.currentTime - snappedTime) > 0.03) {
//       video.currentTime = snappedTime;
//     }
//     lastKnownVideoTime.current = snappedTime;

//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration, scrollDuration]);

//   useEffect(() => {
//     if (!videoDuration) return;
//     rafRef.current = requestAnimationFrame(updateVideoTime);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [updateVideoTime, videoDuration]);

//   // scroll progress for texts
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section
//       ref={containerRef}
//       className="text-white w-full bg-slate-950"
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="grid grid-cols-2">
//         {/* LEFT sticky number/text */}
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           <div className="relative w-full h-full flex items-center justify-center">
//             {timedTexts.map((text, i) => {
//               const startRange = (text.start / videoDuration) * 1.25;
//               const endRange = (text.end / videoDuration) * 1.25;
//               const opacity = useTransform(
//                 scrollProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [0, 1, 1, 0]
//               );
//               const y = useTransform(
//                 scrollProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [100, 0, 0, -50]
//               );

//               return (
//                 <motion.div
//                   key={i}
//                   style={{ opacity, y }}
//                   className="absolute text-center"
//                 >
//                   <h2 className="text-7xl font-bold mb-4">{text.title}</h2>
//                   <p className="text-2xl">{text.subtitle}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT sticky video */}
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           <video
//             ref={videoRef}
//             src={videoSrc}
//             className="w-[86%] h-full object-contain"
//             muted
//             playsInline
//             preload="auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
