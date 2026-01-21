// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import InsightsTitleSection from "./InsightsTitleSection";
// import InsightsTabs from "./InsightsTabs";
// import InsightsFilters from "./InsightsFilters";
// import BlogGrid from "./BlogGrid";
// import LoadMoreButton from "./LoadMoreButton";
// import EventPopup from "./EventPopup";
// import NewsTabContent from "./news/NewsTabContent";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import cmsApi from "@/src/lib/cmsApi";

// const InsightsContent = () => {
//   const [activeTab, setActiveTab] = useState("Blogs");
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filtersLoading, setFiltersLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [availableCategories, setAvailableCategories] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [pressReleaseFilter, setPressReleaseFilter] = useState("news"); // default to 'news'
//   const [isFiltered, setIsFiltered] = useState(false);

//   // Use ref to track tab switching to avoid dependency array issues
//   const isTabSwitchingRef = useRef(false);

//   // Event popup state
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedEventIndex, setSelectedEventIndex] = useState(0);
//   const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
//   const [allEvents, setAllEvents] = useState([]);

//   const tabsData = [
//     { title: "Blogs" },
//     { title: "White Papers" },
//     { title: "Events" },
//     { title: "News & Press Release" }
//   ];

//   const postsPerPage = 6;

//   // Get endpoint based on active tab
//   const getEndpoint = () => {
//     switch (activeTab) {
//       case "Blogs":
//         return "posts";
//       case "White Papers":
//         return "white_papers"; // Non-existent endpoint since white papers are not connected to CMS
//       case "Events":
//         return "events";
//       case "News & Press Release":
//         return pressReleaseFilter === "news" ? "news" : "press_release";
//       default:
//         return "posts";
//     }
//   };

//   // Fetch data (either filtered or unfiltered)
//   const fetchData = async (page = 1, reset = false) => {
//     setLoading(true);
//     try {
//       let result;
//       const endpoint = getEndpoint();
//       const hasActiveFilters = selectedCategory || selectedYear;

//       // Handle White Papers separately since they're not connected to CMS
//       if (activeTab === "White Papers") {
//         result = {
//           success: true,
//           data: [],
//           totalPages: "0",
//           total: "0"
//         };
//       } else if (hasActiveFilters) {
//         // Fetch filtered data with proper pagination
//         result = await cmsApi.getFilteredPosts(endpoint, selectedCategory, selectedYear, {
//           per_page: postsPerPage,
//           page: page
//         });
//       } else {
//         // Fetch regular data - Events need _embed for ACF data
//         const params = {
//           per_page: postsPerPage,
//           page: page
//         };

//         // Events need _embed for proper ACF data (feature_image, youtube_video_filed)
//         if (activeTab === "Events") {
//           params._embed = true;
//         }

//         switch (activeTab) {
//           case "Blogs":
//             result = await cmsApi.getPosts(params);
//             break;
//           case "Events":
//             result = await cmsApi.getEvents(params);
//             break;
//           case "News & Press Release":
//             if (pressReleaseFilter === "news") {
//               result = await cmsApi.getNews(params);
//             } else {
//               result = await cmsApi.getPressReleases(params);
//             }
//             break;
//           default:
//             result = await cmsApi.getPosts(params);
//         }
//       }

//       if (!result.success) {
//         throw new Error(result.error || 'Failed to fetch data');
//       }

//       const blogArray = result.data || [];

//       // Set has more based on result
//       const isLastPage = hasActiveFilters
//         ? !result.hasMore
//         : (page >= parseInt(result.totalPages || 1) || blogArray.length < postsPerPage);

//       if (reset || page === 1) {
//         setBlogs(blogArray);
//         setHasMore(!isLastPage);
//       } else {
//         // Ensure we don't duplicate data and only add new items
//         const currentBlogIds = new Set(blogs.map(blog => blog.id));
//         const newBlogs = blogArray.filter(blog => !currentBlogIds.has(blog.id));
//         const updatedBlogs = [...blogs, ...newBlogs];
//         setBlogs(updatedBlogs);
//         setHasMore(!isLastPage);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setHasMore(false);

//       if (reset || page === 1) {
//         setBlogs([]);
//       }
//     }
//     setLoading(false);
//   };

//   // Load categories and years for current tab - optimized
//   const loadTabFilters = async () => {
//     setFiltersLoading(true);
//     try {
//       // Skip loading filters for White Papers since they're not connected to CMS
//       if (activeTab === "White Papers") {
//         setAvailableCategories([]);
//         setAvailableYears([]);
//         setFiltersLoading(false);
//         return;
//       }

//       const endpoint = getEndpoint();

//       // Use smaller data set for faster filter loading
//       const filterParams = { per_page: 50 };
//       // Events need _embed for proper ACF data
//       if (endpoint === 'events') {
//         filterParams._embed = true;
//       }

//       const [categoriesResult, yearsResult] = await Promise.all([
//         cmsApi.fetchData(endpoint, filterParams),
//         cmsApi.fetchData(endpoint, filterParams)
//       ]);

//       if (categoriesResult.success && yearsResult.success) {
//         const categories = cmsApi.extractCategories(categoriesResult.data, endpoint);
//         const years = cmsApi.extractYears(yearsResult.data);
//         setAvailableCategories(categories);
//         setAvailableYears(years);
//       } else {
//         setAvailableCategories([]);
//         setAvailableYears([]);
//       }
//     } catch (error) {
//       console.error("Error loading tab filters:", error);
//       setAvailableCategories([]);
//       setAvailableYears([]);
//     }
//     setFiltersLoading(false);
//   };

//   // Load tab-specific filters when tab changes - optimized
//   useEffect(() => {
//     const switchTab = async () => {
//       // Set tab switching flag to prevent other useEffects from interfering
//       isTabSwitchingRef.current = true;

//       // Clear all state immediately and synchronously
//       setBlogs([]);
//       setSelectedCategory("");
//       setSelectedYear("");
//       setIsFiltered(false);
//       setCurrentPage(1);
//       setHasMore(true);
//       setAvailableCategories([]);
//       setAvailableYears([]);

//       // Load data and filters in parallel for faster loading
//       const [dataPromise, filtersPromise] = [
//         fetchData(1, true),
//         loadTabFilters()
//       ];

//       // Wait for both to complete
//       await Promise.all([dataPromise, filtersPromise]);

//       // Clear tab switching flag
//       isTabSwitchingRef.current = false;
//     };

//     switchTab();
//   }, [activeTab]);

//   // Handle press release filter changes (only affects Press Release & News tab)
//   useEffect(() => {
//     const handlePressReleaseChange = async () => {
//       if (activeTab === "News & Press Release" && !isTabSwitchingRef.current) {
//         // Clear filters when switching between news and press releases
//         setSelectedCategory("");
//         setSelectedYear("");
//         setIsFiltered(false);
//         setCurrentPage(1);
//         setHasMore(true);

//         // Wait a tick for state to update
//         await new Promise(resolve => setTimeout(resolve, 10));

//         // Reload filters for the new type
//         await loadTabFilters();

//         // Fetch new data
//         await fetchData(1, true);
//       }
//     };

//     handlePressReleaseChange();
//   }, [pressReleaseFilter]);

//   // Refetch when filters change (only if not switching tabs) - optimized
//   useEffect(() => {
//     // Don't refetch if we're in the middle of switching tabs or if no data is loaded yet
//     if (isTabSwitchingRef.current || blogs.length === 0) return;

//     const hasFilters = !!(selectedCategory || selectedYear);
//     setIsFiltered(hasFilters);
//     setCurrentPage(1);
//     setHasMore(true);

//     // Only fetch if filters actually changed
//     fetchData(1, true);
//   }, [selectedCategory, selectedYear]);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchData(nextPage, false);
//   };

//   const clearFilters = () => {
//     setSelectedCategory("");
//     setSelectedYear("");
//     setIsFiltered(false);
//   };

//   // Event popup handlers
//   const handleEventClick = (event) => {
//     console.log('Event clicked:', event);
//     const eventIndex = blogs.findIndex(blog => blog.id === event.id);
//     setSelectedEvent(event);
//     setSelectedEventIndex(eventIndex);
//     setAllEvents(blogs); // Store all events for navigation
//     setIsEventPopupOpen(true);
//   };

//   const closeEventPopup = () => {
//     setIsEventPopupOpen(false);
//     setSelectedEvent(null);
//     setSelectedEventIndex(0);
//     setAllEvents([]);
//   };

//   const handlePrevEvent = () => {
//     if (selectedEventIndex > 0) {
//       const newIndex = selectedEventIndex - 1;
//       setSelectedEventIndex(newIndex);
//       setSelectedEvent(allEvents[newIndex]);
//     }
//   };

//   const handleNextEvent = () => {
//     if (selectedEventIndex < allEvents.length - 1) {
//       const newIndex = selectedEventIndex + 1;
//       setSelectedEventIndex(newIndex);
//       setSelectedEvent(allEvents[newIndex]);
//     }
//   };

//   return (
//     <div className="w-full bg-white">
//       {/* Desktop/Tablet: Tabs first, then Title */}
//       <div className="hidden md:block">
//         {/* Tabs Section - Desktop/Tablet */}
//         <div className="fix pt-[45px] md:pt-[45px] pb-[45px] xl:pt-[75px]">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             <div>
//               <InsightsTabs
//                 tabs={tabsData}
//                 activeTab={activeTab}
//                 setActiveTab={setActiveTab}
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Title Section - Desktop/Tablet */}
//         <InsightsTitleSection activeTab={activeTab} />
//       </div>

