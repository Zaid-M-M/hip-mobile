// import {
//   staticRegionDataIncity,
//   staticRegionDataIndustrial,
//   industrialCategoryMap,
//   incityCategoryMap,
// } from "./mapStaticData";

// async function fetchAllRegions(baseURL, categoryMap, staticData, mapFn) {
//   const regionPromises = Object.entries(categoryMap).map(
//     async ([regionKey, categoryId]) => {
//       const res = await fetch(`${baseURL}?categories=${categoryId}`);
//       const parks = await res.json();

//       return [
//         regionKey,
//         parks.map((park) => mapFn(park, regionKey, staticData)),
//       ];
//     }
//   );

//   const regions = await Promise.all(regionPromises);
//   return Object.fromEntries(regions);
// }

// export async function buildDynamicHighlightedRegions(type = "industrial") {
//   let baseURL, categoryMap, staticData, mapFn;

//   if (type === "incity") {
//     baseURL =
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/incity_parks";
//     categoryMap = incityCategoryMap;
//     staticData = staticRegionDataIncity;

//     mapFn = (park, regionKey, staticData) => {
//       const staticLocation = staticData[regionKey]?.locations?.find(
//         (loc) => loc.id === park.id || loc.label === park.acf?.incity_name
//       );

//       return {
//         title: park?.title?.rendered,
//         id: park.id,
//         slug: park.slug,
//         label: park.acf?.incity_name || park.title?.rendered || "",
//         incityname: park.acf?.incity_city_name || "",
//         city: park.acf?.incity_state_name || "",
//         image: park.acf?.incity_spotlight_image || "",
//         purpose: park.acf?.incity_land_usage || "",
//         area: park.acf?.incity_land_area || "",
//         potential: park.acf?.incity_development_potential || "",
//         certification: park.acf?.incity_igbc_status || "",
//         coordinates: park.acf?.coordinates_no || "",
//         x: parseFloat(park.acf?.incity_svg_x) || staticLocation?.x || 100,
//         y: parseFloat(park.acf?.incity_svg_y) || staticLocation?.y || 100,
//         color: park.acf?.incity_pin_color || "#FF0000",
//         text_position: park.acf?.text_position || "",
//         incity_text_position_: park.acf?.incity_text_position_,
//       };
//     };
//   } else {
//     baseURL =
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";
//     categoryMap = industrialCategoryMap;
//     staticData = staticRegionDataIndustrial;

//     mapFn = (park, regionKey, staticData) => {
//       const staticLocation = staticData[regionKey]?.locations?.find(
//         (loc) => loc.id === park.id || loc.label === park.acf?.park_name
//       );

//       return {
//         id: park.id,
//         slug: park.slug,
//         label: park.acf?.park_name || park.title?.rendered || "",
//         city: park.acf?.state_name || "",
//         image: park.acf?.park_spotlight_image || "",
//         purpose: park.acf?.land_usage || "",
//         area: park.acf?.land_area || "",
//         potential: park.acf?.development_potential || "",
//         certification: park.acf?.igbc_status || "",
//         coordinates: park.acf?.coordinates_no || "",
//         x: parseFloat(park.acf?.svg_x) || staticLocation?.x || 100,
//         y: parseFloat(park.acf?.svg_y) || staticLocation?.y || 100,
//         color: park.acf?.pin_color || "#FF0000",
//         text_position: park.acf?.text_position || "",
//       };
//     };
//   }

//   const fetchedRegions = await fetchAllRegions(
//     baseURL,
//     categoryMap,
//     staticData,
//     mapFn
//   );

//   // Filter out specific slugs for industrial parks
//   if (type === "industrial") {
//     const excludeSlugs = [
//       "warehousing-park-delhi-ii",
//       "warehousing-park-delhi-i",
//     ];
//     Object.keys(fetchedRegions).forEach((regionKey) => {
//       fetchedRegions[regionKey] = fetchedRegions[regionKey].filter(
//         (item) => !excludeSlugs.includes(item.slug)
//       );
//     });
//   }

//   // Merge only regions that exist in categoryMap
//   const merged = {};
//   for (const regionKey of Object.keys(categoryMap)) {
//     if (!staticData[regionKey]) continue;

//     merged[regionKey] = {
//       ...staticData[regionKey],
//       numberBoxMobile:
//         staticData[regionKey].numberBoxMobile ||
//         staticData[regionKey].numberBox,
//       locations: fetchedRegions[regionKey] || [],
//     };
//   }

