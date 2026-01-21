// "use client";
// import React, { useState, useEffect } from "react";
// import EventPopup from "./EventPopup";
// import BlogGrid from "./BlogGrid"; // For displaying events as cards
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";

// const EventTabContent = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const postsPerPage = 6;

//   const fetchEvents = async (page = 1) => {
//     setLoading(true);
//     try {
//       const params = { per_page: postsPerPage, page, _embed: true };
//       const result = await cmsApi.getEvents(params);
//       if (result.success) {
//         const data = result.data || [];
//         if (page === 1) setEvents(data);
//         else setEvents((prev) => [...prev, ...data]);
//         setHasMore(data.length >= postsPerPage);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchEvents(1);
//     setCurrentPage(1);
//   }, []);

//   const handleEventClick = (event) => {
//     const index = events.findIndex((e) => e.id === event.id);
//     setSelectedEvent(event);
//     setSelectedIndex(index);
//   };

//   const closePopup = () => setSelectedEvent(null);

//   const handlePrev = () => {
//     if (selectedIndex > 0) {
//       const newIndex = selectedIndex - 1;
//       setSelectedIndex(newIndex);
//       setSelectedEvent(events[newIndex]);
//     }
//   };
//   const handleNext = () => {
//     if (selectedIndex < events.length - 1) {
//       const newIndex = selectedIndex + 1;
//       setSelectedIndex(newIndex);
//       setSelectedEvent(events[newIndex]);
//     }
//   };

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchEvents(nextPage);
//   };

//   if (loading && events.length === 0)
//     return <div className="text-center py-10">Loading Events...</div>;

//   if (events.length === 0)
//     return <div className="text-center py-10">No events found.</div>;

//   return (
//     <>
//       <BlogGrid blogs={events} onEventClick={handleEventClick} />
//       {hasMore && <LoadMoreButton onLoadMore={loadMore} loading={loading} />}
//       {selectedEvent && (
//         <EventPopup
//           event={selectedEvent}
//           onClose={closePopup}
//           onPrevEvent={handlePrev}
//           onNextEvent={handleNext}
//           hasPrev={selectedIndex > 0}
//           hasNext={selectedIndex < events.length - 1}
//         />
//       )}
//     </>
//   );
// };

// export default EventTabContent;
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
// import React, { useState, useEffect } from "react";
// import EventPopup from "./EventPopup";
// import BlogGrid from "./BlogGrid";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";

// const EventTabContent = () => {
//   const postsPerPage = 6;

//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState(""); // "" = all years

//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Fetch available years (all events, one call)
//   const fetchYears = async () => {
//     try {
//       const result = await cmsApi.getEvents({ per_page: 1000, _embed: true });
//       if (result.success) {
//         const years = Array.from(
//           new Set(
//             result.data.map((e) =>
//               e.acf && e.acf.year
//                 ? String(e.acf.year)
//                 : String(new Date(e.date).getFullYear())
//             )
//           )
//         ).sort((a, b) => b - a);
//         setAvailableYears(years);
//       }
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//     }
//   };

//   // Fetch events by page
//   const fetchEvents = async (page = 1) => {
//     setLoading(true);
//     try {
//       const params = { per_page: postsPerPage, page, _embed: true };
//       const result = await cmsApi.getEvents(params);
//       if (result.success) {
//         const newEvents = result.data || [];
//         setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));

//         // If fewer than postsPerPage fetched, no more pages
//         setHasMore(newEvents.length === postsPerPage);
//       }
//     } catch (err) {
//       console.error(err);
//       if (page === 1) setEvents([]);
//       setHasMore(false);
//     }
//     setLoading(false);
//   };

//   // Apply year filter whenever events or selectedYear change
//   useEffect(() => {
//     const filtered = selectedYear
//       ? events.filter(
//           (e) =>
//             (e.acf && String(e.acf.year) === selectedYear) ||
//             String(new Date(e.date).getFullYear()) === selectedYear
//         )
//       : events;
//     setFilteredEvents(filtered);
//   }, [selectedYear, events]);

//   // Initial load
//   useEffect(() => {
//     fetchYears();
//     fetchEvents(1);
//     setCurrentPage(1);
//   }, []);

//   // Load more
//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchEvents(nextPage);
//   };

