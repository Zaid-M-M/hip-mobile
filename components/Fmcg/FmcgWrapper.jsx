import React from "react";
import Fmcg_sec1 from "./Fmcg_sec1/Fmcg_sec1";
import Fmcg_sec2 from "./Fmcg_sec2/Fmcg_sec2";
import Fmcg_sec3 from "./Fmcg_sec3/Fmcg_sec3";
import Fmgc_sec4 from "./Fmgc_sec4/Fmgc_sec4";
import Slider from "./Auto_sec5/Slider";
import { ReactLenis } from "lenis/react";
const EcomWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Fmcg_sec1 />
        <Fmcg_sec2 />
        <Fmcg_sec3 />
        <Fmgc_sec4 />
        {/* <Slider/> */}
      </ReactLenis>
    </div>
  );
};

export default EcomWrapper;
