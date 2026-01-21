"use client";
import React from "react";

const MHead = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-start justify-between md:gap-10 gap-5">
      {/* ---- LEFT ---- */}
      <div className="w-full flex-1 flex flex-col justify-center">
        <h2 className="text-[35px] flex flex-col md:text-[45px] xl:text-[64px] xl:leading-[70px] md:leading-[55px] leading-[45px] bw-r xl:tracking-[-2.56px]">
          <span className="bw-m">Materiality</span>
          <span className="bw-r">Assessment</span>
          <span className="flex xl:gap-[17px] gap-[10px]">
            <img
              className="abstract_sustian_svg"
              src="/abstract_pattern_sustain.png"
              alt="Sustainability Gradient"
            />
          </span>
        </h2>
      </div>

      {/* ---- RIGHT ---- */}
      <div className="xl:w-[55%] w-full flex flex-col justify-center">
        <p className="bw-r text-[16px] leading-[26px] xl:text-[20px] xl:leading-[30px]">
          At Horizon, our sustainability strategy begins with listening — to our
          people, our partners, and the communities we serve. In 2023, we
          carried out a detailed materiality assessment to pinpoint the ESG
          issues that matter most to our stakeholders and our long-term success.
          By engaging voices across our ecosystem — from employees and customers
          to community representatives — we gathered key insights that now shape
          our priorities. The result: a focused, future-ready roadmap that
          aligns our efforts with what truly drives impact.
        </p>
      </div>
    </div>
  );
};

export default MHead;
