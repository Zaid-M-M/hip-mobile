// import React from "react";
// import BlogDetailHero from "./BlogDetail/BlogDetailHero";
// import BlogDetailContent from "./BlogDetail/BlogDetailContent";
// import { ReactLenis } from "lenis/react";

// const BlogDetailWrapper = ({ slug }) => {
//   return (
//     <ReactLenis root>
//       <div className="w-full min-h-screen bg-white">
//         <BlogDetailHero slug={slug} />
//         <BlogDetailContent slug={slug} />
//       </div>
//     </ReactLenis>
//   );
// };

// export default BlogDetailWrapper;
import BlogDetailHero from "./BlogDetail/BlogDetailHero";
import BlogDetailContent from "./BlogDetail/BlogDetailContent";
import { ReactLenis } from "lenis/react";

export default function BlogDetailWrapper({ slug, blog, relatedBlogs }) {
  return (
    <ReactLenis root>
      <div className="w-full min-h-screen bg-white">
        <BlogDetailHero slug={slug} blog={blog} />
        <BlogDetailContent
          slug={slug}
          serverBlog={blog}
          serverRelated={relatedBlogs}
        />
      </div>
    </ReactLenis>
  );
}
