import React from "react";
import Ecom_sec1 from "./Ecom_sec1/Ecom_sec1";
import Ecom_sec2 from "./Ecom_sec2/Ecom_sec2";
import Ecom_sec3 from "./Ecom_sec3/Ecom_sec3";
import Ecom_sec4 from "./Ecom_sec4/Ecom_sec4";
import Slider from "./Ecom_sec5/Slider";
import { ReactLenis } from "lenis/react";
const EcomWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Ecom_sec1 />
        <Ecom_sec2 />
        <Ecom_sec3 />
        <Ecom_sec4 />
        {/* <Slider/> */}
      </ReactLenis>
    </div>
  );
};

export default EcomWrapper;
