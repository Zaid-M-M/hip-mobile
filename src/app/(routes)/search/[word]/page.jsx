// "use client";

// import { useSearchParams, useRouter, useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const PER_PAGE = 5;

// export default function SearchPageClient() {
//   const searchParams = useSearchParams();
//   const params = useParams();
//   const router = useRouter();
//   const q = (params.word || "").trim();
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

//   const [results, setResults] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     if (!q) {
//       setResults([]);
//       setTotalPages(1);
//       return;
//     }

//     let mounted = true;
//     async function fetchData() {
//       setLoading(true);
//       setErr(null);

//       try {
//         const url = `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/search_data?search=${encodeURIComponent(
//           q
//         )}&per_page=${PER_PAGE}&page=${page}`;

//         const res = await fetch(url, { cache: "no-store" });

//         if (!res.ok) {
//           const text = await res.text().catch(() => "");
//           throw new Error(`Status ${res.status} ${res.statusText} — ${text}`);
//         }

//         const data = await res.json();

//         let tp = 1;
//         const headerTP = res.headers.get("X-WP-TotalPages");
//         if (headerTP) tp = parseInt(headerTP, 10) || 1;
//         else {
//           const total = parseInt(res.headers.get("X-WP-Total") || "0", 10);
//           if (total > 0) tp = Math.max(1, Math.ceil(total / PER_PAGE));
//         }

//         if (mounted) {
//           const resultsArray = Array.isArray(data) ? data : [];
//           setResults(resultsArray);
//           setTotalPages(tp);
//         }
//       } catch (error) {
//         if (mounted) {
//           setErr(error.message || "Failed to fetch");
//           setResults([]);
//           setTotalPages(1);
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     }

//     fetchData();

//     return () => {
//       mounted = false;
//     };
//   }, [q, page]);

//   // Helper: safely get title string (plain, for alt etc.)
//   const getTitle = (item) =>
//     item?.title?.rendered ?? item?.title ?? item?.post_title ?? "Untitled";

//   // Helper: safely get title string with highlighting
//   const getHighlightedTitle = (item, searchTerm) => {
//     const title =
//       item?.title?.rendered ?? item?.title ?? item?.post_title ?? "Untitled";
//     if (!searchTerm) return title;
//     const regex = new RegExp(
//       `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
//       "gi"
//     );
//     return title.replace(
//       regex,
//       '<mark style="background:#2BB04C;color:black;">$1</mark>'
//     );
//   };

//   // Helper: extract plain text from HTML
//   const stripHtml = (html) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.innerText || div.textContent || "";
//   };

//   // Helper: get highlighted and truncated excerpt (max 4 sentences/"lines", dynamic around first match)
//   const getHighlightedExcerpt = (item, searchTerm) => {
//     let fullText =
//       item?.content?.rendered ??
//       item?.excerpt?.rendered ??
//       item?.description ??
//       item?.acf?.description ??
//       "";

//     if (!fullText) return "";

//     const plainText = stripHtml(fullText).trim();
//     if (!plainText) return "";

//     // Split into sentences (approximate "lines" by splitting on '. ')
//     const sentences = plainText
//       .split(". ")
//       .map((s) => s.trim())
//       .filter((s) => s.length > 0);

//     if (sentences.length === 0) return "";

//     let startIndex = 0;
//     if (searchTerm) {
//       const lowerSearch = searchTerm.toLowerCase();
//       for (let i = 0; i < sentences.length; i++) {
//         if (sentences[i].toLowerCase().includes(lowerSearch)) {
//           startIndex = i;
//           break;
//         }
//       }
//     }

//     const endIndex = Math.min(startIndex + 4, sentences.length);
//     const snippetSentences = sentences.slice(startIndex, endIndex);
//     let snippetText = snippetSentences.join(". ");

//     // Add ellipsis
//     const prefix = startIndex > 0 ? "... " : "";
//     const suffix = endIndex < sentences.length ? " ..." : "";
//     snippetText = prefix + snippetText + suffix;

//     if (!searchTerm) {
//       return snippetText;
//     }

//     const regex = new RegExp(
//       `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
//       "gi"
//     );
//     return snippetText.replace(
//       regex,
//       '<mark style="background:#2BB04C;color:black;">$1</mark>'
//     );
//   };

//   // Helper: link/url
//   const getLink = (item) =>
//     item?.acf?.url ?? item?.link ?? item?.slug ?? item?.guid?.rendered ?? "#";

//   // Helper: image URL (WP featured or ACF)
//   const getImage = (item) => {
//     if (item?.featured_media) {
//       // Assuming you need to fetch media URL separately if ID only; for now, skip if not string
//       return null;
//     }
//     return item?.image ?? item?.acf?.image ?? null;
//   };

//   // Helper: formatted date
//   const getDate = (item) =>
//     item?.date
//       ? new Date(item.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       : "";

//   // Navigation helper
//   const goToPage = (p) => {
//     const basePath = `/search/${q}`;
//     const queryParams = new URLSearchParams();
//     if (p > 1) queryParams.set("page", String(p));
//     const queryString = queryParams.toString();
//     router.push(queryString ? `${basePath}?${queryString}` : basePath);
//   };

//   // Pagination window
//   const renderPageButtons = () => {
//     const windowSize = 5;
//     const half = Math.floor(windowSize / 2);
//     let start = Math.max(1, page - half);
//     let end = Math.min(totalPages, start + windowSize - 1);

//     if (end - start < windowSize - 1) {
//       start = Math.max(1, end - windowSize + 1);
//     }

//     const buttons = [];
//     for (let i = start; i <= end; i += 1) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => goToPage(i)}
//           className={`px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer ${
//             i === page ? "bg-[#F47922] text-white" : ""
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     const items = [];
//     if (start > 1) {
//       items.push(
//         <button
//           key="1"
//           onClick={() => goToPage(1)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           1
//         </button>
//       );
//       if (start > 2)
//         items.push(
//           <span key="left-ellipsis" className="px-2">
//             …
//           </span>
//         );
//     }
//     items.push(...buttons);
//     if (end < totalPages) {
//       if (end < totalPages - 1)
//         items.push(
//           <span key="right-ellipsis" className="px-2">
//             …
//           </span>
//         );
//       items.push(
//         <button
//           key={totalPages}
//           onClick={() => goToPage(totalPages)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           {totalPages}
//         </button>
//       );
//     }
//     return items;
//   };

//   // Skeleton Components
//   const SkeletonHeader = () => (
//     <div className="animate-pulse mb-4">
//       <div className="h-10 bg-gray-200 rounded w-4/5"></div>
//     </div>
//   );

//   const SkeletonControls = () => (
//     <div className="animate-pulse mb-6 flex items-center gap-3">
//       <div className="h-4 bg-gray-200 rounded w-32"></div>
//       <div className="ml-auto flex items-center gap-2">
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       </div>
//     </div>
//   );

//   const SkeletonArticle = () => (
//     <article className="border-gray-200 border p-5 bg-white shadow-sm animate-pulse">
//       <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//       <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
//       <div className="space-y-2 mb-3">
//         <div className="h-4 bg-gray-200 rounded w-full"></div>
//         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//         <div className="h-4 bg-gray-200 rounded w-4/5"></div>
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//       </div>
//       <div className="h-48 bg-gray-200 rounded mb-4"></div>
//       <div className="h-4 bg-gray-200 rounded w-24"></div>
//     </article>
//   );

//   const SkeletonPagination = () => (
//     <div className="flex items-center justify-center gap-2 mt-8 animate-pulse">
//       {Array.from({ length: 7 }).map((_, i) => (
//         <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
//       ))}
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="fix xl:py-24 py-12">
//         <SkeletonHeader />
//         <SkeletonControls />
//         <div className="space-y-6">
//           {Array.from({ length: PER_PAGE }).map((_, i) => (
//             <SkeletonArticle key={i} />
//           ))}
//         </div>
//         <SkeletonPagination />
//       </div>
//     );
//   }

//   return (
//     <div className="fix xl:py-24 py-12">
//       <h1 className="text-3xl font-bold mb-4">
//         Search Results for: <span className="text-[#F47922]">{q || "—"}</span>
//       </h1>

