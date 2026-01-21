// "use client";
// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import MobileMap from "./MobileMap";
// import MobileDropDown from "./MobileDropDown";
// import { RegionSlider } from "./RegionSlider";
// import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";

// export default function MobileMapWrapper({
//   title,
//   subtitle,
//   type,
//   tabs = null,
// }) {
//   const [highlightedRegions, setHighlightedRegions] = useState({});
//   const [selectedRegionId, setSelectedRegionId] = useState(null);
//   const [selectedRegionObject, setSelectedRegionObject] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const parksRef = useRef(null);

//   useEffect(() => {
//     async function loadRegions() {
//       try {
//         setLoading(true);
//         const regions = await buildDynamicHighlightedRegions(type);
//         setHighlightedRegions(regions);

//         // default region
//         // const firstKey = Object.keys(regions)[0];
//         // if (firstKey) {
//         //   setSelectedRegionId(firstKey);
//         //   setSelectedRegionObject(regions[firstKey]);
//         // }
//         const defaultRegion =
//           regions["maharashtra"] || Object.values(regions)[0];
//         if (defaultRegion) {
//           const defaultKey =
//             Object.keys(regions).find((k) => regions[k] === defaultRegion) ||
//             Object.keys(regions)[0];
//           setSelectedRegionObject(defaultRegion);
//           setSelectedRegionId(defaultKey);
//         }
//       } catch (err) {
//         console.error(err);
//         setError(err?.message || "Failed to load regions");
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadRegions();
//   }, [type]);

//   const handleRegionSelect = (regionId) => {
//     const region = highlightedRegions[regionId];
//     if (!region) return;
//     setSelectedRegionId(regionId);
//     setSelectedRegionObject(region);
//     setIsDropdownOpen(false);
//     if (parksRef.current) {
//       setTimeout(() => {
//         parksRef.current.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     }
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center min-h-[600px] text-white">
//         Loading Regions...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center min-h-[600px] text-red-500">
//         {error}
//       </div>
//     );

//   return (
//     <div className="flex flex-col w-full h-full pt-[45px] text-white bg-black lg:hidden">
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: "100%" }}
//         transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="overflow-hidden flex fixup pb-8 flex-col"
//       >
//         <motion.h2 className="text-[36px] sm:text-[45px] sm:leading-[55px] bg-gradient-to-r txt_gradient whitespace-nowrap tracking-[-0.04em] leading-[100%]">
//           {subtitle}
//         </motion.h2>
//         <h2 className="bw-r text-white text-[36px] sm:text-[45px] leading-[40px] sm:leading-[55px] tracking-[-0.04em]">
//           {title}
//         </h2>
//       </motion.div>

//       {tabs && (
//         <div className="flex border border-[#565656]   text-[12px] mx-4 mb-4 overflow-hidden">
//           {tabs.map((tab, idx) => (
//             <button
//               key={tab.key}
//               onClick={() => tab.onClick(tab.key)}
//               className={`
//           flex-1 py-3 text-center
//           ${
//             type === tab.key
//               ? "bg-white/10 text-white/75"
//               : "bg-black text-white/50"
//           }
//           ${idx === 0 ? "rounded-l" : ""}
//           ${idx === tabs.length - 1 ? "rounded-r" : ""}
//           ${idx !== tabs.length - 1 ? "border-r border-[#565656]" : ""}
//         `}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       )}
//       {/* Map */}
//       <div className="relative w-full h-[450px] sm:h-[550px] mb-4">
//         <MobileMap
//           type={type}
//           selectedRegionId={selectedRegionId}
//           onRegionClick={handleRegionSelect}
//           highlightedRegions={highlightedRegions}
//         />
//       </div>

//       {/* Tabs (optional) */}
//       {/* {tabs && (
//         <div className="flex border border-[#565656]  text-[12px] mx-4 mb-4 overflow-hidden">
//           {tabs.map((tab, idx) => (
//             <button
//               key={tab.key}
//               onClick={() => tab.onClick(tab.key)}
//               className={`
//           flex-1 py-3 text-center
//           ${
//             type === tab.key
//               ? "bg-white/10 text-white/75"
//               : "bg-black text-white/50"
//           }
//           ${idx === 0 ? "rounded-l" : ""}
//           ${idx === tabs.length - 1 ? "rounded-r" : ""}
//           ${idx !== tabs.length - 1 ? "border-r border-[#565656]" : ""}
//         `}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       )} */}

