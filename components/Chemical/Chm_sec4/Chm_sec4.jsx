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
//                 <h2 className="text-[35x] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize 360:text-[40px] 360:leading-[50px]">
//                   Project
//                 </h2>

//                 <img
//                   src="/abstract_pattern.svg"
//                   className="abstract_svg hidden md:block"
//                 />
//               </div>
//               <h2 className="text-[35x] leading-[45px] md:text-[45px] md:leading-[55px]  lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize bw-r 360:text-[40px] 360:leading-[50px]">
//                 Highlights <br></br>
//               </h2>
//               <img
//                 src="/abstract_pattern.svg"
//                 className="abstract_svg block md:hidden"
//               />
//             </div>
//             <p className="xl:w-[488px]  text-[18px] leading-[28px] bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px]">
//               Fosroc India, a leading manufacturer of high-performance
//               construction chemicals and a subsidiary of the UK-based Fosroc
//               International, partnered with Horizon Industrial Parks to
//               establish a customised built-to-suit manufacturing and warehouse
//               facility in Hyderabad, Telangana. Spanning 1.2 lakh sq. ft. within
//               JCK Horizon Industrial Park, the facility is designed to enhance
//               Fosroc’s production capacity across southern India while meeting
//               its specialised operational and safety requirements. Developed
//               with a 23-metre high section for flammable chemical storage and
//               equipped with advanced infrastructure, the campus integrates
//               energy-efficient features such as skylights, roof insulation, and
//               rooftop solar readiness. Built using materials with low embodied
//               carbon and compliant with stringent environmental and regulatory
//               standards, the project reflects Horizon’s ability to deliver
//               tailored, ESG-aligned industrial spaces. This collaboration
//               strengthens Fosroc’s manufacturing footprint in India, supporting
//               its continued growth and commitment to sustainable construction
//               solutions.
//             </p>

//             <Btn text="Fosroc" className="mt-[0px]" />
//           </div>

//           {/* Column 2 */}
//           <div className="flex-1 relative">
//             <img
//               className="xl:w-[95%] w-[75%] m-[auto] pt-[30px] lg:pt-[0px] relative xl:absolute bottom-[0px]"
//               src="/chemical/Chemicals_img.png"
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
              Fosroc India, a leading manufacturer of construction chemicals and
              subsidiary of the UK-based Fosroc International, partnered with
              Horizon Industrial Parks to develop a 1.2 lakh sq. ft.
              built-to-suit manufacturing and warehouse facility in Hyderabad,
              Telangana. Located within JCK Horizon Industrial Park, it features
              a 23-metre-high section for flammable chemical storage, advanced
              infrastructure, and energy-efficient design with skylights, roof
              insulation, and solar readiness. Built using low-carbon materials
              and ESG-compliant standards, the facility enhances Fosroc’s
              production capacity and reinforces its commitment to sustainable
              growth.
            </p>

            {/* CTA Button */}
            <Btn
              href="/case-studies/horizon-delivers-impressive-bespoke-solution-for-fosroc/"
              text="View Case Study"
              className="mt-[20px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img
              className="relative xl:absolute bottom-[0px]"
              src="/chemical/Chemicals_img.png"
              alt="LF Logistics Case Study"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec4;