//   // Event popup
//   const handleEventClick = (event) => {
//     const index = filteredEvents.findIndex((e) => e.id === event.id);
//     setSelectedEvent(event);
//     setSelectedIndex(index);
//   };
//   const closePopup = () => setSelectedEvent(null);
//   const handlePrev = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex(selectedIndex - 1);
//       setSelectedEvent(filteredEvents[selectedIndex - 1]);
//     }
//   };
//   const handleNext = () => {
//     if (selectedIndex < filteredEvents.length - 1) {
//       setSelectedIndex(selectedIndex + 1);
//       setSelectedEvent(filteredEvents[selectedIndex + 1]);
//     }
//   };

//   const clearYearFilter = () => setSelectedYear("");

//   return (
//     <div>
//       {/* Year Filter */}
//       <div className="mb-8">
//         {loading && events.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex items-center gap-4">
//             <CustomDropdown
//               categories={["Year", ...availableYears]}
//               activeTab={
//                 selectedYear
//                   ? availableYears.findIndex((y) => y === selectedYear) + 1
//                   : 0
//               }
//               setActiveTab={(i) => {
//                 if (i === 0) clearYearFilter();
//                 else setSelectedYear(availableYears[i - 1]);
//               }}
//               className="w-full md:w-60"
//             />
//             {selectedYear && (
//               <button
//                 onClick={clearYearFilter}
//                 className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
//               >
//                 Clear
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Event Grid */}
//       {loading && events.length === 0 ? (
//         <Skeleton type="grid" count={6} />
//       ) : filteredEvents.length === 0 ? (
//         <div className="text-center py-10">No events found.</div>
//       ) : (
//         <>
//           <BlogGrid blogs={filteredEvents} onEventClick={handleEventClick} />
//           {hasMore && !selectedYear && (
//             <div className="mt-8 text-center">
//               <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//             </div>
//           )}
//         </>
//       )}

//       {/* Event Popup */}
//       {selectedEvent && (
//         <EventPopup
//           event={selectedEvent}
//           onClose={closePopup}
//           onPrevEvent={handlePrev}
//           onNextEvent={handleNext}
//           hasPrev={selectedIndex > 0}
//           hasNext={selectedIndex < filteredEvents.length - 1}
//         />
//       )}
//     </div>
//   );
// };

// export default EventTabContent;
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
// import React, { useState, useEffect } from "react";
// import EventPopup from "./EventPopup";
// import BlogGrid from "./BlogGrid";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";

// const EventTabContent = () => {
//   const postsPerPage = 6;

//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState(""); // "" = all years

//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Fetch all unique years by paginating (to respect API per_page limits, e.g., 100 max)
//   const fetchAllYears = async () => {
//     try {
//       const yearsSet = new Set();
//       let page = 1;
//       const perPage = 100; // Safe max for most CMS APIs like WordPress REST
//       let hasMorePages = true;

//       while (hasMorePages) {
//         const res = await cmsApi.getEvents({
//           per_page: perPage,
//           page,
//           _embed: true,
//         });
//         if (res.success) {
//           const newEvents = res.data || [];
//           newEvents.forEach((e) => {
//             const year = e.acf?.year
//               ? String(e.acf.year)
//               : String(new Date(e.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newEvents.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a); // Newest first
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//     }
//   };

//   // Fetch events for the grid (paginated)
//   const fetchEvents = async (page = 1) => {
//     setLoading(true);
//     try {
//       const params = { per_page: postsPerPage, page, _embed: true };
//       const res = await cmsApi.getEvents(params);
//       if (res.success) {
//         const newEvents = res.data || [];
//         setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));
//         setHasMore(newEvents.length === postsPerPage);
//       }
//     } catch (err) {
//       console.error(err);
//       setHasMore(false);
//       if (page === 1) setEvents([]);
//     }
//     setLoading(false);
//   };

//   // Apply year filter
//   useEffect(() => {
//     const filtered = selectedYear
//       ? events.filter(
//           (e) =>
//             String(e.acf?.year || new Date(e.date).getFullYear()) ===
//             selectedYear
//         )
//       : events;
//     setFilteredEvents(filtered);
//   }, [selectedYear, events]);

//   // Initial load
//   useEffect(() => {
//     fetchAllYears(); // populate all years in dropdown
//     fetchEvents(1); // load first page
//     setCurrentPage(1);
//   }, []);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchEvents(nextPage);
//   };

