"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/src/app/hooks/useMediaQuery";

import { useKeySectorsStore } from "./useKeySectorsStore";
import Image from "next/image";
export default function SectorCard({ sector, gridStyle, index, variants }) {
  const setActiveBg = useKeySectorsStore((s) => s.setActiveBg);
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const baseClass = sector.gradient
    ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
    : "bg-black/30 text-white";
  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => {
        if (isDesktop) {
          setActiveBg(sector.bg);
          setHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (isDesktop) setHovered(false);
      }}
      // variants={variants}
      // initial={{ y: 100, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{
      //   duration: 0.8,
      //   ease: "easeOut",
      //   delay: index * 0.15,
      // }}
      // viewport={{ once: true, amount: 0.2 }}
      className="w-full h-full cursor-pointer transition border border-white/20"
    >
      <a href={sector.link}>
        <div
          className={`
      w-full h-full flex flex-col justify-between
      pt-[15px] px-[22px] xl:px-[12px] 2xl:px-[22px] pb-[15px]
      ${baseClass}
      transition-colors duration-300
      ${hovered && isDesktop ? "bggrad" : ""}
    `}
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15 + 0.2, // ✅ Slight delay after the card animates
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="xl:text-[26px] xl:leading-[38px] lg:text-[24px] bw-sb lg:leading-[30px] leading-[25px] lg:px-[18px] text-left px-[0px] text-[17px] w-[135px] md:w-auto"
          >
            {sector.title}
          </motion.h3>

          <div className="flex justify-between items-end lg:px-[18px] px-[0px]">
            <span className="text-sm text-white/70">{sector.description}</span>

            {isDesktop ? (
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    <Image
                      src="/whiteexternal.svg"
                      width={38}
                      height={38}
                      alt="arrow"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <Image
                src="/whiteexternal.svg"
                width={28}
                height={28}
                alt="static arrow"
              />
            )}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