//       {/* Controls */}
//       <div className="mb-6 flex items-center gap-3">
//         <div className="text-sm text-gray-600">
//           Page {page} of {totalPages} ({results.length} items)
//         </div>
//         <div className="ml-auto flex items-center gap-2">
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               First
//             </button>
//           )}
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(page - 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Prev
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(page + 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Next
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(totalPages)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Last
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Loading / Error */}
//       {err && <p className="text-red-600">Error: {err}</p>}

//       {/* No results */}
//       {!loading && results.length === 0 && !err && (
//         <p className="text-gray-500">No results found.</p>
//       )}

//       {/* Results */}
//       <div className="space-y-6">
//         {results.map((item) => (
//           <article
//             key={item.id ?? item.slug ?? JSON.stringify(item).slice(0, 30)}
//             className="border-gray-200 border p-5 bg-white"
//           >
//             <h2 className="text-2xl font-semibold">
//               <a
//                 href={getLink(item)}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-[#F47922] hover:underline"
//                 dangerouslySetInnerHTML={{
//                   __html: getHighlightedTitle(item, q),
//                 }}
//               />
//             </h2>

//             {/* meta: date / type */}
//             <div className="text-sm text-gray-500 mt-1">
//               {getDate(item)}
//               {item.type ? ` • ${item.type}` : ""}
//             </div>

//             {/* excerpt / description as HTML */}
//             <div
//               className="mt-3 text-gray-700 prose prose-sm max-w-none"
//               dangerouslySetInnerHTML={{
//                 __html: getHighlightedExcerpt(item, q),
//               }}
//             />

//             {/* image if provided */}
//             {getImage(item) ? (
//               <div className="mt-3">
//                 <img
//                   src={getImage(item)}
//                   alt={getTitle(item)}
//                   className="w-full max-h-64 object-cover"
//                 />
//               </div>
//             ) : null}

//             {/* CTA */}
//             <div className="mt-4">
//               <a
//                 href={getLink(item)}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block text-[#F47922] underline"
//               >
//                 Visit Page →
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* pagination numbers */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-8">
//           {renderPageButtons()}
//         </div>
//       )}
//     </div>
//   );
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
//
// "use client";

// import { useSearchParams, useRouter, useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const PER_PAGE = 5;

// const API_ENDPOINTS = [
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/incity_parks",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/media_news",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/career_page",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/customers_speak",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/hyderabad_micro_blog",
// ];

// export default function SearchPageClient() {
//   const searchParams = useSearchParams();
//   const params = useParams();
//   const router = useRouter();
//   const q = (params.word || "").trim();
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

//   const [results, setResults] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     if (!q) {
//       setResults([]);
//       setTotalPages(1);
//       return;
//     }

//     let mounted = true;
//     async function fetchData() {
//       setLoading(true);
//       setErr(null);

//       try {
//         const allPromises = API_ENDPOINTS.map((url) =>
//           fetch(`${url}?per_page=100&orderby=date&order=desc`, {
//             cache: "no-store",
//           })
//             .then((res) => (res.ok ? res.json() : []))
//             .catch(() => [])
//         );

//         const allData = await Promise.all(allPromises);

//         let combined = [];
//         allData.forEach((data) => {
//           if (Array.isArray(data)) {
//             data.forEach((item) => {
//               const title = item?.title?.rendered || "";
//               const content = item?.content?.rendered || "";
//               if (
//                 title.toLowerCase().includes(q.toLowerCase()) ||
//                 content.toLowerCase().includes(q.toLowerCase())
//               ) {
//                 combined.push(item);
//               }
//             });
//           }
//         });

//         // Sort by date descending
//         combined.sort((a, b) => new Date(b.date) - new Date(a.date));

//         const total = combined.length;
//         const tp = Math.ceil(total / PER_PAGE);
//         const start = (page - 1) * PER_PAGE;
//         const end = start + PER_PAGE;
//         const resultsArray = combined.slice(start, end);

//         if (mounted) {
//           setResults(resultsArray);
//           setTotalPages(tp);
//         }
//       } catch (error) {
//         if (mounted) {
//           setErr(error.message || "Failed to fetch");
//           setResults([]);
//           setTotalPages(1);
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     }

//     fetchData();

//     return () => {
//       mounted = false;
//     };
//   }, [q, page]);

//   // Helper: safely get title string (plain, for alt etc.)
//   const getTitle = (item) =>
//     item?.title?.rendered ?? item?.title ?? item?.post_title ?? "Untitled";

//   // Helper: safely get title string with highlighting
//   const getHighlightedTitle = (item, searchTerm) => {
//     const title =
//       item?.title?.rendered ?? item?.title ?? item?.post_title ?? "Untitled";
//     if (!searchTerm) return title;
//     const regex = new RegExp(
//       `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
//       "gi"
//     );
//     return title.replace(
//       regex,
//       '<mark style="background:#2BB04C;color:black;">$1</mark>'
//     );
//   };

//   // Helper: extract plain text from HTML
//   const stripHtml = (html) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.innerText || div.textContent || "";
//   };

//   // Helper: get highlighted and truncated excerpt (max 4 sentences/"lines", dynamic around first match)
//   const getHighlightedExcerpt = (item, searchTerm) => {
//     let fullText =
//       item?.content?.rendered ??
//       item?.excerpt?.rendered ??
//       item?.description ??
//       item?.acf?.description ??
//       "";

//     if (!fullText) return "";

//     const plainText = stripHtml(fullText).trim();
//     if (!plainText) return "";

//     // Split into sentences (approximate "lines" by splitting on '. ')
//     const sentences = plainText
//       .split(". ")
//       .map((s) => s.trim())
//       .filter((s) => s.length > 0);

//     if (sentences.length === 0) return "";

//     let startIndex = 0;
//     if (searchTerm) {
//       const lowerSearch = searchTerm.toLowerCase();
//       for (let i = 0; i < sentences.length; i++) {
//         if (sentences[i].toLowerCase().includes(lowerSearch)) {
//           startIndex = i;
//           break;
//         }
//       }
//     }

//     const endIndex = Math.min(startIndex + 4, sentences.length);
//     const snippetSentences = sentences.slice(startIndex, endIndex);
//     let snippetText = snippetSentences.join(". ");

//     // Add ellipsis
//     const prefix = startIndex > 0 ? "... " : "";
//     const suffix = endIndex < sentences.length ? " ..." : "";
//     snippetText = prefix + snippetText + suffix;

//     if (!searchTerm) {
//       return snippetText;
//     }

//     const regex = new RegExp(
//       `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
//       "gi"
//     );
//     return snippetText.replace(
//       regex,
//       '<mark style="background:#2BB04C;color:black;">$1</mark>'
//     );
//   };

//   // Helper: link/url
//   const getLink = (item) => "#";

//   // Helper: image URL (WP featured or ACF)
//   const getImage = (item) => {
//     if (item?.featured_media) {
//       // Assuming you need to fetch media URL separately if ID only; for now, skip if not string
//       return null;
//     }
//     return item?.image ?? item?.acf?.image ?? null;
//   };

//   // Helper: formatted date
//   const getDate = (item) =>
//     item?.date
//       ? new Date(item.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       : "";

//   // Navigation helper
//   const goToPage = (p) => {
//     const basePath = `/search/${q}`;
//     const queryParams = new URLSearchParams();
//     if (p > 1) queryParams.set("page", String(p));
//     const queryString = queryParams.toString();
//     router.push(queryString ? `${basePath}?${queryString}` : basePath);
//   };

//   // Pagination window
//   const renderPageButtons = () => {
//     const windowSize = 5;
//     const half = Math.floor(windowSize / 2);
//     let start = Math.max(1, page - half);
//     let end = Math.min(totalPages, start + windowSize - 1);

//     if (end - start < windowSize - 1) {
//       start = Math.max(1, end - windowSize + 1);
//     }

//     const buttons = [];
//     for (let i = start; i <= end; i += 1) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => goToPage(i)}
//           className={`px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer ${
//             i === page ? "bg-[#F47922] text-white" : ""
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     const items = [];
//     if (start > 1) {
//       items.push(
//         <button
//           key="1"
//           onClick={() => goToPage(1)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           1
//         </button>
//       );
//       if (start > 2)
//         items.push(
//           <span key="left-ellipsis" className="px-2">
//             …
//           </span>
//         );
//     }
//     items.push(...buttons);
//     if (end < totalPages) {
//       if (end < totalPages - 1)
//         items.push(
//           <span key="right-ellipsis" className="px-2">
//             …
//           </span>
//         );
//       items.push(
//         <button
//           key={totalPages}
//           onClick={() => goToPage(totalPages)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           {totalPages}
//         </button>
//       );
//     }
//     return items;
//   };