//   const handleEventClick = (event) => {
//     const index = filteredEvents.findIndex((e) => e.id === event.id);
//     setSelectedEvent(event);
//     setSelectedIndex(index);
//   };
//   const closePopup = () => setSelectedEvent(null);
//   const handlePrev = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex(selectedIndex - 1);
//       setSelectedEvent(filteredEvents[selectedIndex - 1]);
//     }
//   };
//   const handleNext = () => {
//     if (selectedIndex < filteredEvents.length - 1) {
//       setSelectedIndex(selectedIndex + 1);
//       setSelectedEvent(filteredEvents[selectedIndex + 1]);
//     }
//   };

//   const clearYearFilter = () => setSelectedYear("");

//   return (
//     <div>
//       {/* Year Filter */}
//       <div className="mb-8">
//         {loading && events.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex items-center gap-4">
//             <CustomDropdown
//               categories={["Year", ...availableYears]}
//               activeTab={
//                 selectedYear
//                   ? availableYears.findIndex((y) => y === selectedYear) + 1
//                   : 0
//               }
//               setActiveTab={(i) => {
//                 if (i === 0) clearYearFilter();
//                 else setSelectedYear(availableYears[i - 1]);
//               }}
//               className="w-full md:w-60"
//             />
//             {selectedYear && (
//               <button
//                 onClick={clearYearFilter}
//                 className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
//               >
//                 Clear
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Event Grid */}
//       {loading && events.length === 0 ? (
//         <Skeleton type="grid" count={6} />
//       ) : filteredEvents.length === 0 ? (
//         <div className="text-center py-10">No events found.</div>
//       ) : (
//         <>
//           <BlogGrid blogs={filteredEvents} onEventClick={handleEventClick} />
//           {!selectedYear && hasMore && (
//             <div className="mt-8 text-center">
//               <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//             </div>
//           )}
//         </>
//       )}

//       {/* Event Popup */}
//       {selectedEvent && (
//         <EventPopup
//           event={selectedEvent}
//           onClose={closePopup}
//           onPrevEvent={handlePrev}
//           onNextEvent={handleNext}
//           hasPrev={selectedIndex > 0}
//           hasNext={selectedIndex < filteredEvents.length - 1}
//         />
//       )}
//     </div>
//   );
// };

// export default EventTabContent;
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
//
//
//
//
// "use client";
// import React, { useState, useEffect } from "react";
// import EventPopup from "./EventPopup";
// import BlogGrid from "./BlogGrid";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";

// const EventTabContent = () => {
//   const postsPerPage = 6;

//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState(""); // "" = all years

//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Fetch all unique years by paginating (to respect API per_page limits, e.g., 100 max for WP REST)
//   const fetchAllYears = async () => {
//     try {
//       const yearsSet = new Set();
//       let page = 1;
//       const perPage = 100; // Safe max for most CMS APIs like WordPress REST
//       let hasMorePages = true;

//       while (hasMorePages) {
//         const params = {
//           per_page: perPage,
//           page,
//           _embed: true,
//           _fields: "acf,date", // Optimize: only fetch necessary fields for years extraction (acf.year and date)
//         };
//         const res = await cmsApi.getEvents(params);
//         if (res.success) {
//           const newEvents = res.data || [];
//           newEvents.forEach((e) => {
//             const year = e.acf?.year
//               ? String(e.acf.year)
//               : String(new Date(e.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newEvents.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a); // Newest first
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//     }
//   };

//   // Fetch events for the grid (paginated)
//   const fetchEvents = async (page = 1) => {
//     setLoading(true);
//     try {
//       const params = {
//         per_page: postsPerPage,
//         page,
//         _embed: true,
//       };
//       const res = await cmsApi.getEvents(params);
//       if (res.success) {
//         const newEvents = res.data || [];
//         setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));
//         setHasMore(newEvents.length === postsPerPage);
//       }
//     } catch (err) {
//       console.error(err);
//       setHasMore(false);
//       if (page === 1) setEvents([]);
//     }
//     setLoading(false);
//   };

//   // Apply year filter (client-side on loaded events)
//   useEffect(() => {
//     const filtered = selectedYear
//       ? events.filter(
//           (e) =>
//             String(e.acf?.year || new Date(e.date).getFullYear()) ===
//             selectedYear
//         )
//       : events;
//     setFilteredEvents(filtered);
//   }, [selectedYear, events]);

//   // Initial load
//   useEffect(() => {
//     fetchAllYears(); // populate all years in dropdown
//     fetchEvents(1); // load first page
//     setCurrentPage(1);
//   }, []);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchEvents(nextPage);
//   };

