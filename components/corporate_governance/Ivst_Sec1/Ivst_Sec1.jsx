"use client";
import React from "react";
import Btn from "@/components/global/Btn";

const Ivst_Sec1 = () => {
  return (
    <div className="relative  overflow-hidden">

      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[30px] md:pb[55px] 1280:pb[70px]">
        <div className="bw-m bg-[#F7F7F7] border-[1px] border-[#E3E3E3] px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content]">
          <a href="#" className="text-[13px] md:text-[13px] ">
            Home
          </a>{" "}
          /{" "}
          <a href="#" className="text-[13px] md:text-[13px] ">
            Corporate Governance
          </a>
        </div>

        <div className="flex flex-col justify-between mt-[15px] lg:mt-[15px] md:flex-row 1280:items-center items-start">
          <div className="max-w-[565px] mb-[15px] lg:mb-[0px] relative">
            <div className="flex gap-[10px] md:gap-[17px]">
              <h1 className="1280:text-[76px] 1280:leading-[86px] 1280:tracking-[-3.04px] md:text-[42px] md:leading-[50px] md:tracking-[-2.04px] text-[35px] leading-[40px] tracking-[-1px]  bw-r">
                Corporate
              </h1>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg"
              />
            </div>
            <h1 className="1280:text-[76px] 1280:leading-[86px] 1280:tracking-[-3.04px] md:text-[42px] md:leading-[50px] md:tracking-[-2.04px] text-[35px] leading-[40px] tracking-[-1px]  bw-m">
              Governance
            </h1>
          </div>
          <div className="max-w-[556px] md:w-[350px] lg:w-[500px] 1280:w-[600px]">
            {/* <p className="1280:text-[24px] 1280:leading-[34px] lg:text-[22px] lg:leading-[32px] md:text-[20px] md:leading-[28px] bw-r ">
              Lorem Ipsum text here we see things differently, proactively find
              opportunities with an agile team, and create exceptional value for
              our customers, partners, and employees.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ivst_Sec1;
