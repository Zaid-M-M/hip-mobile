import React from "react";
import Indspot from "./Indspot";
import Ind2 from "./Ind2";
import IndMap from "./IndMap";
import Solutions from "./Solutions";
import Slider from "../ecommerce/Ecom_sec5/Slider";
import Ntwrk_sec6 from "../network_overview/Ntwrk_sec6/Ntwrk_sec6";
import Success from "./Success";
import BFP from "./BFP";
import Spaces from "./Spaces";
import { ReactLenis } from "lenis/react";
import HCF from "./imgtabs/HCF";
const IndMain = () => {
  return (
    <div>
      <ReactLenis root>
        <Indspot />
        <Ind2 />
        <IndMap />
        <HCF />
        {/* <Solutions /> */}

        <Spaces />
        {/* <BFP /> */}
        {/* <div className="bg-[#F5F5F5]">
          <Ntwrk_sec6 />
        </div> */}
        <Success />
        <Slider />
      </ReactLenis>
    </div>
  );
};

export default IndMain;
