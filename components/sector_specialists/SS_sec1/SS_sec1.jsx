"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Btn from "@/components/global/Btn";

const SS_sec1 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      const width = window.innerWidth;
      // if (width === 1280 || width === 1366 || width === 1024) {
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
    <div className="relative overflow-hidden">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] 1440:pb-[70px]  1280:pb-[70px]">
        <div className="bw-m bg-[#F7F7F7] border-[1px] border-[#E3E3E3] px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] mb-[10px]">
          <a href="/" className="text-[13px] md:text-[13px] ">
            Home
          </a>{" "}
          /{" "}
          <a href="#" className="text-[13px] md:text-[13px] ">
            Sector Specialists
          </a>
        </div>

        <div className="flex flex-col items-start w-fit relative">
          <h1 className="sec_hd bw-r">Built for the Way</h1>
          <h2 className="sec_hd bw-r">
            <span className="bw-m">Your Industry Works</span>
          </h2>
          <img
            src="/abstract_pattern.svg"
            className="absolute top-[12px] md:top-[5px] lg:top-[9px] right-[45px] xl:right-[80px] w-[100px] md:w-[150px] lg:w-[170px] xl:w-[auto] translate-x-full"
          />
        </div>
        <div className="flex flex-col justify-between mt-[10px] md:mt-[10px] lg:mt-[40px] gap-[20px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[20px]">
            <img
              className="w-[100%]"
              src="/sector_specialist/SS_sec1_img.jpg"
            ></img>
          </div>
          <div className="1280:max-w-[590px] 1366:max-w-[630px] 1440:max-w-[665px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
              From precision-driven engineering firms to fast-moving consumer
              brands, Horizon Industrial Parks understands that no two
              industries operate the same way—and neither should their
              infrastructure. Over the years, we’ve partnered with leading
              players across sectors to design, deliver, and elevate spaces that
              help them grow faster, move smarter, and operate safer.
            </p>

            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
              Whether you're building something complex, storing something
              delicate, or moving products on-demand, our team brings in the
              cross-sector experience to create logistics infrastructure that
              aligns with your goals and operations.
            </p>

            {/* <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">Our footprint is as flexible as your business needs it to be—from spaces as compact as 20,000 sq. ft. to expansive, multi-phase developments of over 1 million sq. ft. We've supported both entry-stage expansions and long-term growth stories. Customers like Rhenus Logistics and Yazaki India have grown with us across multiple locations, while long-standing partners like Benteler Automotive and Tata Autocomp have scaled within the same park, deepening their footprint over time.</p> */}

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
                  <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
                    Our footprint is as flexible as your business needs it to
                    be—from spaces as compact as 20,000 sq. ft. to expansive,
                    multi-phase developments of over 1 million sq. ft. We've
                    supported both entry-stage expansions and long-term growth
                    stories. Customers like Rhenus Logistics and Yazaki India
                    have grown with us across multiple locations, while
                    long-standing partners like Benteler Automotive and Tata
                    Autocomp have scaled within the same park, deepening their
                    footprint over time.
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
  );
};

export default SS_sec1;