//   // Skeleton Components
//   const SkeletonHeader = () => (
//     <div className="animate-pulse mb-4">
//       <div className="h-10 bg-gray-200 rounded w-4/5"></div>
//     </div>
//   );

//   const SkeletonControls = () => (
//     <div className="animate-pulse mb-6 flex items-center gap-3">
//       <div className="h-4 bg-gray-200 rounded w-32"></div>
//       <div className="ml-auto flex items-center gap-2">
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       </div>
//     </div>
//   );

//   const SkeletonArticle = () => (
//     <article className="border-gray-200 border p-5 bg-white shadow-sm animate-pulse">
//       <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//       <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
//       <div className="space-y-2 mb-3">
//         <div className="h-4 bg-gray-200 rounded w-full"></div>
//         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//         <div className="h-4 bg-gray-200 rounded w-4/5"></div>
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//       </div>
//       <div className="h-48 bg-gray-200 rounded mb-4"></div>
//       <div className="h-4 bg-gray-200 rounded w-24"></div>
//     </article>
//   );

//   const SkeletonPagination = () => (
//     <div className="flex items-center justify-center gap-2 mt-8 animate-pulse">
//       {Array.from({ length: 7 }).map((_, i) => (
//         <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
//       ))}
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="fix xl:py-24 py-12">
//         <SkeletonHeader />
//         <SkeletonControls />
//         <div className="space-y-6">
//           {Array.from({ length: PER_PAGE }).map((_, i) => (
//             <SkeletonArticle key={i} />
//           ))}
//         </div>
//         <SkeletonPagination />
//       </div>
//     );
//   }

//   return (
//     <div className="fix xl:py-24 py-12">
//       <h1 className="text-3xl font-bold mb-4">
//         Search Results for: <span className="text-[#F47922]">{q || "—"}</span>
//       </h1>

//       {/* Controls */}
//       <div className="mb-6 flex items-center gap-3">
//         <div className="text-sm text-gray-600">
//           Page {page} of {totalPages} ({results.length} items)
//         </div>
//         <div className="ml-auto flex items-center gap-2">
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               First
//             </button>
//           )}
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(page - 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Prev
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(page + 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Next
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(totalPages)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Last
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Loading / Error */}
//       {err && <p className="text-red-600">Error: {err}</p>}

//       {/* No results */}
//       {!loading && results.length === 0 && !err && (
//         <p className="text-gray-500">No results found.</p>
//       )}

//       {/* Results */}
//       <div className="space-y-6">
//         {results.map((item) => (
//           <article
//             key={item.id ?? item.slug ?? JSON.stringify(item).slice(0, 30)}
//             className="border-gray-200 border p-5 bg-white"
//           >
//             <h2
//               className="text-2xl font-semibold text-[#F47922] hover:underline cursor-pointer"
//               dangerouslySetInnerHTML={{
//                 __html: getHighlightedTitle(item, q),
//               }}
//             />

//             {/* meta: date / type */}
//             <div className="text-sm text-gray-500 mt-1">{getDate(item)}</div>

//             {/* excerpt / description as HTML */}
//             <div
//               className="mt-3 text-gray-700 prose prose-sm max-w-none"
//               dangerouslySetInnerHTML={{
//                 __html: getHighlightedExcerpt(item, q),
//               }}
//             />

//             {/* image if provided */}
//             {getImage(item) ? (
//               <div className="mt-3">
//                 <img
//                   src={getImage(item)}
//                   alt={getTitle(item)}
//                   className="w-full max-h-64 object-cover"
//                 />
//               </div>
//             ) : null}

//             {/* CTA */}
//             <div className="mt-4">
//               <span className="inline-block text-[#F47922] underline">
//                 Visit Page →
//               </span>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* pagination numbers */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-8">
//           {renderPageButtons()}
//         </div>
//       )}
//     </div>
//   );
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
// "use client";

// import { useSearchParams, useRouter, useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const PER_PAGE = 5;

// export const API_ENDPOINTS = [
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/incity_parks",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/media_news",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/career_page",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/customers_speak",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/hyderabad_micro_blog",
// ];

// export default function SearchPageClient() {
//   const searchParams = useSearchParams();
//   const params = useParams();
//   const router = useRouter();
//   const q = (params.word || "").trim();
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

//   // We store ALL fetched results here to handle client-side pagination across multiple APIs
//   const [allFetchedData, setAllFetchedData] = useState([]);

//   // These are the results actually displayed on the current page
//   const [displayedResults, setDisplayedResults] = useState([]);

//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   // 1. Fetching Effect: Triggers only when the Search Term 'q' changes
//   useEffect(() => {
//     if (!q) {
//       setAllFetchedData([]);
//       setDisplayedResults([]);
//       setTotalPages(1);
//       return;
//     }

//     let mounted = true;

//     async function fetchAllEndpoints() {
//       setLoading(true);
//       setErr(null);

//       try {
//         // Create an array of fetch promises.
//         // We fetch a larger batch (e.g., 20) from each endpoint to get a good pool of results.
//         const fetchPromises = API_ENDPOINTS.map((endpoint) => {
//           const url = `${endpoint}?search=${encodeURIComponent(q)}&per_page=20`;
//           return fetch(url, { cache: "no-store" })
//             .then((res) => {
//               if (!res.ok) return []; // If one endpoint fails, return empty array (don't break everything)
//               return res.json();
//             })
//             .then((data) => (Array.isArray(data) ? data : []))
//             .catch(() => []); // Catch network errors per request
//         });

//         // Wait for all requests to finish
//         const resultsArrays = await Promise.all(fetchPromises);

//         // Flatten the array of arrays into one single list
//         const combinedResults = resultsArrays.flat();

//         if (mounted) {
//           setAllFetchedData(combinedResults);

//           // Calculate total pages based on combined length
//           const total = combinedResults.length;
//           const tp = total > 0 ? Math.ceil(total / PER_PAGE) : 1;
//           setTotalPages(tp);
//         }
//       } catch (error) {
//         if (mounted) {
//           setErr("An unexpected error occurred while searching.");
//           setAllFetchedData([]);
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     }

//     fetchAllEndpoints();

//     return () => {
//       mounted = false;
//     };
//   }, [q]);

//   // 2. Pagination Effect: Triggers when 'page' or 'allFetchedData' changes
//   useEffect(() => {
//     if (!allFetchedData.length) {
//       setDisplayedResults([]);
//       return;
//     }

//     // Client-side slicing
//     const startIndex = (page - 1) * PER_PAGE;
//     const endIndex = startIndex + PER_PAGE;
//     const slice = allFetchedData.slice(startIndex, endIndex);

//     setDisplayedResults(slice);
//   }, [page, allFetchedData]);

//   // Helper: safely get title string (Updated to prioritize title.rendered)
//   const getTitle = (item) =>
//     item?.title?.rendered ?? item?.title ?? item?.post_title ?? "Untitled";

//   // Helper: safely get title string with highlighting
//   const getHighlightedTitle = (item, searchTerm) => {
//     const title = getTitle(item);
//     if (!searchTerm) return title;
//     const regex = new RegExp(
//       `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
//       "gi"
//     );
//     return title.replace(
//       regex,
//       '<mark style="background:#2BB04C;color:black;">$1</mark>'
//     );
//   };

//   // Helper: extract plain text from HTML
//   const stripHtml = (html) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.innerText || div.textContent || "";
//   };

//   // Helper: get highlighted and truncated excerpt (Updated to use content.rendered)
//   const getHighlightedExcerpt = (item, searchTerm) => {
//     // Prioritize content.rendered as per request
//     let fullText =
//       item?.content?.rendered ??
//       item?.excerpt?.rendered ??
//       item?.description ??
//       item?.acf?.description ??
//       "";

//     if (!fullText) return "";

//     const plainText = stripHtml(fullText).trim();
//     if (!plainText) return "";

//     // Split into sentences (approximate "lines" by splitting on '. ')
//     const sentences = plainText
//       .split(". ")
//       .map((s) => s.trim())
//       .filter((s) => s.length > 0);

//     if (sentences.length === 0) return "";

//     let startIndex = 0;
//     if (searchTerm) {
//       const lowerSearch = searchTerm.toLowerCase();
//       for (let i = 0; i < sentences.length; i++) {
//         if (sentences[i].toLowerCase().includes(lowerSearch)) {
//           startIndex = i;
//           break;
//         }
//       }
//     }

