// "use client";
// import { ReactLenis } from "lenis/react";
// import { useScroll, useTransform, motion } from "motion/react";
// import { useRef, useState, useEffect } from "react";

// export default function VMmain() {
//   const container_new = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container_new,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <>
//       {/* ---------- Desktop Scroll Section ---------- */}
//       <main
//         ref={container_new}
//         className='hidden w-full xl:block'
//         style={{ height: "250vh" }}
//       >
//         <ReactLenis root>
//           <Purpose progress={scrollYProgress} />
//         </ReactLenis>
//       </main>

//       {/* ---------- Mobile Static Section ---------- */}
//       <div className='1024:hidden bg-[#000000] px-[20px] lg:px-[52px] md:px-[35px] py-[45px]'>
//         <div className='flex flex-col md:flex-row md:gap-[20px]'>
//           {/* Purpose Mobile */}
//           <div className='mb-[30px] md:flex-1'>
//             <div className='relative w-full overflow-hidden pt-[20px] pb-[65px] px-[15px] bg-[#0db14b] md:h-[240px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'>
//               <h3 className='bw-m text-[43px] leading-[52px] mb-[10px] text-white'>
//                 <span className='bw-l'>Our</span> Purpose
//               </h3>
//               <p className='bw-m text-white text-[21px] leading-[28px] md:text-[19px] md:leading-[26px]'>
//                 Enable our customers succeed by proactively delivering agile
//                 solutions for accelerated growth.
//               </p>
//               <img
//                 src='/brand_journey/purpose_arrow.svg'
//                 className='absolute right-[22px] bottom-[-2px] w-[225px]'
//               />
//             </div>
//             <img
//               src='/brand_journey/purpose_img.jpg'
//               className='w-full object-cover h-[250px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//             />
//           </div>

//           {/* Mission Mobile */}
//           <div className='mb-[30px] md:flex-1'>
//             <div className='relative w-full overflow-hidden pt-[20px] pb-[65px] px-[15px] bg-[#F47922] md:h-[240px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'>
//               <h3 className='bw-m text-[43px] leading-[52px] mb-[10px] text-white'>
//                 <span className='bw-l'>Our</span> Mission
//               </h3>
//               <p className='bw-m text-white text-[21px] leading-[28px] md:text-[19px] md:leading-[26px]'>
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </p>
//               <img
//                 src='/brand_journey/purpose_arrow.svg'
//                 className='absolute right-[22px] bottom-[-2px] w-[225px]'
//               />
//             </div>
//             <img
//               src='/brand_journey/mission_img.jpg'
//               className='w-full object-cover h-[250px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//             />
//           </div>
//         </div>

//         {/* Values Mobile */}
//         <div className='flex flex-col md:flex-row'>
//           <div className='relative overflow-hidden pt-[30px] pb-[40px] px-[15px] w-full bg-[#8B37A4] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'>
//             <img
//               src='/brand_journey/value_arrow.svg'
//               className='absolute right-[22px] bottom-[-2px] w-[310px]'
//             />
//             <h3 className='text-white bw-m text-[43px] leading-[52px] mb-[10px]'>
//               <span className='bw-l'>Our</span> Values
//             </h3>
//             <p className='bw-m text-white text-[21px]'>
//               Our values define who we are. These are the ideals that give us
//               roots to anchor and wings to fly. They help us create a better,
//               sustainable future for all our stakeholders.
//             </p>

//             <div className='mt-[30px] flex flex-col gap-[20px]'>
//               {/* Agility */}
//               <div className='flex gap-[15px]'>
//                 <img
//                   src='/brand_journey/agility_icon.svg'
//                   className='w-[50px]'
//                 />
//                 <div>
//                   <h4 className='text-white text-[20px] leading-[34px] bw-m'>
//                     Agility
//                   </h4>
//                   <p className='text-white text-[16px] bw-l leading-[21px]'>
//                     Be proactive and alert to the needs of our stakeholders
//                   </p>
//                 </div>
//               </div>

//               {/* Collaboration */}
//               <div className='flex gap-[15px]'>
//                 <img
//                   src='/brand_journey/collabration_icon.svg'
//                   className='w-[50px]'
//                 />
//                 <div>
//                   <h4 className='text-white text-[20px] leading-[34px] bw-m'>
//                     Collaboration
//                   </h4>
//                   <p className='text-white text-[16px] bw-l leading-[21px]'>
//                     Practise mutual respect and teamwork to maximise value of
//                     partnerships
//                   </p>
//                 </div>
//               </div>

//               {/* Excellence */}
//               <div className='flex gap-[15px]'>
//                 <img
//                   src='/brand_journey/excellence_icon.svg'
//                   className='w-[50px]'
//                 />
//                 <div>
//                   <h4 className='text-white text-[20px] leading-[34px] bw-m'>
//                     Excellence
//                   </h4>
//                   <p className='text-white text-[16px] bw-l leading-[21px]'>
//                     Create systems to continuously establish and surpass
//                     benchmarks
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             src='/brand_journey/value_img.jpg'
//             className='w-full object-cover h-[250px] md:h-auto md:w-[50%] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// /* ---------- Purpose Desktop Scroll Animation ---------- */
// function Purpose({ progress }) {
//   const container1 = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container1,
//     offset: ["start end", "start start"],
//   });

//   // Animations for desktop boxes
//   const frst_img_width = useTransform(progress, [0, 0.4], ["50%", "0%"]);
//   const prps_dv_height = useTransform(progress, [0, 0.4], ["350px", "170px"]);
//   const prps_dv_bg = useTransform(progress, [0, 0.4], ["#0db14b", "#0db14b"]);
//   const prps_dv_hd = useTransform(progress, [0, 0.4], ["#fff", "#000"]);
//   const prps_dv_p = useTransform(progress, [0, 0.4], ["1", "0"]);
//   const prps_dv_vctr = useTransform(progress, [0, 0.4], ["1", "0"]);

//   const msn_dv_height = useTransform(progress, [0, 0.4], ["170px", "350px"]);
//   const msn_dv_bg = useTransform(progress, [0, 0.4], ["#F47922", "#F47922"]);
//   const msn_dv_hd = useTransform(progress, [0, 0.4], ["#000", "#fff"]);
//   const msn_dv_vctr = useTransform(progress, [0, 0.4], ["0", "1"]);

//   const third_img_width = useTransform(progress, [0, 0.4], ["0%", "50%"]);

//   const [msn_dv_p, setMsnDvP] = useState(0);
//   const fadeIn = useTransform(progress, [0, 0.4], [0, 1]);

//   useEffect(() => {
//     const unsubscribe = progress.on("change", () => {
//       setMsnDvP(fadeIn.get());
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div
//       ref={container1}
//       className='bg-[#ffffff] sticky flex items-center top-0 w-full py-[90px] 1280:py-[40px] 1600:pt-[80px] 1920:py-[90px] min-h-screen overflow-hidden'
//     >
//       <div className='fix'>
//         <motion.div>
//           <div className='relative flex gap-[20px] overflow-hidden'>
//             {/* Purpose Image */}
//             <motion.div
//               style={{ width: frst_img_width }}
//               className='relative pr-[0px]'
//             >
//               <img
//                 src='/sustainability/ripple.jpg'
//                 className='w-full object-cover h-[540px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//               />
//             </motion.div>

