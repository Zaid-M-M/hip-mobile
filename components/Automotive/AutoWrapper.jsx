import React from "react";
import Auto_sec1 from "./Auto_sec1/Auto_sec1";
import Auto_sec2 from "./Auto_sec2/Auto_sec2";
import Auto_sec3 from "./Auto_sec3/Auto_sec3";
import Auto_sec4 from "./Auto_sec4/Auto_sec4";
import Slider from "./Auto_sec5/Slider";
import { ReactLenis } from "lenis/react";
const EcomWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Auto_sec1 />
        <Auto_sec2 />
        <Auto_sec3 />
        <Auto_sec4 />
        {/* <Slider/> */}
      </ReactLenis>
    </div>
  );
};

export default EcomWrapper;
