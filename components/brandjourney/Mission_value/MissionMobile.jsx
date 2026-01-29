// "use client";
// import { useScroll, useTransform, motion } from "motion/react";
// import { useRef } from "react";
// import { easeInOut } from "framer-motion"; // Ensure you import easing if needed

// export default function MissionMobile() {
//   const container = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   // --- PURPOSE SECTION ---
//   // Widened range from 0.35 to 0.5 to make the closing more gradual
//   const purposeFlex = useTransform(
//     scrollYProgress,
//     [0, 0.35, 0.55],
//     [1, 1, 0],
//     { ease: easeInOut },
//   );
//   const purposeBg = useTransform(
//     scrollYProgress,
//     [0, 0.35, 0.55],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );
//   const purposeTextColor = useTransform(
//     scrollYProgress,
//     [0, 0.35, 0.55],
//     ["#fff", "#fff", "#000"],
//   );
//   const purposeContentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.45],
//     [1, 1, 0],
//   );

//   // --- MISSION SECTION ---
//   // Starts opening at 0.3 (overlaps Purpose) and stays open until 0.75
//   const missionFlex = useTransform(
//     scrollYProgress,
//     [0.3, 0.5, 0.7, 0.85],
//     [0, 1, 1, 0],
//     { ease: easeInOut },
//   );
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.3, 0.5, 0.7, 0.85],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );
//   const missionTextColor = useTransform(
//     scrollYProgress,
//     [0.3, 0.5, 0.7, 0.85],
//     ["#000", "#fff", "#fff", "#000"],
//   );
//   const missionContentOpacity = useTransform(
//     scrollYProgress,
//     [0.4, 0.5, 0.65, 0.75],
//     [0, 1, 1, 0],
//   );

//   // --- VALUES SECTION ---
//   const valuesFlex = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1], {
//     ease: easeInOut,
//   });
//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.7, 0.9],
//     ["#ffffff", "#8F53A1"],
//   );
//   const valuesTextColor = useTransform(
//     scrollYProgress,
//     [0.7, 0.9],
//     ["#000", "#fff"],
//   );
//   const valuesContentOpacity = useTransform(
//     scrollYProgress,
//     [0.75, 0.9],
//     [0, 1],
//   );

//   return (
//     <div ref={container} style={{ height: "400vh" }} className="relative">
//       <div className="sticky top-0 h-screen w-full bg-[#F5F5F5] px-[20px] py-[40px] overflow-hidden flex flex-col">
//         <div className="flex flex-col gap-[12px] h-full">
//           {/* Purpose Section */}
//           <motion.div
//             layout // Helps smooth out the internal layout shift
//             style={{
//               flex: purposeFlex,
//               backgroundColor: purposeBg,
//               minHeight: "80px",
//             }}
//             className="relative w-full overflow-hidden p-[24px] border border-gray-100"
//           >
//             <div className="flex flex-col md:flex-row gap-5 h-full">
//               <div className="flex-1">
//                 <motion.h3
//                   style={{ color: purposeTextColor }}
//                   className="font-bold text-[32px] md:text-[43px] leading-tight mb-4"
//                 >
//                   <span className="font-light">Our</span> Purpose
//                 </motion.h3>
//                 <motion.div style={{ opacity: purposeContentOpacity }}>
//                   <p
//                     style={{ color: purposeTextColor }}
//                     className="text-[18px] md:text-[21px] max-w-md"
//                   >
//                     Enable our customers succeed by proactively delivering agile
//                     solutions for accelerated growth.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: purposeContentOpacity }}
//                 className="hidden md:block w-1/3 h-64"
//               >
//                 <img
//                   src="/brand_journey/purpose_img.jpg"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Mission Section */}
//           <motion.div
//             layout
//             style={{
//               flex: missionFlex,
//               backgroundColor: missionBg,
//               minHeight: "80px",
//             }}
//             className="relative w-full overflow-hidden p-[24px] border border-gray-100"
//           >
//             <motion.h3
//               style={{ color: missionTextColor }}
//               className="font-bold text-[32px] md:text-[43px] leading-tight mb-4"
//             >
//               <span className="font-light">Our</span> Mission
//             </motion.h3>
//             <motion.div style={{ opacity: missionContentOpacity }}>
//               <p
//                 style={{ color: missionTextColor }}
//                 className="text-[18px] md:text-[21px]"
//               >
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Values Section */}
//           <motion.div
//             layout
//             style={{
//               flex: valuesFlex,
//               backgroundColor: valuesBg,
//               minHeight: "80px",
//             }}
//             className="relative w-full overflow-hidden p-[24px] border border-gray-100"
//           >
//             <motion.h3
//               style={{ color: valuesTextColor }}
//               className="font-bold text-[32px] md:text-[43px] leading-tight mb-4"
//             >
//               <span className="font-light">Our</span> Values
//             </motion.h3>
//             <motion.div style={{ opacity: valuesContentOpacity }}>
//               <p
//                 style={{ color: valuesTextColor }}
//                 className="mb-6 text-[18px]"
//               >
//                 Our values define who we are. These are the ideals that give us
//                 roots to anchor and wings to fly.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <ValueItem
//                   icon="/brand_journey/agility_icon.svg"
//                   title="AGILITY"
//                   desc="Be proactive and alert"
//                 />
//                 <ValueItem
//                   icon="/brand_journey/collabration_icon.svg"
//                   title="COLLABORATION"
//                   desc="Mutual respect"
//                 />
//                 <ValueItem
//                   icon="/brand_journey/excellence_icon.svg"
//                   title="EXCELLENCE"
//                   desc="Surpass benchmarks"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-4 items-center">
//       <div className="bg-white/20 p-2">
//         <img src={icon} className="w-8 h-8" alt="" />
//       </div>
//       <div>
//         <h4 className="text-white font-bold text-base uppercase tracking-wider">
//           {title}
//         </h4>
//         <p className="text-white/80 text-sm">{desc}</p>
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
// import { useScroll, useTransform, motion } from "motion/react";
// import { useRef } from "react";
// import { easeInOut } from "framer-motion";

// export default function MissionMobile() {
//   const container = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   // --- PURPOSE SECTION ---
//   const purposeFlex = useTransform(
//     scrollYProgress,
//     [0, 0.35, 0.55],
//     [1, 1, 0],
//     { ease: easeInOut },
//   );
//   const purposeBg = useTransform(
//     scrollYProgress,
//     [0, 0.35, 0.55],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );
//   const purposeTextColor = useTransform(
//     scrollYProgress,
//     [0, 0.35, 0.55],
//     ["#fff", "#fff", "#000"],
//   );
//   const purposeContentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.45],
//     [1, 1, 0],
//   );

