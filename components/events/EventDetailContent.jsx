"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cmsApi from "@/src/lib/cmsApi";
import BlogCard from "@/components/insights/InsightsContent/BlogCard";

const EventDetailContent = ({ slug }) => {
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // Fetch the main event
        const result = await cmsApi.getEventBySlug(slug);
        if (result.success && result.data) {
          setEvent(result.data);

          // Fetch related events
          await fetchRelatedEvents(result.data.id);
        } else {
          console.error("Event not found:", result.error);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      }
      setLoading(false);
      setRelatedLoading(false);
    };

    const fetchRelatedEvents = async (excludeId) => {
      try {
        const relatedResult = await cmsApi.getEvents({
          exclude: excludeId,
          per_page: 6,
          _embed: true
        });

        if (relatedResult.success) {
          console.log('Related events fetched:', relatedResult.data?.length || 0, 'events');
          setRelatedEvents(relatedResult.data || []);
        } else {
          console.error("Error fetching related events:", relatedResult.error);
          setRelatedEvents([]);
        }
      } catch (error) {
        console.error("Error fetching related events:", error);
        setRelatedEvents([]);
      }
    };

    if (slug) {
      fetchEvent();
    }
  }, [slug]);

  // Get content
  const getContent = () => {
    if (typeof event?.content === 'object') {
      return event.content.rendered || event.content;
    }
    return event?.content || "";
  };

  // Carousel navigation functions
  const eventsToShow = 3;
  const maxSlide = relatedEvents.length - eventsToShow;
  const showNavigation = relatedEvents.length > eventsToShow;

  const goToNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Get current events to display (sliding window of 3 events)
  const getCurrentEvents = () => {
    return relatedEvents.slice(currentSlide, currentSlide + eventsToShow);
  };

  if (loading) {
    return (
      <div className="w-full bg-white pb-[60px] md:pb-[80px] lg:pb-[100px]">
        <div className="fix">
          <div className="text-center">
            <div className="bw-r text-[18px] text-[#666666]">Loading content...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="w-full bg-white pb-[60px] md:pb-[80px] lg:pb-[100px]">
        <div className="fix">
          <div className="text-center">
            <div className="bw-r text-[18px] text-[#666666]">Content not found</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="fix">
        {/* Article Content */}
        <div
          className="blog-content mb-[80px]"
          dangerouslySetInnerHTML={{ __html: getContent() }}
        />

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <div className="border-t-2 border-dashed border-[#CCCCCC] mt-[40px] pt-[60px] pb-[100px] bg-[#FAFAFA]">
            {/* Related Events Title */}
            <div className="mb-[50px]">
              <h2 className="text-[32px] md:text-[36px] leading-[1.2] bw-r text-[#000000] mb-[20px]">
                Related
                <br />Events
                <div className="mt-[10px]">
                  <img src="/abstract_pattern.svg" alt="" className="abstract_svg" />
                </div>
              </h2>
            </div>

            {/* Related Events Grid */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px] mb-[40px]">
                {getCurrentEvents().map((relatedEvent, index) => (
                  <motion.div
                    key={`${relatedEvent.id}-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.7, 0, 0.4, 1]
                    }}
                  >
                    <BlogCard blog={relatedEvent} activeTab="Events" />
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons - Only show if more than 3 events */}
              {showNavigation && (
                <div className="flex items-center gap-[20px] mt-[20px]">
                  <button
                    onClick={goToPrevSlide}
                    className="w-[60px] h-[60px] border-2 border-solid border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={currentSlide === 0}
                    aria-label="Previous related events"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={goToNextSlide}
                    className="w-[60px] h-[60px] border-2 border-solid border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={currentSlide >= maxSlide}
                    aria-label="Next related events"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Show message when no related events are found */}
        {!relatedLoading && relatedEvents.length === 0 && (
          <div className="border-t border-dashed border-[#CCCCCC] pt-[60px] pb-[40px]">
            <div className="text-center">
              <h2 className="text-[24px] bw-r text-[#666666] mb-[20px]">No Related Events Found</h2>
              <p className="text-[16px] text-[#888888]">Check back later for more events.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailContent;