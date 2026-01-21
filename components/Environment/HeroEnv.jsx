import React from "react";

const HeroEnv = () => {
  return (
    <div>
      <div className="relative w-full h-[70vh] 1280:h-[100vh] 1366:h-[590px] overflow-hidden">
        {/* Desktop image */}
        <img
          className="w-full h-full object-cover md:block hidden"
          src={"/environment/envbg.webp"}
          alt="Environment Banner"
        />
        {/* Mobile image */}
        <img
          className="w-full h-full object-cover md:hidden block"
          src="/environment/environment_banner_mob.webp"
          alt="Environment Banner Mobile"
        />

        {/* Overlay content */}
        <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
          <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px]">
              {"Environment"}
            </a>
          </div>

          <div className="flex flex-col">
            {/* <h1 className="bw-m text-white text-[35px] leading-[45px] sm:text-[45px] sm:leading-[55px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
              {"Environment"}
              <span className="w-[80px] sm:w-[120px]  ml-[15px] mb-[8px] s h-[4px] 1024:w-[249px] md:h-[6px] bg-[#fff] md:mb-[14px] md:ml-[30px] inline-block"></span>
            </h1> */}
            <h1 className="bw-m text-white text-[35px] sm:text-[45px] sm:leading-[55px] leading-[45px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
              {"Environment"}
              <span className="w-[80px] sm:w-[80px] 768:w-[100px] 1024:w-[160px]  ml-[15px] mb-[6px]  h-[4px] 1280:w-[249px] md:h-[6px] bg-[#fff] md:mb-[14px] md:ml-[30px] inline-block"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEnv;
