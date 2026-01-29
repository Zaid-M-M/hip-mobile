// // src/components/search/search-utils.js

// export const PER_PAGE = 5;

// /**
//  * Strips HTML tags from a string.
//  */
// const stripHtml = (html) => {
//   if (typeof document === "undefined") return "";
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.innerText || div.textContent || "";
// };

// /**
//  * Safely gets the title string, prioritizing common WordPress fields.
//  */
// export const getTitle = (item) =>
//   item?.title?.rendered ?? item?.title ?? "Untitled";
// export const getLink = (item) => (item?.slug ? `/${item.slug}` : "#");
// /**
//  * Extracts a formatted content snippet, focusing on the search term's context.
//  */
// export const getContentSnippet = (item, searchTerm) => {
//   let fullText = item?.content?.rendered ?? item?.content ?? "";

//   if (!fullText) return "";

//   const plainText = stripHtml(fullText).trim();
//   if (!plainText) return "";

//   // Split into sentences (simple sentence splitting)
//   const sentences = plainText
//     .split(". ")
//     .map((s) => s.trim())
//     .filter((s) => s.length > 0);

//   if (sentences.length === 0) return "";

//   let startIndex = 0;

//   // Find the relevant sentence to start the excerpt from
//   if (searchTerm) {
//     const lowerSearch = searchTerm.toLowerCase();
//     for (let i = 0; i < sentences.length; i++) {
//       if (sentences[i].toLowerCase().includes(lowerSearch)) {
//         startIndex = i;
//         break;
//       }
//     }
//   }

//   const endIndex = Math.min(startIndex + 4, sentences.length);
//   const snippetSentences = sentences.slice(startIndex, endIndex);
//   let snippetText = snippetSentences.join(". ");

//   // Add ellipsis for truncation
//   const prefix = startIndex > 0 ? "... " : "";
//   const suffix = endIndex < sentences.length ? " ..." : "";

//   return prefix + snippetText + suffix;
// };

// /**
//  * Returns a dummy link placeholder.
//  */

// /**
//  * Gets the featured image URL.
//  */
// export const getImage = (item) => {
//   if (item?.featured_media && typeof item.featured_media !== "number") {
//     return item.featured_media;
//   }
//   return item?.image ?? item?.acf?.image ?? null;
// };

// /**
//  * Formats the date string.
//  */
// export const getDate = (item) =>
//   item?.date
//     ? new Date(item.date).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       })
//     : "";

// /**
//  * Fetches search results from all endpoints concurrently.
//  */
// export async function fetchCombinedResults(API_ENDPOINTS, q) {
//   try {
//     const fetchPromises = API_ENDPOINTS.map((endpoint) => {
//       // Encode the search query for the API URL
//       const url = `${endpoint}?search=${encodeURIComponent(q)}&per_page=20`;
//       return fetch(url, { cache: "no-store" })
//         .then((res) => {
//           if (!res.ok) return [];
//           return res.json();
//         })
//         .then((data) => (Array.isArray(data) ? data : []))
//         .catch(() => []); // Ignore errors from individual endpoints
//     });

//     const resultsArrays = await Promise.all(fetchPromises);
//     return resultsArrays.flat(); // Combine all successful results
//   } catch (error) {
//     // This catch block handles errors from Promise.all itself, not individual fetches
//     throw new Error("Failed to fetch search results from all endpoints.");
//   }
// }

// /**
//  * Creates a navigation function (factory pattern for dependency injection).
//  */
// export const goToPageFactory = (router, rawQ, totalPages) => (p) => {
//   const targetPage = Math.max(1, Math.min(p, totalPages));

//   // Use the rawQ parameter for the URL segment to maintain encoding consistency
//   const basePath = `/search/${rawQ}`;
//   const queryParams = new URLSearchParams();
//   if (targetPage > 1) queryParams.set("page", String(targetPage));
//   const queryString = queryParams.toString();
//   router.push(queryString ? `${basePath}?${queryString}` : basePath);
// };

// // --- Pagination UI Helpers ---

// /**
//  * Renders the pagination buttons.
//  */
// export const renderPageButtons = (page, totalPages, goToPage) => {
//   const windowSize = 5;
//   const half = Math.floor(windowSize / 2);
//   let start = Math.max(1, page - half);
//   let end = Math.min(totalPages, start + windowSize - 1);

//   if (end - start < windowSize - 1) {
//     start = Math.max(1, end - windowSize + 1);
//   }

//   const baseClass = "px-3 py-1 border cursor-pointer";

