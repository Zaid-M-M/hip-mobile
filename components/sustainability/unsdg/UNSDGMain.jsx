import React from "react";
import SDGHead from "./SDGHead";
import SusLayout from "./SusLayout";

const UNSDGMain = () => {
  return (
    <div className="w-full bg-black xl:py-24 py-12 relative overflow-hidden">
      <div className="fix">
        <div className="flex flex-col">
          <SDGHead />
          <SusLayout />
        </div>
      </div>
      <img
        className="absolute top-0 right-0"
        src="/sustainability/plant5.png"
        alt=""
      />
      <img
        className="absolute left-0 top-[25%]"
        src="/sustainability/plant6.png"
        alt=""
      />
      <img
        className="absolute right-0 top-[50%]"
        src="/sustainability/plant7.png"
        alt=""
      />
      <img
        className="absolute left-0 bottom-0"
        src="/sustainability/plant8.png"
        alt=""
      />
    </div>
  );
};

export default UNSDGMain;
