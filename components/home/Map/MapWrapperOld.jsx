// "use client";
// import { useEffect, useState } from "react";
// import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";
// import ZoomableSVGMap from "./ZoomableSVGMap";
// import CustomDropdown from "./CustomDropdown";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";

// export default function NewMapF() {
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
//   // Step 1: Add isDropdownOpen state
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const displayLocation =
//     hoveredLocation || lastHoveredLocation || defaultLocation;
//   const activeRegionId = hoveredRegionId || selectedRegionId;

//   useEffect(() => {
//     async function loadRegions() {
//       try {
//         setLoading(true);
//         console.log("Fetching regions...");
//         const regions = await buildDynamicHighlightedRegions();
//         // console.log("Fetched regions:", JSON.stringify(regions, null, 2));
//         const parsedRegions = Object.fromEntries(
//           Object.entries(regions).map(([regionKey, regionData]) => [
//             regionKey,
//             {
//               ...regionData,
//               locations: regionData.locations.map((loc) => {
//                 const x = loc.x !== undefined ? loc.x : 100;
//                 const y = loc.y !== undefined ? loc.y : 100;
//                 const color = loc.color || "#FF0000"; // Use loc.color from fetchAllRegions
//                 // console.log(
//                 //   `Parsed ${loc.label}: x=${x}, y=${y}, color=${color}`
//                 // );
//                 return { ...loc, x, y, color };
//               }),
//             },
//           ])
//         );
//         setHighlightedRegions(parsedRegions);
//       } catch (err) {
//         console.error("Error fetching regions:", err);
//         setError(
//           `Failed to load regions: ${err.message}. Please try again later.`
//         );
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadRegions();
//   }, []);

//   useEffect(() => {
//     if (displayLocation) {
//       setShowInfoSlider(false);
//       const timeout = setTimeout(() => {
//         setShowInfoSlider(true);
//       }, PLACEHOLDER_EXIT_DURATION);
//       return () => {
//         setShowInfoSlider(false);
//         clearTimeout(timeout);
//       };
//     }
//   }, [displayLocation]);

//   const handleZoomChange = (zoomLevel, number) => {
//     setIsZoomed(zoomLevel > 1);
//   };

//   // Step 2: Update handleRegionSelect to close dropdown
//   const handleRegionSelect = (id) => {
//     if (!id || typeof id !== "string" || !highlightedRegions) return;

//     setSelectedRegionId(id);
//     setActiveRegion(id);
//     setIsDropdownOpen(false); // Close dropdown on region select

//     const label =
//       highlightedRegions[id]?.label || id.charAt(0).toUpperCase() + id.slice(1);
//     setSelectedRegionObject({ id, name: label });
//     setHoveredRegionId(null);

//     const firstValidLocation = highlightedRegions[id]?.locations?.find(
//       (loc) => loc.image
//     );
//     setDefaultLocation(firstValidLocation || null);
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
//     setIsDropdownOpen(false); // Close dropdown on reset
//   };

//   if (loading) {
//     return (
//       <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
//         <div className="flex items-center justify-center h-full">
//           <p>Loading regions...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
//         <div className="flex items-center justify-center h-full">
//           <p>{error}</p>
//           <button
//             onClick={() => {
//               setError(null);
//               setLoading(true);
//               async function retry() {
//                 await loadRegions();
//               }
//               retry();
//             }}
//             className="ml-4 px-4 py-2 bg-[#F47920] text-white rounded"
//           >
//             Retry
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="h-full hidden relative lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-y-auto text-white">
//       <div className="absolute -top-1  left-[4%] 1600:left-[8%] 1920:left-[15%]">
//         <img
//           src="/rect.svg"
//           alt=""
//           className="w-[80px] 1024:w-[130px] h-auto"
//         />
//       </div>
//       <div className="flex flex-col justify-center h-full fixmap fix lg:flex-row">
//         <div className="flex flex-col justify-between w-fit lg:min-w-[430px] xl:min-w-[470px] py-[80px]">
//           <div className="z-60  overflow-visible whitespace-nowrap">
//             <motion.h2
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//               className="lg:leading-[55px] text-[56px] bg-gradient-to-r bg-amber-300 z-60 whitespace-nowrap overflow-visible from-[#AC38D9] to-[#F47922] bg-clip-text text-transparent tracking-[-0.04em] w-auto bw-m"
//             >
//               Grow Your World In Ours
//               <br />
//               <span className="bw-r text-white">Park Finder</span>
//             </motion.h2>
//           </div>

