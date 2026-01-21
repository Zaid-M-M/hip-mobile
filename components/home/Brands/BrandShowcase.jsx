"use client";
import Slider from "@/components/global/Slider";
import React from "react";
import { motion } from "framer-motion";
import Btn from "@/components/global/Btn";

const BrandShowcase = () => {
  return (
    // <div className="w-full  bg-[#EBEBEB] py-[45px] 1024:py-[80px] 1280:py-[50px] flex flex-col items-center justify-center gap-[26px] overflow-hidden xl:gap-[48px]">
    <div className="w-full  bg-[#EBEBEB] py-[45px] 1024:py-[50px] 1280:py-[50px] flex flex-col items-center justify-center gap-[25px] overflow-hidden xl:gap-[25px]">
      <div className="relative overflow-hidden fix mb-[30px] flex  justify-between items-center">
        <motion.h2
          // initial={{ y: "40px", opacity: 0 }}
          // whileInView={{ y: "0", opacity: 1 }}
          // transition={{ duration: 0.65, ease: [1, 0, 0.3, 1], delay: 0.2 }}
          // viewport={{ once: true, amount: 0.1 }}
          className="bw-m text-[36px] sm:text-[46px] md:text-[48px] tracking-[-0.04em] lg:text-[52px]  xl:text-[64px]  leading-[42px] 768:leading-[60px] 1280:leading-[74px]"
        >
          Industry Leaders <br />
          <div className="flex gap-4">
            <motion.span
              // initial={{ y: "40px", opacity: 0 }}
              // whileInView={{ y: "0", opacity: 1 }}
              // transition={{ duration: 0.65, ease: [1, 0, 0.3, 1], delay: 0.2 }}
              // viewport={{ once: true, amount: 0.1 }}
              className="bw-r"
            >
              Who Trust Us
            </motion.span>
            <span className="mt-1 ">
              <img
                src="/abstract_pattern.webp"
                className="abstract_svg"
                alt=""
              />
            </span>
          </div>
        </motion.h2>
        <Btn
          href="/sector-specialists/"
          text={"VIEW BY SECTORS"}
          className="md:flex hidden"
        />
      </div>
      <Slider />
      <Btn
        href="/sector-specialists/"
        text={"VIEW BY SECTORS"}
        className="md:hidden flex"
      />
    </div>
  );
};

export default BrandShowcase;
