// import React from "react";

// const IMPScroll = () => {
//   return (
//     <div className="flex w-full gap-10">
//       <div className="w-1/2">
//         <img src="/sustainability/solar.png" alt="Solar Panels" />
//       </div>
//       <div className="w-1/2 grid grid-cols-2">
//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             Total Solar Installed
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               14
//             </span>
//             <span className="text-[56px] leading-[69px]">MWp</span>
//           </span>
//         </div>
//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             LED Implementation
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               100
//             </span>
//             <span className="text-[56px] leading-[69px]">%</span>
//           </span>
//         </div>
//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             Emissions Reduced
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               100
//             </span>
//             <span className="text-[56px] leading-[69px]">tCO2</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IMPScroll;
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
// import React from "react";

// // ✅ SusCard component
// const SusCard = ({ title1, v1, u1, title2, v2, u2, title3, v3, u3 }) => {
//   return (
//     <div className="flex w-full gap-10">
//       <div className="w-1/2">
//         <img src="/sustainability/solar.png" alt="Solar Panels" />
//       </div>
//       <div className="w-1/2 grid grid-cols-2">
//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title1}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v1}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u1}</span>
//           </span>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title2}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v2}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u2}</span>
//           </span>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title3}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v3}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u3}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const IMPScroll = () => {
//   // ✅ Array with 4 folds (each fold contains all 3 metrics)
//   const susArray = [
//     {
//       id: 1,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 2,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 3,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 4,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-16">
//       {susArray.map((item) => (
//         <SusCard
//           key={item.id}
//           title1={item.title1}
//           v1={item.v1}
//           u1={item.u1}
//           title2={item.title2}
//           v2={item.v2}
//           u2={item.u2}
//           title3={item.title3}
//           v3={item.v3}
//           u3={item.u3}
//         />
//       ))}
//     </div>
//   );
// };

// export default IMPScroll;
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
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// // ✅ SusCard component – unchanged layout
// const SusCard = ({ title1, v1, u1, title2, v2, u2, title3, v3, u3 }) => {
//   return (
//     <div className="flex w-full gap-10">
//       <div className="w-1/2">
//         <img src="/sustainability/solar.png" alt="Solar Panels" />
//       </div>
//       <div className="w-1/2 grid grid-cols-2">
//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title1}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v1}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u1}</span>
//           </span>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title2}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v2}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u2}</span>
//           </span>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title3}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v3}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u3}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function IMPScroll() {
//   // ✅ Data array (4 folds)
//   const susArray = [
//     {
//       id: 1,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 2,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 3,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 4,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//   ];

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.9", "end end"], // animate when ~10% of section enters
//   });

