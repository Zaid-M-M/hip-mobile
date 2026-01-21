import React from "react";

const MapHead = () => {
  return (
    <div className="w-full relative xl:pt-20 pt-10 xl:pb-12 pb-6 bg-[url(/parkdetail/eoabg.jpg)] bg-cover bg-center bg-no-repeat">
      <img
        src="/rect.svg"
        alt="Rectangle SVG"
        className="absolute xl:w-auto w-[100px] -top-5 left-[max(5%,calc((100vw-1340px)/2))]"
      />
      {/* <h2 className="inline-block ml-[max(5%,calc((100vw-1340px)/2))] w-fit text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px] bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap">
        Ease of Access
      </h2> */}
      <h2 className="inline-block ml-[max(5%,calc((100vw-1340px)/2))] w-fit text-[35px] leading-[45px] md:text-[48px] md:leading-[58px] xl:text-[64px] xl:leading-[74px] bw-m txt_gradient capitalize whitespace-nowrap">
        Ease of Access
      </h2>
    </div>
  );
};

export default MapHead;
