// import React from "react";
// import { motion } from "framer-motion";
// import SearchIcon from "../icons/SearchIcon";
// const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
//   return (
//     <motion.div
//       className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
//       initial={{ width: 45 }}
//       animate={{ width: isSearchOpen ? 260 : 45 }}
//       transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//     >
//       <div
//         className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
//         onClick={() => setIsSearchOpen(!isSearchOpen)}
//       >
//         <div className="h-[18px] w-[18px] aspect-square">
//           <SearchIcon />
//         </div>
//       </div>
//       {isSearchOpen && (
//         <motion.input
//           type="text"
//           placeholder="SEARCH HERE"
//           className="p-2 text-sm outline-none"
//           initial={{ opacity: 0, width: 0 }}
//           animate={{ opacity: 1, width: "100%" }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//         />
//       )}
//     </motion.div>
//   );
// };

// export default SearchInput;
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
// import { motion } from "framer-motion";
// import SearchIcon from "../icons/SearchIcon";
// import { useRouter } from "next/navigation";

// const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
//   const router = useRouter();
//   const [query, setQuery] = useState("");
//   const [debounced, setDebounced] = useState("");

//   // Debounce (300ms)
//   useEffect(() => {
//     const handler = setTimeout(() => setDebounced(query), 300);
//     return () => clearTimeout(handler);
//   }, [query]);

//   const handleSubmit = (e) => {
//     if (e.key === "Enter" && debounced.trim().length >= 3) {
//       router.push(`/search/${debounced.trim()}`);
//       // Do not close; stay open if content exists
//     }
//   };

//   const handleIconClick = () => {
//     // Only close if open and no content; otherwise, open or do nothing
//     if (isSearchOpen && query.trim() === "") {
//       setIsSearchOpen(false);
//     } else if (!isSearchOpen) {
//       setIsSearchOpen(true);
//     }
//     // If open and has content, do nothing (stay open)
//   };

//   return (
//     <motion.div
//       className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
//       initial={{ width: 45 }}
//       animate={{ width: isSearchOpen ? 260 : 45 }}
//       transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//     >
//       <div
//         className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
//         onClick={handleIconClick}
//       >
//         <div className="h-[18px] w-[18px] aspect-square">
//           <SearchIcon />
//         </div>
//       </div>
//       {isSearchOpen && (
//         <motion.input
//           type="text"
//           placeholder="SEARCH HERE"
//           className="p-2 text-sm outline-none"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={handleSubmit}
//           initial={{ opacity: 0, width: 0 }}
//           animate={{ opacity: 1, width: "100%" }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//         />
//       )}
//     </motion.div>
//   );
// };

// export default SearchInput;
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
// import { motion } from "framer-motion";
// import SearchIcon from "../icons/SearchIcon";
// import { useRouter } from "next/navigation";

// const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
//   const router = useRouter();
//   const [query, setQuery] = useState("");
//   // Removed: const [debounced, setDebounced] = useState("");
//   // Removed: useEffect hook for debouncing

//   const handleSubmit = (e) => {
//     // Now uses 'query' directly, not 'debounced'
//     if (e.key === "Enter" && query.trim().length >= 3) {
//       router.push(`/search/${query.trim()}`);
//       // Do not close; stay open if content exists
//     }
//   };

//   const handleIconClick = () => {
//     // Only close if open and no content; otherwise, open or do nothing
//     if (isSearchOpen && query.trim() === "") {
//       setIsSearchOpen(false);
//     } else if (!isSearchOpen) {
//       setIsSearchOpen(true);
//     }
//     // If open and has content, do nothing (stay open)
//   };

//   return (
//     <motion.div
//       className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
//       initial={{ width: 45 }}
//       animate={{ width: isSearchOpen ? 260 : 45 }}
//       transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//     >
//       <div
//         className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
//         onClick={handleIconClick}
//       >
//         <div className="h-[18px] w-[18px] aspect-square">
//           <SearchIcon />
//         </div>
//       </div>
//       {isSearchOpen && (
//         <motion.input
//           type="text"
//           placeholder="SEARCH HERE"
//           className="p-2 text-sm outline-none"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={handleSubmit}
//           initial={{ opacity: 0, width: 0 }}
//           animate={{ opacity: 1, width: "100%" }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//         />
//       )}
//     </motion.div>
//   );
// };