//     const endIndex = Math.min(startIndex + 4, sentences.length);
//     const snippetSentences = sentences.slice(startIndex, endIndex);
//     let snippetText = snippetSentences.join(". ");

//     // Add ellipsis
//     const prefix = startIndex > 0 ? "... " : "";
//     const suffix = endIndex < sentences.length ? " ..." : "";
//     snippetText = prefix + snippetText + suffix;

//     if (!searchTerm) {
//       return snippetText;
//     }

//     const regex = new RegExp(
//       `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
//       "gi"
//     );
//     return snippetText.replace(
//       regex,
//       '<mark style="background:#2BB04C;color:black;">$1</mark>'
//     );
//   };

//   // Helper: DUMMY link (No actual link)
//   const getLink = () => "#";

//   // Helper: image URL (WP featured or ACF)
//   const getImage = (item) => {
//     if (item?.featured_media && typeof item.featured_media !== "number") {
//       return item.featured_media;
//     }
//     return item?.image ?? item?.acf?.image ?? null;
//   };

//   // Helper: formatted date
//   const getDate = (item) =>
//     item?.date
//       ? new Date(item.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       : "";

//   // Navigation helper
//   const goToPage = (p) => {
//     const basePath = `/search/${q}`;
//     const queryParams = new URLSearchParams();
//     if (p > 1) queryParams.set("page", String(p));
//     const queryString = queryParams.toString();
//     router.push(queryString ? `${basePath}?${queryString}` : basePath);
//   };

//   // Pagination window
//   const renderPageButtons = () => {
//     const windowSize = 5;
//     const half = Math.floor(windowSize / 2);
//     let start = Math.max(1, page - half);
//     let end = Math.min(totalPages, start + windowSize - 1);

//     if (end - start < windowSize - 1) {
//       start = Math.max(1, end - windowSize + 1);
//     }

//     const buttons = [];
//     for (let i = start; i <= end; i += 1) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => goToPage(i)}
//           className={`px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer ${
//             i === page ? "bg-[#F47922] text-white" : ""
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     const items = [];
//     if (start > 1) {
//       items.push(
//         <button
//           key="1"
//           onClick={() => goToPage(1)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           1
//         </button>
//       );
//       if (start > 2)
//         items.push(
//           <span key="left-ellipsis" className="px-2">
//             …
//           </span>
//         );
//     }
//     items.push(...buttons);
//     if (end < totalPages) {
//       if (end < totalPages - 1)
//         items.push(
//           <span key="right-ellipsis" className="px-2">
//             …
//           </span>
//         );
//       items.push(
//         <button
//           key={totalPages}
//           onClick={() => goToPage(totalPages)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           {totalPages}
//         </button>
//       );
//     }
//     return items;
//   };

//   // Skeleton Components (Unchanged)
//   const SkeletonHeader = () => (
//     <div className="animate-pulse mb-4">
//       <div className="h-10 bg-gray-200 rounded w-4/5"></div>
//     </div>
//   );

//   const SkeletonControls = () => (
//     <div className="animate-pulse mb-6 flex items-center gap-3">
//       <div className="h-4 bg-gray-200 rounded w-32"></div>
//       <div className="ml-auto flex items-center gap-2">
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       </div>
//     </div>
//   );

//   const SkeletonArticle = () => (
//     <article className="border-gray-200 border p-5 bg-white shadow-sm animate-pulse">
//       <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//       <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
//       <div className="space-y-2 mb-3">
//         <div className="h-4 bg-gray-200 rounded w-full"></div>
//         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//         <div className="h-4 bg-gray-200 rounded w-4/5"></div>
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//       </div>
//       <div className="h-48 bg-gray-200 rounded mb-4"></div>
//       <div className="h-4 bg-gray-200 rounded w-24"></div>
//     </article>
//   );

//   const SkeletonPagination = () => (
//     <div className="flex items-center justify-center gap-2 mt-8 animate-pulse">
//       {Array.from({ length: 7 }).map((_, i) => (
//         <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
//       ))}
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="fix xl:py-24 py-12">
//         <SkeletonHeader />
//         <SkeletonControls />
//         <div className="space-y-6">
//           {Array.from({ length: PER_PAGE }).map((_, i) => (
//             <SkeletonArticle key={i} />
//           ))}
//         </div>
//         <SkeletonPagination />
//       </div>
//     );
//   }

//   return (
//     <div className="fix xl:py-24 py-12">
//       <h1 className="text-3xl font-bold mb-4">
//         Search Results for: <span className="text-[#F47922]">{q || "—"}</span>
//       </h1>

//       {/* Controls */}
//       <div className="mb-6 flex items-center gap-3">
//         <div className="text-sm text-gray-600">
//           Page {page} of {totalPages} ({allFetchedData.length} items)
//         </div>
//         <div className="ml-auto flex items-center gap-2">
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               First
//             </button>
//           )}
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(page - 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Prev
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(page + 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Next
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(totalPages)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Last
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Loading / Error */}
//       {err && <p className="text-red-600">Error: {err}</p>}

//       {/* No results */}
//       {!loading && displayedResults.length === 0 && !err && (
//         <p className="text-gray-500">No results found.</p>
//       )}

//       {/* Results */}
//       <div className="space-y-6">
//         {displayedResults.map((item, index) => (
//           <article
//             // Fallback key generation since IDs might collide across different APIs
//             key={`${item.id}-${index}`}
//             className="border-gray-200 border p-5 bg-white"
//           >
//             <h2 className="text-2xl font-semibold">
//               <a
//                 href={getLink(item)}
//                 // Removed target blank as requested for dummy links
//                 className="text-[#F47922] hover:underline cursor-default"
//                 dangerouslySetInnerHTML={{
//                   __html: getHighlightedTitle(item, q),
//                 }}
//               />
//             </h2>

//             {/* meta: date / type */}
//             <div className="text-sm text-gray-500 mt-1">
//               {getDate(item)}
//               {item.type ? ` • ${item.type}` : ""}
//             </div>

//             {/* excerpt / description as HTML */}
//             <div
//               className="mt-3 text-gray-700 prose prose-sm max-w-none line-clamp-6!"
//               dangerouslySetInnerHTML={{
//                 __html: getHighlightedExcerpt(item, q),
//               }}
//             />

//             {/* image if provided */}
//             {getImage(item) ? (
//               <div className="mt-3">
//                 <img
//                   src={getImage(item)}
//                   alt={getTitle(item)}
//                   className="w-full max-h-64 object-cover"
//                 />
//               </div>
//             ) : null}

//             {/* CTA - Dummy Link */}
//             <div className="mt-4">
//               <a
//                 href={getLink(item)}
//                 className="inline-block text-[#F47922] underline cursor-default"
//               >
//                 Visit Page →
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* pagination numbers */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-8">
//           {renderPageButtons()}
//         </div>
//       )}
//     </div>
//   );
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
//
//
//
//
//
//
//
// "use client";

// import { useSearchParams, useRouter, useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const PER_PAGE = 5;

// export const API_ENDPOINTS = [
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/incity_parks",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/media_news",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/career_page",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/customers_speak",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/hyderabad_micro_blog",
// ];

// export default function SearchPageClient() {
//   const searchParams = useSearchParams();
//   const params = useParams();
//   const router = useRouter();
//   const q = (params.word || "").trim();
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

//   // We store ALL fetched results here to handle client-side pagination across multiple APIs
//   const [allFetchedData, setAllFetchedData] = useState([]);

//   // These are the results actually displayed on the current page
//   const [displayedResults, setDisplayedResults] = useState([]);

//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   // 1. Fetching Effect
//   useEffect(() => {
//     if (!q) {
//       setAllFetchedData([]);
//       setDisplayedResults([]);
//       setTotalPages(1);
//       return;
//     }

//     let mounted = true;

//     async function fetchAllEndpoints() {
//       setLoading(true);
//       setErr(null);

//       try {
//         const fetchPromises = API_ENDPOINTS.map((endpoint) => {
//           const url = `${endpoint}?search=${encodeURIComponent(q)}&per_page=20`;
//           return fetch(url, { cache: "no-store" })
//             .then((res) => {
//               if (!res.ok) return [];
//               return res.json();
//             })
//             .then((data) => (Array.isArray(data) ? data : []))
//             .catch(() => []);
//         });

//         const resultsArrays = await Promise.all(fetchPromises);
//         const combinedResults = resultsArrays.flat();

//         if (mounted) {
//           setAllFetchedData(combinedResults);
//           const total = combinedResults.length;
//           const tp = total > 0 ? Math.ceil(total / PER_PAGE) : 1;
//           setTotalPages(tp);
//         }
//       } catch (error) {
//         if (mounted) {
//           setErr("An unexpected error occurred while searching.");
//           setAllFetchedData([]);
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     }

