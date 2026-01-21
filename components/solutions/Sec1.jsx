"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Sec1 = () => {
  return (
    <div className=" md:py-[80px] lg:py-[100px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden">
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
      <div className="relative w-full fix">
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
          {/* --- Left --- */}
          <div className="max-w-[100%] xl:max-w-[45%] ">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <div className="flex items-start gap-2 lg:gap-2 flex-col">
                {/* :white_check_mark: Breadcrumb on top of text */}
                {/* :white_check_mark: Heading */}
                <div className="xl:text-[66px] wmhead xl:leading-[76px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
                  <h1
                    className="bw-r w-full"
                    // dangerouslySetInnerHTML={{ __html: data.heading }}
                  >
                    {" "}
                    Solutions That
                  </h1>
                  <div className="flex flex-col gap-[14px]">
                    {" "}
                    <h2
                      className="bw-m w-fit"
                      // dangerouslySetInnerHTML={{ __html: data.heading1 }}
                    >
                      Go the Distance.
                    </h2>
                    <img
                      src="/abstract_pattern.svg"
                      className="abstract_svg w-fit"
                      alt="Grade A Box"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --- Right --- */}
          <div className="flex flex-col gap-[15px] max-w-full xl:max-w-1/2">
            <p
              className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
              //   dangerouslySetInnerHTML={{ __html: data.desc }}
            >
              At Horizon, we believe businesses of every scale deserve a strong
              foundation. That’s why our operational excellence goes beyond just
              providing compliant fulfilment centers and industrial spaces. We
              offer value-added solutions that help you hit the ground
              running—whether you’re a large enterprise scaling across regions
              or a startup setting up your first cloud kitchen.
            </p>
            <p
              className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
              //   dangerouslySetInnerHTML={{ __html: data.desc }}
            >
              So, while we manage the asset and support your people and
              operations, you are free to relax and focus on only your core
              business.
            </p>

            {/* {data.para && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                // dangerouslySetInnerHTML={{ __html: data.para }}
              />
            )} */}
            {/* :white_check_mark: Animated expandable section */}
          </div>
        </div>
      </div>
      {/* <Work_sec2 /> */}
      {/* :white_check_mark: Cards Section */}
      {/* <div className="flex items-center justify-center w-full bg-white">
        <Workforcecard amenities={data.amenities} />
      </div> */}
    </div>
  );
};

export default Sec1;
