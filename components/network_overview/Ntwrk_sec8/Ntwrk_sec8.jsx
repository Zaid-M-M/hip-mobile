// import React from "react";
// import Btn from "@/components/global/Btn";

// const Ntwrk_sec8 = () => {

//   return (
//     <div className="relative bg-[#f5f5f5]">

//       <img className="absolute left-[0] top-[0] w-[110px] xl:w-[auto]" src='/network_overview/sustain_vctr2.png'></img>
//       <img className="absolute right-[0] top-[0] w-[80px] xl:w-[auto]" src='/network_overview/sustain_vctr1.png'></img>

//       <div className="relative w-full  overflow-hidden fix 1280:pt-[100px] pt-[45px] ">

//         <div className="flex justify-center">
//           <div className="flex items-center flex-col w-fit relative text-center">
//             <h1 className="sec_hd bw-r"><span className="bw-m">Sustainable Design</span></h1>
//             <h1 className="sec_hd bw-r">and Operations</h1>
//             <img
//               src="/abstract_pattern_sustain.png"
//               className="abstract_sustian_svg xl:mt-[25px] my-[15px]"
//             />

//             <div className="lg:w-[745px] 1440:w-[762px] 1536:w-[862px] lg:mt-[50px]">
//               <p className="bw-r text-[17px] md:text-[20px] lg:text-[20px] 1280:text-[22px] md:leading-[28px] text-[#0db14b] mb-[20px]">All our parks are developed using green building practices and smart, efficient layouts that improve operational flow while creating healthier, more humane spaces for the people working inside them.</p>
//               <p className="bw-r text-[16px] md:text-[17px] 1280:text-[18px] md:leading-[28px] text-[#3B3B3B]">Our eco-conscious designs prioritise renewable power solutions, water recycling systems, efficient waste management, and the use of materials with lower embodied energy. Most of our operational parks are certified by the Indian Green Building Council (IGBC), ensuring we meet internationally recognised green standards. These certifications are not only a mark of our commitment to environmental responsibility but also a strategic advantage for businesses aiming to meet their own ESG and carbon reduction goals.</p>
//             </div>
//           </div>
//         </div>

//       </div>

//       <img className="xl:mt-[-300px] 1440:mt-[-335px] 1536:mt-[-335px] 1600:mt-[-360px] 1920:mt-[-440px] mt-[-40px] lg:mt-[-115px] w-full" src='/network_overview/sustainable_bg.png'></img>

//     </div>
//   );
// };

// export default Ntwrk_sec8;

"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Btn from "@/components/global/Btn";

const Ntwrk_sec8 = () => {
  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers animation smoothly
  });

  // Parallax movement range
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  const leftLeafY = useTransform(scrollYProgress, [0, 1], ["100%", "-50%"]); // slower upward
  const rightLeafY = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]); // slightly faster upward

  return (
    <div ref={ref} className="relative bg-[#f5f5f5] overflow-hidden">
      <img
        className="absolute left-[0] top-[0] w-[110px] xl:w-[auto]"
        src="/network_overview/sustain_vctr2.png"
        alt=""
      />
      <img
        className="absolute right-[0] top-[0] w-[80px] xl:w-[auto]"
        src="/network_overview/sustain_vctr1.png"
        alt=""
      />

      <div className="relative w-full overflow-visible fix 1280:pt-[70px] pt-[45px] z-1">
        <div className="flex justify-center">
          <div className="flex items-center flex-col w-fit relative text-center">
            <h2 className="sec_hd bw-r">
              <span className="bw-m">Sustainable Design</span>
            </h2>
            <h2 className="sec_hd bw-r">and Operations</h2>
            <img
              src="/abstract_pattern_sustain.png"
              className="abstract_sustian_svg xl:mt-[25px] my-[15px]"
              alt=""
            />

            <div className="lg:w-[745px] 1440:w-[762px] 1536:w-[862px] lg:mt-[50px]">
              <p className="bw-r text-[17px] md:text-[20px] lg:text-[20px] 1280:text-[22px] md:leading-[28px] text-[#0db14b] mb-[20px]">
                All our parks are developed using green building practices and
                smart, efficient layouts that improve operational flow while
                creating healthier, more humane spaces for the people working
                inside them.
              </p>
              <p className="bw-r text-[16px] md:text-[17px] 1280:text-[18px] md:leading-[28px] text-[#3B3B3B]">
                Our eco-conscious designs prioritise renewable power solutions,
                water recycling systems, efficient waste management, and the use
                of materials with lower embodied energy. Most of our operational
                parks are certified by the Indian Green Building Council (IGBC),
                ensuring we meet internationally recognised green standards.
                These certifications are not only a mark of our commitment to
                environmental responsibility but also a strategic advantage for
                businesses aiming to meet their own ESG and carbon reduction
                goals.
              </p>
            </div>
          </div>
        </div>
        <motion.img
          style={{ y: leftLeafY }}
          src="/network_overview/left_leaf.svg"
          className="absolute top-[auto] bottom-[0] left-0 hidden lg:block"
          alt=""
        />
        <motion.img
          style={{ y: rightLeafY }}
          src="/network_overview/right_leaf.svg"
          className="absolute top-[auto] bottom-[0] right-0 hidden lg:block"
          alt=""
        />
      </div>

      {/* ✅ Parallax Background Image (no blank patch) */}
      <motion.img
        style={{ y: bgY, scale: 1.2 }}
        className="xl:mt-[-300px] 1440:mt-[-335px] 1536:mt-[-335px] 1600:mt-[-360px] 1920:mt-[-440px] mt-[-40px] lg:mt-[-115px] w-full pointer-events-none select-none object-cover"
        src="/network_overview/sustainable_bg.png"
        alt="sustainable background"
      />
    </div>
  );
};

export default Ntwrk_sec8;
