import React from "react";

const TestHead = () => {
  return (
    <div className="flex flex-col fix">
      <h2 className="bw-m lg:text-[64px] md:text-[45px] text-[32px] leading-[120%]">
        Real Experiences,
      </h2>
      <span className="flex flex-row gap-[10px] md:gap-[17px] items-center">
        <span className="bw-r lg:text-[64px] md:text-[45px] text-[32px] leading-[120%]">
          Real Impact
        </span>
        <img src="/abstract_pattern.webp" className="abstract_svg" />
      </span>
    </div>
  );
};

export default TestHead;