//             {/* Purpose & Mission Cards */}
//             <motion.div
//               // style={{ y: Mission_bx_Y, height: scnd_box_height }}
//               className='w-[50%] pl-[0px] pr-[0px] overflow-hidden'
//             >
//               <div className='relative flex flex-col gap-[20px]'>
//                 {/* Purpose Box */}
//                 <motion.div
//                   style={{ height: prps_dv_height, background: prps_dv_bg }}
//                   className='relative w-full overflow-hidden py-[50px] px-[30px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//                 >
//                   <motion.h3
//                     style={{ color: prps_dv_hd }}
//                     className='bw-m text-[76px] leading-[60px] mb-[15px]'
//                   >
//                     <span className='bw-l'>Our</span> Purpose
//                   </motion.h3>
//                   <motion.p
//                     style={{ opacity: prps_dv_p }}
//                     className='text-[25px] bw-m text-white leading-[33px] w-[530px]'
//                   >
//                     Enable our customers succeed by proactively delivering agile
//                     solutions for accelerated growth.
//                   </motion.p>
//                   <motion.img
//                     style={{ opacity: prps_dv_vctr }}
//                     src='/brand_journey/purpose_arrow.svg'
//                     className='absolute right-[30px] top-[78px]'
//                   />
//                 </motion.div>

//                 {/* Mission Box */}
//                 <motion.div
//                   style={{ height: msn_dv_height, background: msn_dv_bg }}
//                   className='w-full overflow-hidden pt-[50px] pb-[50px] px-[30px] relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//                 >
//                   <motion.h3
//                     style={{ color: msn_dv_hd }}
//                     className='bw-m text-[76px] leading-[60px] mb-[15px]'
//                   >
//                     <span className='bw-l'>Our</span> Mission
//                   </motion.h3>
//                   <motion.p
//                     style={{ opacity: msn_dv_p }}
//                     className='text-white text-[25px] bw-m leading-[33px] w-[530px]'
//                   >
//                     Make Horizon the dominant and preferred industrial and
//                     warehousing partner, sustainably delivering benchmark
//                     quality and superior returns.
//                   </motion.p>
//                   <motion.img
//                     style={{ opacity: msn_dv_vctr }}
//                     src='/brand_journey/purpose_arrow.svg'
//                     className='absolute right-[30px] top-[78px]'
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Mission Image */}
//             <motion.div
//               style={{
//                 width: third_img_width,
//                 //   y: third_img_Y,
//                 //   height: third_img_height,
//               }}
//               className='relative pl-[0px] overflow-hidden'
//             >
//               <img
//                 src='/sustainability/stones.jpg'
//                 className='w-full h-[540px] object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//               />
//             </motion.div>
//           </div>
//         </motion.div>
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
// import { ReactLenis } from "lenis/react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";

// export default function VMmain() {
//   const container_new = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container_new,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <>
//       {/* ---------- Desktop Scroll Section ---------- */}
//       <main
//         ref={container_new}
//         className='hidden w-full xl:block'
//         style={{ height: "250vh" }}
//       >
//         <ReactLenis root>
//           <Purpose progress={scrollYProgress} />
//         </ReactLenis>
//       </main>

//       {/* ---------- Mobile Static Section ---------- */}
//       <div className='1024:hidden bg-[#000000] px-[20px] lg:px-[52px] md:px-[35px] py-[45px]'>
//         <div className='flex flex-col md:flex-row md:gap-[20px]'>
//           {/* Purpose Mobile */}
//           <div className='mb-[30px] md:flex-1'>
//             <div className='relative w-full overflow-hidden pt-[20px] pb-[65px] px-[15px] bg-[#0db14b] md:h-[240px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'>
//               <h3 className='bw-m text-[43px] leading-[52px] mb-[10px] text-white'>
//                 <span className='bw-l'>Our</span> Purpose
//               </h3>
//               <p className='bw-m text-white text-[21px] leading-[28px] md:text-[19px] md:leading-[26px]'>
//                 Enable our customers succeed by proactively delivering agile
//                 solutions for accelerated growth.
//               </p>
//               <img
//                 src='/brand_journey/purpose_arrow.svg'
//                 className='absolute right-[22px] bottom-[-2px] w-[225px]'
//               />
//             </div>
//             <img
//               src='/brand_journey/purpose_img.jpg'
//               className='w-full object-cover h-[250px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//             />
//           </div>

//           {/* Mission Mobile */}
//           <div className='mb-[30px] md:flex-1'>
//             <div className='relative w-full overflow-hidden pt-[20px] pb-[65px] px-[15px] bg-[#F47922] md:h-[240px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'>
//               <h3 className='bw-m text-[43px] leading-[52px] mb-[10px] text-white'>
//                 <span className='bw-l'>Our</span> Mission
//               </h3>
//               <p className='bw-m text-white text-[21px] leading-[28px] md:text-[19px] md:leading-[26px]'>
//                 Make Horizon the dominant and preferred industrial and
//                 warehousing partner, sustainably delivering benchmark quality
//                 and superior returns.
//               </p>
//               <img
//                 src='/brand_journey/purpose_arrow.svg'
//                 className='absolute right-[22px] bottom-[-2px] w-[225px]'
//               />
//             </div>
//             <img
//               src='/brand_journey/mission_img.jpg'
//               className='w-full object-cover h-[250px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//             />
//           </div>
//         </div>

//         {/* Values Mobile */}
//         <div className='flex flex-col md:flex-row'>
//           <div className='relative overflow-hidden pt-[30px] pb-[40px] px-[15px] w-full bg-[#8B37A4] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'>
//             <img
//               src='/brand_journey/value_arrow.svg'
//               className='absolute right-[22px] bottom-[-2px] w-[310px]'
//             />
//             <h3 className='text-white bw-m text-[43px] leading-[52px] mb-[10px]'>
//               <span className='bw-l'>Our</span> Values
//             </h3>
//             <p className='bw-m text-white text-[21px]'>
//               Our values define who we are. These are the ideals that give us
//               roots to anchor and wings to fly. They help us create a better,
//               sustainable future for all our stakeholders.
//             </p>

//             <div className='mt-[30px] flex flex-col gap-[20px]'>
//               {/* Agility */}
//               <div className='flex gap-[15px]'>
//                 <img
//                   src='/brand_journey/agility_icon.svg'
//                   className='w-[50px]'
//                 />
//                 <div>
//                   <h4 className='text-white text-[20px] leading-[34px] bw-m'>
//                     Agility
//                   </h4>
//                   <p className='text-white text-[16px] bw-l leading-[21px]'>
//                     Be proactive and alert to the needs of our stakeholders
//                   </p>
//                 </div>
//               </div>

