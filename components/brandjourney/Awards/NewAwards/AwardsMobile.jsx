"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import NewAwardSlider from "./_components/NewAwardSlider";
import awards from "./data/awardsData";

const AwardsMobile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const years = [...new Set(awards.map((a) => a.year))].sort((a, b) => b - a);

  return (
    // <div className="relative overflow-hidden bg-[#f5f5f5]">
    <div className="relative overflow-hidden bg-[#fff]">
      {/* Background Vectors */}
      {/* <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[0px] md:left-[-100px] left-[-80px] lg:top-[-100px] xl:left-[-300px] 1920:left-[-200px]"
        src="/green_vector.svg"
        alt="green vector"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[50px] md:left-[-100px] left-[0px] lg:top-[-200px] xl:left-[-200px] 1920:left-[0px]"
        src="/orange_vector.svg"
        alt="orange vector"
      /> */}

      <div className="relative fix overflow-hidden pt-[45px] md:pt-[80px] pb-[45px] lg:pb-[0px]">
        <div className="flex w-full">
          <div className="w-full">
            <div className="w-full flex justify-between items-center gap-3 flex-col md:gap-5 md:flex-row xl:gap-[100px]">
              <div className="flex md:flex-row flex-col gap-7 md:gap-10 justify-between w-full">
                {/* Left Heading Section */}
                <div className="flex gap-[10px] md:gap-[17px] flex-col">
                  <h2 className="1366:text-[56px] 1024:text-[48px] text-[28px] md:text-[35px] leading-[38px] 1366:leading-[66px] 1024:leading-[58px] 1024:tracking-[-1.92px] 1366:tracking-[-2.24px] bw-r ">
                    <span className="inline-flex bw-m items-center">
                      Recognised for{" "}
                    </span>
                    <br />
                    What We Deliver.
                  </h2>
                  <img
                    src="/abstract_pattern.svg"
                    alt="pattern"
                    className="abstract_svg w-max"
                  />
                </div>

                {/* Mobile Tabs */}
                <div className="flex md:w-1/2 flex-col lg:justify-center mb-4 gap-5">
                  <div className="flex lg:justify-end">
                    <div className="w-full mt-0">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: [1, 0, 0.3, 1],
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full bg-white grid grid-cols-3 border border-[#CDCDCD] rounded-[20px] overflow-hidden"
                      >
                        {years.map((year, i) => {
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
                                "relative flex w-full items-center last:border-r-0 justify-center px-9 py-6 border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none",
                              )}
                            >
                              <motion.h2
                                animate={{
                                  color: isActive ? "#ffffff" : "#000000",
                                }}
                                transition={{
                                  duration: 0.2,
                                  ease: "easeInOut",
                                }}
                                className="text-[20px] bw-r leading-[28px]"
                              >
                                {year}
                              </motion.h2>
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="">
              <NewAwardSlider
                awards={awards.filter((a) => a.year === years[activeTab])}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsMobile;
