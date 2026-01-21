// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Sustainaibility from "./Sustainaibility";

// export default function Screen2() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const imagesRef = useRef([]);
//   const lastFrame = useRef(0);

//   const totalFrames = 344;
//   const pixelsPerFrame = 5; // scroll distance per frame
//   const [scrollHeight, setScrollHeight] = useState(0);

//   // ------------------------------
//   // Preload Images
//   // ------------------------------
//   useEffect(() => {
//     const imgs = [];
//     for (let i = 21; i <= totalFrames; i++) {
//       const img = new Image();
//       img.src = `/sustain/susimg/${i}.webp`;
//       imgs.push(img);
//     }
//     imagesRef.current = imgs;
//     imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));
//   }, []);

//   // ------------------------------
//   // Draw Frame
//   // ------------------------------
//   const drawFrame = (i) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (!canvas || !ctx) return;

//     const img = imagesRef.current[i];
//     if (!img || !img.complete) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };

//   // ------------------------------
//   // Scroll → Frame Mapping
//   // ------------------------------
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const total = totalFrames * pixelsPerFrame + window.innerHeight;
//     setScrollHeight(total * 1.4);

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const scrollTop = window.scrollY - containerRef.current.offsetTop;
//       const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

//       const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
//       const frameIndex = Math.floor(progress * (totalFrames - 1));

//       if (frameIndex !== lastFrame.current) {
//         lastFrame.current = frameIndex;
//         drawFrame(frameIndex);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ------------------------------
//   // Card Animation (shifted earlier)
//   // ------------------------------
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["center end", "end center"],
//   });

//   const cardY = useTransform(
//     scrollYProgress,
//     [0.8, 0.95, 1],
//     [200, 0, -100] // slides in then slightly up
//   );
//   const cardOpacity = useTransform(
//     scrollYProgress,
//     [0.8, 0.9, 1],
//     [0, 1, 0.8] // fade in, then slight fade out
//   );

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight + 200}px` : "100vh" }}
//         className="relative w-full bg-white h-full lg:flex hidden"
//       >
//         {/* Sticky canvas */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <canvas
//             ref={canvasRef}
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-cover"
//           />

//           {/* Sustainability card at the end */}
//           <motion.div
//             style={{
//               y: cardY, // keep y-axis the same
//               opacity: cardOpacity,
//               scale: useTransform(scrollYProgress, [0.8, 0.95], [0.9, 1]),
//               filter: useTransform(
//                 scrollYProgress,
//                 [0.8, 0.88], // faster blur-to-clear
//                 ["blur(20px)", "blur(0px)"]
//               ),
//             }}
//             transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//             className="absolute bottom-6 right-[max(5%,calc((100vw-1340px)/2))] left-[max(5%,calc((100vw-1340px)/2))]"
//           >
//             <Sustainaibility />
//           </motion.div>

//         </div>
//       </section>
//     </ReactLenis>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Sustainaibility from "./Sustainaibility";

// export default function Screen2() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const imagesRef = useRef([]);
//   const lastFrame = useRef(0);

//   const totalFrames = 222;
//   const pixelsPerFrame = 5; // scroll distance per frame
//   const [scrollHeight, setScrollHeight] = useState(0);

//   // ------------------------------
//   // Preload Images
//   // ------------------------------
//   useEffect(() => {
//     const imgs = [];
//     for (let i = 1; i <= totalFrames; i++) {
//       const img = new Image();
//       img.src = `/sustain/simages/${i}.webp`;
//       imgs.push(img);
//     }
//     imagesRef.current = imgs;
//     imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));
//   }, []);

//   // ------------------------------
//   // Draw Frame
//   // ------------------------------
//   const drawFrame = (i) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (!canvas || !ctx) return;

//     const img = imagesRef.current[i];
//     if (!img || !img.complete) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };

//   // ------------------------------
//   // Scroll → Frame Mapping
//   // ------------------------------
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const total = totalFrames * pixelsPerFrame + window.innerHeight;
//     setScrollHeight(total * 1.4);

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const scrollTop = window.scrollY - containerRef.current.offsetTop;
//       const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

//       const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
//       const frameIndex = Math.floor(progress * (totalFrames - 1));

//       if (frameIndex !== lastFrame.current) {
//         lastFrame.current = frameIndex;
//         drawFrame(frameIndex);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ------------------------------
//   // Card Animation (shifted earlier)
//   // ------------------------------
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["center end", "end center"],
//   });

//   const cardY = useTransform(scrollYProgress, [0.6, 0.8, 0.95], [200, 0, -50]);
//   const cardOpacity = useTransform(
//     scrollYProgress,
//     [0.6, 0.7, 0.9],
//     [0, 1, 0.8]
//   );

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight + 200}px` : "100vh" }}
//         className="relative w-full bg-white h-full lg:flex hidden"
//       >
//         {/* Sticky canvas */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <canvas
//             ref={canvasRef}
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-cover"
//           />

