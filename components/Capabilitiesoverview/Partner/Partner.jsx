"use client";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";
import React from "react";
import Connect_from from "./connect_from";

const Partner = () => {
  return (
    <>
      <div
        className="h-[280px] md:h-[250px] lg:h-[312px] overflow-hidden w-full relative bg-cover  bg-center"
        style={{ backgroundImage: "url('/Cap_Overview/partner_us_bg.jpg')" }}
      >
        <div className="flex-col flex sm:flex-row items-start sm:items-center h-full justify-center gap-[22px] sm:gap-0 sm:justify-between fix w-full">
          <div className="flex flex-col leading-[40px] sm:leading-[69px]">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: 0,
                ease: [1, 0, 0.2, 1],
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="bw-m text-[38px] 768:text-[45px] md:leading-[55px] xl:leading-[74px] lg:text-[64px] tracking-[-0.04em] text-white"
            >
              Partner
            </motion.h2>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.25,
                ease: [0.7, 0, 0.4, 1],
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="bw-r text-[38px] 768:text-[45px] md:leading-[55px] xl:leading-[74px] lg:text-[64px] tracking-[-0.04em] text-white"
            >
              With Us
            </motion.h2>
          </div>
          <div className="flex flex-col justify-center gap-[14px] sm:gap-[22px] lg:gap-[34px] w-[100%] sm:w-[50%]">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.1 }}
              className="bw-r sm:text-xl lg:text-[28px] text-white leading-[150%] "
            >
              Looking to scale your operations, expand into a new region, or fast-track a new facility? Let’s build it—faster, smarter, and fully aligned to your logistics or manufacturing needs.

            </motion.p>

          </div>
        </div>
      </div>

      <Connect_from />
    </>
  );
};

export default Partner;