//               {/* Collaboration */}
//               <div className='flex gap-[15px]'>
//                 <img
//                   src='/brand_journey/collabration_icon.svg'
//                   className='w-[50px]'
//                 />
//                 <div>
//                   <h4 className='text-white text-[20px] leading-[34px] bw-m'>
//                     Collaboration
//                   </h4>
//                   <p className='text-white text-[16px] bw-l leading-[21px]'>
//                     Practise mutual respect and teamwork to maximise value of
//                     partnerships
//                   </p>
//                 </div>
//               </div>

//               {/* Excellence */}
//               <div className='flex gap-[15px]'>
//                 <img
//                   src='/brand_journey/excellence_icon.svg'
//                   className='w-[50px]'
//                 />
//                 <div>
//                   <h4 className='text-white text-[20px] leading-[34px] bw-m'>
//                     Excellence
//                   </h4>
//                   <p className='text-white text-[16px] bw-l leading-[21px]'>
//                     Create systems to continuously establish and surpass
//                     benchmarks
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             src='/brand_journey/value_img.jpg'
//             className='w-full object-cover h-[250px] md:h-auto md:w-[50%] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// /* ---------- Purpose Desktop Scroll Animation ---------- */
// function Purpose({ progress }) {
//   const container1 = useRef(null);

//   /* ---------- IMAGE WIDTHS ---------- */
//   const frst_img_width = useTransform(progress, [0, 0.4], ["50%", "0%"]);
//   const third_img_width = useTransform(progress, [0, 0.4], ["0%", "50%"]);

//   /* ---------- PURPOSE BOX (height + padding animated) ---------- */
//   // height in px (numbers) — framer motion will treat numeric style values as px
//   const prps_dv_height = useTransform(progress, [0, 0.4], [350, 0]);
//   const prps_dv_padTop = useTransform(progress, [0, 0.4], [50, 0]);
//   const prps_dv_padBottom = useTransform(progress, [0, 0.4], [50, 0]);
//   const prps_dv_bg = useTransform(progress, [0, 0.4], ["#0db14b", "#0db14b"]);
//   const prps_dv_hd = useTransform(progress, [0, 0.4], ["#ffffff", "#ffffff"]);
//   const prps_dv_opacity = useTransform(progress, [0, 0.4], [1, 0]);
//   const prps_hd_opacity = useTransform(progress, [0, 0.4], [1, 0]);

//   /* ---------- MISSION BOX (height + padding animated) ---------- */
//   const msn_dv_height = useTransform(progress, [0, 0.4], [170, 520]);
//   // reduce top padding initially so mission content fits at small height
//   const msn_dv_padTop = useTransform(progress, [0, 0.4], [20, 50]);
//   const msn_dv_padBottom = useTransform(progress, [0, 0.4], [20, 50]);
//   const msn_dv_bg = useTransform(progress, [0, 0.4], ["#F47922", "#F47922"]);
//   const msn_dv_hd = useTransform(progress, [0, 0.4], ["#ffffff", "#ffffff"]);
//   const msn_dv_opacity = useTransform(progress, [0, 0.4], [0, 1]);

//   return (
//     <div
//       ref={container1}
//       className='bg-[#ffffff] sticky flex items-center top-0 w-full py-[90px] 1280:py-[40px] 1600:pt-[80px] 1920:py-[90px] min-h-screen overflow-hidden'
//     >
//       <div className='fix'>
//         <motion.div>
//           <div className='relative flex gap-[20px] overflow-hidden'>
//             {/* ---------- Left Image ---------- */}
//             <motion.div style={{ width: frst_img_width }} className='relative'>
//               <img
//                 src='/sustainability/ripple.jpg'
//                 className='w-full object-cover h-[540px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//               />
//             </motion.div>

//             {/* ---------- Center Cards ---------- */}
//             <div className='w-[50%] overflow-hidden'>
//               <div className='relative flex flex-col gap-[20px]'>
//                 {/* Purpose Box */}
//                 <motion.div
//                   style={{
//                     height: prps_dv_height,
//                     paddingTop: prps_dv_padTop,
//                     paddingBottom: prps_dv_padBottom,
//                     background: prps_dv_bg,
//                   }}
//                   className='relative w-full overflow-hidden px-[30px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//                 >
//                   <motion.h3
//                     style={{ color: prps_dv_hd, opacity: prps_hd_opacity }}
//                     className='bw-m text-[76px] leading-[60px] mb-[15px]'
//                   >
//                     <span className='bw-l'>ESG </span> Vision
//                   </motion.h3>

//                   <motion.p
//                     style={{ opacity: prps_dv_opacity }}
//                     className='text-[25px] pt-5 bw-m text-white leading-[33px] max-w-[530px]'
//                   >
//                     To set new benchmarks for India’s industrial and logistics
//                     sector by delivering more than spaces — building
//                     responsible, future-ready ecosystems that serve our
//                     customers, communities, and climate.
//                   </motion.p>

//                   <motion.img
//                     style={{ opacity: prps_dv_opacity }}
//                     src='/brand_journey/purpose_arrow.svg'
//                     className='absolute right-[30px] top-[78px]'
//                   />
//                 </motion.div>

//                 {/* Mission Box */}
//                 <motion.div
//                   style={{
//                     height: msn_dv_height,
//                     paddingTop: msn_dv_padTop,
//                     paddingBottom: msn_dv_padBottom,
//                     background: msn_dv_bg,
//                   }}
//                   className='w-full overflow-hidden px-[30px] relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//                 >
//                   <motion.h3
//                     style={{ color: msn_dv_hd }}
//                     className='bw-m text-[76px] leading-[60px] mb-[15px]'
//                   >
//                     <span className='bw-l'>ESG </span>Mission
//                   </motion.h3>

//                   <motion.p
//                     style={{ opacity: msn_dv_opacity }}
//                     className='text-white text-[25px] bw-m leading-[33px] max-w-[530px]'
//                   >
//                     Make Horizon the dominant and preferred industrial and
//                     warehousing partner, sustainably delivering benchmark
//                     quality and superior returns.
//                   </motion.p>

//                   <motion.img
//                     style={{ opacity: msn_dv_opacity }}
//                     src='/brand_journey/purpose_arrow.svg'
//                     className='absolute right-[30px] top-[78px]'
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             {/* ---------- Right Image ---------- */}
//             <motion.div style={{ width: third_img_width }} className='relative'>
//               <img
//                 src='/sustainability/stones.jpg'
//                 className='w-full h-[540px] object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]'
//               />
//             </motion.div>
//           </div>
//         </motion.div>
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
//
//
//
//
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
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";

// export default function VMmain() {
//   const container_new = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container_new,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <>
//       {/* ---------- Desktop Scroll Section ---------- */}
//       <main
//         ref={container_new}
//         className="hidden w-full xl:block"
//         style={{ height: "250vh" }} // 200vh * 1.2
//       >
//         <ReactLenis root>
//           <Purpose progress={scrollYProgress} />
//         </ReactLenis>
//       </main>

