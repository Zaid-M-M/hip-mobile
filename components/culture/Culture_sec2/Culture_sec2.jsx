"use client";
import React from "react";
import { motion } from "framer-motion";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const Culture_sec2 = ({ career_sec1_paragraph, career_sec1_image }) => {
  return (
    <div className=" relative overflow-hidden">
      <img
        className="purple_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/purple_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="lg:my-24 my-12">
        <div className="fix ">
          <div className="flex items-left flex-col">
            <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-r flex flex-col">
              Building More Than Infrastructure.
            </h2>

            <div className="flex gap-[10px] mt-2 md:gap-[17px]  md:flex-row flex-col">
              <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-m flex flex-col">
                Building Careers That Last.
              </h2>
              <img src="/abstract_pattern.svg" className="abstract_svg" />
            </div>
          </div>
          <div className="flex h-fit z-10 flex-col justify-between mt-[20px] xl:mt-[48px] 1440:gap-[20px] gap-5 xl:gap-0 lg:flex-row items-stretch">
            <div className=" lg:w-[45%] aspect-video overflow-hidden min-h-full">
              <img
                className="w-full object-cover"
                src={formatMediaUrl(career_sec1_image)}
                priority
                unoptimized // ← Must be true
              ></img>
            </div>
            <div className="xl:max-w-[600px] 1366:max-w-[625px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p
                className="bw-r flex flex-col gap-5 md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                dangerouslySetInnerHTML={{ __html: career_sec1_paragraph }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture_sec2;