//           <div>
//             <div className="rounded-none h-[285px]  justify-between z-50 flex flex-col">
//               {/* Step 3: Pass isDropdownOpen and setIsDropdownOpen to CustomDropdown */}
//               <CustomDropdown
//                 highlightedRegions={highlightedRegions}
//                 selected={selectedRegionObject}
//                 onSelect={(region) => {
//                   handleRegionSelect(region.id);
//                   setSelectedRegionObject(region);
//                 }}
//                 isDropdownOpen={isDropdownOpen}
//                 setIsDropdownOpen={setIsDropdownOpen}
//               />
//               <div className="relative h-full w-full max-w-[900px] px-4 overflow-hidden">
//                 <AnimatePresence mode="wait">
//                   {!displayLocation && (
//                     <motion.div
//                       key="red-container"
//                       initial={{ y: "-100%" }}
//                       animate={{ y: 0 }}
//                       exit={{
//                         y: "-100%",
//                         transition: { duration: 1, ease: "easeInOut" },
//                       }}
//                       transition={{ duration: 1, ease: "easeInOut" }}
//                       className="absolute top-0 left-0 w-full bg-[#212324] h-full z-[10] overflow-hidden"
//                     >
//                       <div className="absolute inset-0 flex  flex-col items-center justify-start gap-[22px] text-sm text-gray-400">
//                         {/* <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
//                           <hr className="w-[40%] border-t border-gray-500" />
//                           <span className="bw-l text-[20px] leading-[20px]">
//                             OR
//                           </span>
//                           <hr className="w-[40%] border-t border-gray-300" />
//                         </div> */}
//                         <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
//                           <hr className="w-[40%] border-t border-gray-500" />
//                           <span className="bw-l text-[20px] leading-[20px]">
//                             OR
//                           </span>
//                           <hr className="w-[40%] border-t border-gray-300" />
//                         </div>

//                         <div className="bg-[#2E373A] px-[16px] py-[15px] rounded-[10px]">
//                           <img
//                             src="/home/map/cursor.png"
//                             width={36}
//                             height={36}
//                             alt="cursor"
//                           />
//                         </div>
//                         <span className="bw-m text-[16px] leading-[20px]">
//                           Click on location pins
//                         </span>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//                 <AnimatePresence>
//                   {displayLocation && (
//                     <motion.div
//                       key="info-parent"
//                       initial={{ y: "100%" }}
//                       animate={{ y: 0 }}
//                       exit={{
//                         y: "100%",
//                         transition: { duration: 1, ease: "easeInOut" },
//                       }}
//                       transition={{ duration: 1, ease: "easeInOut" }}
//                       className="absolute top-0 left-0  w-full h-[92%] z-[40] mt-4 overflow-hidden border-1 border-[#3C3C3C]"
//                       onAnimationComplete={() => setHasParentMounted(true)}
//                     >
//                       <AnimatePresence mode="wait">
//                         <>
//                           <style>
//                             {`
//           .group-hover-bg-orange:hover {
//             background-color: #F47922 !important;
//           }
//         `}
//                           </style>
//                           <motion.div
//                             key={`${
//                               displayLocation.id || displayLocation.label
//                             }-${displayLocation.city}`}
//                             initial={{ y: "100%" }}
//                             animate={{ y: 0 }}
//                             exit={{ y: "-100%" }}
//                             transition={{
//                               duration: 0.5,
//                               delay: hasParentMounted ? 0.1 : 0,
//                               ease: "easeInOut",
//                             }}
//                             className="group absolute top-0 left-0 w-full h-[100%] px-3  group-hover:bg-[#F47922] group-hover-bg-orange group-hover:border group-hover:border-white shadow-lg flex items-center justify-start gap-4 z-[50] transition-colors duration-300"
//                           >
//                             {displayLocation.image && (
//                               <img
//                                 src={displayLocation.image}
//                                 alt={displayLocation.label}
//                                 className="w-[140px] h-[140px] object-cover"
//                               />
//                             )}