//       {/* ---------- Mobile Static Section ---------- */}
//       {/* ---------- Mobile Static Section ---------- */}
//       <section className="xl:hidden grid grid-cols-1 gap-6 px-[5%] py-12 bg-black">
//         {/* ESG Vision card */}
//         <div className="flex flex-col gap-0">
//           <img
//             src="/sustainability/ripple.jpg"
//             alt="ESG Vision"
//             className="w-full object-cover h-[250px] rounded-tl-[40px]" // only top-left
//           />
//           <div
//             className="w-full p-5 rounded-bl-[40px] rounded-br-[40px] flex flex-col"
//             style={{ background: "#0db14b" }}
//           >
//             <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-2">
//               ESG Vision
//             </h3>
//             <p className="text-white text-[16px] md:text-[18px] leading-[24px]">
//               To set new benchmarks for India’s industrial and logistics sector
//               by delivering more than spaces — building responsible,
//               future-ready ecosystems that serve our customers, communities, and
//               climate.
//             </p>
//           </div>
//         </div>

//         {/* ESG Mission card with icon boxes */}
//         <div className="flex flex-col gap-0">
//           <img
//             src="/sustainability/stones.jpg"
//             alt="ESG Mission"
//             className="w-full object-cover h-[250px] rounded-tl-[40px]" // only top-left
//           />
//           <div
//             className="w-full p-5 rounded-bl-[40px] rounded-br-[40px] flex flex-col"
//             style={{ background: "#8A52A0" }}
//           >
//             <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-2">
//               ESG Mission
//             </h3>

//             {/* Icon boxes scaled down 60% */}
//             <div className="flex flex-col gap-[17px] mt-2">
//               {[
//                 {
//                   ic: "/sustainability/m1.svg",
//                   pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
//                 },
//                 {
//                   ic: "/sustainability/m2.svg",
//                   pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
//                 },
//                 {
//                   ic: "/sustainability/m3.svg",
//                   pg: "Embed diversity, health, safety, and learning into our people and community practices.",
//                 },
//                 {
//                   ic: "/sustainability/m4.svg",
//                   pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
//                 },
//               ].map((item, idx) => (
//                 <div key={idx} className="flex gap-[36px] items-start">
//                   <img
//                     src={item.ic}
//                     alt={`mission-${idx}`}
//                     className="w-[54px] h-[54px]"
//                   />
//                   <span className="text-white text-[16px] leading-[20px]">
//                     {item.pg}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ---------- Purpose Desktop Scroll Animation ---------- */
// function Purpose({ progress }) {
//   const container1 = useRef(null);

//   /* ---------- IMAGE WIDTHS ---------- */
//   const frst_img_width = useTransform(progress, [0, 0.4], ["50%", "0%"]);
//   const third_img_width = useTransform(progress, [0, 0.4], ["0%", "50%"]);

//   /* ---------- PURPOSE BOX ---------- */
//   const prps_dv_height = useTransform(progress, [0, 0.4], [350 * 1.2, 0]); // 490px
//   const prps_dv_bg = useTransform(progress, [0, 0.4], ["#0db14b", "#0db14b"]);
//   const prps_dv_hd = useTransform(progress, [0, 0.4], ["#ffffff", "#ffffff"]);
//   const prps_dv_opacity = useTransform(progress, [0, 0.4], [1, 0]);
//   const prps_hd_opacity = useTransform(progress, [0, 0.4], [1, 0]);

//   /* ---------- MISSION BOX ---------- */
//   const msn_dv_height = useTransform(
//     progress,
//     [0, 0.4],
//     [170 * 1.2, 520 * 1.2]
//   ); // 238px -> 728px
//   const msn_dv_bg = useTransform(progress, [0, 0.4], ["#8A52A0", "#8A52A0"]);
//   const msn_dv_hd = useTransform(progress, [0, 0.4], ["#ffffff", "#ffffff"]);
//   const msn_dv_opacity = useTransform(progress, [0, 0.4], [0, 1]);

//   /* ---------- Icon Boxes for Mission ---------- */
//   const iconBoxes = [
//     {
//       ic: "/sustainability/m1.svg",
//       pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
//     },
//     {
//       ic: "/sustainability/m2.svg",
//       pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
//     },
//     {
//       ic: "/sustainability/m3.svg",
//       pg: "Embed diversity, health, safety, and learning into our people and community practices.",
//     },
//     {
//       ic: "/sustainability/m4.svg",
//       pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
//     },
//   ];

//   return (
//     <div
//       ref={container1}
//       className="bg-[#ffffff] sticky flex items-center top-0 w-full py-[90px] 1280:py-[40px] 1600:pt-[80px] 1920:py-[90px] min-h-screen overflow-hidden"
//     >
//       <div className="fix">
//         <motion.div>
//           <div className="relative flex gap-[20px] overflow-hidden">
//             {/* ---------- Left Image ---------- */}
//             <motion.div style={{ width: frst_img_width }} className="relative">
//               <img
//                 src="/sustainability/ripple.jpg"
//                 className="w-full object-cover min-h-full rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//               />
//             </motion.div>

//             {/* ---------- Center Cards ---------- */}
//             <div className="w-[50%] overflow-hidden">
//               <div className="relative flex flex-col gap-[20px]">
//                 {/* Purpose Box */}
//                 <motion.div
//                   style={{
//                     height: prps_dv_height,
//                     background: prps_dv_bg,
//                   }}
//                   className="relative w-full flex flex-col justify-center overflow-hidden px-[30px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//                 >
//                   <motion.h3
//                     style={{ color: prps_dv_hd, opacity: prps_hd_opacity }}
//                     className="bw-m text-[76px] leading-[60px] mb-[15px]"
//                   >
//                     <span className="bw-l">ESG </span> Vision
//                   </motion.h3>

//                   <motion.p
//                     style={{ opacity: prps_dv_opacity }}
//                     className="text-[25px] pt-5 bw-m text-white leading-[33px] max-w-[530px]"
//                   >
//                     To set new benchmarks for India’s industrial and logistics
//                     sector by delivering more than spaces — building
//                     responsible, future-ready ecosystems that serve our
//                     customers, communities, and climate.
//                   </motion.p>

//                   <motion.img
//                     style={{ opacity: prps_dv_opacity }}
//                     src="/brand_journey/purpose_arrow.svg"
//                     className="absolute right-[30px] top-[78px]"
//                   />
//                 </motion.div>

//                 {/* Mission Box */}
//                 <motion.div
//                   style={{
//                     height: msn_dv_height,
//                     background: msn_dv_bg,
//                   }}
//                   className="w-full flex flex-col justify-center gap-5 overflow-hidden px-[30px] relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//                 >
//                   <motion.h3
//                     style={{ color: msn_dv_hd }}
//                     className="bw-m text-[76px] leading-[60px] mb-[15px]"
//                   >
//                     <span className="bw-l">ESG </span>Mission
//                   </motion.h3>

