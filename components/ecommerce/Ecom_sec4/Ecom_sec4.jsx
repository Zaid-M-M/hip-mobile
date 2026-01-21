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
                  Helping
                </h2>
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg hidden md:block"
                />
              </div>
              <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[76px] 1440:text-[66px] 1440:leading-[76px] bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize bw-r">
                India Move
              </h2>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg block md:hidden"
              />
            </div>

            {/* Main paragraph */}
            <p className="text-[18px] leading-[28px] bw-r 2xl:text-[20px] 2xl:leading-[30px] mb-[24px] mt-[20px]">
              We power the backbone of India’s digital economy - from nationwide
              e-commerce leaders to fast-growing D2C innovators redefining
              last-mile fulfilment. Horizon Industrial Parks partners with
              leading logistics, retail, and tech-driven enterprises to build
              fulfilment-ready spaces that move goods at the speed of demand.
              <br />
              <br />
              Our parks host large-scale distribution hubs, regional fulfilment
              centres, and in-city warehouses that keep India’s online
              marketplace moving. With every collaboration, Horizon strengthens
              the infrastructure behind millions of doorstep deliveries -
              helping businesses reach faster, scale smarter, and deliver better
              every day.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img
              className="relative xl:absolute bottom-[0px]"
              src="/ecommerce/Ecommerce_img.png"
              alt="LF Logistics Case Study"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec4;
