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
//                 India Make <br></br>
//               </h1>
//               <img
//                 src="/abstract_pattern.svg"
//                 className="abstract_svg block md:hidden"
//               />
//             </div>
//             <p className="xl:w-[488px]  text-[18px] leading-[28px] bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px]">
//               SIG Combibloc (SIG), a global leader in packaging systems,
//               partnered with Horizon Industrial Parks to establish its first
//               aseptic carton manufacturing facility in India. After evaluating
//               multiple sites, SIG chose Horizon’s park in Bhayala, near
//               Ahmedabad, for its proven track record in sustainable, world-class
//               industrial infrastructure. Spread across 32.6 acres with 7.82 lakh
//               sq. ft. of built-up area, the project was delivered in phases,
//               with Phase I completed in just 12 months. The facility
//               incorporates advanced infrastructure, specialized foundations,
//               efficient HVAC, and an integrated building management system, all
//               designed to meet LEED Gold standards. With renewable energy
//               readiness, rainwater harvesting, water recycling, and extensive
//               green landscaping, it exemplifies ESG-led development. The
//               collaboration highlights Horizon’s expertise in complex,
//               sustainable industrial solutions and empowers SIG to expand its
//               India footprint with agility and environmental responsibility.
//             </p>

//             <Btn
//               text="View Case Study"
//               href="/case-studies/aseptic-carton-manufacturing-facility-for-sig-combibloc"
//               className="mt-[0px]"
//             />
//           </div>

//           {/* Column 2 */}
//           <div className="flex-1 relative">
//             <img
//               className="xl:w-[95%] w-[75%] m-[auto] pt-[30px] lg:pt-[0px] relative xl:absolute bottom-[0px]"
//               src="/pakaging/Packaging_img.png"
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
      {" "}
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

            {/* Main Paragraph */}
            <p className="text-[18px] leading-[28px] bw-r 2xl:text-[20px] 2xl:leading-[30px] mb-[24px] mt-[20px]">
              SIG Combibloc (SIG), a global leader in packaging systems,
              partnered with Horizon Industrial Parks to set up its first
              aseptic carton manufacturing facility in India at Bhayala, near
              Ahmedabad. Spanning 32.6 acres with 7.82 lakh sq. ft. of built-up
              area, the project was delivered in phases, with Phase I completed
              in just 12 months. Built to LEED Gold standards, it features
              advanced infrastructure, efficient HVAC, and renewable energy
              readiness. The ESG-led facility underscores Horizon’s expertise in
              sustainable, large-scale industrial developments supporting global
              manufacturing excellence.
            </p>

            {/* CTA Button */}
            <Btn
              text="View Case Study"
              href="/case-studies/aseptic-carton-manufacturing-facility-for-sig-combibloc/"
              className="mt-[20px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img
              className="relative xl:absolute bottom-[0px]"
              src="/pakaging/Packaging_img.png"
              alt="SIG Combibloc Facility"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec4;