//                   {/* ICON BOXES */}
//                   <motion.p
//                     style={{ opacity: msn_dv_opacity }}
//                     className="text-white text-[18px] leading-[28px] 2xl:leading-[33px] 2xl:text-[25px] bw-m max-w-[530px]"
//                   >
//                     <div className="flex flex-col gap-4 2xl:gap-[28px]">
//                       {iconBoxes.map((item, idx) => (
//                         <div
//                           key={idx}
//                           className="flex gap-4 2xl:gap-[60px] items-start"
//                         >
//                           <img
//                             src={item.ic}
//                             alt={`mission-${idx}`}
//                             className="2xl:w-[90px] w-[60px] aspect-square 2xl:h-[90px]"
//                           />
//                           <span className="">{item.pg}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.p>

//                   <motion.img
//                     style={{ opacity: msn_dv_opacity }}
//                     src="/brand_journey/purpose_arrow.svg"
//                     className="absolute right-[30px] top-[78px]"
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             {/* ---------- Right Image ---------- */}
//             <motion.div style={{ width: third_img_width }} className="relative">
//               <img
//                 src="/sustainability/stones.jpg"
//                 className="w-full min-h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { ReactLenis } from "lenis/react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// export default function VMmainF() {
//   const container_new = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container_new,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <>
//       {/* ---------- Desktop Scroll Section ---------- */}
//       <main
//         ref={container_new}
//         className="hidden w-full lg:block"
//         style={{ height: "200vh" }} // 200vh * 1.2
//       >
//         <ReactLenis root>
//           <Purpose progress={scrollYProgress} />
//         </ReactLenis>
//       </main>

//       {/* ---------- Mobile Static Section ---------- */}
//       <section className="lg:hidden grid grid-cols-1 gap-6 px-[5%] py-12 bg-black">
//         {/*Vision card */}
//         <div className="flex flex-col gap-0">
//           <img
//             src="/sustainability/ripple.jpg"
//             alt="ESG Vision"
//             className="w-full object-cover h-[250px] rounded-tl-[40px]" // only top-left
//           />
//           <div
//             className="w-full p-5 rounded-bl-[40px] rounded-br-[40px] flex flex-col"
//             style={{ background: "#0db14b" }}
//           >
//             <h3 className="text-white text-[30px] md:text-[28px] bw-m mb-2">
//               Vision
//             </h3>
//             <p className="text-white text-[16px] md:text-[18px] leading-[24px]">
//               To set new benchmarks for India’s industrial and logistics sector
//               by delivering more than spaces — building responsible,
//               future-ready ecosystems that serve our customers, communities, and
//               climate.
//             </p>
//           </div>
//         </div>

//         {/* ESG Mission card with icon boxes */}
//         <div className="flex flex-col gap-0">
//           <img
//             src="/sustainability/stones.jpg"
//             alt="ESG Mission"
//             className="w-full object-cover h-[250px] rounded-tl-[40px]" // only top-left
//           />
//           <div
//             className="w-full p-5 rounded-bl-[40px] rounded-br-[40px] flex flex-col"
//             style={{ background: "#8A52A0" }}
//           >
//             <h3 className="text-white text-[30px] md:text-[28px] bw-m mb-2">
//               Mission
//             </h3>

//             {/* Icon boxes scaled down 60% */}
//             <div className="flex flex-col gap-[17px] mt-2">
//               {[
//                 {
//                   ic: "/sustainability/m1.svg",
//                   pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
//                 },
//                 {
//                   ic: "/sustainability/m2.svg",
//                   pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
//                 },
//                 {
//                   ic: "/sustainability/m3.svg",
//                   pg: "Embed diversity, health, safety, and learning into our people and community practices.",
//                 },
//                 {
//                   ic: "/sustainability/m4.svg",
//                   pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex gap-[14px] lg:gap-[36px] items-start"
//                 >
//                   <img
//                     src={item.ic}
//                     alt={`mission-${idx}`}
//                     className="w-[54px] h-[54px]"
//                   />
//                   <span className="text-white text-[16px] leading-[20px]">
//                     {item.pg}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ---------- Purpose Desktop Scroll Animation ---------- */
// function Purpose({ progress }) {
//   const container1 = useRef(null);
//   const [is2xl, setIs2xl] = useState(false);

//   // ✅ Detect viewport width
//   useEffect(() => {
//     const checkWidth = () => setIs2xl(window.innerWidth >= 1536); // 2xl breakpoint
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   /* ---------- IMAGE WIDTHS ---------- */
//   const frst_img_width = useTransform(progress, [0, 0.4], ["50%", "0%"]);
//   const third_img_width = useTransform(progress, [0, 0.4], ["0%", "50%"]);

//   /* ---------- PURPOSE BOX ---------- */
//   const prps_dv_height = useTransform(
//     progress,
//     [0, 0.4],
//     [
//       420, // ✅ 2xl and up => scaled, else normal
//       0,
//     ]
//   );
//   const v_pt = useTransform(progress, [0, 0.4], [70, 0]);
//   const prps_dv_bg = useTransform(progress, [0, 0.4], ["#0db14b", "#0db14b"]);
//   const prps_dv_hd = useTransform(progress, [0, 0.4], ["#ffffff", "#ffffff"]);
//   const prps_dv_opacity = useTransform(progress, [0, 0.4], [1, 0]);
//   const prps_hd_opacity = useTransform(progress, [0, 0.4], [1, 0]);
//   const gapbetween = useTransform(progress, [0, 0.4], [20, 0]);
//   const gapbetween2 = useTransform(progress, [0, 0.4], [0, 20]);
//   const gapbetween3 = useTransform(progress, [0, 0.4], [0, 40]);

//   /* ---------- MISSION BOX ---------- */
//   const msn_dv_height = useTransform(
//     progress,
//     [0, 0.4],
//     [
//       is2xl ? 170 * 1.2 : 170, // ✅ start height
//       is2xl ? 530 * 1.2 : 600, // ✅ end height
//     ]
//   );
//   const msn_dv_bg = useTransform(progress, [0, 0.4], ["#8A52A0", "#8A52A0"]);
//   const msn_dv_hd = useTransform(progress, [0, 0.4], ["#ffffff", "#ffffff"]);
//   const msn_dv_opacity = useTransform(progress, [0, 0.4], [0, 1]);
//   const p_dv_height = useTransform(progress, [0, 0.4], [0, is2xl ? 450 : 450]);

