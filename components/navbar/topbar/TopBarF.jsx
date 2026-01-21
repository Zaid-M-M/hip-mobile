// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import SearchIcon from "../icons/SearchIcon";
// import MenuIcon from "../icons/MenuIcon";
// import CloseMenu from "../icons/CloseMenu";
// import TopDropF from "./TopDropF";
// import { useNav } from "@/src/app/context/NavContext";
// import SearchInput from "./SearchInput";

// export default function TopBarF() {
//   const { isNavOpen, setIsNavOpen } = useNav();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [showBar, setShowBar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [atTop, setAtTop] = useState(true);
//   const topBarHeight = 80;

//   const pathname = usePathname();

//   // Ref to measure content height
//   const menuRef = useRef(null);
//   const [menuHeight, setMenuHeight] = useState(0);

//   // measure height when menu changes or window resizes
//   useEffect(() => {
//     const updateHeight = () => {
//       if (menuRef.current) {
//         setMenuHeight(menuRef.current.scrollHeight);
//       }
//     };
//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, [isNavOpen]);

//   // hide/show on scroll
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setAtTop(currentY <= topBarHeight);
//           if (currentY > lastScrollY && currentY > 100) setShowBar(false);
//           else setShowBar(true);
//           setLastScrollY(currentY);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Updated: Treat / and /sustainability the same
//   const isTransparentPage = pathname === "/" || pathname === "/sustainability";

//   const bgClass = isTransparentPage
//     ? atTop
//       ? "bg-transparent"
//       : "bg-black"
//     : atTop
//     ? "bg-white"
//     : "bg-black";

//   const borderClass = isTransparentPage
//     ? "border-0"
//     : "border-b border-gray-300";

//   return (
//     <div className="lg:!block !hidden">
//       {/* Top bar */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: showBar ? 0 : -topBarHeight }}
//         transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//         className={`fixed top-0 left-0 w-full transition-colors duration-500
//                     z-[100000] flex justify-between items-center
//                     px-[max(5%,calc((100vw-1340px)/2))] ${bgClass} ${borderClass}`}
//         style={{ height: topBarHeight }}
//       >
//         <div
//           className="flex items-center pr-4"
//           onClick={() => isNavOpen && setIsNavOpen(!isNavOpen)}
//           style={{ width: "60%", height: "100%" }}
//         >
//           <div className="w-[323px] flex gap-[14px]">
//             <Link href="/">
//               <motion.img
//                 key={
//                   isTransparentPage
//                     ? "Horizon_White"
//                     : atTop
//                     ? "Horizon_black"
//                     : "Horizon_White"
//                 }
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//                 className="max-w-full"
//                 src={
//                   isTransparentPage
//                     ? "/nav/Horizon_White.svg"
//                     : atTop
//                     ? "/nav/Horizon_black.svg"
//                     : "/nav/Horizon_White.svg"
//                 }
//                 alt="Hipark Logo"
//               />
//             </Link>
//             <a href="https://www.blackstone.com/" target="_blank">
//               <motion.img
//                 key={
//                   isTransparentPage
//                     ? "blackstone_white"
//                     : atTop
//                     ? "blackstone_black"
//                     : "blackstone_white"
//                 }
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//                 className="max-w-full"
//                 src={
//                   isTransparentPage
//                     ? "/nav/blackstone_white.svg"
//                     : atTop
//                     ? "/nav/blackstone_black.svg"
//                     : "/nav/blackstone_white.svg"
//                 }
//                 alt="Blackstone Logo"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Right controls */}
//         <div className="flex gap-2 items-center py-[20px] flex-[0.4] w-[40%] justify-end">
//           <SearchInput
//             isSearchOpen={isSearchOpen}
//             setIsSearchOpen={setIsSearchOpen}
//           />

