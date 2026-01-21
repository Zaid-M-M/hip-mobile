// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import SPCard from "./SPCard";

// const MobS = ({
//   delhiParks,
//   ahmedabadParks,
//   puneParks,
//   goaParks,
//   hyderabadParks,
//   bengaluruParks,
//   chennaiParks,
// }) => {
//   const allParks = [
//     ...delhiParks,
//     ...ahmedabadParks,
//     ...puneParks,
//     ...goaParks,
//     ...hyderabadParks,
//     ...bengaluruParks,
//     ...chennaiParks,
//   ];

//   return (
//     <div className="mt-5 sm:!hidden block lg:mt-[70px] relative">
//       {allParks.length < 2 ? (
//         // STATIC MODE
//         <AnimatePresence mode="wait">
//           <motion.div
//             key="static-mobile"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           >
//             <div className="flex justify-center items-center">
//               {allParks.map((park) => (
//                 <SPCard key={park.id} {...park.acf} slug={park.slug} />
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       ) : (
//         // SLIDER MODE
//         <div className="fix">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation={{
//               nextEl: ".custom-next",
//               prevEl: ".custom-prev",
//             }}
//             spaceBetween={16}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             speed={1000}
//             slidesPerView={1}
//             className="w-full mx-[5%]"
//           >
//             {allParks.map((park) => (
//               <SwiperSlide key={park.id}>
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                   >
//                     <SPCard {...park.acf} slug={park.slug} />
//                   </motion.div>
//                 </AnimatePresence>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* ✅ Custom navigation below (same style as DeskMDSF/ParksSliderF) */}
//           <div className="flex items-center justify-end fix !mt-5 !mb-12 gap-4 h-10 lg:h-20 w-full">
//             <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
//               <img src="/state/stateprev.svg" alt="Prev" />
//             </button>
//             <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
//               <img src="/state/statenext.svg" alt="Next" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobS;
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
//
//
//
//
//
//
//
// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import SPCard from "./SPCard";

// const MobS = ({
//   activeTab,
//   delhiParks,
//   ahmedabadParks,
//   puneParks,
//   goaParks,
//   hyderabadParks,
//   bengaluruParks,
//   chennaiParks,
// }) => {
//   // ✅ Map activeTab to correct parks array
//   const parkGroups = [
//     delhiParks,
//     ahmedabadParks,
//     puneParks,
//     goaParks,
//     hyderabadParks,
//     bengaluruParks,
//     chennaiParks,
//   ];

//   const currentParks = parkGroups[activeTab] || [];

//   return (
//     <div className="mt-5 sm:!hidden block lg:mt-[70px] relative">
//       {currentParks.length < 2 ? (
//         // STATIC MODE
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`static-mobile-${activeTab}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//             className="mx-[5%] mb-12"
//           >
//             <div className="flex justify-center items-center">
//               {currentParks.map((park) => (
//                 <SPCard key={park.id} {...park.acf} slug={park.slug} />
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       ) : (
//         // SLIDER MODE
//         <div className="fix">
//           <Swiper
//             key={`swiper-${activeTab}`} // 🔑 re-render when tab changes
//             modules={[Navigation, Autoplay]}
//             navigation={{
//               nextEl: ".custom-next",
//               prevEl: ".custom-prev",
//             }}
//             spaceBetween={0}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             speed={1000}
//             slidesPerView={1}
//             className="w-full mx-[5%]"
//           >
//             {currentParks.map((park) => (
//               <SwiperSlide key={park.id}>
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={park.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                   >
//                     <SPCard {...park.acf} slug={park.slug} />
//                   </motion.div>
//                 </AnimatePresence>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom navigation */}
//           <div className="flex items-center justify-end fix !mt-5 !mb-12 gap-4 h-10 lg:h-20 w-full">
//             <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
//               <img src="/state/stateprev.svg" alt="Prev" />
//             </button>
//             <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
//               <img src="/state/statenext.svg" alt="Next" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobS;
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
import SPCard from "./SPCard";

const MobS = ({
  activeTab,
  delhiParks,
  ahmedabadParks,
  puneParks,
  // goaParks,
  hyderabadParks,
  bengaluruParks,
  chennaiParks,
}) => {
  // Map activeTab to correct parks array
  const parkGroups = [
    delhiParks,
    ahmedabadParks,
    puneParks,
    // goaParks,
    hyderabadParks,
    bengaluruParks,
    chennaiParks,
  ];

  const currentParksRaw = parkGroups[activeTab] || [];

  // THIS IS THE ONLY CHANGE — EXCLUDE DELHI I & II
  const EXCLUDED_SLUGS = [
    "warehousing-park-delhi-i",
    "warehousing-park-delhi-ii",
  ];
  const currentParks = currentParksRaw.filter(
    (park) => !EXCLUDED_SLUGS.includes(park.slug)
  );

  return (
    <div className="mt-5 sm:!hidden block lg:mt-[70px] relative">
      {currentParks.length < 2 ? (
        // STATIC MODE
        <AnimatePresence mode="wait">
          <motion.div
            key={`static-mobile-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
            className="mx-[5%] mb-12"
          >
            <div className="flex justify-center items-center">
              {currentParks.map((park) => (
                <SPCard key={park.id} {...park.acf} slug={park.slug} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        // SLIDER MODE
        <div className="fix">
          <Swiper
            key={`swiper-${activeTab}`}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={1}
            className="w-full mx-[5%]"
          >
            {currentParks.map((park) => (
              <SwiperSlide key={park.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={park.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                  >
                    <SPCard {...park.acf} slug={park.slug} />
                  </motion.div>
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation */}
          <div className="flex items-center justify-end !mt-5 !mb-12 gap-4 h-10 lg:h-20 w-full">
            <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/stateprev.svg" alt="Prev" />
            </button>
            <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/statenext.svg" alt="Next" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobS;