//     fetchAllEndpoints();

//     return () => {
//       mounted = false;
//     };
//   }, [q]);

//   // 2. Pagination Effect
//   useEffect(() => {
//     if (!allFetchedData.length) {
//       setDisplayedResults([]);
//       return;
//     }
//     const startIndex = (page - 1) * PER_PAGE;
//     const endIndex = startIndex + PER_PAGE;
//     const slice = allFetchedData.slice(startIndex, endIndex);
//     setDisplayedResults(slice);
//   }, [page, allFetchedData]);

//   // Helper: safely get title string (prioritizing title.rendered)
//   const getTitle = (item) =>
//     item?.title?.rendered ?? item?.title ?? item?.post_title ?? "Untitled";

//   // Helper: extract plain text from HTML
//   const stripHtml = (html) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.innerText || div.textContent || "";
//   };

//   // Helper: Get plain text snippet without highlighting, but maintaining context
//   const getContentSnippet = (item, searchTerm) => {
//     // Prioritize content.rendered
//     let fullText = item?.content?.rendered ?? "";

//     if (!fullText) return "";

//     const plainText = stripHtml(fullText).trim();
//     if (!plainText) return "";

//     // Split into sentences
//     const sentences = plainText
//       .split(". ")
//       .map((s) => s.trim())
//       .filter((s) => s.length > 0);

//     if (sentences.length === 0) return "";

//     let startIndex = 0;
//     // We still find the relevant sentence to start the excerpt from,
//     // so the search result makes sense, but we DO NOT highlight the word.
//     if (searchTerm) {
//       const lowerSearch = searchTerm.toLowerCase();
//       for (let i = 0; i < sentences.length; i++) {
//         if (sentences[i].toLowerCase().includes(lowerSearch)) {
//           startIndex = i;
//           break;
//         }
//       }
//     }

//     const endIndex = Math.min(startIndex + 4, sentences.length);
//     const snippetSentences = sentences.slice(startIndex, endIndex);
//     let snippetText = snippetSentences.join(". ");

//     // Add ellipsis
//     const prefix = startIndex > 0 ? "... " : "";
//     const suffix = endIndex < sentences.length ? " ..." : "";

//     return prefix + snippetText + suffix;
//   };

//   // Helper: DUMMY link
//   const getLink = () => "#";

//   // Helper: image URL
//   const getImage = (item) => {
//     if (item?.featured_media && typeof item.featured_media !== "number") {
//       return item.featured_media;
//     }
//     return item?.image ?? item?.acf?.image ?? null;
//   };

//   // Helper: formatted date
//   const getDate = (item) =>
//     item?.date
//       ? new Date(item.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       : "";

//   // Navigation helper
//   const goToPage = (p) => {
//     const basePath = `/search/${q}`;
//     const queryParams = new URLSearchParams();
//     if (p > 1) queryParams.set("page", String(p));
//     const queryString = queryParams.toString();
//     router.push(queryString ? `${basePath}?${queryString}` : basePath);
//   };

//   // Pagination window
//   const renderPageButtons = () => {
//     const windowSize = 5;
//     const half = Math.floor(windowSize / 2);
//     let start = Math.max(1, page - half);
//     let end = Math.min(totalPages, start + windowSize - 1);

//     if (end - start < windowSize - 1) {
//       start = Math.max(1, end - windowSize + 1);
//     }

//     const buttons = [];
//     for (let i = start; i <= end; i += 1) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => goToPage(i)}
//           className={`px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer ${
//             i === page ? "bg-[#F47922] text-white" : ""
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     const items = [];
//     if (start > 1) {
//       items.push(
//         <button
//           key="1"
//           onClick={() => goToPage(1)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           1
//         </button>
//       );
//       if (start > 2)
//         items.push(
//           <span key="left-ellipsis" className="px-2">
//             …
//           </span>
//         );
//     }
//     items.push(...buttons);
//     if (end < totalPages) {
//       if (end < totalPages - 1)
//         items.push(
//           <span key="right-ellipsis" className="px-2">
//             …
//           </span>
//         );
//       items.push(
//         <button
//           key={totalPages}
//           onClick={() => goToPage(totalPages)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           {totalPages}
//         </button>
//       );
//     }
//     return items;
//   };

//   // Skeleton Components
//   const SkeletonHeader = () => (
//     <div className="animate-pulse mb-4">
//       <div className="h-10 bg-gray-200 rounded w-4/5"></div>
//     </div>
//   );

//   const SkeletonControls = () => (
//     <div className="animate-pulse mb-6 flex items-center gap-3">
//       <div className="h-4 bg-gray-200 rounded w-32"></div>
//       <div className="ml-auto flex items-center gap-2">
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       </div>
//     </div>
//   );

//   const SkeletonArticle = () => (
//     <article className="border-gray-200 border p-5 bg-white shadow-sm animate-pulse">
//       <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//       <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
//       <div className="space-y-2 mb-3">
//         <div className="h-4 bg-gray-200 rounded w-full"></div>
//         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//         <div className="h-4 bg-gray-200 rounded w-4/5"></div>
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//       </div>
//       <div className="h-48 bg-gray-200 rounded mb-4"></div>
//       <div className="h-4 bg-gray-200 rounded w-24"></div>
//     </article>
//   );

//   const SkeletonPagination = () => (
//     <div className="flex items-center justify-center gap-2 mt-8 animate-pulse">
//       {Array.from({ length: 7 }).map((_, i) => (
//         <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
//       ))}
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="fix xl:py-24 py-12">
//         <SkeletonHeader />
//         <SkeletonControls />
//         <div className="space-y-6">
//           {Array.from({ length: PER_PAGE }).map((_, i) => (
//             <SkeletonArticle key={i} />
//           ))}
//         </div>
//         <SkeletonPagination />
//       </div>
//     );
//   }

//   return (
//     <div className="fix xl:py-24 py-12">
//       <h1 className="text-3xl font-bold mb-4">
//         Search Results for: <span className="text-[#F47922]">{q || "—"}</span>
//       </h1>

//       {/* Controls */}
//       <div className="mb-6 flex items-center gap-3">
//         <div className="text-sm text-gray-600">
//           Page {page} of {totalPages} ({allFetchedData.length} items)
//         </div>
//         <div className="ml-auto flex items-center gap-2">
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               First
//             </button>
//           )}
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(page - 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Prev
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(page + 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Next
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(totalPages)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Last
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Loading / Error */}
//       {err && <p className="text-red-600">Error: {err}</p>}

//       {/* No results */}
//       {!loading && displayedResults.length === 0 && !err && (
//         <p className="text-gray-500">No results found.</p>
//       )}

//       {/* Results */}
//       <div className="space-y-6">
//         {displayedResults.map((item, index) => (
//           <article
//             key={`${item.id}-${index}`}
//             className="border-gray-200 border p-5 bg-white"
//           >
//             <h2 className="text-2xl font-semibold">
//               <a
//                 href={getLink(item)}
//                 className="text-[#F47922] hover:underline cursor-default"
//                 // Using dangerouslySetInnerHTML to decode entities in title.rendered
//                 dangerouslySetInnerHTML={{
//                   __html: getTitle(item),
//                 }}
//               />
//             </h2>

//             {/* meta: date / type */}
//             <div className="text-sm text-gray-500 mt-1">
//               {getDate(item)}
//               {item.type ? ` • ${item.type}` : ""}
//             </div>

//             {/* excerpt / description as HTML (Plain text injected) */}
//             <div
//               className="mt-3 text-gray-700 prose prose-sm max-w-none line-clamp-6!"
//               dangerouslySetInnerHTML={{
//                 __html: getContentSnippet(item, q),
//               }}
//             />

//             {/* image if provided */}
//             {getImage(item) ? (
//               <div className="mt-3">
//                 <img
//                   src={getImage(item)}
//                   alt={getTitle(item)}
//                   className="w-full max-h-64 object-cover"
//                 />
//               </div>
//             ) : null}

//             {/* CTA - Dummy Link */}
//             <div className="mt-4">
//               <a
//                 href={getLink(item)}
//                 className="inline-block text-[#F47922] underline cursor-default"
//               >
//                 Visit Page →
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* pagination numbers */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-8">
//           {renderPageButtons()}
//         </div>
//       )}
//     </div>
//   );
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
//
//
//
//
// "use client";

// import { useSearchParams, useRouter, useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const PER_PAGE = 5;

// export const API_ENDPOINTS = [
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/incity_parks",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/media_news",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/career_page",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/customers_speak",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog",
//   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/hyderabad_micro_blog",
// ];

// export default function SearchPageClient() {
//   const searchParams = useSearchParams();
//   const params = useParams();
//   const router = useRouter();
//   const q = (params.word || "").trim();
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

//   // We store ALL fetched results here to handle client-side pagination across multiple APIs
//   const [allFetchedData, setAllFetchedData] = useState([]);

//   // These are the results actually displayed on the current page
//   const [displayedResults, setDisplayedResults] = useState([]);

//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   // 1. Fetching Effect: Runs IMMEDIATELY when 'q' changes (No Debounce)
//   useEffect(() => {
//     if (!q) {
//       setAllFetchedData([]);
//       setDisplayedResults([]);
//       setTotalPages(1);
//       return;
//     }

//     let mounted = true;

//     async function fetchAllEndpoints() {
//       setLoading(true);
//       setErr(null);

//       try {
//         const fetchPromises = API_ENDPOINTS.map((endpoint) => {
//           const url = `${endpoint}?search=${encodeURIComponent(q)}&per_page=20`;
//           return fetch(url, { cache: "no-store" })
//             .then((res) => {
//               if (!res.ok) return [];
//               return res.json();
//             })
//             .then((data) => (Array.isArray(data) ? data : []))
//             .catch(() => []);
//         });

//         const resultsArrays = await Promise.all(fetchPromises);
//         const combinedResults = resultsArrays.flat();

//         if (mounted) {
//           setAllFetchedData(combinedResults);
//           const total = combinedResults.length;
//           const tp = total > 0 ? Math.ceil(total / PER_PAGE) : 1;
//           setTotalPages(tp);
//         }
//       } catch (error) {
//         if (mounted) {
//           setErr("An unexpected error occurred while searching.");
//           setAllFetchedData([]);
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     }

