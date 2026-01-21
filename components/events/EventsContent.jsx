"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cmsApi from "@/src/lib/cmsApi";
import BlogCard from "@/components/insights/InsightsContent/BlogCard";
import LoadMoreButton from "@/components/insights/InsightsContent/LoadMoreButton";
import InsightsFilters from "@/components/insights/InsightsContent/InsightsFilters";
import EventPopup from "./EventPopup";

const EventsContent = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // Popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const postsPerPage = 6;

  // Fetch events data
  const fetchData = async (page = 1, reset = false) => {
    setLoading(true);
    try {
      const params = {
        per_page: postsPerPage,
        page: page,
        _embed: true
      };

      const result = await cmsApi.getEvents(params);

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch events');
      }

      const eventsArray = result.data;
      setTotalPages(result.totalPages ? parseInt(result.totalPages) : 1);

      // Check if this is the last page
      const isLastPage = page >= parseInt(result.totalPages) || eventsArray.length < postsPerPage;

      if (reset || page === 1) {
        setEvents(eventsArray);
        setFilteredEvents(eventsArray);
        setHasMore(!isLastPage);
        // Update available categories from the fetched data
        setAvailableCategories(cmsApi.extractCategories(eventsArray));
      } else {
        const newEvents = [...events, ...eventsArray];
        setEvents(newEvents);
        setFilteredEvents(newEvents);
        setHasMore(!isLastPage);
        // Update available categories from all fetched data
        setAvailableCategories(cmsApi.extractCategories(newEvents));
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setHasMore(false);

      if (reset || page === 1) {
        setEvents([]);
        setFilteredEvents([]);
        setAvailableCategories([]);
        setAvailableYears([]);
      }
    }
    setLoading(false);
  };

  // Fetch data on component mount
  useEffect(() => {
    setCurrentPage(1);
    setHasMore(true);
    fetchData(1, true);
  }, []);

  // Fetch all available event years for the Year filter (independent of pagination)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const years = await cmsApi.getYearsByEndpoint('events');
        if (mounted && Array.isArray(years)) {
          // Ensure 2022 is included in the filter (requested), merge + sort desc
          const normalized = Array.from(new Set([...(years || []).map(String), '2022']))
            .sort((a, b) => b.localeCompare(a));
          setAvailableYears(normalized);
        }
      } catch (e) {
        // Silently ignore to avoid affecting UX if CMS is unreachable
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Filter events based on selected category and year
  useEffect(() => {
    if (events.length > 0) {
      const filtered = cmsApi.filterPosts(events, selectedCategory, selectedYear);
      setFilteredEvents(filtered);
    }
  }, [events, selectedCategory, selectedYear]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchData(nextPage, false);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedYear("");
  };

  // Handle event click for popup
  const handleEventClick = (event) => {
    console.log('handleEventClick called with:', event);
    setSelectedEvent(event);
    setIsPopupOpen(true);
    console.log('Popup should now be open');
  };

  // Handle popup close
  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="w-full bg-white">
      <div className="fix pb-[60px] md:pb-[80px] lg:pb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Filters */}
          <div className="mb-[40px] md:mb-[60px]">
            <InsightsFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              onClearFilters={clearFilters}
              availableCategories={availableCategories}
              availableYears={availableYears}
            />
          </div>

          {/* Events Grid */}
          {loading && events.length === 0 ? (
            <div className="text-center py-[40px]">
              <div className="bw-r text-[18px] text-[#666666]">Loading...</div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px]">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.7, 0, 0.4, 1]
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <BlogCard
                      blog={event}
                      activeTab="Events"
                      onEventClick={handleEventClick}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Load More Button - only show if there's more content to load */}
              {hasMore && !loading && events.length > 0 && (
                <div className="text-center mt-[40px] md:mt-[60px]">
                  <LoadMoreButton onLoadMore={loadMore} loading={loading} />
                </div>
              )}
            </>
          )}

          {/* No results message */}
          {!loading && filteredEvents.length === 0 && events.length > 0 && (
            <div className="text-center py-[40px]">
              <div className="bw-r text-[18px] text-[#666666]">
                No events found matching your filters.
              </div>
            </div>
          )}

          {/* No events at all */}
          {!loading && events.length === 0 && (
            <div className="text-center py-[40px]">
              <div className="bw-r text-[18px] text-[#666666]">
                No events available.
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Event Popup */}
      <EventPopup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        event={selectedEvent}
      />
    </div>
  );
};

export default EventsContent;