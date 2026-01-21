// // app/case-studies/[slug]/page.js
// import CaseStudyDetailWrapper from "@/components/case-studies/CaseStudyDetailWrapper";
// import { notFound } from "next/navigation";

// const BASE =
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

// async function fetchCaseStudy(slug) {
//   try {
//     const res = await fetch(`${BASE}/client_stories?slug=${slug}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) throw new Error("Failed to fetch case study");

//     const json = await res.json();

//     if (!json || json.length === 0) return null;

//     // Find exact slug match
//     const match = json.find((item) => item.slug === slug);
//     if (!match) return null;

//     // Return the ACF data directly (or format it here if needed)
//     return match.acf;
//   } catch (err) {
//     console.error("fetchCaseStudy error:", err);
//     return null;
//   }
// }

// export default async function CaseStudyPage({ params }) {
//   const { slug } = params;

//   const caseStudyData = await fetchCaseStudy(slug);

//   if (!caseStudyData) {
//     notFound();
//   }

//   return <CaseStudyDetailWrapper data={caseStudyData} slug={slug} />;
// }
// app/case-studies/[slug]/page.js
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
// import CaseStudyDetailWrapper from "@/components/case-studies/CaseStudyDetailWrapper";
// import { notFound } from "next/navigation";

// // Force SSR, no caching
// export const dynamic = "force-dynamic";

// const BASE =
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

// async function fetchCaseStudyBySlug(slug) {
//   try {
//     const res = await fetch(
//       `${BASE}/client_stories?slug=${encodeURIComponent(slug)}`,
//       {
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error(`Failed to fetch client_stories: ${res.status}`);
//     }

//     const json = await res.json(); // array (0 or 1+ items)

//     if (!Array.isArray(json) || json.length === 0) return null;

//     // Find exact slug match (defensive)
//     const match = json.find((item) => item.slug === slug) || json[0];

//     return match || null;
//   } catch (err) {
//     // Server-side log
//     console.error("fetchCaseStudyBySlug error:", err);
//     return null;
//   }
// }

// export default async function CaseStudyPage({ params }) {
//   // params in App Router is a Promise — await it
//   const { slug } = await params;

//   // Defensive: ensure slug exists
//   if (!slug) {
//     notFound();
//   }

//   const caseStudy = await fetchCaseStudyBySlug(slug);

//   if (!caseStudy) {
//     // This will render the 404 page
//     notFound();
//   }

//   // Server console log (will appear in your terminal where Next.js runs)
//   console.log(
//     "Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:Fetched case study:",
//     caseStudy
//   );
//   // Pass the whole post object to the wrapper. If the wrapper expects only ACF,
//   // change to `caseStudy.acf`.
//   return <CaseStudyDetailWrapper data={caseStudy} slug={slug} />;
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
// import CaseStudyDetailWrapper from "@/components/case-studies/CaseStudyDetailWrapper";
// import { notFound } from "next/navigation";
// import { Metadata } from "next";

// // Force SSR, no caching
// export const dynamic = "force-dynamic";

// const BASE =
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

// async function fetchCaseStudyBySlug(slug) {
//   try {
//     const res = await fetch(
//       `${BASE}/client_stories?slug=${encodeURIComponent(slug)}`,
//       {
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error(`Failed to fetch client_stories: ${res.status}`);
//     }

//     const json = await res.json(); // array (0 or 1+ items)

//     if (!Array.isArray(json) || json.length === 0) return null;

//     // Find exact slug match (defensive)
//     const match = json.find((item) => item.slug === slug) || json[0];

//     return match || null;
//   } catch (err) {
//     // Server-side log
//     console.error("fetchCaseStudyBySlug error:", err);
//     return null;
//   }
// }

// // Generate metadata for SEO & OG tags
// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const caseStudy = await fetchCaseStudyBySlug(slug);

//   if (!caseStudy) {
//     return {
//       title: "Case Study Not Found",
//       description: "The requested case study could not be found.",
//     };
//   }

//   const metaTitle =
//     caseStudy.acf?.meta_title || caseStudy.title?.rendered || "Case Study";
//   const metaDescription = caseStudy.acf?.meta_description || "";
//   const ogImage =
//     caseStudy.acf?.client_stories_image?.url ||
//     caseStudy.acf?.client_stories_image ||
//     "";

//   return {
//     title: metaTitle,
//     description: metaDescription,
//     openGraph: {
//       title: metaTitle,
//       description: metaDescription,
//       images: ogImage
//         ? [
//             {
//               url: ogImage,
//               width: 1200,
//               height: 630,
//               alt: metaTitle,
//             },
//           ]
//         : [],
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: metaTitle,
//       description: metaDescription,
//       images: ogImage ? [ogImage] : [],
//     },
//   };
// }

// export default async function CaseStudyPage({ params }) {
//   // params in App Router is a Promise — await it
//   const { slug } = await params;

//   // Defensive: ensure slug exists
//   if (!slug) {
//     notFound();
//   }

//   const caseStudy = await fetchCaseStudyBySlug(slug);

//   if (!caseStudy) {
//     // This will render the 404 page
//     notFound();
//   }

//   return <CaseStudyDetailWrapper data={caseStudy} slug={slug} />;
// }
import CaseStudyDetailWrapper from "@/components/case-studies/CaseStudyDetailWrapper";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Force SSR, no caching
export const dynamic = "force-dynamic";

const BASE =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

// Reuse the same formatting logic as in your components
function formatMediaUrl(url) {
  if (!url) return "";
  return url.replace(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads",
    "/wp-content/uploads"
  );
}

async function fetchCaseStudyBySlug(slug) {
  try {
    const res = await fetch(
      `${BASE}/client_stories?slug=${encodeURIComponent(slug)}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch client_stories: ${res.status}`);
    }

    const json = await res.json();

    if (!Array.isArray(json) || json.length === 0) return null;

    const match = json.find((item) => item.slug === slug) || json[0];

    return match || null;
  } catch (err) {
    console.error("fetchCaseStudyBySlug error:", err);
    return null;
  }
}

// Generate metadata for SEO & OG tags
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const caseStudy = await fetchCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  const metaTitle =
    caseStudy.acf?.meta_title || caseStudy.title?.rendered || "Case Study";
  const metaDescription = caseStudy.acf?.meta_description || "";

  // Extract raw image URL (could be string or object with .url)
  const rawOgImage =
    typeof caseStudy.acf?.client_stories_image === "string"
      ? caseStudy.acf?.client_stories_image
      : caseStudy.acf?.client_stories_image?.url ||
        caseStudy.acf?.client_stories_image ||
        "";

  // Rewrite OG image to go through frontend domain (same as body images)
  const ogImage = formatMediaUrl(rawOgImage);

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImage
        ? [
            {
              url: ogImage, // Now correctly served from your frontend domain
              width: 1200,
              height: 630,
              alt: metaTitle,
            },
          ]
        : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const caseStudy = await fetchCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  console.log("Fetched case study:".repeat(50), caseStudy);

  return <CaseStudyDetailWrapper data={caseStudy} slug={slug} />;
}
