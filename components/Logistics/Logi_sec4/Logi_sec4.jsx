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
//                 {/* <h1 className="text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize">
//                   India Make
//                 </h1> */}
//               </div>
//               <h1 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px]  lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize bw-r">
//                 India Move <br></br>
//               </h1>
//               <img
//                 src="/abstract_pattern.svg"
//                 className="abstract_svg block md:hidden"
//               />
//             </div>
//             <p className="xl:w-[488px]  text-[18px] leading-[28px] bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px]">
//               LF Logistics (now part of Maersk), a leading Asia-focused
//               third-party logistics provider, partnered with Horizon Industrial
//               Parks to develop a large-scale, time-critical warehousing facility
//               in Farukhnagar, NCR. Tasked with delivering nearly 5 lakh sq. ft.
//               of high-quality space on short notice, Horizon swiftly
//               reconfigured its master plan to merge two adjacent blocks,
//               creating a custom-built, multi-client facility designed to serve
//               LF Logistics’ fashion, retail, and FMCG operations. Within weeks,
//               1.5 lakh sq. ft. was handed over to enable immediate operations,
//               with the full 4.6 lakh sq. ft. completed soon after. The facility
//               features tailored mezzanine areas, optimised lighting, scalable
//               storage configurations, and is designed for rooftop solar
//               integration. Horizon’s agile project management and accelerated
//               delivery ensured LF Logistics could expand seamlessly while
//               maintaining operational excellence. The partnership reinforces
//               Horizon’s ability to execute complex, fast-track industrial
//               projects that empower 3PL players to stay ahead in India’s rapidly
//               evolving supply chain landscape.
//             </p>

//             <Btn
//               href="/case-studies/horizons-accelerated-development-emerges-as-a-masterstroke-for-3-pl-player"
//               text="View Case Study"
//               className="mt-[0px]"
//             />
//           </div>

//           {/* Column 2 */}
//           <div className="flex-1 relative">
//             <img
//               className="xl:w-[95%] w-[75%] m-[auto] pt-[30px] lg:pt-[0px] relative xl:absolute bottom-[0px]"
//               src="/logistics/logistics_img.png"
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
              LF Logistics (now part of Maersk), a leading Asia-focused 3PL
              provider, partnered with Horizon Industrial Parks to develop a 4.6
              lakh sq. ft. warehousing facility in Farukhnagar, NCR. Delivered
              on an accelerated timeline, Horizon reconfigured its master plan
              to merge two blocks, handing over 1.5 lakh sq. ft. within weeks
              for immediate operations. The facility includes mezzanine areas,
              optimised lighting, scalable storage, and rooftop solar readiness.
              Horizon’s agile execution enabled LF Logistics to expand rapidly
              while ensuring operational excellence in India’s dynamic supply
              chain sector.
            </p>

            {/* CTA Button */}
            <Btn
              href="/case-studies/horizons-accelerated-development-emerges-as-a-masterstroke-for-3-pl-player/"
              text="View Case Study"
              className="mt-[20px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img
              className="relative xl:absolute bottom-[-10px]"
              src="/logistics/logistics_img.png"
              alt="LF Logistics Case Study"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec4;
