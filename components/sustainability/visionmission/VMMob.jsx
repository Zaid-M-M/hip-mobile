// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";

// const COLLAPSED = 94;
// const EXPANDED = 540; // Increased slightly to accommodate the 4 icon items

// export default function VMMob() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= ESG VISION (Card 1) ================= */
//   // Starts expanded, collapses as we scroll
//   const visionMaxH = useTransform(
//     scrollYProgress,
//     [0, 0.45],
//     [EXPANDED, COLLAPSED],
//   );
//   const visionOpacity = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);
//   const visionBg = "#0db14b";

//   /* ================= ESG MISSION (Card 2) ================= */
//   // Starts collapsed, expands as Card 1 collapses
//   const missionMaxH = useTransform(
//     scrollYProgress,
//     [0.1, 0.55],
//     [COLLAPSED, EXPANDED + 100], // Extra space for list items
//   );
//   const missionOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.1, 0.45],
//     ["#ffffff", "#8A52A0"], // White to Purple transition
//   );
//   const missionText = useTransform(
//     scrollYProgress,
//     [0.1, 0.45],
//     ["#000000", "#ffffff"],
//   );

//   return (
//     <div ref={containerRef} className="relative h-[250vh] bg-[#F5F5F5]">
//       <div className="sticky top-[70px] px-[5%] py-6 overflow-hidden">
//         <div className="flex flex-col gap-[10px]">
//           {/* ESG VISION CARD */}
//           <motion.div
//             style={{ maxHeight: visionMaxH, backgroundColor: visionBg }}
//             className="overflow-hidden relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//           >
//             <div className="p-6 relative overflow-hidden">
//               <h3 className="text-[32px] text-white bw-m mb-2">
//                 ESG Vision
//               </h3>
//               <motion.p
//                 style={{ opacity: visionOpacity }}
//                 className="text-[16px] leading-[1.4] text-white"
//               >
//                 To set new benchmarks for India’s industrial and logistics
//                 sector by delivering more than spaces — building responsible,
//                 future-ready ecosystems that serve our customers, communities,
//                 and climate.
//               </motion.p>

//               {/* Decorative Plant Image from Desktop */}
//               <img
//                 src="/sustainability/plant3.png"
//                 className="absolute right-0 top-0 w-24 opacity-50"
//                 alt=""
//               />
//             </div>

//             <img
//               src="/sustainability/ripple.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Vision"
//             />
//           </motion.div>

//           {/* ESG MISSION CARD */}
//           <motion.div
//             style={{ maxHeight: missionMaxH, backgroundColor: missionBg }}
//             className="overflow-hidden relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//           >
//             <div className="p-6 relative overflow-hidden">
//               <motion.h3
//                 style={{ color: missionText }}
//                 className="text-[32px] bw-m mb-4"
//               >
//                 ESG Mission
//               </motion.h3>

//               <motion.div
//                 style={{ opacity: missionOpacity }}
//                 className="flex flex-col gap-5 mb-6"
//               >
//                 <MissionItem
//                   icon="/sustainability/m1.svg"
//                   text="Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience."
//                 />
//                 <MissionItem
//                   icon="/sustainability/m2.svg"
//                   text="Lead with a design-first mindset, integrating sustainability and global best practices."
//                 />
//                 <MissionItem
//                   icon="/sustainability/m3.svg"
//                   text="Embed diversity, health, safety, and learning into our people and community practices."
//                 />
//                 <MissionItem
//                   icon="/sustainability/m4.svg"
//                   text="Build trust through accountable governance, strong partnerships, and transparent performance."
//                 />
//               </motion.div>

//               {/* Decorative Plant Image from Desktop */}
//               <img
//                 src="/sustainability/plant4.png"
//                 className="absolute right-0 top-0 w-24 opacity-50"
//                 alt=""
//               />
//             </div>

//             <img
//               src="/sustainability/stones.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Mission"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function MissionItem({ icon, text }) {
//   return (
//     <div className="flex gap-4 items-start">
//       <img src={icon} className="w-10 h-10 shrink-0" alt="" />
//       <p className="text-white text-[14px] leading-tight pt-1">{text}</p>
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
// import { motion, useScroll, useTransform } from "motion/react";

