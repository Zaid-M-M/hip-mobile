import React from "react";
import ACardSec from "./ACardSec";

const AMMain = ({ incity_amenities = [] }) => {
  return (
    <div className="bg-black relative overflow-hidden xl:py-24 py-12">
      <div className=" absolute right-5 768:right-10 w-[50%] 768:w-[35%] top-8 1024:top-10 lg:w-[50%] 1280:w-[37%] 1280:right-19">
        <img src="/workflow/workbg_sec3.png" alt="" />
      </div>
      <div className="fixup">
        <div className="flex items-left flex-col md:flex-row md:items-center ">
          <h2 className="md64m bw-r flex flex-col capitalize">
            <span className="txt_gradient flex gap-3 lg:gap-4 items-center bw-m">
              Amenities & Utilities
              <br className="block" />
              {/* <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                /> */}
            </span>

            <span className=" bw-r text-white flex flex-col md:flex-row gap-[10px] md:gap-[17px] items-start md:items-center capitalize z-20">
              that deliver to your aspirations
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg"
                alt="pattern"
              />
            </span>
          </h2>
        </div>
      </div>
      <ACardSec incity_amenities={incity_amenities} />
    </div>
  );
};

export default AMMain;
