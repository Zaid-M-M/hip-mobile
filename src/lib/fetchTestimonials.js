// // lib/fetchTestimonials.js
// import { formatTestimonials } from "@/src/utils/formatters/formatTestimonials";
// const BASE = process.env.NEXT_PUBLIC_API_BASE;

// export async function fetchTestimonials() {
//   try {
//     const res = await fetch(`${BASE}/customers_speak`, {
//       // recommended: ISR — update every 60s. Change to `cache: "no-store"` if you want always-fresh.
//       next: { revalidate: 60 },
//     });
//     if (!res.ok) throw new Error("Failed to fetch testimonials");
//     const json = await res.json();
//     return formatTestimonials(json);
//   } catch (err) {
//     console.error("fetchTestimonials:", err);
//     return [];
//   }
// }
// lib/fetchTestimonials.js
import { formatTestimonials } from "@/src/utils/formatters/formatTestimonials";
const BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function fetchTestimonials() {
  try {
    const res = await fetch(`${BASE}/customers_speak`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch testimonials");
    const json = await res.json();
    return formatTestimonials(json);
  } catch (err) {
    console.error("fetchTestimonials:", err);
    return [];
  }
}