//       {/* Dropdown */}
//       <div className="px-4 ">
//         <MobileDropDown
//           selected={selectedRegionObject}
//           onSelect={(region) => handleRegionSelect(region.id)}
//           highlightedRegions={highlightedRegions}
//           isDropdownOpen={isDropdownOpen}
//           setIsDropdownOpen={setIsDropdownOpen}
//         />
//       </div>

//       {/* Slider */}
//       {selectedRegionObject?.locations && (
//         <div className="px-4 mb-10" ref={parksRef}>
//           <RegionSlider
//             parks={selectedRegionObject.locations}
//             regionName={selectedRegionObject.label}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import MobileMap from "./MobileMap";
// import MobileDropDown from "./MobileDropDown";
// import { RegionSlider } from "./RegionSlider";
// import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";

// export default function MobileMapWrapper({
//   title,
//   subtitle,
//   type,
//   tabs = null,
// }) {
//   const [highlightedRegions, setHighlightedRegions] = useState({});
//   const [selectedRegionId, setSelectedRegionId] = useState(null); // ← null = none selected
//   const [selectedRegionObject, setSelectedRegionObject] = useState(null); // ← null = none selected
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const parksRef = useRef(null);

//   useEffect(() => {
//     async function loadRegions() {
//       try {
//         setLoading(true);
//         const regions = await buildDynamicHighlightedRegions(type);
//         setHighlightedRegions(regions);

//         // ← Intentionally NO default selection
//         setSelectedRegionId(null);
//         setSelectedRegionObject(null);
//       } catch (err) {
//         console.error(err);
//         setError(err?.message || "Failed to load regions");
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadRegions();
//   }, [type]);

//   const handleRegionSelect = (regionId) => {
//     const region = highlightedRegions[regionId];
//     if (!region) return;

//     setSelectedRegionId(regionId);
//     setSelectedRegionObject(region);
//     setIsDropdownOpen(false);

//     if (parksRef.current) {
//       setTimeout(() => {
//         parksRef.current.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     }
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center min-h-[600px] text-white">
//         Loading Regions...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center min-h-[600px] text-red-500">
//         {error}
//       </div>
//     );

//   return (
//     <div className="flex flex-col w-full h-full pt-[45px] text-white bg-black lg:hidden">
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: "100%" }}
//         transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="overflow-hidden flex fixup pb-8 flex-col"
//       >
//         <motion.h2 className="text-[36px] sm:text-[45px] sm:leading-[55px] bg-gradient-to-r txt_gradient whitespace-nowrap tracking-[-0.04em] leading-[100%]">
//           {subtitle}
//         </motion.h2>
//         <h2 className="bw-r text-white text-[36px] sm:text-[45px] leading-[40px] sm:leading-[55px] tracking-[-0.04em]">
//           {title}
//         </h2>
//       </motion.div>

//       {tabs && (
//         <div className="flex border border-[#565656] text-[12px] mx-4 mb-4 overflow-hidden">
//           {tabs.map((tab, idx) => (
//             <button
//               key={tab.key}
//               onClick={() => tab.onClick(tab.key)}
//               className={`
//                 flex-1 py-3 text-center
//                 ${
//                   type === tab.key
//                     ? "bg-white/10 text-white/75"
//                     : "bg-black text-white/50"
//                 }
//                 ${idx === 0 ? "rounded-l" : ""}
//                 ${idx === tabs.length - 1 ? "rounded-r" : ""}
//                 ${idx !== tabs.length - 1 ? "border-r border-[#565656]" : ""}
//               `}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Map */}
//       <div className="relative w-full h-[450px] sm:h-[550px] mb-4">
//         <MobileMap
//           type={type}
//           selectedRegionId={selectedRegionId}
//           onRegionClick={handleRegionSelect}
//           highlightedRegions={highlightedRegions}
//         />
//       </div>

