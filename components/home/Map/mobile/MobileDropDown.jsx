// "use client";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";

// export default function MobileDropDown({
//   selected,
//   onSelect,
//   highlightedRegions,
//   isDropdownOpen,
//   setIsDropdownOpen,
// }) {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredRegions = Object.entries(highlightedRegions || {}).filter(
//     ([, region]) =>
//       region.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSelect = (key) => {
//     const region = highlightedRegions[key];
//     onSelect({
//       id: key,
//       name: region.label, // This is correct for onSelect
//     });
//     setIsDropdownOpen(false);
//     setSearchTerm("");
//   };

//   return (
//     <div className="w-full bg-[#262626] px-[16px] py-[14px] mb-3 text-left z-[60] text-white">
//       <div className="relative w-full">
//         {/* Dropdown Trigger Button */}
//         <button
//           onClick={() => setIsDropdownOpen((o) => !o)}
//           className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
//         >
//           <div className="flex items-center">
//             <Image
//               src="/home/map/mapSearch.svg"
//               alt="Search Icon"
//               width={18}
//               height={18}
//               className="mr-2"
//             />
//             <span className="bw-m">
//               {selected?.label || "Select/Search State"}
//             </span>{" "}
//             {/* Changed from selected?.name to selected?.label */}
//           </div>
//           <Image
//             src="/home/map/arrdown.svg"
//             alt="Dropdown Icon"
//             width={20}
//             height={20}
//           />
//         </button>

//         {/* Dropdown List */}
//         <AnimatePresence>
//           {isDropdownOpen && (
//             <motion.div
//               data-lenis-prevent
//               className="absolute w-full mt-1 bg-[#262626] border-gray-600 z-[60]"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="sticky top-0 bg-[#262626] z-10 px-4 py-2 border-b border-gray-700">
//                 <input
//                   type="text"
//                   placeholder="Search state..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none"
//                 />
//               </div>

//               <div className="max-h-[260px] overflow-y-auto">
//                 <ul>
//                   {filteredRegions.length > 0 ? (
//                     filteredRegions.map(([key, region]) => (
//                       <li
//                         key={key}
//                         className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                         onClick={() => handleSelect(key)}
//                       >
//                         {region.label}
//                       </li>
//                     ))
//                   ) : (
//                     <li className="px-4 py-2 text-sm text-white/50">
//                       No results found.
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function MobileDropDown({
  selected,
  onSelect,
  highlightedRegions,
  isDropdownOpen,
  setIsDropdownOpen,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRegions = Object.entries(highlightedRegions || {}).filter(
    ([, region]) =>
      region.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (key) => {
    const region = highlightedRegions[key];
    onSelect({
      id: key,
      name: region.label,
    });
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="w-full bg-[#262626] px-[16px] py-[14px] mb-3 text-left z-[60] text-white">
      <div className="relative w-full">
        <button
          onClick={() => setIsDropdownOpen((o) => !o)}
          className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
        >
          <div className="flex items-center">
            <Image
              src="/home/map/mapSearch.svg"
              alt="Search Icon"
              width={18}
              height={18}
              className="mr-2"
            />
            <span className="bw-m">
              {selected?.label || "Select/Search State"}
            </span>
          </div>
          <Image
            src="/home/map/arrdown.svg"
            alt="Dropdown Icon"
            width={20}
            height={20}
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              data-lenis-prevent
              className="absolute w-full mt-1 bg-[#262626] border-gray-600 z-[60]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="sticky top-0 bg-[#262626] z-10 px-4 py-2 border-b border-gray-700">
                <input
                  type="text"
                  placeholder="Search state..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none"
                />
              </div>
              <div className="max-h-[260px] overflow-y-auto">
                <ul>
                  {filteredRegions.length > 0 ? (
                    filteredRegions.map(([key, region]) => (
                      <li
                        key={key}
                        className="px-4 py-2 cursor-pointer hover:bg-white/5"
                        onClick={() => handleSelect(key)}
                      >
                        {region.label}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-sm text-white/50">
                      No results found.
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
