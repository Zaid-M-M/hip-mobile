"use client";
import React, { useState, useEffect } from "react";

import Btn from "@/components/global/Btn";
import CO_CardStackScroll from "./CO_CardStackScroll";
import { motion, AnimatePresence } from "framer-motion";

const CO_sec1 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024 && width <= 1390) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
        setIsExpanded(true); // always expanded on other screens
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          className="purple_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
          src="/purple_vector.svg"
        />
        <img
          className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[-50px] lg:top-[-80px] lg:right-[-100px]"
          src="/orange_vector.svg"
        />

        <div className="relative w-full  overflow-hidden fix xl:py-24 py-12">
          <div className="bw-m bg-[#F7F7F7] border-[1px] border-[#E3E3E3] px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] mb-[10px]">
            <a href="/" className="text-[13px] md:text-[13px] ">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] ">
              Capabilities Overview
            </a>
          </div>

          <div className="flex items-start flex-col w-fit relative">
            <div className="flex gap-[10px] md:gap-[17px] ">
              <h1 className="sec_hd bw-r">Flexible, Scalable,</h1>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg  hidden md:block mt-[5px] md:mt-[0px]"
              />
            </div>
            <h2 className="sec_hd bw-m">
              <span className="bw-m">Tailored Solutions</span>
            </h2>
            <img
              src="/abstract_pattern.svg"
              className="abstract_svg  block md:hidden mt-[7px]"
            />
          </div>
          <div className="flex flex-col mt-[10px] lg:mt-[40px] md:gap-[40px] gap-[20px] lg:flex-row ">
            <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[20px]">
              <img
                className="w-[100%]"
                src="/Cap_Overview/CO_sec1_img.jpg"
              ></img>
            </div>
            <div className="1280:max-w-[590px] 1366:max-w-[700px] 1440:max-w-[700px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-r md:text-[20px] lg:text-[25px] 1280:text-[25px] 1440:text-[28px] md:leading-[38px] xl:leading-[32px] 1440:leading-[38px] mb-[13px]">
                From factory and logistics real estate solutions to last mile
                warehousing—we’ve got you covered.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[14px]">
                Horizon Industrial Parks specialises in built-to-suit (BTS) and
                plug and play infrastructure, offering industry-ready solutions
                that are built for speed and scale.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[14px]">
                Our core offerings include custom factory developments, large
                fulfilment centres, urban mid-mile distribution facilities and
                in-city centers, with infrastructure solutions that combine deep
                sector insight and delivery certainty—ensuring your operations
                launch faster and run smarter.
              </p>

              {/* Last Paragraph with animation */}
              {/* <div
                className={`transition-all duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: isExpanded ? "500px" : "0px",
                  opacity: isExpanded ? 1 : 0
                }}
              >
                <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mt-2 xl:mb-[20px] 1440:mb-[0px]">
                  We provide custom factory integrations, develop large regional fulfilment centres,
                  urban mid-mile distribution facilities and in-city warehouses, with infrastructure
                  solutions combine deep sector insight with delivery certainty—ensuring your operations
                  launch faster and run smarter.
                </p>
              </div> */}

              {/* Animated Paragraph using Framer Motion */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="expanded-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mt-2 xl:mb-[20px] 1440:mb-[0px]">
                      Whether you're scaling up your operations or setting up
                      your first box, optimising logistics or planning a
                      long-term shift in supply chain strategy, our capabilities
                      match your ambition and augment your growth.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Show button only on 1280px & 1366px */}
              {showToggle && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bw-m underline transition duration-300 ease-in-out mt-2 md:text-[17px] 1280:text-[17px] cursor-pointer flex gap-[4px] items-center"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={false}
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-[2px]"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}

      <CO_CardStackScroll />
    </div>
  );
};

export default CO_sec1;
