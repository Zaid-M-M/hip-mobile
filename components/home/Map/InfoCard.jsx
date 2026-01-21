// "use client";
// import TransitionLink from "@/src/app/TransitionLink";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import InCityZoomable from "./InCityZoomable";

// // Import the actual components

// export default function InfoCard({
//   displayLocation,
//   hasParentMounted,
//   activeRegionId,
//   highlightedRegions,
//   Map,
// }) {
//   const [isMounted, setIsMounted] = useState(false);

//   // Robust: Check actual component identity, not displayName
//   const isInCityMap = Map === InCityZoomable;
//   const href = isInCityMap
//     ? `/incity-centers/${displayLocation?.slug}`
//     : `/${displayLocation?.slug}`;

//   return (
//     <AnimatePresence>
//       {displayLocation && (
//         <motion.div
//           key="info-parent"
//           initial={{ y: "100%" }}
//           animate={{ y: 0 }}
//           exit={{
//             y: "100%",
//             transition: { duration: 0.5, ease: "easeInOut" },
//           }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="absolute top-0 left-0 w-full h-[92%] z-[40] mt-4 overflow-hidden border border-[#3C3C3C]"
//           onAnimationComplete={() => setIsMounted(true)}
//         >
//           <TransitionLink href={href} className="">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`${displayLocation.id || displayLocation.label}-${
//                   displayLocation.city
//                 }`}
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 exit={{ y: "-100%" }}
//                 transition={{
//                   duration: 0.5,
//                   delay: isMounted ? 0.1 : 0,
//                   ease: "easeInOut",
//                 }}
//                 className="group absolute top-0 left-0 w-full h-full px-3 shadow-lg flex items-center justify-start gap-4 z-[50] transition-colors duration-300 hover:bg-[#F47922] group-hover:border group-hover:border-white"
//               >
//                 {/* Left image */}
//                 {displayLocation.image && (
//                   <img
//                     src={displayLocation.image}
//                     alt={displayLocation.label}
//                     className="w-[140px] h-[140px] object-cover"
//                   />
//                 )}

//                 {/* Right details */}
//                 <div className="flex flex-col justify-between w-full max-w-[450px] gap-2 text-sm">
//                   {isInCityMap ? (
//                     <div>
//                       <div className="flex gap-[5px] justify-between">
//                         <h3 className="text-lg bw-r text-[#F47920] group-hover:text-white transition-colors duration-300 text-left">
//                           {displayLocation.title}
//                           {displayLocation.city && (
//                             <span className="text-[14px] text-[#F47920] group-hover:text-white transition-colors duration-300">
//                               , {displayLocation.city}
//                             </span>
//                           )}
//                         </h3>
//                         <img
//                           src="/home/map/maparr.svg"
//                           alt="arrow"
//                           className="w-[18px] group-hover:opacity-0 transition-opacity duration-300"
//                         />
//                       </div>
//                       {/* {displayLocation.purpose && (
//                         <p className="text-[14px] bw-r text-gray-400 group-hover:text-white transition-colors duration-300 text-left">
//                           {displayLocation.purpose}
//                         </p>
//                       )} */}
//                     </div>
//                   ) : (
//                     <div>
//                       <div className="flex gap-[5px] justify-between">
//                         <h3 className="text-lg bw-r text-[#F47920] group-hover:text-white transition-colors duration-300 text-left">
//                           {displayLocation.label}
//                           {displayLocation.city && (
//                             <span className="text-[14px] text-[#F47920] group-hover:text-white transition-colors duration-300">
//                               , {displayLocation.city}
//                             </span>
//                           )}
//                         </h3>
//                         <img
//                           src="/home/map/maparr.svg"
//                           alt="arrow"
//                           className="w-[18px] group-hover:opacity-0  transition-opacity duration-300"
//                         />
//                       </div>
//                       {/* {displayLocation.purpose && (
//                       <p className="text-[14px] bw-r text-gray-400 group-hover:text-white transition-colors duration-300 text-left">
//                         {displayLocation.purpose}
//                       </p>
//                     )} */}
//                     </div>
//                   )}

