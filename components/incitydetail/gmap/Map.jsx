import React from "react";

const Map = ({ incity_concentric_map_image }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-[24px] xl:h-screen relative overflow-hidden">
        {/* <div className="concentric_map_olverlay1 z-1 absolute xl:top-[0px] top-[0px] bottom-auto  pl-[max(5%,calc((100vw-1340px)/2))]">
          <div className="flex md:flex-row flex-col xl:gap-5 md:gap-2.5 ">
            <h2 className=" bw-r text-[15px] md:text-[45px] xl:text-[52px] xl:leading-[62px] 2xl:text-[56px] 2xl:leading-[74px] md:leading-[55px] leading-[20px] bw-r xl:tracking-[-2.26px] ">
              Strategically{" "}
              <span className="bw-m">
                {" "}
                <br className="hidden"></br>Centred
              </span>
            </h2>
            <img src="/abstract_pattern.svg" class="abstract_svg" alt="" />
          </div>
        </div> */}
        <img
          src={incity_concentric_map_image}
          className="w-full h-full object-cover "
        />
        {/* <img
          src="/incity_park/concentic_map2.jpg"
          className="w-full h-full object-cover "
        /> */}
      </div>
    </>
  );
};

export default Map;