//   // --- MISSION SECTION ---
//   const missionFlex = useTransform(
//     scrollYProgress,
//     [0.3, 0.5, 0.7, 0.85],
//     [0, 1, 1, 0],
//     { ease: easeInOut },
//   );
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.3, 0.5, 0.7, 0.85],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );
//   const missionTextColor = useTransform(
//     scrollYProgress,
//     [0.3, 0.5, 0.7, 0.85],
//     ["#000", "#fff", "#fff", "#000"],
//   );
//   const missionContentOpacity = useTransform(
//     scrollYProgress,
//     [0.4, 0.5, 0.65, 0.75],
//     [0, 1, 1, 0],
//   );

//   // --- VALUES SECTION ---
//   const valuesFlex = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1], {
//     ease: easeInOut,
//   });
//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.7, 0.9],
//     ["#ffffff", "#8F53A1"],
//   );
//   const valuesTextColor = useTransform(
//     scrollYProgress,
//     [0.7, 0.9],
//     ["#000", "#fff"],
//   );
//   const valuesContentOpacity = useTransform(
//     scrollYProgress,
//     [0.75, 0.9],
//     [0, 1],
//   );

//   return (
//     <div ref={container} style={{ height: "400vh" }} className="relative">
//       <div className="sticky top-0 h-screen w-full bg-[#F5F5F5] px-[15px] py-[30px] overflow-hidden flex flex-col">
//         <div className="flex flex-col gap-[10px] h-full">
//           {/* Purpose Section */}
//           <motion.div
//             layout
//             style={{
//               flex: purposeFlex,
//               backgroundColor: purposeBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-[400px] justify-between gap-12">
//               <div>
//                 <motion.h3
//                   style={{ color: purposeTextColor }}
//                   className="bw-m text-[36px] leading-tight mb-4"
//                 >
//                   <span className="bw-l">Our</span> Purpose
//                 </motion.h3>
//                 <motion.div style={{ opacity: purposeContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug max-w-[85%]"
//                   >
//                     Enable our customers succeed by proactively delivering agile
//                     solutions for accelerated growth.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: purposeContentOpacity }}
//                 className="w-full h-1/2 mt-4"
//               >
//                 <img
//                   src="/brand_journey/purpose_img.jpg"
//                   className="w-full h-full object-cover "
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Mission Section */}
//           <motion.div
//             layout
//             style={{
//               flex: missionFlex,
//               backgroundColor: missionBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-[400px] justify-between gap-12">
//               <div>
//                 <motion.h3
//                   style={{ color: missionTextColor }}
//                   className="bw-m text-[36px] leading-tight mb-4"
//                 >
//                   <span className="bw-l">Our</span> Mission
//                 </motion.h3>
//                 <motion.div style={{ opacity: missionContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug max-w-[85%]"
//                   >
//                     Make Horizon the dominant and preferred industrial and
//                     warehousing partner, sustainably delivering benchmark
//                     quality and superior returns.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: missionContentOpacity }}
//                 className="w-full h-1/2 mt-4"
//               >
//                 <img
//                   src="/brand_journey/mission_img.jpg"
//                   className="w-full h-full object-cover "
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Values Section */}
//           <motion.div
//             layout
//             style={{
//               flex: valuesFlex,
//               backgroundColor: valuesBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-full overflow-hidden no-scrollbar">
//               <motion.h3
//                 style={{ color: valuesTextColor }}
//                 className="bw-m text-[36px] leading-tight mb-2"
//               >
//                 <span className="bw-l">Our</span> Values
//               </motion.h3>

//               <motion.div
//                 style={{ opacity: valuesContentOpacity }}
//                 className="flex flex-col gap-4"
//               >
//                 <p
//                   style={{ color: "#fff" }}
//                   className="bw-m text-[16px] leading-snug"
//                 >
//                   Our values define who we are. These are the ideals that give
//                   us roots to anchor and wings to fly.
//                 </p>

//                 <div className="space-y-4 mb-4">
//                   <ValueItem
//                     icon="/brand_journey/agility_icon.svg"
//                     title="AGILITY"
//                     desc="Be proactive and alert to stakeholder needs"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/collabration_icon.svg"
//                     title="COLLABORATION"
//                     desc="Practise mutual respect and teamwork"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/excellence_icon.svg"
//                     title="EXCELLENCE"
//                     desc="Establish and surpass benchmarks"
//                   />
//                 </div>

//                 <div className="w-full h-40 flex-shrink-0">
//                   <img
//                     src="/brand_journey/value_img.jpg"
//                     className="w-full h-full object-cover "
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 items-center">
//       <div className="bg-white/10 p-2  shrink-0">
//         <img src={icon} className="w-7 h-7" alt="" />
//       </div>
//       <div>
//         <h4 className="text-white bw-m text-[14px] uppercase tracking-wide">
//           {title}
//         </h4>
//         <p className="text-white/90 bw-l text-[12px] leading-tight">{desc}</p>
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
//
//
//
//
// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";
// import { easeInOut } from "framer-motion";

// export default function MissionMobile() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= PURPOSE ================= */
//   const purposeFlex = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     [1, 1, 0],
//     { ease: easeInOut },
//   );

//   const purposeBg = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );

//   const purposeTextColor = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     ["#fff", "#fff", "#000"],
//   );

//   const purposeContentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.16, 0.24],
//     [1, 1, 0],
//   );

//   /* ================= MISSION ================= */
//   const missionFlex = useTransform(
//     scrollYProgress,
//     [0.22, 0.35, 0.48, 0.6],
//     [0, 1, 1, 0],
//     { ease: easeInOut },
//   );

//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.22, 0.35, 0.48, 0.6],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );

//   const missionTextColor = useTransform(
//     scrollYProgress,
//     [0.22, 0.35, 0.48, 0.6],
//     ["#000", "#fff", "#fff", "#000"],
//   );

//   const missionContentOpacity = useTransform(
//     scrollYProgress,
//     [0.3, 0.36, 0.46, 0.55],
//     [0, 1, 1, 0],
//   );

//   /* ================= VALUES ================= */
//   const valuesFlex = useTransform(scrollYProgress, [0.55, 0.7, 1], [0, 1, 1], {
//     ease: easeInOut,
//   });

//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.55, 0.7],
//     ["#ffffff", "#8F53A1"],
//   );

//   const valuesTextColor = useTransform(
//     scrollYProgress,
//     [0.55, 0.7],
//     ["#000", "#fff"],
//   );

//   const valuesContentOpacity = useTransform(
//     scrollYProgress,
//     [0.6, 0.75],
//     [0, 1],
//   );

//   return (
//     <div ref={containerRef} style={{ height: "380vh" }} className="relative">
//       {/* spacer for sticky offset */}

//       <div className="sticky top-[70px] h-screen w-full bg-[#F5F5F5] py-12 px-[5%] overflow-hidden flex flex-col">
//         <div className="flex flex-col gap-[10px] h-full">
//           {/* PURPOSE */}
//           <motion.div
//             layout
//             style={{
//               flex: purposeFlex,
//               backgroundColor: purposeBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-[400px] justify-between gap-12">
//               <div>
//                 <motion.h3
//                   style={{ color: purposeTextColor }}
//                   className="bw-m text-[36px] leading-tight mb-4"
//                 >
//                   <span className="bw-l">Our</span> Purpose
//                 </motion.h3>

