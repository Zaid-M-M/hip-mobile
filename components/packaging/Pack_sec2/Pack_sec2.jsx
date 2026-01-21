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
              <h2 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[43px] md:leading-[55px] xl:text-[40px] 1440:text-[40px] xl:leading-[52px] 1440:leading-[50px] lg:tracking-[-2.64px] bw-r md:w-[460px] lg:w-[auto] capitalize 360:text-[25px] 360:leading-[35px]">
                Designed for precision, hygiene, <br />
                and rapid turnarounds in
                <br></br>
              </h2>
              <div className="gap-[10px] md:gap-[17px]  md:flex-row flex-col">
                <h2 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[43px] md:leading-[55px] xl:text-[40px] 1440:text-[40px] xl:leading-[52px] 1440:leading-[50px] lg:tracking-[-2.64px] bw-r md:w-[460px] lg:w-[auto] capitalize 360:text-[25px] 360:leading-[35px]">
                  <span className="bw-m"> packaging production.</span>
                </h2>

                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg mt-[10px] 2xl:mt-5"
                />
              </div>
            </div>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">
              Manufacturing and production process for food grade packaging
              products hinges on precision, hygiene, and rapid turnarounds.
              Horizon partners with packaging companies across FMCG, pharma,
              industrial, and e-commerce supply chains to design warehouses and
              factories that meet the sector’s evolving needs.
            </p>
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Whether you're producing aseptic cartons, flexible films,
              corrugated boxes, rigid containers, or specialised insulated
              packaging, our parks offer the infrastructure to support
              high-volume, high-accuracy manufacturing. From controlled
              environments to efficient layouts for raw material and product
              movement, every element is optimised to reduce downtime, enable
              compliance, and keep production on track.
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
