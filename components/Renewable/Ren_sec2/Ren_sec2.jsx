"use client";
import React from "react";

const Ecom_sec2 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] xl:pb-[100px]">
        <img
          className="purple_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[0px] lg:left-[-30px] md:w-[350px] w-[300px]"
          src="/purple_vector.svg"
        />
        <img
          className="orange_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[-100px] lg:left-[200px] md:w-[350px] w-[300px]"
          src="/orange_vector.svg"
        />

        <div className="flex flex-col justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex items-left flex-col md:items-left relative  md:w-[460px] lg:w-[auto]">
              <h2 className="w-fit 2xl:text-[40px] 2xl:leading-[45px] xl:text-[40px] xl:leading-[45px] capitalize 2xl:tracking-[-2.64px] xl:tracking-[-2.2px] text-[30px] leading-[35px]">
                Where Clean <br className="sm:!hidden !flex" />
                Energy Meets
                <br></br>
              </h2>
              <div className="flex gap-[10px] sm:mt-2 md:gap-[17px] flex-col">
                <h2 className="w-fit 2xl:text-[40px] 2xl:leading-[45px] xl:text-[40px] xl:leading-[45px] capitalize 2xl:tracking-[-2.64px] xl:tracking-[-2.2px] text-[30px] leading-[35px]">
                  <span className="bw-m">Smart Infrastructure</span>
                </h2>

                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg w-fit"
                />
              </div>
            </div>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">
              The renewable energy sector comes with big ambitions and even
              bigger components. From utility-scale solar modules to energy
              storage systems and turbine parts, clean-tech logistics is
              anything but light work. That’s why Horizon builds warehousing
              infrastructure that’s ready for the load, designed for long-term
              use, and smart about sustainability.
            </p>
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              We don’t just lease space. We help renewable players plan for the
              long game, factoring in climate controls, port access, expansion
              plans, and ESG goals all in one go. Because the race to net zero
              doesn’t pause for setup delays.
            </p>
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}
    </div>
  );
};

export default Ecom_sec2;