//                 <motion.div style={{ opacity: purposeContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug max-w-[85%]"
//                   >
//                     Enable our customers succeed by proactively delivering agile
//                     solutions for accelerated growth.
//                   </p>
//                 </motion.div>
//               </div>

//               <motion.div
//                 style={{ opacity: purposeContentOpacity }}
//                 className="w-full h-1/2 mt-4"
//               >
//                 <img
//                   src="/brand_journey/purpose_img.jpg"
//                   alt="Purpose"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             layout
//             style={{
//               flex: missionFlex,
//               backgroundColor: missionBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-[400px] justify-between gap-12">
//               <div>
//                 <motion.h3
//                   style={{ color: missionTextColor }}
//                   className="bw-m text-[36px] leading-tight mb-4"
//                 >
//                   <span className="bw-l">Our</span> Mission
//                 </motion.h3>

//                 <motion.div style={{ opacity: missionContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug max-w-[85%]"
//                   >
//                     Make Horizon the dominant and preferred industrial and
//                     warehousing partner, sustainably delivering benchmark
//                     quality and superior returns.
//                   </p>
//                 </motion.div>
//               </div>

//               <motion.div
//                 style={{ opacity: missionContentOpacity }}
//                 className="w-full h-1/2 mt-4"
//               >
//                 <img
//                   src="/brand_journey/mission_img.jpg"
//                   alt="Mission"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             layout
//             style={{
//               flex: valuesFlex,
//               backgroundColor: valuesBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-full overflow-hidden no-scrollbar">
//               <motion.h3
//                 style={{ color: valuesTextColor }}
//                 className="bw-m text-[36px] leading-tight mb-2"
//               >
//                 <span className="bw-l">Our</span> Values
//               </motion.h3>

//               <motion.div
//                 style={{ opacity: valuesContentOpacity }}
//                 className="flex flex-col gap-4"
//               >
//                 <p
//                   style={{ color: "#fff" }}
//                   className="bw-m text-[16px] leading-snug"
//                 >
//                   Our values define who we are. These are the ideals that give
//                   us roots to anchor and wings to fly.
//                 </p>

//                 <div className="space-y-4 mb-4">
//                   <ValueItem
//                     icon="/brand_journey/agility_icon.svg"
//                     title="AGILITY"
//                     desc="Be proactive and alert to stakeholder needs"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/collabration_icon.svg"
//                     title="COLLABORATION"
//                     desc="Practise mutual respect and teamwork"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/excellence_icon.svg"
//                     title="EXCELLENCE"
//                     desc="Establish and surpass benchmarks"
//                   />
//                 </div>

//                 <div className="w-full h-40 flex-shrink-0">
//                   <img
//                     src="/brand_journey/value_img.jpg"
//                     alt="Values"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 items-center">
//       <div className="bg-white/10 p-2 shrink-0">
//         <img src={icon} alt={title} className="w-7 h-7" />
//       </div>
//       <div>
//         <h4 className="text-white bw-m text-[14px] uppercase tracking-wide">
//           {title}
//         </h4>
//         <p className="text-white/90 bw-l text-[12px] leading-tight">{desc}</p>
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
// import { motion, useScroll, useTransform } from "motion/react";
// import { easeInOut } from "framer-motion";

// export default function MissionMobile() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= PURPOSE ================= */
//   const purposeFlex = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     [1, 1, 0],
//     { ease: easeInOut },
//   );
//   const purposeBg = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );
//   const purposeTextColor = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     ["#fff", "#fff", "#000"],
//   );
//   const purposeContentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.16, 0.25],
//     [1, 1, 0],
//   );

//   /* ================= MISSION ================= */
//   const missionFlex = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.55],
//     [0, 1, 1, 0],
//     { ease: easeInOut },
//   );
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.55],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );
//   const missionTextColor = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.55],
//     ["#000", "#fff", "#fff", "#000"],
//   );
//   const missionContentOpacity = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.52],
//     [0, 1, 1, 0],
//   );

//   /* ================= VALUES ================= */
//   const valuesFlex = useTransform(
//     scrollYProgress,
//     [0.2, 0.6, 0.73],
//     [0, 1, 1],
//     { ease: easeInOut },
//   );
//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.2, 0.6],
//     ["#ffffff", "#8F53A1"],
//   );
//   const valuesTextColor = useTransform(
//     scrollYProgress,
//     [0.2, 0.6],
//     ["#000", "#fff"],
//   );
//   const valuesContentOpacity = useTransform(
//     scrollYProgress,
//     [0.2, 0.6],
//     [0, 1],
//   );

//   return (
//     <div ref={containerRef} style={{ height: "350vh" }} className="relative">
//       <div className="sticky top-[70px] h-screen w-full bg-[#F5F5F5] py-12 px-[5%] overflow-hidden flex flex-col">
//         <div className="flex flex-col gap-[10px] h-full">
//           {/* PURPOSE */}
//           <motion.div
//             layout
//             style={{
//               flex: purposeFlex,
//               backgroundColor: purposeBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-[400px] justify-between gap-12">
//               <div>
//                 <motion.h3
//                   style={{ color: purposeTextColor }}
//                   className="bw-m text-[36px] leading-tight mb-4"
//                 >
//                   <span className="bw-l">Our</span> Purpose
//                 </motion.h3>
//                 <motion.div style={{ opacity: purposeContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug max-w-[85%]"
//                   >
//                     Enable our customers succeed by proactively delivering agile
//                     solutions for accelerated growth.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: purposeContentOpacity }}
//                 className="w-full h-1/2 mt-4"
//               >
//                 <img
//                   src="/brand_journey/purpose_img.jpg"
//                   alt="Purpose"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             layout
//             style={{
//               flex: missionFlex,
//               backgroundColor: missionBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-[400px] justify-between gap-12">
//               <div>
//                 <motion.h3
//                   style={{ color: missionTextColor }}
//                   className="bw-m text-[36px] leading-tight mb-4"
//                 >
//                   <span className="bw-l">Our</span> Mission
//                 </motion.h3>
//                 <motion.div style={{ opacity: missionContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug max-w-[85%]"
//                   >
//                     Make Horizon the dominant and preferred industrial and
//                     warehousing partner, sustainably delivering benchmark
//                     quality and superior returns.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: missionContentOpacity }}
//                 className="w-full h-1/2 mt-4"
//               >
//                 <img
//                   src="/brand_journey/mission_img.jpg"
//                   alt="Mission"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             layout
//             style={{
//               flex: valuesFlex,
//               backgroundColor: valuesBg,
//               minHeight: "75px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-full overflow-hidden no-scrollbar">
//               <motion.h3
//                 style={{ color: valuesTextColor }}
//                 className="bw-m text-[36px] leading-tight mb-2"
//               >
//                 <span className="bw-l">Our</span> Values
//               </motion.h3>
//               <motion.div
//                 style={{ opacity: valuesContentOpacity }}
//                 className="flex flex-col gap-4"
//               >
//                 <p
//                   style={{ color: "#fff" }}
//                   className="bw-m text-[16px] leading-snug"
//                 >
//                   Our values define who we are. These are the ideals that give
//                   us roots to anchor and wings to fly.
//                 </p>
//                 <div className="space-y-4 mb-4">
//                   <ValueItem
//                     icon="/brand_journey/agility_icon.svg"
//                     title="AGILITY"
//                     desc="Be proactive and alert to stakeholder needs"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/collabration_icon.svg"
//                     title="COLLABORATION"
//                     desc="Practise mutual respect and teamwork"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/excellence_icon.svg"
//                     title="EXCELLENCE"
//                     desc="Establish and surpass benchmarks"
//                   />
//                 </div>
//                 <div className="w-full h-40 flex-shrink-0">
//                   <img
//                     src="/brand_journey/value_img.jpg"
//                     alt="Values"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 items-center">
//       <div className="bg-white/10 p-2 shrink-0">
//         <img src={icon} alt={title} className="w-7 h-7" />
//       </div>
//       <div>
//         <h4 className="text-white bw-m text-[14px] uppercase tracking-wide">
//           {title}
//         </h4>
//         <p className="text-white/90 bw-l text-[12px] leading-tight">{desc}</p>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";
// import { easeInOut } from "framer-motion";

