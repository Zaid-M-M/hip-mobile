import React from "react";
import Aro_sec1 from "./Aro_sec1/Aro_sec1";
import Aro_sec2 from "./Aro_sec2/Aro_sec2";
import Aro_sec3 from "./Aro_sec3/Aro_sec3";
import Aro_sec4 from "./Aro_sec4/Aro_sec4";
import Slider from "./Aro_sec5/Slider";
import { ReactLenis } from "lenis/react";
const EcomWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Aro_sec1 />
        <Aro_sec2 />
        <Aro_sec3 />
        <Aro_sec4 />
        {/* <Slider/> */}
      </ReactLenis>
    </div>
  );
};

export default EcomWrapper;
