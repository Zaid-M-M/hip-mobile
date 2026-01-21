"use client";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";
import React from "react";

const WhatNew = () => {
  return (
    <div
      className="h-[312px] overflow-hidden w-full relative bg-cover  bg-center"
      style={{ backgroundImage: "url('/whatnew.webp')" }}
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
            className="bw-r text-[38px] 768:text-[58px] lg:text-[64px] tracking-[-0.04em] text-white"
          >
            What's
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
            className="bw-m text-[38px] 768:text-[58px] lg:text-[64px] tracking-[-0.04em] text-white"
          >
            New...!
          </motion.h2>
        </div>
        <div className="flex flex-col justify-center gap-[14px] sm:gap-[22px] lg:gap-[34px] w-full sm:w-[50%]">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="bw-r sm:text-xl lg:text-[24px] text-white leading-[150%]"
          >
            Whether you're an organisation driving environmental change, Let’s
            join forces to make a measurable impact. Reach out to us.{" "}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.35, 1] }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Btn text={"View More"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;