//     // Invoke immediately
//     fetchAllEndpoints();

//     return () => {
//       mounted = false;
//     };
//   }, [q]);

//   // 2. Pagination Effect
//   useEffect(() => {
//     if (!allFetchedData.length) {
//       setDisplayedResults([]);
//       return;
//     }
//     const startIndex = (page - 1) * PER_PAGE;
//     const endIndex = startIndex + PER_PAGE;
//     const slice = allFetchedData.slice(startIndex, endIndex);
//     setDisplayedResults(slice);
//   }, [page, allFetchedData]);

//   // Helper: safely get title string (prioritizing title.rendered)
//   const getTitle = (item) =>
//     item?.title?.rendered ?? item?.title ?? item?.post_title ?? "Untitled";

//   // Helper: extract plain text from HTML
//   const stripHtml = (html) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.innerText || div.textContent || "";
//   };

//   // Helper: Get plain text snippet without highlighting, but maintaining context
//   const getContentSnippet = (item, searchTerm) => {
//     // Prioritize content.rendered
//     let fullText = item?.content?.rendered ?? "";

//     if (!fullText) return "";

//     const plainText = stripHtml(fullText).trim();
//     if (!plainText) return "";

//     // Split into sentences
//     const sentences = plainText
//       .split(". ")
//       .map((s) => s.trim())
//       .filter((s) => s.length > 0);

//     if (sentences.length === 0) return "";

//     let startIndex = 0;
//     // We still find the relevant sentence to start the excerpt from,
//     // so the search result makes sense, but we DO NOT highlight the word.
//     if (searchTerm) {
//       const lowerSearch = searchTerm.toLowerCase();
//       for (let i = 0; i < sentences.length; i++) {
//         if (sentences[i].toLowerCase().includes(lowerSearch)) {
//           startIndex = i;
//           break;
//         }
//       }
//     }

//     const endIndex = Math.min(startIndex + 4, sentences.length);
//     const snippetSentences = sentences.slice(startIndex, endIndex);
//     let snippetText = snippetSentences.join(". ");

//     // Add ellipsis
//     const prefix = startIndex > 0 ? "... " : "";
//     const suffix = endIndex < sentences.length ? " ..." : "";

//     return prefix + snippetText + suffix;
//   };

//   // Helper: DUMMY link
//   const getLink = () => "#";

//   // Helper: image URL
//   const getImage = (item) => {
//     if (item?.featured_media && typeof item.featured_media !== "number") {
//       return item.featured_media;
//     }
//     return item?.image ?? item?.acf?.image ?? null;
//   };

//   // Helper: formatted date
//   const getDate = (item) =>
//     item?.date
//       ? new Date(item.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       : "";

//   // Navigation helper
//   const goToPage = (p) => {
//     const basePath = `/search/${q}`;
//     const queryParams = new URLSearchParams();
//     if (p > 1) queryParams.set("page", String(p));
//     const queryString = queryParams.toString();
//     router.push(queryString ? `${basePath}?${queryString}` : basePath);
//   };

//   // Pagination window
//   const renderPageButtons = () => {
//     const windowSize = 5;
//     const half = Math.floor(windowSize / 2);
//     let start = Math.max(1, page - half);
//     let end = Math.min(totalPages, start + windowSize - 1);

//     if (end - start < windowSize - 1) {
//       start = Math.max(1, end - windowSize + 1);
//     }

//     const buttons = [];
//     for (let i = start; i <= end; i += 1) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => goToPage(i)}
//           className={`px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer ${
//             i === page ? "bg-[#F47922] text-white" : ""
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     const items = [];
//     if (start > 1) {
//       items.push(
//         <button
//           key="1"
//           onClick={() => goToPage(1)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           1
//         </button>
//       );
//       if (start > 2)
//         items.push(
//           <span key="left-ellipsis" className="px-2">
//             …
//           </span>
//         );
//     }
//     items.push(...buttons);
//     if (end < totalPages) {
//       if (end < totalPages - 1)
//         items.push(
//           <span key="right-ellipsis" className="px-2">
//             …
//           </span>
//         );
//       items.push(
//         <button
//           key={totalPages}
//           onClick={() => goToPage(totalPages)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           {totalPages}
//         </button>
//       );
//     }
//     return items;
//   };

//   // Skeleton Components
//   const SkeletonHeader = () => (
//     <div className="animate-pulse mb-4">
//       <div className="h-10 bg-gray-200 rounded w-4/5"></div>
//     </div>
//   );

//   const SkeletonControls = () => (
//     <div className="animate-pulse mb-6 flex items-center gap-3">
//       <div className="h-4 bg-gray-200 rounded w-32"></div>
//       <div className="ml-auto flex items-center gap-2">
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       </div>
//     </div>
//   );

//   const SkeletonArticle = () => (
//     <article className="border-gray-200 border p-5 bg-white shadow-sm animate-pulse">
//       <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//       <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
//       <div className="space-y-2 mb-3">
//         <div className="h-4 bg-gray-200 rounded w-full"></div>
//         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//         <div className="h-4 bg-gray-200 rounded w-4/5"></div>
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//       </div>
//       <div className="h-48 bg-gray-200 rounded mb-4"></div>
//       <div className="h-4 bg-gray-200 rounded w-24"></div>
//     </article>
//   );

//   const SkeletonPagination = () => (
//     <div className="flex items-center justify-center gap-2 mt-8 animate-pulse">
//       {Array.from({ length: 7 }).map((_, i) => (
//         <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
//       ))}
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="fix xl:py-24 py-12">
//         <SkeletonHeader />
//         <SkeletonControls />
//         <div className="space-y-6">
//           {Array.from({ length: PER_PAGE }).map((_, i) => (
//             <SkeletonArticle key={i} />
//           ))}
//         </div>
//         <SkeletonPagination />
//       </div>
//     );
//   }

//   return (
//     <div className="fix xl:py-24 py-12">
//       <h1 className="text-3xl font-bold mb-4">
//         Search Results for: <span className="text-[#F47922]">{q || "—"}</span>
//       </h1>

//       {/* Controls */}
//       <div className="mb-6 flex items-center gap-3">
//         <div className="text-sm text-gray-600">
//           Page {page} of {totalPages} ({allFetchedData.length} items)
//         </div>
//         <div className="ml-auto flex items-center gap-2">
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               First
//             </button>
//           )}
//           {page > 1 && (
//             <button
//               onClick={() => goToPage(page - 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Prev
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(page + 1)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Next
//             </button>
//           )}
//           {page < totalPages && (
//             <button
//               onClick={() => goToPage(totalPages)}
//               className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//             >
//               Last
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Loading / Error */}
//       {err && <p className="text-red-600">Error: {err}</p>}

