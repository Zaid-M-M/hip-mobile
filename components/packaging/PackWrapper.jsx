import React from "react";
import Pack_sec1 from "./Pack_sec1/Pack_sec1";
import Pack_sec2 from "./Pack_sec2/Pack_sec2";
import Pack_sec3 from "./Pack_sec3/Pack_sec3";
import Pack_sec4 from "./Pack_sec4/Pack_sec4";
import Slider from "./Pack_sec5/Slider";
import { ReactLenis } from "lenis/react";
const EcomWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Pack_sec1 />
        <Pack_sec2 />
        <Pack_sec3 />
        <Pack_sec4 />
        {/* <Slider/> */}
      </ReactLenis>
    </div>
  );
};

export default EcomWrapper;
