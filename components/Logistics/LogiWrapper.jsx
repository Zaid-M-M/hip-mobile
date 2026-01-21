import React from "react";
import Auto_sec1 from "./Logi_sec1/Logi_sec1";
import Logi_sec2 from "./Logi_sec2/Logi_sec2";
import Logi_sec3 from "./Logi_sec3/Logi_sec3";
import Logi_sec4 from "./Logi_sec4/Logi_sec4";
import Slider from "./Auto_sec5/Slider";
import { ReactLenis } from "lenis/react";
const EcomWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Auto_sec1 />
        <Logi_sec2 />
        <Logi_sec3 />
        <Logi_sec4 />
        {/* <Slider/> */}
      </ReactLenis>
    </div>
  );
};

export default EcomWrapper;
