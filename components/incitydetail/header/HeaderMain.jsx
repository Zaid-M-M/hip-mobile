import React from "react";
import Bbar from "./Bbar";
import BreadCrum from "./BreadCrum";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const HeaderMain = ({
  title,
  h1,
  spotlightImage,
  subtitle,
  metaTitle,
  metaDescription,
  igbcLogo,
  igbcStatus,
  park_name,
  stats = [],
  breadname,
}) => {
  console.log("subtitle", subtitle);
  const formattedImage = formatMediaUrl(spotlightImage);
  return (
    <>
      <div
        id="pdspotlight"
        className="relative w-full xl:aspect-[16/7.5] overflow-hidden h-[30vh] xl:h-[calc(100vh-80px)] md:h-auto"
      >
        {/* Background Image */}
        <img
          className="w-full h-full xl:aspect-[16/7.5] object-cover"
          src={formattedImage}
          priority
          unoptimized // ← Must be true
          alt={title}
        />
        {/* <div className="absolute w-full h-[100%] bottom-0 bg-gradient-to-t from-[#00000070] md:from-60% from-40% to-transparent"></div> */}

        {/* Content */}
        <div className="w-full lg:w-auto absolute left-[max(5%,calc((100vw-1340px)/2))] lg:left-[max(5%,calc((100vw-1340px)/2))] lg:right-[max(5%,calc((100vw-1340px)/2))] top-auto lg:bottom-[140px] md:bottom-[30px] bottom-[20px]">
          <BreadCrum park_name={park_name} breadname={breadname} />

          <div className="flex flex-col">
            {/* h1_tag or fallback */}
            <div className="flex lg:pl-0 lg:pr-0 pr-[max(5%,calc((100vw-1340px)/2))] gap-8 items-center">
              <h1 className="bw-m flex items-center text-white text-[28px] leading-[31px] lg:text-[54px] lg:leading-[64px] xl:text-[64px] xl:leading-[74px] 2xl:text-[64px] 2xl:leading-[86px]  xl:tracking-[-3.04px]">
                {title}
                <span className="md:w-[180px] ml-3 md:h-[6px] bg-[#fff] inline-block xl:mt-[15px]" />
              </h1>
            </div>

            {/* meta title or park title fallback */}
            <h2
              className="bw-r lg:pl-0 lg:pr-0 pr-[max(5%,calc((100vw-1340px)/2))] text-white text-[14px] md:text-[28px] leading-[120%]  lg:mt-[5px] mt-[5px]  xl:tracking-[-1.28px]"
              dangerouslySetInnerHTML={{
                __html: h1 || park_name,
              }}
            />
          </div>
        </div>
        {/* IGBC certification info if available */}
        <div className="hidden lg:block relative">
          <Bbar stats={stats} />
        </div>
      </div>
      <div className="block lg:hidden">
        <Bbar stats={stats} />
      </div>
    </>
  );
};

export default HeaderMain;
