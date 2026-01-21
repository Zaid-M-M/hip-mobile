import React from "react";
import Ren_sec1 from "./Ren_sec1/Ren_sec1";
import Ren_sec2 from "./Ren_sec2/Ren_sec2";
import Ren_sec3 from "./Ren_sec3/Ren_sec3";
import Ren_sec4 from "./Ren_sec4/Ren_sec4";
import Slider from "./Auto_sec5/Slider";
import { ReactLenis } from "lenis/react";
const EcomWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Ren_sec1 />
        <Ren_sec2 />
        <Ren_sec3 />
        <Ren_sec4 />
        {/* <Slider/> */}
      </ReactLenis>
    </div>
  );
};

export default EcomWrapper;
