"use client";
import React, { useState } from "react";

const White_Paper_sec1 = () => {
  //   const [showMore, setShowMore] = useState(false);

  return (
    <div className=" md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[40px]  py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px]">
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
            White Paper
          </a>
          <span className="text-[13px] md:text-[13px] lg:text-[16px] text-black mx-1">
            /
          </span>
          <a
            href="#"
            className="text-[13px] md:text-[13px] lg:text-[16px] text-black"
          >
            Reverse Logistics in India: Turning Returns into Strategic Advantage
          </a>
        </div>

        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row pt-[10px] ">
          {/* --- Left --- */}
          <div className="w-full ">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <h1 className="flex items-start flex-col">
                {/* ✅ Breadcrumb on top of text */}

                {/* ✅ Heading */}
                <span className="lg:text-[56px] lg:leading-[64px] xl:text-[56px] wmhead xl:leading-[66px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[38px] text-[28px] md:leading-[53px] md:text-[43px] flex gap-[10px] md:gap-[17px]  w-full">
                  Reverse Logistics in India:
                  <img
                    src="/abstract_pattern.svg"
                    className="abstract_svg hidden lg:flex md:flex"
                    alt="Grade A Box"
                  />
                </span>
                <div className="flex flex-col xl:gap-0 gap-2.5">
                  <span className="lg:text-[56px] lg:leading-[64px] xl:text-[56px] wmhead xl:leading-[66px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[38px] text-[28px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[1084px] bw-m">
                    Turning Returns into Strategic Advantage
                  </span>
                  <img
                    src="/abstract_pattern.svg"
                    className="abstract_svg flex lg:hidden md:hidden"
                    alt="Grade A Box"
                  />
                </div>

                {/* <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="Grade A Box"
                /> */}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default White_Paper_sec1;
