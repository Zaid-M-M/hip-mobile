// "use client";

// import { useNav } from "./context/NavContext";
// import { usePathname } from "next/navigation";

// export default function ClientWrapper({ children }) {
//   const { isNavOpen } = useNav();
//   const pathname = usePathname();
//   const isHome = pathname === "/";
//   const isSustainability = pathname.startsWith("/sustainability");
//   return (
//     <main
//       className={`${isHome || isSustainability ? "" : "pt-[70px] xl:pt-20"} ${
//         (isNavOpen && !isHome) || (isNavOpen && !isSustainability)
//           ? "xl:mt-16"
//           : ""
//       }`}
//       style={{
//         // Maintain shift only for xl and above
//         marginTop:
//           typeof window !== "undefined" && window.innerWidth >= 1280
//             ? isNavOpen
//               ? isHome || isSustainability
//                 ? "100px"
//                 : "70px"
//               : "0"
//             : "0",
//         transition:
//           typeof window !== "undefined" && window.innerWidth >= 1280
//             ? isNavOpen
//               ? "margin-top 0.5s ease 0.3s"
//               : `margin-top 0.5s ease ${isHome ? "0.2s" : "0s"}`
//             : "none",
//       }}
//     >
//       {children}
//     </main>
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
// "use client";

// import { useNav } from "./context/NavContext";
// import { usePathname } from "next/navigation";
// import { useState, useLayoutEffect, useEffect } from "react";

// export default function ClientWrapper({ children }) {
//   const { isNavOpen } = useNav();
//   const pathname = usePathname();
//   const isHome = pathname === "/";
//   const isSustainability = pathname.startsWith("/sustainability");

//   const [mounted, setMounted] = useState(false);
//   const [isXl, setIsXl] = useState(false);

//   useLayoutEffect(() => {
//     setMounted(true);
//     if (typeof window !== "undefined") {
//       const mediaQuery = window.matchMedia("(min-width: 1280px)");
//       setIsXl(mediaQuery.matches);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const mediaQuery = window.matchMedia("(min-width: 1280px)");
//     const handleChange = (e) => setIsXl(e.matches);
//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   const marginTop =
//     mounted && isXl && isNavOpen
//       ? isHome || isSustainability
//         ? "100px"
//         : "70px"
//       : "0";

//   const transition =
//     mounted && isXl
//       ? isNavOpen
//         ? "margin-top 0.5s ease 0.3s"
//         : `margin-top 0.5s ease ${isHome ? "0.2s" : "0s"}`
//       : "none";

//   return (
//     <main
//       suppressHydrationWarning
//       className={`${isHome || isSustainability ? "" : "pt-[70px] xl:pt-20"} ${
//         (isNavOpen && !isHome) || (isNavOpen && !isSustainability)
//           ? "xl:mt-16"
//           : ""
//       }`}
//       style={{
//         marginTop,
//         transition,
//       }}
//     >
//       {children}
//     </main>
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
// "use client";

// import { useNav } from "./context/NavContext";
// import { usePathname } from "next/navigation";
// import { useState, useLayoutEffect, useEffect } from "react";

// export default function ClientWrapper({ children }) {
//   const { isNavOpen } = useNav();
//   const pathname = usePathname();
//   const isHome = pathname === "/";
//   const isSustainability = pathname.startsWith("/sustainability");

//   const [mounted, setMounted] = useState(false);
//   const [isXl, setIsXl] = useState(false);

//   useLayoutEffect(() => {
//     setMounted(true);
//     if (typeof window !== "undefined") {
//       const mediaQuery = window.matchMedia("(min-width: 1280px)");
//       setIsXl(mediaQuery.matches);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const mediaQuery = window.matchMedia("(min-width: 1280px)");
//     const handleChange = (e) => setIsXl(e.matches);
//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   const marginTop =
//     mounted && isXl && isNavOpen && !(isHome || isSustainability) // Skip for home/sus
//       ? "70px" // Or "100px" if you want the taller offset for non-home/sus
//       : "0";

//   const transition =
//     mounted && isXl && !(isHome || isSustainability) // Also gate transition behind the same condition
//       ? isNavOpen
//         ? "margin-top 0.5s ease 0.3s"
//         : `margin-top 0.5s ease ${isHome ? "0.2s" : "0s"}` // The inner ternary can stay, but it's now unreachable for home
//       : "none";

//   return (
//     <main
//       suppressHydrationWarning
//       className={`${isHome || isSustainability ? "" : "pt-[70px] xl:pt-20"} ${
//         isNavOpen && !isHome && !isSustainability // Tighten this to explicitly exclude sus too
//           ? "xl:mt-16"
//           : ""
//       }`}
//       style={{
//         marginTop,
//         transition,
//       }}
//     >
//       {children}
//     </main>
//   );
// }
"use client";

import { useNav } from "./context/NavContext";
import { usePathname } from "next/navigation";
import { useState, useLayoutEffect, useEffect } from "react";

export default function ClientWrapper({ children }) {
  const { isNavOpen } = useNav();
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isSustainability = pathname.startsWith("/sustainability");

  const [mounted, setMounted] = useState(false);
  const [isXl, setIsXl] = useState(false);

  // Ensure correct state before first paint
  useLayoutEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(min-width: 1280px)");
      setIsXl(mediaQuery.matches);
    }
  }, []);

  // Track XL breakpoint changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleChange = (e) => setIsXl(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Do NOT apply layout logic until mounted
  const marginTop =
    mounted && isXl && isNavOpen && !(isHome || isSustainability)
      ? "70px"
      : "0";

  const transition =
    mounted && isXl && !(isHome || isSustainability)
      ? "margin-top 0.5s ease 0.3s"
      : "none";

  return (
    <main
      suppressHydrationWarning
      className={
        !mounted
          ? "" // 🚫 Prevent hydration mismatch
          : `${isHome || isSustainability ? "" : "pt-[70px] xl:pt-20"} ${
              isNavOpen && !isHome && !isSustainability ? "xl:mt-16" : ""
            }`
      }
      style={
        !mounted
          ? undefined
          : {
              marginTop,
              transition,
            }
      }
    >
      {children}
    </main>
  );
}
