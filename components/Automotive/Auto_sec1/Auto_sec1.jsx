"use client";
import React from "react";

const Auto_sec1 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden">
        <img
          className="w-[100%] md:block hidden"
          src="/automotive/auto_banner.jpg"
        ></img>
        <img
          className="w-[100%] md:!hidden block"
          src="/automotive/auto_banner_mob.jpg"
        ></img>

        <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
          <div className="bw-m px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white ">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px] ">
              Automotive & Auto Components
            </a>
          </div>

          <h1 className="flex flex-col">
            <span className="bw-m text-white text-[38px] leading-[47px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px] tracking-[-1.92px] ld:tracking-[-2px] xl:tracking-[-3.04px]">
              Automotive &{" "}
              <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
            </span>
            <span className="bw-r text-white text-[38px] leading-[47px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]  tracking-[-1.92px] ld:tracking-[-2px] xl:tracking-[-3.04px]">
              Auto Components
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Auto_sec1;
