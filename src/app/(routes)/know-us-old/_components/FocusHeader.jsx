import React from "react";
import { motion } from "framer-motion";

const FocusHeader = () => {
  return (
    <div>
      <h1 className="bw-r text-[34px] 768:text-[45px] 1280:text-[65px] 1366:text-[64px] tracking-[-0.04em] 1280:leading-[1] m-0 mb-0 1280:mb-[18px]">
        <span className="bw-m">Our Ethos is Rooted in</span>
      </h1>
      <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2 sm:gap-5">
        <h2 className="bw-r text-[34px] whitespace-nowrap  768:text-[45px] 1280:text-[65px] 1366:text-[64px] tracking-[-0.04em] leading-[1] m-0">
          Four Core Pillars
        </h2>
        <div className="xl:w-[307px]  xl:h-[58px] md:w-[200px] md:h-[48px] w-[150px] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.25, once: true }}
          >
            <img
              src="/abstract_pattern.svg"
              className="w-[100px] sm:w-[226px] xl:h-[58px] md:h-[48px] h-[30px] object-cover"
              alt="Decorative Line"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FocusHeader;
