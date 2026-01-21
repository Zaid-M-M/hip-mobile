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
//                 <h1 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize">
//                   Helping
//                 </h1>
//                 <img
//                   src="/abstract_pattern.svg"
//                   className="abstract_svg hidden md:block"
//                 />
//               </div>
//               <h1 className="text-[35px] leading-[45px]  md:text-[45px] md:leading-[55px]  lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize">
//                 India Make
//               </h1>
//               <img
//                 src="/abstract_pattern.svg"
//                 className="abstract_svg block md:hidden"
//               />
//             </div>
//             <p className="xl:w-[488px]  text-[18px] leading-[28px] bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px]">
//               India’s clean energy transition is no longer theoretical - it’s in
//               motion. With 119 GW of installed solar and 188 GW total renewables
//               (as of July 2025) toward a 500 GW non-fossil goal by 2030,
//               logistics demand is accelerating across PV, wind, and storage
//               supply chains. Domestic PV manufacturing has surged past 100 GW
//               under ALMM, driving upstream and midstream movement of glass,
//               cells, EVA, frames, and finished modules. Central incentives are
//               now propelling large-scale battery storage, creating new needs for
//               compliant warehousing and distribution. Horizon is not just
//               keeping pace but leading - integrating 19 MWp of rooftop solar
//               across its parks and embedding energy-efficient retrofits. This is
//               growth made tangible, built on infrastructure ready before the
//               curve - making Horizon a true partner in India’s energy
//               transition.
//             </p>

//             <Btn text="link to all case studies" className="mt-[0px]" />
//           </div>

//           {/* Column 2 */}
//           <div className="flex-1 relative">
//             <img
//               className="xl:w-[100%] w-[75%] m-[auto] pt-[30px] lg:pt-[0px] relative xl:absolute bottom-[0px]"
//               src="/renewable/Renewable_img (1).png"
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
              Vestas, a global leader in wind energy, partnered with
              Greenbase–Horizon Industrial Parks to establish an integrated,
              process-led manufacturing hub in Oragadam, Chennai. Spanning 27
              acres with 3.5 lakh sq. ft. of built-up area and a 5.2 lakh sq.
              ft. open yard, the facility consolidates nacelle, hub, converter,
              and generator production under one roof. Despite COVID-19
              challenges, it was delivered within seven months. ESG-aligned and
              designed for heavy-duty and electronics-grade operations, the hub
              exemplifies sustainable, world-class industrial development
              supporting India’s clean-energy manufacturing ecosystem.
            </p>

            {/* CTA Button */}
            <Btn
              text="View Case Study"
              href="/case-studies/integrated-manufacturing-hub-for-a-global-wind-energy-oem/"
              className="mt-[20px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img
              className="relative xl:absolute bottom-[0px]"
              src="/renewable/Renewable_img (1).png"
              alt="LF Logistics Case Study"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec4;
