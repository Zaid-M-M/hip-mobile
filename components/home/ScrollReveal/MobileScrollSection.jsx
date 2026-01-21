// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
// } from "framer-motion";

// const MobileScrollSection = ({ videoSrc, timedTexts = [] }) => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   const [videoDuration, setVideoDuration] = useState(1);
//   const [scrollDuration, setScrollDuration] = useState(1000);
//   const [viewportHeight, setViewportHeight] = useState(0);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Capture viewport height safely
//   useEffect(() => {
//     setViewportHeight(window.innerHeight);
//     const handleResize = () => setViewportHeight(window.innerHeight);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Update video duration when metadata loads
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoaded = () => {
//       if (video.duration && !isNaN(video.duration)) {
//         setVideoDuration(video.duration);
//         setScrollDuration(video.duration * window.innerHeight * 1.2);
//       }
//     };

//     video.addEventListener("loadedmetadata", handleLoaded);
//     return () => video.removeEventListener("loadedmetadata", handleLoaded);
//   }, []);

//   // Sync video currentTime with scroll
//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const video = videoRef.current;
//     if (video && videoDuration > 0) {
//       video.currentTime = latest * videoDuration;
//     }
//   });

//   return (
//     // <div
//     //   ref={containerRef}
//     //   className="flex  sm:hidden flex-col items-center justify-start relative w-full h-auto"
//     //   style={{
//     //     height: `${scrollDuration + viewportHeight}px`,
//     //   }}
//     // >
//     //   {/* <div className="absolute 1024:top-8 768:top-[122px] 1280:top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />

//     //   <div className="absolute 1024:bottom-12 768:bottom-[122px] 1280:bottom-0 left-0 w-full h-32 bg-gradient-to-t  from-white to-transparent pointer-events-none z-20" /> */}

//     //   {/* Sticky video */}
//     //   <div className="sticky top-0 w-full h-screen overflow-hidden">
//     //     <video
//     //       ref={videoRef}
//     //       src={videoSrc}
//     //       className="absolute inset-0 w-full h-full object-cover"
//     //       muted
//     //       playsInline
//     //       preload="auto"
//     //     />

//     //     {/* Text overlay */}
//     //     <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
//     //       <div className="relative w-full">
//     //         {timedTexts.map((text, index) => {
//     //           const startRange = text.start / videoDuration;
//     //           const endRange = text.end / videoDuration;

//     //           const opacity = useTransform(
//     //             scrollYProgress,
//     //             [startRange, startRange + 0.05, endRange - 0.05, endRange],
//     //             [0, 1, 1, 0]
//     //           );

//     //           const y = useTransform(
//     //             scrollYProgress,
//     //             [startRange, (startRange + endRange) / 2, endRange],
//     //             [60, 0, -60]
//     //           );

//     //           return (
//     //             <motion.div
//     //               key={index}
//     //               style={{ opacity, y }}
//     //               className="absolute left-0 right-0 bottom-20  flex flex-col items-center"
//     //             >
//     //               <div className="w-fit bg-white/70 px-3 py-4">
//     //                 <h2 className="text-black text-[45px] leading-[42px] font-bold">
//     //                   {text.title}
//     //                 </h2>
//     //                 <p className="text-black text-[32px] leading-[32px] mt-2">
//     //                   {text.subtitle}
//     //                 </p>
//     //               </div>
//     //             </motion.div>
//     //           );
//     //         })}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div
//       ref={containerRef}
//       className="flex sm:hidden flex-col items-center justify-start relative w-full h-auto"
//       style={{
//         height: `${scrollDuration + viewportHeight}px`,
//       }}
//     >
//       {/* Bottom white gradient overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

//       {/* Sticky video */}
//       <div className="sticky top-0 w-full h-screen overflow-hidden">
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 w-full h-full object-cover"
//           muted
//           playsInline
//           preload="auto"
//         />

//         {/* Text overlay */}
//         <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
//           <div className="relative w-full">
//             {timedTexts.map((text, index) => {
//               const startRange = text.start / videoDuration;
//               const endRange = text.end / videoDuration;

//               const opacity = useTransform(
//                 scrollYProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [0, 1, 1, 0]
//               );

//               const y = useTransform(
//                 scrollYProgress,
//                 [startRange, (startRange + endRange) / 2, endRange],
//                 [60, 0, -60]
//               );

//               return (
//                 <motion.div
//                   key={index}
//                   style={{ opacity, y }}
//                   className="absolute left-0 right-0 bottom-20 flex flex-col items-center"
//                 >
//                   <div className="w-fit bg-white/70 px-3 py-4">
//                     <h2 className="text-black text-[45px] leading-[42px] font-bold">
//                       {text.title}
//                     </h2>
//                     <p className="text-black text-[32px] leading-[32px] mt-2">
//                       {text.subtitle}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileScrollSection;

// "use client";
// import React, { useRef } from "react";
// import { motion } from "framer-motion";

// const MobileScrollSection = ({ videoSrc, timedTexts = [] }) => {
//   const videoRef = useRef(null);

//   return (
//     <div className="flex sm:hidden flex-col items-center justify-start relative w-full h-screen">
//       {/* Bottom white gradient overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

//       {/* Autoplay video */}
//       <div className="relative w-full h-full overflow-hidden">
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//         />

//         {/* Text overlay (always centered) */}
//         {/* <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
//           <div className="relative w-full">
//             {timedTexts.map((text, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.5 }}
//                 className="absolute left-0 right-0 bottom-20 flex flex-col items-center"
//               >
//                 <div className="w-fit bg-white/70 px-3 py-4">
//                   <h2 className="text-black text-[45px] leading-[42px] font-bold">
//                     {text.title}
//                   </h2>
//                   <p className="text-black text-[32px] leading-[32px] mt-2">
//                     {text.subtitle}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default MobileScrollSection;

"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileScrollSection = ({ videoSrc, timedTexts = [] }) => {
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // Track video time and update which text is active
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const active = timedTexts.findIndex(
        (t) => currentTime >= t.start && currentTime <= t.end
      );
      setActiveIndex(active !== -1 ? active : null);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [timedTexts]);

  return (
    <div className="flex sm:hidden flex-col items-center justify-start relative w-full h-screen">
      {/* Bottom white gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

      {/* Autoplay video */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Timed text overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="absolute top-20 flex flex-col justify-center items-center"
              >
                <div className="w-[180px] h-[180px] bg-white/70 px-3 py-4">
                  <h2 className="text-black text-[40px] leading-[42px] font-bold">
                    {timedTexts[activeIndex].title}
                  </h2>
                  <p className="text-black text-[32px] leading-[32px] mt-2">
                    {timedTexts[activeIndex].subtitle}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
              >
                <div className="w-[180px] h-[140px] bg-white/70 px-3 py-4 flex flex-col items-center justify-center">
                  <h2 className="text-black text-[40px] leading-[42px] font-bold">
                    {timedTexts[activeIndex].title}
                  </h2>
                  <p className="text-black text-[32px] leading-[32px] mt-2">
                    {timedTexts[activeIndex].subtitle}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MobileScrollSection;