//                             <div className="flex flex-col justify-between w-full max-w-[450px] gap-2 text-sm">
//                               <div>
//                                 <h3 className="text-lg bw-r text-[#F47920] group-hover:text-white transition-colors duration-300">
//                                   {displayLocation.label}
//                                   {displayLocation.city && (
//                                     <span className="text-[14px] text-[#F47920] group-hover:text-white transition-colors duration-300">
//                                       , {displayLocation.city}
//                                     </span>
//                                   )}
//                                 </h3>
//                                 {displayLocation.purpose && (
//                                   <p className="text-[14px] bw-r text-gray-400 group-hover:text-white transition-colors duration-300">
//                                     {displayLocation.purpose}
//                                   </p>
//                                 )}
//                               </div>

//                               {/* Container for toggling between the two boxes */}
//                               <div className="relative w-full h-[89px]">
//                                 {/* Default info box, shown by default, hidden on hover */}
//                                 <div className="absolute w-full text-white/80 bg-[#313131] px-[7px] rounded-[4px] py-[11px] group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
//                                   {displayLocation.area && (
//                                     <div className="flex justify-between mb-[4px]">
//                                       <p className="bw-r text-[14px]">
//                                         Total Area:
//                                       </p>
//                                       <p className="bw-m text-[12px]">
//                                         {displayLocation.area}
//                                       </p>
//                                     </div>
//                                   )}
//                                   {displayLocation.potential && (
//                                     <div className="flex justify-between mb-[4px]">
//                                       <p className="bw-r text-[14px]">
//                                         Potential:
//                                       </p>
//                                       <p className="bw-m text-[12px]">
//                                         {displayLocation.potential}
//                                       </p>
//                                     </div>
//                                   )}
//                                   {displayLocation.certification && (
//                                     <div className="flex justify-between gap-1">
//                                       <p className="bw-r text-[14px]">
//                                         Certification:
//                                       </p>
//                                       <p className="bw-m text-[12px]  text-end ">
//                                         {displayLocation.certification}
//                                       </p>
//                                     </div>
//                                   )}
//                                 </div>

