// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "motion/react";

// const COLLAPSED = 94;
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
//   // const purposeOpacity = useTransform(smooth, [0.12, 0.32], [1, 0]);
//   const purposeOpacity = useTransform(smooth, [0.12, 0.32], [1, 1]);
//   const purposeBg = useTransform(smooth, [0, 0.32], ["#0db14b", "#0db14b"]);
//   const purposeText = useTransform(smooth, [0, 0.32], ["#ffffff", "#ffffff"]);

//   /* ================= MISSION ================= */
//   const missionMaxH = useTransform(
//     smooth,
//     [0, 0.32, 0.78],
//     [COLLAPSED, EXPANDED, COLLAPSED],
//   );
//   // const missionOpacity = useTransform(smooth, [0.22, 0.38, 0.65], [0, 1, 0]);
//   const missionOpacity = useTransform(smooth, [0.22, 0.38, 0.65], [0, 1, 1]);
//   const missionBg = useTransform(
//     smooth,
//     [0, 0.32, 0.78],
//     ["#ffffff", "#f47920", "#f47920"],
//   );
//   const missionText = useTransform(
//     smooth,
//     [0, 0.32, 0.78],
//     ["#000000", "#ffffff", "#ffffff"],
//   );

//   /* ================= VALUES (ONLY ADDITION) ================= */
//   // const valuesOpacity = useTransform(smooth, [0.55, 0.75], [0, 1]);
//   const valuesOpacity = useTransform(smooth, [0.55, 0.75], [1, 1]);
//   const valuesBg = useTransform(smooth, [0.55, 0.75], ["#ffffff", "#8F53A1"]);
//   const valuesText = useTransform(smooth, [0.55, 0.75], ["#000000", "#ffffff"]);

//   // ✅ NEW: height animation for Values card
//   const valuesMaxH = useTransform(
//     smooth,
//     [0, 0.75],
//     [COLLAPSED, EXPANDED + 100],
//   );

//   return (
//     <div ref={containerRef} className="relative h-[300vh]">
//       <div className="sticky top-[70px] bg-[#F5F5F5] px-[5%] py-6 overflow-hidden">
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
//                 className="text-[18px] mt-5  leading-[140%] text-white"
//               >
//                 Enable our customers succeed by proactively delivering agile
//                 solutions for accelerated growth.
//               </motion.p>
//             </div>

//             <motion.img
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
//                 className="text-[18px] mt-5  leading-[140%] text-white"
//               >
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </motion.p>
//             </div>