//   /* ---------- Icon Boxes for Mission ---------- */
//   const iconBoxes = [
//     {
//       ic: "/sustainability/m1.svg",
//       pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
//     },
//     {
//       ic: "/sustainability/m2.svg",
//       pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
//     },
//     {
//       ic: "/sustainability/m3.svg",
//       pg: "Embed diversity, health, safety, and learning into our people and community practices.",
//     },
//     {
//       ic: "/sustainability/m4.svg",
//       pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
//     },
//   ];
//   return (
//     <div
//       ref={container1}
//       className="bg-[#ffffff] sticky top-0 w-full min-h-screen overflow-hidden flex 1366:aitems-center py-12 2xl:py-24"
//     >
//       <div className="fixup w-full">
//         <motion.div className="">
//           <div
//             style={{ gap: gapbetween }}
//             className="relative justify-between w-full flex overflow-hidden"
//           >
//             <motion.div
//               style={{ width: frst_img_width }}
//               className="relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//             >
//               <img
//                 src="/sustainability/ripple.jpg"
//                 className="min-w-full pr-[20px] h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//               />
//             </motion.div>
//             <div className="w-[50%] overflow-hidden">
//               <div className="relative flex flex-col">
//                 <motion.div
//                   style={{
//                     height: prps_dv_height,
//                     background: prps_dv_bg,
//                     paddingTop: v_pt,
//                   }}
//                   className="relative w-full flex flex-col 2xl:gap-3.5 justify-start overflow-hidden px-[30px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//                 >
//                   <motion.h3
//                     style={{ color: prps_dv_hd, opacity: prps_hd_opacity }}
//                     className="bw-m text-[56px] 2xl:text-[76px] leading-[58px] 2xl:leading-[60px] relative !z-10"
//                   >
//                     Vision
//                   </motion.h3>
//                   <motion.p
//                     style={{ opacity: prps_dv_opacity }}
//                     className="text-[25px] pt-5 bw-r text-white leading-[33px] max-w-[530px] relative z-10"
//                   >
//                     To set new benchmarks for India’s industrial and logistics
//                     sector by delivering more than spaces — building
//                     responsible, future-ready ecosystems that serve our
//                     customers, communities, and climate.
//                   </motion.p>
//                   <motion.img
//                     style={{ opacity: prps_dv_opacity }}
//                     src="/sustainability/plant3.png"
//                     className="absolute top-0 right-[0px]"
//                   />
//                 </motion.div>
//                 <motion.div
//                   style={{
//                     height: msn_dv_height,
//                     background: msn_dv_bg,
//                     gap: gapbetween2,
//                   }}
//                   className="w-full flex flex-col mt-5 justify-start pt-10 overflow-hidden px-[30px] relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//                 >
//                   <motion.h3
//                     style={{ color: msn_dv_hd }}
//                     className="bw-m text-[56px] 2xl:text-[76px] leading-[58px] 2xl:leading-[60px] relative !z-10"
//                   >
//                     Mission
//                   </motion.h3>
//                   <motion.p
//                     style={{
//                       opacity: msn_dv_opacity,
//                       height: p_dv_height,
//                       marginTop: gapbetween2,
//                     }}
//                     className="text-white overflow-hidden text-[18px] leading-[28px] xl:leading-[30px] xl:text-[20px] bw-r max-w-[530px] relative z-10"
//                   >
//                     <div className="flex flex-col gap-[20px]">
//                       {iconBoxes.map((item, idx) => (
//                         <div
//                           key={idx}
//                           className="flex gap-4 2xl:gap-[60px] items-center"
//                         >
//                           <img
//                             src={item.ic}
//                             alt={`mission-${idx}`}
//                             className="2xl:w-[90px] w-[75px] aspect-square 2xl:h-[90px]"
//                           />
//                           <span>{item.pg}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.p>
//                   <motion.img
//                     style={{ opacity: msn_dv_opacity }}
//                     src="/sustainability/plant4.png"
//                     className="absolute right-[0px] top-0"
//                   />
//                 </motion.div>
//               </div>
//             </div>
//             <motion.div
//               style={{ width: third_img_width }}
//               className="relative w-1/2 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//             >
//               <img
//                 src="/sustainability/stones.jpg"
//                 className="min-w-full pl-[20px] h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//               />
//             </motion.div>
//           </div>
//         </motion.div>
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
// "use client";
// import { ReactLenis } from "lenis/react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// export default function VMmainF() {
//   const container_new = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container_new,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <>
//       {/* ---------- Desktop Scroll Section ---------- */}
//       <main
//         ref={container_new}
//         className="hidden w-full lg:block"
//         style={{ height: "135vh" }}
//       >
//         <ReactLenis root>
//           <Purpose progress={scrollYProgress} />
//         </ReactLenis>
//       </main>

//       {/* ---------- Mobile Static Section ---------- */}
//       <section className="lg:hidden grid grid-cols-1 gap-6 px-[5%] py-12 bg-black">
//         <div className="flex flex-col gap-0">
//           <img
//             src="/sustainability/ripple.jpg"
//             alt="ESG Vision"
//             className="w-full object-cover h-[250px] rounded-tl-[40px]"
//           />
//           <div
//             className="w-full p-5 rounded-bl-[40px] rounded-br-[40px] flex flex-col"
//             style={{ background: "#0db14b" }}
//           >
//             <h3 className="text-white text-[30px] md:text-[28px] bw-m mb-2">
//               Vision
//             </h3>
//             <p className="text-white text-[16px] md:text-[18px] leading-[24px]">
//               To set new benchmarks for India’s industrial and logistics sector
//               by delivering more than spaces — building responsible,
//               future-ready ecosystems that serve our customers, communities, and
//               climate.
//             </p>
//           </div>
//         </div>

//         {/* ESG Mission card */}
//         <div className="flex flex-col gap-0">
//           <img
//             src="/sustainability/stones.jpg"
//             alt="ESG Mission"
//             className="w-full object-cover h-[250px] rounded-tl-[40px]"
//           />
//           <div
//             className="w-full p-5 rounded-bl-[40px] rounded-br-[40px] flex flex-col"
//             style={{ background: "#8A52A0" }}
//           >
//             <h3 className="text-white text-[30px] md:text-[28px] bw-m mb-2">
//               Mission
//             </h3>
//             <div className="flex flex-col gap-[17px] mt-2">
//               {[
//                 {
//                   ic: "/sustainability/m1.svg",
//                   pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
//                 },
//                 {
//                   ic: "/sustainability/m2.svg",
//                   pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
//                 },
//                 {
//                   ic: "/sustainability/m3.svg",
//                   pg: "Embed diversity, health, safety, and learning into our people and community practices.",
//                 },
//                 {
//                   ic: "/sustainability/m4.svg",
//                   pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex gap-[14px] lg:gap-[36px] items-start"
//                 >
//                   <img
//                     src={item.ic}
//                     alt={`mission-${idx}`}
//                     className="w-[54px] h-[54px]"
//                   />
//                   <span className="text-white text-[16px] leading-[20px]">
//                     {item.pg}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ---------- Purpose Desktop Scroll Animation ---------- */
// function Purpose({ progress }) {
//   const container1 = useRef(null);
//   const [is2xl, setIs2xl] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIs2xl(window.innerWidth >= 1536);
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   /* ---------- IMAGE WIDTHS (FASTER) ---------- */
//   const frst_img_width = useTransform(progress, [0, 0.27], ["50%", "0%"]);
//   const third_img_width = useTransform(progress, [0, 0.27], ["0%", "50%"]);

