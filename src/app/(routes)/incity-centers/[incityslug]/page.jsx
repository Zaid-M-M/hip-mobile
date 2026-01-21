// import PDMain from "@/components/incitydetail/PDMain";
// import { notFound } from "next/navigation";

// // ✅ Force SSR, disable cache
// export const dynamic = "force-dynamic";

// const BASE =
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

// /**
//  * ✅ Fetch park by slug (reliable + defensive)
//  */
// async function fetchParkBySlug(slug) {
//   try {
//     const res = await fetch(
//       `${BASE}/incity_parks?slug=${encodeURIComponent(slug)}`,
//       { cache: "no-store" }
//     );

//     if (!res.ok) {
//       throw new Error(`Failed to fetch incity_parks: ${res.status}`);
//     }

//     const json = await res.json();

//     if (!Array.isArray(json) || json.length === 0) return null;

//     // Find exact slug match or fallback to first
//     const match = json.find((item) => item.slug === slug) || json[0];
//     return match || null;
//   } catch (err) {
//     console.error("fetchParkBySlug error:", err);
//     return null;
//   }
// }

// /**
//  * ✅ Fetch all parks (for related sections)
//  */
// async function fetchAllParks() {
//   try {
//     let allParks = [];
//     let page = 1;
//     let totalPages = 1;

//     do {
//       const res = await fetch(
//         `${BASE}/incity_parks?per_page=100&page=${page}`,
//         {
//           cache: "no-store",
//         }
//       );

//       if (!res.ok) {
//         console.error(
//           `fetchAllParks failed: Status ${res.status} ${res.statusText}, page ${page}`
//         );
//         break;
//       }

//       const data = await res.json();
//       allParks = [...allParks, ...data];
//       totalPages = parseInt(res.headers.get("X-WP-TotalPages")) || 1;
//       page++;
//     } while (page <= totalPages);

//     return allParks;
//   } catch (err) {
//     console.error("fetchAllParks error:", err);
//     return [];
//   }
// }

// /**
//  * ✅ Page component
//  */
// export default async function InCityParkPage({ params }) {
//   const { incityslug } = await params;

//   if (!incityslug) {
//     notFound();
//   }

//   const park = await fetchParkBySlug(incityslug);

//   if (!park) {
//     notFound();
//   }

//   const allParks = await fetchAllParks();
//   console.log(
//     "parkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkpark",
//     park
//   );
//   return <PDMain park={park} allParks={allParks} />;
// }
import PDMain from "@/components/incitydetail/PDMain";
import { notFound } from "next/navigation";

// Force SSR, disable cache
export const dynamic = "force-dynamic";

const BASE =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

/**
 * Reuse the same formatting logic as in your components
 */
function formatMediaUrl(url) {
  if (!url) return "";
  return url.replace(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads",
    "/wp-content/uploads"
  );
}

/**
 * Fetch park by slug
 */
async function fetchParkBySlug(slug) {
  try {
    const res = await fetch(
      `${BASE}/incity_parks?slug=${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch incity_parks: ${res.status}`);
    }

    const json = await res.json();

    if (!Array.isArray(json) || json.length === 0) return null;

    return json.find((item) => item.slug === slug) || json[0];
  } catch (err) {
    console.error("fetchParkBySlug error:", err);
    return null;
  }
}

/**
 * Fetch all parks
 */
async function fetchAllParks() {
  try {
    let allParks = [];
    let page = 1;
    let totalPages = 1;

    do {
      const res = await fetch(
        `${BASE}/incity_parks?per_page=100&page=${page}`,
        { cache: "no-store" }
      );

      if (!res.ok) break;

      const data = await res.json();
      allParks = [...allParks, ...data];
      totalPages = parseInt(res.headers.get("X-WP-TotalPages")) || 1;
      page++;
    } while (page <= totalPages);

    return allParks;
  } catch {
    return [];
  }
}

/* -----------------------------------------------------------
   ✅ generateMetadata WITH OG IMAGE
----------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const { incityslug } = await params;

  const park = await fetchParkBySlug(incityslug);

  if (!park) {
    return {
      title: "Park Not Found",
      description: "The requested park page could not be found.",
    };
  }

  // Meta Title & Description
  const metaTitle =
    park.acf?.incity_meta_title || park.title?.rendered || "InCity Centers";

  const metaDescription =
    park.acf?.incity_meta_description || "Park details and information.";

  // OG IMAGE from ACF (string or object)
  let rawOgImage =
    typeof park.acf?.incity_spotlight_image === "string"
      ? park.acf?.incity_spotlight_image
      : park.acf?.incity_spotlight_image?.url ||
        park.acf?.incity_spotlight_image ||
        "";

  const ogImage = formatMediaUrl(rawOgImage);

  return {
    title: metaTitle,
    description: metaDescription,

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      url: `https://yourdomain.com/incity/${incityslug}`,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: metaTitle,
            },
          ]
        : [],
    },

    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage] : [],
    },
  };
}

/* -----------------------------------------------------------
   PAGE COMPONENT
----------------------------------------------------------- */
export default async function InCityParkPage({ params }) {
  const { incityslug } = await params;

  if (!incityslug) {
    notFound();
  }

  const park = await fetchParkBySlug(incityslug);
  if (!park) {
    notFound();
  }

  const allParks = await fetchAllParks();

  return <PDMain park={park} allParks={allParks} />;
}
