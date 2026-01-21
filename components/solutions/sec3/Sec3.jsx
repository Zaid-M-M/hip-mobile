import React from "react";
import Btn2 from "../../global/Btn2";
import Link from "next/link";
import SVGMob from "./SVGMob";
import SVGDesk from "./SVGDesk";
import TransitionLink from "@/src/app/TransitionLink";

const Sec3 = () => {
  return (
    <div className="w-full relative xl:py-24 py-12 h-fit overflow-hidden bg-[#F5F5F5]">
      <SVGDesk />
      <div className="max-w-[100%] lg:max-w-[50%] xl:max-w-[45%] lg:pr-0 pr-[max(5%,calc((100vw-1340px)/2))] pl-[max(5%,calc((100vw-1340px)/2))]">
        <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
          <div className="flex items-start gap-2 lg:gap-2 flex-col">
            <h2 className="xl:text-[66px] wmhead xl:leading-[76px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
              <span className="bw-r w-full"> Value-Added</span>
              <div className="flex gap-2 xl:gap-5">
                {" "}
                <span className="bw-m w-fit">Solutions</span>
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="Grade A Box"
                />
              </div>
            </h2>
            <img
              src="/solutions/sec3bgmob.jpg"
              alt="Section 3 Value added solutions"
              className="md:!hidden !block w-full h-auto my-[5%]"
            />
            <p className="lg:text-[20px] lg:leading-[30px] text-[16px] leading-[24px] bw-r pt-5 xl:pt-10">
              We don’t stop at building world class infrastructure.
            </p>
            <p className="lg:text-[20px] lg:leading-[30px] text-[16px] leading-[24px] bw-r">
              Our parks are designed to simplify scale and support businesses
              across every growth stage. With value-added offerings like energy
              integration, turnkey factory solutions, staff accommodation and
              cold storage, we enable you to scale sustainably, operate
              efficiently, and move faster—without heavy upfront investments.
            </p>
            <TransitionLink
              href="/value-added-services/"
              className="text-black items-center flex gap-2 bw-r text-[16px] uppercase pt-5 xl:pt-10"
            >
              <span className="bw-m">Value Added Solutions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  d="M7.04688 27.0119L26.7863 7.27246"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.04688 7.27246H26.7863V27.0119"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
