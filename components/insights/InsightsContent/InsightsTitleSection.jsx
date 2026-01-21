"use client";
import React from "react";
import { motion } from "framer-motion";

const InsightsTitleSection = ({ activeTab }) => {
  return (
    <div className="fix pt-[40px] pb-5 xl:pb-[30px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row justify-between md:gap-[20px] gap-[25px]"
      >
        <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%]">
          <div className="flex items-left flex-col md:items-left relative md:w-[460px] lg:w-[auto]">
            <div className="flex gap-[10px] md:gap-[17px] md:flex-row flex-col items-start md:items-center">
              <h2 className="lg:w-[auto] capitalize whitespace-nowrap text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[64px] lg:leading-[74px] font-barlow font-normal tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.56px] text-black">
                <span className="bw-r">{activeTab}</span>
              </h2>
              <img
                src="/abstract_pattern.svg"
                alt="Abstract Pattern"
                className="abstract_svg"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InsightsTitleSection;
