"use client";
import React from "react";
import { motion } from "framer-motion";
import Btn from "@/components/global/Btn";
import CultureGrid from "./CultureGrid";

const Culture = () => {
  return (
    <div className="fix flex w-full justify-between py-20 h-full">
      <div className="flex flex-col flex-1">
        <div className=" ">
          <h2 className="bw-m text-[76px]  tracking-[0.04em]">A Thriving</h2>
          <br />
          <h3 className="bw-r text-[76px] tracking-[0.04em]">Culture</h3>
          <div className="xl:w-[307px] xl:h-[58px] md:w-[200px] md:h-[48px] w-[150px] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.25, once: true }}
            >
              <img
                src="/abstract_pattern.svg"
                className="w-full xl:h-[58px] md:h-[48px] h-[40px] object-cover"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div>
          <p className="bw-r text-[24px] leading-[34px]">
            Is the foundation of exceptional performance and innovation
          </p>
          <Btn text={"JOIN HORIZON"} />
        </div>
      </div>
      <div className="flex justify-end flex-1">
        <CultureGrid />
      </div>
    </div>
  );
};

export default Culture;
