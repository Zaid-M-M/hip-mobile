"use client";
import { keySectors } from "./keySectors.mock";
import SectorCard from "./SectorCard";
import SectorBackground from "./SectorBackground";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/src/app/hooks/useMediaQuery";
import { useEffect, useState } from "react";
// import { cardVariants, gridStaggerVariants } from "@/animations/motionVariants";
export default function KeySectors() {
  const isXL = useMediaQuery("(min-width: 768px)");
  const [targetWidth, setTargetWidth] = useState(130);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.7, 0, 0.4, 1],
        staggerChildren: 0.15, // stagger for each child
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
  };
  // Each card animation
  // const cardVariants = {
  //   hidden: { opacity: 0, y: 30 }, // starts lower
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  useEffect(() => {
    const handleResize = () => {
      setTargetWidth(window.innerWidth < 640 ? 84 : 130);
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const columns = 3;
  return (
    // <section className="relative w-full h-full 2xl:h-[849px] overflow-hidden text-white lg:pt-[50px] md:pt-[50px] pt-[50px]">
    <section className="relative w-full h-full 2xl:min-h-auto overflow-hidden text-white  lg:pt-[80px] xl:pt-[40px] 1440:pt-[70px] pt-[45px]">
      <SectorBackground defaultBg="/home/keysectors/keysectors.png" />
      <div className="absolute inset-0 z-10 bg-black/10" />
      {/* This is now the flex container that includes both heading and grid */}
      <div className="relative z-20 flex flex-col items-end justify-end w-full h-full ">
        {/* Heading placed ABOVE the grid, but inside the flex */}
        {/* <div className="xl:pt-20 2xl:pt-0 "> */}
        <motion.h2
          // initial={{ opacity: 0, x: -80 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{
          //   delay: 0.2,
          //   duration: 0.6,
          //   ease: "easeIn",
          // }}
          className="text-[35px] md:text-[45px] lg:text-[56px] xl:text-[56px] xl:leading-[76px] z-10 bw-m lg:leading-[65px] pb-[28px] sm:pb-0 md:leading-[58px] leading-[45px] justify-start 2xl:-mb-36 fix 2xl:pb-[30px] "
        >
          <motion.span
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-start gap-3  md:gap-[27px] 1280:gap-[20px] whitespace-nowrap tracking-[-0.04em]"
          >
            Powering Progress{" "}
            {/* <motion.div className="relative inline-block overflow-hidden align-middle w-full max-w-[249px] h-auto"></motion.div> */}
          </motion.span>
          <motion.span
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="block bw-r tracking-[-0.04em] lg:mt-[-6px]"
          >
            Across Every Sector
          </motion.span>
          <motion.div
            className="lg:flex hidden justify-start mt-2 h-[50px] 1366:h-[58px] overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: "257px" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
          >
            <img
              src="/abstract_pattern.webp"
              alt="Truck"
              className="object-cover h-full"
            />
          </motion.div>
        </motion.h2>

        <motion.div
          className="
            grid
            gap-0
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-3
            md:pl-[40px]
            lg:pl-[55px]
            lg:auto-rows-[170px]
            auto-rows-[140px]
            2xl:auto-rows-[223px]
            1280:-mt-16
            1366:-mt-12
            1536:-mt-0
            1600:pt-10
            1920:pt-12
            w-[100%]
            md:w-[auto]
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {keySectors.map((sector, index) => {
            let gridStyle = {};
            let position = "";

            if (isXL) {
              if (index === 0) {
                gridStyle = { gridColumn: "2", gridRow: "1" };
                position = "top-middle";
              } else if (index === 1) {
                gridStyle = { gridColumn: "3", gridRow: "1" };
                position = "top-right";
              } else if (index === 2) {
                gridStyle = { gridColumn: "1", gridRow: "2" };
                position = "middle-left";
              } else if (index === 3) {
                gridStyle = { gridColumn: "2", gridRow: "2" };
                position = "middle-middle";
              } else if (index === 4) {
                gridStyle = { gridColumn: "3", gridRow: "2" };
                position = "middle-right";
              } else if (index === 5) {
                gridStyle = { gridColumn: "1", gridRow: "3" };
                position = "bottom-left";
              } else if (index === 6) {
                gridStyle = { gridColumn: "2", gridRow: "3" };
                position = "bottom-middle";
              } else if (index === 7) {
                gridStyle = { gridColumn: "3", gridRow: "3" };
                position = "bottom-right";
              }
            }

            return (
              <motion.div
                key={sector.id}
                style={gridStyle}
                variants={cardVariants} // ✅ Use card animation
              >
                <SectorCard sector={sector} position={position} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