//   const handleEventClick = (event) => {
//     const index = filteredEvents.findIndex((e) => e.id === event.id);
//     setSelectedEvent(event);
//     setSelectedIndex(index);
//   };
//   const closePopup = () => setSelectedEvent(null);
//   const handlePrev = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex(selectedIndex - 1);
//       setSelectedEvent(filteredEvents[selectedIndex - 1]);
//     }
//   };
//   const handleNext = () => {
//     if (selectedIndex < filteredEvents.length - 1) {
//       setSelectedIndex(selectedIndex + 1);
//       setSelectedEvent(filteredEvents[selectedIndex + 1]);
//     }
//   };

//   const clearYearFilter = () => setSelectedYear("");

//   return (
//     <div>
//       {/* Year Filter */}
//       <div className="mb-8">
//         {loading && events.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex items-center gap-4">
//             <CustomDropdown
//               categories={["Year", ...availableYears]}
//               activeTab={
//                 selectedYear
//                   ? availableYears.findIndex((y) => y === selectedYear) + 1
//                   : 0
//               }
//               setActiveTab={(i) => {
//                 if (i === 0) clearYearFilter();
//                 else setSelectedYear(availableYears[i - 1]);
//               }}
//               className="w-full md:w-60"
//             />
//             {selectedYear && (
//               <button
//                 onClick={clearYearFilter}
//                 className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
//               >
//                 Clear
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Event Grid */}
//       {loading && events.length === 0 ? (
//         <Skeleton type="grid" count={6} />
//       ) : filteredEvents.length === 0 ? (
//         <div className="text-center py-10">No events found.</div>
//       ) : (
//         <>
//           <BlogGrid blogs={filteredEvents} onEventClick={handleEventClick} />
//           {hasMore && (
//             <div className="mt-8 text-center">
//               <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//             </div>
//           )}
//         </>
//       )}

//       {/* Event Popup */}
//       {selectedEvent && (
//         <EventPopup
//           event={selectedEvent}
//           onClose={closePopup}
//           onPrevEvent={handlePrev}
//           onNextEvent={handleNext}
//           hasPrev={selectedIndex > 0}
//           hasNext={selectedIndex < filteredEvents.length - 1}
//         />
//       )}
//     </div>
//   );
// };

// export default EventTabContent;
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
// import React, { useState, useEffect } from "react";
// import EventPopup from "./EventPopup";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";
// import EventGrid from "./EventGrid";

// const EventTabContent = () => {
//   const postsPerPage = 6;

//   const [events, setEvents] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState(""); // "" = all years

//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Fetch all unique years by paginating (to respect API per_page limits, e.g., 100 max for WP REST)
//   const fetchAllYears = async () => {
//     try {
//       const yearsSet = new Set();
//       let page = 1;
//       const perPage = 100; // Safe max for most CMS APIs like WordPress REST
//       let hasMorePages = true;

//       while (hasMorePages) {
//         const params = {
//           per_page: perPage,
//           page,
//           _embed: true,
//           _fields: "acf,date", // Optimize: only fetch necessary fields for years extraction (acf.year and date)
//         };
//         const res = await cmsApi.getEvents(params);
//         if (res.success) {
//           const newEvents = res.data || [];
//           newEvents.forEach((e) => {
//             const year = e.acf?.year
//               ? String(e.acf.year)
//               : String(new Date(e.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newEvents.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a); // Newest first
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//     }
//   };

//   // Fetch events for the grid (paginated, with server-side year filter if selected)
//   const fetchEvents = async (page = 1) => {
//     setLoading(true);
//     try {
//       let res;
//       const params = { per_page: postsPerPage, page, _embed: true };
//       if (selectedYear) {
//         // Use filtered API for year-specific events (assuming cmsApi supports it)
//         res = await cmsApi.getFilteredPosts("events", "", selectedYear, params);
//       } else {
//         res = await cmsApi.getEvents(params);
//       }
//       if (res.success) {
//         const newEvents = res.data || [];
//         setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));
//         let newHasMore;
//         if (res.hasMore !== undefined) {
//           newHasMore = res.hasMore;
//         } else if (res.totalPages) {
//           newHasMore = page < parseInt(res.totalPages);
//         } else {
//           newHasMore = newEvents.length === postsPerPage;
//         }
//         setHasMore(newHasMore);
//       } else {
//         setHasMore(false);
//         if (page === 1) setEvents([]);
//       }
//     } catch (err) {
//       console.error(err);
//       setHasMore(false);
//       if (page === 1) setEvents([]);
//     }
//     setLoading(false);
//   };

