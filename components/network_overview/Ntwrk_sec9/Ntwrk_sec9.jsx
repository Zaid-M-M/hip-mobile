"use client";
import React from "react";
import Btn from "@/components/global/Btn";

const Ntwrk_sec9 = () => {
  return (
    <div className="relative overflow-hidden ntwrk_sec9_bg ">
      <div className="relative w-full fix pt-[45px] md:pt[80px] lg:pt-[92px]  pb-[45px] md:pb[55px] xl:pb-[92px]">
        <div className="flex flex-col justify-between mt-[0px] xl:mt-[0px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] mt-[0px]">
            <div className="flex items-start flex-col relative gap-[23px] md:w-[460px] lg:w-[auto]">
              <h2 className="bw-r text-white sec_hd w-[430px]">
                <span className="bw-m">Let’s Reimagine</span> What Industrial
                Spaces Can Be
              </h2>
            </div>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[550px] 1536:max-w-[550px] md:max-w-[100%] lg:max-w-[610px] max-w-[658px] flex flex-col justify-center pt-[30px]">
            <p className="bw-m text-white md:text-[17px] lg:text-[28px] 1280:text-[28px] md:leading-[38px]">
              Talk to our team to understand how we can partner to make your
              next facility efficient, responsible, and people-first.
            </p>
            <Btn text="CONNECT NOW" href="/contact/" className="mt-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ntwrk_sec9;