//           <motion.div
//             style={{
//               y: useTransform(
//                 scrollYProgress,
//                 [0.55, 0.75, 0.95],
//                 [200, 0, -50]
//               ), // appear earlier
//               opacity: useTransform(
//                 scrollYProgress,
//                 [0.55, 0.65, 0.9, 1],
//                 [0, 1, 1, 0.8]
//               ), // hold opacity
//               scale: useTransform(scrollYProgress, [0.55, 0.75], [0.9, 1]),
//               filter: useTransform(
//                 scrollYProgress,
//                 [0.55, 0.6],
//                 ["blur(20px)", "blur(0px)"]
//               ), // short blur
//             }}
//             transition={{
//               duration: 0.6,
//               ease: [0.4, 0, 0.2, 1],
//             }}
//             className="absolute bottom-6 right-[max(5%,calc((100vw-1340px)/2))] left-[max(5%,calc((100vw-1340px)/2))]"
//           >
//             <Sustainaibility />
//           </motion.div>
//         </div>
//       </section>
//     </ReactLenis>
//   );
// }

"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Sustainaibility from "./Sustainaibility";

export default function Screen2() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastFrame = useRef(0);

  const totalFrames = 222;
  const pixelsPerFrame = 5;
  const [scrollHeight, setScrollHeight] = useState(0);
  const [shouldLoad, setShouldLoad] = useState(false);

  // ------------------------------
  // Detect Near Viewport
  // ------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px" },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ------------------------------
  // Load Images Only When Near
  // ------------------------------
  useEffect(() => {
    if (!shouldLoad) return;
    const imgs = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/sustain/simages/${i}.webp`;
      imgs.push(img);
    }
    imagesRef.current = imgs;
    imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));
  }, [shouldLoad]);

  // ------------------------------
  // Draw Frame
  // ------------------------------
  const drawFrame = (i) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const img = imagesRef.current[i];
    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  // ------------------------------
  // Scroll → Frame Mapping
  // ------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const total = totalFrames * pixelsPerFrame + window.innerHeight;
    setScrollHeight(total * 1.4);

    const onScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY - containerRef.current.offsetTop;
      const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      const frameIndex = Math.floor(progress * (totalFrames - 1));

      if (frameIndex !== lastFrame.current) {
        lastFrame.current = frameIndex;
        drawFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ------------------------------
  // Card Animation (shifted earlier)
  // ------------------------------
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end center"],
  });

  const cardY = useTransform(scrollYProgress, [0.6, 0.8, 0.95], [200, 0, -50]);
  const cardOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.9],
    [0, 1, 0.8],
  );

  return (
    <section
      ref={containerRef}
      style={{ height: scrollHeight ? `${scrollHeight + 200}px` : "100vh" }}
      className="relative w-full bg-white h-full lg:flex hidden"
    >
      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-cover"
        />

        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0.55, 0.75, 0.95], [200, 0, -50]), // appear earlier
            opacity: useTransform(
              scrollYProgress,
              [0.55, 0.65, 0.9, 1],
              [0, 1, 1, 0.8],
            ), // hold opacity
            scale: useTransform(scrollYProgress, [0.55, 0.75], [0.9, 1]),
            filter: useTransform(
              scrollYProgress,
              [0.55, 0.6],
              ["blur(20px)", "blur(0px)"],
            ), // short blur
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute bottom-6 right-[max(5%,calc((100vw-1340px)/2))] left-[max(5%,calc((100vw-1340px)/2))]"
        >
          <Sustainaibility />
        </motion.div>
      </div>
    </section>
  );
}
