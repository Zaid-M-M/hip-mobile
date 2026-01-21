// // src/components/search/SearchControlsAndResults.jsx

// import React from "react";
// import {
//   PER_PAGE,
//   fetchCombinedResults,
//   getButtonClass,
//   getContentSnippet,
//   getDate,
//   getImage,
//   getLink,
//   getTitle,
//   goToPageFactory,
//   renderPageButtons,
// } from "@/src/lib/search-utils";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// // --- Skeleton Components ---

// const SkeletonHeader = () => (
//   <div className="animate-pulse mb-4">
//     <div className="h-10 bg-gray-200 rounded w-4/5"></div>
//   </div>
// );

// const SkeletonControls = () => (
//   <div className="animate-pulse mb-6 flex items-center gap-3">
//     <div className="h-4 bg-gray-200 rounded w-32"></div>
//     <div className="ml-auto flex items-center gap-2">
//       <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       <div className="h-8 w-16 bg-gray-200 rounded"></div>
//       <div className="h-8 w-16 bg-gray-200 rounded"></div>
//     </div>
//   </div>
// );

// const SkeletonArticle = () => (
//   <article className="border-gray-200 border p-5 bg-white shadow-sm animate-pulse">
//     <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//     <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
//     <div className="space-y-2 mb-3">
//       <div className="h-4 bg-gray-200 rounded w-full"></div>
//       <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//       <div className="h-4 bg-gray-200 rounded w-4/5"></div>
//       <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//     </div>
//     <div className="h-48 bg-gray-200 rounded mb-4"></div>
//     <div className="h-4 bg-gray-200 rounded w-24"></div>
//   </article>
// );

// const SkeletonPagination = () => (
//   <div className="flex items-center justify-center gap-2 mt-8 animate-pulse">
//     {Array.from({ length: 7 }).map((_, i) => (
//       <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
//     ))}
//   </div>
// );

// // --- Main Rendering Component ---

// export default function SearchControlsAndResults({
//   q,
//   page,
//   totalPages,
//   allFetchedDataLength,
//   displayedResults,
//   loading,
//   err,
//   goToPage,
// }) {
//   const isFirstPage = page === 1;
//   const isLastPage = page === totalPages;

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
//           Page {page} of {totalPages} ({allFetchedDataLength} items)
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

//       {/* Loading / Error */}
//       {err && <p className="text-red-600">Error: {err}</p>}

//       {/* No results */}
//       {!loading && displayedResults.length === 0 && !err && (
//         <p className="text-gray-500">No results found.</p>
//       )}

//       {/* Results */}
//       <div className="flex flex-col gap-6">
//         {displayedResults.map((item, index) => (
//           // 1. Apply 'group' class to the clickable parent (the Link component)
//           <Link
//             key={`${item.id}-${index}`} // Moved key here as it is the outermost element in the map
//             href={getLink(item)}
//             className="group"
//           >
//             <article
//               // Removed key from article since it's on the Link now
//               className="border-gray-200 border p-5 bg-white hover:bg-[#F4792210] transition-colors duration-500"
//             >
//               <h2 className="text-2xl font-semibold">
//                 {/* The <a> tag inside <h2> should be removed or changed to a <span> */}
//                 {/* since the entire <Link> is now clickable */}
//                 <span
//                   className="text-[#F47922] cursor-pointer"
//                   dangerouslySetInnerHTML={{
//                     __html: getTitle(item),
//                   }}
//                 />
//               </h2>

//               {/* meta: date / type */}
//               <div className="text-sm text-gray-500 mt-1">
//                 {/* {getDate(item)} */}
//                 {item.type ? `${item.type}` : ""}
//               </div>

//               {/* excerpt / description as HTML (Plain text injected) */}
//               <div
//                 className="mt-3 text-gray-700 prose prose-sm max-w-none line-clamp-4!"
//                 dangerouslySetInnerHTML={{
//                   __html: getContentSnippet(item, q),
//                 }}
//               />

//               <div className="mt-4">
//                 {/* The p tag should now correctly respond to the group-hover state */}
//                 <p className="text-[#F47922] cursor-pointer flex gap-[2px] items-center group-hover:translate-x-1 transition-transform duration-500">
//                   <span className="text-[20px] bw-r">Visit Page</span>
//                   {/* ArrowRight now needs 'group-hover' removed as it inherits the transition from p */}
//                   {/* If the ArrowRight needs its own transition, you can leave it, but often it's redundant */}
//                   <ArrowRight size={24} />
//                 </p>
//               </div>
//             </article>
//           </Link>
//         ))}
//       </div>

//       {/* pagination numbers */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-8">
//           {renderPageButtons(page, totalPages, goToPage)}
//         </div>
//       )}
//     </div>
//   );
// }
// src/components/search/SearchControlsAndResults.jsx

import React from "react";
import {
  PER_PAGE,
  // Removed unused imports to clean up
  getButtonClass,
  getContentSnippet,
  getDate,
  getImage,
  getLink,
  getTitle,
  renderPageButtons,
} from "@/src/lib/search-utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Skeleton Components ---

const SkeletonHeader = () => (
  <div className="animate-pulse mb-4">
    <div className="h-10 bg-gray-200 rounded w-4/5"></div>
  </div>
);

const SkeletonControls = () => (
  <div className="animate-pulse mb-6 flex items-center gap-3">
    <div className="h-4 bg-gray-200 rounded w-32"></div>
    <div className="ml-auto flex items-center gap-2">
      <div className="h-8 w-16 bg-gray-200 rounded"></div>
      <div className="h-8 w-16 bg-gray-200 rounded"></div>
      <div className="h-8 w-16 bg-gray-200 rounded"></div>
      <div className="h-8 w-16 bg-gray-200 rounded"></div>
    </div>
  </div>
);

