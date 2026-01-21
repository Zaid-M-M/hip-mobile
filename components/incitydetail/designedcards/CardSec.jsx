// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Dcard from "./Dcard";
// const sectionData = {
//   heading: "Infrastructure designed",
//   heading1: "to global standards",
//   amenities: [
//     {
//       title: "Building Structure",
//       image: "/indetail/icons/i1.svg",
//       desc: "RCC with optimized column spacing",
//     },
//     {
//       title: "Dock Area",
//       image: "/indetail/icons/i2.svg",
//       desc: "Dock height 0.75 m with rolling shutters, dock pits",
//     },
//     {
//       title: "Truck Apron",
//       image: "/indetail/icons/i3.svg",
//       desc: "6 m concrete apron with 6 m wide roads",
//     },
//     {
//       title: "Buildings Height",
//       image: "/indetail/icons/i4.svg",
//       desc: "4 m clear floor height",
//     },
//     {
//       title: "Roof",
//       image: "/indetail/icons/i5.svg",
//       desc: "RCC with 1.5 T/sqm UDL",
//     },
//     {
//       title: "Wall",
//       image: "/indetail/icons/i6.svg",
//       desc: "Pre-cast concrete walls/ block walls",
//     },
//     {
//       title: "Floor",
//       image: "/indetail/icons/i7.svg",
//       desc: "UDL 3T/sqm on Ground Floor, UDL 1.5T/sqm on Upper Floor, FM2/FM3 – compliant design",
//     },
//     {
//       title: "Fire Protection",
//       image: "/indetail/icons/i8.svg",
//       desc: "Fire detection, alarms, fire escape doors, K115 sprinklers, external hydrants",
//     },
//     {
//       title: "Ventilation",
//       image: "/indetail/icons/i9.svg",
//       desc: "4–6 air changes, passive ventilation through louvers and windows",
//     },
//     {
//       title: "Ramps",
//       image: "/indetail/icons/i10.svg",
//       desc: "6 mt wide ramps with 1:15 slope",
//     },
//   ],
// };

// const CardSec = ({ incity_infrastructure = [] }) => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="md:py-20 lg:py-[100px] py-[45px] flex flex-col gap-8 lg:gap-12 relative overflow-hidden bg-[#F5F5F5]">
//       <div className="relative w-full fix">
//         <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
//           {/* --- Left --- */}
//           <div className="">
//             <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
//               <div className="flex items-start gap-2 lg:gap-2 flex-col">
//                 <h1 className="lg:text-[56px] xl:text-[56px] wmhead xl:leading-[66px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize">
//                   <span
//                     className="bw-m w-full"
//                     dangerouslySetInnerHTML={{ __html: sectionData.heading }}
//                   />
//                   <span className="flex gap-2 lg:gap-5 bw-r lg:items-center lg:flex-row flex-col">
//                     <span
//                       className="bw-r !font-[400] w-full"
//                       dangerouslySetInnerHTML={{ __html: sectionData.heading1 }}
//                     />
//                     <img
//                       src="/abstract_pattern.svg"
//                       className="abstract_svg"
//                       alt="Grade A Box"
//                     />
//                   </span>
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Cards Section */}
//       <div className="flex items-center justify-center w-full">
//         <Dcard
//           // incity_infrastructure={incity_infrastructure}
//           amenities={incity_infrastructure}
//         />
//       </div>
//     </div>
//   );
// };

// export default CardSec;
"use client";
import React, { useState } from "react";
import Dcard from "./Dcard";

const sectionData = {
  heading: "Infrastructure designed",
  heading1: "to global standards",
};

const CardSec = ({ incity_infrastructure = [] }) => {
  const [showMore, setShowMore] = useState(false);

  // Map backend ACF → format expected by Dcard
  const mappedInfrastructure = incity_infrastructure.map((item) => ({
    title: item?.ii_title || "",
    image: item?.ii_icon || "",
    desc: item?.ii_description || "",
  }));

  return (
    <div className="md:py-20 lg:py-[100px] py-[45px] flex flex-col gap-8 lg:gap-12 relative overflow-hidden bg-[#F5F5F5]">
      <div className="relative w-full fix">
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
          {/* --- Left --- */}
          <div className="">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <div className="flex items-start gap-2 lg:gap-2 flex-col">
                <h2 className="lg:text-[56px] xl:text-[56px] wmhead xl:leading-[66px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize">
                  <span
                    className="bw-m w-full"
                    dangerouslySetInnerHTML={{ __html: sectionData.heading }}
                  />
                  <span className="flex gap-2 lg:gap-5 bw-r lg:items-center lg:flex-row flex-col">
                    <span
                      className="bw-r !font-[400] w-full"
                      dangerouslySetInnerHTML={{ __html: sectionData.heading1 }}
                    />
                    <img
                      src="/abstract_pattern.svg"
                      className="abstract_svg"
                      alt="Grade A Box"
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Cards Section */}
      <div className="flex items-center justify-center w-full">
        <Dcard amenities={mappedInfrastructure} />
      </div>
    </div>
  );
};

export default CardSec;
