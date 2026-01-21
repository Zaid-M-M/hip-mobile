"use client";
import React from "react";
import Breadcrumbs from "@/components/global/Breadcrumbs";

const InsightsHero = () => {
  return (
    <div className="relative w-full overflow-hidden h-[590px]">
      <img
        className="w-full h-[590px] object-cover md:block hidden"
        src="/insightherobg.webp"
        alt="Insights Hero"
      />
      <img
        className="w-full h-[590px] object-cover md:!hidden block"
        src="/insight_banner_mob.webp"
        alt="Insights Hero Mobile"
      />

      <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/media" },
          ]}
          color="#ffffff"
        />

        <div className="flex flex-col">
          <h1 className="flex items-center gap-[15px]">
            <span className="bw-r text-white text-[56px] leading-[66px] md:text-[76px] md:leading-[86px] tracking-[-3.04px]">
              Latest
            </span>
            <span className="align-middle w-[140px] md:w-[249px] h-0 border-t-[5.82px] border-t-white" />
          </h1>
          <h2 className="bw-m text-white text-[56px] leading-[66px] md:text-[76px] md:leading-[86px] tracking-[-3.04px]">
            From Horizon
          </h2>
        </div>
      </div>
    </div>
  );
};

export default InsightsHero;
