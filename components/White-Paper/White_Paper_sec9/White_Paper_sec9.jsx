"use client";
import React from "react";
import Image from "next/image";

const WhitePaperSec9 = () => {
  return (
    <section className="relative fix w-full">
      <h2 className=" text-[28px] leading-[38px] lg:text-[40px] lg:leading-[50px] bw-m pb-[40px] pt-[24px]">
        Global Lessons, Indian Innovations: Case Studies - Lessons from Practice
      </h2>

      {/* ---------- BOX 1 ---------- */}
      <div className="w-full overflow-hidden border border-[#EAEAEA] mb-10 flex flex-col md:flex-row min-h-[300px]">
        {/* LEFT IMAGE */}
        <div className="bg-white flex items-center justify-center p-8 md:w-[30%] w-full">
          <div className="w-full max-w-[360px]">
            <Image
              src="/white_paper/flipkart.svg"
              alt="Flipkart case study"
              className="object-contain"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#f47920] text-white lg:p-[50px] p-[20px] md:w-[70%] w-full">
          <h3 className=" text-[17px] leading-[27px] lg:text-[22px] lg:leading-[33px] md:text-[20px] md:leading-[30px] font-bold  mb-[10px]">
            Case Study 1: Flipkart’s Open-Box Returns (Electronics)
          </h3>

          <div className="space-y-4 text-[15.5px] leading-relaxed">
            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Challenge
              </div>
              <p className="text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                High rate of smartphone returns due to DOA (dead on arrival)
                units and customer distrust in packaging integrity.
              </p>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Action
              </div>
              <p className="text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                Introduced open-box delivery in key metros: customers inspect
                and confirm the product before accepting delivery.
              </p>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-2 tracking-wide">
                Impact
              </div>
              <ul className="space-y-2 text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Reduced post-delivery return rate by ~15–20% in pilot cities.
                </li>
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Improved trust in high-ticket categories.
                </li>
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Reduced reverse logistics costs at source (doorstep).
                </li>
              </ul>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Key Learning
              </div>
              <p className="text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                Prevention at doorstep is more cost-effective than processing
                returns downstream.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- BOX 2 (flex reverse) ---------- */}
      <div className="w-full overflow-hidden border border-[#EAEAEA] mb-10 flex flex-col md:flex-row-reverse min-h-[300px]">
        {/* RIGHT IMAGE */}
        <div className="bg-white flex items-center justify-center p-8 md:w-[30%] w-full">
          <div className="w-full max-w-[360px]">
            <Image
              src="/white_paper/amazon.svg"
              alt="Amazon case study"
              className="object-contain"
              width={300}
              height={400}
            />
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div className="bg-[#f47920] text-white lg:p-[50px] p-[20px] md:p-12 md:w-[70%] w-full">
          <h3 className="text-[17px] leading-[27px] lg:text-[22px] lg:leading-[33px] md:text-[20px] md:leading-[30px] font-bold mb-[10px]">
            Case Study 2: Amazon India’s “Amazon Renewed” Program
          </h3>

          <div className="space-y-4 text-[15.5px] leading-relaxed">
            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Challenge
              </div>
              <p className="text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                Millions of returned or unsold electronics carried residual
                value but lacked a trusted resale channel.
              </p>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Action
              </div>
              <p className="text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                Built Amazon Renewed platform with certified refurbishers:
                devices undergo data wipe, quality checks, and resale with
                warranty.
              </p>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-2 tracking-wide">
                Impact
              </div>
              <ul className="space-y-2 text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Recovered 30-40% of value from returned electronics.
                </li>
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Created a trustworthy secondary market for refurbished
                  devices.
                </li>
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Reduced e-waste and aligned with India’s EPR obligations.
                </li>
              </ul>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Key Learning
              </div>
              <p className="text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                Certified refurbishment + resale captures margin, improves
                sustainability, and strengthens brand reputation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- BOX 3 (flex reverse) ---------- */}
      <div className="w-full overflow-hidden border border-[#EAEAEA] mb-10 flex flex-col md:flex-row min-h-[300px]">
        {/* LEFT IMAGE */}
        <div className="bg-white flex items-center justify-center p-8 md:w-[30%] w-full">
          <div className="w-full max-w-[360px]">
            <Image
              src="/white_paper/cashify.svg"
              alt="Flipkart case study"
              className="object-contain"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#f47920] text-white lg:p-[50px] p-[20px] md:p-12 md:w-[70%] w-full">
          <h3 className="text-[17px] leading-[27px] lg:text-[22px] lg:leading-[33px] md:text-[20px] md:leading-[30px] font-bold mb-[10px]">
            Case Study 3: Cashify and the Refurb Smartphone Market
          </h3>

          <div className="space-y-4 text-[15.5px] leading-relaxed">
            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Challenge
              </div>
              <p className="text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                India generates millions of used/returned smartphones annually;
                informal resale dominated, creating trust and quality concerns.
              </p>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Action
              </div>
              <p className="text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                Cashify built an organized refurbishment and resale platform:
                device grading, data wiping, warranty-backed resale; expanded
                into Tier-2/3 cities.
              </p>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-2 tracking-wide">
                Impact
              </div>
              <ul className="space-y-2 text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Achieved triple-digit growth in refurbished smartphone sales
                  (2023-24).
                </li>
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Formalized refurb value chain with warranties and quality
                  guarantees.
                </li>
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-white">
                  Extended device life cycles while cutting e-waste footprint.
                </li>
              </ul>
            </div>

            <div>
              <div className="uppercase lg:text-[18px] lg:leading-[28px] text-[13px] leading-[22px] font-semibold mb-1 tracking-wide">
                Key Learning
              </div>
              <p className=" text-[15px] leading-[25px] bw-r lg:text-[18px] lg:leading-[28px]">
                Organized refurb players can turn e-waste into opportunity,
                marrying customer trust with circular economy goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperSec9;