//   /* ---------- PURPOSE BOX ---------- */
//   const prps_dv_height = useTransform(progress, [0, 0.27], [420, 0]);
//   const v_pt = useTransform(progress, [0, 0.27], [70, 0]);
//   const prps_dv_bg = useTransform(progress, [0, 0.27], ["#0db14b", "#0db14b"]);
//   const prps_dv_hd = useTransform(progress, [0, 0.27], ["#ffffff", "#ffffff"]);
//   const prps_dv_opacity = useTransform(progress, [0, 0.27], [1, 0]);
//   const prps_hd_opacity = useTransform(progress, [0, 0.27], [1, 0]);
//   const gapbetween = useTransform(progress, [0, 0.27], [20, 0]);
//   const gapbetween2 = useTransform(progress, [0, 0.27], [0, 20]);
//   const gapbetween3 = useTransform(progress, [0, 0.27], [0, 40]);

//   /* ---------- MISSION BOX ---------- */
//   const msn_dv_height = useTransform(
//     progress,
//     [0, 0.27],
//     [is2xl ? 170 * 1.2 : 170, is2xl ? 530 * 1.2 : 600]
//   );

//   const msn_dv_bg = useTransform(progress, [0, 0.27], ["#8A52A0", "#8A52A0"]);
//   const msn_dv_hd = useTransform(progress, [0, 0.27], ["#ffffff", "#ffffff"]);
//   const msn_dv_opacity = useTransform(progress, [0, 0.27], [0, 1]);
//   const p_dv_height = useTransform(progress, [0, 0.27], [0, is2xl ? 450 : 450]);

//   const iconBoxes = [
//     {
//       ic: "/sustainability/m1.svg",
//       pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
//     },
//     {
//       ic: "/sustainability/m2.svg",
//       pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
//     },
//     {
//       ic: "/sustainability/m3.svg",
//       pg: "Embed diversity, health, safety, and learning into our people and community practices.",
//     },
//     {
//       ic: "/sustainability/m4.svg",
//       pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
//     },
//   ];

//   return (
//     <div
//       ref={container1}
//       className="bg-[#ffffff] sticky top-0 w-full min-h-screen overflow-hidden flex 1366:aitems-center py-12 2xl:py-24"
//     >
//       <div className="fixup w-full">
//         <motion.div>
//           <div
//             style={{ gap: gapbetween }}
//             className="relative justify-between w-full flex overflow-hidden"
//           >
//             <motion.div
//               style={{ width: frst_img_width }}
//               className="relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//             >
//               <img
//                 src="/sustainability/ripple.jpg"
//                 className="min-w-full pr-[20px] h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//               />
//             </motion.div>

//             <div className="w-[50%] overflow-hidden">
//               <div className="relative flex flex-col">
//                 <motion.div
//                   style={{
//                     height: prps_dv_height,
//                     background: prps_dv_bg,
//                     paddingTop: v_pt,
//                   }}
//                   className="relative w-full flex flex-col 2xl:gap-3.5 justify-start overflow-hidden px-[30px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//                 >
//                   <motion.h3
//                     style={{ color: prps_dv_hd, opacity: prps_hd_opacity }}
//                     className="bw-m text-[56px] 2xl:text-[76px] leading-[58px] 2xl:leading-[60px] relative !z-10"
//                   >
//                     Vision
//                   </motion.h3>

//                   <motion.p
//                     style={{ opacity: prps_dv_opacity }}
//                     className="text-[25px] pt-5 bw-r text-white leading-[33px] max-w-[530px] relative z-10"
//                   >
//                     To set new benchmarks for India’s industrial and logistics
//                     sector by delivering more than spaces — building
//                     responsible, future-ready ecosystems that serve our
//                     customers, communities, and climate.
//                   </motion.p>

//                   <motion.img
//                     style={{ opacity: prps_dv_opacity }}
//                     src="/sustainability/plant3.png"
//                     className="absolute top-0 right-[0px]"
//                   />
//                 </motion.div>

//                 <motion.div
//                   style={{
//                     height: msn_dv_height,
//                     background: msn_dv_bg,
//                     gap: gapbetween2,
//                   }}
//                   className="w-full flex flex-col mt-5 justify-start pt-10 overflow-hidden px-[30px] relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//                 >
//                   <motion.h3
//                     style={{ color: msn_dv_hd }}
//                     className="bw-m text-[56px] 2xl:text-[76px] leading-[58px] 2xl:leading-[60px] relative !z-10"
//                   >
//                     Mission
//                   </motion.h3>

//                   <motion.p
//                     style={{
//                       opacity: msn_dv_opacity,
//                       height: p_dv_height,
//                       marginTop: gapbetween2,
//                     }}
//                     className="text-white overflow-hidden text-[18px] leading-[28px] xl:leading-[30px] xl:text-[20px] bw-r max-w-[530px] relative z-10"
//                   >
//                     <div className="flex flex-col gap-[20px]">
//                       {iconBoxes.map((item, idx) => (
//                         <div
//                           key={idx}
//                           className="flex gap-4 2xl:gap-[60px] items-center"
//                         >
//                           <img
//                             src={item.ic}
//                             alt={`mission-${idx}`}
//                             className="2xl:w-[90px] w-[75px] aspect-square 2xl:h-[90px]"
//                           />
//                           <span>{item.pg}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.p>

//                   <motion.img
//                     style={{ opacity: msn_dv_opacity }}
//                     src="/sustainability/plant4.png"
//                     className="absolute right-[0px] top-0"
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             <motion.div
//               style={{ width: third_img_width }}
//               className="relative w-1/2 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//             >
//               <img
//                 src="/sustainability/stones.jpg"
//                 className="min-w-full pl-[20px] h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//               />
//             </motion.div>
//           </div>
//         </motion.div>
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
// "use client";
// import { ReactLenis } from "lenis/react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// export default function VMmainF() {
//   const container_new = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container_new,
//     offset: ["start start", "end end"],
//   });

//   /* -------------------------------------------------
//      ABSOLUTE FIXED SCROLL NORMALIZATION (FINAL)
//      → 100-line wheel scroll = same effect as 1 line
//      → Ultra smooth rAF normalization
//   ---------------------------------------------------*/
//   useEffect(() => {
//     let targetScroll = window.scrollY;
//     let currentScroll = window.scrollY;

//     const fixedDelta = 20; // FIXED movement per scroll tick

//     const onWheel = (e) => {
//       e.preventDefault();

//       // ALWAYS move only by 20px — NEVER more
//       targetScroll += Math.sign(e.deltaY) * fixedDelta;

//       // prevent negative scroll
//       if (targetScroll < 0) targetScroll = 0;
//     };

//     const smoothScroll = () => {
//       currentScroll += (targetScroll - currentScroll) * 0.15;
//       window.scrollTo(0, currentScroll);
//       requestAnimationFrame(smoothScroll);
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });
//     smoothScroll();

//     return () => {
//       window.removeEventListener("wheel", onWheel);
//     };
//   }, []);

//   return (
//     <>
//       {/* ---------- Desktop Scroll Section ---------- */}
//       <main
//         ref={container_new}
//         className="hidden w-full lg:block"
//         style={{ height: "135vh" }}
//       >
//         <ReactLenis root>
//           <Purpose progress={scrollYProgress} />
//         </ReactLenis>
//       </main>

