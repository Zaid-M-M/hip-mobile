// "use client";
// import { useState, useEffect, useRef } from "react";
// import { highlightedRegions } from "../data/mapLocations";
// import MobileMap from "./MobileMap";
// import CustomDropdown from "../CustomDropdown";
// import MobileDropDown from "./MobileDropDown";
// import { RegionSlider } from "./RegionSlider";
// import { motion } from "framer-motion";
// import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";

// export default function MobileMapWrapper() {
//   const [hasInteracted, setHasInteracted] = useState(false);
//   const [selectedRegionId, setSelectedRegionId] = useState("maharashtra");
//   const [selectedRegionObject, setSelectedRegionObject] = useState(null);
//   const [highlightedRegions, setHighlightedRegions] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const parksRef = useRef(null);

//   useEffect(() => {
//     async function loadRegions() {
//       try {
//         setLoading(true);
//         // console.log("Fetching regions for mobile...");
//         const regions = await buildDynamicHighlightedRegions();
//         // console.log(
//         //   "Fetched regions for mobile:",
//         //   JSON.stringify(regions, null, 2)
//         // );
//         setHighlightedRegions(regions);

//         const defaultRegion = regions["maharashtra"];
//         if (defaultRegion) {
//           setSelectedRegionObject(defaultRegion);
//         }
//       } catch (err) {
//         console.error("Error fetching regions for mobile:", err);
//         setError(
//           `Failed to load regions: ${err.message}. Please try again later.`
//         );
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadRegions();
//   }, []);

//   const handleRegionClick = (regionId) => {
//     if (!highlightedRegions) return;
//     const region = highlightedRegions[regionId];
//     setSelectedRegionId(regionId);
//     setSelectedRegionObject(region);
//     setHasInteracted(true);
//     setIsDropdownOpen(false);
//   };

//   const handleRegionSelect = (regionId) => {
//     if (!highlightedRegions) return;
//     const region = highlightedRegions[regionId];
//     setSelectedRegionId(regionId);
//     setSelectedRegionObject(region);
//     setHasInteracted(true);
//     setIsDropdownOpen(false);
//   };

//   useEffect(() => {
//     if (hasInteracted && selectedRegionObject && parksRef.current) {
//       setTimeout(() => {
//         parksRef.current.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     }
//   }, [selectedRegionObject, hasInteracted]);

//   if (loading) {
//     return (
//       <section className="flex flex-col py-[48px] lg:py-0 w-full min-h-[100svh] text-white bg-black lg:hidden">
//         <div className="flex items-center justify-center h-full">
//           <p>Loading mobile map...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="flex flex-col py-[48px] lg:py-0 w-full min-h-[100svh] text-white bg-black lg:hidden">
//         <div className="flex items-center justify-center h-full">
//           <p className="text-red-500">{error}</p>
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
//     <section className="flex flex-col py-[50px] lg:py-0 w-full min-h-[100svh] text-white bg-black lg:hidden">
//       <motion.div
//         initial={{ width: 0 }}
//         whileInView={{ width: "100%" }}
//         transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="overflow-hidden flex flex-col fixup "
//       >
//         <motion.h2 className="text-[36px] sm:text-[45px] sm:leading-[55px]  bg-gradient-to-r bw-m pt-0 txt_gradient whitespace-nowrap tracking-[-0.04em] leading-[100%]">
//           Grow Your World In Ours <br />
//         </motion.h2>
//         <h2 className="bw-r text-white text-[36px] leading-[46px] sm:text-[45px] sm:leading-[55px]  tracking-[-0.04em]">
//           Park Finder
//         </h2>
//       </motion.div>

//       {/* Map Section */}
//       <div className="relative w-full mb-20 md:mb-28 h-[50%]">
//         <MobileMap
//           selectedRegionId={selectedRegionId}
//           onRegionClick={handleRegionClick}
//           highlightedRegions={highlightedRegions}
//         />
//       </div>

//       {/* Scrollable Section for Dropdown + Parks */}
//       <div className="flex-1 overflow-y-auto bg-black">
//         <div className="relative z-10 px-[22px]">
//           <MobileDropDown
//             selected={selectedRegionObject}
//             onSelect={(region) => handleRegionSelect(region.id)}
//             highlightedRegions={highlightedRegions}
//             isDropdownOpen={isDropdownOpen}
//             setIsDropdownOpen={setIsDropdownOpen}
//           />
//         </div>

//         {selectedRegionObject?.locations && (
//           <div className="px-[22px]" ref={parksRef}>
//             <RegionSlider
//               parks={selectedRegionObject.locations}
//               regionName={selectedRegionObject.label}
//             />
//           </div>
//         )}
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
//
//
//
//
//

"use client";
import { useState, useEffect, useRef } from "react";
import MobileMap from "./MobileMap";
import MobileDropDown from "./MobileDropDown";
import { RegionSlider } from "./RegionSlider";
import { motion } from "framer-motion";
import { buildDynamicHighlightedRegions } from "@/src/utils/highlightedRegionsLoader";

