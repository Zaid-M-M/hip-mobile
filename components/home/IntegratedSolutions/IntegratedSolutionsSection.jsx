import React from "react";
import Header from "./_components/Header";
import Accordion from "./_components/Accordion";
import FeatureImage from "./_components/FeatureImage";

const IntegratedSolutionsSection = () => {
  return (
    <div className="relative z-0 w-full h-full lg:min-h-[625px] pt-[45px]  lg:pt-[50px] 1440:pt-[50px] overflow-hidden">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      {/* <div className=""></div> */}
      <section className="relative flex flex-col h-full justify-between md:items-end pl-[6%] pr-[5.5%] sm:pr-[6%] xl:pr-[5%] 1366:pr-[6%] 1440:pr-[15%] 1600:pr-[11%]  1920:pr-[14%] xl:pl-[max(5%,calc((100vw-1340px)/2))] md:flex-row ">
        {/* Top-left gradient */}
        {/* <div className="fix"> */}
        <div className="relative z-10 flex flex-col pb-[45px] 1280:pb-0 justify-start md:w-full lg:min-w-[400px] xl:min-w-[480px] 1440:max-w-[500px] flex-1 md:h-auto h-fit">
          <Header />
          <Accordion />
        </div>

        <div className="relative top-0 bottom-0 right-0 z-0 hidden w-full xl:w-[58%] 1366:w-[54%] 1536:w-[60%] h-full pointer-events-none md:items-end md:justify-end lg:flex">
          <FeatureImage />
        </div>

        {/* </div> */}
      </section>
    </div>
  );
};

export default IntegratedSolutionsSection;
