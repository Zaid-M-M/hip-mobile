"use client";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [targetWidth, setTargetWidth] = useState(130);

  useEffect(() => {
    const handleResize = () => {
      setTargetWidth(window.innerWidth < 640 ? 84 : 100);
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-col z-20 gap-[30px]">
      <div className="">
        <motion.h2
          className=" text-[36px] whitespace-nowrap overflow-hidden tracking-tight leading-[118%] lg:leading-[60px] xl:leading-[74px] 1440:leading-[125%]  md:text-[45px] lg:text-[56px] xl:text-[64px] bw-m"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.2 }}
          // animate={{ width: 0 }}
          transition={{
            // delay: 0.2,
            duration: 1.4,
            ease: [0.7, 0, 0.4, 1],
            // type: "tween",
          }}
        >
          Integrated
        </motion.h2>

        <motion.div className="flex gap-[10px] md:gap-[17px] h-fit items-end">
          <div className="w-fit">
            <motion.h2
              // initial={{ width: 0 }}
              // whileInView={{ width: "100%" }}
              // viewport={{ once: true, amount: 0.2 }}
              // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              className="text-[36px] whitespace-nowrap max-w-fit overflow-hidden md:text-[45px] leading-[120%] xl:leading-[74px] tracking-tighter lg:text-[56px] xl:text-[64px] bw-r"
            >
              Solutions
            </motion.h2>
          </div>

          <motion.div
            className="lg:flex hidden justify-start h-full items-end  overflow-hidden"
            // initial={{ width: 0 }}
            // whileInView={{ width: "157px" }}
            // viewport={{ once: true, amount: 0.6 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
          >
            <img
              src="/abstract_pattern.webp"
              alt="Truck"
              className="abstract_svg mb-0"
            />
          </motion.div>
          <motion.div
            className="lg:hidden flex justify-start items-center mb-0 sm:mb-0 sm:justify-start"
            // initial={{ width: 0 }}
            // whileInView={{ width: "172px" }}
            // viewport={{ once: true, amount: 0.6 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
          >
            <img
              src="/abstract_pattern.webp"
              alt="Truck"
              className="abstract_svg"
            />
          </motion.div>
        </motion.div>
        <motion.p
          className="w-full sm:w-fit sm:pt-[14px] pt-2 text-[16px] md:text-[18px] leading-[28px] 1440:text-[20px] bw-r text-black 1440:leading-[30px] m-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            delay: 0.6,
            duration: 0.65,
            ease: "easeOut",
            type: "tween",
          }}
        >
          Our commitment is to build the systems that keep your business moving.
          Hence, our integrated approach ensures you have everything you need to
          scale smarter and operate faster, while caring for the people who
          power your growth.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          delay: 0.65,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <Btn
          href="/integrated-business-solutions/"
          text={"Integrated Solutions"}
        />
      </motion.div>
    </div>
  );
};

export default Header;
