import React from "react";

const Built = () => {
  return (
    <div className="relative overflow-hidden h-fit">
      {" "}
      <div className="fixup  min-h-full">
        <div className="flex flex-col gap-[25px] 1024:flex-row items-start justify-center w-full 1024:bg-[url('/environment/built.png')] xl:py-24 py-12 bg-cover bg-center">
          <div className="w-full 1024:w-1/2 flex flex-col items-start gap-[12px] 1024:gap-[16px] 1280:gap-[20px]">
            <div>
              <h2 className="bw-m text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] 1366:leading-[74px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:tracking-[-3.04px]">
                Built to Conserve,
              </h2>
              <h2 className="bw-r text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:leading-[74px] 1366:tracking-[-3.04px]">
                Designed to Lead
              </h2>
            </div>
            <div className=" ">
              <img
                src="/abstract_pattern_sustain.png"
                className="w-full h-full max-w-full abstract_sustian_svg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full items-center 1024:w-1/2">
            <h3 className="bw-m pb-2 text-[20px] 768:leading-[28px] 1280:text-[24px] 1280:leading-[30px]">
              Where Sustainability Meets Innovation
            </h3>
            <p className="bw-r 768:text-[18px] 768:leading-[28px] 1280:text-[20px] 1280:leading-[30px]">
              From design to daily operations, every detail is engineered to
              reduce our environmental footprint and create long-term value for
              the planet. Our commitment to sustainability shows up in smart
              water systems, energy-efficient design, and infrastructure built
              to work in harmony with the environment. Whether it's zero liquid
              discharge, rainwater harvesting, or solar power readiness, every
              feature is built to conserve resources and meet tomorrow’s
              benchmarks, today.
            </p>
          </div>
        </div>
      </div>
      <img
        className="purple_vctr  md:block absolute -top-40 right-0 1024:-left-20 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      {/* <img
        className="orange_vctr hidden md:block absolute -top-40 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      /> */}
      <img
        className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px]  left-auto xl:right-[auto] right-[-90px] md:top-[0px] lg:top-[-120px] 1024:left-[-180px] xl:left-[-180px] 1920:left-[-50px]"
        src="/green_vector.svg"
      />
    </div>
  );
};

export default Built;
