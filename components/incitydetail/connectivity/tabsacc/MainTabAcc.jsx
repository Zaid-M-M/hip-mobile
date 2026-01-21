"use client";
import React from "react";
import Acc from "./Acc";
import AccMob from "./AccMob";

const MainTabAcc = ({
  connectivity,
  industrial_clusters_nearby,
  main_access,
  clat,
  clon,
  setClat,
  setClon,
  sp,
  ep,
  setSp,
  setEp,
  park_name,
  parkLat,
  parkLon,
  incity_park_address,
}) => {
  return (
    <div className="flex 1440:w-[400px] xl:w-[370px] w-full flex-col justify-center xl:gap-0 py-8 xl:py-0 bg-black h-fit xl:h-[720px]">
      <h2 className="text-[#fff] xl:text-[26px] xl:leading-[36px] bw-r border-b-2 last:border-b-0 border-[#ffffff30] pb-[17px]">
        {incity_park_address}
      </h2>
      <div className="lg:!flex !hidden">
        <Acc
          connectivity={connectivity}
          industrial_clusters_nearby={industrial_clusters_nearby}
          main_access={main_access}
          clat={clat}
          clon={clon}
          setClat={setClat}
          setClon={setClon}
          sp={sp}
          ep={ep}
          setSp={setSp}
          park_name={park_name}
          setEp={setEp}
        />
      </div>
      <div className="lg:!hidden !flex">
        <AccMob
          connectivity={connectivity}
          industrial_clusters_nearby={industrial_clusters_nearby}
          main_access={main_access}
          clat={clat}
          clon={clon}
          setClat={setClat}
          setClon={setClon}
          sp={sp}
          ep={ep}
          setSp={setSp}
          park_name={park_name}
          setEp={setEp}
        />
      </div>
      <div className="xl:pb-0 pb-6">
        <h3 className="text-[20px] text-white leading-[30px] ">
          Use these coordinates
        </h3>
        <div className="">
          <p className="xl:text-[20px] text-[16px] text-[#666666] leading-[26px] xl:leading-[30px]">
            {parkLat}
          </p>
          <p className="xl:text-[20px] text-[16px] text-[#666666] leading-[26px] xl:leading-[30px]">
            {parkLon}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainTabAcc;
