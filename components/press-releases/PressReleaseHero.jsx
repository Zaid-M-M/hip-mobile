"use client";
import React from "react";
import { motion } from "framer-motion";

const PressReleaseHero = () => {
  return (
    <div className="w-full pt-[102px] pb-[60px] md:pb-[80px] lg:pb-[100px] bg-white">
      <div className="fix">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px]"
        >
          <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex items-left flex-col md:items-left relative md:w-[460px] lg:w-[auto]">
              <div className="flex gap-[10px] md:gap-[17px] md:flex-row flex-col items-start">
                <h1 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[43px] md:leading-[55px] xl:text-[52px] 1440:text-[56px] xl:leading-[62px] 1440:leading-[66px] lg:tracking-[-2.64px] bw-r lg:w-[auto] capitalize">
                  <span className="bw-m">Press Releases</span>
                </h1>
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg md:mt-[10px]"
                  alt="Abstract Pattern"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PressReleaseHero;