// export default function MissionMobileF() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= PURPOSE ================= */
//   const purposeFlex = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     [1, 1, 0],
//     { ease: easeInOut },
//   );
//   const purposeBg = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );
//   const purposeTextColor = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     ["#fff", "#fff", "#000"],
//   );
//   const purposeContentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.16, 0.25],
//     [1, 1, 0],
//   );

//   /* ================= MISSION ================= */
//   const missionFlex = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.55],
//     [0, 1, 1, 0],
//     { ease: easeInOut },
//   );
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.55],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );
//   const missionTextColor = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.55],
//     ["#000", "#fff", "#fff", "#000"],
//   );
//   const missionContentOpacity = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.52],
//     [0, 1, 1, 0],
//   );

//   /* ================= VALUES ================= */
//   const valuesFlex = useTransform(
//     scrollYProgress,
//     [0.2, 1, 0.73],
//     [0, 1, 1],
//     { ease: easeInOut },
//   );
//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.2, 0.6],
//     ["#ffffff", "#8F53A1"],
//   );
//   const valuesTextColor = useTransform(
//     scrollYProgress,
//     [0.2, 0.6],
//     ["#000", "#fff"],
//   );
//   const valuesContentOpacity = useTransform(
//     scrollYProgress,
//     [0.2, 0.6],
//     [0, 1],
//   );

//   return (
//     <div ref={containerRef} style={{ height: "350vh" }} className="relative">
//       <div className="sticky top-[70px] h-[calc(100vh-110px)] w-full bg-[#F5F5F5] py-2 px-[5%] overflow-hidden flex flex-col">
//         <div className="flex flex-col gap-[10px] h-full">
//           {/* PURPOSE */}
//           <motion.div
//             layout
//             style={{
//               flex: purposeFlex,
//               backgroundColor: purposeBg,
//               minHeight: "94px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-[400px] justify-between gap-12">
//               <div>
//                 <motion.h3
//                   style={{ color: purposeTextColor }}
//                   className="bw-m text-[36px] leading-tight "
//                 >
//                   <span className="bw-l">Our</span> Purpose
//                 </motion.h3>
//                 <motion.div style={{ opacity: purposeContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug"
//                   >
//                     Enable our customers succeed by proactively delivering agile
//                     solutions for accelerated growth.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: purposeContentOpacity }}
//                 className="w-full h-1/2 "
//               >
//                 <img
//                   src="/brand_journey/purpose_img.jpg"
//                   alt="Purpose"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             layout
//             style={{
//               flex: missionFlex,
//               backgroundColor: missionBg,
//               minHeight: "94px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-[400px] justify-between gap-12">
//               <div>
//                 <motion.h3
//                   style={{ color: missionTextColor }}
//                   className="bw-m text-[36px] leading-tight "
//                 >
//                   <span className="bw-l">Our</span> Mission
//                 </motion.h3>
//                 <motion.div style={{ opacity: missionContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug"
//                   >
//                     Make Horizon the dominant and preferred industrial and
//                     warehousing partner, sustainably delivering benchmark
//                     quality and superior returns.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: missionContentOpacity }}
//                 className="w-full h-1/2 "
//               >
//                 <img
//                   src="/brand_journey/mission_img.jpg"
//                   alt="Mission"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             layout
//             style={{
//               flex: valuesFlex,
//               backgroundColor: valuesBg,
//               minHeight: "94px",
//             }}
//             className="relative h-[400px] w-full overflow-hidden p-[20px]"
//           >
//             <div className="flex flex-col h-full overflow-hidden no-scrollbar">
//               <motion.h3
//                 style={{ color: valuesTextColor }}
//                 className="bw-m text-[36px] leading-tight mb-2"
//               >
//                 <span className="bw-l">Our</span> Values
//               </motion.h3>
//               <motion.div
//                 style={{ opacity: valuesContentOpacity }}
//                 className="flex flex-col gap-4 justify-between flex-1"
//               >
//                 <div className="flex flex-col gap-4">
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[16px] leading-snug"
//                   >
//                     Our values define who we are. These are the ideals that give
//                     us roots to anchor and wings to fly.
//                   </p>
//                   <div className="space-y-4 ">
//                     <ValueItem
//                       icon="/brand_journey/agility_icon.svg"
//                       title="AGILITY"
//                       desc="Be proactive and alert to stakeholder needs"
//                     />
//                     <ValueItem
//                       icon="/brand_journey/collabration_icon.svg"
//                       title="COLLABORATION"
//                       desc="Practise mutual respect and teamwork"
//                     />
//                     <ValueItem
//                       icon="/brand_journey/excellence_icon.svg"
//                       title="EXCELLENCE"
//                       desc="Establish and surpass benchmarks"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full h-40 flex-shrink-0">
//                   <img
//                     src="/brand_journey/value_img.jpg"
//                     alt="Values"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 items-center">
//       <div className="bg-white/10 p-2 shrink-0">
//         <img src={icon} alt={title} className="w-7 h-7" />
//       </div>
//       <div>
//         <h4 className="text-white bw-m text-[14px] uppercase tracking-wide">
//           {title}
//         </h4>
//         <p className="text-white/90 bw-l text-[12px] leading-tight">{desc}</p>
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
// import { motion, useScroll, useTransform } from "motion/react";
// import { easeInOut } from "framer-motion";