// export default SearchInput;
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

// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SearchIcon from "../icons/SearchIcon";
// // Assuming you have a component for the close icon, let's use a simple div placeholder for now
// // import { X } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { X } from "lucide-react";

// const ERROR_MESSAGE = "Word must be minimum 3 letters.";
// const MIN_LENGTH = 3;

// // A simple component for the sticky error toast
// const ErrorToast = ({ message, clearError }) => {
//   // Logic for swipe-to-dismiss using Framer Motion's drag constraints
//   const swipeDirection = 150; // Distance in pixels to trigger a dismiss

//   // Effect to auto-close the toast after 2 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       clearError();
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, [clearError]);

//   return (
//     <motion.div
//       className="fixed w-1/2 max-w-7xl top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5  py-3 shadow-xl z-50 justify-between items-center"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: -50, opacity: 0 }}
//       transition={{ type: "spring", stiffness: 500, damping: 30 }}
//       // Swipe-to-dismiss setup
//       drag="x"
//       dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//       onDragEnd={(event, info) => {
//         if (Math.abs(info.point.x - info.initial.x) > swipeDirection) {
//           clearError(); // Dismiss on swipe
//         }
//       }}
//       dragElastic={0.2}
//     >
//       <div className="flex items-center justify-between">
//         <span className="text-[20px] bw-r">{message}</span>
//         {/* Placeholder for <X /> icon */}
//         <button
//           onClick={clearError}
//           className="ml-4 p-1 hover:bg-red-700 transition"
//           aria-label="Close error message"
//         >
//           {/* Replace with <X size={18} /> */}
//           <X size={50} />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
//   const router = useRouter();
//   const [query, setQuery] = useState("");
//   const [error, setError] = useState(null); // New state for error message

//   // Callback function to clear the error state
//   const clearError = useCallback(() => setError(null), []);

//   // Handler for search submission logic (used by Enter key and Icon click)
//   const executeSearch = (searchQuery) => {
//     const trimmedQuery = searchQuery.trim();

//     if (trimmedQuery.length >= MIN_LENGTH) {
//       setError(null);
//       // Navigate to the search page
//       router.push(`/search/${trimmedQuery}`);
//       // Do not close the search bar if content is submitted
//     } else {
//       // Show error toast
//       setError(ERROR_MESSAGE);
//     }
//   };

//   const handleSubmit = (e) => {
//     if (e.key === "Enter") {
//       executeSearch(query);
//       e.preventDefault(); // Prevent default form submission if applicable
//     }
//   };

//   const handleIconClick = () => {
//     // 1. If the search bar is CLOSED, OPEN it.
//     if (!isSearchOpen) {
//       setIsSearchOpen(true);
//       return;
//     }

//     // 2. If the search bar is OPEN:

//     // Check if the query meets the length requirement.
//     if (query.trim().length >= MIN_LENGTH) {
//       // Trigger search
//       executeSearch(query);
//     } else if (query.trim() === "") {
//       // If query is empty, CLOSE the bar.
//       setIsSearchOpen(false);
//       clearError(); // Clear any lingering error
//     } else {
//       // If query is present but too short (1 or 2 letters), show error.
//       executeSearch(query);
//     }
//   };

//   return (
//     <>
//       {/* Search Input and Animation */}
//       <motion.div
//         className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
//         initial={{ width: 45 }}
//         animate={{ width: isSearchOpen ? 260 : 45 }}
//         transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <div
//           className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
//           onClick={handleIconClick}
//         >
//           <div className="h-[18px] w-[18px] aspect-square">
//             <SearchIcon />
//           </div>
//         </div>
//         {isSearchOpen && (
//           <motion.input
//             type="text"
//             placeholder="SEARCH HERE"
//             className="p-2 text-sm outline-none w-full"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={handleSubmit}
//             // Ensure width is set for animation even if not explicitly defined by motion
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ opacity: 1, width: "calc(100% - 44px)" }} // Adjust width to account for the icon container (44px/45px depending on padding/border)
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           />
//         )}
//       </motion.div>

//       {/* Error Toast Management */}
//       <AnimatePresence>
//         {error && <ErrorToast message={error} clearError={clearError} />}
//       </AnimatePresence>
//     </>
//   );
// };