//             <motion.img
//               src="/brand_journey/mission_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Mission"
//             />
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             style={{
//               backgroundColor: valuesBg,
//               maxHeight: valuesMaxH, // ✅ ONLY CHANGE APPLIED HERE
//             }}
//             className="overflow-hidden"
//           >
//             <motion.h3
//               style={{ color: valuesText }}
//               className="text-[36px] p-5"
//             >
//               <span className="font-light">Our</span> Values
//             </motion.h3>

//             <motion.div className="flex flex-col gap-4">
//               <motion.div className="px-5" style={{ opacity: valuesOpacity }}>
//                 <p className="text-white text-[18px]  leading-snug">
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
//     <div className="flex gap-5 mb-2">
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
//
// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";

// const COLLAPSED = 94;
// const EXPANDED = 420;

// export default function MissionMobileF() {
//   const containerRef = useRef(null); // ✅ Plain JS

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= PURPOSE ================= */
//   const purposeMaxH = useTransform(
//     scrollYProgress,
//     [0, 0.32],
//     [EXPANDED, COLLAPSED],
//   );
//   const purposeOpacity = useTransform(scrollYProgress, [0.12, 0.32], [1, 1]);
//   const purposeBg = "#0db14b";
//   const purposeText = "#ffffff";

//   /* ================= MISSION ================= */
//   const missionMaxH = useTransform(
//     scrollYProgress,
//     [0, 0.32, 0.78],
//     [COLLAPSED, EXPANDED, COLLAPSED],
//   );
//   const missionOpacity = useTransform(
//     scrollYProgress,
//     [0.22, 0.38, 0.65],
//     [0, 1, 1],
//   );
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.18, 0.32],
//     ["#ffffff", "#f47920"],
//   );
//   const missionText = useTransform(
//     scrollYProgress,
//     [0.18, 0.32],
//     ["#000000", "#ffffff"],
//   );

//   /* ================= VALUES ================= */
//   const valuesMaxH = useTransform(
//     scrollYProgress,
//     [0, 0.75],
//     [COLLAPSED, EXPANDED + 100],
//   );
//   const valuesOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.55, 0.75],
//     ["#ffffff", "#8F53A1"],
//   );
//   const valuesText = useTransform(
//     scrollYProgress,
//     [0.55, 0.75],
//     ["#000000", "#ffffff"],
//   );

//   return (
//     <div ref={containerRef} className="relative h-[300vh]">
//       <div className="sticky top-[70px] bg-[#F5F5F5] px-[5%] py-6 overflow-hidden">
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
//                 className="text-[18px] mt-5 leading-[140%] text-white"
//               >
//                 Enable our customers succeed by proactively delivering agile
//                 solutions for accelerated growth.
//               </motion.p>
//             </div>
//             <img
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
//                 className="text-[18px] mt-5 leading-[140%] text-white"
//               >
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </motion.p>
//             </div>
//             <img
//               src="/brand_journey/mission_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Mission"
//             />
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             style={{ maxHeight: valuesMaxH, backgroundColor: valuesBg }}
//             className="overflow-hidden"
//           >
//             <motion.h3
//               style={{ color: valuesText }}
//               className="text-[36px] p-5"
//             >
//               <span className="font-light">Our</span> Values
//             </motion.h3>
//             <motion.div className="flex flex-col gap-4">
//               <motion.div className="px-5" style={{ opacity: valuesOpacity }}>
//                 <p className="text-white text-[18px] leading-snug">
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
//     <div className="flex gap-5 mb-2">
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
// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";

// const COLLAPSED = 94;
// const EXPANDED = 420;

// export default function MissionMobileF() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= PURPOSE ================= */
//   const purposeMaxH = useTransform(
//     scrollYProgress,
//     [0, 0.32],
//     [EXPANDED, COLLAPSED],
//   );
//   const purposeOpacity = useTransform(scrollYProgress, [0.12, 0.32], [1, 1]);
//   const purposeBg = "#0db14b";
//   const purposeText = "#ffffff";

//   /* ================= MISSION ================= */
//   const missionMaxH = useTransform(
//     scrollYProgress,
//     [0, 0.32, 0.78],
//     [COLLAPSED, EXPANDED, COLLAPSED],
//   );
//   const missionOpacity = useTransform(
//     scrollYProgress,
//     [0.22, 0.38, 0.65],
//     [0, 1, 1],
//   );
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.18, 0.32],
//     ["#ffffff", "#f47920"],
//   );
//   const missionText = useTransform(
//     scrollYProgress,
//     [0.18, 0.32],
//     ["#000000", "#ffffff"],
//   );

//   /* ================= VALUES ================= */
//   const valuesMaxH = useTransform(
//     scrollYProgress,
//     [0, 0.75],
//     [COLLAPSED, EXPANDED + 100],
//   );
//   const valuesOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
//   const valuesBg = useTransform(
//     scrollYProgress,
//     [0.55, 0.75],
//     ["#ffffff", "#8F53A1"],
//   );
//   const valuesText = useTransform(
//     scrollYProgress,
//     [0.55, 0.75],
//     ["#000000", "#ffffff"],
//   );

