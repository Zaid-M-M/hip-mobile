// import { formatCaseStudies } from "@/utils/formatters/formatCaseStudies";
// import { formatEvents } from "@/utils/formatters/formatEvents";
// import { formatNews } from "@/utils/formatters/formatNews";
// import { formatPosts } from "@/utils/formatters/formatPosts";
// import { formatPressRelease } from "@/utils/formatters/formatPressRelease";
// import { tabTexts } from "@/utils/tabTexts";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

// const tabMap = {
//   0: { endpoint: "/client_stories", formatter: formatCaseStudies },
//   1: { endpoint: "/posts", formatter: formatPosts },
//   2: { endpoint: "/news", formatter: formatNews },
//   3: { endpoint: "/events", formatter: formatEvents },
//   4: { endpoint: "/press_release", formatter: formatPressRelease },
// };

// export async function fetchAllTabsContent() {
//   const results = await Promise.all(
//     Object.entries(tabMap).map(async ([index, { endpoint, formatter }]) => {
//       try {
//         const res = await fetch(`${BASE_URL}${endpoint}`, {
//           cache: "no-store",
//         });
//         const json = await res.json();

//         const cards = formatter(json).slice(0, 5);

//         const tabText = tabTexts[index];

//         return {
//           slug: tabText.name.toLowerCase().replace(/\s/g, "-"),
//           label: tabText.name,
//           title: tabText.title,
//           description: tabText.description,
//           cards,
//         };
//       } catch (error) {
//         console.error("Failed to fetch tab", index, error);
//         return null;
//       }
//     })
//   );

//   return results.filter(Boolean); // remove nulls
// }

// import { formatCaseStudies } from "@/src/utils/formatters/formatCaseStudies";
// import { formatEvents } from "@/src/utils/formatters/formatEvents";
// import { formatNews } from "@/src/utils/formatters/formatNews";
// import { formatPosts } from "@/src/utils/formatters/formatPosts";
// import { formatPressRelease } from "@/src/utils/formatters/formatPressRelease";
// import { tabTexts } from "@/src/utils/tabTexts";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

// const tabMap = {
//   0: { endpoint: "/client_stories", formatter: formatCaseStudies },
//   1: { endpoint: "/posts", formatter: formatPosts },
//   2: { endpoint: "/news", formatter: formatNews },
//   3: { endpoint: "/events", formatter: formatEvents },
//   4: { endpoint: "/press_release", formatter: formatPressRelease },
// };

// export async function fetchAllTabsContent() {
//   const results = await Promise.all(
//     Object.entries(tabMap).map(async ([index, { endpoint, formatter }]) => {
//       try {
//         console.log("Fetching:", `${BASE_URL}${endpoint}`);

//         const res = await fetch(`${BASE_URL}${endpoint}`, {
//           cache: "no-store",
//         });
//         const json = await res.json();

//         // Remove the slice(0, 5) to fetch all cards for mobile
//         const cards = formatter(json);

//         const tabText = tabTexts[index];

//         return {
//           slug: tabText.name.toLowerCase().replace(/\s/g, "-"),
//           label: tabText.name,
//           title: tabText.title,
//           description: tabText.description,
//           cards,
//         };
//       } catch (error) {
//         console.error("Failed to fetch tab", index, error);
//         return null;
//       }
//     })
//   );

//   return results.filter(Boolean); // remove nulls
// }

// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// lib/fetchAllTabsContent.js
// import { formatCaseStudies } from "@/src/utils/formatters/formatCaseStudies";
// import { formatEvents } from "@/src/utils/formatters/formatEvents";
// import { formatNews } from "@/src/utils/formatters/formatNews";
// import { formatPosts } from "@/src/utils/formatters/formatPosts";
// import { formatPressRelease } from "@/src/utils/formatters/formatPressRelease";
// import { tabTexts } from "@/src/utils/tabTexts";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

// const tabMap = {
//   0: { endpoint: "/client_stories", formatter: formatCaseStudies },
//   1: { endpoint: "/posts", formatter: formatPosts },
//   2: { endpoint: "/news", formatter: formatNews },
//   3: { endpoint: "/events", formatter: formatEvents },
//   4: { endpoint: "/press_release", formatter: formatPressRelease },
// };

// export async function fetchAllTabsContent() {
//   const results = await Promise.all(
//     Object.entries(tabMap).map(async ([index, { endpoint, formatter }]) => {
//       try {
//         const res = await fetch(`${BASE_URL}${endpoint}`, {
//           cache: "no-store",
//         });
//         if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);

//         const json = await res.json();
//         const cards = formatter(json); // format into unified card structure

//         const tabText = tabTexts[index]; // from utils/tabTexts.js

//         return {
//           slug: tabText.name.toLowerCase().replace(/\s/g, "-"),
//           label: tabText.name,
//           title: tabText.title,
//           description: tabText.description,
//           cards, // 👈 important for MobileTabbedContent
//         };
//       } catch (error) {
//         console.error("Failed to fetch tab", index, error);
//         return null;
//       }
//     })
//   );

//   return results.filter(Boolean);
// }
import cmsApi from "@/src/lib/cmsApi";

import { tabTexts } from "@/src/utils/tabTexts";
import { formatCaseStudies } from "../utils/formatters/formatCaseStudies";
import { formatPosts } from "../utils/formatters/formatPosts";
import { formatNews } from "../utils/formatters/formatNews";
import { formatEvents } from "../utils/formatters/formatEvents";
import { formatPressRelease } from "../utils/formatters/formatPressRelease";

const tabConfig = [
  { method: "getClientStories", formatter: formatCaseStudies },
  { method: "getPosts", formatter: formatPosts },
  { method: "getNewNews", formatter: formatNews },
  { method: "getEvents", formatter: formatEvents },
  { method: "getPressReleases", formatter: formatPressRelease },
];

export async function fetchAllTabsContent() {
  const results = await Promise.all(
    tabConfig.map(async (config, i) => {
      try {
        const res = await cmsApi[config.method]({ per_page: 5, _embed: true });
        if (!res.success) return null;

        const tabText = tabTexts[i];
        return {
          slug: tabText.name.toLowerCase().replace(/\s/g, "-"),
          label: tabText.name,
          title: tabText.title,
          description: tabText.description,
          cards: config.formatter(res.data),
        };
      } catch (err) {
        console.error(`Tab ${i} failed:`, err);
        return null;
      }
    })
  );

  return results.filter(Boolean);
}
