import React from "react";
import Chm_sec1 from "./Chm_sec1/Chm_sec1";
import Chm_sec2 from "./Chm_sec2/Chm_sec2";
import Chm_sec3 from "./Chm_sec3/Chm_sec3";
import Chm_sec4 from "./Chm_sec4/Chm_sec4";
import Slider from "./Auto_sec5/Slider";
import { ReactLenis } from "lenis/react";
const ChmWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Chm_sec1 />
        <Chm_sec2 />
        <Chm_sec3 />
        <Chm_sec4 />
        {/* <Slider /> */}
      </ReactLenis>
    </div>
  );
};

export default ChmWrapper;