//   const buttons = [];
//   for (let i = start; i <= end; i += 1) {
//     buttons.push(
//       <button
//         key={i}
//         onClick={() => goToPage(i)}
//         className={`${baseClass} ${
//           i === page
//             ? "bg-[#F47922] hover:bg-[#F47922] text-black"
//             : " hover:bg-[#F47922]/10"
//         }`}
//       >
//         {i}
//       </button>
//     );
//   }

//   const items = [];
//   if (start > 1) {
//     items.push(
//       <button key="1" onClick={() => goToPage(1)} className={baseClass}>
//         1
//       </button>
//     );
//     if (start > 2)
//       items.push(
//         <span key="left-ellipsis" className="px-2">
//           …
//         </span>
//       );
//   }
//   items.push(...buttons);
//   if (end < totalPages) {
//     if (end < totalPages - 1)
//       items.push(
//         <span key="right-ellipsis" className="px-2">
//           …
//         </span>
//       );
//     items.push(
//       <button
//         key={totalPages}
//         onClick={() => goToPage(totalPages)}
//         className={baseClass}
//       >
//         {totalPages}
//       </button>
//     );
//   }
//   return items;
// };

// // --- Button Class Helpers ---

// export const getButtonClass = (disabled) =>
//   `px-3 py-1 border cursor-pointer transition-opacity duration-150 ${
//     disabled ? "opacity-50 pointer-events-none" : "hover:bg-[#F47922]/10"
//   }`;
// src/components/search/search-utils.js

export const PER_PAGE = 5;

/**
 * Strips HTML tags from a string.
 */
const stripHtml = (html) => {
  if (typeof document === "undefined") return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.innerText || div.textContent || "";
};

/**
 * Safely gets the title string, prioritizing common WordPress fields.
 */
export const getTitle = (item) =>
  item?.title?.rendered ?? item?.title ?? "Untitled";

// --- START OF UPDATED getLink FUNCTION ---

/**
 * Gets the frontend URL based on the item's post type (item.type) and slug.
 */
export const getLink = (item) => {
  const slug = item?.slug;
  const type = item?.type;

  if (!type) {
    // Default fallback if type is missing
    return slug ? `/${slug}` : "#";
  }

  // Handle common post types with slug-based paths
  if (slug) {
    switch (type) {
      case "client_stories":
        return `/case-studies/${slug}`;
      case "incity_parks":
        return `/incity-centers/${slug}`;
      case "post":
        return `/blog/${slug}`;
      case "media_news":
        return `/news/${slug}`;
      case "press_release":
        return `/press-release/${slug}`;
      case "parks":
      case "states":
        return `/${slug}`; // Directly use slug for these types
      default:
        // Default for any item with a slug that doesn't match a specific pattern
        return `/${slug}`;
    }
  }

  // Handle items that link to a static page or hub
  switch (type) {
    case "events":
      return `/insights?tab=events`;
    case "career_page":
      return `/culture`;
    case "customers_speak":
      return `/case-studies`;
    case "goa_micro_blog":
    case "delhi_micro_blog":
    case "gujarat_micro_blog":
    case "tamil_nadu_micro_blo":
    case "telangana_micro_blog":
    case "karnataka_micro_blog":
    case "haryana_micro_blog":
    case "maharasht_micro_blog":
    case "hyderabad_micro_blog":
      // These all map to the root page or generic sections
      return `/`;
    default:
      // Fallback for types without slug or without specific path mapping
      return "#";
  }
};

// --- END OF UPDATED getLink FUNCTION ---

/**
 * Extracts a formatted content snippet, focusing on the search term's context.
 */
export const getContentSnippet = (item, searchTerm) => {
  let fullText = item?.content?.rendered ?? item?.content ?? "";

  if (!fullText) return "";

  const plainText = stripHtml(fullText).trim();
  if (!plainText) return "";

  // Split into sentences (simple sentence splitting)
  const sentences = plainText
    .split(". ")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  if (sentences.length === 0) return "";

  let startIndex = 0;

  // Find the relevant sentence to start the excerpt from
  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    for (let i = 0; i < sentences.length; i++) {
      if (sentences[i].toLowerCase().includes(lowerSearch)) {
        startIndex = i;
        break;
      }
    }
  }

  const endIndex = Math.min(startIndex + 4, sentences.length);
  const snippetSentences = sentences.slice(startIndex, endIndex);
  let snippetText = snippetSentences.join(". ");

  // Add ellipsis for truncation
  const prefix = startIndex > 0 ? "... " : "";
  const suffix = endIndex < sentences.length ? " ..." : "";

  return prefix + snippetText + suffix;
};

