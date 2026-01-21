// "use client";
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Acard from "./Acard";
// const sectionData = {
//   heading: "Infrastructure designed",
//   heading1: "to global standards",
//   amenities: [
//     {
//       title:
//         "2 and 4-wheeler parking, truck parking designed for peak period load",
//       image: "/indetail/amicons/i1.svg",
//     },
//     {
//       title: "Electric vehicle charging plug points",
//       image: "/indetail/amicons/i2.svg",
//     },
//     {
//       title: "24×7 CCTV surveillance at main gate",
//       image: "/indetail/amicons/i3.svg",
//     },
//     {
//       title: "RWH pits with landscape areas",
//       image: "/indetail/amicons/i4.svg",
//     },
//     {
//       title: "Washrooms in common areas for drivers",
//       image: "/indetail/amicons/i5.svg",
//     },
//     {
//       title: "Green cover and indigenous flora",
//       image: "/indetail/amicons/i6.svg",
//     },
//     {
//       title: "First-aid facility",
//       image: "/indetail/amicons/i7.svg",
//     },
//     {
//       title: "Cafes and conveniences",
//       image: "/indetail/amicons/i8.svg",
//     },
//     {
//       title:
//         "Signage for navigation, regulatory information, safety and emergency guidelines",
//       image: "/indetail/amicons/i9.svg",
//     },
//   ],
// };

// const ACardSec = ({ incity_amenities = [] }) => {
//   return (
//     <div className="xl:pt-12 pt-6 flex flex-col gap-8 lg:gap-12 relative overflow-hidden">
//       {/* ✅ Cards Section */}
//       <div className="flex items-center justify-center w-full">
//         <Acard amenities={incity_amenities} />
//       </div>
//     </div>
//   );
// };

// export default ACardSec;
"use client";
import React from "react";
import Acard from "./Acard";

const ACardSec = ({ incity_amenities = [] }) => {
  // Convert backend ACF fields → old expected format
  const mappedAmenities = incity_amenities.map((item) => ({
    title: item?.ia_description || "",
    image: item?.ia_icon || "",
  }));

  return (
    <div className="xl:pt-12 pt-6 flex flex-col gap-8 lg:gap-12 relative overflow-hidden">
      {/* Cards Section */}
      <div className="flex items-center justify-center w-full">
        {/* Pass mapped amenities so Acard works without changes */}
        <Acard amenities={mappedAmenities} />
      </div>
    </div>
  );
};

export default ACardSec;