//           {/* Menu toggle */}
//           <motion.div
//             initial={{
//               width: 92,
//               paddingLeft: "20px",
//               paddingRight: "20px",
//               paddingTop: "12px",
//               paddingBottom: "12px",
//             }}
//             animate={{
//               width: isNavOpen ? 40 : 92,
//               paddingLeft: isNavOpen ? "0px" : "20px",
//               paddingRight: isNavOpen ? "0px" : "20px",
//               paddingTop: isNavOpen ? "0px" : "12px",
//               paddingBottom: isNavOpen ? "0px" : "12px",
//             }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className="flex bg-[#2a2a2a] px-5 py-3 items-center justify-center rounded-[4px] h-10 cursor-pointer"
//           >
//             <motion.span
//               initial={{ opacity: 1, width: "37px" }}
//               animate={{
//                 opacity: isNavOpen ? 0 : 1,
//                 width: isNavOpen ? 0 : "37px",
//               }}
//               transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//               className="text-white bw-m uppercase flex justify-start text-[10px] overflow-hidden"
//             >
//               Menu
//             </motion.span>
//             <div className="max-w-4 min-w-4 h-4 flex items-center">
//               {isNavOpen ? (
//                 <CloseMenu isOpen={isNavOpen} />
//               ) : (
//                 <MenuIcon isOpen={isNavOpen} />
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Mega Menu */}
//       <TopDropF
//         isNavOpen={isNavOpen}
//         setIsNavOpen={setIsNavOpen}
//         isSearchOpen={isSearchOpen}
//         setIsSearchOpen={setIsSearchOpen}
//       />
//     </div>
//   );
// // }
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
//
//
//
//
//
//
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import SearchIcon from "../icons/SearchIcon";
// import MenuIcon from "../icons/MenuIcon";
// import CloseMenu from "../icons/CloseMenu";
// import TopDropF from "./TopDropF";
// import { useNav } from "@/src/app/context/NavContext";
// import SearchInput from "./SearchInput";

// export default function TopBarF() {
//   const { isNavOpen, setIsNavOpen } = useNav();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [showBar, setShowBar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [atTop, setAtTop] = useState(true);
//   const topBarHeight = 80;

//   const pathname = usePathname();

//   // Ref to measure content height
//   const menuRef = useRef(null);
//   const [menuHeight, setMenuHeight] = useState(0);

//   // measure height when menu changes or window resizes
//   useEffect(() => {
//     const updateHeight = () => {
//       if (menuRef.current) {
//         setMenuHeight(menuRef.current.scrollHeight);
//       }
//     };
//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, [isNavOpen]);

//   // hide/show on scroll
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setAtTop(currentY <= topBarHeight);
//           if (currentY > lastScrollY && currentY > 100) setShowBar(false);
//           else setShowBar(true);
//           setLastScrollY(currentY);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Updated: Treat / and /sustainability the same
//   const isTransparentPage = pathname === "/" || pathname === "/sustainability";

//   const bgClass = isTransparentPage
//     ? atTop
//       ? "bg-transparent"
//       : "bg-black"
//     : atTop
//     ? "bg-white"
//     : "bg-black";

//   const borderClass = isTransparentPage
//     ? "border-0"
//     : "border-b border-gray-300";

//   return (
//     <div className="lg:!block !hidden">
//       {/* Top bar */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: showBar ? 0 : -topBarHeight }}
//         transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//         className={`fixed top-0 left-0 w-full transition-colors duration-500
//                     z-[100000] flex justify-between items-center
//                     px-[max(5%,calc((100vw-1340px)/2))] ${bgClass} ${borderClass}`}
//         style={{ height: topBarHeight }}
//       >
//         <div
//           className="flex items-center pr-4"
//           onClick={() => isNavOpen && setIsNavOpen(!isNavOpen)}
//           style={{ width: "60%", height: "100%" }}
//         >
//           <div className="w-[323px] flex gap-[14px]">
//             <Link href="/">
//               <motion.img
//                 key={
//                   isTransparentPage
//                     ? "Horizon_White"
//                     : atTop
//                     ? "Horizon_black"
//                     : "Horizon_White"
//                 }
//                 // initial={{ opacity: 0 }}
//                 // animate={{ opacity: 1 }}
//                 // exit={{ opacity: 0 }}
//                 // transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//                 className="max-w-full"
//                 src={
//                   isTransparentPage
//                     ? "/nav/Horizon_White.svg"
//                     : atTop
//                     ? "/nav/Horizon_black.svg"
//                     : "/nav/Horizon_White.svg"
//                 }
//                 alt="Hipark Logo"
//               />
//             </Link>
//             <a href="https://www.blackstone.com/" target="_blank">
//               <motion.img
//                 key={
//                   isTransparentPage
//                     ? "blackstone_white"
//                     : atTop
//                     ? "blackstone_black"
//                     : "blackstone_white"
//                 }
//                 // initial={{ opacity: 0 }}
//                 // animate={{ opacity: 1 }}
//                 // exit={{ opacity: 0 }}
//                 // transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//                 className="max-w-full"
//                 src={
//                   isTransparentPage
//                     ? "/nav/blackstone_white.svg"
//                     : atTop
//                     ? "/nav/blackstone_black.svg"
//                     : "/nav/blackstone_white.svg"
//                 }
//                 alt="Blackstone Logo"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Right controls */}
//         <div className="flex gap-2 items-center py-[20px] flex-[0.4] w-[40%] justify-end">
//           <SearchInput
//             isSearchOpen={isSearchOpen}
//             setIsSearchOpen={setIsSearchOpen}
//           />