// export default SearchInput;
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

// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SearchIcon from "../icons/SearchIcon";
// import { useRouter, usePathname } from "next/navigation"; // Added usePathname
// import { X } from "lucide-react"; // Imported X icon

// const ERROR_MESSAGE = "Word must be minimum 3 letters.";
// const MIN_LENGTH = 3;

// // A simple component for the sticky error toast
// const ErrorToast = ({ message, clearError }) => {
//   // Logic for swipe-to-dismiss using Framer Motion's drag constraints
//   const swipeDirection = 150; // Distance in pixels to trigger a dismiss

//   // Effect to auto-close the toast after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       clearError();
//     }, 5000); // 5 seconds as per your code
//     return () => clearTimeout(timer);
//   }, [clearError]);

//   return (
//     <motion.div
//       className="fixed w-full sm:w-80 top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5 py-3 shadow-xl z-50 flex justify-between items-center rounded-lg" // Added flex and rounded-lg for better appearance
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: -50, opacity: 0 }}
//       transition={{ type: "spring", stiffness: 500, damping: 30 }}
//       // FIX: Removed incorrect drag constraints. Now it can be dragged freely.
//       drag="x"
//       dragConstraints={{ left: -300, right: 300, top: 0, bottom: 0 }} // Allow dragging left/right up to 300px
//       onDragEnd={(event, info) => {
//         // Check if the absolute horizontal velocity or distance exceeds the threshold
//         if (
//           Math.abs(info.velocity.x) > 500 || // Dismiss fast swipe
//           Math.abs(info.point.x - info.initial.x) > swipeDirection // Dismiss long slide
//         ) {
//           clearError(); // Dismiss on swipe
//         }
//       }}
//       dragElastic={0.2}
//     >
//       <div className="flex items-center justify-between w-full">
//         <span className="text-sm sm:text-[16px] font-medium">{message}</span>
//         <button
//           onClick={clearError}
//           className="ml-4 p-1 rounded-full hover:bg-red-700 transition flex items-center justify-center"
//           aria-label="Close error message"
//         >
//           {/* Using the imported X component */}
//           <X size={20} />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
//   const router = useRouter();
//   const pathname = usePathname(); // Get current path
//   const [query, setQuery] = useState("");
//   const [error, setError] = useState(null);

//   // Callback function to clear the error state
//   const clearError = useCallback(() => setError(null), []);

//   // NEW LOGIC: Initialize query from URL slug on component mount
//   useEffect(() => {
//     // Check if the current path starts with /search/ and has a slug after it
//     if (pathname && pathname.startsWith("/search/")) {
//       // Extract the word after /search/
//       const slug = pathname.substring("/search/".length);
//       if (slug) {
//         setQuery(decodeURIComponent(slug));
//       }
//     }
//   }, [pathname]);

//   // Handler for search submission logic (used by Enter key and Icon click)
//   const executeSearch = (searchQuery) => {
//     const trimmedQuery = searchQuery.trim();

//     if (trimmedQuery.length >= MIN_LENGTH) {
//       setError(null);
//       router.push(`/search/${trimmedQuery}`);
//     } else {
//       // Show error toast
//       setError(ERROR_MESSAGE);
//     }
//   };

//   const handleSubmit = (e) => {
//     if (e.key === "Enter") {
//       // Logic: Enter key always attempts execution, showing toast if length < 3 (even if empty)
//       executeSearch(query);
//       e.preventDefault(); // Prevent default form submission
//     }
//   };

//   const handleIconClick = () => {
//     const trimmedQuery = query.trim();

//     // 1. If search bar is CLOSED, OPEN it.
//     if (!isSearchOpen) {
//       setIsSearchOpen(true);
//       return;
//     }

//     // 2. If search bar is OPEN:

//     if (trimmedQuery.length >= MIN_LENGTH) {
//       // Case A: Valid search term -> Execute Search
//       executeSearch(query);
//     } else if (trimmedQuery === "") {
//       // Case B: Empty input -> CLOSE the bar (as requested)
//       setIsSearchOpen(false);
//       clearError(); // Clear any lingering error
//     } else {
//       // Case C: Input present but too short (1 or 2 letters) -> Show Error
//       executeSearch(query);
//     }
//   };