// const COLLAPSED = 94;
// const EXPANDED = 540;

// export default function VMMob() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= ESG VISION (Card 1) ================= */
//   const visionMaxH = useTransform(
//     scrollYProgress,
//     [0, 0.45],
//     [EXPANDED, COLLAPSED],
//   );
//   const visionOpacity = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);
//   const visionBg = "#0db14b";

//   /* ================= ESG MISSION (Card 2) ================= */
//   const missionMaxH = useTransform(
//     scrollYProgress,
//     [0.1, 0.55],
//     [COLLAPSED, EXPANDED + 100],
//   );
//   const missionOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
//   const missionBg = useTransform(
//     scrollYProgress,
//     [0.1, 0.45],
//     ["#ffffff", "#8A52A0"],
//   );
//   const missionText = useTransform(
//     scrollYProgress,
//     [0.1, 0.45],
//     ["#000000", "#ffffff"],
//   );

//   return (
//     <div ref={containerRef} className="relative h-[250vh] bg-[#F5F5F5]">
//       <div className="sticky top-[70px] px-[5%] py-6 overflow-hidden">
//         <div className="flex flex-col gap-[10px]">
//           {/* ESG VISION CARD - Border Radius Removed */}
//           <motion.div
//             style={{ maxHeight: visionMaxH, backgroundColor: visionBg }}
//             className="overflow-hidden relative"
//           >
//             <div className="p-6 relative overflow-hidden">
//               <h3 className="text-[32px] text-white bw-m mb-2">ESG Vision</h3>
//               <motion.p
//                 style={{ opacity: visionOpacity }}
//                 className="text-[16px] leading-[1.4] text-white"
//               >
//                 To set new benchmarks for India’s industrial and logistics
//                 sector by delivering more than spaces — building responsible,
//                 future-ready ecosystems that serve our customers, communities,
//                 and climate.
//               </motion.p>

//               <img
//                 src="/sustainability/plant3.png"
//                 className="absolute right-0 top-0 w-24 opacity-50"
//                 alt=""
//               />
//             </div>

//             <img
//               src="/sustainability/ripple.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Vision"
//             />
//           </motion.div>

//           {/* ESG MISSION CARD - Border Radius Removed */}
//           <motion.div
//             style={{ maxHeight: missionMaxH, backgroundColor: missionBg }}
//             className="overflow-hidden relative"
//           >
//             <div className="p-6 relative overflow-hidden">
//               <motion.h3
//                 style={{ color: missionText }}
//                 className="text-[32px] bw-m mb-4"
//               >
//                 ESG Mission
//               </motion.h3>

//               <motion.div
//                 style={{ opacity: missionOpacity }}
//                 className="flex flex-col gap-5 mb-6"
//               >
//                 <MissionItem
//                   icon="/sustainability/m1.svg"
//                   text="Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience."
//                 />
//                 <MissionItem
//                   icon="/sustainability/m2.svg"
//                   text="Lead with a design-first mindset, integrating sustainability and global best practices."
//                 />
//                 <MissionItem
//                   icon="/sustainability/m3.svg"
//                   text="Embed diversity, health, safety, and learning into our people and community practices."
//                 />
//                 <MissionItem
//                   icon="/sustainability/m4.svg"
//                   text="Build trust through accountable governance, strong partnerships, and transparent performance."
//                 />
//               </motion.div>

//               <img
//                 src="/sustainability/plant4.png"
//                 className="absolute right-0 top-0 w-24 opacity-50"
//                 alt=""
//               />
//             </div>

//             <img
//               src="/sustainability/stones.jpg"
//               className="w-full h-[220px] object-cover"
//               alt="Mission"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function MissionItem({ icon, text }) {
//   return (
//     <div className="flex gap-4 items-start">
//       <img src={icon} className="w-10 h-10 shrink-0" alt="" />
//       <p className="text-white text-[14px] leading-tight pt-1">{text}</p>
//     </div>
//   );
// }
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const COLLAPSED = 94;
const EXPANDED = 540;

