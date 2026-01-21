// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";
// import CustomDropdown from "./CustomDropdown";
// import InfoCard from "./InfoCard";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// // import MapSectionSkeleton from "./MapSectionSkeleton";

// export default function MapWrapper({
//   title,
//   slug,
//   subtitle,
//   type, // "industrial" | "incity" | "other"
//   MapComponent = null, // pass a React component (ZoomableSVGMap / HomeZoomable)
//   retryable = false, // show retry button on error?
//   tabs, // 👈 new optional prop
//   activeTab, // 👈 new optional prop
//   onTabChange,
// }) {
//   const PLACEHOLDER_EXIT_DURATION = 500;

//   const [selectedRegionId, setSelectedRegionId] = useState(null);
//   const [showInfoSlider, setShowInfoSlider] = useState(false);
//   const [hoveredRegionId, setHoveredRegionId] = useState(null);
//   const [selectedRegionObject, setSelectedRegionObject] = useState(null);
//   const [hoveredLocation, setHoveredLocation] = useState(null);
//   const [lastHoveredLocation, setLastHoveredLocation] = useState(null);
//   const [defaultLocation, setDefaultLocation] = useState(null);
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [hasParentMounted, setHasParentMounted] = useState(false);
//   const [activeRegion, setActiveRegion] = useState(null);
//   const [highlightedRegions, setHighlightedRegions] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [regionCache, setRegionCache] = useState({});

//   const displayLocation =
//     hoveredLocation || lastHoveredLocation || defaultLocation;
//   const activeRegionId = hoveredRegionId || selectedRegionId;
//   console.log(displayLocation);
//   const loadRegions = useCallback(
//     async (mapType) => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Check cache first
//         if (regionCache[mapType]) {
//           setHighlightedRegions(regionCache[mapType]);
//           return;
//         }

//         const regions = await buildDynamicHighlightedRegions(mapType);

//         const parsedRegions = Object.fromEntries(
//           Object.entries(regions || {}).map(([key, data]) => [
//             key,
//             {
//               ...data,
//               locations: (data.locations || []).map((loc) => ({
//                 ...loc,
//                 x: loc.x ?? 100,
//                 y: loc.y ?? 100,
//                 color: loc.color || "#FF0000",
//               })),
//             },
//           ])
//         );

//         setHighlightedRegions(parsedRegions);

//         // cache it
//         setRegionCache((prev) => ({ ...prev, [mapType]: parsedRegions }));

//         // }
//         const firstKey = Object.keys(parsedRegions)[0];
//         if (firstKey) {
//           setSelectedRegionId(null);
//           setActiveRegion(null);
//           setSelectedRegionObject(null);
//           // ❌ don’t set defaultLocation here
//           setDefaultLocation(null);
//         }
//       } catch (err) {
//         console.error("loadRegions error:", err);
//         setError(err?.message || String(err) || "Failed to load regions");
//       } finally {
//         setLoading(false);
//       }
//     },
//     [regionCache]
//   );

//   useEffect(() => {
//     handleReset();
//     loadRegions(activeTab || type);
//   }, [activeTab, type, loadRegions]);

//   useEffect(() => {
//     if (displayLocation) {
//       setShowInfoSlider(false);
//       const t = setTimeout(
//         () => setShowInfoSlider(true),
//         PLACEHOLDER_EXIT_DURATION
//       );
//       return () => {
//         setShowInfoSlider(false);
//         clearTimeout(t);
//       };
//     }
//   }, [displayLocation]);

//   const handleRegionSelect = (id) => {
//     if (!id || !highlightedRegions) return;
//     setSelectedRegionId(id);
//     setActiveRegion(id);
//     setIsDropdownOpen(false);

//     const label = highlightedRegions[id]?.label || id;
//     setSelectedRegionObject({ id, name: label });
//     setHoveredRegionId(null);

