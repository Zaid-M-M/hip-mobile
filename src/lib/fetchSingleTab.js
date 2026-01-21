// // lib/fetchSingleTab.js
// import { formatCaseStudies } from "@/src/utils/formatters/formatCaseStudies";
// import { formatEvents } from "@/src/utils/formatters/formatEvents";
// import { formatNews } from "@/src/utils/formatters/formatNews";
// import { formatPosts } from "@/src/utils/formatters/formatPosts";
// import { formatPressRelease } from "@/src/utils/formatters/formatPressRelease";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

// // Map tabs to endpoints and formatters
// const tabMap = {
//   0: { endpoint: "/client_stories", formatter: formatCaseStudies }, // Case Studies
//   1: { endpoint: "/posts", formatter: formatPosts }, // Blog
//   2: { endpoint: "/media_news", formatter: formatNews }, // News
//   3: { endpoint: "/events", formatter: formatEvents }, // Events
//   4: { endpoint: "/press_release", formatter: formatPressRelease }, // Press Release
// };

// export async function fetchTabContent(tabIndex) {
//   const tab = tabMap[tabIndex];
//   if (!tab) return [];

//   try {
//     const res = await fetch(`${BASE_URL}${tab.endpoint}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

//     const data = await res.json();
//     return tab.formatter(data).slice(0, 5);
//   } catch (error) {
//     console.error("Error fetching tab content:", error);
//     return [];
//   }
// }
// lib/fetchSingleTab.js
import cmsApi from "@/src/lib/cmsApi";

// Import ALL formatters
import { formatCaseStudies } from "@/src/utils/formatters/formatCaseStudies";
import { formatPosts } from "@/src/utils/formatters/formatPosts";
import { formatNews } from "@/src/utils/formatters/formatNews";
import { formatEvents } from "@/src/utils/formatters/formatEvents";
import { formatPressRelease } from "@/src/utils/formatters/formatPressRelease";

// Map tab index → method + formatter
const methods = [
  "getClientStories",
  "getPosts",
  "getNewNews", // ← media_news
  "getEvents",
  "getPressReleases",
];

const formatters = [
  formatCaseStudies,
  formatPosts,
  formatNews,
  formatEvents,
  formatPressRelease,
];

export async function fetchTabContent(tabIndex) {
  const method = methods[tabIndex];
  const formatter = formatters[tabIndex];

  if (!method || !formatter) {
    console.warn(`Invalid tab index: ${tabIndex}`);
    return [];
  }

  try {
    const res = await cmsApi[method]({ per_page: 5, _embed: true });
    if (!res.success) {
      console.error(`Failed to fetch ${method}:`, res.error);
      return [];
    }
    return formatter(res.data);
  } catch (err) {
    console.error("fetchSingleTab error:", err);
    return [];
  }
}
