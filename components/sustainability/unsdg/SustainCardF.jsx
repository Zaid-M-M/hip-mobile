// "use client";
// import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
// import { useRef, useEffect } from "react";

// export default function SustainCardF({ index, title, desc, img_data }) {
//   const ref = useRef(null);
//   const { scrollY } = useScroll();
//   const y = useMotionValue(0);

//   // Update card's top relative to viewport
//   useEffect(() => {
//     const update = () => {
//       if (!ref.current) return;
//       const rect = ref.current.getBoundingClientRect();
//       const vh = window.innerHeight;
//       // Map top crossing 50vh to 0–1 opacity
//       const progress =
//         1 - Math.min(Math.max((rect.top - vh / 100) / rect.height, 0), 1);
//       y.set(progress);
//     };
//     update();
//     window.addEventListener("scroll", update, { passive: true });
//     window.addEventListener("resize", update);
//     return () => {
//       window.removeEventListener("scroll", update);
//       window.removeEventListener("resize", update);
//     };
//   }, [y]);

//   const fillOpacity = useTransform(y, (v) => v);

//   return (
//     <div className="flex flex-col items-end" ref={ref}>
//       {/* SVG Index */}
//       <div className="relative w-full lg:!flex !hidden justify-start h-[130px] md:h-[86px] xl:h-[156px]">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 200 100"
//           className="absolute -top-3 xl:-left-20"
//         >
//           <defs>
//             <linearGradient
//               id={`grad-${index}`}
//               x1="0%"
//               y1="0%"
//               x2="0%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="#2bb04c" />
//               <stop offset="100%" stopColor="#8f53a1" />
//             </linearGradient>
//           </defs>

//           {/* Stroke always visible */}
//           <text
//             x="0"
//             y="80"
//             fontSize="80"
//             fontWeight="900"
//             fill="transparent"
//             stroke={`url(#grad-${index})`}
//             strokeWidth="1"
//             dominantBaseline="middle"
//             alignmentBaseline="middle"
//           >
//             {index}
//           </text>

//           {/* Fill controlled by scroll */}
//           <motion.text
//             x="0"
//             y="80"
//             fontSize="80"
//             fontWeight="900"
//             fill={`url(#grad-${index})`}
//             stroke="transparent"
//             strokeWidth="1"
//             dominantBaseline="middle"
//             alignmentBaseline="middle"
//             style={{ opacity: fillOpacity }}
//           >
//             {index}
//           </motion.text>
//         </svg>
//       </div>
//       <span className="relative z-0 w-full pl-2 lg:!hidden !flex justify-start text-[64px] md:text-[76px] md:leading-[86px] xl:text-[156px] h-fit xl:leading-[130px] tracking-[-0.5%] bw-xb str-gradient">
//         {index}
//       </span>
//       {/* Card content */}
//       <div
//         className="w-full xl:w-[95%] -mt-5 bg-black relative z-[100] border-2 border-white/20
//                    rounded-tl-[25px] rounded-bl-[25px] rounded-br-[25px] flex flex-col h-auto overflow-visible"
//       >
//         <div className="w-full relative z-10 flex flex-wrap p-0 overflow-hidden rounded-tl-[25px]">
//           <img
//             src={img_data}
//             alt="SDG Icon"
//             className="object-cover w-[calc(25%-0.5rem)] h-full rounded-none flex-1"
//           />
//         </div>
//         <div className="flex flex-col gap-2 p-5 md:p-5 bg-black relative rounded-b-[40px] z-10">
//           <h3 className="text-white uppercase bw-r xl:leading-[30px] leading-[30px] text-[20px] xl:text-[20px]">
//             {title}
//           </h3>
//           <p className="text-[#E0E0E0] text-[16px] leading-[26px]">{desc}</p>
//         </div>
//       </div>
//     </div>
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
// "use client";
// import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
// import { useRef, useEffect } from "react";

// export default function SustainCardF({ index, title, desc, img_data }) {
//   const ref = useRef(null);
//   const { scrollY } = useScroll();
//   const y = useMotionValue(0);

//   useEffect(() => {
//     const update = () => {
//       if (!ref.current) return;
//       const rect = ref.current.getBoundingClientRect();
//       const vh = window.innerHeight;
//       const progress =
//         1 - Math.min(Math.max((rect.top - vh / 100) / rect.height, 0), 1);
//       y.set(progress);
//     };
//     update();
//     window.addEventListener("scroll", update, { passive: true });
//     window.addEventListener("resize", update);
//     return () => {
//       window.removeEventListener("scroll", update);
//       window.removeEventListener("resize", update);
//     };
//   }, [y]);

//   const fillOpacity = useTransform(y, (v) => v);

//   return (
//     <div className="flex flex-col items-end" ref={ref}>
//       {/* SVG Gradient Index for Desktop */}
//       <div className="relative w-full lg:!flex !hidden justify-start h-[130px] md:h-[86px] xl:h-[156px]">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 200 100"
//           className="absolute -top-3 xl:-left-20"
//         >
//           <defs>
//             <linearGradient
//               id={`grad-${index}`}
//               x1="0%"
//               y1="0%"
//               x2="40%"
//               y2="120%"
//             >
//               <stop offset="50%" stopColor="#2bb04c" />
//               <stop offset="65%" stopColor="#8f53a1" />
//             </linearGradient>
//           </defs>

