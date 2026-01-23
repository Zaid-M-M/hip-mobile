// "use client";

// import React, { useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import clsx from "clsx";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import InsightsTabsMob from "./InsightsTabsMob";

// /**
//  * Normalises a tab title to the slug that appears in the URL.
//  *   "White Papers"  → "white-papers"
//  *   "Press Release" → "press-release"
//  */
// const titleToSlug = (title) => {
//   return title
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^a-z0-9-]/g, "");
// };

// const InsightsTabs = ({ tabs, activeTab, setActiveTab }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const tabTitles = tabs.map((t) => t.title);
//   const activeIdx = tabs.findIndex((t) => t.title === activeTab);

//   /* ------------------------------------------------------------------ *
//    * 1. Sync URL → component state (on mount & when URL changes)
//    * ------------------------------------------------------------------ */
//   useEffect(() => {
//     const urlTab = searchParams.get("tab");
//     if (!urlTab) return;

//     const matchingTab = tabs.find(
//       (t) => titleToSlug(t.title) === urlTab.toLowerCase(),
//     );
//     if (matchingTab && matchingTab.title !== activeTab) {
//       setActiveTab(matchingTab.title);
//     }
//   }, [searchParams, tabs, activeTab, setActiveTab]);

//   /* ------------------------------------------------------------------ *
//    * 2. Helper: push new ?tab=… to the URL (without page reload)
//    * ------------------------------------------------------------------ */
//   const pushTabToUrl = useCallback(
//     (title) => {
//       const slug = titleToSlug(title);
//       const newUrl = `${pathname}?tab=${slug}`;
//       router.push(newUrl, { scroll: false });
//     },
//     [router, pathname],
//   );

//   /* ------------------------------------------------------------------ *
//    * 3. Click handler – update state + URL
//    * ------------------------------------------------------------------ */
//   const handleSetActiveTab = (title) => {
//     setActiveTab(title);
//     pushTabToUrl(title);
//   };

//   const handleDropdownChange = (idx) => {
//     const title = tabs[idx]?.title;
//     if (title) handleSetActiveTab(title);
//   };

//   return (
//     <>
//       {/* ---------- Desktop Tabs ---------- */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="hidden 1280:flex fixup overflow-hidden bg-white rounded-[28px] lg:rounded-[28px] border border-[#CDCDCD]"
//       >
//         {tabs.map((tab, i) => {
//           const isActive = tab.title === activeTab;
//           const isFirst = i === 0;
//           const isLast = i === tabs.length - 1;

//           return (
//             <motion.button
//               key={tab.title + i}
//               onClick={() => handleSetActiveTab(tab.title)}
//               initial={false}
//               animate={{
//                 backgroundImage: isActive
//                   ? "linear-gradient(90deg, rgba(143, 83, 161, 1) 18%, rgba(244, 121, 34, 1) 96%)"
//                   : "linear-gradient(to right, #ffffff, #ffffff)",
//               }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className={clsx(
//                 "relative flex items-center justify-between border-r border-[#CDCDCD] last:border-r-0 overflow-hidden cursor-pointer focus:outline-none h-[76px] md:h-[100px] px-[8px] md:px-[20px]",
//                 isFirst && "first:!rounded-l-[28px]",
//                 isLast && "last:!rounded-r-[28px]",
//               )}
//               style={{ flex: "1 1 0%" }}
//             >
//               <div className="flex items-center justify-between w-full">
//                 <motion.h2
//                   animate={{ color: isActive ? "#ffffff" : "#000000" }}
//                   transition={{ duration: 0.2, ease: "easeInOut" }}
//                   className="text-left text-[15px] md:text-[19px] lg:text-[24px] bw-r"
//                 >
//                   {tab.title}
//                 </motion.h2>

//                 <span className="hidden md:flex items-center justify-center w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden">
//                   <AnimatePresence mode="wait" initial={false}>
//                     {isActive && (
//                       <motion.img
//                         key="active-icon"
//                         initial={{ y: "100%", x: "-100%", opacity: 0 }}
//                         animate={{ y: 0, x: 0, opacity: 1 }}
//                         exit={{ y: "100%", x: "-100%", opacity: 0 }}
//                         transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//                         src="/whiteexternal.svg"
//                         alt="Active"
//                         className="w-full h-full"
//                       />
//                     )}
//                   </AnimatePresence>
//                 </span>
//               </div>
//             </motion.button>
//           );
//         })}
//       </motion.div>

