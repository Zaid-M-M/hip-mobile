// import React from "react";
// import Btn from "@/components/global/Btn";

// const Ecom_sec4 = () => {
//   return (
//     <div className="border-b border-[#CECECE]">
//       <div className="relative w-full  overflow-hidden fix 1280:pt-[80px] pt-[45px] ">
//         <div className="flex xl:flex-row flex-col xl:gap-0 gap-10">
//           {/* Column 1 */}
//           <div className="w-full xl:w-[510px] 1440:w-[650px] xl:pb-[90px]">
//             <div className="flex items-left flex-col relative w-fit">
//               <div className="flex gap-[10px] mt-2 md:gap-[17px]  md:flex-row flex-col">
//                 <h1 className="text-[35x] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize">
//                   Helping
//                 </h1>

//                 <img
//                   src="/abstract_pattern.svg"
//                   className="abstract_svg hidden md:block"
//                 />
//                 {/* <h1 className="text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize">
//                   India Make
//                 </h1> */}
//               </div>
//               <h1 className="text-[35x] leading-[45px] md:text-[45px] md:leading-[55px]  lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize bw-r">
//                 India Move <br></br>
//               </h1>
//               <img
//                 src="/abstract_pattern.svg"
//                 className="abstract_svg block md:hidden"
//               />
//             </div>
//             <p className="xl:w-[488px]  text-[18px] leading-[28px] bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px]">
//               We collaborate to power India’s fast-moving consumer landscape —
//               from everyday essentials to global brands that define modern
//               living. Horizon Industrial Parks partners with some of the most
//               trusted names in food, beverage, personal care, and home goods —
//               including Nestlé, Colgate, and Decathlon — to enable nationwide
//               rollouts, seamless market expansions, and agile, quick-turn supply
//               chains. Our spaces don’t just store products; they move
//               possibilities — ensuring goods reach shelves, consumers, and
//               communities faster. With each partnership, Horizon continues to
//               strengthen India’s manufacturing and distribution backbone,
//               helping brands deliver at the speed of demand and scale with
//               confidence.
//             </p>

//             <Btn text="IG International" className="mt-[0px]" />
//           </div>

//           {/* Column 2 */}
//           <div className="flex-1 relative">
//             <img
//               className="xl:w-[100%] w-[75%] m-[auto] pt-[30px] lg:pt-[0px] relative xl:absolute bottom-[0px]"
//               src="/fmgc/Fmcg_img.png"
//             ></img>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ecom_sec4;
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Btn from "@/components/global/Btn";

const Ecom_sec4 = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border-b border-[#CECECE] relative overflow-hidden">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />
      <div className="relative w-full overflow-hidden fix 1280:pt-[80px] pt-[45px]">
        <div className="flex xl:flex-row flex-col xl:gap-0 gap-5">
          {/* Column 1 */}
          <div className="w-full xl:w-[510px] 1440:w-[650px] xl:pb-[90px]">
            <div className="flex items-left flex-col relative w-fit">
              <div className="flex gap-[10px] md:gap-[17px] md:flex-row flex-col">
                <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px] bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize">
                  Project
                </h2>
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg hidden md:block"
                />
              </div>
              <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px] bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize bw-r">
                Highlights
              </h2>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg block md:hidden"
              />
            </div>

            {/* Main paragraph */}
            <p className="text-[18px] leading-[28px] bw-r 2xl:text-[20px] 2xl:leading-[30px] mb-[24px] mt-[20px]">
              IG International partnered with Horizon Industrial Parks to
              develop an 87,500 sq.ft. built-to-suit cold chain facility in
              Hosur, strategically connected to Bengaluru and major highways.
              Delivered on schedule in 2023, the facility includes customised
              cold rooms, a 10,000–14,000 sq.ft. ante-room, 1000 kVA power,
              heavy-duty aprons, insulated PEB structure, and dedicated
              security. Designed for efficiency and sustainability, it supports
              over 200 refrigerated containers per day and integrates
              solar-ready roofing, low-carbon materials, and dual plumbing for
              improved resource management.
            </p>

            {/* CTA Button */}
            <Btn
              text="View Case Study"
              href="/case-studies/a-state-of-the-art-built-to-suit-cold-chain-facility-for-ig-international-at-shoolagiri/"
              className="mt-[20px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img
              className="relative xl:absolute bottom-[0px]"
              src="/fmgc/Fmcg_img.png"
              alt="LF Logistics Case Study"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec4;
