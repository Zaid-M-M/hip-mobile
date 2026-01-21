"use client";
import React from "react";

const Ntwrk_sec2 = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        className="green_vctr hidden md:block absolute top-[-80px] right-[20px] lg:top-auto lg:bottom-[-110px] lg:right-[150px] md:w-[350px] w-[300px]"
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr hidden md:block absolute top-[-100px] right-[-100px] lg:top-auto lg:bottom-[-100px] lg:right-[-50px] md:w-[350px] w-[300px]"
        src="/orange_vector.svg"
      />

      <div className="relative w-full fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] xl:pb-[100px]">
        <div className="flex flex-col justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[47%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex items-start flex-col md:items-start relative  md:w-[460px] lg:w-[auto]">
              <h1 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[45px] lg:text-[40px] md:leading-[55px] xl:text-[55px] xl:leading-[65px] lg:tracking-[-2.64px] bw-r md:w-[460px] lg:w-[auto] capitalize">
                Expand With Confidence<br></br>
              </h1>

              <div className="flex gap-[10px] md:gap-[17px]  md:flex-col flex-col">
                <h2 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[45px] lg:text-[40px] md:leading-[55px] xl:text-[55px] xl:leading-[65px] lg:tracking-[-2.64px] bw-r md:w-[460px] lg:w-[auto] capitalize">
                  <span className="bw-m">Anywhere in India</span>
                </h2>
                <img
                  src="/abstract_pattern.webp"
                  className="abstract_svg w-fit"
                />
              </div>
            </div>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">
              Your growth shouldn’t be limited by location. Our nationwide
              network of Grade A industrial and logistics parks gives you room
              to grow—exactly where your business needs to be.
            </p>

            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              From key consumer markets to emerging manufacturing and
              warehousing hubs, we are strategically placed to bring you closer
              to customers, suppliers and opportunities.
            </p>
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}
    </div>
  );
};

export default Ntwrk_sec2;