//   return (
//     <div ref={containerRef} className="relative h-[300vh]">
//       <div className="sticky top-[70px] bg-[#F5F5F5] px-[5%] py-6 overflow-hidden">
//         <div className="flex flex-col gap-[10px]">
//           {/* PURPOSE */}
//           <motion.div
//             style={{ maxHeight: purposeMaxH, backgroundColor: purposeBg }}
//             className="overflow-hidden relative"
//           >
//             <div className="p-5 relative">
//               <motion.h3 style={{ color: purposeText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Purpose
//               </motion.h3>
//               <motion.p
//                 style={{ opacity: purposeOpacity }}
//                 className="text-[18px] mt-5 leading-[140%] text-white"
//               >
//                 Enable our customers succeed by proactively delivering agile
//                 solutions for accelerated growth.
//               </motion.p>

//               {/* Arrow */}
//               <img
//                 src="/brand_journey/purpose_arrow.svg"
//                 className="absolute right-5 top-auto -bottom-10 w-[32px]"
//                 alt=""
//               />
//             </div>

//             <img
//               src="/brand_journey/purpose_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Purpose"
//             />
//           </motion.div>

//           {/* MISSION */}
//           <motion.div
//             style={{ maxHeight: missionMaxH, backgroundColor: missionBg }}
//             className="overflow-hidden relative"
//           >
//             <div className="p-5 relative">
//               <motion.h3 style={{ color: missionText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Mission
//               </motion.h3>
//               <motion.p
//                 style={{ opacity: missionOpacity }}
//                 className="text-[18px] mt-5 leading-[140%] text-white"
//               >
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </motion.p>

//               {/* Arrow */}
//               <img
//                 src="/brand_journey/purpose_arrow.svg"
//                 className="absolute right-5 top-auto -bottom-10 w-[32px]"
//                 alt=""
//               />
//             </div>

//             <img
//               src="/brand_journey/mission_img.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Mission"
//             />
//           </motion.div>

//           {/* VALUES */}
//           <motion.div
//             style={{ maxHeight: valuesMaxH, backgroundColor: valuesBg }}
//             className="overflow-hidden relative"
//           >
//             <div className="relative p-5">
//               <motion.h3 style={{ color: valuesText }} className="text-[36px]">
//                 <span className="font-light">Our</span> Values
//               </motion.h3>

//               {/* Arrow */}
//               <img
//                 src="/brand_journey/value_arrow.svg"
//                 className="absolute right-5 top-auto -bottom-10 w-[32px]"
//                 alt=""
//               />
//             </div>

//             <motion.div className="flex flex-col gap-4">
//               <motion.div className="px-5" style={{ opacity: valuesOpacity }}>
//                 <p className="text-white text-[18px] leading-snug">
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
//     <div className="flex gap-5 mb-2">
//       <img src={icon} className="w-7 h-7" alt="" />
//       <div>
//         <h4 className="text-white text-[14px]">{title}</h4>
//         <p className="text-white/80 text-[12px]">{desc}</p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const COLLAPSED = 94;
const EXPANDED = 420;

