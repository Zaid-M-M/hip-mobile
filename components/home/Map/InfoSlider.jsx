// "use client";
// import { motion, AnimatePresence } from "framer-motion";

// export default function InfoSlider({ location }) {
//   return (
//     <div className="relative h-[220px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         {location ? (
//           <motion.div
//             key={location.label}
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -100, opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="absolute inset-0 p-4 bg-[#111111] rounded-xl shadow-lg flex gap-4"
//           >
//             <img
//               src={location.image}
//               alt={location.label}
//               className="w-[100px] h-[100px] object-cover rounded-lg"
//             />
//             <div className="flex flex-col justify-between text-sm">
//               <div>
//                 <h3 className="text-lg font-semibold">
//                   {location.label}, {location.city}
//                 </h3>
//                 <p className="text-xs text-gray-400">{location.purpose}</p>
//               </div>
//               <div className="text-white/80">
//                 <p>Total Area: {location.area}</p>
//                 <p>Potential: {location.potential}</p>
//                 <p>Certification: {location.certification}</p>
//               </div>
//               <a href="#" className="text-xs text-white underline">
//                 Explore Park →
//               </a>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="empty"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.4 }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 p-4 bg-[#111111] rounded-xl text-gray-400 text-sm flex items-center justify-center"
//           >
//             Hover or click a location pin to see details
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";
// import { motion, AnimatePresence } from "framer-motion";