//   return (
//     <>
//       {/* Search Input and Animation */}
//       <motion.div
//         className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
//         initial={{ width: 45 }}
//         animate={{ width: isSearchOpen ? 260 : 45 }}
//         transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <div
//           className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
//           onClick={handleIconClick}
//         >
//           <div className="h-[18px] w-[18px] aspect-square">
//             <SearchIcon />
//           </div>
//         </div>
//         {isSearchOpen && (
//           <motion.input
//             type="text"
//             placeholder="SEARCH HERE"
//             // Auto-focus the input when it opens
//             autoFocus={true}
//             className="p-2 text-sm outline-none w-full whitespace-nowrap overflow-hidden"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={handleSubmit}
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ opacity: 1, width: "calc(100% - 44px)" }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           />
//         )}
//       </motion.div>

//       {/* Error Toast Management */}
//       <AnimatePresence>
//         {error && <ErrorToast message={error} clearError={clearError} />}
//       </AnimatePresence>
//     </>
//   );
// };

// export default SearchInput;
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

// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SearchIcon from "../icons/SearchIcon";
// import { useRouter, usePathname } from "next/navigation";
// import { X } from "lucide-react";

// const ERROR_MESSAGE = "Word must be minimum 3 letters.";
// const MIN_LENGTH = 3;
// const SWIPE_THRESHOLD = 150; // Distance in pixels to trigger a dismiss

// // A simple component for the sticky error toast
// const ErrorToast = ({ message, clearError }) => {
//   const swipeDirection = SWIPE_THRESHOLD;

//   // Effect to auto-close the toast after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       clearError();
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, [clearError]);

//   return (
//     <motion.div
//       className="fixed w-full sm:w-80 top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5 py-3 shadow-xl z-50 flex justify-between items-center rounded-lg"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: -50, opacity: 0 }}
//       transition={{ type: "spring", stiffness: 500, damping: 30 }}
//       // FIX: Enable dragging in both X and Y directions
//       drag // Equivalent to drag="x" drag="y"
//       dragConstraints={{ left: -300, right: 300, top: -100, bottom: 500 }} // Added Y constraints
//       onDragEnd={(event, info) => {
//         const xDist = Math.abs(info.point.x - info.initial.x);
//         const yDist = Math.abs(info.point.y - info.initial.y);

//         // Dismiss if the drag distance or velocity is high in EITHER X or Y direction
//         if (
//           Math.abs(info.velocity.x) > 500 ||
//           Math.abs(info.velocity.y) > 500 ||
//           xDist > swipeDirection ||
//           yDist > swipeDirection
//         ) {
//           clearError(); // Dismiss on swipe/drag
//         }
//       }}
//       dragElastic={0.2}
//     >
//       <div className="flex items-center justify-between w-full">
//         <span className="text-sm sm:text-[16px] font-medium">{message}</span>
//         <button
//           onClick={clearError}
//           className="ml-4 p-1 rounded-full hover:bg-red-700 transition flex items-center justify-center"
//           aria-label="Close error message"
//         >
//           <X size={20} />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [query, setQuery] = useState("");
//   const [error, setError] = useState(null);

//   const clearError = useCallback(() => setError(null), []);

//   // Initialize query from URL slug
//   useEffect(() => {
//     if (pathname && pathname.startsWith("/search/")) {
//       const slug = pathname.substring("/search/".length);
//       if (slug) {
//         setQuery(decodeURIComponent(slug));
//       }
//     }
//   }, [pathname]);

//   // Handler for search submission logic
//   const executeSearch = (searchQuery) => {
//     const trimmedQuery = searchQuery.trim();

//     if (trimmedQuery.length >= MIN_LENGTH) {
//       setError(null);
//       router.push(`/search/${trimmedQuery}`);
//     } else {
//       setError(ERROR_MESSAGE);
//     }
//   };

//   const handleSubmit = (e) => {
//     if (e.key === "Enter") {
//       executeSearch(query);
//       e.preventDefault();
//     }
//   };

//   const handleIconClick = () => {
//     const trimmedQuery = query.trim();

//     // 1. If search bar is CLOSED, OPEN it.
//     if (!isSearchOpen) {
//       setIsSearchOpen(true);
//       return;
//     }