//     const firstLoc = (highlightedRegions[id]?.locations || []).find(
//       (l) => l.image
//     );
//     setDefaultLocation(firstLoc || null);
//     setHoveredLocation(null);
//   };

//   const handleReset = () => {
//     setActiveRegion(null);
//     setSelectedRegionId(null);
//     setHoveredRegionId(null);
//     setSelectedRegionObject(null);
//     setDefaultLocation(null);
//     setHoveredLocation(null);
//     setLastHoveredLocation(null);
//     setShowInfoSlider(false);
//     setIsDropdownOpen(false);
//   };

//   const Map = MapComponent;
//   return (
//     <section className="h-full hidden relative lg:block sm:h-[820px] xl:h-[820px] lg w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
//       <div className="absolute -top-1 left-[4%] 1600:left-[8%] 1920:left-[15%]">
//         <img
//           src="/rect.svg"
//           alt=""
//           className="w-[80px] 1024:w-[130px] h-auto"
//         />
//       </div>

//       {!loading && error && (
//         <div className="flex flex-col items-center justify-center gap-4 h-full px-6">
//           <div className="bg-[#1E1E1E] border border-red-500 rounded-lg p-6 text-center">
//             <p className="text-red-400 text-lg mb-3">
//               ⚠️ Unable to load map data
//             </p>
//             {retryable && (
//               <button
//                 onClick={() => loadRegions()}
//                 className="px-5 py-2 bg-[#F47920] hover:bg-[#d4631a] text-white rounded-md transition"
//               >
//                 Retry
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Main content */}
//       {!loading && !error && (
//         <div className="fixup h-full">
//           <div className="flex justify-center h-full fixmap lg:flex-row">
//             <div className="flex justify-center gap-[30px] xl:gap-[60px] flex-col">
//               <div className="z-60 flex flex-col xl:gap-2.5 overflow-visible whitespace-nowrap">
//                 <motion.h2
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                   className="lg:leading-[55px] text-[56px] bg-gradient-to-r z-60 whitespace-nowrap overflow-visible txt_gradient tracking-[-0.04em] w-auto bw-m"
//                 >
//                   {subtitle}
//                   <br />
//                 </motion.h2>
//                 <h2 className="bw-r text-[45px] leading-[55px] xl:leading-[55px] xl:text-[56px] text-white tracking-[-0.04em]">
//                   {title}
//                 </h2>
//               </div>

//               <div className="flex flex-col justify-between w-fit lg:min-w-[430px] xl:min-w-[470px]">
//                 {/* Tabs (optional) */}
//                 {tabs && (
//                   <div className="flex bg-white border border-[#565656] mb-8 z-50 max-w-[600px]">
//                     {tabs.map((tab) => (
//                       <button
//                         key={tab.key}
//                         onClick={() => onTabChange(tab.key)}
//                         className={`flex-1 py-[20px] px-[14px] ${
//                           activeTab === tab.key
//                             ? "bg-[#38393A] text-white"
//                             : "bg-black text-gray-300"
//                         }`}
//                       >
//                         {tab.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 <div>
//                   <div className="rounded-none h-[285px] justify-between z-50 flex flex-col">
//                     <CustomDropdown
//                       highlightedRegions={highlightedRegions}
//                       selected={selectedRegionObject}
//                       onSelect={(region) => {
//                         handleRegionSelect(region.id);
//                         setSelectedRegionObject(region);
//                       }}
//                       isDropdownOpen={isDropdownOpen}
//                       setIsDropdownOpen={setIsDropdownOpen}
//                     />

