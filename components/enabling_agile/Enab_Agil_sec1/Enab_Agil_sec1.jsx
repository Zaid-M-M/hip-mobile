"use client";
import React, { useState } from "react";
import Enba_agilcard from "../Enab_agilecard";
import { motion, AnimatePresence } from "framer-motion";
// import Work_sec2 from "../Work_sec2/Work_sec2";

const Enab_Agilsec1 = ({ data }) => {
  //   const [showMore, setShowMore] = useState(false);

  return (
    <div className=" md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[50px]  py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px]">
      {/* Background vectors */}

      <div className="relative w-full fix  ">
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
            Agile Growth
          </a>
        </div>
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
          {/* --- Left --- */}
          <div className="max-w-[100%] xl:max-w-[45%] ">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <div className="flex items-start flex-col">
                {/* ✅ Breadcrumb on top of text */}

                {/* ✅ Heading */}
                <h1 className="lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex gap-[10px] md:gap-[17px]  ">
                  <span
                    className="bw-r w-full"
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                  />
                  <img
                    src="/abstract_pattern.svg"
                    className="abstract_svg"
                    alt="Grade A Box"
                  />
                </h1>
                <h2 className="lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
                  <span
                    className="bw-m w-full"
                    dangerouslySetInnerHTML={{ __html: data.heading1 }}
                  />
                </h2>

                {/* <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="Grade A Box"
                /> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enab_Agilsec1;
