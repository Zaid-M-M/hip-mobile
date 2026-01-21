"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const DHead = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col md:gap-10 gap-5 fix">
      <div className="flex flex-col md:flex-row xl:gap-6">
        {/* ---- LEFT ---- */}
        <div className="w-full flex-1 flex flex-col justify-center">
          <h2 className="text-[35px] flex flex-col md:text-[45px] xl:text-[52px] xl:leading-[62px] 2xl:text-[64px] 2xl:leading-[74px] md:leading-[55px] leading-[45px] bw-r xl:tracking-[-2.26px]">
            <span className="bw-m txt_gradient">Enabling</span>
            <span className="flex lg:flex-row flex-col xl:gap-[17px] gap-[10px]">
              <p className="text-[35px] text-white flex lg:flex-row flex-col gap-[17px] xl:gap-5 md:text-[45px] xl:text-[52px] xl:leading-[62px] 2xl:text-[64px] 2xl:leading-[74px] md:leading-[55px] leading-[45px] bw-r xl:tracking-[-2.26px]">
                Agile Growth
              </p>
              <img
                className="abstract_svg"
                src="/abstract_pattern.svg"
                alt="Sustainability Gradient"
              />
            </span>
          </h2>
        </div>
      </div>

      {/* Optional paragraph under everything */}
      <div className="flex gap-5 flex-col justify-center mt-0">
        <p className="bw-r text-[#E0E0E0] md:text-[17px] lg:text-[18px] 1280:text-[20px] md:leading-[30px]">
          We make it easier for businesses to scale and succeed with our
          integrated business solutions.
        </p>
        <p className="bw-r text-[#E0E0E0] md:text-[17px] lg:text-[18px] 1280:text-[20px] md:leading-[30px]">
          From strategic land acquisition and flexible park design to on-ground
          asset management, our end-to-end solutions approach supports your
          operations across every stage. We reduce delays, ensure compliance,
          and offer the agility your business needs — today and tomorrow.
        </p>
      </div>
    </div>
  );
};

export default DHead;
