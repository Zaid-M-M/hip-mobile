// "use client";
// import Link from "next/link";
// import React from "react";

// const SPCard = ({
//   park_name,
//   state_name,
//   development_potential,
//   construction_status,
//   land_usage,
//   igbc_status,
//   park_spotlight_new_image,
//   slug,
//   land_area,
// }) => {
//   return (
//     <Link
//       href={`/${slug}`}
//       className="sp-card bg-white flex flex-col max-w-fit h-[435px] group cursor-pointer"
//     >
//       {/* Park Spotlight Image */}
//       {park_spotlight_new_image && (
//         <div className="w-full h-[200px] overflow-hidden">
//           <img
//             src={park_spotlight_new_image}
//             alt={state_name || "Park Spotlight"}
//             className="w-full h-[200px] object-cover group-hover:scale-110 transition-all duration-500"
//           />
//         </div>
//       )}

//       {/* Park Details */}
//       <div className="flex-1 flex gap-2 flex-col py-[30px] px-6 border-x border-b border-[#CDCDCD]">
//         {/* Top row: Name + Status */}
//         <div className="flex items-center justify-between">
//           {park_name && (
//             <h3
//               className="bw-sb text-[24px]"
//               dangerouslySetInnerHTML={{ __html: park_name }}
//             />
//           )}
//           {construction_status && (
//             <span
//               className={`${
//                 construction_status === "Active"
//                   ? "text-green-500"
//                   : "text-orange-500"
//               } text-[16px] bw-sb`}
//               dangerouslySetInnerHTML={{ __html: construction_status }}
//             />
//           )}
//         </div>

//         {/* Info rows */}
//         <div className="space-y-2 text-sm">
//           {land_area && (
//             <div className="flex justify-between">
//               <span className="text-black text-[16px]">Area</span>
//               <span
//                 className="font-semibold"
//                 dangerouslySetInnerHTML={{ __html: land_area }}
//               />
//             </div>
//           )}
//           {development_potential && (
//             <div className="flex justify-between">
//               <span className="text-black text-[16px]">Potential</span>
//               <span
//                 className="font-semibold"
//                 dangerouslySetInnerHTML={{ __html: development_potential }}
//               />
//             </div>
//           )}
//           {land_usage && (
//             <div className="flex justify-between">
//               <span className="text-black text-[16px]">Usage</span>
//               <span
//                 className="font-semibold"
//                 dangerouslySetInnerHTML={{ __html: land_usage }}
//               />
//             </div>
//           )}
//           {igbc_status && (
//             <div className="flex justify-between">
//               <span className="text-black text-[16px]">Certification</span>
//               <span
//                 className="font-semibold"
//                 dangerouslySetInnerHTML={{ __html: igbc_status }}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default SPCard;
"use client";
import React, { useState } from "react";
import TransitionLink from "@/src/app/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const SPCard = ({
  park_name,
  state_name,
  development_potential,
  construction_status,
  land_usage,
  igbc_status,
  park_spotlight_new_image,
  slug,
  land_area,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="sp-card bg-white flex flex-col max-w-fit h-fit group cursor-pointer"
      onMouseEnter={() => window.innerWidth >= 768 && setHovered(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setHovered(false)}
    >
      {/* Park Spotlight Image */}
      {park_spotlight_new_image && (
        <div className="w-full h-[200px] overflow-hidden">
          <img
            src={formatMediaUrl(park_spotlight_new_image)}
            priority
            unoptimized // ← Must be true
            alt={state_name || "Park Spotlight"}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />
        </div>
      )}

      {/* Park Details */}
      <div className="flex-1 flex gap-2 flex-col min-h-[238px] py-[30px] px-6 border-x border-b border-[#CDCDCD]">
        {/* Top row: Name + Status */}
        <div className="flex items-center justify-between">
          {park_name && (
            <h3
              className="bw-sb text-[24px]"
              dangerouslySetInnerHTML={{ __html: park_name }}
            />
          )}
          {/* {construction_status && (
            <span
              className={`${
                construction_status === "Active"
                  ? "text-green-500"
                  : "text-orange-500"
              } text-[16px] bw-sb`}
              dangerouslySetInnerHTML={{ __html: construction_status }}
            />
          )} */}
        </div>

        {/* Info rows */}
        <div className="space-y-2 text-sm">
          {land_area && (
            <div className="flex justify-between">
              <span className="text-black text-[16px]">Area</span>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: land_area }}
              />
            </div>
          )}
          {development_potential && (
            <div className="flex justify-between">
              <span className="text-black text-[16px]">Potential</span>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: development_potential }}
              />
            </div>
          )}
          {/* {land_usage && (
            <div className="flex justify-between">
              <span className="text-black text-[16px]">Usage</span>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: land_usage }}
              />
            </div>
          )} */}
          {igbc_status && (
            <div className="flex justify-between">
              <span className="text-black text-[16px]">Certification</span>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: igbc_status }}
              />
            </div>
          )}
        </div>

        {/* Desktop: hover animation */}
        {slug === "warehousing-park-narasapura" ? null : (
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="explore-desktop"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.2 },
                }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                className="mt-4 !hidden md:!block"
              >
                <TransitionLink
                  href={`/${slug}`}
                  className="text-[16px] uppercase leading-[20px] bw-sb text-[#f47920]"
                >
                  Explore Park
                </TransitionLink>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Mobile: always visible */}
        {slug === "warehousing-park-narasapura" ? null : (
          <div className="mt-4 !block md:!hidden">
            <TransitionLink
              href={`/${slug}`}
              className="text-[16px] uppercase leading-[20px] bw-sb text-[#f47920]"
            >
              Explore Park
            </TransitionLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default SPCard;
