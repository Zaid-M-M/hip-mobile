"use client";
import React from "react";

const Ntwrk_sec1 = () => {
  return (
    <div>
      <div className="relative w-full aspect-[9/15] md:aspect-auto overflow-hidden h-auto  lg:h-[70svh] xl:h-[calc(100vh-80px)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/network_overview/Network_Overview.webp"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 md:block hidden"
        >
          <source
            src="/network_overview/Network_Overview.mp4"
            type="video/mp4"
          />
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/network_overview/Network_Overview_mobile.webp"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 md:hidden block"
        >
          <source
            src="/network_overview/Network_Overview_mobile.mp4"
            type="video/mp4"
          />
        </video>

        {/* <img className="w-[100%] md:block hidden" src='/ecommerce/ecom_banner.jpg'></img>
        <img className="w-[100%] md:!hidden block" src='/ecommerce/ecom_banner_mob.png'></img> */}

        {/* <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">

          <div className="bw-m px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white ">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px] ">
              Ecommerce
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="bw-m text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">E-commerce
              <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
            </h1>
            <h1 className="bw-r text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">& Last-Mile Fulfilment</h1>
          </div>

        </div> */}
      </div>
    </div>
  );
};

export default Ntwrk_sec1;
