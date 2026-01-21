"use client";
import { motion } from "framer-motion";
import React from "react";
import Btn from "@/components/global/Btn";

const Partner_old = () => {
  return (
    <div className="relative overflow-hidden">


      <img className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[-80px] left-[auto] right-[0] lg:top-[0px] xl:left-[200px] 1920:left-[400px]" src='/green_vector.svg' />
      <img className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[20px] left-[auto] right-[0] lg:top-[-80px] xl:left-[350px] 1920:left-[600px]" src='/orange_vector.svg' />

      <div className="relative w-full  overflow-hidden fix 1280:pt-[100px] 1280:pb-[55px] pt-[45px] pb-[45px]">

        <div className="flex flex-col items-left md:flex-row md:items-center">
          <h1 className="sec_hd bw-r">
            Partner<br className="block"></br>
            <span className="bw-m">With Us</span>
          </h1>
          <img
            src="/abstract_pattern.svg"
            className="mb-[12px] mt-[-66px] md:mt-[-32px] w-[100px] 1280:w-[auto]  1280:mt-[-55px] 1280:ml-[20px] md:ml-[13px] ml-[115px]"
          />
        </div>

        <div className="flex justify-between md:mt-[49px] mt-[40px] flex-col gap-[34px]">
          <div className="flex gap-[34px] md:flex-row flex-col">
            <div className="text-center text-white bg-[#f47920] relative pt-[30px] pb-[40px] lg:pt-[38px] lg:pb-[48px] px-[24px] flex items-center">
              <div>
                <h3 className="text-[27px] md:text-[30px] lg:text-[40px] leading-[34px] md:leading-[50px] lg:leading-[40px] bw-m mb-[14px]">
                  For You
                </h3>
                <p className="1536:w-[605px] text-[17px] md:text-[20px] leading-[28px] bw-r">
                  Looking to scale your operations, expand into a new region, or
                  fast-track a new facility? Let’s build it—faster, smarter, and
                  fully aligned to your logistics or manufacturing needs.
                </p>
              </div>
              <img
                className="absolute right-0 top-0 w-[100px] lg:w-[auto]"
                src="/Cap_Overview/cards_arrow.svg"
              />
            </div>
            <div className="text-center text-white bg-[#0db14b] relative pt-[30px] pb-[40px] lg:pt-[38px] lg:pb-[48px] px-[24px]  flex items-center">
              <div>
                <h3 className="text-[27px] md:text-[30px] lg:text-[40px] leading-[34px] md:leading-[50px] lg:leading-[40px]  bw-m mb-[14px]">
                  For Your Customers
                </h3>
                <p className="1536:w-[605px] text-[17px] md:text-[20px] leading-[28px] bw-r">
                  Have a client with specific space or infrastructure
                  requirements? Invite us for your next RFQ or proposal—we’re
                  always open to the right opportunity and collaboration.
                </p>
              </div>
              <img
                className="absolute right-0 bottom-0 w-[100px] lg:w-[auto]"
                src="/Cap_Overview/cards_dbl_arrow.svg"
              />
            </div>
          </div>
          <div>
            <div className="text-center text-white bg-[#96959A] relative pt-[30px] pb-[40px] lg:pt-[52px] lg:pb-[47px] px-[24px] flex items-center">
              <div className="w-[100%]">
                <h3 className="text-[27px] md:text-[30px] lg:text-[40px] leading-[34px] md:leading-[50px] lg:leading-[40px] bw-m mb-[14px]">
                  Get in Touch with Our Leasing Team{" "}
                </h3>
                <p className="text-[17px] md:text-[20px] leading-[28px] bw-r">
                  Talk to our team to explore how Horizon’s network can give
                  your business an edge.
                </p>
                <a
                  href=""
                  className="text-[16px] leading-[26px] text-white uppercase tracking-[0.1em] flex items-center bw-sb justify-center mt-[13px] gap-[15px]"
                >
                  Connect now{" "}
                  <img
                    className="w-[23px] md:w-[30px]"
                    src="/btn_whit_arrow.svg"
                  />
                </a>
              </div>
              <img
                className="absolute left-0 bottom-0 w-[100px] lg:w-[auto]"
                src="/Cap_Overview/triangle.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner_old;