//       {/* Dropdown */}
//       <div className="px-4">
//         <MobileDropDown
//           selected={selectedRegionObject}
//           onSelect={(region) => handleRegionSelect(region.id)}
//           highlightedRegions={highlightedRegions}
//           isDropdownOpen={isDropdownOpen}
//           setIsDropdownOpen={setIsDropdownOpen}
//         />
//       </div>

//       {/* Slider */}
//       <div className="px-4 mb-12" ref={parksRef}>
//         <RegionSlider
//           parks={selectedRegionObject?.locations || []}
//           regionName={selectedRegionObject?.label}
//           isRegionSelected={!!selectedRegionObject}
//         />
//       </div>
//     </div>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import MobileMap from "./MobileMap";
import MobileDropDown from "./MobileDropDown";
import { RegionSlider } from "./RegionSlider";
import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";

export default function MobileMapWrapper({
  title,
  subtitle,
  type,
  tabs = null,
}) {
  const [highlightedRegions, setHighlightedRegions] = useState({});
  const [selectedRegionId, setSelectedRegionId] = useState(null); // ← null = none selected
  const [selectedRegionObject, setSelectedRegionObject] = useState(null); // ← null = none selected
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const parksRef = useRef(null);

  useEffect(() => {
    async function loadRegions() {
      try {
        setLoading(true);
        const regions = await buildDynamicHighlightedRegions(type);
        setHighlightedRegions(regions);

        // Intentionally NO default selection
        setSelectedRegionId(null);
        setSelectedRegionObject(null);
      } catch (err) {
        console.error(err);
        setError(err?.message || "Failed to load regions");
      } finally {
        setLoading(false);
      }
    }
    loadRegions();
  }, [type]);

  const handleRegionSelect = (regionId) => {
    const region = highlightedRegions[regionId];
    if (!region) return;

    setSelectedRegionId(regionId);
    setSelectedRegionObject(region);
    setIsDropdownOpen(false);

    if (parksRef.current) {
      setTimeout(() => {
        parksRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[600px] text-white">
        Loading Regions...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-[600px] text-red-500">
        {error}
      </div>
    );

  return (
    <div className="flex flex-col w-full h-full pt-[45px] text-white bg-black lg:hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden flex fixup pb-8 flex-col"
      >
        <motion.h2 className="text-[36px] sm:text-[45px] sm:leading-[55px] bg-gradient-to-r txt_gradient whitespace-nowrap tracking-[-0.04em] leading-[100%]">
          {subtitle}
        </motion.h2>
        <h2 className="bw-r text-white text-[36px] sm:text-[45px] leading-[40px] sm:leading-[55px] tracking-[-0.04em]">
          {title}
        </h2>
      </motion.div>

      {/* Tabs */}
      {tabs && (
        <div className="flex border border-[#565656] text-[12px] mx-4 mb-4 overflow-hidden">
          {tabs.map((tab, idx) => (
            <button
              key={tab.key}
              onClick={() => tab.onClick(tab.key)}
              className={`
                flex-1 py-3 text-center
                ${
                  type === tab.key
                    ? "bg-white/10 text-white/75"
                    : "bg-black text-white/50"
                }
                ${idx === 0 ? "rounded-l" : ""}
                ${idx === tabs.length - 1 ? "rounded-r" : ""}
                ${idx !== tabs.length - 1 ? "border-r border-[#565656]" : ""}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Map */}
      <div className="relative w-full h-[450px] sm:h-[550px] mb-4">
        <MobileMap
          type={type}
          selectedRegionId={selectedRegionId}
          onRegionClick={handleRegionSelect}
          highlightedRegions={highlightedRegions}
        />
      </div>

      {/* Dropdown */}
      <div className="px-4">
        <MobileDropDown
          selected={selectedRegionObject}
          onSelect={(region) => handleRegionSelect(region.id)}
          highlightedRegions={highlightedRegions}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>

      {/* Slider – NOW FULLY SYNCED WITH DESKTOP */}
      <div className="px-4 mb-12" ref={parksRef}>
        <RegionSlider
          parks={selectedRegionObject?.locations || []}
          regionName={selectedRegionObject?.label}
          isRegionSelected={!!selectedRegionObject}
          highlightedRegions={highlightedRegions} // ← Required
          activeRegionId={selectedRegionId} // ← Required
          type={type} // ← Required
        />
      </div>
    </div>
  );
}