//                   {/* Info box vs Explore Park box */}
//                   <div className="relative w-full h-[89px]">
//                     {/* Default info box */}
//                     <div className="absolute w-full text-white/80 bg-[#313131] px-[7px] rounded-[4px] py-[11px] group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
//                       {displayLocation.area && (
//                         <div className="flex justify-between mb-[4px]">
//                           <span className="bw-r text-[14px]">Total Area:</span>
//                           <span
//                             className="bw-m text-[12px] text-end"
//                             dangerouslySetInnerHTML={{
//                               __html: displayLocation.area,
//                             }}
//                           />
//                         </div>
//                       )}
//                       {displayLocation.potential && (
//                         <div className="flex justify-between mb-[4px]">
//                           <span className="bw-r text-[14px]">Potential:</span>
//                           <span
//                             className="bw-m text-[12px] text-end"
//                             dangerouslySetInnerHTML={{
//                               __html: displayLocation.potential,
//                             }}
//                           />
//                         </div>
//                       )}
//                       {displayLocation.certification && (
//                         <div className="flex justify-between gap-1">
//                           <span className="bw-r text-[14px]">
//                             Certification:
//                           </span>
//                           <span
//                             className="bw-m text-[12px] text-end"
//                             dangerouslySetInnerHTML={{
//                               __html: displayLocation.certification,
//                             }}
//                           />
//                         </div>
//                       )}
//                     </div>

//                     {/* Explore Park box */}

//                     <div className="absolute w-full text-white/80 pl-[13px] pr-[10px] h-[80px] cursor-pointer rounded-[4px] flex justify-between items-end py-[11px] bg-gradient-to-b from-[#F47922] to-[#FF974D] backdrop-blur-[2px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
//                       <TransitionLink href={href} className="bw-sb text-[18px]">
//                         Explore Park
//                       </TransitionLink>
//                       <span>
//                         <img
//                           src="/home/map/maparr.svg"
//                           alt="arrow"
//                           className="w-[30px]"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </TransitionLink>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
"use client";
import TransitionLink from "@/src/app/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InCityZoomable from "./InCityZoomable";

