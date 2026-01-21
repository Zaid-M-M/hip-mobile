// "use client";
// import React, { useState } from "react";
// import InsightsTabs from "./InsightsTabs";
// import InsightsTitleSection from "./InsightsTitleSection";
// import BlogTabContent from "./BlogTabContent";
// import WhitePaperTabContent from "./WhitePaperTabContent";
// import EventTabContent from "./EventTabContent";
// import NewsPressTabContent from "./NewsPressTabContent";
// import PressTabContent from "./press/PressTabContent";
// import NewsTabContent from "./news/NewsTabContent";

// const InsightsContentF = () => {
//   const [activeTab, setActiveTab] = useState("Blogs");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [pressReleaseFilter, setPressReleaseFilter] = useState("news");

//   const tabsData = [
//     { title: "Blogs" },
//     { title: "White Papers" },
//     { title: "Events" },
//     { title: "News" },
//     { title: "Press Release" },
//   ];

//   return (
//     <div className="w-full bg-white">
//       <InsightsTitleSection activeTab={activeTab} />

//       <InsightsTabs
//         tabs={tabsData}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />

//       {activeTab === "Blogs" && (
//         <BlogTabContent
//           selectedCategory={selectedCategory}
//           selectedYear={selectedYear}
//         />
//       )}
//       {activeTab === "White Papers" && <WhitePaperTabContent />}
//       {activeTab === "Events" && <EventTabContent />}
//       {activeTab === "News" && <NewsTabContent />}
//       {activeTab === "Press Release" && <PressTabContent />}
//     </div>
//   );
// };

// export default InsightsContentF;

// components/insights/InsightsContent/InsightsContentF.tsx
import React from "react";
import InsightsContentClient from "../InsightsContentClient";

const InsightsContentF = () => {
  return <InsightsContentClient />;
};

export default InsightsContentF;