//   // Initial load for years
//   useEffect(() => {
//     fetchAllYears(); // populate all years in dropdown
//   }, []);

//   // Handle year selection changes (reset and refetch)
//   useEffect(() => {
//     setEvents([]);
//     setCurrentPage(1);
//     setHasMore(true);
//     fetchEvents(1);
//   }, [selectedYear]);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchEvents(nextPage);
//   };

//   const handleEventClick = (event) => {
//     const index = events.findIndex((e) => e.id === event.id);
//     setSelectedEvent(event);
//     setSelectedIndex(index);
//   };
//   const closePopup = () => setSelectedEvent(null);
//   const handlePrev = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex(selectedIndex - 1);
//       setSelectedEvent(events[selectedIndex - 1]);
//     }
//   };
//   const handleNext = () => {
//     if (selectedIndex < events.length - 1) {
//       setSelectedIndex(selectedIndex + 1);
//       setSelectedEvent(events[selectedIndex + 1]);
//     }
//   };

//   const clearYearFilter = () => setSelectedYear("");

//   return (
//     <div>
//       {/* Year Filter */}
//       <div className="my-10 fixup">
//         {loading && events.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex items-center gap-4 w-full justify-between">
//             <CustomDropdown
//               categories={["Year", ...availableYears]}
//               activeTab={
//                 selectedYear
//                   ? availableYears.findIndex((y) => y === selectedYear) + 1
//                   : 0
//               }
//               setActiveTab={(i) => {
//                 if (i === 0) clearYearFilter();
//                 else setSelectedYear(availableYears[i - 1]);
//               }}
//               className="relative md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]"
//             />
//             {selectedYear && (
//               <button
//                 onClick={clearYearFilter}
//                 className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
//               >
//                 <img
//                   src="/cross.svg"
//                   alt="Cross"
//                   className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
//                 />
//                 <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
//                   Clear All
//                 </span>
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Event Grid */}
//       {loading && events.length === 0 ? (
//         <Skeleton type="grid" count={6} />
//       ) : events.length === 0 ? (
//         <div className="text-center py-10">No events found.</div>
//       ) : (
//         <>
//           <EventGrid blogs={events} onEventClick={handleEventClick} />
//           {hasMore && (
//             <div className="mt-8 text-center">
//               <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//             </div>
//           )}
//         </>
//       )}

//       {/* Event Popup */}
//       {selectedEvent && (
//         <EventPopup
//           event={selectedEvent}
//           onClose={closePopup}
//           onPrevEvent={handlePrev}
//           onNextEvent={handleNext}
//           hasPrev={selectedIndex > 0}
//           hasNext={selectedIndex < events.length - 1}
//         />
//       )}
//     </div>
//   );
// };

// export default EventTabContent;
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
//
//
// "use client";
// import React, { useState, useEffect } from "react";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";
// import EventGrid from "./EventGrid";
// import EventPopup from "@/components/events/EventPopup";

// const EventTabContent = () => {
//   const postsPerPage = 6;

//   const [events, setEvents] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState(""); // "" = all years

//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Fetch all unique years by paginating (to respect API per_page limits, e.g., 100 max for WP REST)
//   const fetchAllYears = async () => {
//     try {
//       const yearsSet = new Set();
//       let page = 1;
//       const perPage = 100; // Safe max for most CMS APIs like WordPress REST
//       let hasMorePages = true;

//       while (hasMorePages) {
//         const params = {
//           per_page: perPage,
//           page,
//           _embed: true,
//           _fields: "acf,date", // Optimize: only fetch necessary fields for years extraction (acf.year and date)
//         };
//         const res = await cmsApi.getEvents(params);
//         if (res.success) {
//           const newEvents = res.data || [];
//           newEvents.forEach((e) => {
//             const year = e.acf?.year
//               ? String(e.acf.year)
//               : String(new Date(e.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newEvents.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a); // Newest first
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//     }
//   };

//   // Fetch events for the grid (paginated, with server-side year filter if selected)
//   const fetchEvents = async (page = 1) => {
//     setLoading(true);
//     try {
//       let res;
//       const params = { per_page: postsPerPage, page, _embed: true };
//       if (selectedYear) {
//         // Use filtered API for year-specific events (assuming cmsApi supports it)
//         res = await cmsApi.getFilteredPosts("events", "", selectedYear, params);
//       } else {
//         res = await cmsApi.getEvents(params);
//       }
//       if (res.success) {
//         const newEvents = res.data || [];
//         setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));
//         let newHasMore;
//         if (res.hasMore !== undefined) {
//           newHasMore = res.hasMore;
//         } else if (res.totalPages) {
//           newHasMore = page < parseInt(res.totalPages);
//         } else {
//           newHasMore = newEvents.length === postsPerPage;
//         }
//         setHasMore(newHasMore);
//       } else {
//         setHasMore(false);
//         if (page === 1) setEvents([]);
//       }
//     } catch (err) {
//       console.error(err);
//       setHasMore(false);
//       if (page === 1) setEvents([]);
//     }
//     setLoading(false);
//   };

