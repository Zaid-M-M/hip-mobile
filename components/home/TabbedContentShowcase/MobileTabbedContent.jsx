"use client";
import React, { useEffect, useRef, useState } from "react";
import { DropdownFilter } from "./tabbed-mobile/DropdownFilter";
import { CardSlider } from "./tabbed-mobile/CardSlider";
import { NavControls } from "./tabbed-mobile/NavControls";
import { HeaderSection } from "./tabbed-mobile/HeaderSection";
import { tabData } from "./shared/tabData";



// const MobileTabbedContent = ({ tabData = [] }) => {
//   const defaultSlug = tabData[0]?.slug || "";
//   const [activeSlug, setActiveSlug] = useState(defaultSlug);
//   const [activeTab, setActiveTab] = useState(tabData[0] || null);

//   // Update activeTab whenever activeSlug changes
//   useEffect(() => {
//     const tab = tabData.find((t) => t.slug === activeSlug);
//     setActiveTab(tab || null);
//   }, [activeSlug, tabData]);

//   if (!activeTab) return null;

//   const handleViewAll = () => {
//     console.log("View all clicked for:", activeTab.slug);
//   };

//   return (
//     <div className="block sm:hidden">
//       {/* Dropdown to select tab */}
//       <DropdownFilter
//         options={tabData.map((t) => ({ value: t.slug, label: t.label }))}
//         selected={activeSlug}
//         onChange={setActiveSlug}
//       />

//       {/* Swiper Slider */}
//       <CardSlider
//         cards={activeTab.cards}
//         onViewAll={handleViewAll}
//         type={activeTab.slug}
//       />
//     </div>
//   );
// };

// export default MobileTabbedContent;



const MobileTabbedContent = ({ tabData = [] }) => {
  const [activeSlug, setActiveSlug] = useState("");
  const [activeTab, setActiveTab] = useState(null);

  // Update activeSlug and activeTab whenever tabData changes
  useEffect(() => {
    if (tabData.length > 0) {
      setActiveSlug(tabData[0].slug);
      setActiveTab(tabData[0]);
    }
  }, [tabData]);

  // Update activeTab whenever activeSlug changes
  useEffect(() => {
    if (!activeSlug) return;
    const tab = tabData.find((t) => t.slug === activeSlug);
    setActiveTab(tab || null);
  }, [activeSlug, tabData]);

  if (!activeTab) return null;

  const handleViewAll = () => {
    console.log("View all clicked for:", activeTab.slug);
  };

  return (
    <div className="block lg:hidden">
      {/* Dropdown to select tab */}
      <DropdownFilter
        options={tabData.map((t) => ({ value: t.slug, label: t.label }))}
        selected={activeSlug}
        onChange={setActiveSlug}
      />

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