//     // 2. If search bar is OPEN:
//     if (trimmedQuery.length >= MIN_LENGTH) {
//       // Case A: Valid search term -> Execute Search
//       executeSearch(query);
//     } else if (trimmedQuery === "") {
//       // Case B: Empty input -> CLOSE the bar
//       setIsSearchOpen(false);
//       clearError();
//     } else {
//       // Case C: Input present but too short -> Show Error
//       executeSearch(query);
//     }
//   };

//   return (
//     <>
//       {/* Search Input and Animation */}
//       <motion.div
//         className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
//         initial={{ width: 45 }}
//         animate={{ width: isSearchOpen ? 260 : 45 }}
//         transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <div
//           className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
//           onClick={handleIconClick}
//         >
//           <div className="h-[18px] w-[18px] aspect-square">
//             <SearchIcon />
//           </div>
//         </div>
//         {isSearchOpen && (
//           <motion.input
//             type="text"
//             placeholder="SEARCH HERE"
//             autoFocus={true}
//             className="p-2 text-sm outline-none w-full whitespace-nowrap overflow-hidden"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={handleSubmit}
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ opacity: 1, width: "calc(100% - 44px)" }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           />
//         )}
//       </motion.div>

//       {/* Error Toast Management */}
//       <AnimatePresence>
//         {error && <ErrorToast message={error} clearError={clearError} />}
//       </AnimatePresence>
//     </>
//   );
// };

// export default SearchInput;
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

// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SearchIcon from "../icons/SearchIcon";
// import { useRouter, usePathname } from "next/navigation";
// // Removed: import { X } from "lucide-react"; // No longer needed for the toast

// const ERROR_MESSAGE = "Word must be minimum 3 letters.";
// const MIN_LENGTH = 3;

// // The ErrorToast component is removed entirely.

// const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [query, setQuery] = useState("");
//   const [error, setError] = useState(null); // Used to show the inline error message

//   const clearError = useCallback(() => setError(null), []);

//   // Initialize query from URL slug
//   useEffect(() => {
//     if (pathname && pathname.startsWith("/search/")) {
//       const slug = pathname.substring("/search/".length);
//       if (slug) {
//         setQuery(decodeURIComponent(slug));
//       }
//     }
//   }, [pathname]);

//   // Handler for search submission logic
//   const executeSearch = (searchQuery) => {
//     const trimmedQuery = searchQuery.trim();

//     if (trimmedQuery.length >= MIN_LENGTH) {
//       setError(null);
//       router.push(`/search/${trimmedQuery}`);
//     } else {
//       // Show the inline error text
//       setError(ERROR_MESSAGE);
//     }
//   };

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//     // NEW LOGIC: Clear the error immediately when the user starts typing
//     if (error) {
//       clearError();
//     }
//   };

//   const handleSubmit = (e) => {
//     if (e.key === "Enter") {
//       // Logic: Enter key always attempts execution, showing error if length < 3 (even if empty)
//       executeSearch(query);
//       e.preventDefault();
//     }
//   };

//   const handleIconClick = () => {
//     const trimmedQuery = query.trim();

//     // 1. If search bar is CLOSED, OPEN it.
//     if (!isSearchOpen) {
//       setIsSearchOpen(true);
//       return;
//     }

//     // 2. If search bar is OPEN:
//     if (trimmedQuery.length >= MIN_LENGTH) {
//       // Case A: Valid search term -> Execute Search
//       executeSearch(query);
//     } else if (trimmedQuery === "") {
//       // Case B: Empty input -> CLOSE the bar
//       setIsSearchOpen(false);
//       clearError();
//     } else {
//       // Case C: Input present but too short (1 or 2 letters) -> Show Error
//       executeSearch(query);
//     }
//   };

//   return (
//     // The container needs to be relative to position the error message absolutely beneath it.
//     <div className="relative">
//       {/* Search Input and Animation */}
//       <motion.div
//         className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
//         initial={{ width: 45 }}
//         animate={{ width: isSearchOpen ? 260 : 45 }}
//         transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <div
//           className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
//           onClick={handleIconClick}
//         >
//           <div className="h-[18px] w-[18px] aspect-square">
//             <SearchIcon />
//           </div>
//         </div>
//         {isSearchOpen && (
//           <motion.input
//             type="text"
//             placeholder="SEARCH HERE"
//             autoFocus={true}
//             className="p-2 text-sm outline-none w-full whitespace-nowrap overflow-hidden"
//             value={query}
//             onChange={handleInputChange} // Use the new handler here
//             onKeyDown={handleSubmit}
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ opacity: 1, width: "calc(100% - 44px)" }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           />
//         )}
//       </motion.div>