//   // Initial load for years
//   useEffect(() => {
//     fetchAllYears(); // populate all years in dropdown
//   }, []);

//   // Handle year selection changes (reset and refetch)
//   useEffect(() => {
//     setEvents([]);
//     setCurrentPage(1);
//     setHasMore(true);
//     fetchEvents(1);
//   }, [selectedYear]);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchEvents(nextPage);
//   };

//   const handleEventClick = (event) => {
//     const index = events.findIndex((e) => e.id === event.id);
//     setSelectedEvent(event);
//     setSelectedIndex(index);
//   };
//   const closePopup = () => setSelectedEvent(null);
//   const handlePrev = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex(selectedIndex - 1);
//       setSelectedEvent(events[selectedIndex - 1]);
//     }
//   };
//   const handleNext = () => {
//     if (selectedIndex < events.length - 1) {
//       setSelectedIndex(selectedIndex + 1);
//       setSelectedEvent(events[selectedIndex + 1]);
//     }
//   };

//   const clearYearFilter = () => setSelectedYear("");

//   return (
//     <div>
//       {/* Year Filter */}
//       <div className="my-10 fixup">
//         {loading && events.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex items-center gap-4 w-full justify-between">
//             <CustomDropdown
//               categories={["Year", ...availableYears]}
//               activeTab={
//                 selectedYear
//                   ? availableYears.findIndex((y) => y === selectedYear) + 1
//                   : 0
//               }
//               setActiveTab={(i) => {
//                 if (i === 0) clearYearFilter();
//                 else setSelectedYear(availableYears[i - 1]);
//               }}
//               className="relative md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]"
//             />
//             {selectedYear && (
//               <button
//                 onClick={clearYearFilter}
//                 className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
//               >
//                 <img
//                   src="/cross.svg"
//                   alt="Cross"
//                   className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
//                 />
//                 <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
//                   Clear All
//                 </span>
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Event Grid */}
//       {loading && events.length === 0 ? (
//         <Skeleton type="grid" count={6} />
//       ) : events.length === 0 ? (
//         <div className="text-center py-10">No events found.</div>
//       ) : (
//         <>
//           <EventGrid events={events} onEventClick={handleEventClick} />
//           {hasMore && (
//             <div className="mt-8 text-center">
//               <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//             </div>
//           )}
//         </>
//       )}

//       {/* Event Popup */}
//       {selectedEvent && (
//         <EventPopup
//           event={selectedEvent}
//           onClose={closePopup}
//           onPrevEvent={handlePrev}
//           onNextEvent={handleNext}
//           hasPrev={selectedIndex > 0}
//           hasNext={selectedIndex < events.length - 1}
//         />
//       )}
//     </div>
//   );
// };

// export default EventTabContent;
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
//
//
// "use client";
// import React, { useState, useEffect } from "react";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";
// import EventGrid from "./EventGrid";
// import EventPopup from "./EventPopup";

// const EventTabContent = () => {
//   const postsPerPage = 6;

//   const [events, setEvents] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState(""); // "" = all years

//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Fetch all unique years by paginating (to respect API per_page limits, e.g., 100 max for WP REST)
//   const fetchAllYears = async () => {
//     try {
//       const yearsSet = new Set();
//       let page = 1;
//       const perPage = 100; // Safe max for most CMS APIs like WordPress REST
//       let hasMorePages = true;

//       while (hasMorePages) {
//         const params = {
//           per_page: perPage,
//           page,
//           _embed: true,
//           _fields: "acf,date", // Optimize: only fetch necessary fields for years extraction (acf.year and date)
//         };
//         const res = await cmsApi.getEvents(params);
//         if (res.success) {
//           const newEvents = res.data || [];
//           newEvents.forEach((e) => {
//             const year = e.acf?.year
//               ? String(e.acf.year)
//               : String(new Date(e.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newEvents.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a); // Newest first
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//     }
//   };

