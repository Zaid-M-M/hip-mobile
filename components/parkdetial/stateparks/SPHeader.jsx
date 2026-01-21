"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Drop from "./Drop";

const SPHeader = ({ activeTab, categories, setActiveTab }) => {
  return (
    <>
      {/* Background vectors */}
      <img
        className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px] md:left-[auto] md:right-[0px] right-[-80px] md:top-[0px] lg:top-[-120px] xl:right-[-180px] 1920:right-[-50px]"
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px] md:left-[auto] md:right-[0px] right-[0px] md:top-[-80px] lg:top-[-120px] xl:right-[100px] 1920:right-[100px]"
        src="/orange_vector.svg"
      />

      {/* Heading */}
      <h2 className="bw-l text-center sec_hd text-[#101828]">
        <span className="bw-m">Explore Our</span> Network
      </h2>

      {/* Tabs */}
      <div className="fix">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:h-[60px] xl:h-[100px] bg-white lg:grid hidden grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border border-[#CDCDCD] md:rounded-2xl lg:rounded-[28px] overflow-hidden mt-12"
        >
          {categories.map((cat, i) => {
            const isActive = i === activeTab;
            return (
              <motion.button
                key={i}
                onClick={() => setActiveTab(i)}
                initial={false}
                animate={{
                  backgroundImage: isActive
                    ? "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)"
                    : "linear-gradient(to right, #ffffff, #ffffff)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={clsx(
                  "relative flex items-center last:border-r-0 justify-between md:px-[12px] xl:px-[13px] xl:py-[10px] border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none"
                )}
              >
                {/* Tab text */}
                <div className="flex items-center justify-start w-full gap-2">
                  <motion.h2
                    animate={{ color: isActive ? "#ffffff" : "#000000" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={clsx(
                      "md:text-[16px] w-full text-left xl:text-[20px] 1366:text-[23px] bw-r leading-[32px]"
                    )}
                  >
                    {cat}
                  </motion.h2>
                </div>

                {/* Arrow image on the right of active tab */}
                <AnimatePresence mode="wait" initial={false}>
                  {isActive && (
                    <motion.img
                      key={`active-icon-${i}`} // unique key per tab
                      initial={{ y: "100%", x: "-100%", opacity: 0 }}
                      animate={{ y: 0, x: 0, opacity: 1 }}
                      exit={{ y: "100%", x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                      src="/whiteexternal.svg"
                      alt="Active"
                      className="w-[20%]"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Dropdown for smaller screens */}
        <Drop
          activeTab={activeTab}
          categories={categories}
          setActiveTab={setActiveTab}
        />
      </div>
    </>
  );
};

export default SPHeader;
