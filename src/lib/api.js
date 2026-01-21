// import { regionCategoryMap } from "./regionCategoryMap";

// export async function fetchAndCombineRegionData() {
//   const baseURL =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?categories=";

//   const regionEntries = await Promise.all(
//     Object.entries(regionCategoryMap).map(async ([regionKey, categoryId]) => {
//       const res = await fetch(`${baseURL}${categoryId}`, {
//         next: { revalidate: 60 },
//       });
//       const parks = await res.json();

//       return [
//         regionKey,
//         {
//           label: regionKey,
//           locations: parks.map((park) => ({
//             id: park.id,
//             label: park.title?.rendered || "",
//             city: park.acf?.state_name || "",
//             image: park.acf?.park_spotlight_image || park.acf?.photo?.[0] || "",
//             purpose: park.acf?.land_usage || "",
//             area: park.acf?.land_area || "",
//             potential: park.acf?.development_potential || "",
//             certification: park.acf?.construction_status || "",
//           })),
//         },
//       ];
//     })
//   );

//   return Object.fromEntries(regionEntries);
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
// import { regionCategoryMap } from "./regionCategoryMap";

// export async function fetchAndCombineRegionData() {
//   const baseURL =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?categories=";

//   const regionEntries = await Promise.all(
//     Object.entries(regionCategoryMap).map(async ([regionKey, categoryId]) => {
//       const res = await fetch(`${baseURL}${categoryId}`, {
//        cache:'no-sto'
//       });
//       const parks = await res.json();

//       return [
//         regionKey,
//         {
//           label: regionKey,
//           locations: parks.map((park) => ({
//             id: park.id,
//             label: park.title?.rendered || "",
//             city: park.acf?.state_name || "",
//             image:
//               park.acf?.park_spotlight_new_image || park.acf?.photo?.[0] || "",
//             purpose: park.acf?.land_usage || "",
//             area: park.acf?.land_area || "",
//             potential: park.acf?.development_potential || "",
//             certification: park.acf?.construction_status || "",
//           })),
//         },
//       ];
//     })
//   );

//   return Object.fromEntries(regionEntries);
// }

import { regionCategoryMap } from "./regionCategoryMap";

export async function fetchAndCombineRegionData() {
  const baseURL =
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?categories=";

  const regionEntries = await Promise.all(
    Object.entries(regionCategoryMap).map(async ([regionKey, categoryId]) => {
      const res = await fetch(`${baseURL}${categoryId}`, {
        cache: "no-store",
      });
      const parks = await res.json();

      return [
        regionKey,
        {
          label: regionKey,
          locations: parks.map((park) => ({
            id: park.id,
            label: park.title?.rendered || "",
            city: park.acf?.state_name || "",
            image:
              park.acf?.park_spotlight_new_image || park.acf?.photo?.[0] || "",
            purpose: park.acf?.land_usage || "",
            area: park.acf?.land_area || "",
            potential: park.acf?.development_potential || "",
            certification: park.acf?.construction_status || "",
          })),
        },
      ];
    })
  );

  return Object.fromEntries(regionEntries);
}