export default function MissionMobileF() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ================= PURPOSE ================= */
  const purposeMaxH = useTransform(
    scrollYProgress,
    [0, 0.32],
    [EXPANDED, COLLAPSED],
  );
  const purposeOpacity = useTransform(scrollYProgress, [0.12, 0.32], [1, 1]);
  const purposeBg = "#0db14b";
  const purposeText = "#ffffff";

  /* ================= MISSION ================= */
  const missionMaxH = useTransform(
    scrollYProgress,
    [0, 0.32, 0.78],
    [COLLAPSED, EXPANDED, COLLAPSED],
  );
  const missionOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.38, 0.65],
    [0, 1, 1],
  );
  const missionBg = useTransform(
    scrollYProgress,
    [0.18, 0.32],
    ["#ffffff", "#f47920"],
  );
  const missionText = useTransform(
    scrollYProgress,
    [0.18, 0.32],
    ["#000000", "#ffffff"],
  );

  /* ================= VALUES ================= */
  const valuesMaxH = useTransform(
    scrollYProgress,
    [0, 0.75],
    [COLLAPSED, EXPANDED + 100],
  );
  const valuesOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const valuesBg = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    ["#ffffff", "#8F53A1"],
  );
  const valuesText = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    ["#000000", "#ffffff"],
  );

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-[70px] bg-[#F5F5F5] px-[5%] py-6 overflow-hidden">
        <div className="flex flex-col gap-[10px]">
          {/* PURPOSE */}
          <motion.div
            style={{ maxHeight: purposeMaxH, backgroundColor: purposeBg }}
            className="overflow-hidden relative"
          >
            <div className="p-5 relative overflow-hidden">
              <motion.h3 style={{ color: purposeText }} className="text-[36px]">
                <span className="font-light">Our</span> Purpose
              </motion.h3>
              <motion.p
                style={{ opacity: purposeOpacity }}
                className="text-[18px] mt-5 leading-[140%] text-white"
              >
                Enable our customers succeed by proactively delivering agile
                solutions for accelerated growth.
              </motion.p>

              {/* Arrow */}
              <img
                src="/brand_journey/purpose_arrow.svg"
                className="absolute right-5 top-auto -bottom-10 w-[70%]"
                alt=""
              />
            </div>

            <img
              src="/brand_journey/purpose_img.jpg"
              className="w-full h-[220px] object-cover"
              alt="Purpose"
            />
          </motion.div>

          {/* MISSION */}
          <motion.div
            style={{ maxHeight: missionMaxH, backgroundColor: missionBg }}
            className="overflow-hidden relative"
          >
            <div className="p-5 relative overflow-hidden">
              <motion.h3 style={{ color: missionText }} className="text-[36px]">
                <span className="font-light">Our</span> Mission
              </motion.h3>
              <motion.p
                style={{ opacity: missionOpacity }}
                className="text-[18px] mt-5 leading-[140%] text-white"
              >
                Make Horizon the dominant and preferred industrial and
                warehousing partner, sustainably delivering benchmark quality
                and superior returns.
              </motion.p>

              {/* Arrow */}
              <img
                src="/brand_journey/purpose_arrow.svg"
                className="absolute right-5 top-auto -bottom-10 w-[70%]"
                alt=""
              />
            </div>

            <img
              src="/brand_journey/mission_img.jpg"
              className="w-full h-[220px] object-cover"
              alt="Mission"
            />
          </motion.div>

          {/* VALUES */}
          <motion.div
            style={{ maxHeight: valuesMaxH, backgroundColor: valuesBg }}
            className="overflow-hidden relative"
          >
            <div className="relative p-5 overflow-hidden">
              <motion.h3 style={{ color: valuesText }} className="text-[36px]">
                <span className="font-light">Our</span> Values
              </motion.h3>

              {/* Arrow */}
              <img
                src="/brand_journey/value_arrow.svg"
                className="absolute right-5 top-auto -bottom-10 w-[70%]"
                alt=""
              />
            </div>

            <motion.div className="flex flex-col gap-4">
              <motion.div className="px-5" style={{ opacity: valuesOpacity }}>
                <p className="text-white text-[18px] leading-snug">
                  Our values define who we are. These are the ideals that give
                  us roots to anchor and wings to fly.
                </p>
                <div className="space-y-2 mt-3">
                  <ValueItem
                    icon="/brand_journey/agility_icon.svg"
                    title="AGILITY"
                    desc="Be proactive and alert to stakeholder needs"
                  />
                  <ValueItem
                    icon="/brand_journey/collabration_icon.svg"
                    title="COLLABORATION"
                    desc="Practise mutual respect and teamwork"
                  />
                  <ValueItem
                    icon="/brand_journey/excellence_icon.svg"
                    title="EXCELLENCE"
                    desc="Establish and surpass benchmarks"
                  />
                </div>
              </motion.div>

              <img
                src="/brand_journey/value_img.jpg"
                alt="Values"
                className="w-full h-[220px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ValueItem({ icon, title, desc }) {
  return (
    <div className="flex gap-5 mb-2">
      <img src={icon} className="w-7 h-7" alt="" />
      <div>
        <h4 className="text-white text-[14px]">{title}</h4>
        <p className="text-white/80 text-[12px]">{desc}</p>
      </div>
    </div>
  );
}
