"use client";
import { motion, AnimatePresence } from "framer-motion";

import React from "react";
import Headerimg from "./Headerimg";

const Header = () => {
  return (
    <div className="py-12 lg:py-[100px] fixup flex flex-col gap-8 lg:gap-[60px] relative overflow-hidden">
      {/* Background vectors */}
      {/* <img
        className="purple_vctr hidden md:block absolute -bottom-40 -right-20 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      <img
        className="orange_vctr hidden md:block absolute -bottom-40 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      /> */}
      <div className="relative w-full">
        <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-black">
          <a
            href="/"
            className="text-[13px] md:text-[13px] lg:text-[16px] text-black"
          >
            Home
          </a>
          <span className="text-[13px] md:text-[13px] lg:text-[16px] text-black mx-1">
            /
          </span>
          <a
            href="#"
            className="text-[13px] md:text-[13px] lg:text-[16px] text-black"
          >
            Value-Added Services
          </a>
        </div>
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
          {/* --- Left --- */}
          <div className="max-w-[100%] xl:max-w-[45%] ">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <div className="flex items-start gap-2 lg:gap-2 flex-col">
                {/* :white_check_mark: Breadcrumb on top of text */}
                {/* :white_check_mark: Heading */}
                <h1 className="xl:text-[66px] wmhead xl:leading-[76px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
                  <span
                    className="bw-r w-full"
                    // dangerouslySetInnerHTML={{ __html: data.heading }}
                  >
                    {" "}
                    Value-Added
                  </span>
                  <div className="flex gap-[10px] md:gap-[17px] ">
                    {" "}
                    <span
                      className="bw-m w-fit"
                      // dangerouslySetInnerHTML={{ __html: data.heading1 }}
                    >
                      Solutions
                    </span>
                    <img
                      src="/abstract_pattern.svg"
                      className="abstract_svg"
                      alt="Grade A Box"
                    />
                  </div>
                </h1>
              </div>
            </div>
          </div>
          {/* --- Right --- */}
          <div className="flex flex-col  max-w-full xl:max-w-1/2">
            <p
              className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
              //   dangerouslySetInnerHTML={{ __html: data.desc }}
            >
              Every business comes with its own set of goals, constraints, and
              ambitions. That’s why we layer our world class infrastructure with
              thoughtfully designed value-added services. From reducing
              long-term operational costs to initiatives that support your ESG
              journey, we partner with you to create comprehensive solutions
              that are scalable, efficient, and achievable.
            </p>

            {/* {data.para && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                // dangerouslySetInnerHTML={{ __html: data.para }}
              />
            )} */}
            {/* :white_check_mark: Animated expandable section */}
            <AnimatePresence initial={false}>
              <motion.div
                key="extra"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                className="overflow-hidden"
              >
                <p
                  className="bw-r md:text-[17px] lg:text-[17px] flex flex-col gap-[15px] 1280:text-[20px] md:leading-[30px]"
                  // dangerouslySetInnerHTML={{ __html: data.extra }}
                />
              </motion.div>
            </AnimatePresence>
            {/* {data.extra && ( */}

            {/* )} */}
          </div>
        </div>
      </div>
      {/* <Work_sec2 /> */}
      {/* :white_check_mark: Cards Section */}
      {/* <div className="flex items-center justify-center w-full bg-white">
        <Workforcecard amenities={data.amenities} />
      </div> */}
      <div>
        <Headerimg />
      </div>
    </div>
  );
};

export default Header;