//           {/* Menu toggle */}
//           <motion.div
//             initial={{
//               width: 92,
//               paddingLeft: "20px",
//               paddingRight: "20px",
//               paddingTop: "12px",
//               paddingBottom: "12px",
//             }}
//             animate={{
//               width: isNavOpen ? 40 : 92,
//               paddingLeft: isNavOpen ? "0px" : "20px",
//               paddingRight: isNavOpen ? "0px" : "20px",
//               paddingTop: isNavOpen ? "0px" : "12px",
//               paddingBottom: isNavOpen ? "0px" : "12px",
//             }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className="flex bg-[#2a2a2a] px-5 py-3 items-center justify-center rounded-[4px] h-10 cursor-pointer"
//           >
//             <motion.span
//               initial={{ opacity: 1, width: "37px" }}
//               animate={{
//                 opacity: isNavOpen ? 0 : 1,
//                 width: isNavOpen ? 0 : "37px",
//               }}
//               transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//               className="text-white bw-m uppercase flex justify-start text-[10px] overflow-hidden"
//             >
//               Menu
//             </motion.span>
//             <div className="max-w-4 min-w-4 h-4 flex items-center">
//               {isNavOpen ? (
//                 <CloseMenu isOpen={isNavOpen} />
//               ) : (
//                 <MenuIcon isOpen={isNavOpen} />
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Mega Menu */}
//       <TopDropF
//         isNavOpen={isNavOpen}
//         setIsNavOpen={setIsNavOpen}
//         isSearchOpen={isSearchOpen}
//         setIsSearchOpen={setIsSearchOpen}
//       />
//     </div>
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
//
//
//
//
//
//
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import SearchIcon from "../icons/SearchIcon";
// import MenuIcon from "../icons/MenuIcon";
// import CloseMenu from "../icons/CloseMenu";
// import TopDropF from "./TopDropF";
// import { useNav } from "@/src/app/context/NavContext";
// import SearchInput from "./SearchInput";

// export default function TopBarF() {
//   const { isNavOpen, setIsNavOpen } = useNav();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [showBar, setShowBar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [atTop, setAtTop] = useState(false);

//   const topBarHeight = 80;

//   const pathname = usePathname();

//   // Ref to measure content height
//   const menuRef = useRef(null);
//   const [menuHeight, setMenuHeight] = useState(0);

//   // measure height when menu changes or window resizes
//   useEffect(() => {
//     const updateHeight = () => {
//       if (menuRef.current) {
//         setMenuHeight(menuRef.current.scrollHeight);
//       }
//     };
//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, [isNavOpen]);

//   // FIXED SCROLL LOGIC
//   useEffect(() => {
//     // Set correct state immediately on mount
//     const currentY = window.scrollY;

//     setAtTop(currentY <= topBarHeight);
//     setLastScrollY(currentY);

//     let ticking = false;

//     const handleScroll = () => {
//       const currentY = window.scrollY;

//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setAtTop(currentY <= topBarHeight);

//           if (currentY > lastScrollY && currentY > 100) {
//             setShowBar(false);
//           } else {
//             setShowBar(true);
//           }

//           setLastScrollY(currentY);
//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, pathname]);

