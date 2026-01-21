"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
import BlogCard from "../InsightsContent/BlogCard";

const RelatedBlogsMobile = ({ blogs }) => {
  return (
    <div className="mt-5 md:!hidden block relative">
      {blogs.length < 2 ? (
        // STATIC MODE - When less than 2 blogs
        <AnimatePresence mode="wait">
          <div key="static-mobile-blogs" className="mb-12">
            <div className="flex justify-center items-center">
              {blogs.map((blog) => (
                <div key={blog.id} className="w-full">
                  <BlogCard blog={blog} activeTab="Blogs" />
                  {/* Ensure bottom divider visible on mobile */}
                  <div className="md:hidden h-px bg-[#c3c3c3]" />
                </div>
              ))}
            </div>
          </div>
        </AnimatePresence>
      ) : (
        // SLIDER MODE - When 2 or more blogs
        <div className="w-full">
          <Swiper
            key="swiper-blogs"
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next-blogs",
              prevEl: ".custom-prev-blogs",
            }}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={1}
            className="w-full"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <AnimatePresence mode="wait">
                  <div key={blog.id} className="relative pb-[1px]">
                    <BlogCard blog={blog} activeTab="Blogs" />
                    {/* Mobile-only divider to avoid clipping by swiper overflow */}
                    {/* <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-[#c3c3c3]" /> */}
                  </div>
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation */}
          <div className="flex items-center justify-end !mt-5 !mb-0 gap-4 h-10 w-full">
            <button className="custom-prev-blogs cursor-pointer h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/stateprev.svg" alt="Prev" />
            </button>
            <button className="custom-next-blogs cursor-pointer h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/statenext.svg" alt="Next" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedBlogsMobile;