export default function InfoCard({
  displayLocation,
  hasParentMounted,
  activeRegionId,
  highlightedRegions,
  Map,
}) {
  const [isMounted, setIsMounted] = useState(false);

  const isInCityMap = Map === InCityZoomable;
  const href = isInCityMap
    ? `/incity-centers/${displayLocation?.slug}`
    : `/${displayLocation?.slug}`;

  // ❗ Disable hover + click for oragadam
  const isBlockedSlug = displayLocation?.slug === "warehousing-park-narasapura";

  return (
    <AnimatePresence>
      {displayLocation && (
        <motion.div
          key="info-parent"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{
            y: "100%",
            transition: { duration: 0.2, ease: [0.7, 0, 0.4, 1] },
          }}
          transition={{ duration: 0.2, ease: [0.7, 0, 0.4, 1] }}
          className="absolute top-0 left-0 w-full h-[92%] z-[40] mt-4 overflow-hidden border border-[#3C3C3C]"
          onAnimationComplete={() => setIsMounted(true)}
        >
          {/* ❗Disable click navigation when slug = oragadam */}
          {isBlockedSlug ? (
            <div className="">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${displayLocation.id || displayLocation.label}-${
                    displayLocation.city
                  }`}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{
                    duration: 0.5,
                    delay: isMounted ? 0.1 : 0,
                    ease: "easeInOut",
                  }}
                  className={`group absolute top-0 left-0 w-full h-full px-3 shadow-lg flex items-center justify-start gap-4 z-[50] transition-colors duration-300 
                    ${
                      isBlockedSlug
                        ? ""
                        : "hover:bg-[#F47922] group-hover:border group-hover:border-white"
                    }`}
                >
                  {/* Left image */}
                  {displayLocation.image && (
                    <img
                      src={displayLocation.image}
                      alt={displayLocation.label}
                      className="w-[140px] h-[140px] object-cover"
                    />
                  )}

                  {/* Right details */}
                  <div className="flex flex-col justify-between w-full max-w-[450px] gap-2 text-sm">
                    {isInCityMap ? (
                      <div>
                        <div className="flex gap-[5px] justify-between">
                          <h3
                            className={`text-lg bw-r text-[#F47920] ${
                              isBlockedSlug ? "" : "group-hover:text-white"
                            } transition-colors duration-300 text-left`}
                          >
                            {displayLocation.title}
                            {displayLocation.city && (
                              <span
                                className={`text-[14px] text-[#F47920] ${
                                  isBlockedSlug ? "" : "group-hover:text-white"
                                } transition-colors duration-300`}
                              >
                                , {displayLocation.city}
                              </span>
                            )}
                          </h3>
                          <img
                            src="/home/map/maparr.svg"
                            alt="arrow"
                            className={`w-[18px] ${
                              isBlockedSlug ? "" : "group-hover:opacity-0"
                            } transition-opacity duration-300`}
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex gap-[5px] justify-between">
                          <h3
                            className={`text-lg bw-r text-[#F47920] ${
                              isBlockedSlug ? "" : "group-hover:text-white"
                            } transition-colors duration-300 text-left`}
                          >
                            {displayLocation.label}
                            {displayLocation.city && (
                              <span
                                className={`text-[14px] text-[#F47920] ${
                                  isBlockedSlug ? "" : "group-hover:text-white"
                                } transition-colors duration-300`}
                              >
                                , {displayLocation.city}
                              </span>
                            )}
                          </h3>
                          <img
                            src="/home/map/maparr.svg"
                            alt="arrow"
                            className={`w-[18px] ${
                              isBlockedSlug ? "" : "group-hover:opacity-0"
                            } transition-opacity duration-300`}
                          />
                        </div>
                      </div>
                    )}

                    {/* Info Box vs Explore Box */}
                    <div className="relative w-full h-[89px]">
                      {/* Info box */}
                      <div
                        className={`absolute w-full text-white/80 bg-[#313131] px-[7px] rounded-[4px] py-[11px] 
                          ${
                            isBlockedSlug
                              ? ""
                              : "group-hover:opacity-0 group-hover:pointer-events-none"
                          } 
                          transition-opacity duration-300`}
                      >
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
                            <span className="bw-r text-[14px]">Potential:</span>
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
                                __html: displayLocation.certification,
                              }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Explore box - hidden if oragadam */}
                      {!isBlockedSlug && (
                        <div className="absolute w-full text-white/80 pl-[13px] pr-[10px] h-[80px] cursor-pointer rounded-[4px] flex justify-between items-end py-[11px] bg-gradient-to-b from-[#F47922] to-[#FF974D] backdrop-blur-[2px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                          <TransitionLink
                            href={href}
                            className="bw-sb text-[18px]"
                          >
                            Explore Park
                          </TransitionLink>
                          <span>
                            <img
                              src="/home/map/maparr.svg"
                              alt="arrow"
                              className="w-[30px]"
                            />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Normal Working Clickable Version */
            <TransitionLink href={href} className="">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${displayLocation.id || displayLocation.label}-${
                    displayLocation.city
                  }`}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{
                    duration: 0.5,
                    delay: isMounted ? 0.1 : 0,
                    ease: "easeInOut",
                  }}
                  className="group absolute top-0 left-0 w-full h-full px-3 shadow-lg flex items-center justify-start gap-4 z-[50] transition-colors duration-300 hover:bg-[#F47922] group-hover:border group-hover:border-white"
                >
                  {/* LEFT IMAGE */}
                  {displayLocation.image && (
                    <img
                      src={displayLocation.image}
                      alt={displayLocation.label}
                      className="w-[140px] h-[140px] object-cover"
                    />
                  )}

                  {/* RIGHT DETAILS */}
                  <div className="flex flex-col justify-between w-full max-w-[450px] gap-2 text-sm">
                    {isInCityMap ? (
                      <div>
                        <div className="flex gap-[5px] justify-between">
                          <h3 className="text-lg bw-r text-[#F47920] group-hover:text-white transition-colors duration-300 text-left">
                            {displayLocation.title}
                            {displayLocation.city && (
                              <span className="text-[14px] text-[#F47920] group-hover:text-white transition-colors duration-300">
                                , {displayLocation.city}
                              </span>
                            )}
                          </h3>
                          <img
                            src="/home/map/maparr.svg"
                            alt="arrow"
                            className="w-[18px] group-hover:opacity-0 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex gap-[5px] justify-between">
                          <h3 className="text-lg bw-r text-[#F47920] group-hover:text-white transition-colors duration-300 text-left">
                            {displayLocation.label}
                            {displayLocation.city && (
                              <span className="text-[14px] text-[#F47920] group-hover:text-white transition-colors duration-300">
                                , {displayLocation.city}
                              </span>
                            )}
                          </h3>
                          <img
                            src="/home/map/maparr.svg"
                            alt="arrow"
                            className="w-[18px] group-hover:opacity-0 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    )}

                    {/* Info box vs Explore box */}
                    <div className="relative w-full h-[89px]">
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
                            <span className="bw-r text-[14px]">Potential:</span>
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
                                __html: displayLocation.certification,
                              }}
                            />
                          </div>
                        )}
                      </div>

                      <div className="absolute w-full text-white/80 pl-[13px] pr-[10px] h-[80px] cursor-pointer rounded-[4px] flex justify-between items-end py-[11px] bg-gradient-to-b from-[#F47922] to-[#FF974D] backdrop-blur-[2px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                        <TransitionLink
                          href={href}
                          className="bw-sb text-[18px]"
                        >
                          Explore Park
                        </TransitionLink>
                        <span>
                          <img
                            src="/home/map/maparr.svg"
                            alt="arrow"
                            className="w-[30px]"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TransitionLink>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