// export default function MissionMobileF() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= PURPOSE ================= */
//   const purposeFlex = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     [1, 1, 0],
//     { ease: easeInOut },
//   );
//   const purposeBg = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );
//   const purposeTextColor = useTransform(
//     scrollYProgress,
//     [0, 0.18, 0.28],
//     ["#fff", "#fff", "#000"],
//   );
//   const purposeContentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.16, 0.25],
//     [1, 1, 0],
//   );

//   /* ================= MISSION ================= */
//   const missionFlex = useTransform(
//     scrollYProgress,
//     [0.01, 0.33, 0.45, 0.58], // extended closing
//     [0, 1, 1, 0],
//     { ease: easeInOut },
//   );
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.58],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );
//   const missionTextColor = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.58],
//     ["#000", "#fff", "#fff", "#000"],
//   );
//   const missionContentOpacity = useTransform(
//     scrollYProgress,
//     [0.18, 0.33, 0.45, 0.55],
//     [0, 1, 1, 0],
//   );

//   /* ================= VALUES ================= */
//   const valuesFlex = useTransform(
//     scrollYProgress,
//     [0.02, 0.63, 0.73], // last section overlaps mission close
//     [0, 1, 1],
//     { ease: easeInOut },
//   );
//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.5, 0.63],
//     ["#ffffff", "#8F53A1"],
//   );
//   const valuesTextColor = useTransform(
//     scrollYProgress,
//     [0.5, 0.63],
//     ["#000", "#fff"],
//   );
//   const valuesContentOpacity = useTransform(
//     scrollYProgress,
//     [0.5, 0.63],
//     [0, 1],
//   );

//   return (
//     <div ref={containerRef} style={{ height: "300vh" }} className="relative">
//       <div className="sticky top-[70px] h-[calc(110vh-110px)] w-full bg-[#F5F5F5] px-[5%] overflow-hidden flex flex-col py-2">
//         <div className="flex flex-col gap-[10px] h-full">
//           {/* PURPOSE */}
//           <motion.div
//             layout
//             style={{
//               flex: purposeFlex,
//               backgroundColor: purposeBg,
//               minHeight: "94px",
//             }}
//             className="relative w-full overflow-hidden "
//           >
//             <div className="flex flex-col h-full justify-between">
//               <div className="p-[20px]">
//                 <motion.h3
//                   style={{ color: purposeTextColor }}
//                   className="bw-m text-[36px] leading-tight "
//                 >
//                   <span className="bw-l">Our</span> Purpose
//                 </motion.h3>
//                 <motion.div style={{ opacity: purposeContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug"
//                   >
//                     Enable our customers succeed by proactively delivering agile
//                     solutions for accelerated growth.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: purposeContentOpacity }}
//                 className="w-full h-1/2 "
//               >
//                 <img
//                   src="/brand_journey/purpose_img.jpg"
//                   alt="Purpose"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             layout
//             style={{
//               flex: missionFlex,
//               backgroundColor: missionBg,
//               minHeight: "94px",
//             }}
//             className="relative w-full overflow-hidden "
//           >
//             <div className="flex flex-col h-full justify-between">
//               <div className="p-[20px]">
//                 <motion.h3
//                   style={{ color: missionTextColor }}
//                   className="bw-m text-[36px] leading-tight "
//                 >
//                   <span className="bw-l">Our</span> Mission
//                 </motion.h3>
//                 <motion.div style={{ opacity: missionContentOpacity }}>
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[18px] leading-snug"
//                   >
//                     Make Horizon the dominant and preferred industrial and
//                     warehousing partner, sustainably delivering benchmark
//                     quality and superior returns.
//                   </p>
//                 </motion.div>
//               </div>
//               <motion.div
//                 style={{ opacity: missionContentOpacity }}
//                 className="w-full h-1/2 "
//               >
//                 <img
//                   src="/brand_journey/mission_img.jpg"
//                   alt="Mission"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             layout
//             style={{
//               flex: valuesFlex,
//               backgroundColor: valuesBg,
//               minHeight: "94px",
//             }}
//             className="relative w-full overflow-hidden"
//           >
//             <div className="flex flex-col h-full overflow-hidden no-scrollbar">
//               <motion.h3
//                 style={{ color: valuesTextColor }}
//                 className="bw-m p-5 text-[36px] leading-tight mb-0"
//               >
//                 <span className="bw-l">Our</span> Values
//               </motion.h3>
//               <motion.div
//                 style={{ opacity: valuesContentOpacity }}
//                 className="flex flex-col gap-4 flex-1"
//               >
//                 <div className="flex flex-col px-5 gap-4">
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[16px] leading-snug"
//                   >
//                     Our values define who we are. These are the ideals that give
//                     us roots to anchor and wings to fly.
//                   </p>
//                   <div className="space-y-2 mb-0">
//                     <ValueItem
//                       icon="/brand_journey/agility_icon.svg"
//                       title="AGILITY"
//                       desc="Be proactive and alert to stakeholder needs"
//                     />
//                     <ValueItem
//                       icon="/brand_journey/collabration_icon.svg"
//                       title="COLLABORATION"
//                       desc="Practise mutual respect and teamwork"
//                     />
//                     <ValueItem
//                       icon="/brand_journey/excellence_icon.svg"
//                       title="EXCELLENCE"
//                       desc="Establish and surpass benchmarks"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full h-1/2 flex-shrink-0">
//                   <img
//                     src="/brand_journey/value_img.jpg"
//                     alt="Values"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 items-center">
//       <div className="bg-white/10 p-2 shrink-0">
//         <img src={icon} alt={title} className="w-7 h-7" />
//       </div>
//       <div>
//         <h4 className="text-white bw-m text-[14px] uppercase tracking-wide">
//           {title}
//         </h4>
//         <p className="text-white/90 bw-l text-[12px] leading-tight">{desc}</p>
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
//
//
//
//
//
//
//

// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";
// import { easeInOut } from "framer-motion";

// export default function MissionMobileF() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= PURPOSE ================= */
//   const purposeFlex = useTransform(
//     scrollYProgress,
//     [0, 0.22, 0.36], // expanded ~25%
//     [1, 1, 0],
//     { ease: easeInOut },
//   );

//   const purposeBg = useTransform(
//     scrollYProgress,
//     [0, 0.22, 0.36],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );

//   const purposeTextColor = useTransform(
//     scrollYProgress,
//     [0, 0.22, 0.36],
//     ["#fff", "#fff", "#000"],
//   );

//   const purposeContentOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.2, 0.32],
//     [1, 1, 0],
//   );

//   /* ================= MISSION ================= */
//   const missionFlex = useTransform(
//     scrollYProgress,
//     [0.18, 0.38, 0.56, 0.72], // expanded ~25%
//     [0, 1, 1, 0],
//     { ease: easeInOut },
//   );

//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.18, 0.38, 0.56, 0.72],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );

//   const missionTextColor = useTransform(
//     scrollYProgress,
//     [0.18, 0.38, 0.56, 0.72],
//     ["#000", "#fff", "#fff", "#000"],
//   );

