import React from "react";
import SHMain from "./header/SHMain";
import CMain from "./cardstack/CMain";
import UNSDGMain from "./unsdg/UNSDGMain";
import MMain from "./materiality/MMain";
import TabMain from "./tabcard/TabMain";
import PMain from "./partner/PMain";
import DMain from "./download/DMain";
import IMPMain from "./impact/IMPMain";
import VMmain from "./visionmission/VMmain";
import VMmainF from "./visionmission/VMmainF";
import CMainF from "./cardstack/CMainF";
import Graph from "./graph/Graph";
import GraphMain from "./graph/GraphMain";
import VMMob from "./visionmission/VMMob";

const SMain = () => {
  return (
    <div>
      <SHMain />
      <VMmainF />
      <VMMob />
      <CMainF />
      <UNSDGMain />
      <IMPMain />
      <GraphMain />
      <MMain />
      <TabMain />
      <DMain />
      <PMain />
    </div>
  );
};

export default SMain;
