"use client";
import React from "react";

const Contact_sec1 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden xl:h-[590px] h-[460px] md:h-[310px] lg:h-[415px]">
        <img
          className="w-[100%] md:block hidden h-full object-cover"
          src="/contact/contactbg.webp"
        ></img>
        <img
          className="w-[100%] h-[100%] object-cover md:!hidden block"
          src="/contact/contact_mob_bg.webp"
        ></img>

        <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
          <div className="bw-m px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white ">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px] ">
              Contact Us
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="bw-m text-white text-[38px] leading-[47px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px] tracking-[-1.92px] ld:tracking-[-2px] xl:tracking-[-3.04px]">
              Contact Us
              <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_sec1;
