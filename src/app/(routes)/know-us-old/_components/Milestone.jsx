import React from "react";
import TimelineSection from "./TimelineSection";

const Milestone = () => {
  return (
    <div className="relative flex  py-10 sm:py-10 1024:pt-[80px] bg-black ">
      {/* <img
        src="/know-us/milebg.png"
        className="absolute top-6 1280:right-[150px] 1280:w-[749px] 1280:h-[719px] right-[5%] w-[60vw] z-10 h-auto"
        alt=""
      /> */}
      <div className="absolute -top-1  left-[4%] 1600:left-[8%] 1920:left-[15%]">
        <img
          src="/rect.svg"
          alt=""
          className="w-[80px] 1024:w-[178px] h-auto"
        />
      </div>

      <div className="relative fix ">
        <div>
          <h2 className="bw-m text-[33px] 768:text-[45px] leading-[41px] 768:leading-[55px] 1280:leading-[75px] 1280:text-[65px] 1366:text-[64px] whitespace-nowrap overflow-visible tracking-[-0.04em] txt_gradient">
            {/* <h1 className="bw-m  bg-[linear-gradient(94deg,#AC38D9_10%,#f47920_40%,#f47920_100%)] bg-clip-text text-transparent whitespace-nowrap overflow-visible sec_hd"> */}
            Milestones That Made Us
          </h2>

          <p className="bw-r text-white text-[16px] md:text-[22px] xl:text-[22px] pt-[10px] sm:pt-[30px] 1366:text-[24px]   leading-[26px]  sm:leading-[34px] 1280:leading-[30px] 1366:leading-[34px]">
            Since the launch of the platform in 2022 with 6 MSFT in assets,
            today, our portfolio has grown to 42 parks in 10 major regions,
            covering over 2,100 acres and 53 million sq. ft. of development
            potential. We serve a diverse range of sectors, providing both
            ready-to-move and built-to-suit solutions tailored to each
            customer’s needs. Ours is also the largest portfolio of Grade A
            in-city warehouses in India
          </p>
        </div>

        <TimelineSection />
      </div>
    </div>
  );
};

export default Milestone;