//       {/* ---------- Mobile Static Section ---------- */}
//       <section className="lg:hidden grid grid-cols-1 gap-6 px-[5%] py-12 bg-black">
//         <div className="flex flex-col gap-0">
//           <img
//             src="/sustainability/ripple.jpg"
//             alt="ESG Vision"
//             className="w-full object-cover h-[250px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//           />
//           <div
//             className="w-full p-5 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] flex flex-col"
//             style={{ background: "#0db14b" }}
//           >
//             <h3 className="text-white text-[30px] md:text-[28px] bw-m mb-2">
//               Vision
//             </h3>
//             <p className="text-white text-[16px] md:text-[18px] leading-[24px]">
//               To set new benchmarks for India’s industrial and logistics sector
//               by delivering more than spaces — building responsible,
//               future-ready ecosystems that serve our customers, communities, and
//               climate.
//             </p>
//           </div>
//         </div>

//         {/* ESG Mission */}
//         <div className="flex flex-col gap-0">
//           <img
//             src="/sustainability/stones.jpg"
//             alt="ESG Mission"
//             className="w-full object-cover h-[250px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//           />
//           <div
//             className="w-full p-5 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] flex flex-col"
//             style={{ background: "#8A52A0" }}
//           >
//             <h3 className="text-white text-[30px] md:text-[28px] bw-m mb-2">
//               Mission
//             </h3>
//             <div className="flex flex-col gap-[17px] mt-2">
//               {[
//                 {
//                   ic: "/sustainability/m1.svg",
//                   pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
//                 },
//                 {
//                   ic: "/sustainability/m2.svg",
//                   pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
//                 },
//                 {
//                   ic: "/sustainability/m3.svg",
//                   pg: "Embed diversity, health, safety, and learning into our people and community practices.",
//                 },
//                 {
//                   ic: "/sustainability/m4.svg",
//                   pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex gap-[14px] lg:gap-[36px] items-start"
//                 >
//                   <img
//                     src={item.ic}
//                     alt={`mission-${idx}`}
//                     className="w-[54px] h-[54px]"
//                   />
//                   <span className="text-white text-[16px] leading-[20px]">
//                     {item.pg}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ---------- DESKTOP ANIMATION ---------- */
// function Purpose({ progress }) {
//   const container1 = useRef(null);
//   const [is2xl, setIs2xl] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIs2xl(window.innerWidth >= 1536);
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   /* ---------- FASTER SCROLL RANGES (0 → 0.27) ---------- */
//   const frst_img_width = useTransform(progress, [0, 0.27], ["50%", "0%"]);
//   const third_img_width = useTransform(progress, [0, 0.27], ["0%", "50%"]);

//   const prps_dv_height = useTransform(progress, [0, 0.27], [420, 0]);
//   const msn_dv_height = useTransform(
//     progress,
//     [0, 0.27],
//     [is2xl ? 204 : 170, is2xl ? 636 : 600]
//   );

//   const msn_dv_opacity = useTransform(progress, [0, 0.27], [0, 1]);
//   const prps_dv_opacity = useTransform(progress, [0, 0.27], [1, 0]);

//   const p_dv_height = useTransform(progress, [0, 0.27], [0, 450]);
//   const gapbetween = useTransform(progress, [0, 0.27], [20, 0]);
//   const gapbetween2 = useTransform(progress, [0, 0.27], [0, 20]);

//   const iconBoxes = [
//     {
//       ic: "/sustainability/m1.svg",
//       pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
//     },
//     {
//       ic: "/sustainability/m2.svg",
//       pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
//     },
//     {
//       ic: "/sustainability/m3.svg",
//       pg: "Embed diversity, health, safety, and learning into our people and community practices.",
//     },
//     {
//       ic: "/sustainability/m4.svg",
//       pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
//     },
//   ];

//   return (
//     <div
//       ref={container1}
//       className="bg-white sticky top-0 w-full min-h-screen overflow-hidden flex py-12 2xl:py-24"
//     >
//       <div className="fixup w-full">
//         <motion.div>
//           <div
//             className="relative justify-between w-full flex overflow-hidden"
//             style={{ gap: gapbetween }}
//           >
//             {/* Left image */}
//             <motion.div
//               style={{ width: frst_img_width }}
//               className="relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//             >
//               <img
//                 src="/sustainability/ripple.jpg"
//                 className="min-w-full pr-[20px] h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//               />
//             </motion.div>

//             {/* Center boxes */}
//             <div className="w-[50%] overflow-hidden">
//               <div className="relative flex flex-col">
//                 {/* Vision Box */}
//                 <motion.div
//                   style={{
//                     height: prps_dv_height,
//                     background: "#0db14b",
//                   }}
//                   className="relative w-full justify-center flex flex-col overflow-hidden px-[30px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//                 >
//                   <motion.h3
//                     style={{ opacity: prps_dv_opacity }}
//                     className="bw-m text-[56px] 2xl:text-[76px] text-white"
//                   >
//                     Vision
//                   </motion.h3>

//                   <motion.p
//                     style={{ opacity: prps_dv_opacity }}
//                     className="text-[25px] pt-5 bw-r text-white leading-[33px] max-w-[530px]"
//                   >
//                     To set new benchmarks for India’s industrial and logistics
//                     sector by delivering more than spaces — building
//                     responsible, future-ready ecosystems that serve our
//                     customers, communities, and climate.
//                   </motion.p>

//                   <motion.img
//                     style={{ opacity: prps_dv_opacity }}
//                     src="/sustainability/plant3.png"
//                     className="absolute top-0 right-0"
//                   />
//                 </motion.div>

//                 {/* Mission Box */}
//                 <motion.div
//                   style={{
//                     height: msn_dv_height,
//                     background: "#8A52A0",
//                     gap: gapbetween2,
//                   }}
//                   className="w-full flex flex-col mt-5 justify-start pt-10 overflow-hidden px-[30px] relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//                 >
//                   <motion.h3 className="bw-m text-[56px] 2xl:text-[76px] text-white">
//                     Mission
//                   </motion.h3>

//                   <motion.div
//                     style={{
//                       opacity: msn_dv_opacity,
//                       height: p_dv_height,
//                     }}
//                     className="text-white overflow-hidden text-[18px] leading-[28px] xl:leading-[30px] xl:text-[20px] bw-r max-w-[530px]"
//                   >
//                     <div className="flex flex-col gap-[20px]">
//                       {iconBoxes.map((item, idx) => (
//                         <div
//                           key={idx}
//                           className="flex gap-4 2xl:gap-[60px] items-center"
//                         >
//                           <img
//                             src={item.ic}
//                             className="2xl:w-[90px] w-[75px] aspect-square"
//                           />
//                           <span>{item.pg}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>

//                   <motion.img
//                     style={{ opacity: msn_dv_opacity }}
//                     src="/sustainability/plant4.png"
//                     className="absolute right-0 top-0"
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             {/* Right Image */}
//             <motion.div
//               style={{ width: third_img_width }}
//               className="relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//             >
//               <img
//                 src="/sustainability/stones.jpg"
//                 className="min-w-full pl-[20px] h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