//   // Treat / and /sustainability the same
//   const isTransparentPage = pathname === "/" || pathname === "/sustainability";

//   const bgClass = isTransparentPage
//     ? atTop
//       ? "bg-transparent"
//       : "bg-black"
//     : atTop
//       ? "bg-white"
//       : "bg-black";

//   const borderClass = isTransparentPage
//     ? "border-0"
//     : "border-b border-gray-300";

//   return (
//     <div className="lg:!block !hidden">
//       {/* Top bar */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: showBar ? 0 : -topBarHeight }}
//         transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//         className={`fixed top-0 left-0 w-full transition-colors duration-500
//                     z-[100000] flex justify-between items-center
//                     px-[max(5%,calc((100vw-1340px)/2))] ${bgClass} ${borderClass}`}
//         style={{ height: topBarHeight }}
//       >
//         <div
//           className="flex items-center pr-4"
//           onClick={() => isNavOpen && setIsNavOpen(!isNavOpen)}
//           style={{ width: "60%", height: "100%" }}
//         >
//           <div className="w-[323px] flex gap-[14px]">
//             <Link href="/">
//               <motion.img
//                 key={
//                   isTransparentPage
//                     ? "Horizon_White"
//                     : atTop
//                       ? "Horizon_black"
//                       : "Horizon_White"
//                 }
//                 className="max-w-full"
//                 src={
//                   isTransparentPage
//                     ? "/nav/Horizon_White.svg"
//                     : atTop
//                       ? "/nav/Horizon_black.svg"
//                       : "/nav/Horizon_White.svg"
//                 }
//                 alt="Hipark Logo"
//               />
//             </Link>

//             <a href="https://www.blackstone.com/" target="_blank">
//               <motion.img
//                 key={
//                   isTransparentPage
//                     ? "blackstone_white"
//                     : atTop
//                       ? "blackstone_black"
//                       : "blackstone_white"
//                 }
//                 className="max-w-full"
//                 src={
//                   isTransparentPage
//                     ? "/nav/blackstone_white.svg"
//                     : atTop
//                       ? "/nav/blackstone_black.svg"
//                       : "/nav/blackstone_white.svg"
//                 }
//                 alt="Blackstone Logo"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Right controls */}
//         <div className="flex gap-2 items-center py-[20px] flex-[0.4] w-[40%] justify-end">
//           <SearchInput
//             isSearchOpen={isSearchOpen}
//             setIsSearchOpen={setIsSearchOpen}
//           />

//           {/* Menu toggle */}
//           <motion.div
//             initial={{
//               width: 92,
//               paddingLeft: "20px",
//               paddingRight: "20px",
//               paddingTop: "12px",
//               paddingBottom: "12px",
//             }}
//             animate={{
//               width: isNavOpen ? 40 : 92,
//               paddingLeft: isNavOpen ? "0px" : "20px",
//               paddingRight: isNavOpen ? "0px" : "20px",
//               paddingTop: isNavOpen ? "0px" : "12px",
//               paddingBottom: isNavOpen ? "0px" : "12px",
//             }}
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className="flex bg-[#2a2a2a] px-5 py-3 items-center justify-center rounded-[4px] h-10 cursor-pointer"
//           >
//             <motion.span
//               initial={{ opacity: 1, width: "37px" }}
//               animate={{
//                 opacity: isNavOpen ? 0 : 1,
//                 width: isNavOpen ? 0 : "37px",
//               }}
//               transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//               className="text-white bw-m uppercase flex justify-start text-[10px] overflow-hidden"
//             >
//               Menu
//             </motion.span>

//             <div className="max-w-4 min-w-4 h-4 flex items-center">
//               {isNavOpen ? (
//                 <CloseMenu isOpen={isNavOpen} />
//               ) : (
//                 <MenuIcon isOpen={isNavOpen} />
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Mega Menu */}
//       <TopDropF
//         isNavOpen={isNavOpen}
//         setIsNavOpen={setIsNavOpen}
//         isSearchOpen={isSearchOpen}
//         setIsSearchOpen={setIsSearchOpen}
//       />
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "../icons/SearchIcon";
import MenuIcon from "../icons/MenuIcon";
import CloseMenu from "../icons/CloseMenu";
import TopDropF from "./TopDropF";
import { useNav } from "@/src/app/context/NavContext";
import SearchInput from "./SearchInput";