//   const missionContentOpacity = useTransform(
//     scrollYProgress,
//     [0.22, 0.38, 0.56, 0.68],
//     [0, 1, 1, 0],
//   );

//   /* ================= VALUES (UNCHANGED — BASELINE) ================= */
//   const valuesFlex = useTransform(
//     scrollYProgress,
//     [0.5, 0.63, 0.73],
//     [0, 1, 1],
//     { ease: easeInOut },
//   );

//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.5, 0.63],
//     ["#ffffff", "#8F53A1"],
//   );

//   const valuesTextColor = useTransform(
//     scrollYProgress,
//     [0.5, 0.63],
//     ["#000", "#fff"],
//   );

//   const valuesContentOpacity = useTransform(
//     scrollYProgress,
//     [0.5, 0.63],
//     [0, 1],
//   );

//   return (
//     <div ref={containerRef} style={{ height: "300vh" }} className="relative">
//       <div className="sticky top-[70px] h-[calc(140vh-110px)] w-ful bg-[#F5F5F5] px-[5%] overflow-hidden flex flex-col py-12">
//         <div className="flex flex-col gap-[10px] h-full">
//           {/* PURPOSE */}
//           <motion.div
//             layout="position" // IMPORTANT
//             style={{
//               flex: purposeFlex,
//               backgroundColor: purposeBg,
//               minHeight: 94,
//             }}
//             className="relative w-full overflow-hidden"
//           >
//             <div className="flex flex-col h-full justify-between">
//               <div className="p-5">
//                 <motion.h3
//                   style={{ color: purposeTextColor }}
//                   className="bw-m text-[36px] "
//                 >
//                   <span className="bw-l">Our</span> Purpose
//                 </motion.h3>
//                 <motion.p
//                   style={{ opacity: purposeContentOpacity }}
//                   className="bw-m text-[16px] leading-[140%] text-white"
//                 >
//                   Enable our customers succeed by proactively delivering agile
//                   solutions for accelerated growth.
//                 </motion.p>
//               </div>
//               <motion.div
//                 style={{ opacity: purposeContentOpacity }}
//                 className="w-full h-1/2"
//               >
//                 <img
//                   src="/brand_journey/purpose_img.jpg"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             layout="position" // IMPORTANT
//             style={{
//               flex: missionFlex,
//               backgroundColor: missionBg,
//               minHeight: 94,
//             }}
//             className="relative w-full overflow-hidden"
//           >
//             <div className="flex flex-col h-full justify-between">
//               <div className="p-5">
//                 <motion.h3
//                   style={{ color: missionTextColor }}
//                   className="bw-m text-[36px] "
//                 >
//                   <span className="bw-l">Our</span> Mission
//                 </motion.h3>
//                 <motion.p
//                   style={{ opacity: missionContentOpacity }}
//                   className="bw-m text-[16px] leading-[140%] text-white"
//                 >
//                   Make Horizon the dominant and preferred industrial and
//                   warehousing partner, sustainably delivering benchmark quality
//                   and superior returns.
//                 </motion.p>
//               </div>
//               <motion.div
//                 style={{ opacity: missionContentOpacity }}
//                 className="w-full h-1/2"
//               >
//                 <img
//                   src="/brand_journey/mission_img.jpg"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//           {/* VALUES */}
//           <motion.div
//             layout
//             style={{
//               flex: valuesFlex,
//               backgroundColor: valuesBg,
//               minHeight: "94px",
//             }}
//             className="relative w-full overflow-hidden"
//           >
//             <div className="flex flex-col h-full overflow-hidden no-scrollbar">
//               <motion.h3
//                 style={{ color: valuesTextColor }}
//                 className="bw-m p-5 text-[36px] leading-tight mb-0"
//               >
//                 <span className="bw-l">Our</span> Values
//               </motion.h3>
//               <motion.div
//                 style={{ opacity: valuesContentOpacity }}
//                 className="flex flex-col gap-4 flex-1"
//               >
//                 <div className="flex flex-col px-5 gap-4">
//                   <p
//                     style={{ color: "#fff" }}
//                     className="bw-m text-[16px] leading-snug"
//                   >
//                     Our values define who we are. These are the ideals that give
//                     us roots to anchor and wings to fly.
//                   </p>
//                   <div className="space-y-2 mb-0">
//                     <ValueItem
//                       icon="/brand_journey/agility_icon.svg"
//                       title="AGILITY"
//                       desc="Be proactive and alert to stakeholder needs"
//                     />
//                     <ValueItem
//                       icon="/brand_journey/collabration_icon.svg"
//                       title="COLLABORATION"
//                       desc="Practise mutual respect and teamwork"
//                     />
//                     <ValueItem
//                       icon="/brand_journey/excellence_icon.svg"
//                       title="EXCELLENCE"
//                       desc="Establish and surpass benchmarks"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full h-1/2 flex-shrink-0">
//                   <img
//                     src="/brand_journey/value_img.jpg"
//                     alt="Values"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 mb-2">
//       <img src={icon} className="w-7 h-7" />
//       <div>
//         <h4 className="bw-m text-white text-[14px]">{title}</h4>
//         <p className="bw-l text-white/80 text-[12px]">{desc}</p>
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
// import { motion, useScroll, useTransform, useSpring } from "motion/react";

// const COLLAPSED = 64;
// const EXPANDED = 420; // first and second card max height

// export default function MissionMobileF() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 90,
//     damping: 25,
//     restDelta: 0.001,
//   });

//   /* ===== PURPOSE ===== */
//   const purposeMaxH = useTransform(
//     smooth,
//     [0, 0.22, 0.36],
//     [EXPANDED, EXPANDED, COLLAPSED],
//   );
//   const purposeBg = useTransform(
//     smooth,
//     [0, 0.22, 0.36],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );
//   const purposeText = useTransform(
//     smooth,
//     [0, 0.22, 0.36],
//     ["#fff", "#fff", "#000"],
//   );
//   const purposeOpacity = useTransform(smooth, [0, 0.2, 0.32], [1, 1, 0]);

//   /* ===== MISSION ===== */
//   const missionMaxH = useTransform(
//     smooth,
//     [0.18, 0.38, 0.56, 0.72],
//     [COLLAPSED, EXPANDED, EXPANDED, COLLAPSED],
//   );
//   const missionBg = useTransform(
//     smooth,
//     [0.18, 0.38, 0.56, 0.72],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );
//   const missionText = useTransform(
//     smooth,
//     [0.18, 0.38, 0.56, 0.72],
//     ["#000", "#fff", "#fff", "#000"],
//   );
//   const missionOpacity = useTransform(
//     smooth,
//     [0.22, 0.38, 0.56, 0.68],
//     [0, 1, 1, 0],
//   );

//   /* ===== VALUES (fills remaining space) ===== */
//   const valuesBg = useTransform(smooth, [0.5, 0.63], ["#ffffff", "#8F53A1"]);
//   const valuesText = useTransform(smooth, [0.5, 0.63], ["#000", "#fff"]);
//   const valuesOpacity = useTransform(smooth, [0.5, 0.63], [0, 1]);

