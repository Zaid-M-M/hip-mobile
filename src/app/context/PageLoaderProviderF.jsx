// "use client";

// import { usePathname } from "next/navigation";
// import { createContext, useContext, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const PageLoaderContext = createContext();
// export const usePageLoader = () => useContext(PageLoaderContext);

// export function PageLoaderProvider({ children }) {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);
//   const [clickedHref, setClickedHref] = useState(null);
//   const [showLoader, setShowLoader] = useState(false);

//   const MIN_DURATION = 50;

//   // Show loader when user clicks a link
//   const startLoading = (href) => {
//     setClickedHref(href);
//     setLoading(true);
//     setShowLoader(true);
//   };

//   // Hide loader once pathname changes and min duration is satisfied
//   useEffect(() => {
//     if (clickedHref) {
//       const startTime = Date.now();

//       if (pathname === clickedHref) {
//         const elapsed = Date.now() - startTime;
//         const remaining = MIN_DURATION - elapsed;

//         setTimeout(
//           () => {
//             setLoading(false);
//             setShowLoader(false);
//             setClickedHref(null);
//           },
//           remaining > 0 ? remaining : 0
//         );
//       }
//     }
//   }, [pathname, clickedHref]);

//   return (
//     <PageLoaderContext.Provider value={{ loading, startLoading }}>
//       <AnimatePresence>
//         {showLoader && (
//           <motion.div
//             className="fixed inset-0 z-[9999999999] flex flex-col items-center justify-center bg-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src="/loader.gif" alt="Hipars Loader" className="h-20 w-20" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {children}
//     </PageLoaderContext.Provider>
//   );
// }
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
// old code
// "use client";

// import { usePathname } from "next/navigation";
// import { createContext, useContext, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const PageLoaderContext = createContext();
// export const usePageLoader = () => useContext(PageLoaderContext);

// export function PageLoaderProvider({ children }) {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);

//   // Show loader when user clicks a link
//   const startLoading = () => {
//     setLoading(true);
//   };

//   // Hide loader when pathname changes
//   useEffect(() => {
//     setLoading(false);
//   }, [pathname]);

//   return (
//     <PageLoaderContext.Provider value={{ loading, startLoading }}>
//       <AnimatePresence mode="wait">
//         {loading && (
//           <motion.div
//             key="loader"
//             className="fixed inset-0 z-[9999999999] flex flex-col items-center justify-center bg-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src="/loader.gif" alt="Hipars Loader" className="h-20 w-20" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {children}
//     </PageLoaderContext.Provider>
//   );
// }

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

// import { usePathname } from "next/navigation";
// import { createContext, useContext, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const PageLoaderContext = createContext();
// export const usePageLoader = () => useContext(PageLoaderContext);

// export function PageLoaderProvider({ children }) {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);

//   const startLoading = () => {
//     setLoading(true);
//   };

//   useEffect(() => {
//     // Always reset scroll to top instantly when route changes
//     if (typeof window !== "undefined") {
//       window.scrollTo(0, 0);
//       document.documentElement.scrollTop = 0;
//       document.body.scrollTop = 0;
//     }

//     // Then stop loader
//     setLoading(false);
//   }, [pathname]);

//   return (
//     <PageLoaderContext.Provider value={{ loading, startLoading }}>
//       <AnimatePresence mode="wait">
//         {loading && (
//           <motion.div
//             key="loader"
//             className="fixed inset-0 z-[9999999999] flex flex-col items-center justify-center bg-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src="/loader.gif" alt="Hipars Loader" className="h-20 w-20" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {children}
//     </PageLoaderContext.Provider>
//   );
// }
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

// import { usePathname } from "next/navigation";
// import { createContext, useContext, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const PageLoaderContext = createContext();
// export const usePageLoader = () => useContext(PageLoaderContext);

// export function PageLoaderProvider({ children }) {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);

//   const startLoading = () => {
//     setLoading(true);
//   };

//   // Handle smooth scrolling for same-page anchor links
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const handleAnchorClick = (e) => {
//         // Check if the clicked element is an anchor link to a section ID
//         if (e.target.matches('a[href^="#"]:not([href="#"])')) {
//           e.preventDefault();
//           const href = e.target.getAttribute("href");
//           const targetId = href.substring(1); // Remove the #
//           const element = document.getElementById(targetId);
//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "start",
//               inline: "nearest",
//             });
//             // Update URL hash without page reload
//             window.history.replaceState(null, null, href);
//           }
//         }
//       };

//       document.addEventListener("click", handleAnchorClick);
//       return () => document.removeEventListener("click", handleAnchorClick);
//     }
//   }, []);

//   // Handle scroll on route change: start at top if no hash, or smooth scroll to section if hash present
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const hash = window.location.hash;

//       if (hash) {
//         // Delay slightly to ensure the new page's DOM (including sections) is fully rendered
//         const timer = setTimeout(() => {
//           const element = document.querySelector(hash);
//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "start",
//               inline: "nearest",
//             });
//           } else {
//             // Fallback to top if section not found (e.g., due to lazy loading)
//             window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//           }
//         }, 100); // Adjust delay if needed based on your page load times

//         return () => clearTimeout(timer);
//       } else {
//         // No hash: ensure page starts at the top instantly (default Next.js behavior, but explicit for reliability)
//         window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//         document.documentElement.scrollTop = 0;
//         document.body.scrollTop = 0;
//       }
//     }

//     // Hide loader after handling scroll
//     setLoading(false);
//   }, [pathname]);

//   return (
//     <PageLoaderContext.Provider value={{ loading, startLoading }}>
//       <AnimatePresence mode="wait">
//         {loading && (
//           <motion.div
//             key="loader"
//             className="fixed inset-0 z-[9999999999] flex flex-col items-center justify-center bg-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src="/loader.gif" alt="Hipars Loader" className="h-20 w-20" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {children}
//     </PageLoaderContext.Provider>
//   );
// }
"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const PageLoaderContext = createContext();
export const usePageLoader = () => useContext(PageLoaderContext);

export function PageLoaderProvider({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  // Handle smooth scrolling for same-page anchor links
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleAnchorClick = (e) => {
        const link = e.target.closest('a[href^="#"]:not([href="#"])');
        if (link) {
          e.preventDefault();
          const href = link.getAttribute("href");
          const targetId = href.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
            window.history.replaceState(null, null, href);
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);
      return () => document.removeEventListener("click", handleAnchorClick);
    }
  }, []);

  // Fast route change handling
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;

      if (hash) {
        // Quick timeout for hash navigation
        const timer = setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          }
          setLoading(false);
        }, 50); // Reduced from 150ms to 50ms

        return () => clearTimeout(timer);
      } else {
        // Instant scroll to top and hide loader immediately
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [pathname]);

  return (
    <PageLoaderContext.Provider value={{ loading, startLoading }}>
      {loading && (
        <div className="fixed inset-0 z-[9999999999] flex flex-col items-center justify-center bg-white">
          <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-200 border-t-black"></div>
        </div>
      )}
      {children}
    </PageLoaderContext.Provider>
  );
}
