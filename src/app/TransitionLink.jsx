// "use client";
// import { useRouter, usePathname } from "next/navigation";
// import { usePageLoader } from "./context/PageLoaderProvider";
// import { useNav } from "./context/NavContext";

// /**
//  * A link component that supports smooth page transitions with loader,
//  * navbar closing, and optional new tab opening.
//  *
//  * @param {Object} props
//  * @param {string} props.href - The target URL
//  * @param {React.ReactNode} props.children - Link content
//  * @param {string} [props.className] - Optional CSS classes
//  * @param {boolean} [props.openInNewTab=false] - Open in new tab (bypasses loader & transition)
//  */
// export default function TransitionLink({
//   href,
//   children,
//   className,
//   openInNewTab = false,
// }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { startLoading } = usePageLoader();
//   const { isNavOpen, setIsNavOpen } = useNav();

//   const handleClick = (e) => {
//     e.preventDefault();

//     // 1. Open in new tab → skip everything
//     if (openInNewTab) {
//       window.open(href, "_blank", "noopener,noreferrer");
//       return;
//     }

//     // 2. Skip loader for invalid, empty, hash, or current page
//     if (
//       !href ||
//       href.trim() === "" ||
//       href.startsWith("#") ||
//       href === pathname
//     ) {
//       console.warn("Skipping loader for invalid or same-page link:", href);
//       return;
//     }

//     // 3. Close navbar if open
//     if (isNavOpen) {
//       setIsNavOpen(false);
//     }

//     // 4. Start page loader
//     startLoading(href);

//     // 5. Navigate with View Transition if supported
//     if (document.startViewTransition) {
//       document.startViewTransition(() => router.push(href));
//     } else {
//       router.push(href);
//     }
//   };

//   // Render <a> for new tab (native context menu works)
//   if (openInNewTab) {
//     return (
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`${className || ""} cursor-pointer`}
//       >
//         {children}
//       </a>
//     );
//   }

//   // Render <button> for internal navigation
//   return (
//     <button
//       onClick={handleClick}
//       className={`${className || ""} cursor-pointer`}
//       type="button"
//     >
//       {children}
//     </button>
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
// import { useRouter, usePathname } from "next/navigation";
// import { usePageLoader } from "./context/PageLoaderProvider";
// import { useNav } from "./context/NavContext";

// /**
//  * A link component that supports smooth page transitions with loader,
//  * navbar closing, and optional new tab opening.
//  *
//  * @param {Object} props
//  * @param {string} props.href - The target URL
//  * @param {React.ReactNode} props.children - Link content
//  * @param {string} [props.className] - Optional CSS classes
//  * @param {boolean} [props.openInNewTab=false] - Open in new tab (bypasses loader & transition)
//  */
// export default function TransitionLink({
//   href,
//   children,
//   className,
//   openInNewTab = false,
// }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { startLoading } = usePageLoader();
//   const { isNavOpen, setIsNavOpen } = useNav();

//   const handleClick = (e) => {
//     // -------------------------------------------------
//     // 1. Ctrl/Cmd + Click → open in new tab (skip loader)
//     // -------------------------------------------------
//     if (e.ctrlKey || e.metaKey) {
//       e.preventDefault();
//       window.open(href, "_blank", "noopener,noreferrer");
//       return;
//     }

//     // -------------------------------------------------
//     // 2. Explicit new-tab prop → skip everything
//     // -------------------------------------------------
//     if (openInNewTab) {
//       e.preventDefault();
//       window.open(href, "_blank", "noopener,noreferrer");
//       return;
//     }

//     // -------------------------------------------------
//     // 3. Skip loader for invalid, empty, hash, or current page
//     // -------------------------------------------------
//     if (
//       !href ||
//       href.trim() === "" ||
//       href.startsWith("#") ||
//       href === pathname
//     ) {
//       console.warn("Skipping loader for invalid or same-page link:", href);
//       return;
//     }

//     // -------------------------------------------------
//     // 4. Close navbar if open
//     // -------------------------------------------------
//     if (isNavOpen) {
//       setIsNavOpen(false);
//     }

//     // -------------------------------------------------
//     // 5. Start page loader
//     // -------------------------------------------------
//     startLoading(href);

//     // -------------------------------------------------
//     // 6. Navigate with View Transition if supported
//     // -------------------------------------------------
//     if (document.startViewTransition) {
//       document.startViewTransition(() => router.push(href));
//     } else {
//       router.push(href);
//     }
//   };

//   // -------------------------------------------------
//   // Render <a> for forced new-tab (native context menu)
//   // -------------------------------------------------
//   if (openInNewTab) {
//     return (
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`${className || ""} cursor-pointer`}
//       >
//         {children}
//       </a>
//     );
//   }

//   // -------------------------------------------------
//   // Render <button> for internal navigation
//   // -------------------------------------------------
//   return (
//     <button
//       onClick={handleClick}
//       className={`${className || ""} cursor-pointer`}
//       type="button"
//     >
//       {children}
//     </button>
//   );
// }

"use client";
import { useRouter, usePathname } from "next/navigation";
import { usePageLoader } from "./context/PageLoaderProvider";
import { useNav } from "./context/NavContext";

/**
 * A link component that supports smooth page transitions with loader,
 * navbar closing, and optional new tab opening.
 */
export default function TransitionLink({
  href,
  children,
  className,
  openInNewTab = false,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { startLoading } = usePageLoader();
  const { isNavOpen, setIsNavOpen } = useNav();

  const normalizePath = (url) => {
    try {
      const parsed = new URL(url, window.location.origin);
      return parsed.pathname.replace(/\/$/, "");
    } catch {
      return url.replace(/\/$/, "");
    }
  };

  const handleClick = (e) => {
    // -------------------------------------------------
    // 1. Ctrl/Cmd + Click → open in new tab (skip loader)
    // -------------------------------------------------
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    // -------------------------------------------------
    // 2. Explicit new-tab prop → skip everything
    // -------------------------------------------------
    if (openInNewTab) {
      e.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    // -------------------------------------------------
    // 3. Skip loader & navigation for invalid or same page
    // -------------------------------------------------
    if (!href || href.trim() === "" || href.startsWith("#")) {
      return;
    }

    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(href);

    if (currentPath === targetPath) {
      setIsNavOpen(false);
      return;
    }

    // -------------------------------------------------
    // 4. Close navbar if open
    // -------------------------------------------------
    if (isNavOpen) {
      setIsNavOpen(false);
    }

    // -------------------------------------------------
    // 5. Start page loader
    // -------------------------------------------------
    startLoading(href);

    // -------------------------------------------------
    // 6. Navigate with View Transition if supported
    // -------------------------------------------------
    if (document.startViewTransition) {
      document.startViewTransition(() => router.push(href));
    } else {
      router.push(href);
    }
  };

  // -------------------------------------------------
  // Render <a> for forced new-tab (native behavior)
  // -------------------------------------------------
  if (openInNewTab) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className || ""} cursor-pointer`}
      >
        {children}
      </a>
    );
  }

  // -------------------------------------------------
  // Render <button> for internal navigation
  // -------------------------------------------------
  return (
    <button
      onClick={handleClick}
      className={`${className || ""} cursor-pointer`}
      type="button"
    >
      {children}
    </button>
  );
}