//   // Fetch events for the grid (paginated, with server-side year filter if selected)
//   const fetchEvents = async (page = 1) => {
//     setLoading(true);
//     try {
//       let res;
//       const params = { per_page: postsPerPage, page, _embed: true };
//       if (selectedYear) {
//         // Use filtered API for year-specific events (assuming cmsApi supports it)
//         res = await cmsApi.getFilteredPosts("events", "", selectedYear, params);
//       } else {
//         res = await cmsApi.getEvents(params);
//       }
//       if (res.success) {
//         const newEvents = res.data || [];
//         setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));
//         let newHasMore;
//         if (res.hasMore !== undefined) {
//           newHasMore = res.hasMore;
//         } else if (res.totalPages) {
//           newHasMore = page < parseInt(res.totalPages);
//         } else {
//           newHasMore = newEvents.length === postsPerPage;
//         }
//         setHasMore(newHasMore);
//       } else {
//         setHasMore(false);
//         if (page === 1) setEvents([]);
//       }
//     } catch (err) {
//       console.error(err);
//       setHasMore(false);
//       if (page === 1) setEvents([]);
//     }
//     setLoading(false);
//   };

//   // Initial load for years
//   useEffect(() => {
//     fetchAllYears(); // populate all years in dropdown
//   }, []);

//   // Handle year selection changes (reset and refetch)
//   useEffect(() => {
//     setEvents([]);
//     setCurrentPage(1);
//     setHasMore(true);
//     fetchEvents(1);
//   }, [selectedYear]);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchEvents(nextPage);
//   };

//   const handleEventClick = (event) => {
//     const index = events.findIndex((e) => e.id === event.id);
//     setSelectedEvent(event);
//     setSelectedIndex(index);
//   };
//   const closePopup = () => setSelectedEvent(null);
//   const handlePrev = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex(selectedIndex - 1);
//       setSelectedEvent(events[selectedIndex - 1]);
//     }
//   };
//   const handleNext = () => {
//     if (selectedIndex < events.length - 1) {
//       setSelectedIndex(selectedIndex + 1);
//       setSelectedEvent(events[selectedIndex + 1]);
//     }
//   };

//   const clearYearFilter = () => setSelectedYear("");

//   return (
//     <div>
//       {/* Year Filter */}
//       {/* <div className="my-10 fixup">
//         {loading && events.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex items-center gap-4 w-full justify-between">
//             <CustomDropdown
//               categories={["Year", ...availableYears]}
//               activeTab={
//                 selectedYear
//                   ? availableYears.findIndex((y) => y === selectedYear) + 1
//                   : 0
//               }
//               setActiveTab={(i) => {
//                 if (i === 0) clearYearFilter();
//                 else setSelectedYear(availableYears[i - 1]);
//               }}
//               className="relative md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]"
//             />
//             {selectedYear && (
//               <button
//                 onClick={clearYearFilter}
//                 className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
//               >
//                 <img
//                   src="/cross.svg"
//                   alt="Cross"
//                   className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
//                 />
//                 <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
//                   Clear All
//                 </span>
//               </button>
//             )}
//           </div>
//         )}
//       </div> */}

//       {/* Event Grid */}
//       {loading && events.length === 0 ? (
//         <Skeleton type="grid" count={6} />
//       ) : events.length === 0 ? (
//         <div className="text-center py-10">No events found.</div>
//       ) : (
//         <div className="mt-10">
//           <EventGrid events={events} onEventClick={handleEventClick} />
//           {hasMore && (
//             <div className="mt-8 text-center">
//               <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//             </div>
//           )}
//         </div>
//       )}

//       {/* Event Popup */}
//       {selectedEvent && (
//         <EventPopup
//           event={selectedEvent}
//           onClose={closePopup}
//           onPrevEvent={handlePrev}
//           onNextEvent={handleNext}
//           hasPrev={selectedIndex > 0}
//           hasNext={selectedIndex < events.length - 1}
//         />
//       )}
//     </div>
//   );
// };

// export default EventTabContent;
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadMoreButton from "./LoadMoreButton";
import cmsApi from "@/src/lib/cmsApi";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
import Skeleton from "./Skeleton";
import EventGrid from "./EventGrid";
import EventPopup from "./EventPopup";

