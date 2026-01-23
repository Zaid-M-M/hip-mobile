import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Btn from "@/components/global/Btn";
import CharCard from "./CharCard";
import CharCardSkeleton from "./CharCardSkeleton";
import { tabUrlMap } from "@/src/utils/tabUrls";
import EventPopup from "./EventPopup";
import { motion } from "framer-motion";

export const CardSlider = ({ cards = [], onViewAll, type, isLoading }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      setTimeout(() => {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
      }, 100);
    }
  }, [cards, type]);
  console.log(selectedEvent, cards);
  return (
    <>
      {/* Event Popup */}
      {showEventPopup && selectedEvent && (
        <EventPopup
          isOpen={showEventPopup}
          onClose={() => setShowEventPopup(false)}
          image={selectedEvent.image}
          title={selectedEvent.title}
          description={selectedEvent.description}
          media={selectedEvent.media}
          date={selectedEvent.date}
        />
      )}

      <motion.div
        key={type}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="pb-2 mt-4"
      >
        <div className="relative lg:min-h-[590px]">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: ".sbp2",
              nextEl: ".sbn2",
            }}
            cssMode={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* Show skeletons while loading */}
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SwiperSlide key={`skeleton-${i}`}>
                    <CharCardSkeleton index={i} />
                  </SwiperSlide>
                ))
              : cards.length > 0
                ? cards.map((card, idx) => (
                    <SwiperSlide key={card.id || idx}>
                      <CharCard
                        charImage={card.image}
                        charcont={card.category}
                        charTitle={card.title}
                        charSlug={card.slug}
                        description={card.description}
                        date={card.date}
                        type={type}
                        index={idx}
                        media={card.media}
                        onEventClick={(eventData) => {
                          setSelectedEvent({
                            ...eventData,
                            media: card.media,
                          });
                          setShowEventPopup(true);
                        }}
                      />
                    </SwiperSlide>
                  ))
                : Array.from({ length: 3 }).map((_, i) => (
                    <SwiperSlide key={`empty-${i}`}>
                      <CharCardSkeleton index={i} />
                    </SwiperSlide>
                  ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between min-h-[85px] mt-4">
          <div className="flex gap-3">
            <button
              className="sbp2 flex border border-black/20 w-12 h-12 1024:w-20 1024:h-20 cursor-pointer items-center justify-center transition-opacity duration-300 disabled:opacity-40"
              disabled={isBeginning}
            >
              <ArrowLeft
                className="lg:!flex !hidden"
                size={50}
                strokeWidth={1}
              />
              <ArrowLeft
                className="lg:!hidden !flex"
                size={30}
                strokeWidth={1}
              />
            </button>
            <button
              className="sbn2 flex border border-black/20 w-12 h-12 1024:w-20 1024:h-20 cursor-pointer items-center justify-center transition-opacity duration-300 disabled:opacity-40"
              disabled={isEnd}
            >
              <ArrowRight
                className="lg:!flex !hidden"
                size={50}
                strokeWidth={1}
              />
              <ArrowRight
                className="lg:!hidden !flex"
                size={30}
                strokeWidth={1}
              />
            </button>
          </div>
          <Btn
            text="View All"
            onClick={onViewAll}
            href={type ? tabUrlMap[type] : "#"}
          />
        </div>
      </motion.div>
    </>
  );
};
