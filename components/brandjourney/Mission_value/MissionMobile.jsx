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
"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { easeInOut } from "framer-motion";

export default function MissionMobile() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // --- PURPOSE SECTION ---
  const purposeFlex = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55],
    [1, 1, 0],
    { ease: easeInOut },
  );
  const purposeBg = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55],
    ["#0db14b", "#0db14b", "#ffffff"],
  );
  const purposeTextColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55],
    ["#fff", "#fff", "#000"],
  );
  const purposeContentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45],
    [1, 1, 0],
  );

  // --- MISSION SECTION ---
  const missionFlex = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7, 0.85],
    [0, 1, 1, 0],
    { ease: easeInOut },
  );
  const missionBg = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7, 0.85],
    ["#ffffff", "#f47920", "#f47920", "#ffffff"],
  );
  const missionTextColor = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7, 0.85],
    ["#000", "#fff", "#fff", "#000"],
  );
  const missionContentOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.65, 0.75],
    [0, 1, 1, 0],
  );

  // --- VALUES SECTION ---
  const valuesFlex = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1], {
    ease: easeInOut,
  });
  const valuesBg = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    ["#ffffff", "#8F53A1"],
  );
  const valuesTextColor = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    ["#000", "#fff"],
  );
  const valuesContentOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.9],
    [0, 1],
  );

  return (
    <div ref={container} style={{ height: "400vh" }} className="relative">
      <div className="sticky top-0 h-screen w-full bg-[#F5F5F5] px-[15px] py-[30px] overflow-hidden flex flex-col">
        <div className="flex flex-col gap-[10px] h-full">
          {/* Purpose Section */}
          <motion.div
            layout
            style={{
              flex: purposeFlex,
              backgroundColor: purposeBg,
              minHeight: "75px",
            }}
            className="relative w-full overflow-hidden p-[20px]"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <motion.h3
                  style={{ color: purposeTextColor }}
                  className="bw-m text-[36px] leading-tight mb-4"
                >
                  <span className="bw-l">Our</span> Purpose
                </motion.h3>
                <motion.div style={{ opacity: purposeContentOpacity }}>
                  <p
                    style={{ color: "#fff" }}
                    className="bw-m text-[18px] leading-snug max-w-[85%]"
                  >
                    Enable our customers succeed by proactively delivering agile
                    solutions for accelerated growth.
                  </p>
                </motion.div>
              </div>
              <motion.div
                style={{ opacity: purposeContentOpacity }}
                className="w-full h-1/2 mt-4"
              >
                <img
                  src="/brand_journey/purpose_img.jpg"
                  className="w-full h-full object-cover "
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            layout
            style={{
              flex: missionFlex,
              backgroundColor: missionBg,
              minHeight: "75px",
            }}
            className="relative w-full overflow-hidden p-[20px]"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <motion.h3
                  style={{ color: missionTextColor }}
                  className="bw-m text-[36px] leading-tight mb-4"
                >
                  <span className="bw-l">Our</span> Mission
                </motion.h3>
                <motion.div style={{ opacity: missionContentOpacity }}>
                  <p
                    style={{ color: "#fff" }}
                    className="bw-m text-[18px] leading-snug max-w-[85%]"
                  >
                    Make Horizon the dominant and preferred industrial and
                    warehousing partner, sustainably delivering benchmark
                    quality and superior returns.
                  </p>
                </motion.div>
              </div>
              <motion.div
                style={{ opacity: missionContentOpacity }}
                className="w-full h-1/2 mt-4"
              >
                <img
                  src="/brand_journey/mission_img.jpg"
                  className="w-full h-full object-cover "
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            layout
            style={{
              flex: valuesFlex,
              backgroundColor: valuesBg,
              minHeight: "75px",
            }}
            className="relative w-full overflow-hidden p-[20px]"
          >
            <div className="flex flex-col h-full overflow-hidden no-scrollbar">
              <motion.h3
                style={{ color: valuesTextColor }}
                className="bw-m text-[36px] leading-tight mb-2"
              >
                <span className="bw-l">Our</span> Values
              </motion.h3>

              <motion.div
                style={{ opacity: valuesContentOpacity }}
                className="flex flex-col gap-4"
              >
                <p
                  style={{ color: "#fff" }}
                  className="bw-m text-[16px] leading-snug"
                >
                  Our values define who we are. These are the ideals that give
                  us roots to anchor and wings to fly.
                </p>

                <div className="space-y-4 mb-4">
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

                <div className="w-full h-40 flex-shrink-0">
                  <img
                    src="/brand_journey/value_img.jpg"
                    className="w-full h-full object-cover "
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ValueItem({ icon, title, desc }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="bg-white/10 p-2  shrink-0">
        <img src={icon} className="w-7 h-7" alt="" />
      </div>
      <div>
        <h4 className="text-white bw-m text-[14px] uppercase tracking-wide">
          {title}
        </h4>
        <p className="text-white/90 bw-l text-[12px] leading-tight">{desc}</p>
      </div>
    </div>
  );
}
