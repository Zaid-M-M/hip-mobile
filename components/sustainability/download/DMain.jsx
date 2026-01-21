import Link from "next/link";
import React from "react";
import DCSec from "./DCSec";

const DMain = () => {
  return (
    <div
      id="reportdownload"
      className="bg-black -scroll-mb-2 xl:py-24 py-12 relative"
    >
      <div className="fix relatvie !z-10">
        <div className="flex flex-col relatvie !z-10">
          <div className="w-full flex justify-center relatvie !z-10">
            <h3 className="text-center md64m txt_gradient_sustain relatvie !z-10">
              Downloads
            </h3>
          </div>
          <DCSec />
        </div>
      </div>
      <img
        src="/sustainability/plant9.png"
        className="absolute z-0 top-0 right-0"
        alt=""
      />
      <img
        src="/sustainability/plant10.png"
        className="absolute z-0 bottom-0 left-0"
        alt=""
      />
    </div>
  );
};

export default DMain;
