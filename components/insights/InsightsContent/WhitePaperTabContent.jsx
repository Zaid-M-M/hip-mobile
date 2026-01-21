// "use client";
// import React, { useState, useEffect } from "react";
// import BlogGrid from "./BlogGrid"; // Reuse grid for white paper cards
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";

// const WhitePaperTabContent = () => {
//   const [papers, setPapers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const postsPerPage = 6;

//   const fetchPapers = async (page = 1) => {
//     setLoading(true);
//     try {
//       const params = { per_page: postsPerPage, page };
//       // Use CMS or static API
//       const result = await cmsApi.getWhitePapers(params);

//       if (result.success) {
//         const data = result.data || [];
//         if (page === 1) setPapers(data);
//         else setPapers((prev) => [...prev, ...data]);
//         setHasMore(data.length >= postsPerPage);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchPapers(1);
//     setCurrentPage(1);
//   }, []);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchPapers(nextPage);
//   };

//   if (loading && papers.length === 0)
//     return <div className="text-center py-10">Loading White Papers...</div>;

//   if (papers.length === 0)
//     return <div className="text-center py-10">No white papers found.</div>;

//   return (
//     <>
//       <BlogGrid blogs={papers} /> {/* Reuse BlogGrid for white paper cards */}
//       {hasMore && <LoadMoreButton onLoadMore={loadMore} loading={loading} />}
//     </>
//   );
// };

// export default WhitePaperTabContent;
// src/components/WhitePaperTabContent.tsx
"use client";

import React from "react";
import BlogGrid from "./BlogGrid";
import LoadMoreButton from "./LoadMoreButton";
import WPGrid from "./WPGrid";

const staticPapers = [
  {
    id: 1,
    slug: "reverse-logistics-in-india",
    title: {
      rendered:
        "Reverse Logistics in India:<br/>Grade A Box Turning Returns into Strategic Advantage",
    },
    acf: {
      blog_image: "/white_paper/white_paper_sec2bg.jpg",
    },
  },
];

const postsPerPage = 6;

const WhitePaperTabContent = () => {
  // No loading state needed for static data
  const [displayedPapers, setDisplayedPapers] = React.useState(
    staticPapers.slice(0, postsPerPage)
  );
  const [hasMore, setHasMore] = React.useState(
    staticPapers.length > postsPerPage
  );

  const loadMore = () => {
    const nextStart = displayedPapers.length;
    const nextEnd = nextStart + postsPerPage;
    const nextSlice = staticPapers.slice(nextStart, nextEnd);

    setDisplayedPapers((prev) => [...prev, ...nextSlice]);
    setHasMore(nextEnd < staticPapers.length);
  };

  // Empty state
  if (displayedPapers.length === 0) {
    return <div className="text-center py-10">No white papers found.</div>;
  }

  return (
    <div className="mt-10">
      {/* Re‑use the same BlogGrid that renders BlogCard */}
      <WPGrid blogs={displayedPapers} activeTab="White Papers" />

      {/* Show Load More only if there are more items */}
      {hasMore && <LoadMoreButton onLoadMore={loadMore} loading={false} />}
    </div>
  );
};

export default WhitePaperTabContent;
