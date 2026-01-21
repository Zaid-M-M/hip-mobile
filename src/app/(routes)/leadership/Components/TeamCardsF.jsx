import React from "react";
import { motion } from "framer-motion";

const TeamCardsF = ({ name, role, image, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer text-center group w-full md:max-w-[280px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
    >
      <div
        className="w-full aspect-[280/306] rounded-md bg-[url('/images/background_grey.png')] 
                group-hover:bg-[url('/images/colorfull.png')] bg-cover bg-no-repeat 
                flex items-center justify-center transition-all duration-300"
      >
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      <h3 className="mt-5 text-[20px] md:text-[24px] xl:text-[28px] 1440:text-[28px] bw-sb text-black leading-none ">
        {name}
      </h3>
      <p className="text-[#433F45] text-[15px] md:text-[17px] lg:text-[19px] bw-m leading-[120%] mt-[8px]">
        {role}
      </p>
    </motion.div>
  );
};

export default TeamCardsF;
