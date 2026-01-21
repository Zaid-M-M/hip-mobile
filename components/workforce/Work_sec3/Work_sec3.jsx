"use client";
import React from "react";
import Btn from "@/components/global/Btn";

import { motion } from "framer-motion";

const Work_sec3 = () => {
  return (
    <div className="relative overflow-hidden bg-black ">
      <div className=" absolute right-5 768:right-10 w-[50%] 768:w-[35%] top-8 1024:top-10 lg:w-[50%] 1280:w-[37%] 1280:right-19">
        <img src="/workflow/workbg_sec3.png" alt="" />
      </div>
      {/* <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px]"
        src="/green_vector.svg"
      />    
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      /> */}

      <div className="lg:my-[65px] my-12 z-50">
        <div className="fixup ">
          <div className="flex items-left flex-col md:flex-row md:items-center ">
            <h2 className="sec_hd bw-r flex flex-col ">
              <span className="txt_gradient flex gap-3 lg:gap-4 items-center bw-m">
                Barrier-Free,
                <br className="block" />
                {/* <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                /> */}
              </span>

              <span className=" bw-r text-white flex flex-col md:flex-row gap-[10px] md:gap-[17px] items-start md:items-center z-20">
                Accessible Design
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                />
              </span>
            </h2>
          </div>

          {/* Flex reverse */}
          <div className="flex flex-col 1024:flex-row-reverse z-10 justify-between mt-[20px] xl:mt-[48px]  gap-5 xl:gap-[50px] lg:gap-[100px] 1440:gap-[100px]">
            {/* Image */}
            <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] z-20 xl:max-w-[48%] 1440:max-w-[45%]">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/workflow/sec3bg.jpg"
                alt="Factory"
              />
            </div>

            {/* Text */}
            <div className="1280:max-w-[550px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] z-20">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-white">
                Our layouts prioritise barrier-free, open movement, ensuring
                that people of all abilities can navigate the space with ease.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-white">
                All internal roads are lined with dedicated pedestrian walkways
                that allow for safe, uninterrupted movement across the park.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-white">
                Wayfinding signage is strategically placed to make navigation
                simple and stress-free for everyone on-site.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-white">
                Within buildings, ramps provide seamless access across different
                levels, making it easier for everyone — whether they’re moving
                goods or simply getting to work — to move through the space
                effortlessly.
              </p>
              {/* Button  */}
              <Btn
                text="Design & Project Development"
                className=" desbut mt-4 !pl-0"
                href="/enabling-agile-operation#project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work_sec3;
