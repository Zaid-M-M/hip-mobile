import React from "react";
import CO_sec1 from "./CO_sec1/CO_sec1";
import Sector_solution from "./Sector_solution/Sector_solution";
import Partner from "./Partner/Partner";
const Cap_overviewWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <CO_sec1 />
      <Sector_solution />
      <Partner />
    </div>
  );
};

export default Cap_overviewWrapper;
