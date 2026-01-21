"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
    <defs>
      <linearGradient
        id="gradPlus"
        x1="0"
        y1="0"
        x2="12"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#AC38D9" />
        <stop offset="100%" stopColor="#F47922" />
      </linearGradient>
    </defs>
    <rect x="5.28" y="1.2" width="1.44" height="9.6" fill="url(#gradPlus)" />
    <rect x="1.2" y="5.28" width="9.6" height="1.44" fill="url(#gradPlus)" />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
    <defs>
      <linearGradient
        id="gradMinus"
        x1="0"
        y1="0"
        x2="12"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#AC38D9" />
        <stop offset="100%" stopColor="#F47922" />
      </linearGradient>
    </defs>
    <rect x="1.2" y="5.28" width="9.6" height="1.44" fill="url(#gradMinus)" />
  </svg>
);

const AccMob = ({ career_sec5_accordion = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0); // first open by default
  const [loading, setLoading] = useState(true);
  const hasData = career_sec5_accordion.length > 0;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const skeletonAnimation = {
    animate: { opacity: [0.3, 1, 0.3] },
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="flex flex-col gap-0 lg:hidden px-[5%] relative z-50 mt-5">
      {loading || !hasData
        ? Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-full bg-gray-700 h-[250px]"
              {...skeletonAnimation}
            />
          ))
        : career_sec5_accordion.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={item.career_sec5_accord_no}
                className={`border-b border-gray-600 last:border-b-0 flex flex-col py-3`}
              >
                <button
                  onClick={() => handleClick(i)}
                  className="w-full flex items-center gap-3 text-left focus:outline-none"
                >
                  <div className="shrink-0">
                    {isActive ? <MinusIcon /> : <PlusIcon />}
                  </div>
                  <h3 className="text-white font-medium text-[18px] leading-[28px] tracking-tight font-barlow">
                    {item.career_sec5_accord_title}
                  </h3>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`content-mobile-${i}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden mt-3"
                    >
                      {/* Image above content */}
                      {item.career_sec5_accord_image && (
                        <motion.img
                          src={formatMediaUrl(item.career_sec5_accord_image)}
                          alt={
                            item.career_sec5_accord_title || "Accordion Image"
                          }
                          priority
                          unoptimized // ← Must be true
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-[220px] md:h-[500px] object-cover contrast-125 brightness-90 mb-3"
                        />
                      )}

                      <div>
                        <p
                          className="text-white font-normal text-[16px] leading-[24px] tracking-tight font-barlow"
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
  );
};

export default AccMob;
