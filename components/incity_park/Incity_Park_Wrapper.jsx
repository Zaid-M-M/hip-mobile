import React from "react";
import Incity_park_sec1 from "./Incity_park_sec1/Incity_park_sec1";
import Incity_park_sec2 from "./Incity_park_sec2/Incity_park_sec2";
import Incity_park_sec5 from "./Incity_park_sec5/Incity_park_sec5";
import Incity_park_sec6 from "./Incity_park_sec6/Incity_park_sec6";
import Incity_park_sec3 from "./Incity_park_sec3/Incity_park_sec3";
import Incity_park_IndMap from "./Incity_park_map_sec/Incity_park_IndMap";

const Incity_Park_Wrapper = () => {
  return (
    <div>
      <Incity_park_sec1 />
      <Incity_park_sec2 />
      {/* <Incity_park_sec3 /> */}
      <Incity_park_IndMap />
      <Incity_park_sec5 />
      <Incity_park_sec6 />
    </div>
  );
};

export default Incity_Park_Wrapper;
