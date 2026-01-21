import React from "react";
import SS_sec1 from "./SS_sec1/SS_sec1";
import SS_sec2 from "./SS_sec2/SS_sec2";
import SS_sec3 from "./SS_sec3/SS_sec3";
import Brand_Slider from "./Brand_sec/Slider";
import { ReactLenis } from "lenis/react";

const SSWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <SS_sec1 />
        <SS_sec2 />
        <SS_sec3 />
        <Brand_Slider />
      </ReactLenis>
    </div>
  );
};

export default SSWrapper;