export default function TopBarF() {
  const { isNavOpen, setIsNavOpen } = useNav();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const [atTop, setAtTop] = useState(false);

  const topBarHeight = 80;

  const pathname = usePathname();

  // Use ref instead of state for scroll tracking
  const lastScrollY = useRef(0);

  // Ref to measure content height
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (menuRef.current) {
        setMenuHeight(menuRef.current.scrollHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isNavOpen]);

  // FIXED SCROLL HANDLING
  useEffect(() => {
    // Set correct initial state
    const currentY = window.scrollY;

    setAtTop(currentY <= topBarHeight);
    lastScrollY.current = currentY;

    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setAtTop(currentY <= topBarHeight);

          if (currentY > lastScrollY.current && currentY > 100) {
            setShowBar(false);
          } else {
            setShowBar(true);
          }

          lastScrollY.current = currentY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isTransparentPage = pathname === "/" || pathname === "/sustainability";

  const bgClass = isTransparentPage
    ? atTop
      ? "bg-transparent"
      : "bg-black"
    : atTop
      ? "bg-white"
      : "bg-black";

  const borderClass = isTransparentPage
    ? "border-0"
    : "border-b border-gray-300";

  return (
    <div className="lg:!block !hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showBar ? 0 : -topBarHeight }}
        transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
        className={`fixed top-0 left-0 w-full transition-colors duration-500
                    z-[100000] flex justify-between items-center
                    px-[max(5%,calc((100vw-1340px)/2))] ${bgClass} ${borderClass}`}
        style={{ height: topBarHeight }}
      >
        <div
          className="flex items-center pr-4"
          onClick={() => isNavOpen && setIsNavOpen(!isNavOpen)}
          style={{ width: "60%", height: "100%" }}
        >
          <div className="w-[323px] flex gap-[14px]">
            <Link href="/">
              <motion.img
                key={
                  isTransparentPage
                    ? "Horizon_White"
                    : atTop
                      ? "Horizon_black"
                      : "Horizon_White"
                }
                className="max-w-full"
                src={
                  isTransparentPage
                    ? "/nav/Horizon_White.svg"
                    : atTop
                      ? "/nav/Horizon_black.svg"
                      : "/nav/Horizon_White.svg"
                }
                alt="Hipark Logo"
              />
            </Link>

            <a href="https://www.blackstone.com/" target="_blank">
              <motion.img
                key={
                  isTransparentPage
                    ? "blackstone_white"
                    : atTop
                      ? "blackstone_black"
                      : "blackstone_white"
                }
                className="max-w-full"
                src={
                  isTransparentPage
                    ? "/nav/blackstone_white.svg"
                    : atTop
                      ? "/nav/blackstone_black.svg"
                      : "/nav/blackstone_white.svg"
                }
                alt="Blackstone Logo"
              />
            </a>
          </div>
        </div>

        <div className="flex gap-2 items-center py-[20px] flex-[0.4] w-[40%] justify-end">
          <SearchInput
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />

          <motion.div
            initial={{
              width: 92,
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            animate={{
              width: isNavOpen ? 40 : 92,
              paddingLeft: isNavOpen ? "0px" : "20px",
              paddingRight: isNavOpen ? "0px" : "20px",
              paddingTop: isNavOpen ? "0px" : "12px",
              paddingBottom: isNavOpen ? "0px" : "12px",
            }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="flex bg-[#2a2a2a] px-5 py-3 items-center justify-center rounded-[4px] h-10 cursor-pointer"
          >
            <motion.span
              initial={{ opacity: 1, width: "37px" }}
              animate={{
                opacity: isNavOpen ? 0 : 1,
                width: isNavOpen ? 0 : "37px",
              }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              className="text-white bw-m uppercase flex justify-start text-[10px] overflow-hidden"
            >
              Menu
            </motion.span>

            <div className="max-w-4 min-w-4 h-4 flex items-center">
              {isNavOpen ? (
                <CloseMenu isOpen={isNavOpen} />
              ) : (
                <MenuIcon isOpen={isNavOpen} />
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <TopDropF
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </div>
  );
}