// export default function InfoSlider({ location }) {
//   return (
//     // <div className="relative flex items-center justify-center h-full overflow-hidden">
//     //   <AnimatePresence mode="wait">
//     //     <motion.div
//     //       key={location ? location.label + location.city : "empty"} // 🔁 fixed key to keep the card always mounted
//     //       initial={{ y: 100 }}
//     //       animate={{ y: 0 }}
//     //       exit={{ y: -100 }}
//     //       transition={{ duration: 0.5 }}
//     //       className="absolute inset-0 px-4 bg-[#000] shadow-lg flex items-center justify-center w-full gap-4"
//     //     >
//     //       {/* {location && location.image ? (
//     //         <>
//     //           <img
//     //             src={location.image}
//     //             alt={location.label}
//     //             className="w-[100px] h-[100px] object-cover rounded-lg"
//     //           />
//     //           <div className="flex flex-col justify-between text-sm">
//     //             <div>
//     //               <h3 className="text-lg font-semibold">
//     //                 {location.label}
//     //                 {location.city && `, ${location.city}`}
//     //               </h3>
//     //               <p className="text-xs text-gray-400">{location.purpose}</p>
//     //             </div>
//     //             <div className="text-white/80">
//     //               <p>Total Area: {location.area}</p>
//     //               <p>Potential: {location.potential}</p>
//     //               <p>Certification: {location.certification}</p>
//     //             </div>
//     //             <a href="#" className="text-xs text-white underline">
//     //               Explore Park →
//     //             </a>
//     //           </div>
//     //         </>
//     //       ) : (
//     //         <div className="flex items-center justify-center w-full text-sm text-gray-400">
//     //           Hover or click a location pin to see details
//     //         </div>
//     //       )} */}
//     //       {location ? (
//     //         <>
//     //           {location.image && (
//     //             <img
//     //               src={location.image}
//     //               alt={location.label}
//     //               className="w-[147px] h-[137px] object-cover"
//     //             />
//     //           )}
//     //           <div className="flex flex-col justify-between w-full gap-2 text-sm">
//     //             <div>
//     //               <h3 className="text-lg bw-r">
//     //                 {location.label}
//     //                 <span className="text-[14px] bw-r">
//     //                   {location.city && `, ${location.city}`}
//     //                 </span>
//     //               </h3>
//     //               {location.purpose && (
//     //                 <p className="text-[14px] bw-r text-gray-400">
//     //                   {location.purpose}
//     //                 </p>
//     //               )}
//     //             </div>
//     //             <div className="w-full text-white/80 bg-[#313131] px-1.5 rounded-[4px] py-1">
//     //               {location.area && <p>Total Area: {location.area}</p>}
//     //               {location.potential && <p>Potential: {location.potential}</p>}
//     //               {location.certification && (
//     //                 <p>Certification: {location.certification}</p>
//     //               )}
//     //             </div>
//     //             <a
//     //               href="#"
//     //               className="text-white flex items-center gap-2 inter-sb text-[14px]"
//     //             >
//     //               Explore Park{" "}
//     //               <img
//     //                 src="/home/map/external.png"
//     //                 alt="External link"
//     //                 className="w-4 h-4"
//     //               />
//     //             </a>
//     //           </div>
//     //         </>
//     //       ) : (
//     //         <div className="flex items-center justify-center w-full h-full text-sm text-gray-400">
//     //           Hover or click a location pin to see details
//     //         </div>
//     //       )}
//     //     </motion.div>
//     //   </AnimatePresence>
//     // </div>
//     <div className="relative flex items-center justify-center h-full overflow-hidden">
//       <AnimatePresence mode="wait">
//         {location && (
//           <motion.div
//             key={location.label + location.city}
//             initial={{ y: 100 }}
//             animate={{ y: 0 }}
//             exit={{ y: -100 }}
//             transition={{ duration: 0.5 }}
//             className="absolute inset-0 px-4 bg-[#000] shadow-lg flex items-center justify-center w-full gap-4"
//           >
//             {location.image && (
//               <img
//                 src={location.image}
//                 alt={location.label}
//                 className="w-[147px] h-[137px] object-cover"
//               />
//             )}
//             <div className="flex flex-col justify-between w-full gap-2 text-sm">
//               <div>
//                 <h3 className="text-lg bw-r">
//                   {location.label}
//                   <span className="text-[14px] bw-r">
//                     {location.city && `, ${location.city}`}
//                   </span>
//                 </h3>
//                 {location.purpose && (
//                   <p className="text-[14px] bw-r text-gray-400">
//                     {location.purpose}
//                   </p>
//                 )}
//               </div>
//               <div className="w-full text-white/80 bg-[#313131] px-1.5 rounded-[4px] py-1">
//                 {location.area && <p>Total Area: {location.area}</p>}
//                 {location.potential && <p>Potential: {location.potential}</p>}
//                 {location.certification && (
//                   <p>Certification: {location.certification}</p>
//                 )}
//               </div>
//               <a
//                 href="#"
//                 className="text-white flex items-center gap-2 inter-sb text-[14px]"
//               >
//                 Explore Park{" "}
//                 <img
//                   src="/home/map/external.png"
//                   alt="External link"
//                   className="w-4 h-4"
//                 />
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default function InfoSlider({ location }) {
//   return (
//     <div className="relative flex items-center justify-center h-full overflow-hidden">
//       <div className="relative w-full h-[240px] overflow-hidden">
//         {" "}
//         {location && (
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={location.label + location.city} // 👈 must be unique
//               initial={{ y: "20px", opacity: 0 }}
//               animate={{ y: "0%", opacity: 1 }}
//               exit={{
//                 y: "-20px",
//                 opacity: 0,
//                 transition: {
//                   duration: 0.6,
//                   ease: [0.5,0.2,0.3,0.7],
//                 },
//               }}
//               transition={{
//                 duration: 0.6,
//                 ease: [0.5,0.2,0.3,0.7],
//               }}
//               className="absolute top-0 left-0 w-full h-full px-4 bg-[#000] shadow-lg flex items-center justify-center gap-4"
//             >
//               {location.image && (
//                 <img
//                   src={location.image}
//                   alt={location.label}
//                   className="w-[147px] h-[137px] object-cover"
//                 />
//               )}
//               <div className="flex flex-col justify-between w-full gap-2 text-sm">
//                 <div>
//                   <h3 className="text-lg bw-r">
//                     {location.label}
//                     <span className="text-[14px] bw-r">
//                       {location.city && `, ${location.city}`}
//                     </span>
//                   </h3>
//                   {location.purpose && (
//                     <p className="text-[14px] bw-r text-gray-400">
//                       {location.purpose}
//                     </p>
//                   )}
//                 </div>
//                 <div className="w-full text-white/80 bg-[#313131] px-1.5 rounded-[4px] py-1">
//                   {location.area && <p>Total Area: {location.area}</p>}
//                   {location.potential && <p>Potential: {location.potential}</p>}
//                   {location.certification && (
//                     <p>Certification: {location.certification}</p>
//                   )}
//                 </div>
//                 <a
//                   href="#"
//                   className="text-white flex items-center gap-2 inter-sb text-[14px]"
//                 >
//                   Explore Park{" "}
//                   <img
//                     src="/home/map/external.png"
//                     alt="External link"
//                     className="w-4 h-4"
//                   />
//                 </a>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function InfoSlider({ location }) {
//   const [visibleCard, setVisibleCard] = useState(location);

//   useEffect(() => {
//     if (location) {
//       setVisibleCard(location); // instantly update on new location
//     } else {
//       // delay clearing the card so exit animation can finish
//       const timeout = setTimeout(() => {
//         setVisibleCard(null);
//       }, 900); // match exit transition duration
//       return () => clearTimeout(timeout);
//     }
//   }, [location]);

//   return (
//     <div className="relative flex items-center justify-center h-full overflow-hidden">
//       <div className="relative w-fit h-[240px] overflow-hidden">
//         <AnimatePresence mode="wait">
//           {visibleCard && (
//             <motion.div
//               key={visibleCard.label + visibleCard.city}
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{
//                 y: "-100%",
//                 transition: { duration: 0.6, ease: [0.5, 0, 0.3, 0.7] },
//               }}
//               transition={{ duration: 0.6, ease: [0.5, 0, 0.3, 0.7] }}
//               className="absolute top-0 left-0 w-full h-full px-4 bg-[#1D1D1D] shadow-lg flex items-center justify-center gap-4"
//             >
//               {visibleCard.image && (
//                 <img
//                   src={visibleCard.image}
//                   alt={visibleCard.label}
//                   className="w-[147px] h-[137px] object-cover"
//                 />
//               )}
//               <div className="flex flex-col justify-between w-full gap-2 text-sm">
//                 <div>
//                   <h3 className="text-lg bw-r text-[#F47920]">
//                     {visibleCard.label}
//                     {visibleCard.city && (
//                       <span className="text-[14px] text-[#F47920]">
//                         , {visibleCard.city}
//                       </span>
//                     )}
//                   </h3>
//                   {visibleCard.purpose && (
//                     <p className="text-[14px] bw-r text-gray-400">
//                       {visibleCard.purpose}
//                     </p>
//                   )}
//                 </div>
//                 <div className="w-full text-white/80 bg-[#313131] px-1.5 rounded-[4px] py-1">
//                   {visibleCard.area && <p>Total Area: {visibleCard.area}</p>}
//                   {visibleCard.potential && (
//                     <p>Potential: {visibleCard.potential}</p>
//                   )}
//                   {visibleCard.certification && (
//                     <p>Certification: {visibleCard.certification}</p>
//                   )}
//                 </div>
//                 {/* <a
//                   href="#"
//                   className="text-white flex items-center gap-2 inter-sb text-[14px]"
//                 >
//                   Explore Park{" "}
//                   <img
//                     src="/home/map/external.png"
//                     alt="External link"
//                     className="w-4 h-4"
//                   />
//                 </a> */}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????
// ????????????????????????????????????????????

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function InfoSlider({ location }) {
//   const [prevLocation, setPrevLocation] = useState(null);

//   useEffect(() => {
//     if (location) {
//       setPrevLocation(location); // Save previous location on update
//     }
//   }, [location]);
//   return (
//     <div className="relative flex items-center justify-center h-full overflow-hidden">
//       <AnimatePresence
//         mode="wait"
//         onExitComplete={() => setPrevLocation(null)} // clear previous when exit ends
//       >
//         {prevLocation && (
//           <motion.div
//             key={"prev-" + prevLocation.label + prevLocation.city}
//             initial={{ y: 0, opacity: 1 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -100, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute inset-0 px-4 bg-[#000] shadow-lg flex items-center justify-center w-full gap-4 z-10"
//           >
//             {prevLocation.image && (
//               <img
//                 src={prevLocation.image}
//                 alt={prevLocation.label}
//                 className="w-[147px] h-[137px] object-cover"
//               />
//             )}
//             <CardContent location={prevLocation} />
//           </motion.div>
//         )}

//         {location && (
//           <motion.div
//             key={location.label + location.city}
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{}}
//             transition={{ duration: 0.5 }}
//             className="absolute inset-0 px-4 bg-[#000] shadow-lg flex items-center justify-center w-full gap-4 z-20"
//           >
//             {location.image && (
//               <img
//                 src={location.image}
//                 alt={location.label}
//                 className="w-[147px] h-[137px] object-cover"
//               />
//             )}
//             <CardContent location={location} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function CardContent({ location }) {
//   return (
//     <div className="flex flex-col justify-between w-full gap-2 text-sm">
//       <div>
//         <h3 className="text-lg bw-r">
//           {location.label}
//           <span className="text-[14px] bw-r">
//             {location.city && `, ${location.city}`}
//           </span>
//         </h3>
//         {location.purpose && (
//           <p className="text-[14px] bw-r text-gray-400">{location.purpose}</p>
//         )}
//       </div>
//       <div className="w-full text-white/80 bg-[#313131] px-1.5 rounded-[4px] py-1">
//         {location.area && <p>Total Area: {location.area}</p>}
//         {location.potential && <p>Potential: {location.potential}</p>}
//         {location.certification && (
//           <p>Certification: {location.certification}</p>
//         )}
//       </div>
//       <a
//         href="#"
//         className="text-white flex items-center gap-2 inter-sb text-[14px]"
//       >
//         Explore Park{" "}
//         <img
//           src="/home/map/external.png"
//           alt="External link"
//           className="w-4 h-4"
//         />
//       </a>
//     </div>
//   );
// }
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function InfoSlider({ location }) {
//   const [current, setCurrent] = useState(location);
//   const [prev, setPrev] = useState(null);

//   useEffect(() => {
//     if (
//       location &&
//       location.label + location.city !== current?.label + current?.city
//     ) {
//       setPrev(current);
//       setCurrent(location);
//     }
//   }, [location]);

//   return (
//     <div className="relative h-full w-full perspective-[1200px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         {prev && (
//           <motion.div
//             key={"prev-" + prev.label + prev.city}
//             initial={{ rotateX: 0, opacity: 1 }}
//             animate={{ rotateX: 90, opacity: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6, ease: [0.5,0.2,0.3,0.7] }}
//             className="absolute inset-0 z-10 origin-top transform-style-preserve-3d backface-hidden flex items-center justify-center bg-[#000] gap-4"
//           >
//             {prev.image && (
//               <img
//                 src={prev.image}
//                 alt={prev.label}
//                 className="w-[147px] h-[137px] object-cover"
//               />
//             )}
//             <CardContent location={prev} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence mode="wait">
//         {current && (
//           <motion.div
//             key={"curr-" + current.label + current.city}
//             initial={{ rotateX: -90, opacity: 0 }}
//             animate={{ rotateX: 0, opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6, ease: [0.5,0.2,0.3,0.7] }}
//             className="absolute inset-0 z-20 origin-bottom transform-style-preserve-3d backface-hidden flex items-center justify-center bg-[#000] gap-4"
//           >
//             {current.image && (
//               <img
//                 src={current.image}
//                 alt={current.label}
//                 className="w-[147px] h-[137px] object-cover"
//               />
//             )}
//             <CardContent location={current} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function CardContent({ location }) {
//   return (
//     <div className="flex flex-col justify-between w-full gap-2 text-sm">
//       <div>
//         <h3 className="text-lg bw-r">
//           {location.label}
//           <span className="text-[14px] bw-r">
//             {location.city && `, ${location.city}`}
//           </span>
//         </h3>
//         {location.purpose && (
//           <p className="text-[14px] bw-r text-gray-400">{location.purpose}</p>
//         )}
//       </div>
//       <div className="w-full text-white/80 bg-[#313131] px-1.5 rounded-[4px] py-1">
//         {location.area && <p>Total Area: {location.area}</p>}
//         {location.potential && <p>Potential: {location.potential}</p>}
//         {location.certification && (
//           <p>Certification: {location.certification}</p>
//         )}
//       </div>
//       <a
//         href="#"
//         className="text-white flex items-center gap-2 inter-sb text-[14px]"
//       >
//         Explore Park{" "}
//         <img
//           src="/home/map/external.png"
//           alt="External link"
//           className="w-4 h-4"
//         />
//       </a>
//     </div>
//   );
// }