//       {/* Mobile: Title first, then Tabs */}
//       <div className="block md:hidden">
//         {/* Title Section - Mobile */}
//         <InsightsTitleSection activeTab={activeTab} />

//         {/* Tabs Section - Mobile */}
//         <div className="fix pt-[45px] pb-[45px]">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             <div>
//               <InsightsTabs
//                 tabs={tabsData}
//                 activeTab={activeTab}
//                 setActiveTab={setActiveTab}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Filters - Full Width Container */}
//       <div className="w-full bg-white">
//         <div className="fix pt-[45px] pb-[45px]">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             {/* Filters */}
//             <div>
//               <InsightsFilters
//                 selectedCategory={selectedCategory}
//                 setSelectedCategory={setSelectedCategory}
//                 selectedYear={selectedYear}
//                 setSelectedYear={setSelectedYear}
//                 onClearFilters={clearFilters}
//                 availableCategories={availableCategories}
//                 availableYears={availableYears}
//                 showPressType={activeTab === "News & Press Release"}
//                 pressReleaseFilter={pressReleaseFilter}
//                 setPressReleaseFilter={setPressReleaseFilter}
//                 activeTab={activeTab}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <div className="fix pt-[45px] pb-[45px] md:pt-[45px] md:pb-[45px] lg:pb-[100px]">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ once: true, amount: 0.1 }}
//         >

//           {/* Content Grid */}
//           {activeTab === "News & Press Release" && pressReleaseFilter === "news" ? (
//             <NewsTabContent />
//           ) : loading && blogs.length === 0 ? (
//             <div className="text-center py-[40px]">
//               <div className="bw-r text-[18px] text-[#666666]">
//                 {isFiltered ? 'Searching...' : 'Loading...'}
//               </div>
//             </div>
//           ) : blogs.length === 0 ? (
//             <div className="text-center py-[40px]">
//               <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
//                 {isFiltered ? 'No results found' : `No ${activeTab.toLowerCase()} found`}
//               </div>
//               <div className="bw-r text-[16px] text-[#999999]">
//                 {isFiltered ? 'Try different filters or check back later.' : 'Check back later for new content.'}
//               </div>
//             </div>
//           ) : (
//             <>
//               <BlogGrid
//                 blogs={blogs}
//                 activeTab={activeTab}
//                 onEventClick={handleEventClick}
//                 pressReleaseFilter={pressReleaseFilter}
//               />

//               {/* Load More Button - only show if there's more content to load */}
//               {hasMore && !loading && blogs.length > 0 && (
//                 <div className="text-center mt-[20px] md:mt-[30px]">
//                   <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>

//       {/* Event Popup */}
//       <EventPopup
//         event={selectedEvent}
//         isOpen={isEventPopupOpen}
//         onClose={closeEventPopup}
//         onPrevEvent={handlePrevEvent}
//         onNextEvent={handleNextEvent}
//         hasNext={selectedEventIndex < allEvents.length - 1}
//         hasPrev={selectedEventIndex > 0}
//       />
//     </div>
//   );
// };

// export default InsightsContent;
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
//
// "use client";
// import React, { useState } from "react";
// import InsightsTabs from "./InsightsTabs";
// import InsightsTitleSection from "./InsightsTitleSection";
// import BlogTabContent from "./BlogTabContent";
// import WhitePaperTabContent from "./WhitePaperTabContent";
// import EventTabContent from "./EventTabContent";
// import NewsPressTabContent from "./NewsPressTabContent";
// import PressTabContent from "./press/PressTabContent";
// import NewsTabContent from "./news/NewsTabContent";

// const InsightsContent = () => {
//   const [activeTab, setActiveTab] = useState("Blogs");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [pressReleaseFilter, setPressReleaseFilter] = useState("news");

//   const tabsData = [
//     { title: "Blogs" },
//     { title: "White Papers" },
//     { title: "Events" },
//     { title: "News" },
//     { title: "Press Release" },
//   ];

//   return (
//     <div className="w-full bg-white">
//       <InsightsTitleSection activeTab={activeTab} />

//       <InsightsTabs
//         tabs={tabsData}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />

//       {activeTab === "Blogs" && (
//         <BlogTabContent
//           selectedCategory={selectedCategory}
//           selectedYear={selectedYear}
//         />
//       )}
//       {activeTab === "White Papers" && <WhitePaperTabContent />}
//       {activeTab === "Events" && <EventTabContent />}
//       {activeTab === "News" && <NewsTabContent />}
//       {activeTab === "Press Release" && <PressTabContent />}
//     </div>
//   );
// };

// export default InsightsContent;
