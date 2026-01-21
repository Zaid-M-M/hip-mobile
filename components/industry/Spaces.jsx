"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const sboxs = [
  {
    image: "/ind/spacebox/b1.jpg",
    text: "Customised Structural Updates & PEB Features for Industrial Parks",
  },
  {
    image: "/ind/spacebox/b2.jpg",
    text: "Complex Utility Requirements for Process Industries",
  },
  { image: "/ind/spacebox/b3.jpg", text: "Roof & Wall Installation " },
  { image: "/ind/spacebox/b4.jpg", text: "Temperature-Controlled Areas" },
  {
    image: "/ind/spacebox/b5.jpg",
    text: "Combination of Forced & Natural Ventilation System",
  },
];
const imageVariants = {
  initial: {
    clipPath: "inset(30% 0 0 30%)",
    width: "70%",
    height: "70%",
    left: "auto",
    right: 30,
    bottom: 25,
  },
  hover: {
    clipPath: "inset(0% 0px 0px 0%)",
    width: "100%",
    height: "100%",
    right: 0,
    bottom: 0,
    transition: {
      clipPath: { duration: 1, ease: [0.7, 0, 0.4, 1] },
      width: { duration: 1, ease: [0.7, 0, 0.4, 1] },
      height: { duration: 1, ease: [0.7, 0, 0.4, 1] },
      right: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 },
      bottom: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 },
    },
  },
};
const Spaces = () => {
  const [isMobile, setIsMobile] = useState(false);
  // check screen size on mount + resize
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 2500);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <div className="bg-[url(/ind/bt.jpg)] bg-cover bg-no-repeat">
      <div className="fix flex flex-col gap-14 lg:py-24 py-[45px]">
        {/* Heading */}
        <div>
          <div className="flex items-center gap-5">
            <h2 className="inline-block w-fit text-[33px] leading-[43px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] xl:tracking-[-2.56px] xl:text-[64px] xl:leading-[74px] bw-m bg-[linear-gradient(111deg,#AC38D9,#f47920)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap ">
              Solutions That Evolve
            </h2>
          </div>
          <div className="flex items-center gap-[10px] md:gap-[17px]">
            <h2 className="text-[35px] leading-[45px]  md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] bw-r text-white">
              With Your Needs
            </h2>
            <img
              src="/abstract_pattern.svg"
              className="abstract_svg hidden md:block"
              alt=""
            />
          </div>
          <img
            src="/abstract_pattern.svg"
            className="abstract_svg block md:hidden mt-[10px]"
            alt=""
          />
        </div>
        {/* Grid Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sboxs.map((sb, index) => (
            <motion.div
              key={index}
              className="relative group w-full aspect-square bg-[#212324] flex flex-col gap-4 text-white overflow-hidden"
              initial="initial"
              // :point_down: if mobile, always animate to hover, else only on hover
              animate={isMobile ? undefined : "hover"}
              whileHover={isMobile ? undefined : "hover"}
            >
              <div className="group w-full p-6 pt-6 pl-6 z-[10] flex flex-col gap-4 bg-gradient-to-b from-[#212324] to-transparent text-white overflow-hidden">
                <p className="w-fit text-[20px] leading-[20px] bw-m bg-gradient-to-b bg-clip-text text-transparent bg-[linear-gradient(165deg,#f47920_22.78%,#A66EFF_83.38%)] z-10 relative">
                  0{index + 1}
                </p>
                <p className="text-[22px] xl:text-[24px] 1440:text-[28px] text-white bw-r md:leading-[120%] leading-[32px] z-10 relative">
                  {sb.text}
                </p>
              </div>
              <motion.img
                src={sb.image}
                alt={sb.text}
                // variants={imageVariants}
                className="absolute object-cover bottom-0 right-0 left-auto top-auto w-full h-full z-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Spaces;
