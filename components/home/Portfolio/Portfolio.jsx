import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="fixup relative h-full  w-full z-20 pt-[80px] lg:pt-[0px] mt-[-30px]">
      <motion.h2 className="text-[35px] md:text-[45px] lg:text-[56px] z-10 bw-m lg:leading-[65px] 1280:text-[74px] 1280:leading-[84px] sm:pb-0 md:leading-[55px] leading-[45px] justify-start ">
        <motion.span className="flex items-center gap-2 1280:gap-[20px] whitespace-nowrap tracking-[-0.04em]">
          Our{" "}
          <motion.div className="relative inline-block overflow-hidden sm:align-middle w-full max-w-[249px] h-auto">
            <motion.div className="lg:flex hidden justify-start items-end  overflow-hidden">
              <img
                src="/abstract_pattern.webp"
                alt="Truck"
                className="abstract_svg "
              />
            </motion.div>
            <motion.div className="lg:hidden flex items-center justify-start sm:justify-start  overflow-hidden">
              <img
                src="/abstract_pattern.webp"
                alt="Truck"
                className="abstract_svg "
              />
            </motion.div>
          </motion.div>
        </motion.span>
        <motion.span className="block bw-r whitespace-nowrap tracking-[-0.04em]">
          Portfolio
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default Portfolio;
