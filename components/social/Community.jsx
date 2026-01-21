"use client";
import React, { useState } from "react";
import CommunityCard from "./CommunityCard";
import { cards } from "./data/CommunityData";

const CommunityPrograms = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div
      className="bg-black relative min-h-[100vh] py-[45px] xl:py-24"
      id="community-programs"
    >
      <div className="absolute top-0 right-0">
        <img src="/social/circle.svg" alt="" />
      </div>
      <div className="fixup">
        {" "}
        <div className="pb-[40px] 1280:pb-[60px]">
          <h2 className="bw-m text-[35px] tracking-[-1.45px] w-fit 768:text-[45px] 768:tracking-[-1.92px] 1024:text-[52px] 1024:tracking-[-2.15px] 1280:text-[56px] 1280:tracking-[-2.24px] 1366:text-[64px] leading-[130%] z-20 relative 1366:tracking-[-2.64px] txt_gradient_sustain">
            Community Programs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px] 1024:gap-[0px] 1280:gap-[60px] 1366:gap-[80px]">
          {/* First Column */}
          <div className="flex flex-col items-center gap-[20px] 1024:gap-[55px] 1280:gap-[70px]">
            {cards.slice(0, 2).map((card, idx) => (
              <CommunityCard
                key={idx}
                {...card}
                index={idx}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          {/* Second Column with margin top */}
          <div className="flex flex-col items-center gap-5 md:gap-[40px] 1024:gap-[55px] 1280:gap-[70px] md:mt-[90px]">
            {cards.slice(2, 4).map((card, idx) => (
              <CommunityCard
                key={idx + 2}
                {...card}
                index={idx + 2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPrograms;
