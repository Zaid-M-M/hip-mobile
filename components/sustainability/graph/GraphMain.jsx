import React from "react";
import Graph from "./Graph";

const GraphMain = () => {
  return (
    <div className="w-full xl:py-24 py-12 flex justify-center bg-black relative">
      <div className="fix">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col xl:flex-row xl:items-start justify-between md:gap-10 gap-5">
            {/* ---- LEFT ---- */}
            <div className="w-full flex-1 flex flex-col justify-center">
              <h2 className="text-[35px] txt_gradient_sustain flex flex-col md:text-[45px] xl:text-[64px] xl:leading-[74px] md:leading-[55px] leading-[45px] bw-r xl:tracking-[-2.56px]">
                <span className="bw-m">Net Zero Road Map</span>
              </h2>
            </div>

            {/* ---- RIGHT ---- */}
            <div className="xl:w-[45%] w-full flex flex-col justify-center">
              <p className="bw-r text-[16px] leading-[26px] xl:text-[20px] xl:leading-[30px] text-white">
                We are developing our near- and long-term emission reduction
                targets (net-zero) aligned to the SBTi framework and the Paris
                Agreement.
              </p>
            </div>
          </div>
          {/* Graph */}
          <Graph />
        </div>
      </div>
      <img
        src="/sustainability/arrow_mark_2.png"
        className="absolute top-0 right-[max(5%,calc((100vw-1340px)/2))]"
        alt=""
      />
    </div>
  );
};

export default GraphMain;