//       {/* No results */}
//       {!loading && displayedResults.length === 0 && !err && (
//         <p className="text-gray-500">No results found.</p>
//       )}

//       {/* Results */}
//       <div className="space-y-6">
//         {displayedResults.map((item, index) => (
//           <article
//             key={`${item.id}-${index}`}
//             className="border-gray-200 border p-5 bg-white"
//           >
//             <h2 className="text-2xl font-semibold">
//               <a
//                 href={getLink(item)}
//                 className="text-[#F47922] hover:underline cursor-default"
//                 // Using dangerouslySetInnerHTML to decode entities in title.rendered
//                 dangerouslySetInnerHTML={{
//                   __html: getTitle(item),
//                 }}
//               />
//             </h2>

//             {/* meta: date / type */}
//             <div className="text-sm text-gray-500 mt-1">
//               {getDate(item)}
//               {item.type ? ` • ${item.type}` : ""}
//             </div>

//             {/* excerpt / description as HTML (Plain text injected) */}
//             <div
//               className="mt-3 text-gray-700 prose prose-sm max-w-none line-clamp-6!"
//               dangerouslySetInnerHTML={{
//                 __html: getContentSnippet(item, q),
//               }}
//             />

//             {/* image if provided */}
//             {getImage(item) ? (
//               <div className="mt-3">
//                 <img
//                   src={getImage(item)}
//                   alt={getTitle(item)}
//                   className="w-full max-h-64 object-cover"
//                 />
//               </div>
//             ) : null}

//             {/* CTA - Dummy Link */}
//             <div className="mt-4">
//               <a
//                 href={getLink(item)}
//                 className="inline-block text-[#F47922] underline cursor-default"
//               >
//                 Visit Page →
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* pagination numbers */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-8">
//           {renderPageButtons()}
//         </div>
//       )}
//     </div>
//   );
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
//
//
//
//
//
//
// "use client";

// import { useSearchParams, useRouter, useParams } from "next/navigation";
// import { useEffect, useState, useMemo } from "react";
// import { API_ENDPOINTS } from "../FieldKeys";

// const PER_PAGE = 5;

// export default function SearchPageClient() {
//   const searchParams = useSearchParams();
//   const params = useParams();
//   const router = useRouter();

//   // FIX: Explicitly decode the word parameter for reliable display.
//   // We use decodeURIComponent in case it wasn't fully decoded by Next.js's router.
//   const rawQ = params.word || "";
//   const q = decodeURIComponent(rawQ).trim();

//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

//   // We store ALL fetched results here to handle client-side pagination across multiple APIs
//   const [allFetchedData, setAllFetchedData] = useState([]);

//   // These are the results actually displayed on the current page
//   const [displayedResults, setDisplayedResults] = useState([]);

//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   // 1. Fetching Effect: Runs IMMEDIATELY when 'q' changes
//   useEffect(() => {
//     // Note: q here is the *decoded* version (e.g., "cafe con")
//     if (!q) {
//       setAllFetchedData([]);
//       setDisplayedResults([]);
//       setTotalPages(1);
//       return;
//     }

//     let mounted = true;

//     async function fetchAllEndpoints() {
//       setLoading(true);
//       setErr(null);

//       try {
//         const fetchPromises = API_ENDPOINTS.map((endpoint) => {
//           // IMPORTANT: When building the API URL, the query must be encoded again
//           // to be safe for transmission, especially since we decoded it for 'q'.
//           const url = `${endpoint}?search=${encodeURIComponent(q)}&per_page=20`;
//           return fetch(url, { cache: "no-store" })
//             .then((res) => {
//               // Handle non-200 responses gracefully by returning empty array
//               if (!res.ok) return [];
//               return res.json();
//             })
//             .then((data) => (Array.isArray(data) ? data : []))
//             .catch(() => []); // Catch network errors for this specific endpoint
//         });

//         const resultsArrays = await Promise.all(fetchPromises);
//         const combinedResults = resultsArrays.flat();

//         if (mounted) {
//           setAllFetchedData(combinedResults);
//           const total = combinedResults.length;
//           const tp = total > 0 ? Math.ceil(total / PER_PAGE) : 1;
//           setTotalPages(tp);
//         }
//       } catch (error) {
//         if (mounted) {
//           setErr("An unexpected error occurred while searching.");
//           setAllFetchedData([]);
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     }

//     // Invoke immediately
//     fetchAllEndpoints();

//     return () => {
//       mounted = false;
//     };
//   }, [q]);

//   // 2. Pagination Effect
//   useEffect(() => {
//     if (!allFetchedData.length) {
//       setDisplayedResults([]);
//       return;
//     }
//     const startIndex = (page - 1) * PER_PAGE;
//     const endIndex = startIndex + PER_PAGE;
//     const slice = allFetchedData.slice(startIndex, endIndex);
//     setDisplayedResults(slice);
//   }, [page, allFetchedData]);

//   // Helper: safely get title string (prioritizing title.rendered)
//   const getTitle = (item) =>
//     item?.title?.rendered ?? item?.title ?? item?.post_title ?? "Untitled";

//   // Helper: extract plain text from HTML
//   const stripHtml = (html) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.innerText || div.textContent || "";
//   };

//   // Helper: Get plain text snippet without highlighting, but maintaining context
//   const getContentSnippet = (item, searchTerm) => {
//     let fullText = item?.content?.rendered ?? "";

//     if (!fullText) return "";

//     const plainText = stripHtml(fullText).trim();
//     if (!plainText) return "";

//     // Split into sentences
//     const sentences = plainText
//       .split(". ")
//       .map((s) => s.trim())
//       .filter((s) => s.length > 0);

//     if (sentences.length === 0) return "";

//     let startIndex = 0;

//     // Find the relevant sentence to start the excerpt from
//     if (searchTerm) {
//       const lowerSearch = searchTerm.toLowerCase();
//       for (let i = 0; i < sentences.length; i++) {
//         if (sentences[i].toLowerCase().includes(lowerSearch)) {
//           startIndex = i;
//           break;
//         }
//       }
//     }

//     const endIndex = Math.min(startIndex + 4, sentences.length);
//     const snippetSentences = sentences.slice(startIndex, endIndex);
//     let snippetText = snippetSentences.join(". ");

//     // Add ellipsis
//     const prefix = startIndex > 0 ? "... " : "";
//     const suffix = endIndex < sentences.length ? " ..." : "";

//     return prefix + snippetText + suffix;
//   };

//   // Helper: DUMMY link
//   const getLink = () => "#";

//   // Helper: image URL
//   const getImage = (item) => {
//     if (item?.featured_media && typeof item.featured_media !== "number") {
//       return item.featured_media;
//     }
//     return item?.image ?? item?.acf?.image ?? null;
//   };

//   // Helper: formatted date
//   const getDate = (item) =>
//     item?.date
//       ? new Date(item.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       : "";

//   // Navigation helper
//   const goToPage = (p) => {
//     // Ensure page number is valid before navigating
//     const targetPage = Math.max(1, Math.min(p, totalPages));

//     // The base path must use the raw, potentially encoded, URL segment
//     const basePath = `/search/${rawQ}`;
//     const queryParams = new URLSearchParams();
//     if (targetPage > 1) queryParams.set("page", String(targetPage));
//     const queryString = queryParams.toString();
//     router.push(queryString ? `${basePath}?${queryString}` : basePath);
//   };

//   // Pagination window
//   const renderPageButtons = () => {
//     const windowSize = 5;
//     const half = Math.floor(windowSize / 2);
//     let start = Math.max(1, page - half);
//     let end = Math.min(totalPages, start + windowSize - 1);

//     if (end - start < windowSize - 1) {
//       start = Math.max(1, end - windowSize + 1);
//     }