//   return merged;
// }

import {
  staticRegionDataIncity,
  staticRegionDataIndustrial,
  industrialCategoryMap,
  incityCategoryMap,
} from "./mapStaticData";

async function fetchAllRegions(baseURL, categoryMap, staticData, mapFn) {
  const regionPromises = Object.entries(categoryMap).map(
    async ([regionKey, categoryId]) => {
      const res = await fetch(`${baseURL}?categories=${categoryId}`);
      const parks = await res.json();

      return [
        regionKey,
        parks.map((park) => mapFn(park, regionKey, staticData)),
      ];
    }
  );

  const regions = await Promise.all(regionPromises);
  return Object.fromEntries(regions);
}

export async function buildDynamicHighlightedRegions(type = "industrial") {
  let baseURL, categoryMap, staticData, mapFn;

  if (type === "incity") {
    baseURL =
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/incity_parks";
    categoryMap = incityCategoryMap;
    staticData = staticRegionDataIncity;

    mapFn = (park, regionKey, staticData) => {
      const staticLocation = staticData[regionKey]?.locations?.find(
        (loc) => loc.id === park.id || loc.label === park.acf?.incity_name
      );

      return {
        title: park?.title?.rendered,
        id: park.id,
        slug: park.slug,
        label: park.acf?.incity_name || park.title?.rendered || "",
        incityname: park.acf?.incity_city_name || "",
        city: park.acf?.incity_state_name || "",
        image: park.acf?.incity_spotlight_image || "",
        purpose: park.acf?.incity_land_usage || "",
        area: park.acf?.incity_land_area || "",
        potential: park.acf?.incity_development_potential || "",
        certification: park.acf?.incity_igbc_status || "",
        coordinates: park.acf?.coordinates_no || "",
        x: parseFloat(park.acf?.incity_svg_x) || staticLocation?.x || 100,
        y: parseFloat(park.acf?.incity_svg_y) || staticLocation?.y || 100,
        color: park.acf?.incity_pin_color || "#FF0000",
        text_position: park.acf?.text_position || "",
        incity_text_position_: park.acf?.incity_text_position_,
      };
    };
  } else {
    baseURL =
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";
    categoryMap = industrialCategoryMap;
    staticData = staticRegionDataIndustrial;

    mapFn = (park, regionKey, staticData) => {
      const staticLocation = staticData[regionKey]?.locations?.find(
        (loc) => loc.id === park.id || loc.label === park.acf?.park_name
      );

      return {
        id: park.id,
        slug: park.slug,
        label: park.acf?.park_name || park.title?.rendered || "",
        city: park.acf?.state_name || "",
        image: park.acf?.park_spotlight_new_image || "",
        purpose: park.acf?.land_usage || "",
        area: park.acf?.land_area || "",
        potential: park.acf?.development_potential || "",
        certification: park.acf?.igbc_status || "",
        coordinates: park.acf?.coordinates_no || "",
        x: parseFloat(park.acf?.svg_x) || staticLocation?.x || 100,
        y: parseFloat(park.acf?.svg_y) || staticLocation?.y || 100,
        color: park.acf?.pin_color || "#FF0000",
        text_position: park.acf?.text_position || "",
      };
    };
  }

  const fetchedRegions = await fetchAllRegions(
    baseURL,
    categoryMap,
    staticData,
    mapFn
  );

  // Filter out specific slugs for industrial parks
  if (type === "industrial") {
    const excludeSlugs = [
      "warehousing-park-delhi-ii",
      "warehousing-park-delhi-i",
    ];
    Object.keys(fetchedRegions).forEach((regionKey) => {
      fetchedRegions[regionKey] = fetchedRegions[regionKey].filter(
        (item) => !excludeSlugs.includes(item.slug)
      );
    });
  }

  // Merge only regions that exist in categoryMap
  const merged = {};
  for (const regionKey of Object.keys(categoryMap)) {
    if (!staticData[regionKey]) continue;

    merged[regionKey] = {
      ...staticData[regionKey],
      numberBoxMobile:
        staticData[regionKey].numberBoxMobile ||
        staticData[regionKey].numberBox,
      locations: fetchedRegions[regionKey] || [],
    };
  }

  return merged;
}