//                     {/* Info / Placeholder wrapper */}
//                     <div className="relative h-full w-full max-w-[900px] px-4 overflow-hidden">
//                       <AnimatePresence mode="wait">
//                         {!displayLocation && (
//                           <motion.div
//                             key="placeholder"
//                             initial={{ y: "-100%" }}
//                             animate={{ y: 0 }}
//                             exit={{
//                               y: "-100%",
//                               transition: { duration: 0.8, ease: "easeInOut" },
//                             }}
//                             transition={{
//                               duration: 0.8,
//                               delay: 0.3,
//                               ease: "easeInOut",
//                             }}
//                             className="absolute top-0 left-0 w-full bg-[#212324] h-full z-[10] overflow-hidden"
//                           >
//                             <div className="absolute inset-0 flex flex-col items-center justify-start gap-[22px] text-sm text-gray-400">
//                               <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
//                                 <hr className="w-[40%] border-t border-gray-500" />
//                                 <span className="bw-l text-[20px] leading-[20px]">
//                                   OR
//                                 </span>
//                                 <hr className="w-[40%] border-t border-gray-300" />
//                               </div>

//                               <div className="bg-[#2E373A] px-[16px] py-[15px] rounded-[10px]">
//                                 <img
//                                   src="/home/map/cursor.png"
//                                   width={36}
//                                   height={36}
//                                   alt="cursor"
//                                 />
//                               </div>
//                               <span className="bw-m text-[16px] leading-[20px]">
//                                 Click on location pins
//                               </span>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                       {/* InfoCard */}
//                       <InfoCard
//                         displayLocation={displayLocation}
//                         hasParentMounted={hasParentMounted}
//                         activeRegionId={activeRegionId}
//                         Map={Map}
//                         highlightedRegions={highlightedRegions}
//                       />
//                     </div>
//                   </div>

//                   {/* bottom number + overview link */}
//                   <div className="flex gap-[14px] mt-[9px]">
//                     <div className="relative min-w-[140px] z-50 h-[122px]">
//                       <img
//                         src="/home/map/pattern.svg"
//                         alt="Park Numbers"
//                         className="object-cover w-full h-full"
//                       />
//                       <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
//                         <div className="text-[66px] font-bold bw-r text-white leading-none">
//                           {/* {activeRegionId
//                             ? (
//                                 highlightedRegions?.[activeRegionId]
//                                   ?.locations || []
//                               ).length
//                             : Object.values(highlightedRegions || {}).reduce(
//                                 (sum, region) =>
//                                   sum + ((region.locations || []).length || 0),
//                                 0
//                               )} */}
//                           {activeRegionId
//                             ? (
//                                 highlightedRegions?.[activeRegionId]
//                                   ?.locations || []
//                               ).length
//                             : type === "incity"
//                             ? 17
//                             : type === "industrial"
//                             ? 28
//                             : Object.values(highlightedRegions || {}).reduce(
//                                 (sum, region) =>
//                                   sum + ((region.locations || []).length || 0),
//                                 0
//                               )}
//                         </div>

//                         <div className="text-[16px] bw-r text-white/80 mt-[4px]">
//                           Parks
//                         </div>
//                       </div>
//                     </div>

//                     <div className="w-full h-[122px] z-50 bg-[#1A1A1A] flex items-end pb-[16px] pr-[15px] justify-end">
//                       <Link
//                         // href={
//                         //   type === "industrial"
//                         //     ? "/industrial-logistics-parks"
//                         //     : "#"
//                         // }
//                         href={
//                           activeRegionId
//                             ? `${highlightedRegions[activeRegionId]?.slug}`
//                             : type === "incity"
//                             ? "/incity-centers/"
//                             : type === "industrial"
//                             ? "/industrial-logistics-parks/"
//                             : "/network-overview/"
//                         }
//                         className="flex items-center gap-2 text-[16px] bw-m text-white/80 hover:text-white"
//                       >
//                         {activeRegionId
//                           ? `${highlightedRegions[activeRegionId]?.label} Overview`
//                           : type === "incity"
//                           ? "InCity Centers"
//                           : type === "industrial"
//                           ? "Industrial & Logistics Parks"
//                           : "Network Overview"}
//                         <img
//                           src="/home/map/whitearr.svg"
//                           alt="External link"
//                           className="w-6 h-6"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* MAP */}
//             <div className="relative w-full mt-16 1440:mt-0 z-0 h-full">
//               {Map ? (
//                 <Map
//                   activeRegion={activeRegion}
//                   onRegionSelect={(id) => handleRegionSelect(id)}
//                   onRegionHover={(id) => setHoveredRegionId(id)}
//                   onPinHover={(loc) => {
//                     setHoveredLocation(loc);
//                     if (loc) setLastHoveredLocation(loc);
//                   }}
//                   hoveredRegionId={hoveredRegionId}
//                   onReset={handleReset}
//                   highlightedRegions={highlightedRegions}
//                 />
//               ) : (
//                 <div className="flex items-center justify-center h-full text-gray-400">
//                   Map component not provided
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";
import React, { useEffect, useState, useCallback } from "react";
import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";
import CustomDropdown from "./CustomDropdown";
import InfoCard from "./InfoCard";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
// import MapSectionSkeleton from "./MapSectionSkeleton";