//   return (
//     <div ref={containerRef} className="relative h-[300vh]">
//       <div className="sticky top-[70px] bg-[#F5F5F5] px-[5%] py-6 h-fit overflow-hidden">
//         <div className="flex flex-col gap-[10px]">
//           {/* PURPOSE */}
//           <motion.div
//             style={{ maxHeight: purposeMaxH, backgroundColor: purposeBg }}
//             className="overflow-hidden"
//           >
//             <div className="p-5">
//               <motion.h3 style={{ color: purposeText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Purpose
//               </motion.h3>
//               <motion.p
//                 style={{ opacity: purposeOpacity }}
//                 className="text-[16px] leading-[140%] text-white"
//               >
//                 Enable our customers succeed by proactively delivering agile
//                 solutions for accelerated growth.
//               </motion.p>
//             </div>
//             <motion.img
//               style={{ opacity: purposeOpacity }}
//               src="/brand_journey/purpose_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Purpose"
//             />
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             style={{ maxHeight: missionMaxH, backgroundColor: missionBg }}
//             className="overflow-hidden"
//           >
//             <div className="p-5">
//               <motion.h3 style={{ color: missionText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Mission
//               </motion.h3>
//               <motion.p
//                 style={{ opacity: missionOpacity }}
//                 className="text-[16px] leading-[140%] text-white"
//               >
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </motion.p>
//             </div>
//             <motion.img
//               style={{ opacity: missionOpacity }}
//               src="/brand_journey/mission_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Mission"
//             />
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             style={{ flexGrow: 1, backgroundColor: valuesBg }}
//             className="overflow-hidden"
//           >
//             <motion.h3
//               style={{ color: valuesText }}
//               className="p-5 text-[36px]"
//             >
//               <span className="font-light">Our</span> Values
//             </motion.h3>
//             <motion.div
//               style={{ opacity: valuesOpacity }}
//               className="flex flex-col gap-4 flex-1"
//             >
//               <div className="flex flex-col px-5 gap-4">
//                 <p className="text-white text-[16px] leading-snug">
//                   Our values define who we are. These are the ideals that give
//                   us roots to anchor and wings to fly.
//                 </p>
//                 <div className="space-y-2 mb-0">
//                   <ValueItem
//                     icon="/brand_journey/agility_icon.svg"
//                     title="AGILITY"
//                     desc="Be proactive and alert to stakeholder needs"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/collabration_icon.svg"
//                     title="COLLABORATION"
//                     desc="Practise mutual respect and teamwork"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/excellence_icon.svg"
//                     title="EXCELLENCE"
//                     desc="Establish and surpass benchmarks"
//                   />
//                 </div>
//               </div>
//               <div className="w-full h-1/2 flex-shrink-0">
//                 <img
//                   src="/brand_journey/value_img.jpg"
//                   alt="Values"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 mb-2">
//       <img src={icon} className="w-7 h-7" alt="" />
//       <div>
//         <h4 className="text-white text-[14px]">{title}</h4>
//         <p className="text-white/80 text-[12px]">{desc}</p>
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
//
//
//
//
//
// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "motion/react";

// const COLLAPSED = 74;
// const EXPANDED = 420;

// export default function MissionMobileF() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 90,
//     damping: 25,
//     restDelta: 0.001,
//   });

//   /* ===== PURPOSE ===== */
//   const purposeMaxH = useTransform(
//     smooth,
//     [0, 0.22, 0.36],
//     [EXPANDED, EXPANDED, COLLAPSED],
//   );
//   const purposeBg = useTransform(
//     smooth,
//     [0, 0.22, 0.36],
//     ["#0db14b", "#0db14b", "#ffffff"],
//   );
//   const purposeText = useTransform(
//     smooth,
//     [0, 0.22, 0.36],
//     ["#fff", "#fff", "#000"],
//   );
//   const purposeOpacity = useTransform(smooth, [0, 0.2, 0.32], [1, 1, 0]);
//   const purposePadding = useTransform(
//     smooth,
//     [0, 0.22, 0.36],
//     // [20, 20, 8], // p-5 → p-2
//     [12, 12, 12], // p-5 → p-2
//   );

//   /* ===== MISSION ===== */
//   const missionMaxH = useTransform(
//     smooth,
//     [0.18, 0.38, 0.56, 0.72],
//     [COLLAPSED, EXPANDED, EXPANDED, COLLAPSED],
//   );
//   const missionBg = useTransform(
//     smooth,
//     [0.18, 0.38, 0.56, 0.72],
//     ["#ffffff", "#f47920", "#f47920", "#ffffff"],
//   );
//   const missionText = useTransform(
//     smooth,
//     [0.18, 0.38, 0.56, 0.72],
//     ["#000", "#fff", "#fff", "#000"],
//   );
//   const missionOpacity = useTransform(
//     smooth,
//     [0.22, 0.38, 0.56, 0.68],
//     [0, 1, 1, 0],
//   );
//   // const missionPadding = useTransform(smooth, [0.18, 0.38, 0.72], [8, 20, 8]);
//   const missionPadding = useTransform(smooth, [0.18, 0.38, 0.72], [12, 12, 12]);

//   /* ===== VALUES ===== */
//   const valuesBg = useTransform(smooth, [0.5, 0.63], ["#ffffff", "#8F53A1"]);
//   const valuesText = useTransform(smooth, [0.5, 0.63], ["#000", "#fff"]);
//   const valuesOpacity = useTransform(smooth, [0.5, 0.63], [0, 1]);
//   // const valuePadding = useTransform(smooth, [0.5, 0.63], [8, 20]);
//   const valuePadding = useTransform(smooth, [0.5, 0.63], [12, 12]);

//   return (
//     <div ref={containerRef} className="relative h-[300vh]">
//       <div className="sticky top-[70px] bg-[#F5F5F5] px-[5%] py-6 h-fit overflow-hidden">
//         <div className="flex flex-col gap-[10px]">
//           {/* PURPOSE */}
//           <motion.div
//             style={{ maxHeight: purposeMaxH, backgroundColor: purposeBg }}
//             className="overflow-hidden"
//           >
//             <motion.div style={{ padding: purposePadding }}>
//               <motion.h3 style={{ color: purposeText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Purpose
//               </motion.h3>
//               <motion.p
//                 style={{ opacity: purposeOpacity }}
//                 className="text-[16px] leading-[140%] text-white"
//               >
//                 Enable our customers succeed by proactively delivering agile
//                 solutions for accelerated growth.
//               </motion.p>
//             </motion.div>

