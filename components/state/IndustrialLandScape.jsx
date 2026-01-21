import React from "react";
import ArrowList from "./ArrowList";

const IndustrialLandScape = ({ data, arrow }) => {
  return (
    <div className="bg-black py-[45px] lg:py-[100px]">
      <div className="fixup">
        <h2
          className=" md:w-fit xl:text-[64px] text-[35px] md:text-[45px] leading-[45px] md:leading-[55px] xl:leading-[74px] -mt-5 bw-m tracking-[-0.04em] txt_gradient sticky top-10"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
      </div>

      {/* Two column layout */}
      <div className="fixup mt-5 lg:mt-10 flex flex-col lg:flex-row gap-10 xl:gap-[75px] items-stretch">
        {/* Left column (text with fade overlay, scrollable if needed) */}
        <div className="relative flex-1 flex flex-col overflow-hidden">
          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/60 to-transparent z-10" />

          <div className="overflow-y-auto pr-2">
            <p
              className="bw-r text-[16px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-[#E0E0E0] flex flex-col gap-2 lg:gap-5"
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            />
          </div>
        </div>

        {/* Right column (Arrow list, sticky) */}
        <div className="flex-1 sticky top-8 self-start">
          {data.arrowList ? (
            <div dangerouslySetInnerHTML={{ __html: data.arrowList }} />
          ) : (
            <ArrowList
              items={data.incentvised_list}
              data={data}
              arrow={arrow}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustrialLandScape;
