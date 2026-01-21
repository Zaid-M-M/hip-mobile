"use client";
import React from "react";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const Main = ({ career_sec7_iconbox = [] }) => {
  // debug
  // console.log("career_sec7_iconbox:", career_sec7_iconbox);

  return (
    <div className="md:py-[80px] lg:py-[100px] py-[45px] flex flex-col gap-8 relative overflow-hidden">
      {/* Background vectors */}
      <img
        className="purple_vctr hidden md:block absolute -bottom-40 -right-20 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      <img
        className="green_vctr hidden md:block absolute -bottom-40 right-20 md:w-[370px] w-[300px]"
        src="/green_vector.svg"
        alt="Green Vector"
      />

      {/* Heading */}
      <div className="relative w-full fix">
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
          <div className="max-w-[100%]">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <div className="flex items-start gap-2 lg:gap-5 flex-col">
                <h3 className="xl:text-[52px] xl:leading-[60px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[42px] text-[32px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize">
                  <span className="bw-r w-full flex gap-5">
                    <span className="!bw-r">But if you still aren’t sold,</span>
                    <img
                      src="/abstract_pattern.svg"
                      className="abstract_svg xl:!flex !hidden"
                      alt="Grade A Box"
                    />
                  </span>
                  <span className="bw-m capitalize w-full">
                    Here Is Our #PromiseOfMore
                  </span>
                  <img
                    src="/abstract_pattern.svg"
                    className="abstract_svg xl:!hidden !flex mt-2"
                    alt="Grade A Box"
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Cards Section */}
      <div className="flex fixup flex-wrap justify-center gap-2 sm:gap-4 w-full bg-white">
        {career_sec7_iconbox.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[48%] sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[18.86%] 1366:w-[19%] h-[140px] md:h-[180px] xl:h-[200px] border border-[#D4D4D4] flex flex-col justify-center items-center text-center bg-white p-2 lg:gap-[10px]"
          >
            <img
              src={formatMediaUrl(item.career_sec7_iconbox_image)}
              priority
              unoptimized // ← Must be true
              className="sm:w-auto w-[35%] lg:w-[70px] lg:h-[70px] "
              alt={item.career_sec7_iconbox_title || `icon-${index}`}
            />

            {/* Title rendered via dangerouslySetInnerHTML */}
            <h3
              className="xl:text-[16px] md:text-[14px] text-[12px] bw-m"
              dangerouslySetInnerHTML={{
                __html: item.career_sec7_iconbox_title || "",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
