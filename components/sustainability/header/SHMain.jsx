import React from "react";
import TSec from "./TSec";
import BSec from "./BSec";

const SHMain = () => {
  return (
    <div className="relative overflow-hidden w-full max-w-screen">
      <TSec />
      <BSec />
      <img
        src="/sustainability/plant.svg"
        alt="Plant Gradient"
        className="absolute xl:h-[120vh] 1920:h-[95vh] h-[110vh] w-auto z-50 -right-60 -bottom-96 xl:-right-[3%] xl:-bottom-[10vh]"
      />
      <img
        src="/sustainability/plant2.png"
        alt="Plant Gradient"
        className="absolute 2xl:h-[60vh] h-[40vh] w-auto z-10 left-0 bottom-0"
      />
    </div>
  );
};

export default SHMain;