/**
 * Gets the featured image URL.
 */
export const getImage = (item) => {
  if (item?.featured_media && typeof item.featured_media !== "number") {
    return item.featured_media;
  }
  return item?.image ?? item?.acf?.image ?? null;
};

/**
 * Formats the date string.
 */
export const getDate = (item) =>
  item?.date
    ? new Date(item.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

/**
 * Fetches search results from all endpoints concurrently.
 */
export async function fetchCombinedResults(API_ENDPOINTS, q) {
  try {
    const fetchPromises = API_ENDPOINTS.map((endpoint) => {
      // Encode the search query for the API URL
      const url = `${endpoint}?search=${encodeURIComponent(q)}&per_page=20`;
      return fetch(url, { cache: "no-store" })
        .then((res) => {
          if (!res.ok) return [];
          return res.json();
        })
        .then((data) => (Array.isArray(data) ? data : []))
        .catch(() => []); // Ignore errors from individual endpoints
    });

    const resultsArrays = await Promise.all(fetchPromises);
    return resultsArrays.flat(); // Combine all successful results
  } catch (error) {
    // This catch block handles errors from Promise.all itself, not individual fetches
    throw new Error("Failed to fetch search results from all endpoints.");
  }
}

/**
 * Creates a navigation function (factory pattern for dependency injection).
 */
export const goToPageFactory = (router, rawQ, totalPages) => (p) => {
  const targetPage = Math.max(1, Math.min(p, totalPages));

  // Use the rawQ parameter for the URL segment to maintain encoding consistency
  const basePath = `/search/${rawQ}`;
  const queryParams = new URLSearchParams();
  if (targetPage > 1) queryParams.set("page", String(targetPage));
  const queryString = queryParams.toString();
  router.push(queryString ? `${basePath}?${queryString}` : basePath);
};

// --- Pagination UI Helpers ---

/**
 * Renders the pagination buttons.
 */
export const renderPageButtons = (page, totalPages, goToPage) => {
  let windowSize = 5;
  const half = Math.floor(windowSize / 2);
  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, start + windowSize - 1);

  if (end - start < windowSize - 1) {
    start = Math.max(1, end - windowSize + 1);
  }

  // const baseClass = "px-3 py-1 border cursor-pointer";
  const baseClass = "px-3 py-1 border cursor-pointer shrink-0";
  if (window.innerWidth >= 320) {
    windowSize = 3;
    start = page;
    end = Math.min(totalPages, start + windowSize - 1);
  } else if (window.innerWidth >= 500) {
    windowSize = 3;
    start = Math.max(1, page - 1);
    end = Math.min(totalPages, start + windowSize - 1);
  } else if (window.innerWidth >= 768) {
    windowSize = 4;
    start = Math.max(1, page - 1);
    end = Math.min(totalPages, start + windowSize - 1);
  } else if (window.innerWidth < 1024) {
    windowSize = 5;
    start = Math.max(1, page - 2);
    end = Math.min(totalPages, start + windowSize - 1);
  }
  const buttons = [];
  for (let i = start; i <= end; i += 1) {
    buttons.push(
      <button
        key={i}
        onClick={() => goToPage(i)}
        className={`${baseClass} ${
          i === page
            ? "bg-[#F47922] hover:bg-[#F47922] text-black"
            : " hover:bg-[#F47922]/10"
        }`}
      >
        {i}
      </button>,
    );
  }

  const items = [];
  if (start > 1) {
    items.push(
      <button key="1" onClick={() => goToPage(1)} className={baseClass}>
        1
      </button>,
    );
    if (start > 2)
      items.push(
        <span key="left-ellipsis" className="lg:px-2 px-0 py-1">
          …
        </span>,
      );
  }
  items.push(...buttons);
  if (end < totalPages) {
    if (end < totalPages - 1)
      items.push(
        <span key="right-ellipsis" className="lg:px-2 px-0 py-1">
          …
        </span>,
      );
    items.push(
      <button
        key={totalPages}
        onClick={() => goToPage(totalPages)}
        className={baseClass}
      >
        {totalPages}
      </button>,
    );
  }
  return items;
};

// --- Button Class Helpers ---

export const getButtonClass = (disabled) =>
  `px-3 py-1 border cursor-pointer transition-opacity duration-150 ${
    disabled ? "opacity-50 pointer-events-none" : "hover:bg-[#F47922]/10"
  }`;
