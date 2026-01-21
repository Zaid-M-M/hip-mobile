"use client";
import React from "react";
import Breadcrumbs from "@/components/global/Breadcrumbs";

const CaseStudiesHero = () => {
  return (
    // <div className="relative w-full overflow-hidden h-[590px] mb-[45px] md:mb-[45px] lg:mb-[110px]">
    //   <img className="w-full h-[590px] object-cover md:block hidden" src='/casestudiesherobg.png' alt="Case Studies Hero" />
    //   <img className="w-full h-[590px] object-cover md:!hidden block" src='/casestudiesherobg.png' alt="Case Studies Hero Mobile" />

    //   <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">

    //     <Breadcrumbs
    //       items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }]}
    //       color="#ffffff"
    //     />

    //     <div className="flex flex-col mt-[40px]">
    //       <h1>
    //         <span className="bw-r text-white text-[38px] leading-[47px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px] xl:tracking-[-3.04px]">Lorem</span>
    //         <span className="inline-block align-middle ml-[30px] w-[249px] h-0 border-t-[5.82px] border-t-white" />
    //       </h1>
    //       <h1>
    //         <span className="bw-m text-white text-[38px] leading-[47px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px] xl:tracking-[-3.04px]">And Ipsum</span>
    //       </h1>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="relative w-full  overflow-hidden">
        <img
          className="w-[100%] md:block hidden"
          src="/case_studies/casestudy_banner.webp"
        ></img>
        <img
          className="w-[100%] md:!hidden block"
          src="/case_studies/casestudy_banner_mob.webp"
        ></img>

        <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
          <div className="bw-m px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white ">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px] ">
              Case Studies
            </a>
          </div>

          <h1 className="flex flex-col">
            <span className="bw-m text-white text-[38px] leading-[47px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px] tracking-[-1.92px] ld:tracking-[-2px] xl:tracking-[-3.04px]">
              Impactful
              <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
            </span>
            <span className="bw-r text-white text-[38px] leading-[47px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]  tracking-[-1.92px] ld:tracking-[-2px] xl:tracking-[-3.04px]">
              Solutions Detailed
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesHero;