const SkeletonArticle = () => (
  <article className="border-gray-200 border p-5 bg-white shadow-sm animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
    <div className="space-y-2 mb-3">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
    <div className="h-4 bg-gray-200 rounded w-24"></div>
  </article>
);

const SkeletonPagination = () => (
  <div className="flex items-center justify-center gap-2 mt-8 animate-pulse">
    {Array.from({ length: 7 }).map((_, i) => (
      <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
    ))}
  </div>
);

// --- Main Rendering Component ---

export default function SearchControlsAndResults({
  q,
  page,
  totalPages,
  allFetchedDataLength,
  displayedResults,
  loading,
  err,
  goToPage,
}) {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  if (loading) {
    return (
      // Apply fade-in for skeleton when loading starts
      <div className="fix xl:py-24 py-12 transition-opacity duration-500 opacity-100">
        <SkeletonHeader />
        <SkeletonControls />
        <div className="space-y-6">
          {Array.from({ length: PER_PAGE }).map((_, i) => (
            <SkeletonArticle key={i} />
          ))}
        </div>
        <SkeletonPagination />
      </div>
    );
  }

  // Determine the opacity class for the results section based on the state.
  // This class will be applied to the main results container.
  const contentOpacityClass = loading ? "opacity-0" : "opacity-100";

  return (
    <div
      className={`fix xl:py-24 py-12 transition-opacity duration-500 ${contentOpacityClass}`}
    >
      <h1 className="text-3xl font-bold mb-4">
        Search Results for: <br className="lg:hidden block" />{" "}
        <span className="text-[#F47922]">{q || "—"}</span>
      </h1>

      {/* Controls - Added transition-opacity */}
      <div className="mb-6 flex lg:items-center gap-3 lg:flex-row flex-col transition-opacity duration-500">
        <div className="text-sm text-gray-600">
          Page {page} of {totalPages} ({allFetchedDataLength} items)
        </div>
        <div className="lg:ml-auto flex items-center gap-2">
          {/* First Button */}
          <button
            onClick={() => goToPage(1)}
            disabled={isFirstPage}
            className={getButtonClass(isFirstPage)}
          >
            First
          </button>

          {/* Prev Button */}
          <button
            onClick={() => goToPage(page - 1)}
            disabled={isFirstPage}
            className={getButtonClass(isFirstPage)}
          >
            Prev
          </button>

          {/* Next Button */}
          <button
            onClick={() => goToPage(page + 1)}
            disabled={isLastPage}
            className={getButtonClass(isLastPage)}
          >
            Next
          </button>

          {/* Last Button */}
          <button
            onClick={() => goToPage(totalPages)}
            disabled={isLastPage}
            className={getButtonClass(isLastPage)}
          >
            Last
          </button>
        </div>
      </div>

      {/* Loading / Error */}
      {err && <p className="text-red-600">Error: {err}</p>}

      {/* No results */}
      {!loading && displayedResults.length === 0 && !err && (
        <p className="text-gray-500">No results found.</p>
      )}

      {/* Results - Added fade-in/out transition to the container */}
      <div className="flex flex-col gap-6">
        {displayedResults.map((item, index) => (
          // Individual card fade-in on first render or new page load
          <Link
            key={`${item.id}-${index}`}
            href={getLink(item)}
            className="group transition-opacity duration-500 opacity-100" // Added transition and opacity-100
            style={{ transitionDelay: `${index * 50}ms` }} // Optional: Stagger the cards slightly
          >
            <article className="border-gray-200 border p-3 lg:p-5 bg-white hover:bg-[#F47922]/10 transition-colors duration-500">
              <h2 className="xl:text-[24px] text-[18px] font-semibold">
                <span
                  className="text-[#F47922] cursor-pointer"
                  dangerouslySetInnerHTML={{
                    __html: getTitle(item),
                  }}
                />
              </h2>

              {/* meta: date / type */}
              <div className="text-sm text-gray-500 mt-1">
                {/* {getDate(item)} */}
                {item.type ? `${item.type}` : ""}
              </div>

              {/* excerpt / description as HTML (Plain text injected) */}
              <div
                className="mt-3 text-gray-700 prose prose-sm max-w-none line-clamp-4!"
                dangerouslySetInnerHTML={{
                  __html: getContentSnippet(item, q),
                }}
              />

              <div className="mt-4">
                {/* Fixed group-hover to translate-x-1 for a smoother rightward movement */}
                <p className="text-[#F47922] cursor-pointer flex gap-[2px] items-center group-hover:translate-x-1 transition-transform duration-500">
                  <span className="lg:text-[20px] text-[16px] bw-r">
                    Visit Page
                  </span>
                  <ArrowRight className="transition-transform duration-500 group-hover:translate-x-0 lg:text-[24px]" />
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* pagination numbers - Added transition-opacity */}
      {/* {totalPages > 1 && (
        <div className="flex items-center w-[90%] mx-auto overflow-hidden justify-center gap-2 mt-8 transition-opacity duration-500">
          {renderPageButtons(page, totalPages, goToPage)}
        </div>
      )} */}
      {totalPages > 1 && (
        <div className="w-[90%] mx-auto overflow-x-auto">
          <div className="flex items-center justify-center gap-1 lg:gap-2 mt-8 min-w-max px-2">
            {renderPageButtons(page, totalPages, goToPage)}
          </div>
        </div>
      )}
    </div>
  );
}
