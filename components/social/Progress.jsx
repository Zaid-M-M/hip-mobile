import React from "react";

const Progress = () => {
  return (
    <div className="relative overflow-y-hidden overflow-x-hidden">
      <div className="fixup">
        <div className="flex flex-col gap-[25px] 1024:flex-row items-center justify-center w-full xl:py-24 py-12 bg-cover bg-center">
          <div className="w-full  1024:-mt-24 1280:-mt-12 1366:-mt-0 1024:w-1/2 flex flex-col items-start gap-[12px] 1024:gap-[16px] 1280:gap-[20px]">
            <div>
              <h2 className="bw-m text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] 1366:leading-[74px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:tracking-[-3.04px]">
                Progress That
              </h2>
              <h2 className="bw-r text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:leading-[74px] 1366:tracking-[-3.04px]">
                Uplifts Everyone
              </h2>
            </div>
            <div className="">
              <img
                src="/abstract_pattern_sustain.png"
                className="w-full h-full max-w-full abstract_sustian_svg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full items-center 1024:w-1/2">
            <p className="bw-r 768:text-[18px] 768:leading-[28px] 1280:text-[20px] 1280:leading-[30px]">
              Real progress happens when everyone thrives. At Horizon, inclusive
              growth is not just a value, it is a practice. From generating
              local employment to creating safe, comfortable spaces for all who
              work on-site, we prioritise dignity, wellbeing, and opportunity.
              Our sites support not just industry, but the people and
              communities that power it, and features initiatives like driver
              rest areas, landscape pockets for people to relax in, and a strong
              commitment to local hiring and skilling.
            </p>
          </div>
        </div>
      </div>
      <img
        className="purple_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] bottom-auto top-[-20px] right-[0px] lg:top-auto lg:bottom-[-120px] lg:right-[-50px] 1920:right-[-20px]"
        src="/purple_vector.svg"
      />
      {/* <img
        className="orange_vctr hidden md:block absolute -bottom-40 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      /> */}
      <img
        className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] bottom-auto top-[-20px] right-[-20px] lg:top-auto lg:bottom-[-120px] lg:right-[-160px] 1920:right-[-150px]"
        src="/green_vector.svg"
      />
    </div>
  );
};

export default Progress;
