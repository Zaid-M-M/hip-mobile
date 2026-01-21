import React from "react";
import Scroll_cards from "./Scroll_cards";

const Ntwrk_sec5 = () => {
  return (
    <div className="bg-black w-full ">
      <div className="relative w-full fix 1280:pt-[100px] 1280:pb-[20px] pt-[45px] pb-[45px]">
        <div className="flex lg:flex-row flex-col justify-between gap-[15px] lg:gap-[25px] xl:gap-[50px] mb-[0px]">
          <div className="flex items-left flex-col relative w-fit">
            <div className="flex gap-[10px] md:gap-[17px]">
              <h2 className="sec_hd !font-medium bw-m bg-gradient-to-r whitespace-nowrap overflow-visible from-[#AC38D9] to-[#f47920] bg-clip-text text-transparent capitalize">
                One Partner{" "}
              </h2>
              <img src="/abstract_pattern.svg" className="abstract_svg" />
            </div>
            <h2 className="sec_hd bw-r bg-gradient-to-r whitespace-nowrap overflow-visible text-white capitalize">
              Endless Possibilities.
            </h2>
          </div>

          <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-[#E0E0E0] xl:w-[670px] lg:pt-[17px]">
            At Horizon, we understand that every business moves differently —
            which is why we offer park formats tailored to meet your supply
            chain requirements. Whether you need a large-scale distribution hub
            or a hyperlocal city-based facility, our spaces are built to keep
            you agile, connected, and competitive.
          </p>
        </div>

        <Scroll_cards />
      </div>
    </div>
  );
};

export default Ntwrk_sec5;