//           {/* Stroke Layer (underneath) */}
//           <text
//             x="0"
//             y="80"
//             fontSize="80"
//             fontWeight="900"
//             fill="transparent"
//             stroke={`url(#grad-${index})`}
//             strokeWidth="0.8"
//             strokeOpacity="0.6"
//             dominantBaseline="middle"
//             alignmentBaseline="middle"
//           >
//             {index}
//           </text>

//           {/* Fill Layer (slightly offset, animated) */}
//           <motion.text
//             x="0.5"
//             y="80.5"
//             fontSize="80"
//             fontWeight="900"
//             fill={`url(#grad-${index})`}
//             stroke="transparent"
//             style={{ opacity: fillOpacity }}
//             dominantBaseline="middle"
//             alignmentBaseline="middle"
//           >
//             {index}
//           </motion.text>
//         </svg>
//       </div>

//       {/* Mobile Version of Number */}
//       <span className="relative z-0 w-full pl-2 lg:!hidden !flex justify-start text-[64px] md:text-[76px] md:leading-[86px] xl:text-[156px] h-fit xl:leading-[130px] tracking-[-0.5%] bw-xb str-gradient">
//         {index}
//       </span>

//       {/* Card Content */}
//       <div
//         className="w-full xl:w-[95%] -mt-5 bg-black relative z-[100] border-2 border-white/20
//                    rounded-tl-[25px] rounded-bl-[25px] rounded-br-[25px] flex flex-col h-auto overflow-visible"
//       >
//         <div className="w-full relative z-10 flex flex-wrap p-0 overflow-hidden rounded-tl-[25px]">
//           <img
//             src={img_data}
//             alt={`Sustainability ${title}`}
//             className="object-cover w-[calc(25%-0.5rem)] h-full rounded-none flex-1"
//           />
//         </div>

//         <div className="flex flex-col gap-2 p-5 md:p-5 bg-black relative rounded-b-[40px] z-10">
//           <h3 className="text-white uppercase bw-r xl:leading-[30px] leading-[30px] text-[20px] xl:text-[20px]">
//             {title}
//           </h3>
//           <p className="text-[#E0E0E0] text-[16px] leading-[26px]">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function SustainCardF({ index, title, desc, img_data }) {
  const ref = useRef(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const vh = window.innerHeight;

      // We want progress = 0 → 1 as the TOP of the element goes from 100vh → 50vh
      const start = vh; // when top is at bottom of screen
      const end = vh * 0.05; // when top is at center of screen

      const top = rect.top;

      let value = 0;
      if (top <= end) {
        value = 1;
      } else if (top >= start) {
        value = 0;
      } else {
        value = (start - top) / (start - end);
      }

      progress.set(value);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [progress]);

  const fillOpacity = useTransform(progress, (v) => v);

  return (
    <div className="flex flex-col items-end" ref={ref}>
      {/* SVG Gradient Index for Desktop */}
      <div className="relative w-full lg:!flex !hidden justify-start h-[130px] md:h-[86px] xl:h-[156px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 100"
          className="absolute -top-3 xl:-left-20"
        >
          <defs>
            <linearGradient
              id={`grad-${index}`}
              x1="0%"
              y1="0%"
              x2="40%"
              y2="120%"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#2bb04c" />
              <stop offset="49%" stopColor="#2bb04c" />
              <stop offset="70.5%" stopColor="#8f53a1" />
              <stop offset="30%" stopColor="#8f53a1" />
              <stop offset="0%" stopColor="#8f53a1" />
            </linearGradient>
          </defs>

          {/* Stroke (background reveal) */}
          <text
            x="0"
            y="80"
            fontSize="80"
            fontWeight="900"
            fill="transparent"
            stroke={`url(#grad-${index})`}
            strokeWidth="0.8"
            strokeOpacity="0.6"
            dominantBaseline="middle"
            alignmentBaseline="middle"
          >
            {index}
          </text>

          {/* Animated Fill */}
          <motion.text
            x="0"
            y="80"
            fontSize="80"
            fontWeight="900"
            fill={`url(#grad-${index})`}
            style={{ opacity: fillOpacity }}
            dominantBaseline="middle"
            alignmentBaseline="middle"
          >
            {index}
          </motion.text>
        </svg>
      </div>

      {/* Mobile Version of Number */}
      <span className="relative z-0 w-full pl-2 lg:!hidden !flex justify-start text-[64px] md:text-[76px] md:leading-[86px] xl:text-[156px] h-fit xl:leading-[130px] tracking-[-0.5%] bw-xb str-gradient">
        {index}
      </span>

      {/* Card Content */}
      <div
        className="w-full xl:w-[95%] -mt-5 bg-black relative z-[100] border-2 border-white/20
                   rounded-tl-[25px] rounded-bl-[25px] rounded-br-[25px] flex flex-col h-auto overflow-visible"
      >
        <div className="w-full relative z-10 flex flex-wrap p-0 overflow-hidden rounded-tl-[25px]">
          <img
            src={img_data}
            alt={`Sustainability ${title}`}
            className="object-cover w-[calc(25%-0.5rem)] h-full rounded-none flex-1"
          />
        </div>

        <div className="flex flex-col gap-2 p-5 md:p-5 bg-black relative rounded-b-[40px] z-10">
          <h3 className="text-white uppercase bw-r xl:leading-[30px] leading-[30px] text-[20px] xl:text-[20px]">
            {title}
          </h3>
          <p className="text-[#E0E0E0] text-[16px] leading-[26px]">{desc}</p>
        </div>
      </div>
    </div>
  );
}
