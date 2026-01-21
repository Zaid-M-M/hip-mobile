"use client";
import React from "react";
import Btn from "@/components/global/Btn";

import { motion } from "framer-motion";

const Work_sec4 = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="lg:my-[65px] my-12">
        <div className="fix">
          <div className="flex items-left flex-col md:flex-row ">
            <h2 className="sec_hd bw-r flex flex-col ">
              <span className=" bw-m flex gap-[10px] md:gap-[17px]  items-center  ">
                Green,
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                />
                <br className="block" />
                {/* <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                /> */}
              </span>

              <span className=" text-black flex gap-3 lg:gap-4 items-center">
                Calming Spaces
                {/* <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                /> */}
              </span>
            </h2>
          </div>

          {/* Flex reverse */}
          <div className="flex flex-col 1024:flex-row z-10 justify-between mt-[20px] xl:mt-[28px] xl:gap-[40px] gap-5  ">
            {/* Image */}
            <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px]">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left 1366:w-[auto]"
                src="/workflow/worksec4.jpg"
                alt="Factory"
              />
            </div>

            {/* Text */}
            <div className="1280:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-black">
                Great work environments come alive when nature is thoughtfully
                woven into their fabric. Beyond our signature Urban Forests —
                which create dense pockets of native trees, natural shade, and
                rich biodiversity — we introduce landscapes tailored to the
                local bio-context.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-black">
                With at least 15% of every park dedicated for landscaped areas,
                we’ve created breathing spaces within these high-performance
                industrial settings: shaded seating areas, butterfly gardens,
                lily ponds with quiet nooks for reflection, and tree-lined
                pathways for strolls.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-black">
                These thoughtfully planned features encourage workers, staff,
                and visitors alike to step away from their routines, pause, and
                mentally recharge amidst nature.
              </p>

              {/* Button aligned to left */}
              <Btn
                text="Environment"
                className="flex mt-4"
                href="/environment/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work_sec4;
