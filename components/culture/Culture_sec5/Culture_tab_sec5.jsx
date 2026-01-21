"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccMob from "./AccMob";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

// Plus Icon
const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M4.64 11.144V0.056h3.096v11.088H4.64ZM0.488 7.064V4.136h11.424v2.928H0.488Z"
      fill="url(#grad)"
    />
    <defs>
      <linearGradient
        id="grad"
        x1="2.8"
        y1="-57"
        x2="16.4"
        y2="-56"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.2" stopColor="#AC38D9" />
        <stop offset="1" stopColor="#F47922" />
      </linearGradient>
    </defs>
  </svg>
);

// Minus Icon
const MinusIcon = () => (
  <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
    <path d="M0.25 3.74V0.74H7.04v3H0.25Z" fill="url(#grad2)" />
    <defs>
      <linearGradient
        id="grad2"
        x1="1.5"
        y1="-62"
        x2="10.6"
        y2="-61.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.2" stopColor="#AC38D9" />
        <stop offset="1" stopColor="#F47922" />
      </linearGradient>
    </defs>
  </svg>
);

const CultureAccordionSec5 = ({ career_sec5_accordion = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First open
  const [loading, setLoading] = useState(true); // skeleton loading state
  const [prevIndex, setPrevIndex] = useState(null); // for image overlap
  const hasData = career_sec5_accordion.length > 0;

  // Force skeleton display for at least 0.3s
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (index) => {
    if (index !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(index); // cannot close all
    }
  };

  const skeletonAnimation = {
    animate: { opacity: [0.3, 1, 0.3] },
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <>
      <div className="lg:mt-[50px] lg:!flex !hidden flex-col-reverse lg:flex-row items-end justify-between lg:gap-[60px] xl:pr-0 pr-[max(5%,calc((100vw-1340px)/2))] pl-[max(5%,calc((100vw-1340px)/2))] relative z-50">
        {/* Left – Accordion */}
        <div className="lg:w-[45%] w-full xl:h-[520px] 1440:h-[700px] flex items-start">
          {loading || !hasData ? (
            <div className="flex flex-col w-full gap-[25px]">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-[80px] w-full bg-gray-700"
                  {...skeletonAnimation}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-start xl:h-[520px] 1440:h-[700px] w-full">
              {career_sec5_accordion.map((item, i) => {
                const isActive = i === activeIndex;
                const isFirst = i === 0;
                const isLast = i === career_sec5_accordion.length - 1;

                return (
                  <div
                    key={item.career_sec5_accord_no}
                    className={`${!isFirst ? "border-t border-[#555]" : ""} ${
                      !isLast ? "border-b border-[#555]" : ""
                    } flex flex-col py-3 1440:py-[25px]`}
                  >
                    <button
                      onClick={() => handleClick(i)}
                      className="w-full flex cursor-pointer items-center gap-5 text-left focus:outline-none mb-0"
                    >
                      <div className="shrink-0 w-3">
                        {isActive ? <MinusIcon /> : <PlusIcon />}
                      </div>
                      <h3 className="text-white font-medium text-[18px] leading-[28px] 1440:text-[22px] 1440:leading-[28px] tracking-tight font-barlow">
                        {item.career_sec5_accord_title}
                      </h3>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key={`content-${i}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "170px" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden pl-[33px] 1440:max-h-[170px] xl:max-h-[164px]"
                        >
                          <div className="1440:pt-[25px] pt-3">
                            <p
                              className="text-white font-normal text-[16px] leading-[24px] 1440:text-[18px] 1440:leading-[28px] tracking-tight font-barlow"
                              dangerouslySetInnerHTML={{
                                __html: item.career_sec5_accord_description,
                              }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right – Image with overlap animation */}
        <div className="lg:w-[55%] w-full flex justify-center items-center relative xl:h-[520px] 1440:h-[700px]">
          {loading || !hasData ? (
            <motion.div
              className="w-full xl:h-[520px] 1440:h-[700px] bg-gray-700"
              {...skeletonAnimation}
            />
          ) : (
            <AnimatePresence initial={false}>
              {prevIndex !== null && (
                <motion.img
                  key={`prev-${prevIndex}`}
                  src={
                    career_sec5_accordion[prevIndex]?.career_sec5_accord_image
                  }
                  alt={
                    career_sec5_accordion[prevIndex]
                      ?.career_sec5_accord_title || "Previous Image"
                  }
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 left-0 w-full h-full object-cover z-10"
                />
              )}

              <motion.img
                key={`current-${activeIndex}`}
                src={formatMediaUrl(
                  career_sec5_accordion[activeIndex]?.career_sec5_accord_image
                )}
                priority
                unoptimized // ← Must be true
                alt={
                  career_sec5_accordion[activeIndex]
                    ?.career_sec5_accord_title || "Accordion Image"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full object-cover z-20"
              />
            </AnimatePresence>
          )}
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <AccMob career_sec5_accordion={career_sec5_accordion} />
    </>
  );
};

export default CultureAccordionSec5;
