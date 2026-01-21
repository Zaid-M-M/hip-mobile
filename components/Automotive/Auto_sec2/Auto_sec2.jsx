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
                We don’t just <br className="md:!hidden !flex" />
                provide space—<br></br>
              </h2>
              <div className=" gap-[10px] mt-2 md:gap-[17px]  md:flex-row flex-col">
                <h2 className="w-fit 2xl:text-[40px] 2xl:leading-[45px] xl:text-[40px] xl:leading-[45px] capitalize 2xl:tracking-[-2.64px] xl:tracking-[-2.2px] text-[30px] leading-[35px]">
                  <span className="bw-m">
                    we co-engineer <br className="md:!hidden !flex" />
                    it with you.
                  </span>
                </h2>

                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg mt-[18px] 2xl:mt-[20px]"
                />
              </div>
            </div>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">
              Horizon works alongside auto component manufacturers to deliver
              manufacturing ecosystems that perform under pressure. That’s why
              the factories we develop for our customers are designed to support
              high-load, high-speed, and highly specialised production
              cycles—with features like wide column spans, enhanced floor loads,
              optimised circulation for material handling equipment (MHE), and
              adaptable layouts that evolve with your product lines.
            </p>
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Whether you're setting up a new production unit, scaling up, or
              integrating just-in-time (JIT) inventory systems, our team
              collaborates from day one—offering design flexibility, fast-track
              project delivery, and value-added services that simplify your
              setup journey.
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
