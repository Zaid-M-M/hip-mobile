import React from "react";
import FeatureCards from "./FeatureCards";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const HeroSection = ({ data }) => {
  return (
    <div>
      <div className="relative w-full h-[38vh] md:h-[70vh] lg:h-[80vh] xl:h-[80vh] overflow-hidden">
        {/* Desktop image */}
        <img
          className="w-full h-full object-cover md:block hidden"
          src={formatMediaUrl(data.image)}
          priority
          unoptimized // ← Must be true
          alt={data.image}
        />
        {/* Mobile image */}
        <img
          className="w-full h-full object-cover md:hidden block"
          src={formatMediaUrl(data.image)}
          priority
          unoptimized // ← Must be true
          alt={data.image}
        />

        {/* Gradient Overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 from-40% to-transparent"></div>

        {/* Overlay content */}
        <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
          <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px]">
              {data.name}
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="bw-m text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
              {data.name}
              <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
