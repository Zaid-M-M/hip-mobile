"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import BlogCard from "../InsightsContent/BlogCard";
import RelatedBlogsMobile from "./RelatedBlogsMobile";

export default function BlogDetailContent({ slug, serverBlog, serverRelated }) {
  const blog = serverBlog;
  const relatedBlogs = serverRelated || [];
  const loading = !blog;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogsToShow, setBlogsToShow] = useState(3);

  // -------------------------------
  // GET CONTENT
  // -------------------------------
  const getContent = () => {
    if (!blog) return "";

    // NEWS TYPE
    if (blog?.contentType === "news" && blog.acf?.news_description) {
      let content = `<div class="news-content">${blog.acf.news_description}`;
      if (blog.acf?.news_link) {
        content += `<div><a href="${blog.acf.news_link}" target="_blank" rel="noopener noreferrer">Read Full Article</a></div>`;
      }
      content += `</div>`;
      return content;
    }

    // EVENT TYPE
    if (blog?.contentType === "event" && blog.acf?.event_description) {
      let content = `<div class="event-content">${blog.acf.event_description}`;
      if (blog.acf?.event_date) {
        content += `<div><h4>Event Details:</h4><p><strong>Date:</strong> ${blog.acf.event_date}</p>`;
        if (blog.acf?.event_time)
          content += `<p><strong>Time:</strong> ${blog.acf.event_time}</p>`;
        if (blog.acf?.event_location)
          content += `<p><strong>Location:</strong> ${blog.acf.event_location}</p>`;
        content += `</div>`;
      }
      content += `</div>`;
      return content;
    }

    // NORMAL WORDPRESS CONTENT
    if (typeof blog.content === "object") {
      return blog.content?.rendered || "";
    }

    return blog?.content || "";
  };

  // -------------------------------
  // RESPONSIVE SLIDES
  // -------------------------------
  const getBlogsToShow = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => setBlogsToShow(getBlogsToShow());
    setBlogsToShow(getBlogsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, relatedBlogs.length - blogsToShow);
  const showNavigation = relatedBlogs.length > blogsToShow;

  const goToNextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));

  const goToPrevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  // -------------------------------
  // LOADING STATE
  // -------------------------------
  if (loading) {
    return (
      <div className="w-full bg-white pb-[60px] md:pb-[80px] lg:pb-[100px]">
        <div className="fix text-center">
          <div className="bw-r text-[18px] text-[#666666]">
            Loading content...
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------
  // NOT FOUND
  // -------------------------------
  if (!blog) {
    return (
      <div className="w-full bg-white pb-[60px] md:pb-[80px] lg:pb-[100px]">
        <div className="fix text-center">
          <div className="bw-r text-[18px] text-[#666666]">
            Content not found
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------
  // MAIN RETURN
  // -------------------------------
  return (
    <div className="w-full bg-white">
      <div className="fix">
        {/* MAIN BLOG CONTENT */}
        <div
          className="blog-content mb-10"
          dangerouslySetInnerHTML={{ __html: getContent() }}
        />

        {/* RELATED BLOGS */}
        {relatedBlogs.length > 0 && (
          <>
            <div className="contained-hr mt-[40px] mb-[60px]" />

            <div className="py-[45px] md:py-[45px] lg:pb-[70px]">
              <div className="mb-[50px]">
                <div className="flex flex-col items-start">
                  <span className="bw-m text-[35px] md:text-[45px] lg:text-[56px] tracking-[-1.4px] text-[#101828] leading-[45px] md:leading-[55px] lg:leading-[66px]">
                    Related
                  </span>
                  <div className="flex items-center gap-[10px]">
                    <span className="bw-r text-[35px] md:text-[45px] lg:text-[56px] tracking-[-1.4px] text-[#101828] leading-[45px] md:leading-[55px] lg:leading-[66px]">
                      Blogs
                    </span>
                    <img
                      src="/abstract_pattern.svg"
                      alt="Abstract Pattern"
                      className="abstract_svg"
                    />
                  </div>
                </div>
              </div>

              {/* MOBILE SWIPER */}
              <RelatedBlogsMobile blogs={relatedBlogs} />

              {/* DESKTOP SLIDER */}
              <div className="relative hidden md:block overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${
                      currentSlide * (100 / blogsToShow)
                    }%)`,
                  }}
                >
                  {relatedBlogs.map((relatedBlog) => (
                    <div
                      key={relatedBlog.id}
                      className="flex-shrink-0 pr-[30px]"
                      style={{ width: `${100 / blogsToShow}%` }}
                    >
                      <BlogCard blog={relatedBlog} activeTab="Blogs" />
                    </div>
                  ))}
                </div>

                {showNavigation && (
                  <div className="flex items-center justify-end md:justify-start gap-[3px] mt-[10px]">
                    <button
                      onClick={goToPrevSlide}
                      disabled={currentSlide === 0}
                      className="w-[60px] h-[60px] border-2 border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 disabled:opacity-40"
                    >
                      <Image
                        src="/arrowicon.svg"
                        alt="Previous"
                        width={24}
                        height={24}
                      />
                    </button>

                    <button
                      onClick={goToNextSlide}
                      disabled={currentSlide >= maxSlide}
                      className="w-[60px] h-[60px] border-2 border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 disabled:opacity-40"
                    >
                      <Image
                        src="/arrowicon.svg"
                        alt="Next"
                        width={24}
                        height={24}
                        className="rotate-180"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* NO RELATED BLOGS */}
        {relatedBlogs.length === 0 && (
          <>
            <div className="contained-hr dashed mt-[40px] mb-[60px]" />
            <div className="py-[45px] md:py-[45px]">
              <div className="text-center">
                <h2 className="text-[24px] bw-r text-[#666666] mb-[20px]">
                  No Related Blogs Found
                </h2>
                <p className="text-[16px] text-[#888888]">
                  Check back later for more content.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
