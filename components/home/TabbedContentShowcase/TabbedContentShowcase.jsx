"use client";
import React, { useState, useEffect } from "react";
import TabHeader from "./TabHeader";
import TabContent from "./_components/TabContent";
import { fetchTabContent } from "@/src/lib/fetchSingleTab";
import { fetchAllTabsContent } from "@/src/lib/fetchAllTabsContent";
import MobileTabbedContent from "./MobileTabbedContent";

const TabbedContentShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState([]); // for desktop single tab
  const [allTabData, setAllTabData] = useState([]); // for mobile all tabs
  const [loading, setLoading] = useState(false);

  // Fetch both desktop (single tab) and mobile (all tabs) data
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const [single, all] = await Promise.all([
          fetchTabContent(activeTab),
          fetchAllTabsContent(),
        ]);
        console.log("allTabData >>>", allTabData);
        setTabData(single);
        setAllTabData(all);
        console.log(single);
      } catch (error) {
        console.error("Error fetching tab data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);
  return (
    <div className="relative h-full w-full py-[45px] lg:py-[100px] overflow-hidden">
      {/* Gradient Vectors */}
      <div className="absolute top-0 right-0 lg:right-40 xl:left-auto z-0 pointer-events-none">
        <img
          className="green_vctr w-[200px] md:w-[200px] opacity-[0.6] lg:w-[300px] xl:w-[500px] mt-[-50px] xl:right-[-620px] xl:mt-[60px]"
          src="/green_vector.svg"
          alt="Green Vector"
        />
        <img
          className="orange_vctr w-[200px] md:w-[200px] opacity-[0.6] lg:w-[300px] xl:w-[500px] mt-[-200px] lg:mt-[-50px] xl:right-[800px] xl:mt-[-500px]"
          src="/orange_vector.svg"
          alt="Orange Vector"
        />
      </div>

      <div className="fixup relative z-10">
        {/* Header Content */}
        <div className="mb-6 flex flex-col lg:flex-row gap-[0px] md:gap-[22px] lg:gap-[60px] sm:mb-[50px]">
          {/* Left: Titles */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-[36px] sm:text-[45px] md:text-[48px] lg:text-[52px] 1280:text-[64px] 1280:leading-[74px] bw-m tracking-[-0.04em] leading-[46px] md:leading-[55px]">
              Latest From
            </h3>
            <div className="flex gap-[10px] md:gap-[17px]">
              <h2 className="text-[36px] sm:text-[45px] md:text-[48px] 1280:text-[64px] 1280:leading-[74px] bw-r tracking-[-0.04em] leading-[46px] md:leading-[55px]">
                The Ground
              </h2>
              <span className="mt-2">
                <img
                  src="/abstract_pattern.webp"
                  className="abstract_svg"
                  alt=""
                />
              </span>
            </div>
          </div>

          {/* Right: Description */}
          <div className="w-full lg:w-1/2">
            <p className="bw-r text-[16px] leading-[26px] 1280:text-[18px] 1280:leading-[28px] 1440:text-[20px] mt-2.5 1440:leading-[30px]">
              Catch up on what’s happening across Horizon’s parks - from new
              projects and fresh collaborations to stories shaping India’s
              supply chain growth. Stay tuned for the latest milestones,
              insights, and on-ground developments driving our journey forward.
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent
            activeTab={activeTab}
            content={tabData}
            isLoading={loading}
          />
        </div>

        {/* Mobile View */}
      </div>
      <div className="block fixup lg:!hidden">
        <MobileTabbedContent tabData={allTabData} />
      </div>
    </div>
  );
};

export default TabbedContentShowcase;