export default function MapWrapper({
  title,
  slug,
  subtitle,
  type, // "industrial" | "incity" | "other"
  MapComponent = null, // pass a React component (ZoomableSVGMap / HomeZoomable)
  retryable = false, // show retry button on error?
  tabs, // 👈 new optional prop
  activeTab, // 👈 new optional prop
  onTabChange,
}) {
  const PLACEHOLDER_EXIT_DURATION = 500;

  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [showInfoSlider, setShowInfoSlider] = useState(false);
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [selectedRegionObject, setSelectedRegionObject] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [lastHoveredLocation, setLastHoveredLocation] = useState(null);
  const [defaultLocation, setDefaultLocation] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasParentMounted, setHasParentMounted] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [highlightedRegions, setHighlightedRegions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [regionCache, setRegionCache] = useState({});

  const displayLocation =
    hoveredLocation || lastHoveredLocation || defaultLocation;
  const activeRegionId = hoveredRegionId || selectedRegionId;
  console.log(displayLocation);
  const loadRegions = useCallback(
    async (mapType) => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        if (regionCache[mapType]) {
          setHighlightedRegions(regionCache[mapType]);
          return;
        }

        const regions = await buildDynamicHighlightedRegions(mapType);

        const parsedRegions = Object.fromEntries(
          Object.entries(regions || {}).map(([key, data]) => [
            key,
            {
              ...data,
              locations: (data.locations || []).map((loc) => ({
                ...loc,
                x: loc.x ?? 100,
                y: loc.y ?? 100,
                color: loc.color || "#FF0000",
              })),
            },
          ]),
        );

        setHighlightedRegions(parsedRegions);

        // cache it
        setRegionCache((prev) => ({ ...prev, [mapType]: parsedRegions }));

        // }
        const firstKey = Object.keys(parsedRegions)[0];
        if (firstKey) {
          setSelectedRegionId(null);
          setActiveRegion(null);
          setSelectedRegionObject(null);
          // ❌ don’t set defaultLocation here
          setDefaultLocation(null);
        }
      } catch (err) {
        console.error("loadRegions error:", err);
        setError(err?.message || String(err) || "Failed to load regions");
      } finally {
        setLoading(false);
      }
    },
    [regionCache],
  );

  useEffect(() => {
    handleReset();
    loadRegions(activeTab || type);
  }, [activeTab, type, loadRegions]);

  useEffect(() => {
    if (displayLocation) {
      setShowInfoSlider(false);
      const t = setTimeout(
        () => setShowInfoSlider(true),
        PLACEHOLDER_EXIT_DURATION,
      );
      return () => {
        setShowInfoSlider(false);
        clearTimeout(t);
      };
    }
  }, [displayLocation]);

  const handleRegionSelect = (id) => {
    if (!id || !highlightedRegions) return;
    setSelectedRegionId(id);
    setActiveRegion(id);
    setIsDropdownOpen(false);

    const label = highlightedRegions[id]?.label || id;
    setSelectedRegionObject({ id, name: label });
    setHoveredRegionId(null);

    const firstLoc = (highlightedRegions[id]?.locations || []).find(
      (l) => l.image,
    );
    setDefaultLocation(firstLoc || null);
    setHoveredLocation(null);
  };

  const handleReset = () => {
    setActiveRegion(null);
    setSelectedRegionId(null);
    setHoveredRegionId(null);
    setSelectedRegionObject(null);
    setDefaultLocation(null);
    setHoveredLocation(null);
    setLastHoveredLocation(null);
    setShowInfoSlider(false);
    setIsDropdownOpen(false);
  };

  const Map = MapComponent;
  return (
    <section className="h-full hidden relative lg:block sm:h-[820px] xl:h-[820px] lg w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
      <div className="absolute -top-1 left-[4%] 1600:left-[8%] 1920:left-[15%]">
        <img
          src="/rect.svg"
          alt=""
          className="w-[80px] 1024:w-[130px] h-auto"
        />
      </div>

      {!loading && error && (
        <div className="flex flex-col items-center justify-center gap-4 h-full px-6">
          <div className="bg-[#1E1E1E] border border-red-500 rounded-lg p-6 text-center">
            <p className="text-red-400 text-lg mb-3">
              ⚠️ Unable to load map data
            </p>
            {retryable && (
              <button
                onClick={() => loadRegions()}
                className="px-5 py-2 bg-[#F47920] hover:bg-[#d4631a] text-white rounded-md transition"
              >
                Retry
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main content */}
      {!loading && !error && (
        <div className="fixup h-full">
          <div className="flex justify-center h-full fixmap lg:flex-row">
            <div className="flex justify-center gap-[30px] xl:gap-[60px] flex-col">
              <div className="z-60 flex flex-col xl:gap-2.5 overflow-visible whitespace-nowrap">
                <motion.h2
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                  className="lg:leading-[55px] text-[56px] bg-gradient-to-r z-60 whitespace-nowrap overflow-visible txt_gradient tracking-[-0.04em] w-auto bw-m"
                >
                  {subtitle}
                  <br />
                </motion.h2>
                <h2 className="bw-r text-[45px] leading-[55px] xl:leading-[55px] xl:text-[56px] text-white tracking-[-0.04em]">
                  {title}
                </h2>
              </div>

              <div className="flex flex-col justify-between w-fit lg:min-w-[430px] xl:min-w-[470px]">
                {/* Tabs (optional) */}
                {tabs && (
                  <div className="flex bg-white border border-[#565656] mb-8 z-50 max-w-[600px]">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => onTabChange(tab.key)}
                        className={`flex-1 py-[20px] px-[14px] ${
                          activeTab === tab.key
                            ? "bg-[#38393A] text-white"
                            : "bg-black text-gray-300"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}

                <div>
                  <div className="rounded-none h-[285px] justify-between z-50 flex flex-col">
                    <CustomDropdown
                      highlightedRegions={highlightedRegions}
                      selected={selectedRegionObject}
                      onSelect={(region) => {
                        handleRegionSelect(region.id);
                        setSelectedRegionObject(region);
                      }}
                      isDropdownOpen={isDropdownOpen}
                      setIsDropdownOpen={setIsDropdownOpen}
                    />

                    {/* Info / Placeholder wrapper */}
                    <div className="relative h-full w-full max-w-[900px] px-4 overflow-hidden">
                      <AnimatePresence mode="wait">
                        {!displayLocation && (
                          <motion.div
                            key="placeholder"
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{
                              y: "-100%",
                              transition: { duration: 0.8, ease: "easeInOut" },
                            }}
                            transition={{
                              duration: 0.8,
                              delay: 0.3,
                              ease: "easeInOut",
                            }}
                            className="absolute top-0 left-0 w-full bg-[#212324] h-full z-[10] overflow-hidden"
                          >
                            <div className="absolute inset-0 flex flex-col items-center justify-start gap-[22px] text-sm text-gray-400">
                              <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
                                <hr className="w-[40%] border-t border-gray-500" />
                                <span className="bw-l text-[20px] leading-[20px]">
                                  OR
                                </span>
                                <hr className="w-[40%] border-t border-gray-300" />
                              </div>

                              <div className="bg-[#2E373A] px-[16px] py-[15px] rounded-[10px]">
                                <img
                                  src="/home/map/cursor.png"
                                  width={36}
                                  height={36}
                                  alt="cursor"
                                />
                              </div>
                              <span className="bw-m text-[16px] leading-[20px]">
                                Click on location pins
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {/* InfoCard */}
                      <InfoCard
                        displayLocation={displayLocation}
                        hasParentMounted={hasParentMounted}
                        activeRegionId={activeRegionId}
                        Map={Map}
                        highlightedRegions={highlightedRegions}
                      />
                    </div>
                  </div>

                  {/* bottom number + overview link */}
                  <div className="flex gap-[14px] mt-[9px]">
                    <div className="relative min-w-[140px] z-50 h-[122px]">
                      <img
                        src="/home/map/pattern.webp"
                        alt="Park Numbers"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
                        <div className="text-[66px] font-bold bw-r text-white leading-none">
                          {/* {activeRegionId
                            ? (
                                highlightedRegions?.[activeRegionId]
                                  ?.locations || []
                              ).length
                            : Object.values(highlightedRegions || {}).reduce(
                                (sum, region) =>
                                  sum + ((region.locations || []).length || 0),
                                0
                              )} */}
                          {activeRegionId
                            ? (
                                highlightedRegions?.[activeRegionId]
                                  ?.locations || []
                              ).length
                            : type === "incity"
                              ? 17
                              : type === "industrial"
                                ? 28
                                : Object.values(
                                    highlightedRegions || {},
                                  ).reduce(
                                    (sum, region) =>
                                      sum +
                                      ((region.locations || []).length || 0),
                                    0,
                                  )}
                        </div>

                        <div className="text-[16px] bw-r text-white/80 mt-[4px]">
                          Parks
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-[122px] z-50 bg-[#1A1A1A] flex items-end pb-[16px] pr-[15px] justify-end">
                      <Link
                        // href={
                        //   type === "industrial"
                        //     ? "/industrial-logistics-parks"
                        //     : "#"
                        // }
                        href={
                          activeRegionId
                            ? `${highlightedRegions[activeRegionId]?.slug}`
                            : type === "incity"
                              ? "/incity-centers"
                              : type === "industrial"
                                ? "/industrial-logistics-parks"
                                : "/network-overview"
                        }
                        className="flex items-center gap-2 text-[16px] bw-m text-white/80 hover:text-white"
                      >
                        {activeRegionId
                          ? `${highlightedRegions[activeRegionId]?.label} Overview`
                          : type === "incity"
                            ? "InCity Centers"
                            : type === "industrial"
                              ? "Industrial & Logistics Parks"
                              : "Network Overview"}
                        <img
                          src="/home/map/whitearr.svg"
                          alt="External link"
                          className="w-6 h-6"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="relative w-full mt-16 1440:mt-0 z-0 h-full">
              {Map ? (
                <Map
                  activeRegion={activeRegion}
                  onRegionSelect={(id) => handleRegionSelect(id)}
                  onRegionHover={(id) => setHoveredRegionId(id)}
                  onPinClick={(loc) => {
                    setHoveredLocation(loc);
                    if (loc) setLastHoveredLocation(loc);
                  }}
                  hoveredRegionId={hoveredRegionId}
                  onReset={handleReset}
                  highlightedRegions={highlightedRegions}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  Map component not provided
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
