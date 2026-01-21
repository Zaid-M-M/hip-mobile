"use client";
import React from "react";
import Enab_Designagilecard from "../Enab_Designagilecard";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
const Enab_Agil_sec4 = ({ amenitiesdesign, data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      id="project"
      className="relative overflow-hidden bg-white pt-[100px] 360:pt-[45px] "
    >
      {/* <div className=" absolute right-5 768:right-10 w-[50%] 768:w-[35%] top-8 1024:top-10 lg:w-[50%] 1280:w-[45%] 1280:right-19">
        <img src="/workflow/workbg_sec3.png" alt="" />
      </div> */}
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      {/* Main content */}
      <div className="lg:my-0 my-0 z-50 pt-[15px]">
        <div className="fixup ">
          <div className=" items-left flex-col md:flex-row md:items-center ">
            <h2 className="sec_hd bw-r flex gap-[20px]">
              <span className="text-black bw-m flex gap-3 lg:gap-4 items-center bw-m">
                Design &
                <br className="block" />
              </span>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg"
                alt="pattern"
              />
              {/* <span className=" bw-r text-black flex flex-col md:flex-row gap-3 lg:gap-4 items-start md:items-center z-20">
                Project Development
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                />
              </span> */}
            </h2>

            <h2 className="sec_hd bw-r flex flex-col ">
              {/* <span className="txt_gradient flex gap-3 lg:gap-4 items-center bw-m">
                Design &
                <br className="block" />
              </span> */}

              <span className=" bw-r text-black flex flex-col md:flex-row gap-3 lg:gap-4 items-start md:items-center z-20">
                Project Development
              </span>
            </h2>
          </div>

          {/* Flex reverse */}
          <div className="flex flex-col 1024:flex-row z-10 justify-between mt-[20px] xl:mt-[30px] gap-5 xl:gap-[30px] lg:gap-[60px] 1440:gap-[60px]">
            {/* Image */}
            <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] z-20 xl:max-w-[48%] 1440:max-w-[45%]">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/enabling_agile/enablingsec4.jpg"
                alt="Factory"
              />
            </div>

            {/* Text */}
            <div className="1280:max-w-[550px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] z-20">
              {data.para && (
                <p
                  className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-black"
                  dangerouslySetInnerHTML={{ __html: data.para }}
                />
              )}
              {data.para && (
                <p
                  className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-black"
                  dangerouslySetInnerHTML={{ __html: data.para1 }}
                />
              )}
              {data.para && (
                <p
                  className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-black"
                  dangerouslySetInnerHTML={{ __html: data.para2 }}
                />
              )}
              <AnimatePresence initial={false}>
                {showMore && data.extra && (
                  <motion.div
                    key="extra"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                    className="overflow-hidden"
                  >
                    <p
                      className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-black"
                      dangerouslySetInnerHTML={{ __html: data.extra }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {showMore && data.extra && (
                  <motion.div
                    key="extra"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                    className="overflow-hidden"
                  >
                    <p
                      className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-black"
                      dangerouslySetInnerHTML={{ __html: data.extra1 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {data.extra && (
                <button
                  onClick={() => setShowMore((prev) => !prev)}
                  className="md:mt-2 text-black bw-m flex md:gap-2 text-[16px] md:text-[20px] items-center w-fit cursor-pointer uppercase"
                >
                  {showMore ? "Read Less" : "Read More"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${
                      showMore ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-white py-18 md:pt-[40px] pt-[10px]">
          <Enab_Designagilecard amenitiesdesign={amenitiesdesign} />
        </div>
      </div>

      {/* ✅ Amenities card section at the end inside black div */}
    </div>
  );
};

export default Enab_Agil_sec4;
