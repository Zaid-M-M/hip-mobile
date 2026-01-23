"use client";
import React, { useEffect, useRef, useState } from "react";
import TabHeaderMob from "./TabHeaderMob";
import { CardSlider } from "./tabbed-mobile/CardSlider";
import { NavControls } from "./tabbed-mobile/NavControls";
import { HeaderSection } from "./tabbed-mobile/HeaderSection";
import { tabData } from "./shared/tabData";

const MobileTabbedContent = ({ tabData = [] }) => {
  const [activeSlug, setActiveSlug] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Update activeSlug and activeTab whenever tabData changes
  useEffect(() => {
    if (tabData.length > 0) {
      setActiveSlug(tabData[0].slug);
      setActiveTab(tabData[0]);
      setActiveTabIndex(0);
    }
  }, [tabData]);

  // Update activeTab whenever activeSlug changes
  useEffect(() => {
    if (!activeSlug) return;
    const tabIndex = tabData.findIndex((t) => t.slug === activeSlug);
    const tab = tabData.find((t) => t.slug === activeSlug);
    setActiveTab(tab || null);
    setActiveTabIndex(tabIndex >= 0 ? tabIndex : 0);
  }, [activeSlug, tabData]);

  const handleTabChange = (index) => {
    if (tabData[index]) {
      setActiveSlug(tabData[index].slug);
      setActiveTabIndex(index);
    }
  };

  if (!activeTab) return null;

  const handleViewAll = () => {
    console.log("View all clicked for:", activeTab.slug);
  };

  return (
    <div className="block lg:hidden">
      {/* Mobile Tab Header */}
      <TabHeaderMob activeTab={activeTabIndex} setActiveTab={handleTabChange} />

      {/* Swiper Slider */}
      <CardSlider
        cards={activeTab.cards}
        onViewAll={handleViewAll}
        type={activeTab.slug}
      />
    </div>
  );
};

export default MobileTabbedContent;