//       {/* Inline Error Message (Position Absolute) */}
//       <AnimatePresence>
//         {isSearchOpen &&
//           error && ( // Only show error if the input is open and there is an error
//             <motion.p
//               key="search-error"
//               className="absolute -top-5 left-0 mt-1 text-xs font-medium text-red-600 whitespace-nowrap"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               {error}
//             </motion.p>
//           )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SearchInput;
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

// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SearchIcon from "../icons/SearchIcon";
// import { useRouter, usePathname } from "next/navigation";

// const ERROR_MESSAGE = "Word must be minimum 3 letters.";
// const MIN_LENGTH = 3;

// const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   // NOTE ON STATE SHARING: For the query to be shared across all instances of this component
//   // throughout your app, the 'query' state would need to be lifted up and managed by a
//   // global state manager (like React Context or Redux) and passed into this component via props.
//   // For this exercise, we keep it local, but be aware of this limitation.
//   const [query, setQuery] = useState("");
//   const [error, setError] = useState(null);

//   const clearError = useCallback(() => setError(null), []);

//   // Determine if the current page is a search result page
//   const isSearchPage = pathname && pathname.startsWith("/search/");

//   // Initialize query from URL slug and manage component open/close state based on URL
//   useEffect(() => {
//     if (isSearchPage) {
//       const slug = pathname.substring("/search/".length);
//       // Set query from the URL
//       if (slug) {
//         setQuery(decodeURIComponent(slug));
//       }
//       // Ensure the search input is OPEN when on a search page
//       setIsSearchOpen(true);
//     }
//   }, [pathname, isSearchPage, setIsSearchOpen]); // Added setIsSearchOpen to dependencies

//   // Handler for search submission logic
//   const executeSearch = (searchQuery) => {
//     const trimmedQuery = searchQuery.trim();

//     if (trimmedQuery.length >= MIN_LENGTH) {
//       setError(null);
//       router.push(`/search/${trimmedQuery}`);
//     } else {
//       setError(ERROR_MESSAGE);
//     }
//   };

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//     // Clear the error immediately when the user starts typing
//     if (error) {
//       clearError();
//     }
//   };

//   const handleSubmit = (e) => {
//     if (e.key === "Enter") {
//       executeSearch(query);
//       e.preventDefault();
//     }
//   };

//   const handleIconClick = () => {
//     const trimmedQuery = query.trim();

//     // 1. If search bar is CLOSED, OPEN it.
//     if (!isSearchOpen) {
//       setIsSearchOpen(true);
//       return;
//     }

//     // 2. If search bar is OPEN:

//     // **NEW LOGIC: Lock Open on Search Pages**
//     if (isSearchPage) {
//       // If on a search page, clicking the icon should only trigger search or show an error.
//       // It must NOT close the input, regardless of content.
//       if (trimmedQuery.length >= MIN_LENGTH) {
//         executeSearch(query);
//       } else {
//         // If content is too short or empty, show error but stay open
//         setError(ERROR_MESSAGE);
//       }
//       return;
//     }

//     // **Standard Behavior (when NOT on a search page):**

//     if (trimmedQuery.length >= MIN_LENGTH) {
//       // Case A: Valid search term -> Execute Search
//       executeSearch(query);
//     } else if (trimmedQuery === "") {
//       // Case B: Empty input -> CLOSE the bar (as requested for non-search pages)
//       setIsSearchOpen(false);
//       clearError();
//     } else {
//       // Case C: Input present but too short -> Show Error
//       executeSearch(query);
//     }
//   };

