// import React from "react";
// import PDHero from "../components/PDHero";
// import PDContent from "../components/PDContent";
// import { ReactLenis } from "lenis/react";

// const page = async ({ params }) => {
//   const { slug } = await params;
//   return (
//     <ReactLenis root>
//       <div className="w-full min-h-screen bg-white">
//         <PDHero slug={slug} />
//         <PDContent slug={slug} />
//       </div>
//     </ReactLenis>
//   );
// };

// export default page;

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
// import React from "react";
// import { ReactLenis } from "lenis/react";
// import cmsApi from "@/src/lib/cmsApi";
// import PDHero from "../components/PDHero";
// import PDContent from "../components/PDContent";

// export default async function PressReleasePage({ params }) {
//   const { slug } = await params;

//   const pressResult = await cmsApi.getPressReleaseBySlug(slug);

//   if (!pressResult.success || !pressResult.data) {
//     return (
//       <ReactLenis root>
//         <div className="w-full min-h-screen bg-white flex items-center justify-center">
//           <div className="text-center">
//             <p className="bw-r text-[18px] text-[#666666]">
//               Press release not found
//             </p>
//           </div>
//         </div>
//       </ReactLenis>
//     );
//   }

//   const pressRelease = pressResult.data;

//   const relatedResult = await cmsApi.getPressReleases({
//     exclude: pressRelease.id,
//     per_page: 10,
//   });

//   const relatedPressReleases = relatedResult.success
//     ? relatedResult.data || []
//     : [];

//   return (
//     <ReactLenis root>
//       <div className="w-full min-h-screen bg-white">
//         <PDHero pressRelease={pressRelease} />
//         <PDContent
//           pressRelease={pressRelease}
//           relatedPressReleases={relatedPressReleases}
//         />
//       </div>
//     </ReactLenis>
//   );
// }
// app/press-release/[slug]/page.jsx

import React from "react";
import { ReactLenis } from "lenis/react";
import cmsApi from "@/src/lib/cmsApi";
import PDHero from "../components/PDHero";
import PDContent from "../components/PDContent";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

// Dynamic metadata — Next.js 16 App Router way
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const pressResult = await cmsApi.getPressReleaseBySlug(slug);

  // Not found fallback
  if (!pressResult.success || !pressResult.data) {
    return {
      title: "Press Release Not Found",
      description: "The requested press release could not be found.",
    };
  }

  const pressRelease = pressResult.data;
  const acf = pressRelease.acf || {};

  const metaTitle =
    acf.meta_title?.trim() || pressRelease.title?.rendered || "Press Release";
  const metaDescription =
    acf.meta_description?.trim() ||
    "Read the latest press release from Horizon Industrial Parks.";

  const ogImageUrl = acf.pr_spotlight_image
    ? formatMediaUrl(acf.pr_spotlight_image)
    : null;

  return {
    title: metaTitle,
    description: metaDescription,

    // Open Graph / Facebook
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      publishedTime: acf.pr_publish_date || undefined,
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630 }] : [],
      url: typeof window !== "undefined" ? window.location.href : undefined,
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },

    // Optional: robots, alternates, etc.
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Page component
export default async function PressReleasePage({ params }) {
  const { slug } = await params;

  const pressResult = await cmsApi.getPressReleaseBySlug(slug);

  if (!pressResult.success || !pressResult.data) {
    return (
      <ReactLenis root>
        <div className="w-full min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <p className="bw-r text-[18px] text-[#666666]">
              Press release not found
            </p>
          </div>
        </div>
      </ReactLenis>
    );
  }

  const pressRelease = pressResult.data;

  const relatedResult = await cmsApi.getPressReleases({
    exclude: pressRelease.id,
    per_page: 10,
  });

  const relatedPressReleases = relatedResult.success
    ? relatedResult.data || []
    : [];

  return (
    <ReactLenis root>
      <div className="w-full min-h-screen bg-white">
        <PDHero pressRelease={pressRelease} />
        <PDContent
          pressRelease={pressRelease}
          relatedPressReleases={relatedPressReleases}
        />
      </div>
    </ReactLenis>
  );
}
