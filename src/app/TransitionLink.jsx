// "use client";
// import { useRouter, usePathname } from "next/navigation";
// import { usePageLoader } from "./context/PageLoaderProvider";
// import { useNav } from "./context/NavContext";

// /**
//  * A link component that supports smooth page transitions with loader,
//  * navbar closing, and optional new tab opening.
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

//   const normalizePath = (url) => {
//     try {
//       const parsed = new URL(url, window.location.origin);
//       return parsed.pathname.replace(/\/$/, "");
//     } catch {
//       return url.replace(/\/$/, "");
//     }
//   };

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
//     // 3. Skip loader & navigation for invalid or same page
//     // -------------------------------------------------
//     if (!href || href.trim() === "") return;

//     // Handle Anchor/Hash links
//     if (href.startsWith("#")) {
//       setIsNavOpen(false);
//       const element = document.querySelector(href);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       } else {
//         window.location.hash = href;
//       }
//       return; // Stop here so loader never starts
//     }

//     const currentPath = normalizePath(pathname);
//     const targetPath = normalizePath(href);

//     // If target is the same page (but might have a hash like /about#team)
//     if (currentPath === targetPath.split("#")[0]) {
//       setIsNavOpen(false);

//       // If there's a hash in the URL, scroll to it manually
//       if (href.includes("#")) {
//         const hash = href.split("#")[1];
//         const element = document.getElementById(hash);
//         if (element) element.scrollIntoView({ behavior: "smooth" });
//       }
//       return; // Stop here to prevent infinite loader
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
//   // Render <a> for forced new-tab (native behavior)
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
// import { useRouter, usePathname } from "next/navigation";
// import { usePageLoader } from "./context/PageLoaderProvider";
// import { useNav } from "./context/NavContext";

// /**
//  * A link component that supports smooth page transitions with loader,
//  * navbar closing, and optional new tab opening.
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

//   const normalizePath = (url) => {
//     try {
//       const parsed = new URL(url, window.location.origin);
//       return parsed.pathname.replace(/\/$/, "");
//     } catch {
//       // Handle relative paths or just fragments
//       const pathOnly = url.split("#")[0];
//       return pathOnly.replace(/\/$/, "") || "/";
//     }
//   };

//   const handleSamePageAnchor = (targetHref) => {
//     setIsNavOpen(false);

//     // 1. Update the URL hash without triggering a page refresh or loader
//     window.history.pushState(null, "", targetHref);

//     // 2. Extract the ID and scroll
//     const hash = targetHref.includes("#") ? targetHref.split("#")[1] : null;
//     if (hash) {
//       const element = document.getElementById(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // If it's just "/" or no hash, scroll to top
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handleClick = (e) => {
//     // 1. Ctrl/Cmd + Click → open in new tab
//     if (e.ctrlKey || e.metaKey) return; // Let default browser behavior handle it

//     // 2. Explicit new-tab prop
//     if (openInNewTab) return;

//     // 3. Skip for invalid href
//     if (!href || href.trim() === "") {
//       e.preventDefault();
//       return;
//     }

//     // -------------------------------------------------
//     // Logic for Same-Page Anchors (e.g., #section or /current-path#section)
//     // -------------------------------------------------
//     const currentPath = normalizePath(pathname);
//     const targetPath = normalizePath(href);
//     const isAnchorOnly = href.startsWith("#");
//     const isSamePageAnchor = currentPath === targetPath && href.includes("#");

//     if (isAnchorOnly || isSamePageAnchor) {
//       e.preventDefault();
//       handleSamePageAnchor(href);
//       return;
//     }

//     // 4. Close navbar if open
//     if (isNavOpen) {
//       setIsNavOpen(false);
//     }

//     // 5. Start page loader and navigate
//     startLoading(href);

//     if (document.startViewTransition) {
//       document.startViewTransition(() => router.push(href));
//     } else {
//       router.push(href);
//     }
//   };

//   // Render <a> for forced new-tab (Native behavior)
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

//   // Render <button> for internal navigation to prevent default <a> jump
//   // but we use it like a link.
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
      // Create a URL object to reliably extract the pathname
      const parsed = new URL(url, window.location.origin);
      let p = parsed.pathname.replace(/\/$/, "");
      return p === "" ? "/" : p;
    } catch {
      // Fallback for relative paths/fragments
      let p = url.split("#")[0].split("?")[0].replace(/\/$/, "");
      if (p === "") return "/";
      return p;
    }
  };

  const handleSamePageAnchor = (targetHref) => {
    setIsNavOpen(false);

    // Update the URL hash (or remove it) without triggering a page refresh or loader
    window.history.pushState(null, "", targetHref);

    // Extract the ID and scroll
    const hash = targetHref.includes("#") ? targetHref.split("#")[1] : null;
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If navigating from /page#hash to /page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClick = (e) => {
    // 1. Let default behavior happen for modifier keys
    if (e.ctrlKey || e.metaKey) return;

    // 2. Explicit new-tab prop
    if (openInNewTab) return;

    // 3. Skip for invalid href
    if (!href || href.trim() === "") {
      e.preventDefault();
      return;
    }

    // -------------------------------------------------
    // Improved Same-Page Logic
    // -------------------------------------------------
    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(href);

    const isAnchorOnly = href.startsWith("#");
    // This is true if the base path is the same, regardless of hashes
    const isSameBasePage = currentPath === targetPath;

    if (isAnchorOnly || isSameBasePage) {
      e.preventDefault();
      handleSamePageAnchor(href);
      return;
    }

    // 4. Close navbar if open
    if (isNavOpen) {
      setIsNavOpen(false);
    }

    // 5. Start page loader and navigate (Only for actual new pages)
    startLoading(href);

    if (document.startViewTransition) {
      document.startViewTransition(() => router.push(href));
    } else {
      router.push(href);
    }
  };

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
