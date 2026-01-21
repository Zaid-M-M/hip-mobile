import React from "react";
import Ntwrk_sec1 from "./Ntwrk_sec1/Ntwrk_sec1";
import Ntwrk_sec2 from "./Ntwrk_sec2/Ntwrk_sec2";
import Ntwrk_sec3 from "./Ntwrk_sec3/Ntwrk_sec3";
import Ntwrk_sec4 from "./Ntwrk_sec4/Ntwrk_sec4";
// import Test from "./Ntwrk_sec4/Test";
import Ntwrk_sec5 from "./Ntwrk_sec5/Ntwrk_sec5";
import Ntwrk_sec6 from "./Ntwrk_sec6/Ntwrk_sec6";
import Ntwrk_sec7 from "./Ntwrk_sec7/Ntwrk_sec7";
import Ntwrk_sec8 from "./Ntwrk_sec8/Ntwrk_sec8";
import Ntwrk_sec9 from "./Ntwrk_sec9/Ntwrk_sec9";
import { ReactLenis } from 'lenis/react';
const NetworkWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Ntwrk_sec1 />
        <Ntwrk_sec2 />
        <Ntwrk_sec3 />
        <Ntwrk_sec4 />
        {/* <Test /> */}
        <Ntwrk_sec5 />
        <div className="relative overflow-hidden">

          <img className="purple_vctr  hidden md:block absolute top-0 right-0 md:top-[-70px] md:right-[50px] md:w-[350px] w-[300px]" src='/purple_vector.svg' />
          <img className="orange_vctr  hidden md:block absolute top-0 right-0 md:top-[-100px] md:right-[-100px] md:w-[350px] w-[300px]" src='/orange_vector.svg' />
          <Ntwrk_sec6 />

        </div>
        <Ntwrk_sec7 />
        <Ntwrk_sec8 />
        <Ntwrk_sec9 />
      </ReactLenis>
    </div>
  );
};

export default NetworkWrapper;
