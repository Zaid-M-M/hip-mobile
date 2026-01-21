// import { regionCategoryMap } from "./regionCategoryMap";

// async function fetchAllRegions() {
//   const baseURL =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";

//   const regionPromises = Object.entries(regionCategoryMap).map(
//     async ([regionKey, categoryId]) => {
//       try {
//         // Add timeout to fetch
//         const controller = new AbortController();
//         const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

//         console.log(
//           `Fetching parks for region: ${regionKey} (category: ${categoryId})`
//         );
//         const res = await fetch(`${baseURL}?categories=${categoryId}`, {
//           signal: controller.signal,
//         });
//         clearTimeout(timeoutId);

//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }

//         const parks = await res.json();
//         console.log(`Parks for ${regionKey}:`, parks);

//         return [
//           regionKey,
//           parks.map((park) => {
//             const location = {
//               id: park.id,
//               label: park.acf?.park_name || park.title?.rendered || "Unknown",
//               city: park.acf?.state_name || "",
//               image: park.acf?.park_spotlight_image || "",
//               purpose: park.acf?.land_usage || "",
//               area: park.acf?.land_area || "",
//               potential: park.acf?.development_potential || "",
//               certification: park.acf?.igbc_status || "",
//               coordinates: park.acf?.coordinates_no || "",
//               color: "#0db14b",
//             };
//             console.log(`Parsed location for ${regionKey}:`, location);
//             return location;
//           }),
//         ];
//       } catch (err) {
//         console.error(`Error fetching parks for ${regionKey}:`, err);
//         return [regionKey, []]; // Return empty locations on error
//       }
//     }
//   );

//   const regions = await Promise.all(regionPromises);
//   console.log("All regions fetched:", Object.fromEntries(regions));
//   return Object.fromEntries(regions);
// }

import { regionCategoryMap } from "./regionCategoryMap";

async function fetchAllRegions() {
  const baseURL =
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";

  const regionPromises = Object.entries(regionCategoryMap).map(
    async ([regionKey, categoryId]) => {
      try {
        // Add timeout to fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        console.log(
          `Fetching parks for region: ${regionKey} (category: ${categoryId})`
        );
        const res = await fetch(`${baseURL}?categories=${categoryId}`, {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const parks = await res.json();
        console.log(`Parks for ${regionKey}:`, parks);

        return [
          regionKey,
          parks.map((park) => {
            const location = {
              id: park.id,
              label: park.acf?.park_name || park.title?.rendered || "Unknown",
              city: park.acf?.state_name || "",
              image: park.acf?.park_spotlight_new_image || "",
              purpose: park.acf?.land_usage || "",
              area: park.acf?.land_area || "",
              potential: park.acf?.development_potential || "",
              certification: park.acf?.igbc_status || "",
              coordinates: park.acf?.coordinates_no || "",
              color: "#0db14b",
            };
            console.log(`Parsed location for ${regionKey}:`, location);
            return location;
          }),
        ];
      } catch (err) {
        console.error(`Error fetching parks for ${regionKey}:`, err);
        return [regionKey, []]; // Return empty locations on error
      }
    }
  );

  const regions = await Promise.all(regionPromises);
  console.log("All regions fetched:", Object.fromEntries(regions));
  return Object.fromEntries(regions);
}