export default function MobileMapWrapperOld({
  type = "industrial", // <-- make it dynamic
  title = "Park Finder",
  subtitle = "Grow Your World In Ours",
}) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [selectedRegionId, setSelectedRegionId] = useState("maharashtra");
  const [selectedRegionObject, setSelectedRegionObject] = useState(null);
  const [highlightedRegions, setHighlightedRegions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const parksRef = useRef(null);

  useEffect(() => {
    async function loadRegions() {
      try {
        setLoading(true);
        const regions = await buildDynamicHighlightedRegions(type); // ✅ dynamic
        setHighlightedRegions(regions);

        const defaultRegion =
          regions["maharashtra"] || Object.values(regions)[0];
        if (defaultRegion) {
          setSelectedRegionObject(defaultRegion);
          setSelectedRegionId(
            Object.keys(regions).find((k) => regions[k] === defaultRegion)
          );
        }
      } catch (err) {
        console.error("Error fetching regions for mobile:", err);
        setError(
          `Failed to load regions: ${err.message}. Please try again later.`
        );
      } finally {
        setLoading(false);
      }
    }
    loadRegions();
  }, [type]);

  const handleRegionSelect = (regionId) => {
    if (!highlightedRegions) return;
    const region = highlightedRegions[regionId];
    setSelectedRegionId(regionId);
    setSelectedRegionObject(region);
    setHasInteracted(true);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (hasInteracted && selectedRegionObject && parksRef.current) {
      setTimeout(() => {
        parksRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [selectedRegionObject, hasInteracted]);

  if (loading) {
    return (
      <section className="flex flex-col py-[48px] w-full min-h-[100svh] text-white bg-black lg:hidden">
        <div className="flex items-center justify-center h-full">
          <p>Loading mobile map...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex flex-col py-[48px] w-full min-h-[100svh] text-white bg-black lg:hidden">
        <div className="flex items-center justify-center h-full">
          <p className="text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="ml-4 px-4 py-2 bg-[#F47920] text-white rounded"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col py-[50px] w-full min-h-[100svh] text-white bg-black lg:hidden">
      {/* Title */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden flex flex-col"
      >
        <motion.h2 className="text-[36px] sm:text-[45px] sm:leading-[55px] bg-gradient-to-r txt_gradient whitespace-nowrap tracking-[-0.04em] leading-[100%]">
          {subtitle}
        </motion.h2>
        <h2 className="bw-r text-white text-[36px] sm:text-[45px] sm:leading-[55px] tracking-[-0.04em]">
          {title}
        </h2>
      </motion.div>

      {/* Map */}
      <div className="relative w-full mb-20 md:mb-28 h-[50%]">
        <MobileMap
          selectedRegionId={selectedRegionId}
          onRegionClick={handleRegionSelect}
          highlightedRegions={highlightedRegions}
        />
      </div>

      {/* Dropdown + Parks */}
      <div className="flex-1 overflow-y-auto bg-black">
        <div className="relative z-10 px-[22px]">
          <MobileDropDown
            selected={selectedRegionObject}
            onSelect={(region) => handleRegionSelect(region.id)}
            highlightedRegions={highlightedRegions}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </div>

        {selectedRegionObject?.locations && (
          <div className="px-[22px]" ref={parksRef}>
            <RegionSlider
              parks={selectedRegionObject.locations}
              regionName={selectedRegionObject.label}
            />
          </div>
        )}
      </div>
    </section>
  );
}

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

// import React, { useState, useEffect } from "react";
// import MobileMap from "./MobileMap";
// import RegionSlider from "./RegionSlider";
// import CustomDropdown from "../CustomDropdown";
// import Image from "next/image";
// import Link from "next/link";
// import { highlightedRegions } from "../data/mapLocations";
// import { SwiperSlide } from "swiper/react";
// import Swiper from "swiper";
// import RegionCard from "./RegionCard";

// // import { useState, useEffect } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// // import RegionCard from "./RegionCard";
// // import CustomDropdown from "./CustomDropdown";

// export default function MobileMapWrap() {
//   // const [selectedRegionId, setSelectedRegionId] = useState(null);

//   // useEffect(() => {
//   //   const paths = document.querySelectorAll("#mobile-india-map path");

//   //   paths.forEach((path) => {
//   //     const id = path.getAttribute("id");
//   //     const region = highlightedRegions[id];
//   //     if (!region) return;

//   //     path.style.fill = region.fill;
//   //     path.style.stroke = id === selectedRegionId ? "#ffffff" : region.stroke;
//   //     path.style.strokeWidth =
//   //       id === selectedRegionId ? "2" : region.strokeWidth;
//   //     path.style.cursor = "pointer";

//   //     path.onclick = () => setSelectedRegionId(id);
//   //   });
//   // }, [selectedRegionId]);

//   // const activeRegion = highlightedRegions[selectedRegionId];
//   // const parks = activeRegion?.locations || [];

//   const [activeRegionId, setActiveRegionId] = useState(null);
//   const [selectedRegionObject, setSelectedRegionObject] = useState(null);
//   const [displayLocation, setDisplayLocation] = useState(null);

//   const handleRegionClick = (regionId) => {
//     setActiveRegionId(regionId);
//     setSelectedRegionObject(highlightedRegions[regionId]);
//     setDisplayLocation(null);
//   };

//   const handleRegionSelect = (regionId) => {
//     setActiveRegionId(regionId);
//     setSelectedRegionObject(highlightedRegions[regionId]);
//     setDisplayLocation(null);
//   };

//   return (
//     <div className="w-full px-4 pt-4">
//       {/* MAP FIRST */}
//       <div className="w-full py-4">
//         <MobileMap
//           selectedRegionId={activeRegionId}
//           onRegionClick={handleRegionClick}
//         />
//       </div>

//       {/* SEARCH + SLIDER SECTION */}
//       <div className="z-50 flex flex-col rounded-none">
//         {/* DROPDOWN */}
//         <CustomDropdown
//           selected={selectedRegionObject}
//           onSelect={(region) => {
//             handleRegionSelect(region.id);
//             setSelectedRegionObject(region);
//           }}
//         />

//         {/* DISPLAY SELECTED LOCATION DETAILS */}
//         <div className="relative h-[185px] w-full max-w-[900px] px-4 overflow-hidden mt-3">
//           {!displayLocation && (
//             <div className="absolute top-0 left-0 w-full h-full bg-[#1A1A1A] z-[10] overflow-hidden flex flex-col items-center justify-center gap-[12px] text-sm text-gray-400">
//               <div className="bg-[#2E373A] px-[16px] py-[15px] rounded-[10px]">
//                 <Image
//                   src="/home/map/cursor.png"
//                   width={36}
//                   height={36}
//                   alt="cursor"
//                 />
//               </div>
//               <span className="inter-m text-[18px] leading-[20px]">
//                 Click on location pins
//               </span>
//             </div>
//           )}

//           {displayLocation && (
//             <div className="absolute top-0 left-0 w-full h-full px-3 bg-[#1D1D1D] shadow-lg flex items-center justify-center gap-4 z-[50]">
//               {displayLocation.image && (
//                 <img
//                   src={displayLocation.image}
//                   alt={displayLocation.label}
//                   className="w-[147px] h-[137px] object-cover"
//                 />
//               )}
//               <div className="flex flex-col justify-between w-full max-w-[450px] gap-2 text-sm">
//                 <div>
//                   <h3 className="text-lg bw-r text-[#F47920]">
//                     {displayLocation.label}
//                     {displayLocation.city && (
//                       <span className="text-[14px] text-[#F47920]">
//                         , {displayLocation.city}
//                       </span>
//                     )}
//                   </h3>
//                   {displayLocation.purpose && (
//                     <p className="text-[14px] bw-r text-gray-400">
//                       {displayLocation.purpose}
//                     </p>
//                   )}
//                 </div>
//                 <div className="w-full text-white/80 bg-[#313131] px-1.5 rounded-[4px] py-1">
//                   {displayLocation.area && (
//                     <p>Total Area: {displayLocation.area}</p>
//                   )}
//                   {displayLocation.potential && (
//                     <p>Potential: {displayLocation.potential}</p>
//                   )}
//                   {displayLocation.certification && (
//                     <p>Certification: {displayLocation.certification}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* STATS + OVERVIEW LINK */}
//         <div className="flex gap-[14px] mt-[9px]">
//           <div className="relative min-w-[140px] z-50 h-[122px]">
//             <Image
//               fill
//               src="/home/map/Numbers.svg"
//               alt="Park Numbers"
//               className="object-cover"
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
//               <div className="text-[66px] font-bold bw-r text-white leading-none">
//                 {activeRegionId
//                   ? highlightedRegions[activeRegionId]?.locations.length
//                   : ""}
//               </div>
//               <div className="text-[14px] inter-m text-white/80 mt-[4px]">
//                 Parks
//               </div>
//             </div>
//           </div>

//           <div className="w-full h-[122px] z-50 bg-[#1A1A1A] flex items-end pb-[16px] pr-[15px] justify-end">
//             <Link
//               href="#"
//               className="flex items-center gap-2 text-sm inter-sb text-white/80 hover:text-white"
//             >
//               {activeRegionId
//                 ? `${highlightedRegions[activeRegionId]?.label} Overview`
//                 : "Parks Overview"}
//               <img
//                 src="/home/map/external.png"
//                 alt="External link"
//                 className="w-6 h-6"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* REGION SLIDER BELOW */}
//         <RegionSlider
//           regionId={activeRegionId}
//           locations={
//             activeRegionId ? highlightedRegions[activeRegionId]?.locations : []
//           }
//           onCardHover={(location) => setDisplayLocation(location)}
//           onCardLeave={() => setDisplayLocation(null)}
//         />
//       </div>
//     </div>
//   );
// }
