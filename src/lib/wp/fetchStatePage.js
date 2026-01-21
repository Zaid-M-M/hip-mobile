import { formatStatePage } from "@/src/utils/formatters/formatStatePage";

// const BASE = process.env.NEXT_PUBLIC_API_BASE;

// export async function fetchStatePage(slug) {
//   try {
//     const res = await fetch(`${BASE}/states?slug=${slug}`, {
//       next: { revalidate: 300 }, // ISR every 5 mins
//     });

//     if (!res.ok) throw new Error(`Failed fetching state ${slug}`);

//     const data = await res.json();
//     if (!data?.length) return null;

//     return formatStatePage(data[0]);
//   } catch (err) {
//     console.error("fetchStatePage error:", err);
//     return null;
//   }
// }
// lib/wp/fetchStatePage.js
const BASE = "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

export async function fetchState(slug) {
  try {
    const res = await fetch(`${BASE}/states?slug=${slug}`, {
      cache: "no-store",
    });
if (!res.ok) throw new Error("Failed to fetch state");

    const json = await res.json();
    if (!json?.length) return null;
    // console.log(json)

    // ✅ find exact match
    const match = json.find((item) => item.slug === slug);
    if (!match) return null;
    // console.log(json);

    // console.log("WP response:", JSON.stringify(json, null, 2));
console.log("match",match)
    return formatStatePage(match);
  } catch (err) {
    console.error("fetchState error:", err);
    return null;
  }
}
