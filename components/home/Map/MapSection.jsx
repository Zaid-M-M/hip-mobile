// "use client";
// import { useState } from "react";
// import ZoomableSVGMap from "./ZoomableSVGMap";
// import InCityZoomable from "./InCityZoomable";
// import MapWrapper from "./MapWrapper";

// export default function MapSection() {
//   const [activeTab, setActiveTab] = useState("industrial");

//   const tabConfig = {
//     industrial: {
//       title: "Park Finder",
//       subtitle: "Grow Your World In Ours",
//       MapComponent: ZoomableSVGMap,
//     },
//     incity: {
//       title: "Park Finder",
//       subtitle: "Grow Your World In Ours",
//       MapComponent: InCityZoomable,
//     },
//   };

//   const { title, subtitle, MapComponent } = tabConfig[activeTab];

//   return (
//     <section className="relative w-full bg-[#0E0E0E] text-white py-12">
//       {/* Tabs */}
//       <div className="flex bg-white border border-[#565656] mb-8 max-w-[600px]">
//         <button
//           onClick={() => setActiveTab("industrial")}
//           className={`flex-1 py-3 ${
//             activeTab === "industrial"
//               ? "bg-[#38393A] text-white"
//               : "bg-black text-gray-300"
//           }`}
//         >
//           Industrial & Logistics Parks
//         </button>
//         <button
//           onClick={() => setActiveTab("incity")}
//           className={`flex-1 py-3 ${
//             activeTab === "incity"
//               ? "bg-[#38393A] text-white"
//               : "bg-black text-gray-300"
//           }`}
//         >
//           InCity Centers
//         </button>
//       </div>

//       {/* Map Wrapper (reused) */}
//       <MapWrapper
//         title={title}
//         subtitle={subtitle}
//         MapComponent={MapComponent}
//       />
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import ZoomableSVGMap from "./ZoomableSVGMap";
import InCityZoomable from "./InCityZoomable";
import MapWrapper from "./MapWrapper";

export default function MapSection() {
  const [activeTab, setActiveTab] = useState("industrial");

  const tabConfig = {
    industrial: {
      title: "Park Finder",
      subtitle: "Grow Your World In Ours",
      type: "industrial",
      MapComponent: ZoomableSVGMap,
    },
    incity: {
      title: "Park Finder",
      subtitle: "Grow Your World In Ours",
      type: "incity",
      MapComponent: InCityZoomable,
    },
  };

  const { title, subtitle, MapComponent, type } = tabConfig[activeTab];

  return (
    <MapWrapper
      title={title}
      subtitle={subtitle}
      type={type}
      MapComponent={MapComponent}
      tabs={[
        { key: "industrial", label: "Industrial & Logistics Parks" },
        { key: "incity", label: "InCity Centers" },
      ]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}