//     const buttons = [];
//     for (let i = start; i <= end; i += 1) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => goToPage(i)}
//           className={`px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer ${
//             i === page ? "bg-[#F47922] text-white" : ""
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     const items = [];
//     if (start > 1) {
//       items.push(
//         <button
//           key="1"
//           onClick={() => goToPage(1)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           1
//         </button>
//       );
//       if (start > 2)
//         items.push(
//           <span key="left-ellipsis" className="px-2">
//             …
//           </span>
//         );
//     }
//     items.push(...buttons);
//     if (end < totalPages) {
//       if (end < totalPages - 1)
//         items.push(
//           <span key="right-ellipsis" className="px-2">
//             …
//           </span>
//         );
//       items.push(
//         <button
//           key={totalPages}
//           onClick={() => goToPage(totalPages)}
//           className="px-3 py-1 border hover:bg-[#F47922]/10 cursor-pointer"
//         >
//           {totalPages}
//         </button>
//       );
//     }
//     return items;
//   };

//   // Skeleton Components (unchanged)
//   const SkeletonHeader = () => (
//     <div className="animate-pulse mb-4">
//       <div className="h-10 bg-gray-200 rounded w-4/5"></div>
//     </div>
//   );

//   const SkeletonControls = () => (
//     <div className="animate-pulse mb-6 flex items-center gap-3">
//       <div className="h-4 bg-gray-200 rounded w-32"></div>
//       <div className="ml-auto flex items-center gap-2">
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//         <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       </div>
//     </div>
//   );

//   const SkeletonArticle = () => (
//     <article className="border-gray-200 border p-5 bg-white shadow-sm animate-pulse">
//       <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//       <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
//       <div className="space-y-2 mb-3">
//         <div className="h-4 bg-gray-200 rounded w-full"></div>
//         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//         <div className="h-4 bg-gray-200 rounded w-4/5"></div>
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//       </div>
//       <div className="h-48 bg-gray-200 rounded mb-4"></div>
//       <div className="h-4 bg-gray-200 rounded w-24"></div>
//     </article>
//   );

//   const SkeletonPagination = () => (
//     <div className="flex items-center justify-center gap-2 mt-8 animate-pulse">
//       {Array.from({ length: 7 }).map((_, i) => (
//         <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
//       ))}
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="fix xl:py-24 py-12">
//         <SkeletonHeader />
//         <SkeletonControls />
//         <div className="space-y-6">
//           {Array.from({ length: PER_PAGE }).map((_, i) => (
//             <SkeletonArticle key={i} />
//           ))}
//         </div>
//         <SkeletonPagination />
//       </div>
//     );
//   }

//   // --- Start of Updated Control Buttons ---

//   const isFirstPage = page === 1;
//   const isLastPage = page === totalPages;

//   // Function to generate common button classes
//   const getButtonClass = (disabled) =>
//     `px-3 py-1 border cursor-pointer transition-opacity duration-150 ${
//       disabled ? "opacity-50 pointer-events-none" : "hover:bg-[#F47922]/10"
//     }`;

//   return (
//     <div className="fix xl:py-24 py-12">
//       <h1 className="text-3xl font-bold mb-4">
//         {/* CORRECTED DISPLAY: Now displays the decoded search term, e.g., "cafe con" */}
//         Search Results for: <span className="text-[#F47922]">{q || "—"}</span>
//       </h1>

//       {/* Controls */}
//       <div className="mb-6 flex items-center gap-3">
//         <div className="text-sm text-gray-600">
//           Page {page} of {totalPages} ({allFetchedData.length} items)
//         </div>
//         <div className="ml-auto flex items-center gap-2">
//           {/* First Button */}
//           <button
//             onClick={() => goToPage(1)}
//             disabled={isFirstPage}
//             className={getButtonClass(isFirstPage)}
//           >
//             First
//           </button>

//           {/* Prev Button */}
//           <button
//             onClick={() => goToPage(page - 1)}
//             disabled={isFirstPage}
//             className={getButtonClass(isFirstPage)}
//           >
//             Prev
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={() => goToPage(page + 1)}
//             disabled={isLastPage}
//             className={getButtonClass(isLastPage)}
//           >
//             Next
//           </button>

//           {/* Last Button */}
//           <button
//             onClick={() => goToPage(totalPages)}
//             disabled={isLastPage}
//             className={getButtonClass(isLastPage)}
//           >
//             Last
//           </button>
//         </div>
//       </div>

//       {/* --- End of Updated Control Buttons --- */}

//       {/* Loading / Error */}
//       {err && <p className="text-red-600">Error: {err}</p>}

//       {/* No results */}
//       {!loading && displayedResults.length === 0 && !err && (
//         <p className="text-gray-500">No results found.</p>
//       )}

//       {/* Results */}
//       <div className="space-y-6">
//         {displayedResults.map((item, index) => (
//           <article
//             key={`${item.id}-${index}`}
//             className="border-gray-200 border p-5 bg-white"
//           >
//             <h2 className="text-2xl font-semibold">
//               <a
//                 href={getLink(item)}
//                 className="text-[#F47922] hover:underline cursor-default"
//                 // Using dangerouslySetInnerHTML to decode entities in title.rendered
//                 dangerouslySetInnerHTML={{
//                   __html: getTitle(item),
//                 }}
//               />
//             </h2>

//             {/* meta: date / type */}
//             <div className="text-sm text-gray-500 mt-1">
//               {getDate(item)}
//               {item.type ? ` • ${item.type}` : ""}
//             </div>

//             {/* excerpt / description as HTML (Plain text injected) */}
//             <div
//               className="mt-3 text-gray-700 prose prose-sm max-w-none line-clamp-4!"
//               dangerouslySetInnerHTML={{
//                 __html: getContentSnippet(item, q),
//               }}
//             />

//             {/* image if provided */}
//             {getImage(item) ? (
//               <div className="mt-3">
//                 <img
//                   src={getImage(item)}
//                   alt={getTitle(item)}
//                   className="w-full max-h-64 object-cover"
//                 />
//               </div>
//             ) : null}

//             {/* CTA - Dummy Link */}
//             <div className="mt-4">
//               <a
//                 href={getLink(item)}
//                 className="inline-block text-[#F47922] underline cursor-default"
//               >
//                 Visit Page →
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* pagination numbers */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-8">
//           {renderPageButtons()}
//         </div>
//       )}
//     </div>
//   );
// }
// src/components/search/SearchPageClient.jsx
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
"use client";

import { useSearchParams, useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
// Assuming this is the correct path to your endpoints
import { API_ENDPOINTS } from "../FieldKeys";
import SearchControlsAndResults from "./SearchControlsAndResults";
import {
  PER_PAGE,
  fetchCombinedResults,
  getButtonClass,
  getContentSnippet,
  getDate,
  getImage,
  getLink,
  getTitle,
  goToPageFactory,
  renderPageButtons,
} from "@/src/lib/search-utils";

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();

  // FIX: Explicitly decode the word parameter for reliable display.
  const rawQ = params.word || "";
  const q = decodeURIComponent(rawQ).trim();

  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const [allFetchedData, setAllFetchedData] = useState([]);
  const [displayedResults, setDisplayedResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // Factory function to create a navigation helper that closes over 'router', 'rawQ', and 'totalPages'
  const goToPage = goToPageFactory(router, rawQ, totalPages);

  // 1. Fetching Effect: Runs when 'q' changes
  useEffect(() => {
    if (!q) {
      setAllFetchedData([]);
      setDisplayedResults([]);
      setTotalPages(1);
      return;
    }

    let mounted = true;

    fetchCombinedResults(API_ENDPOINTS, q)
      .then((combinedResults) => {
        if (mounted) {
          setAllFetchedData(combinedResults);
          const total = combinedResults.length;
          const tp = total > 0 ? Math.ceil(total / PER_PAGE) : 1;
          setTotalPages(tp);
          setLoading(false);
          setErr(null);
        }
      })
      .catch((error) => {
        console.error("Search fetch error:", error);
        if (mounted) {
          setErr("An unexpected error occurred while searching.");
          setAllFetchedData([]);
          setLoading(false);
        }
      });

    setLoading(true);
    setErr(null);

    return () => {
      mounted = false;
    };
  }, [q]);

  // 2. Pagination Effect: Runs when 'page' or 'allFetchedData' changes
  useEffect(() => {
    if (!allFetchedData.length) {
      setDisplayedResults([]);
      return;
    }
    const startIndex = (page - 1) * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    const slice = allFetchedData.slice(startIndex, endIndex);
    setDisplayedResults(slice);
  }, [page, allFetchedData]);

  // Pass all state and derived values to the rendering component
  return (
    <SearchControlsAndResults
      q={q}
      page={page}
      totalPages={totalPages}
      allFetchedDataLength={allFetchedData.length}
      displayedResults={displayedResults}
      loading={loading}
      err={err}
      goToPage={goToPage}
    />
  );
}