//   return (
//     // The container needs to be relative to position the error message absolutely beneath it.
//     <div className="relative">
//       {/* Search Input and Animation */}
//       <motion.div
//         className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
//         initial={{ width: 45 }}
//         animate={{ width: isSearchOpen ? 260 : 45 }}
//         transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <div
//           className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
//           onClick={handleIconClick}
//         >
//           <div className="h-[18px] w-[18px] aspect-square">
//             <SearchIcon />
//           </div>
//         </div>
//         {isSearchOpen && (
//           <motion.input
//             type="text"
//             placeholder="SEARCH HERE"
//             autoFocus={true}
//             className="p-2 text-sm outline-none w-full whitespace-nowrap overflow-hidden"
//             value={query}
//             onChange={handleInputChange}
//             onKeyDown={handleSubmit}
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ opacity: 1, width: "calc(100% - 44px)" }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           />
//         )}
//       </motion.div>

//       {/* Inline Error Message (Position Absolute) */}
//       <AnimatePresence>
//         {isSearchOpen &&
//           error && ( // Only show error if the input is open and there is an error
//             <motion.p
//               key="search-error"
//               className="absolute -top-5 left-0 mt-1 text-xs font-medium text-red-600 whitespace-nowrap"
//               // The error is positioned below the input (top-full, mt-1)
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -5 }}
//               transition={{ duration: 0.2 }}
//             >
//               {error}
//             </motion.p>
//           )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SearchInput;
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "../icons/SearchIcon";
import { useRouter } from "next/navigation";
// Removed usePathname, as URL logic is no longer needed.

const ERROR_MESSAGE = "Word must be minimum 3 letters.";
const MIN_LENGTH = 3;

const SearchInput = ({ setIsSearchOpen, isSearchOpen }) => {
  const router = useRouter();
  // State is now entirely local and independent
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const clearError = useCallback(() => setError(null), []);

  // Removed: useEffect that checks the pathname and sets initial state/query.

  // Handler for search submission logic
  const executeSearch = (searchQuery) => {
    const trimmedQuery = searchQuery.trim();

    if (trimmedQuery.length >= MIN_LENGTH) {
      setError(null);
      router.push(`/search/${trimmedQuery}`);
    } else {
      // Show the inline error text
      setError(ERROR_MESSAGE);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Clear the error immediately when the user starts typing
    if (error) {
      clearError();
    }
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      // Logic: Enter key always attempts execution, showing error if length < 3 (even if empty)
      executeSearch(query);
      e.preventDefault();
    }
  };

  const handleIconClick = () => {
    const trimmedQuery = query.trim();

    // 1. If search bar is CLOSED, OPEN it.
    if (!isSearchOpen) {
      setIsSearchOpen(true);
      return;
    }

    // 2. If search bar is OPEN (Simplified Standard Behavior):

    if (trimmedQuery.length >= MIN_LENGTH) {
      // Case A: Valid search term -> Execute Search
      executeSearch(query);
    } else if (trimmedQuery === "") {
      // Case B: Empty input -> CLOSE the bar
      setIsSearchOpen(false);
      clearError();
    } else {
      // Case C: Input present but too short (1 or 2 letters) -> Show Error
      executeSearch(query);
    }

    // The previous complex logic for isSearchPage is gone, keeping it simple.
  };

  return (
    // The container needs to be relative to position the error message absolutely beneath it.
    <div className="relative">
      {/* Search Input and Animation */}
      <motion.div
        className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
        initial={{ width: 45 }}
        animate={{ width: isSearchOpen ? 260 : 45 }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
      >
        <div
          className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
          onClick={handleIconClick}
        >
          <div className="h-[18px] w-[18px] aspect-square">
            <SearchIcon />
          </div>
        </div>
        {isSearchOpen && (
          <motion.input
            type="text"
            placeholder="SEARCH HERE"
            autoFocus={true}
            className="p-2 text-sm outline-none w-full whitespace-nowrap overflow-hidden"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleSubmit}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "calc(100% - 44px)" }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
          />
        )}
      </motion.div>

      {/* Inline Error Message (Position Absolute) */}
      <AnimatePresence>
        {isSearchOpen &&
          error && ( // Only show error if the input is open and there is an error
            <motion.p
              key="search-error"
              // Error is positioned above the input as requested (-top-5)
              className="absolute -top-4 left-0 text-xs font-medium text-red-600 whitespace-nowrap"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {error}
            </motion.p>
          )}
      </AnimatePresence>
    </div>
  );
};

export default SearchInput;
