"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className=" relative overflow-hidden">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="lg:my-24 my-12">
        <div className="fix ">
          <div className="flex items-left flex-col">
            <div className="bw-m bg-[#F7F7F7] border-[1px] border-[#E3E3E3] px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] mb-[10px]">
              <a href="/" className="text-[13px] md:text-[13px] ">
                Home
              </a>{" "}
              /{" "}
              <a href="#" className="text-[13px] md:text-[13px] ">
                Factory & Inplant Solutions
              </a>
            </div>
            <h1 className="sec_hd bw-r flex flex-col">
              <span className="flex gap-3 lg:gap-4 items-center">
                Custom Fit.<br className="block"></br>{" "}
                <img src="/abstract_pattern.svg" className="abstract_svg" />
              </span>
              <span className="bw-m">Asset-Light Solutions.</span>
            </h1>
          </div>
          <div className="flex z-10 flex-col justify-between mt-[20px] xl:mt-[48px] 1440:gap-[20px] gap-5 xl:gap-0 lg:flex-row 1440:items-center">
            <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px]">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/factory/fact1.jpg"
              ></img>
            </div>
            <div className="1280:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                We constantly seek ways to streamline processes, eliminate
                inefficiencies, and enhance customer success at every stage of
                facilities development and operations.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                At Horizon, we understand that setting up a factory comes with
                upfront costs and operational complexities. That’s why our
                Factory & In-plant Solutions are designed to give you a head
                start—without the heavy capital burden.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
                Whether you're a growing manufacturer looking to avoid setup
                delays or a small business needing only a few bays to begin, we
                offer practical, tailored techno-commercial solutions that get
                you operational faster and smarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
