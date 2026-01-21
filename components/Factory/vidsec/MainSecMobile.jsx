// "use client";
// import { useRef, useEffect, useState } from "react";

// const texts = [
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//     img: "/factory/test.png",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//     img: "/factory/tailor.png",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//     img: "/factory/trust.png",
//   },
// ];

// export default function MainSecMobile() {
//   return (
//     <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
//       {texts.map((item, idx) => (
//         <div
//           key={idx}
//           className="h-screen w-full flex items-center justify-end relative snap-start bg-white"
//         >
//           <img
//             src={item.img}
//             alt={item.heading}
//             className="w-[90%] aspect-video"
//           />
//           <div className="absolute top-[15%] left-[5%] max-w-[80%]">
//             <h2 className="text-[35px] leading-[45px] tracking-[-0.04em]">
//               {item.heading}
//             </h2>
//             <p className="bw-r text-[16px] leading-[24px]">{item.sub}</p>
//           </div>
//         </div>
//       ))}
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
//
//
//
//
// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";
// const texts = [
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//     img: "/factory/test.png",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//     img: "/factory/tailor.png",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//     img: "/factory/trust.png",
//   },
// ];

// export default function MainSecMobile() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"], // whole scroll mapped
//   });

//   return (
//     <ReactLenis root>
//       <div ref={containerRef} className="relative h-[300vh] bg-white">
//         {/* Sticky slideshow */}
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           {texts.map((item, i) => {
//             const total = texts.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;

//             // Fade in (0→1) between start→mid, fade out (1→0) mid→end
//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               [0, 1, 0]
//             );

//             // Y movement: from 30% (below) → 0 (center) → -30% (above)
//             const y = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               ["30%", "0%", "-30%"]
//             );

//             return (
//               <motion.div
//                 key={i}
//                 style={{ opacity, y }}
//                 className="absolute inset-0 flex items-center justify-end"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.heading}
//                   className="w-[95%] aspect-auto h-auto"
//                 />
//                 <div className="absolute top-[10%] left-[5%] flex flex-col gap-3 max-w-[80%]">
//                   <h2 className="text-[35px] bw-m leading-[45px] tracking-[-0.04em]">
//                     {item.heading}
//                   </h2>
//                   <p className="bw-r text-[16px] leading-[24px]">{item.sub}</p>
//                 </div>
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
// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// const texts = [
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//     img: "/factory/test.png",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//     img: "/factory/tailor.png",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//     img: "/factory/trust.png",
//   },
// ];

// export default function MainSecMobile() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       {/* scroll length = slides * 100vh */}
//       <div
//         ref={containerRef}
//         className="relative bg-white"
//         style={{ height: `${texts.length * 40}vh` }}
//       >
//         {/* sticky stage */}
//         <div className="sticky fix top-0 h-screen flex items-center justify-center overflow-hidden">
//           {texts.map((item, i) => {
//             const total = texts.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;

//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               [0, 1, 0]
//             );
//             const y = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               ["30%", "0%", "-30%"]
//             );

//             return (
//               <motion.div
//                 key={i}
//                 style={{ opacity, y }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <div className="relative h-fit w-full flex flex-col-reverse gap-3">
//                   <img
//                     src={item.img}
//                     alt={item.heading}
//                     className="w-[95%] h-auto object-contain"
//                   />
//                   <div className="flex flex-col gap-3 max-w-[80%]">
//                     <h2 className="text-[35px] bw-m leading-[45px] tracking-[-0.04em]">
//                       {item.heading}
//                     </h2>
//                     <p className="bw-r text-[16px] leading-[24px]">
//                       {item.sub}
//                     </p>
//                   </div>
//                 </div>
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
// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// const texts = [
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//     img: "/factory/test.png",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//     img: "/factory/tailor.png",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//     img: "/factory/trust.png",
//   },
// ];

// export default function MainSecMobile() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       {/* scroll length = slides * 70vh */}
//       <div
//         ref={containerRef}
//         className="relative bg-white"
//         style={{ height: `${texts.length * 100}vh` }}
//       >
//         {/* sticky stage = only 70vh tall */}
//         <div className="sticky top-1/2 -translate-y-1/2 h-[80vh] flex items-center justify-center overflow-hidden">
//           {texts.map((item, i) => {
//             const total = texts.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;

//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               [0, 1, 0]
//             );
//             const y = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               ["30%", "0%", "-30%"]
//             );

//             return (
//               <motion.div
//                 key={i}
//                 style={{ opacity, y }}
//                 className="absolute fix inset-0 flex items-center justify-center"
//               >
//                 <div className="relative h-fit w-full flex flex-col-reverse gap-3 items-center">
//                   <img
//                     src={item.img}
//                     alt={item.heading}
//                     className="w-full h-auto object-contain"
//                   />
//                   <div className="flex flex-col gap-3">
//                     <h2 className="text-[28px] md:text-[35px] bw-m leading-[38px] md:leading-[45px] tracking-[-0.04em]">
//                       {item.heading}
//                     </h2>
//                     <p className="bw-r text-[16px] leading-[24px]">
//                       {item.sub}
//                     </p>
//                   </div>
//                 </div>
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
// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// const texts = [
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//     img: "/factory/test.png",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//     img: "/factory/tailor.png",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//     img: "/factory/trust.png",
//   },
// ];

// export default function MainSecMobile() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       {/* 👇 section tall enough to scroll through all slides */}
//       <div
//         ref={containerRef}
//         className="relative bg-white"
//         style={{ height: `${texts.length * 150}vh` }}
//       >
//         {/* sticky stage covers viewport, content inside is 80vh */}
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           {texts.map((item, i) => {
//             const total = texts.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;

//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               [0, 1, 0]
//             );
//             const y = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               ["30%", "0%", "-30%"]
//             );

//             return (
//               <motion.div
//                 key={i}
//                 style={{ opacity, y }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 {/* 👇 visible block only 80vh */}
//                 <div className="bg-white h-[80vh] w-[90%] flex flex-col-reverse gap-3">
//                   <img
//                     src={item.img}
//                     alt={item.heading}
//                     className="w-full h-[60vh] object-cover"
//                   />
//                   <div className="flex flex-col gap-3 max-w-[80%]">
//                     <h2 className="text-[28px] md:text-[35px] bw-m leading-[38px] md:leading-[45px] tracking-[-0.04em]">
//                       {item.heading}
//                     </h2>
//                     <p className="bw-r text-[16px] leading-[24px]">
//                       {item.sub}
//                     </p>
//                   </div>
//                 </div>
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
// "use client";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// const texts = [
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//     img: "/factory/test.png",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//     img: "/factory/tailor.png",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//     img: "/factory/trust.png",
//   },
// ];

// export default function MainSecMobile() {
//   const containerRef = useRef(null);
//   const [enabled, setEnabled] = useState(false);

//   // ✅ IntersectionObserver to trigger when 20% visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.intersectionRatio >= 0.2) {
//           setEnabled(true);
//         }
//       },
//       { threshold: Array.from({ length: 11 }, (_, i) => i / 10) } // [0,0.1,...1]
//     );

//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => {
//       if (containerRef.current) observer.unobserve(containerRef.current);
//     };
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       <div
//         ref={containerRef}
//         className="relative bg-white"
//         style={{ height: `${texts.length * 100}vh` }}
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           {texts.map((item, i) => {
//             const total = texts.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;

//             // ✅ Only start transforms after 20% visible
//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               enabled ? [0, 1, 0] : [0, 0, 0]
//             );
//             const y = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               enabled ? ["10%", "0%", "-10%"] : ["10%", "10%", "10%"]
//             );

//             return (
//               <motion.div
//                 key={i}
//                 style={{ opacity, y }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <div className="bg-white h-full w-[90%] flex flex-col-reverse gap-3">
//                   <img
//                     src={item.img}
//                     alt={item.heading}
//                     className="w-full h-[60vh] object-cover"
//                   />
//                   <div className="flex flex-col gap-3 max-w-[80%]">
//                     <h2 className="text-[28px] md:text-[35px] bw-m leading-[38px] md:leading-[45px] tracking-[-0.04em]">
//                       {item.heading}
//                     </h2>
//                     <p className="bw-r text-[16px] leading-[24px]">
//                       {item.sub}
//                     </p>
//                   </div>
//                 </div>
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
// "use client";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// const texts = [
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//     img: "/factory/test.png",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//     img: "/factory/tailor.png",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//     img: "/factory/trust.png",
//   },
// ];

// export default function MainSecMobile() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.8", "end end"], // ✅ start when 20% is visible
//   });

//   return (
//     <ReactLenis root>
//       <div
//         ref={containerRef}
//         className="relative bg-white"
//         style={{ height: `${(texts.length - 1) * 100}vh` }} // ✅ remove top whitespace
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           {texts.map((item, i) => {
//             const total = texts.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;

//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               [0, 1, 0]
//             );
//             const y = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               ["10%", "0%", "-10%"]
//             );

//             return (
//               <motion.div
//                 key={i}
//                 style={{ opacity, y }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <div className="bg-white h-[80vh] w-[90%] pt-[100px] justify-end flex flex-col-reverse gap-3">
//                   <img
//                     src={item.img}
//                     alt={item.heading}
//                     className="w-full h-auto object-cover"
//                   />
//                   <div className="flex flex-col gap-3 max-w-[80%]">
//                     <h2 className="text-[28px] md:text-[35px] bw-m leading-[38px] md:leading-[45px] tracking-[-0.04em]">
//                       {item.heading}
//                     </h2>
//                     <p className="bw-r text-[16px] leading-[24px]">
//                       {item.sub}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </ReactLenis>
//   );
// }
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";

const texts = [
  {
    heading: "Customized factory setups",
    sub: "with zero upfront investment",
    imgmd: "/factory/cust.png",
    img: "/factory/i1.jpg",
  },
  {
    heading: "Flexible space and expansion",
    sub: "options ideal for MSMEs and first-time manufacturers",
    imgmd: "/factory/flexible.png",
    img: "/factory/i2.jpg",
  },
  {
    heading: "Tailored rental",
    sub: "plans aligned to your operational needs",
    imgmd: "/factory/tailor.png",
    img: "/factory/i3.jpg",
  },
  {
    heading: "Trusted by Leading Manufacturing Clients",
    sub: "across automotive, aerospace, engineering, and network technology sectors",
    imgmd: "/factory/trust.png",
    img: "/factory/i4.jpg",
  },
];

export default function MainSecMobile() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end end"], // start when 20% visible
  });

  return (
    <ReactLenis root>
      <div
        ref={containerRef}
        className="relative bg-white lg:!hidden !block"
        style={{ height: `${(texts.length - 1) * 150}vh` }} // remove top whitespace
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {texts.map((item, i) => {
            const total = texts.length;
            const start = i / total;
            const mid = (i + 0.5) / total;
            const end = (i + 1) / total;

            // Last item: no exit animation
            const isLast = i === texts.length - 1;

            const opacity = useTransform(
              scrollYProgress,
              [start, mid, end],
              isLast ? [0, 1, 1] : [0, 1, 0]
            );

            const y = useTransform(
              scrollYProgress,
              [start, mid, end],
              isLast ? ["10%", "0%", "0%"] : ["10%", "0%", "-10%"]
            );

            return (
              <motion.div
                key={i}
                style={{ opacity, y }}
                className="absolute inset-0 flex md:items-start items-center justify-center"
              >
                <div className="bg-white md:h-[60vh] h-[100vh] w-[90%] pt-[100px] justify-end flex flex-col-reverse gap-3">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full md:hidden flex h-auto object-contain"
                  />
                  <img
                    src={item.imgmd}
                    alt={item.heading}
                    className="w-full md:flex hidden h-auto object-contain"
                  />
                  <div className="flex flex-col gap-3 max-w-[80%]">
                    <h2 className="text-[35px] md:text-[45px] md:leading-[55px] bw-m leading-[45px] tracking-[-0.04em]">
                      {item.heading}
                    </h2>
                    <p className="bw-r text-[20px] md:text-[24px] md:leading-[34px] leading-[30px]">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ReactLenis>
  );
}
