"use client";
import HomeMobileMapSection from "@/components/home/Map/HomeMobileMapSection";
import MapSection from "@/components/home/Map/MapSection";
import React from "react";


const Ntwrk_sec3 = () => {
  return (
    <div className="relative overflow-hidden  bg-[#0e0e0e]">

      <div className="relative w-full overflow-hidden 1280:pl-[0px] xl:px-[0px] px-[0px] 1366:pl-[0px] 1440:pl-[0px] 1536:pl-[0px] 1600:pl-[0px] 1920:pl-[0px] md:pl-[0px]">
        {/* <img
          src="/network_overview/white_sec_arrow.svg"
          className="w-[65px] md:w-[100px] lg:w-[auto] 1536:ml-[90px] 1600:ml-[120px]"
        /> */}

        <MapSection />
        <HomeMobileMapSection />
      </div>

    </div>
  );
};

export default Ntwrk_sec3;
