// import { readdir } from "fs/promises";
// import { join } from "path";

// const BASE_URL = (
//   process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
// ).replace(/\/$/, "");
// const ROUTES_ROOT = join(process.cwd(), "src", "app", "(routes)"); // change to 'app' if no src folder

// async function getAllPages(dir, currentPath = "") {
//   const urls = [];

//   try {
//     const entries = await readdir(dir, { withFileTypes: true });

//     for (const entry of entries) {
//       const fullPath = join(dir, entry.name);

//       if (entry.isDirectory()) {
//         urls.push(
//           ...(await getAllPages(fullPath, join(currentPath, entry.name)))
//         );
//       } else if (entry.name === "page.js" || entry.name === "page.jsx") {
//         let url = currentPath || "/";
//         if (url.endsWith("/page") || url.endsWith("/index")) {
//           url = url.replace(/\/(page|index)$/, "");
//         }
//         url = url || "/";

//         if (!url.includes("[") && !url.includes("]")) {
//           urls.push(url);
//         }
//       }
//     }
//   } catch (err) {
//     console.error("Sitemap scan error:", err.message);
//   }

//   return [...new Set(urls)].sort();
// }

// export async function GET() {
//   const urls = await getAllPages(ROUTES_ROOT);

//   const xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${urls
//   .map((url) => {
//     const fullUrl = url === "/" ? BASE_URL : `${BASE_URL}/${url}`;
//     return `<url>
//   <loc>${fullUrl}</loc>
//   <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
//   <changefreq>daily</changefreq>
//   <priority>${url === "/" ? "1.0" : "0.8"}</priority>
// </url>`;
//   })
//   .join("\n")}
// </urlset>`;

//   return new Response(xml.trim(), {
//     headers: {
//       "Content-Type": "application/xml",
//       "Cache-Control": "s-maxage=3600, stale-while-revalidate",
//     },
//   });
// }
import { readdir } from "fs/promises";
import { join } from "path";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hiparks.com/"
).replace(/\/$/, "");
const ROUTES_ROOT = join(process.cwd(), "src", "app", "(routes)"); // change to 'app' if no src folder

const BLOG_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts";
const NEWS_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/media_news";
const PRESS_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release";
const CS_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories";
const IND_PARK_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";
const STATES_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states";
const INCITY_PARK_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/incity_parks";
// TODO: Add CASE_STUDIES_API if available, e.g., "https://.../wp-json/wp/v2/case_studies";

async function fetchAllFromApi(baseUrl) {
  let allItems = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const url = `${baseUrl}?per_page=${perPage}&page=${page}&status=publish`;
    const res = await fetch(url);
    if (!res.ok) break;
    const items = await res.json();
    if (items.length === 0) break;
    allItems.push(...items);
    const total = parseInt(res.headers.get("X-WP-Total") || "0");
    if (allItems.length >= total) break;
    page++;
  }

  return allItems;
}

async function getDynamicUrls() {
  const [blogs, news, press, case_studies, parks, states, incity_parks] =
    await Promise.all([
      fetchAllFromApi(BLOG_API),
      fetchAllFromApi(NEWS_API),
      fetchAllFromApi(PRESS_API),
      fetchAllFromApi(CS_API),
      fetchAllFromApi(IND_PARK_API),
      fetchAllFromApi(STATES_API),
      fetchAllFromApi(INCITY_PARK_API),
      // fetchAllFromApi(CASE_STUDIES_API), // Uncomment and implement once API is available
    ]);

  const dynamicUrls = [];

  // Blogs
  blogs.forEach((post) => {
    if (post.status === "publish" && post.slug) {
      dynamicUrls.push({
        url: `/blog/${post.slug}`,
        lastmod: post.modified.split("T")[0],
      });
    }
  });

  // News
  news.forEach((item) => {
    if (item.status === "publish" && item.slug) {
      dynamicUrls.push({
        url: `/news/${item.slug}`,
        lastmod: item.modified.split("T")[0],
      });
    }
  });

  // Press Releases
  press.forEach((item) => {
    if (item.status === "publish" && item.slug) {
      dynamicUrls.push({
        url: `/press-release/${item.slug}`,
        lastmod: item.modified.split("T")[0],
      });
    }
  });

  case_studies.forEach((item) => {
    if (item.status === "publish" && item.slug) {
      dynamicUrls.push({
        url: `/case-studies/${item.slug}`,
        lastmod: item.modified.split("T")[0],
      });
    }
  });

  parks.forEach((item) => {
    if (item.status === "publish" && item.slug) {
      dynamicUrls.push({
        url: `/${item.slug}`,
        lastmod: item.modified.split("T")[0],
      });
    }
  });

  states.forEach((item) => {
    if (item.status === "publish" && item.slug) {
      dynamicUrls.push({
        url: `/${item.slug}`,
        lastmod: item.modified.split("T")[0],
      });
    }
  });

  incity_parks.forEach((item) => {
    if (item.status === "publish" && item.slug) {
      dynamicUrls.push({
        url: `/incity-centers/${item.slug}`,
        lastmod: item.modified.split("T")[0],
      });
    }
  });

  // Case Studies (placeholder)
  // caseStudies.forEach((item) => {
  //   if (item.status === "publish" && item.slug) {
  //     dynamicUrls.push({
  //       url: `/case-studies/${item.slug}`,
  //       lastmod: item.modified.split("T")[0],
  //     });
  //   }
  // });

  return dynamicUrls;
}

async function getAllPages(dir, currentPath = "") {
  const urls = [];

  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        urls.push(
          ...(await getAllPages(fullPath, join(currentPath, entry.name)))
        );
      } else if (entry.name === "page.js" || entry.name === "page.jsx") {
        let url = currentPath || "/";
        if (url.endsWith("/page") || url.endsWith("/index")) {
          url = url.replace(/\/(page|index)$/, "");
        }
        url = url || "/";

        if (!url.includes("[") && !url.includes("]")) {
          urls.push(url);
        }
      }
    }
  } catch (err) {
    console.error("Sitemap scan error:", err.message);
  }

  return [...new Set(urls)].sort();
}

export async function GET() {
  const staticUrls = await getAllPages(ROUTES_ROOT);
  const staticEntries = staticUrls.map((url) => ({
    url,
    lastmod: new Date().toISOString().split("T")[0],
  }));

  let dynamicEntries = [];
  try {
    dynamicEntries = await getDynamicUrls();
  } catch (err) {
    console.error("Dynamic sitemap fetch error:", err.message);
    // Proceed with static only on error
  }

  const allEntries = [...staticEntries, ...dynamicEntries].sort((a, b) =>
    a.url.localeCompare(b.url)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(({ url, lastmod }) => {
    const fullUrl =
      url === "/"
        ? BASE_URL
        : `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
    const priority = url === "/" ? "1.0" : "0.8";
    return `<url>
  <loc>${fullUrl}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>daily</changefreq>
  <priority>${priority}</priority>
</url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
