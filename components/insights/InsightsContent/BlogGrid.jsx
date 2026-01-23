// "use client";
// import React from "react";
// import BlogCard from "./BlogCard";
// import NewsCard from "@/components/news/NewsCard";

// const BlogGrid = ({ blogs, activeTab, onEventClick, pressReleaseFilter }) => {
//   if (!blogs || blogs.length === 0) {
//     return (
//       <div className="text-center py-[60px]">
//         <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
//           No {activeTab.toLowerCase()} found
//         </div>
//         <div className="bw-r text-[16px] text-[#999999]">
//           Try adjusting your filters or check back later.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       <div className="grid grid-cols-1 fixup md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px]">
//         {blogs.map((blog, index) => {
//           const isNewsTab =
//             activeTab === "News & Press Release" &&
//             pressReleaseFilter === "news";
//           const resolvedActiveTab = isNewsTab
//             ? "News"
//             : activeTab === "News & Press Release"
//             ? "Press Release"
//             : activeTab;
//           return (
//             <div key={blog.id || index}>
//               {isNewsTab ? (
//                 <NewsCard item={blog} />
//               ) : (
//                 <BlogCard
//                   blog={blog}
//                   activeTab={resolvedActiveTab}
//                   onEventClick={onEventClick}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BlogGrid;
"use client";
import React from "react";
import BlogCard from "./BlogCard";
import NewsCard from "@/components/news/NewsCard";

const BlogGrid = ({ blogs, activeTab, pressReleaseFilter }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-[60px]">
        <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
          No {activeTab.toLowerCase()} found
        </div>
        <div className="bw-r text-[16px] text-[#999999]">
          Try adjusting your filters or check back later.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 1440:w-[1340px] 1440:mx-auto md:mx-[5%] md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px] mb-10">
        {blogs.map((blog, index) => {
          const isNewsTab =
            activeTab === "News" && pressReleaseFilter === "news";
          const resolvedActiveTab = isNewsTab
            ? "News"
            : activeTab === "Press Release"
              ? "Press Release"
              : activeTab;
          return (
            <div key={blog.id || index}>
              {isNewsTab ? (
                <NewsCard item={blog} />
              ) : (
                <BlogCard blog={blog} activeTab={resolvedActiveTab} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogGrid;
