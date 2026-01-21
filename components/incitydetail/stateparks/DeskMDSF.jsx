// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import ParkCard from "@/components/state/ParkCard";

// const DeskMDSF = ({
//   activeTab,
//   delhiParks = [],
//   ahmedabadParks = [],
//   puneParks = [],
//   goaParks = [],
//   hyderabadParks = [],
//   bengaluruParks = [],
//   chennaiParks = [],
// }) => {
//   const parksByTab = [
//     delhiParks,
//     ahmedabadParks,
//     puneParks,
//     goaParks,
//     hyderabadParks,
//     bengaluruParks,
//     chennaiParks,
//   ];

//   const currentParks = parksByTab[activeTab] || [];

//   // 🔹 Map park.acf to ParkCard-compatible object
//   const formatPark = (park) => ({
//     id: park.id,
//     slug: park.slug,
//     title: park.acf?.park_name,
//     status: park.acf?.construction_status || "Unknown",
//     statusColor:
//       park.acf?.construction_status?.toLowerCase() === "active"
//         ? "text-green-500"
//         : "text-orange-500",
//     image: park.acf?.park_spotlight_image || "/state/test.png",
//     area: park.acf?.land_area ? park.acf.land_area.replace(/<[^>]+>/g, "") : "",
//     potential: park.acf?.development_potential
//       ? park.acf.development_potential.replace(/<[^>]+>/g, "")
//       : "",
//     usage: park.acf?.land_usage || "",
//     certification: park.acf?.igbc_status || "",
//   });

//   return (
//     <div className="mt-8 xl:!block !hidden lg:mt-[50px] relative">
//       {currentParks.length === 0 ? (
//         <p className="text-center w-full">No parks found.</p>
//       ) : currentParks.length <= 4 ? (
//         // STATIC RENDER MODE with fixed widths
//         <div className="flex justify-start gap-0 w-full">
//           {currentParks.map((park) => (
//             <div key={park.id} className="1920:w-1/5 w-1/4 max-w-[25%]">
//               <ParkCard park={formatPark(park)} />
//             </div>
//           ))}
//         </div>
//       ) : (
//         // SLIDER MODE
//         <>
//           <Swiper
//             key={activeTab}
//             modules={[Navigation, Autoplay]}
//             navigation={{
//               nextEl: ".custom-next",
//               prevEl: ".custom-prev",
//             }}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             speed={1000}
//             slidesPerView={4}
//             breakpoints={{
//               1920: { slidesPerView: 5 },
//               1600: { slidesPerView: 4 },
//               1280: { slidesPerView: 4 },
//               1024: { slidesPerView: 4 },
//               768: { slidesPerView: 3 },
//               0: { slidesPerView: 2 },
//             }}
//           >
//             {currentParks.map((park) => (
//               <SwiperSlide key={park.id}>
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                     exit={{
//                       opacity: 0,
//                       transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
//                     }}
//                   >
//                     <ParkCard park={formatPark(park)} />
//                   </motion.div>
//                 </AnimatePresence>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation below */}
//           <div className="flex items-center mt-10 gap-4 h-10 lg:h-20 fixup">
//             <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
//               <img src="/state/stateprev.svg" alt="Prev" />
//             </button>
//             <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
//               <img src="/state/statenext.svg" alt="Next" />
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default DeskMDSF;
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import ParkCard from "@/components/state/ParkCard";

const DeskMDSF = ({
  activeTab,
  delhiParks = [],
  ahmedabadParks = [],
  puneParks = [],
  goaParks = [],
  hyderabadParks = [],
  bengaluruParks = [],
  chennaiParks = [],
}) => {
  const parksByTab = [
    delhiParks,
    ahmedabadParks,
    puneParks,
    goaParks,
    hyderabadParks,
    bengaluruParks,
    chennaiParks,
  ];

  const currentParks = parksByTab[activeTab] || [];

  // Map park.acf to ParkCard-compatible object
  const formatPark = (park) => ({
    id: park.id,
    slug: park.slug,
    title: park.acf?.park_name,
    status: park.acf?.construction_status || "Unknown",
    statusColor:
      park.acf?.construction_status?.toLowerCase() === "active"
        ? "text-green-500"
        : "text-orange-500",
    image: park.acf?.park_spotlight_image || "/state/test.png",
    area: park.acf?.land_area ? park.acf.land_area.replace(/<[^>]+>/g, "") : "",
    potential: park.acf?.development_potential
      ? park.acf.development_potential.replace(/<[^>]+>/g, "")
      : "",
    usage: park.acf?.land_usage || "",
    certification: park.acf?.igbc_status || "",
  });

  return (
    <div className="mt-8 xl:!block !hidden lg:mt-[50px] relative">
      {currentParks.length === 0 ? (
        <p className="text-center w-full">No parks found.</p>
      ) : currentParks.length <= 4 ? (
        // STATIC RENDER MODE
        <div className="flex justify-start gap-0 w-full">
          {currentParks.map((park) => (
            <div key={park.id} className="1920:w-1/5 w-1/4 max-w-[25%]">
              <ParkCard park={formatPark(park)} />
            </div>
          ))}
        </div>
      ) : (
        // SLIDER MODE
        <>
          <Swiper
            key={activeTab}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={4}
            breakpoints={{
              1920: { slidesPerView: 5 },
              1600: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
          >
            {currentParks.map((park) => (
              <SwiperSlide key={park.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                  className="h-full"
                >
                  <ParkCard park={formatPark(park)} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center mt-10 gap-4 h-10 lg:h-20 fixup">
            <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/stateprev.svg" alt="Prev" />
            </button>
            <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/statenext.svg" alt="Next" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeskMDSF;
