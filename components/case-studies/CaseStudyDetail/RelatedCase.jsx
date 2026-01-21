import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Btn from "@/components/global/Btn";
import { tabUrlMap } from "@/src/utils/tabUrls";
import CharCardSkeleton from "@/components/home/TabbedContentShowcase/tabbed-mobile/CharCardSkeleton";
import CharCard from "@/components/home/TabbedContentShowcase/tabbed-mobile/CharCard";
import BlogCard from "@/components/insights/InsightsContent/BlogCard";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const RelatedCase = ({ cards = [], onViewAll, type, isLoading }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
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

  return (
    <div className="pb-2 mt-4">
      <div className="relative lg:min-h-[590px]">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: ".related_prev_btn",
            nextEl: ".related_next_btn",
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
          {/* Skeleton while loading */}
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <SwiperSlide key={`skeleton-${i}`}>
                  <CharCardSkeleton index={i} />
                </SwiperSlide>
              ))
            : cards.length > 0
            ? cards.map((card, idx) => (
                <SwiperSlide key={card.id || idx}>
                  <BlogCard blog={card} />
                </SwiperSlide>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <SwiperSlide key={`empty-${i}`}>
                  <CharCardSkeleton index={i} />
                </SwiperSlide>
              ))}
        </Swiper>

        {/* Navigation + View All Button */}
        <div className="flex items-center justify-between min-h-[85px] mt-4">
          <div className="flex gap-3">
            <button
              className="related_prev_btn flex border border-black/20 w-12 h-12 1024:w-20 1024:h-20 cursor-pointer items-center justify-center
              transition-opacity duration-300 disabled:opacity-40"
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
              className="related_next_btn flex border border-black/20 w-12 h-12 1024:w-20 1024:h-20 cursor-pointer items-center justify-center
              transition-opacity duration-300 disabled:opacity-40"
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

          {/* <Btn text="View All" href="/case  -studies" /> */}
        </div>
      </div>
    </div>
  );
};

export default RelatedCase;
