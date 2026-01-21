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
              <div className="flex gap-[10px] md:gap-[17px] flex-row">
                <h2 className="text-[35x] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize 360:text-[40px] 360:leading-[50px]">
                  Project
                </h2>

                <img src="/abstract_pattern.svg" className="abstract_svg " />
                {/* <h1 className="text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize">
                  India Make
                </h1> */}
              </div>
              <h2 className="text-[35x] leading-[45px]  md:text-[45px] md:leading-[55px]  lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px]  bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize bw-r 360:text-[40px] 360:leading-[50px]">
                Highlights
              </h2>
            </div>
            <p className="text-[18px] leading-[28px] bw-r 2xl:text-[20px] 2xl:leading-[30px] mb-[24px] mt-[20px]">
              Anand Mando E-Mobility (AMEM), a joint venture between ANAND Group
              and Mando Corporation, partnered with Horizon Industrial Parks to
              develop a 41,000 sq. ft. plug-and-play manufacturing facility in
              Hosur, Tamil Nadu. Located along NH 44 near key auto clusters, the
              Grade A facility supports EV traction motor and controller
              production for two- and three-wheelers. Delivered in just four
              months, it features a 12 m clear height, rooftop solar, skylights,
              and efficient ventilation. Built with low-carbon materials and ESG
              compliance, it exemplifies Horizon’s excellence in sustainable,
              high-performance manufacturing infrastructure.
            </p>

            <Btn
              href="/case-studies/plug-and-play-auto-component-facility-for-anand-mando-in-hosur/"
              text="View Case Study"
              className="mt-[20px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img
              className="relative xl:absolute bottom-[0px]"
              src="/automotive/Automotive_img (2).png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec4;