//                                 {/* Explore Park box, hidden by default, shown on hover */}
//                                 <div className="absolute w-full text-white/80 px-[7px] h-[89px] cursor-pointer rounded-[4px] flex justify-between items-end py-[11px] bg-gradient-to-b from-[#F47922] to-[#FF974D] backdrop-blur-[2px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
//                                   <h3 className="inter-sb">Explore Park</h3>
//                                   <span>
//                                     <img src="/home/map/maparr.svg" alt="" />
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </motion.div>
//                         </>
//                       </AnimatePresence>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             <div className="flex gap-[14px] mt-[9px]">
//               <div className="relative min-w-[140px] z-50 h-[122px]">
//                 <img
//                   src="/home/map/Numbers.svg"
//                   alt="Park Numbers"
//                   className="object-cover w-full h-full"
//                 />
//                 <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
//                   <div className="text-[66px] font-bold bw-r text-white leading-none">
//                     {activeRegionId
//                       ? highlightedRegions[activeRegionId]?.locations.length
//                       : Object.values(highlightedRegions || {}).reduce(
//                           (sum, region) =>
//                             sum + (region.locations?.length || 0),
//                           0
//                         )}
//                   </div>
//                   <div className="text-[16px] bw-r text-white/80 mt-[4px]">
//                     Parks
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full h-[122px] z-50 bg-[#1A1A1A] flex items-end pb-[16px] pr-[15px] justify-end">
//                 <Link
//                   href="#"
//                   className="flex items-center gap-2 text-[16px] bw-m  text-white/80 hover:text-white"
//                 >
//                   {activeRegionId
//                     ? `${highlightedRegions[activeRegionId]?.label} Overview`
//                     : "Parks Overview"}
//                   <img
//                     src="/home/map/external.svg"
//                     alt="External link"
//                     className="w-6 h-6"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative w-full z-0  h-full">
//           <ZoomableSVGMap
//             activeRegion={activeRegion}
//             onRegionSelect={handleRegionSelect}
//             onRegionHover={setHoveredRegionId}
//             onPinHover={(loc) => {
//               setHoveredLocation(loc);
//               if (loc) setLastHoveredLocation(loc);
//             }}
//             onReset={handleReset}
//             highlightedRegions={highlightedRegions}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
//
//
//
//
//
//

"use client";
import { useEffect, useState } from "react";
import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";
import ZoomableSVGMap from "./ZoomableSVGMap";
import CustomDropdown from "./CustomDropdown";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function NewMapF() {
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
  // Step 1: Add isDropdownOpen state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const displayLocation =
    hoveredLocation || lastHoveredLocation || defaultLocation;
  const activeRegionId = hoveredRegionId || selectedRegionId;

  useEffect(() => {
    async function loadRegions() {
      try {
        setLoading(true);
        console.log("Fetching regions...");
        const regions = await buildDynamicHighlightedRegions();
        // console.log("Fetched regions:", JSON.stringify(regions, null, 2));
        const parsedRegions = Object.fromEntries(
          Object.entries(regions).map(([regionKey, regionData]) => [
            regionKey,
            {
              ...regionData,
              locations: regionData.locations.map((loc) => {
                const x = loc.x !== undefined ? loc.x : 100;
                const y = loc.y !== undefined ? loc.y : 100;
                const color = loc.color || "#FF0000"; // Use loc.color from fetchAllRegions
                // console.log(
                //   `Parsed ${loc.label}: x=${x}, y=${y}, color=${color}`
                // );
                return { ...loc, x, y, color };
              }),
            },
          ]),
        );
        setHighlightedRegions(parsedRegions);
      } catch (err) {
        console.error("Error fetching regions:", err);
        setError(
          `Failed to load regions: ${err.message}. Please try again later.`,
        );
      } finally {
        setLoading(false);
      }
    }
    loadRegions();
  }, []);

  useEffect(() => {
    if (displayLocation) {
      setShowInfoSlider(false);
      const timeout = setTimeout(() => {
        setShowInfoSlider(true);
      }, PLACEHOLDER_EXIT_DURATION);
      return () => {
        setShowInfoSlider(false);
        clearTimeout(timeout);
      };
    }
  }, [displayLocation]);

  const handleZoomChange = (zoomLevel, number) => {
    setIsZoomed(zoomLevel > 1);
  };

  // Step 2: Update handleRegionSelect to close dropdown
  const handleRegionSelect = (id) => {
    if (!id || typeof id !== "string" || !highlightedRegions) return;

    setSelectedRegionId(id);
    setActiveRegion(id);
    setIsDropdownOpen(false); // Close dropdown on region select

    const label =
      highlightedRegions[id]?.label || id.charAt(0).toUpperCase() + id.slice(1);
    setSelectedRegionObject({ id, name: label });
    setHoveredRegionId(null);

    const firstValidLocation = highlightedRegions[id]?.locations?.find(
      (loc) => loc.image,
    );
    setDefaultLocation(firstValidLocation || null);
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
    setIsDropdownOpen(false); // Close dropdown on reset
  };

  if (loading) {
    return (
      <section className="h-full hidden lg:block sm:h-[650px] xl:h-[820px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
        <div className="flex items-center justify-center h-full">
          <p>Loading regions...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
        <div className="flex items-center justify-center h-full">
          <p>{error}</p>
          <button
            onClick={() => {
              setError(null);
              setLoading(true);
              async function retry() {
                await loadRegions();
              }
              retry();
            }}
            className="ml-4 px-4 py-2 bg-[#F47920] text-white rounded"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="h-full hidden relative  lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
      <div className="absolute -top-1  left-[4%] 1600:left-[8%] 1920:left-[15%]">
        <img
          src="/rect.svg"
          alt=""
          className="w-[80px] 1024:w-[130px] h-auto"
        />
      </div>
      <div className="fixup h-full">
        <div className="flex  justify-center h-full fixmap  lg:flex-row">
          <div className="flex justify-center gap-[30px] xl:gap-[60px] flex-col">
            <div className="z-60 flex flex-col  xl:gap-2.5  overflow-visible whitespace-nowrap">
              <motion.h2
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                className="lg:leading-[55px] text-[56px] bg-gradient-to-r  z-60 whitespace-nowrap overflow-visible txt_gradient tracking-[-0.04em] w-auto bw-m"
              >
                Grow Your World In Ours
                <br />
              </motion.h2>
              <h2 className="bw-r text-[45px] leading-[55px] xl:leading-[55px] xl:text-[56px] text-white  tracking-[-0.04em]">
                Park Finder
              </h2>
            </div>
            <div className="flex flex-col justify-between w-fit lg:min-w-[430px] xl:min-w-[470px] ">
              <div>
                <div className="rounded-none h-[285px]  justify-between z-50 flex flex-col">
                  {/* Step 3: Pass isDropdownOpen and setIsDropdownOpen to CustomDropdown */}
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
                  <div className="relative h-full w-full max-w-[900px] px-4 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {!displayLocation && (
                        <motion.div
                          key="red-container"
                          initial={{ y: "-100%" }}
                          animate={{ y: 0 }}
                          exit={{
                            y: "-100%",
                            transition: { duration: 1, ease: "easeInOut" },
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                          className="absolute top-0 left-0 w-full bg-[#212324] h-full z-[10] overflow-hidden"
                        >
                          <div className="absolute inset-0 flex  flex-col items-center justify-start gap-[22px] text-sm text-gray-400">
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
                    <AnimatePresence>
                      {displayLocation && (
                        <motion.div
                          key="info-parent"
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{
                            y: "100%",
                            transition: { duration: 1, ease: "easeInOut" },
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                          className="absolute top-0 left-0  w-full h-[92%] z-[40] mt-4 overflow-hidden border-1 border-[#3C3C3C]"
                          onAnimationComplete={() => setHasParentMounted(true)}
                        >
                          <AnimatePresence mode="wait">
                            <>
                              <style>
                                {`
          .group-hover-bg-orange:hover {
            background-color: #F47922 !important;
          }
        `}
                              </style>
                              <motion.div
                                key={`${
                                  displayLocation.id || displayLocation.label
                                }-${displayLocation.city}`}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-100%" }}
                                transition={{
                                  duration: 0.5,
                                  delay: hasParentMounted ? 0.1 : 0,
                                  ease: "easeInOut",
                                }}
                                className="group absolute top-0 left-0 w-full h-[100%] px-3  group-hover:bg-[#F47922] group-hover-bg-orange group-hover:border group-hover:border-white shadow-lg flex items-center justify-start gap-4 z-[50] transition-colors duration-300"
                              >
                                {displayLocation.image && (
                                  <img
                                    src={displayLocation.image}
                                    alt={displayLocation.label}
                                    className="w-[140px] h-[140px] object-cover"
                                  />
                                )}

                                <div className="flex flex-col justify-between w-full max-w-[450px] gap-2 text-sm">
                                  <div>
                                    <h3 className="text-lg bw-r text-[#F47920] group-hover:text-white transition-colors duration-300">
                                      {displayLocation.label}
                                      {displayLocation.city && (
                                        <span className="text-[14px] text-[#F47920] group-hover:text-white transition-colors duration-300">
                                          , {displayLocation.city}
                                        </span>
                                      )}
                                    </h3>
                                    {displayLocation.purpose && (
                                      <p className="text-[14px] bw-r text-gray-400 group-hover:text-white transition-colors duration-300">
                                        {displayLocation.purpose}
                                      </p>
                                    )}
                                  </div>

                                  {/* Container for toggling between the two boxes */}
                                  <div className="relative w-full h-[89px]">
                                    {/* Default info box, shown by default, hidden on hover */}
                                    <div className="absolute w-full text-white/80 bg-[#313131] px-[7px] rounded-[4px] py-[11px] group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
                                      {displayLocation.area && (
                                        <div className="flex justify-between mb-[4px]">
                                          <span className="bw-r text-[14px]">
                                            Total Area:
                                          </span>
                                          <span
                                            className="bw-m text-[12px] text-end"
                                            dangerouslySetInnerHTML={{
                                              __html: displayLocation.area,
                                            }}
                                          />
                                        </div>
                                      )}

                                      {displayLocation.potential && (
                                        <div className="flex justify-between mb-[4px]">
                                          <span className="bw-r text-[14px]">
                                            Potential:
                                          </span>
                                          <span
                                            className="bw-m text-[12px] text-end"
                                            dangerouslySetInnerHTML={{
                                              __html: displayLocation.potential,
                                            }}
                                          />
                                        </div>
                                      )}

                                      {displayLocation.certification && (
                                        <div className="flex justify-between gap-1">
                                          <span className="bw-r text-[14px]">
                                            Certification:
                                          </span>
                                          <span
                                            className="bw-m text-[12px] text-end"
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                displayLocation.certification,
                                            }}
                                          />
                                        </div>
                                      )}
                                    </div>

                                    {/* Explore Park box, hidden by default, shown on hover */}
                                    <div className="absolute w-full text-white/80 pl-[18px] pr-[10] h-[89px] cursor-pointer rounded-[4px] flex justify-between items-end py-[11px] bg-gradient-to-b from-[#F47922] to-[#FF974D] backdrop-blur-[2px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                                      <h3 className="bw-sb text-[18px]">
                                        Explore Park
                                      </h3>
                                      <span>
                                        <img
                                          src="/home/map/maparr.svg"
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            </>
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex gap-[14px] mt-[9px]">
                  <div className="relative min-w-[140px] z-50 h-[122px]">
                    <img
                      src="/home/map/pattern.webp"
                      alt="Park Numbers"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
                      <div className="text-[66px] font-bold bw-r text-white leading-none">
                        {activeRegionId
                          ? highlightedRegions[activeRegionId]?.locations.length
                          : Object.values(highlightedRegions || {}).reduce(
                              (sum, region) =>
                                sum + (region.locations?.length || 0),
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
                      href="#"
                      className="flex items-center gap-2 text-[16px] bw-m  text-white/80 hover:text-white"
                    >
                      {activeRegionId
                        ? `${highlightedRegions[activeRegionId]?.label} Overview`
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

          <div className="relative w-full z-0  h-full">
            <ZoomableSVGMap
              activeRegion={activeRegion}
              onRegionSelect={handleRegionSelect}
              onRegionHover={setHoveredRegionId}
              onPinHover={(loc) => {
                setHoveredLocation(loc);
                if (loc) setLastHoveredLocation(loc);
              }}
              onReset={handleReset}
              highlightedRegions={highlightedRegions}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
