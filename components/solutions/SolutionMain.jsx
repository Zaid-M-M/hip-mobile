import React from "react";
import Sec1 from "./Sec1";
import STabMain from "./tabcard/STabMain";
import SFormSec from "./SFormSec";
import Sec3 from "./sec3/Sec3";
import GradientDiamond from "./diamondsec/GradientMain";

const SolutionMain = () => {
  return (
    <div>
      <Sec1 />
      <GradientDiamond />
      <Sec3 />
      <STabMain />
      <SFormSec />
    </div>
  );
};

export default SolutionMain;
