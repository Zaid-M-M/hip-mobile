// "use client";
// import { useState } from "react";
// import MobileMapWrapper from "./mobile/MobileMapWrapper";

// export default function HomeMobileMapSection() {
//   const [activeTab, setActiveTab] = useState("industrial");

//   const tabs = [
//     { key: "industrial", label: "Industrial & Logistics Parks" },
//     { key: "incity", label: "InCity Centers" },
//   ];

//   return (
//     <section className="lg:hidden flex flex-col bg-black w-full">
//       {/* Tabs */}
//       <div className="flex mb-4 px-4 gap-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab.key}
//             onClick={() => setActiveTab(tab.key)}
//             className={`flex-1 py-2 text-center rounded ${
//               activeTab === tab.key
//                 ? "bg-[#F47920] text-white"
//                 : "bg-[#1A1A1A] text-gray-400"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Map + Dropdown + Slider */}
//       <MobileMapWrapper type={activeTab} />
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import MobileMapWrapper from "./mobile/MobileMapWrapper";

export default function HomeMobileMapSection() {
  const [activeTab, setActiveTab] = useState("industrial");

  const tabs = [
    {
      key: "industrial",
      label: "Industrial & Logistics Parks",
      onClick: setActiveTab,
    },
    { key: "incity", label: "InCity Centers", onClick: setActiveTab },
  ];

  return (
    <section className="lg:hidden flex flex-col bg-black w-full">
      <MobileMapWrapper
        title={"Grow Your World in Ours"}
        subtitle={"Park Finder"}
        type={activeTab}
        tabs={tabs}
      />
    </section>
  );
}
