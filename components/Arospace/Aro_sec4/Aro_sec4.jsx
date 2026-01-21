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
      <div className="relative w-full  overflow-hidden fix 1280:pt-[80px] pt-[45px] ">
        <div className="flex xl:flex-row flex-col xl:gap-0 gap-5">
          {/* Column 1 */}
          <div className="w-full xl:w-[510px] 1440:w-[650px] xl:pb-[90px]">
            <div className="flex items-left flex-col relative w-fit">
              <div className="flex gap-[10px] mt-2 md:gap-[17px]  md:flex-row flex-col">
                <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize">
                  Project
                </h2>
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg hidden md:block"
                />
              </div>
              <h2 className="text-[35px] leading-[45px]  md:text-[45px] md:leading-[55px]  lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px]  bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize">
                Highlights
              </h2>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg mt-2 block md:hidden"
              />
            </div>
            <p className="text-[18px] leading-[28px] bw-r 2xl:text-[20px] 2xl:leading-[30px] mb-[24px] mt-[20px]">
              RENK India, part of the global RENK Group - a leader in propulsion
              and drivetrain technology - has partnered with Horizon Industrial
              Parks to develop an 83,000 sq. ft. built-to-suit facility in
              Shoolagiri, Tamil Nadu. Strategically located along NH 44 near
              SIPCOT, it integrates manufacturing, assembly, and warehousing.
              The facility includes specialised bays for gearbox assembly,
              60-tonne cranes, reinforced flooring, and an ETP. With rooftop
              solar, skylights, and water-efficient systems, the ESG-focused
              project was delivered in just nine months, showcasing Horizon’s
              expertise in sustainable, high-precision industrial
              infrastructure.
            </p>

            <Btn
              text="View Case Study"
              href="/case-studies/built-to-suit-manufacturing-facility-for-renk-india-in-shoolagiri/"
              className="mt-[20px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img
              className="relative xl:absolute bottom-[0px]"
              src="/aerospace/Aerospace_img.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec4;
