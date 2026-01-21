"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ParkCard from "@/components/state/ParkCard";

// 🔹 Hook to detect screen size
const useBreakpoint = () => {
  const [bp, setBp] = useState("md");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024 && w < 1280) setBp("lg");
      else if (w >= 768 && w < 1024) setBp("md");
      else setBp("sm");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
};

const TabMDSF = ({
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
  const bp = useBreakpoint();

  // 🔹 Decide whether to show slider
  const shouldUseSlider =
    (bp === "md" && currentParks.length > 2) ||
    (bp === "lg" && currentParks.length > 3);

  // 🔹 Format park object for ParkCard
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
    <div className="hidden sm:block xl:hidden relative mt-5">
      {currentParks.length === 0 ? (
        <p className="text-center w-full">No parks found.</p>
      ) : !shouldUseSlider ? (
        // STATIC RENDER MODE
        <div
          className={`grid gap-0 mb-12 w-full ${
            bp === "lg" ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {currentParks.map((park) => (
            <ParkCard key={park.id} park={formatPark(park)} />
          ))}
        </div>
      ) : (
        // SLIDER MODE
        <>
          <Swiper
            key={activeTab}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".tab-next",
              prevEl: ".tab-prev",
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={bp === "lg" ? 3 : 2}
          >
            {currentParks.map((park) => (
              <SwiperSlide key={park.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
                    }}
                  >
                    <ParkCard park={formatPark(park)} />
                  </motion.div>
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation below */}
          <div className="flex mb-12 items-center mt-8 gap-4 h-10 fixup ">
            <button className="tab-prev cursor-pointer h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/stateprev.svg" alt="Prev" />
            </button>
            <button className="tab-next cursor-pointer h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/statenext.svg" alt="Next" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TabMDSF;