const EventTabContent = () => {
  const postsPerPage = 6;

  const [events, setEvents] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fetch all unique years
  const fetchAllYears = async () => {
    try {
      const yearsSet = new Set();
      let page = 1;
      const perPage = 100;
      let hasMorePages = true;

      while (hasMorePages) {
        const params = {
          per_page: perPage,
          page,
          _embed: true,
          _fields: "acf,date",
        };
        const res = await cmsApi.getEvents(params);
        if (res.success) {
          const newEvents = res.data || [];
          newEvents.forEach((e) => {
            const year = e.acf?.year
              ? String(e.acf.year)
              : String(new Date(e.date).getFullYear());
            yearsSet.add(year);
          });
          hasMorePages = newEvents.length === perPage;
          page++;
        } else {
          hasMorePages = false;
        }
      }

      const years = Array.from(yearsSet).sort((a, b) => b - a);
      setAvailableYears(years);
    } catch (err) {
      console.error("Failed to fetch years:", err);
    }
  };

  // Fetch events for the grid
  const fetchEvents = async (page = 1) => {
    setLoading(true);
    setShowSkeleton(true); // Show skeleton on every fetch, including year change
    try {
      let res;
      const params = { per_page: postsPerPage, page, _embed: true };
      if (selectedYear) {
        res = await cmsApi.getFilteredPosts("events", "", selectedYear, params);
      } else {
        res = await cmsApi.getEvents(params);
      }
      if (res.success) {
        const newEvents = res.data || [];
        setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));
        let newHasMore;
        if (res.hasMore !== undefined) {
          newHasMore = res.hasMore;
        } else if (res.totalPages) {
          newHasMore = page < parseInt(res.totalPages);
        } else {
          newHasMore = newEvents.length === postsPerPage;
        }
        setHasMore(newHasMore);
        if (newEvents.length > 0) {
          setShowSkeleton(false); // Hide skeleton immediately if events are found
        }
      } else {
        setHasMore(false);
        if (page === 1) setEvents([]);
      }
    } catch (err) {
      console.error(err);
      setHasMore(false);
      if (page === 1) setEvents([]);
    }
    setLoading(false);
  };

  // Initial load for years and events
  useEffect(() => {
    fetchAllYears();
    fetchEvents(1);

    // Set timeout to hide skeleton after 10 seconds if no events are found
    const skeletonTimeout = setTimeout(() => {
      if (events.length === 0 && loading === false) {
        setShowSkeleton(false);
      }
    }, 10000);

    return () => clearTimeout(skeletonTimeout); // Cleanup timeout
  }, [selectedYear]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchEvents(nextPage);
  };

  const handleEventClick = (event) => {
    const index = events.findIndex((e) => e.id === event.id);
    setSelectedEvent(event);
    setSelectedIndex(index);
  };

  const closePopup = () => setSelectedEvent(null);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedEvent(events[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < events.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedEvent(events[selectedIndex + 1]);
    }
  };

  const clearYearFilter = () => setSelectedYear("");

  return (
    <div>
      {/* Year Filter */}
      {/* <div className="my-10 fixup">
        {loading && events.length === 0 ? (
          <Skeleton type="filters" />
        ) : (
          <div className="flex items-center gap-4 w-full justify-between">
            <CustomDropdown
              categories={["Year", ...availableYears]}
              activeTab={
                selectedYear
                  ? availableYears.findIndex((y) => y === selectedYear) + 1
                  : 0
              }
              setActiveTab={(i) => {
                if (i === 0) clearYearFilter();
                else setSelectedYear(availableYears[i - 1]);
              }}
              className="relative md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]"
            />
            {selectedYear && (
              <button
                onClick={clearYearFilter}
                className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
              >
                <img
                  src="/cross.svg"
                  alt="Cross"
                  className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
                />
                <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
                  Clear All
                </span>
              </button>
            )}
          </div>
        )}
      </div> */}

      {/* Event Grid */}
      <AnimatePresence>
        {showSkeleton ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Skeleton type="grid" count={6} />
          </motion.div>
        ) : events.length === 0 ? (
          <motion.div
            key="no-events"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center py-10"
          >
            No events found.
          </motion.div>
        ) : (
          <motion.div
            key="event-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <EventGrid events={events} onEventClick={handleEventClick} />
            {hasMore && (
              <div className="mt-8 text-center">
                <LoadMoreButton onLoadMore={loadMore} loading={loading} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Popup */}
      {selectedEvent && (
        <EventPopup
          event={selectedEvent}
          onClose={closePopup}
          onPrevEvent={handlePrev}
          onNextEvent={handleNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < events.length - 1}
        />
      )}
    </div>
  );
};

export default EventTabContent;