export default function VMMob() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ================= ESG VISION (Card 1) ================= */
  const visionMaxH = useTransform(
    scrollYProgress,
    [0, 0.45],
    [EXPANDED, COLLAPSED],
  );
  const visionOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const visionBg = "#0db14b";

  /* ================= ESG MISSION (Card 2) ================= */
  const missionMaxH = useTransform(
    scrollYProgress,
    [0, 0.45],
    [COLLAPSED, EXPANDED + 100],
  );
  const missionOpacity = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const missionBg = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["#ffffff", "#8A52A0"],
  );
  const missionText = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["#000000", "#ffffff"],
  );

  return (
    <div
      ref={containerRef}
      className="relative lg:hidden h-[200vh] bg-[#F5F5F5]"
    >
      <div className="sticky top-[70px] px-[5%] py-6 overflow-hidden">
        <div className="flex flex-col gap-[10px]">
          {/* ESG VISION CARD */}
          <motion.div
            style={{ maxHeight: visionMaxH, backgroundColor: visionBg }}
            className="overflow-hidden relative"
          >
            {/* Relative container for text and absolute arrow */}
            <div className="p-6 relative overflow-hidden">
              <h3 className="text-[32px] text-white bw-m mb-2 relative z-10">
                ESG Vision
              </h3>
              <motion.p
                style={{ opacity: visionOpacity }}
                className="text-[16px] leading-[1.4] text-white relative z-10"
              >
                To set new benchmarks for India’s industrial and logistics
                sector by delivering more than spaces — building responsible,
                future-ready ecosystems that serve our customers, communities,
                and climate.
              </motion.p>

              {/* Arrow Image */}
              <img
                src="/brand_journey/purpose_arrow.svg"
                className="absolute right-5 top-auto -bottom-10 w-[90%] z-0"
                alt=""
              />

              {/* Decorative Plant Image */}
              <img
                src="/sustainability/plant3.png"
                className="absolute right-0 top-0 w-24 opacity-50 z-0"
                alt=""
              />
            </div>

            <img
              src="/sustainability/ripple.jpg"
              className="w-full h-[220px] object-cover"
              alt="Vision"
            />
          </motion.div>

          {/* ESG MISSION CARD */}
          <motion.div
            style={{ maxHeight: missionMaxH, backgroundColor: missionBg }}
            className="overflow-hidden relative"
          >
            {/* Relative container for text and absolute arrow */}
            <div className="p-6 relative overflow-hidden">
              <motion.h3
                style={{ color: missionText }}
                className="text-[32px] bw-m mb-4 relative z-10"
              >
                ESG Mission
              </motion.h3>

              <motion.div
                style={{ opacity: missionOpacity }}
                className="flex flex-col gap-5 mb-6 relative z-10"
              >
                <MissionItem
                  icon="/sustainability/m1.svg"
                  text="Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience."
                />
                <MissionItem
                  icon="/sustainability/m2.svg"
                  text="Lead with a design-first mindset, integrating sustainability and global best practices."
                />
                <MissionItem
                  icon="/sustainability/m3.svg"
                  text="Embed diversity, health, safety, and learning into our people and community practices."
                />
                <MissionItem
                  icon="/sustainability/m4.svg"
                  text="Build trust through accountable governance, strong partnerships, and transparent performance."
                />
              </motion.div>

              {/* Arrow Image */}
              <img
                src="/brand_journey/purpose_arrow.svg"
                className="absolute right-5 top-auto -bottom-10 w-[90%] z-0"
                alt=""
              />

              {/* Decorative Plant Image */}
              <img
                src="/sustainability/plant4.png"
                className="absolute right-0 top-0 w-24 opacity-50 z-0"
                alt=""
              />
            </div>

            <img
              src="/sustainability/stones.jpg"
              className="w-full h-[220px] object-cover"
              alt="Mission"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MissionItem({ icon, text }) {
  return (
    <div className="flex gap-4 items-start">
      <img src={icon} className="w-10 h-10 shrink-0" alt="" />
      <p className="text-white text-[14px] leading-tight pt-1">{text}</p>
    </div>
  );
}
