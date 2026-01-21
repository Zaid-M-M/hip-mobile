import React from "react";
import MHead from "./MHead";

const MMain = () => {
  return (
    <div className="xl:py-24 py-12 xl:pb-[50px]">
      <div className="fix">
        <div className="flex flex-col xl:gap-y-28 gap-y-5">
          <MHead />
          <div className="w-full">
            <img
              src="/sustainability/materiality/material.png"
              alt="Materiality"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MMain;