//   return (
//     <ReactLenis root>
//       {/* Outer wrapper with enough height for scrolling */}
//       <div
//         ref={containerRef}
//         className="relative bg-white"
//         style={{ height: `${(susArray.length - 1) * 150}vh` }}
//       >
//         {/* Sticky viewport for stacked animations */}
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           {susArray.map((item, i) => {
//             const total = susArray.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;
//             const isLast = i === susArray.length - 1;

//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               isLast ? [0, 1, 1] : [0, 1, 0]
//             );

//             const y = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               isLast ? ["3%", "0%", "0%"] : ["3%", "0%", "-3%"]
//             );

//             return (
//               <motion.div
//                 key={item.id}
//                 style={{ opacity, y }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <SusCard
//                   title1={item.title1}
//                   v1={item.v1}
//                   u1={item.u1}
//                   title2={item.title2}
//                   v2={item.v2}
//                   u2={item.u2}
//                   title3={item.title3}
//                   v3={item.v3}
//                   u3={item.u3}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
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
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// // ✅ SusCard component – unchanged layout
// const SusCard = ({ title1, v1, u1, title2, v2, u2, title3, v3, u3 }) => {
//   return (
//     <div className="flex w-full gap-10">
//       <div className="w-1/2">
//         <img src="/sustainability/solar.png" alt="Solar Panels" />
//       </div>
//       <div className="w-1/2 grid grid-cols-2">
//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title1}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v1}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u1}</span>
//           </span>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title2}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v2}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u2}</span>
//           </span>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {title3}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {v3}
//             </span>
//             <span className="text-[56px] leading-[69px]">{u3}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function IMPScroll() {
//   const susArray = [
//     {
//       id: 1,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 2,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 3,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 4,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//   ];

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.9", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       <div
//         ref={containerRef}
//         className="relative bg-white"
//         style={{ height: `${(susArray.length - 1) * 150}vh` }}
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           {susArray.map((item, i) => {
//             const total = susArray.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;
//             const isLast = i === susArray.length - 1;

//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               isLast ? [0, 1, 1] : [0, 1, 0]
//             );

//             return (
//               <motion.div
//                 key={item.id}
//                 style={{ opacity }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <SusCard
//                   title1={item.title1}
//                   v1={item.v1}
//                   u1={item.u1}
//                   title2={item.title2}
//                   v2={item.v2}
//                   u2={item.u2}
//                   title3={item.title3}
//                   v3={item.v3}
//                   u3={item.u3}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
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
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// // ----- Card -----
// const SusCard = ({ title1, v1, u1, title2, v2, u2, title3, v3, u3 }) => (
//   <div className="flex w-full gap-10">
//     <div className="w-1/2">
//       <img src="/sustainability/solar.png" alt="Solar Panels" />
//     </div>
//     <div className="w-1/2 grid grid-cols-2">
//       {[
//         { title: title1, v: v1, u: u1 },
//         { title: title2, v: v2, u: u2 },
//         { title: title3, v: v3, u: u3 },
//       ].map((item, i) => (
//         <div key={i} className="flex flex-col gap-1">
//           <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
//             {item.title}
//           </p>
//           <span className="flex gap-3 items-center">
//             <span className="bw-sb text-[76px] leading-[69px] txt_gradient_sustain">
//               {item.v}
//             </span>
//             <span className="text-[56px] leading-[69px]">{item.u}</span>
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default function IMPScroll() {
//   const susArray = [
//     {
//       id: 1,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 2,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 3,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//     {
//       id: 4,
//       title1: "Total Solar Installed",
//       v1: "14",
//       u1: "MWp",
//       title2: "LED Implementation",
//       v2: "100",
//       u2: "%",
//       title3: "Emissions Reduced",
//       v3: "100",
//       u3: "tCO2",
//     },
//   ];

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.9", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       <div className="flex flex-col gap-20 relative">
//         {/* ✅ Heading stays static */}

//         {/* ✅ Scrollable cards */}
//         <div
//           ref={containerRef}
//           className="relative bg-white"
//           style={{ height: `${(susArray.length - 1) * 150}vh` }}
//         >
//           <div className="sticky top-0 h-screen flex items-center gap-20 justify-center overflow-hidden">
//             <div className="flex w-full h-full">
//               <h3 className="flex flex-col">
//                 <span className="md64m">Impact</span>
//                 <span className="md64r flex xl:gap-[17px]">
//                   <span>So Far</span>
//                   <img src="/abstract_pattern_sustain.png" alt="Abstract Gradient" />
//                 </span>
//               </h3>
//             </div>
//             {susArray.map((item, i) => {
//               const total = susArray.length;
//               const start = i / total;
//               const mid = (i + 0.5) / total;
//               const end = (i + 1) / total;
//               const isLast = i === susArray.length - 1;

//               const opacity = useTransform(
//                 scrollYProgress,
//                 [start, mid, end],
//                 isLast ? [0, 1, 1] : [0, 1, 0]
//               );
//               return (
//                 <motion.div
//                   key={item.id}
//                   style={{ opacity }}
//                   className="absolute mt-40 inset-0 flex items-center justify-center"
//                 >
//                   <SusCard {...item} />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </ReactLenis>
//   );
// }
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// ----- Card -----
const SusCard = ({ title1, v1, u1, title2, v2, u2, title3, v3, u3 }) => (
  <div className="flex xl:flex-row flex-col w-full gap-10">
    <div className="xl:w-1/2">
      <img
        className="w-full"
        src="/sustainability/solar.png"
        alt="Solar Panels"
      />
    </div>
    <div className="xl:w-1/2 justify-between md:gap-20 gap-10 grid md:grid-cols-2">
      {[
        { title: title1, v: v1, u: u1 },
        { title: title2, v: v2, u: u2 },
        { title: title3, v: v3, u: u3 },
      ].map((item, i) => (
        <div key={i} className="flex flex-col gap-1">
          <p className="text-[20px] leading-[30px] border-b border-[#D0D0D0]">
            {item.title}
          </p>
          <span className="flex gap-3 items-center">
            <span className="bw-sb text-[48px] leading-[40px] md:text-[76px] md:leading-[69px] txt_gradient_sustain">
              {item.v}
            </span>
            <span className="md:text-[56px] text-[24px] leading-[34px] md:leading-[66px]">
              {item.u}
            </span>
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function IMPScroll() {
  const susArray = [
    {
      id: 1,
      title1: "Total Solar Installed",
      v1: "14",
      u1: "MWp",
      title2: "LED Implementation",
      v2: "100",
      u2: "%",
      title3: "Emissions Reduced",
      v3: "100",
      u3: "tCO2",
    },
    {
      id: 2,
      title1: "Total Solar Installed",
      v1: "14",
      u1: "MWp",
      title2: "LED Implementation",
      v2: "100",
      u2: "%",
      title3: "Emissions Reduced",
      v3: "100",
      u3: "tCO2",
    },
    {
      id: 3,
      title1: "Total Solar Installed",
      v1: "14",
      u1: "MWp",
      title2: "LED Implementation",
      v2: "100",
      u2: "%",
      title3: "Emissions Reduced",
      v3: "100",
      u3: "tCO2",
    },
    {
      id: 4,
      title1: "Total Solar Installed",
      v1: "14",
      u1: "MWp",
      title2: "LED Implementation",
      v2: "100",
      u2: "%",
      title3: "Emissions Reduced",
      v3: "100",
      u3: "tCO2",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end end"],
  });

  return (
    // <ReactLenis root>
    <div className="flex flex-col gap-20 relative">
      <div
        ref={containerRef}
        className="relative bg-white"
        style={{ height: `${(susArray.length - 1) * 150}vh` }}
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center gap-10 lg:gap-20 justify-center overflow-hidden">
          {/* ✅ Heading remains static */}
          <div className="flex w-full h-full">
            <h3 className="flex flex-col">
              <span className="md64m">Impact</span>
              <span className="md64r flex gap-[10px] xl:gap-[17px]">
                <span>So Far</span>
                <img
                  className="abstract_sustian_svg"
                  src="/abstract_pattern_sustain.png"
                  alt="Abstract Gradient"
                />
              </span>
            </h3>
          </div>

          {/* ✅ Cards fade + slide */}
          {susArray.map((item, i) => {
            const total = susArray.length;
            const start = i / total;
            const mid = (i + 0.5) / total;
            const end = (i + 1) / total;
            const isLast = i === total - 1;

            const opacity = useTransform(
              scrollYProgress,
              [start, mid, end],
              isLast ? [0, 1, 1] : [0, 1, 0]
            );

            // 👉 Slide up/down effect
            const y = useTransform(
              scrollYProgress,
              [start, mid, end],
              isLast ? ["5%", "0%", "0%"] : ["5%", "0%", "-5%"]
            );

            return (
              <motion.div
                key={item.id}
                style={{ opacity, y }}
                className="absolute mt-40 inset-0 flex items-center justify-center"
              >
                <SusCard {...item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    // </ReactLenis>
  );
}
