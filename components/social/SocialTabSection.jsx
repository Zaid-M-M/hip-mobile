"use client";
import React, { useState } from "react";
import { socialTabsData } from "./data/socialTabsData";
import SocialTabs from "./SocialTabs";
import SocialTabContent from "./SocialTabContent";
import SocialDropdown from "./SocialDropdown";

const SocialTabSection = () => {
  const [activeTab, setActiveTab] = useState(socialTabsData[0].title);

  return (
    <section className="w-full fixup pb-12 1280:py-[100px]">
      {/* Dropdown for tablets & smaller */}
      <div className="lg:hidden">
        <SocialDropdown
          categories={socialTabsData.map((tab) => tab.label)}
          activeTab={socialTabsData.findIndex((tab) => tab.title === activeTab)}
          setActiveTab={(i) => setActiveTab(socialTabsData[i].title)}
        />
      </div>

      {/* Tabs for larger screens */}
      <div className="hidden lg:flex">
        <SocialTabs
          tabs={socialTabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Tab Content (shared) */}
      <SocialTabContent tabs={socialTabsData} activeTab={activeTab} />
    </section>
  );
};

export default SocialTabSection;