//       {/* ---------- Mobile Tabs ---------- */}
//       <div className="block 1280:hidden fixup">
//         <InsightsTabsMob 
//           tabs={tabs}
//           activeTab={activeTab}
//           setActiveTab={handleSetActiveTab}
//         />
//       </div>
//     </>
//   );
// };

// export default InsightsTabs;
"use client";

import React, { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
import clsx from "clsx";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import InsightsTabsMob from "./InsightsTabsMob";

/**
 * Normalises a tab title to the slug that appears in the URL.
 *   "White Papers"  → "white-papers"
 *   "Press Release" → "press-release"
 */
const titleToSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

const InsightsTabs = ({ tabs, activeTab, setActiveTab }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 🔒 FIX: Track whether tab change came from user interaction
  const userInteractedRef = useRef(false);

  /* ------------------------------------------------------------------ *
   * 1. Sync URL → component state (ONLY on first load)
   * ------------------------------------------------------------------ */
  useEffect(() => {
    // 🚫 Prevent URL from overriding state after user clicks
    if (userInteractedRef.current) return;

    const urlTab = searchParams.get("tab");
    if (!urlTab) return;

    const matchingTab = tabs.find(
      (t) => titleToSlug(t.title) === urlTab.toLowerCase(),
    );

    if (matchingTab && matchingTab.title !== activeTab) {
      setActiveTab(matchingTab.title);
    }
  }, [searchParams, tabs, activeTab, setActiveTab]);

  /* ------------------------------------------------------------------ *
   * 2. Push new ?tab=… to the URL (no reload, no jitter)
   * ------------------------------------------------------------------ */
  const pushTabToUrl = useCallback(
    (title) => {
      const slug = titleToSlug(title);
      const newUrl = `${pathname}?tab=${slug}`;
      router.push(newUrl, { scroll: false });
    },
    [router, pathname],
  );

  /* ------------------------------------------------------------------ *
   * 3. Click handler – state first, URL second (instant UI)
   * ------------------------------------------------------------------ */
  const handleSetActiveTab = (title) => {
    userInteractedRef.current = true; // 🔐 lock URL → state sync
    setActiveTab(title);
    pushTabToUrl(title);
  };

  const handleDropdownChange = (idx) => {
    const title = tabs[idx]?.title;
    if (title) handleSetActiveTab(title);
  };

  return (
    <>
      {/* ---------- Desktop Tabs ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="hidden 1280:flex fixup overflow-hidden bg-white rounded-[28px] lg:rounded-[28px] border border-[#CDCDCD]"
      >
        {tabs.map((tab, i) => {
          const isActive = tab.title === activeTab;
          const isFirst = i === 0;
          const isLast = i === tabs.length - 1;

          return (
            <motion.button
              key={tab.title + i}
              onClick={() => handleSetActiveTab(tab.title)}
              initial={false}
              animate={{
                backgroundImage: isActive
                  ? "linear-gradient(90deg, rgba(143, 83, 161, 1) 18%, rgba(244, 121, 34, 1) 96%)"
                  : "linear-gradient(to right, #ffffff, #ffffff)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={clsx(
                "relative flex items-center justify-between border-r border-[#CDCDCD] last:border-r-0 overflow-hidden cursor-pointer focus:outline-none h-[76px] md:h-[100px] px-[8px] md:px-[20px]",
                isFirst && "first:!rounded-l-[28px]",
                isLast && "last:!rounded-r-[28px]",
              )}
              style={{ flex: "1 1 0%" }}
            >
              <div className="flex items-center justify-between w-full">
                <motion.h2
                  animate={{ color: isActive ? "#ffffff" : "#000000" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-left text-[15px] md:text-[19px] lg:text-[24px] bw-r"
                >
                  {tab.title}
                </motion.h2>

                <span className="hidden md:flex items-center justify-center w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    {isActive && (
                      <motion.img
                        key="active-icon"
                        initial={{ y: "100%", x: "-100%", opacity: 0 }}
                        animate={{ y: 0, x: 0, opacity: 1 }}
                        exit={{ y: "100%", x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                        src="/whiteexternal.svg"
                        alt="Active"
                        className="w-full h-full"
                      />
                    )}
                  </AnimatePresence>
                </span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* ---------- Mobile Tabs ---------- */}
      <div className="block 1280:hidden fixup">
        <InsightsTabsMob
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={handleSetActiveTab}
        />
      </div>
    </>
  );
};

export default InsightsTabs;
