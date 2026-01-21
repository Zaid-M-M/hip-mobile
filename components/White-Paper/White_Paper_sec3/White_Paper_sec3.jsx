"use client";

import React from "react";
import Image from "next/image";

const White_Paper_sec3 = () => {
  return (
    <section className="bg-white py-8 fix">
      <h2 className=" text-[29px] leading-[39px] lg:text-[40px]  lg:leading-[50px]  bw-m pb-[24px] ">
        A Guidebook for Supply Chain Professionals.
      </h2>
      <img src="/white_paper/white_sec3.jpg" alt="" />

      <div className="pt-[29px]">
        <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pb-[16px]">
          Every supply chain begins with a promise: deliver the right product,
          to the right place, at the right time. But what happens when the
          customer says, “I don’t want it”?
        </p>
        <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pb-[16px]">
          When we think of logistics, we picture goods moving forward: factories
          to warehouses, warehouses to retailers, retailers to customers. What
          we don’t see is the silent flow of goods moving backward - items
          rejected at the doorstep, gadgets returned after a few days of use, or
          defective products sent back for repair.
        </p>
        <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pb-[16px]">
          That’s where reverse logistics begins - it is the complex process of
          managing returns, repairs, recycling, and disposal. It’s no longer a
          footnote. It is a billion-dollar industry in India, reshaping how
          businesses think about profitability, compliance, and sustainability.
          For decades, it was treated as an afterthought, a cost of doing
          business. Today, it is becoming one of the most critical and expensive
          functions in global supply chains, and a strategic advantage when
          executed well.
        </p>
        <div className="w-full h-auto bg-white py-[30px]">
          {/* OUTER BOX */}
          <div className="w-full h-auto bg-[#FFFFFF] border border-[#D0D0D0] p-6 sm:p-8 lg:p-12">
            {/* ---------- TOP HEADING ---------- */}
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-[18px] sm:text-[22px] lg:text-[28px] leading-[26px] sm:leading-[32px] lg:leading-[38px] font-semibold text-black">
                India’s Reverse Logistics Market
              </h2>
            </div>

            {/* ---------- BOTTOM IMAGE BOXES ---------- */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              {/* LEFT IMAGE */}
              <div className="w-[57%] sm:w-[40%] lg:w-[23%] overflow-hidden  mx-auto lg:mx-0">
                <img
                  src="/white_paper/white_sec4 chart.svg"
                  alt="Left Side"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-[100%] sm:w-[70%] lg:w-[60%] overflow-hidden rounded-xl mx-auto lg:mx-0">
                <img
                  src="/white_paper/white_sec4 chart1.svg"
                  alt="Right Side"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pb-[20px]">
          Imagine an iPhone shipped to Mumbai. The customer changes their mind
          at the doorstep. That single refusal triggers an expensive journey:
          the phone is carried back through multiple warehouses, graded for
          resale, or sent for refurbishing.
        </h2>
        <h2 className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pb-[20px]">
          Multiply that by millions of parcels, and you begin to see the scale
          of India’s reverse logistics challenge.
        </h2>
        <ul className="space-y-3 xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
          <li className="bw-r relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            In India, nearly one in five e-commerce orders is returned.
          </li>
          <li className="bw-r relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            Fashion returns touch 30-35%, electronics 20%, and COD rejections
            nearly 26%.
          </li>
          <li className="bw-r relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            The reverse logistics market is estimated at $33-90 billion, growing
            15-20% CAGR through 2030.
          </li>
          <li className="bw-r relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            Processing a return costs up to 1.5x more than the original
            delivery.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default White_Paper_sec3;