//             <motion.img
//               style={{ opacity: purposeOpacity }}
//               src="/brand_journey/purpose_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Purpose"
//             />
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             style={{ maxHeight: missionMaxH, backgroundColor: missionBg }}
//             className="overflow-hidden"
//           >
//             <motion.div style={{ padding: missionPadding }}>
//               <motion.h3 style={{ color: missionText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Mission
//               </motion.h3>
//               <motion.p
//                 style={{ opacity: missionOpacity }}
//                 className="text-[16px] leading-[140%] text-white"
//               >
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </motion.p>
//             </motion.div>

//             <motion.img
//               style={{ opacity: missionOpacity }}
//               src="/brand_journey/mission_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Mission"
//             />
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             style={{
//               flexGrow: 1,
//               backgroundColor: valuesBg,
//               // padding: missionPadding,
//             }}
//             className="overflow-hidden"
//           >
//             <motion.h3
//               style={{
//                 color: valuesText,
//                 paddingLeft: valuePadding,
//                 paddingRight: valuePadding,
//               }}
//               className="text-[36px]"
//             >
//               <span className="font-light">Our</span> Values
//             </motion.h3>

//             <motion.div
//               style={{ opacity: valuesOpacity }}
//               className="flex flex-col gap-4 flex-1"
//             >
//               <div className="flex flex-col px-3 gap-4">
//                 <p className="text-white text-[16px] leading-snug">
//                   Our values define who we are. These are the ideals that give
//                   us roots to anchor and wings to fly.
//                 </p>

//                 <div className="space-y-2">
//                   <ValueItem
//                     icon="/brand_journey/agility_icon.svg"
//                     title="AGILITY"
//                     desc="Be proactive and alert to stakeholder needs"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/collabration_icon.svg"
//                     title="COLLABORATION"
//                     desc="Practise mutual respect and teamwork"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/excellence_icon.svg"
//                     title="EXCELLENCE"
//                     desc="Establish and surpass benchmarks"
//                   />
//                 </div>
//               </div>

//               <div className="w-full h-1/2 flex-shrink-0">
//                 <img
//                   src="/brand_journey/value_img.jpg"
//                   alt="Values"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 mb-2">
//       <img src={icon} className="w-7 h-7" alt="" />
//       <div>
//         <h4 className="text-white text-[14px]">{title}</h4>
//         <p className="text-white/80 text-[12px]">{desc}</p>
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
// import { motion, useScroll, useTransform, useSpring } from "motion/react";

// const COLLAPSED = 74;
// const EXPANDED = 420;

// export default function MissionMobileF() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 70,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   /* ================= PURPOSE ================= */
//   const purposeMaxH = useTransform(smooth, [0, 0.32], [EXPANDED, COLLAPSED]);

//   const purposeOpacity = useTransform(smooth, [0.12, 0.32], [1, 0]);

//   const purposeBg = useTransform(smooth, [0, 0.32], ["#0db14b", "#0db14b"]);

//   const purposeText = useTransform(smooth, [0, 0.32], ["#ffffff", "#ffffff"]);

//   /* ================= MISSION ================= */
//   const missionMaxH = useTransform(
//     smooth,
//     [0, 0.5, 0.78],
//     [COLLAPSED, EXPANDED, COLLAPSED],
//   );

//   const missionOpacity = useTransform(smooth, [0.22, 0.38, 0.65], [0, 1, 0]);

//   const missionBg = useTransform(
//     smooth,
//     [0.18, 0.5, 0.78],
//     ["#ffffff", "#f47920", "#f47920"],
//   );

//   const missionText = useTransform(
//     smooth,
//     [0.18, 0.5, 0.78],
//     ["#000000", "#ffffff", "#ffffff"],
//   );

//   /* ================= VALUES ================= */
//   const valuesOpacity = useTransform(smooth, [0.55, 0.75], [0, 1]);

//   const valuesBg = useTransform(smooth, [0.55, 0.75], ["#ffffff", "#8F53A1"]);

//   const valuesText = useTransform(smooth, [0.55, 0.75], ["#000000", "#ffffff"]);

//   return (
//     <div ref={containerRef} className="relative h-[300vh]">
//       <div className="sticky top-[70px] bg-[#F5F5F5] px-[5%] py-6 overflow-hidden">
//         <div className="flex flex-col gap-[10px]">
//           {/* PURPOSE */}
//           <motion.div
//             style={{ maxHeight: purposeMaxH, backgroundColor: purposeBg }}
//             className="overflow-hidden"
//           >
//             <div className="p-3">
//               <motion.h3 style={{ color: purposeText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Purpose
//               </motion.h3>
//               <motion.p
//                 style={{ opacity: purposeOpacity }}
//                 className="text-[16px] leading-[140%] text-white"
//               >
//                 Enable our customers succeed by proactively delivering agile
//                 solutions for accelerated growth.
//               </motion.p>
//             </div>

//             <motion.img
//               // style={{ opacity: purposeOpacity }}
//               src="/brand_journey/purpose_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Purpose"
//             />
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             style={{ maxHeight: missionMaxH, backgroundColor: missionBg }}
//             className="overflow-hidden"
//           >
//             <div className="p-3">
//               <motion.h3 style={{ color: missionText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Mission
//               </motion.h3>
//               <motion.p
//                 style={{ opacity: missionOpacity }}
//                 className="text-[16px] leading-[140%] text-white"
//               >
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </motion.p>
//             </div>

//             <motion.img
//               // style={{ opacity: missionOpacity }}
//               src="/brand_journey/mission_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Mission"
//             />
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             style={{ backgroundColor: valuesBg }}
//             className="overflow-hidden"
//           >
//             <motion.h3
//               style={{ color: valuesText }}
//               className="text-[36px] p-3"
//             >
//               <span className="font-light">Our</span> Values
//             </motion.h3>

//             <motion.div className="flex flex-col gap-4">
//               <motion.div className="px-3" style={{ opacity: valuesOpacity }}>
//                 <p className="text-white text-[16px] leading-snug">
//                   Our values define who we are. These are the ideals that give
//                   us roots to anchor and wings to fly.
//                 </p>

//                 <div className="space-y-2 mt-3">
//                   <ValueItem
//                     icon="/brand_journey/agility_icon.svg"
//                     title="AGILITY"
//                     desc="Be proactive and alert to stakeholder needs"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/collabration_icon.svg"
//                     title="COLLABORATION"
//                     desc="Practise mutual respect and teamwork"
//                   />
//                   <ValueItem
//                     icon="/brand_journey/excellence_icon.svg"
//                     title="EXCELLENCE"
//                     desc="Establish and surpass benchmarks"
//                   />
//                 </div>
//               </motion.div>

//               <img
//                 src="/brand_journey/value_img.jpg"
//                 alt="Values"
//                 className="w-full h-[220px] object-cover"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ValueItem({ icon, title, desc }) {
//   return (
//     <div className="flex gap-3 mb-2">
//       <img src={icon} className="w-7 h-7" alt="" />
//       <div>
//         <h4 className="text-white text-[14px]">{title}</h4>
//         <p className="text-white/80 text-[12px]">{desc}</p>
//       </div>
//     </div>
//   );
// }
