"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import ParkCard from "@/components/state/ParkCard";

const DeskMDSF = ({
  activeTab,
  delhiParks = [],
  ahmedabadParks = [],
  puneParks = [],
  // goaParks = [],
  hyderabadParks = [],
  bengaluruParks = [],
  chennaiParks = [],
}) => {
  const parksByTab = [
    delhiParks,
    ahmedabadParks,
    puneParks,
    // goaParks,
    hyderabadParks,
    bengaluruParks,
    chennaiParks,
  ];

  const currentParksRaw = parksByTab[activeTab] || [];

  // EXCLUDE THESE SLUGS — THIS IS THE ONLY CHANGE
  const EXCLUDED_SLUGS = [
    "warehousing-park-delhi-i",
    "warehousing-park-delhi-ii",
  ];
  const currentParks = currentParksRaw.filter(
    (park) => !EXCLUDED_SLUGS.includes(park.slug)
  );

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
    image: park.acf?.park_spotlight_new_image || "/state/test.png",
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
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={false}
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
          <div className="fixup">
            <div className="flex items-center mt-10 gap-4 h-10 lg:h-20 ">
              <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
                <img src="/state/stateprev.svg" alt="Prev" />
              </button>
              <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
                <img src="/state/statenext.svg" alt="Next" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DeskMDSF;
