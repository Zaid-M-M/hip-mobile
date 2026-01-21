"use client";
import React, { useState } from "react";
import FeatureCards from "./FeatureCards";
import { motion, AnimatePresence } from "framer-motion";

const MakeIndia = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=" md:py-[80px] lg:py-[100px] py-[45px] flex flex-col gap-8 lg:gap-16 relative overflow-hidden">
      {/* Background vectors */}
      <img
        className="purple_vctr hidden md:block absolute -bottom-40 -right-20 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      <img
        className="orange_vctr hidden md:block absolute -bottom-40 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      />

      <div className="relative w-full fix">
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
          {/* --- Left --- */}
          <div className="max-w-[100%] xl:max-w-[45%]">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              {/* <div className="flex items-start gap-2 lg:gap-5 flex-col">
                <h1 className="lg:text-[52px] wmhead lg:leading-[60px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[42px] text-[32px] flex flex-col max-h-fit justify-start bw-r capitalize">
                  <span className="bw-m w-full flex items-center gap-5">
                    {data.heading}
                  </span>
                </h1>

                <img
                  src="/abstract_pattern.svg"
                  className="object-cover lg:h-[58px] h-[40px] lg:w-[318px] md:w-[50%] w-auto"
                  alt="Grade A Box"
                />
              </div> */}
              <div className="flex items-start gap-2 lg:gap-5 flex-col">
                <h2 className="xl:text-[52px] wmhead xl:leading-[60px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
                  <span
                    className="bw-r w-full"
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                  />
                </h2>

                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="Grade A Box"
                />
              </div>
            </div>
          </div>

          {/* --- Right --- */}
          <div className="flex flex-col gap-[15px] max-w-full xl:max-w-1/2">
            {data.desc && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
            )}
            {data.para && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                dangerouslySetInnerHTML={{ __html: data.para }}
              />
            )}

            {/* ✅ Animated expandable section */}
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
                    className="bw-r md:text-[17px] lg:text-[17px] flex flex-col gap-[15px] 1280:text-[20px] md:leading-[30px]"
                    dangerouslySetInnerHTML={{ __html: data.extra }}
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

      {/* ✅ Cards Section */}
      <div className="flex items-center justify-center w-full bg-white">
        <FeatureCards amenities={data.amenities} />
      </div>
    </div>
  );
};

export default MakeIndia;
