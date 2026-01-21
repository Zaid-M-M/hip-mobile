"use client";
import TransitionLink from "@/src/app/TransitionLink";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Turnkey = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className=" relative overflow-hidden">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="lg:my-[65px] my-12">
        <div className="fix ">
          <div className="flex items-left flex-col md:flex-row md:items-center">
            <h2 className="sec_hd bw-m flex flex-col">
              <span className="flex gap-[10px] md:gap-[17px] bw-m items-center">
                Turnkey <br className="block"></br>{" "}
                <img src="/abstract_pattern.svg" className="abstract_svg" />
              </span>
              <span className="bw-r">Solutions</span>
            </h2>
          </div>
          <div className="flex z-10 flex-col justify-between mt-[20px] xl:mt-[28px] xl:gap-[40px] gap-5  lg:flex-row ">
            <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px]">
              <img
                className="w-[100%] lg:h-auto h-full 1440:object-contain object-cover 1440:object-center object-center"
                src="/value_added_services/turnkey.png"
              ></img>
            </div>
            <div className="1280:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                We know capital flexibility is critical especially for
                manufacturing operations. That’s why we offer custom
                techno-commercial models, including build-to-suit, lease, or
                hybrid arrangements—tailored to the scale, timing, and
                affordability of your project.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                With the capital strength to back long-term planning, we also
                secure and hold land, or warehouse blocks for our customers
                until they’re ready to scale, so you don’t miss the right
                location while you’re aligning internal timelines. Where
                specific equipment or turnkey solutions are required, we’re able
                to invest upfront and offer them to you as rental components, so
                your team can get started without large capex exposure.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
                Our approach gives businesses the freedom to move quickly and
                strategically, without stretching internal resources, and
                without compromising on future growth potential.
              </p>

              {/*        
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    key="extra-text"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
                      Our approach gives businesses the freedom to move quickly
                      and strategically, without stretching internal resources,
                      and without compromising on future growth potential.
                    </p>

                  </motion.div>
                )}
              </AnimatePresence>
      
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="flex items-center lg:gap-2 text-[16px] lg:text-[20px] uppercase bw-m cursor-pointer mt-2"
              >
                {showMore ? "Read Less" : "Read More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${showMore ? "rotate-180" : ""
                    }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button> */}

              {/* <div className="pt-[14px] flex mt-4 items-center gap-[10px] py-[15px]">
                <span className="bw-sb text-[12px] leading-[18px] tracking-[0.1em] sm:text-[16px] sm:leading-[26px] uppercase">
                  Industrial and Factory Solutions{" "}
                </span>
                <img
                  src="/value_added_services/link.svg"
                  className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
                  alt=""
                />
              </div> */}

              <TransitionLink
                href="/factory-and-inplant-solutions/"
                className=" mt-4 bw-sb text-[14px] leading-[18px] tracking-[0.1em] sm:text-[16px] sm:leading-[26px] uppercase gap-[15px] flex items-center bw-sb"
              >
                Industrial and Factory Solutions{" "}
                <img
                  className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
                  src="/value_added_services/link.svg"
                />
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turnkey;
