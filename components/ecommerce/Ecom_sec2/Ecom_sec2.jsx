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
                Today’s E-Commerce <br className="sm:!hidden !flex" /> Ecosystem
              </h2>
              <div className="flex gap-[10px] mt-2 md:gap-[17px] flex-col">
                <h2 className="w-fit 2xl:text-[40px] 2xl:leading-[45px] xl:text-[40px] xl:leading-[45px] capitalize 2xl:tracking-[-2.64px] xl:tracking-[-2.2px] text-[30px] leading-[35px]">
                  <span className="bw-m">
                    Moves Fast And <br className="sm:!hidden !flex" />
                    So Do We
                  </span>
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
              At Horizon, we understand that behind every “Buy Now” is a complex
              network of storage, picking, packing, and delivery. That’s why we
              build fulfilment-ready spaces that help you move goods faster,
              smarter, and more cost-effectively.
            </p>
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Whether you're setting up a mother hub, expanding to a regional
              warehouse, or planning micro-fulfilment centres and in-city
              warehouses for last-mile speed, we partner with you from day one
              to deliver logistics-optimised layouts, fast-tracked handovers,
              and built-in flexibility to keep up with customer expectations.
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
