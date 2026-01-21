// import Breadcrumbs from "@/components/global/Breadcrumbs";
// import { microblogApiMap } from "@/src/lib/microblogApiMap";

// export default async function MicroBlogPage({ params }) {
//   const { slug, stateslug } = await params;

//   const baseUrl = microblogApiMap[slug];

//   if (!baseUrl) {
//     return <h1>Invalid State </h1>;
//   }

//   // Fetch only the microblog that matches the slug
//   console.log("apiUrl", stateslug);
//   const apiUrl = `${baseUrl}?slug=${stateslug}`;

//   const res = await fetch(apiUrl, { cache: "no-store" });
//   const data = await res.json();

//   const post = data[0]; // WP returns an array

//   if (!post) {
//     return <h1>No microblog found</h1>;
//   }

//   return (
//     <>
//       {/* <main className="container py-10">
//         <h1
//           className="text-3xl font-bold"
//           dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//         />

//         <div
//           className="prose max-w-full mt-6"
//           dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//         />
//       </main> */}

//       <div className="w-full pt-[45px] pb-0 bg-white">
//         <div className="fix">
//           {/* Breadcrumb */}
//           <div className="mb-0">
//             <Breadcrumbs
//               items={[
//                 { label: "Home", href: "/" },
//                 { label: "blog", href: "/media" },
//               ]}
//               color="#000000"
//             />
//           </div>

//           {/* Title with Abstract Pattern */}
//           <div className="mt-[15px]">
//             <h1
//               className="bw-r text-[28px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px]
//                 tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] mb-2 lg:mb-[20px] text-[#000000]"
//               dangerouslySetInnerHTML={{
//                 __html: post?.title?.rendered,
//               }}
//             />
//             <img
//               src="/abstract_pattern.svg"
//               alt="Abstract Pattern"
//               className="abstract_svg"
//             />
//           </div>

//           <div
//             className="blog-content mb-10"
//             dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
import Breadcrumbs from "@/components/global/Breadcrumbs";
import { microblogApiMap } from "@/src/lib/microblogApiMap";
export async function generateMetadata({ params }) {
  const { slug, stateslug } = await params;
  console.log(
    "slugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslug",
    slug
  );
  const baseUrl = microblogApiMap[slug];

  if (!baseUrl) {
    return {
      title: "Invalid State",
      description: "Invalid microblog state",
    };
  }

  try {
    const apiUrl = `${baseUrl}?slug=${stateslug}`;
    const res = await fetch(apiUrl, { cache: "no-store" });
    const data = await res.json();
    const post = data?.[0];
    console.log(
      "postpostpostpostpostpostpostpostpostpostpostpostpostpost postpostpostpostpostpostpostpostpostpostpost",
      post
    );
    if (!post) {
      return {
        title: "Microblog Not Found",
        description: "No microblog available",
      };
    }

    return {
      title:
        post?.acf?.goa_micro_blog_meta_title ||
        post?.acf?.delhi_micro_blog_meta_title ||
        post?.acf?.gujarat_micro_blog_meta_title ||
        post?.acf?.tamil_nadu_micro_blog_meta_title ||
        post?.acf?.telangana_micro_blog_meta_title ||
        post?.acf?.goa_micro_blog_meta_description ||
        post?.acf?.karnataka_micro_blog_meta_title ||
        post?.acf?.haryana_micro_blog_meta_title ||
        post?.acf?.maha_micro_blog_meta_title ||
        post?.acf?.hyderabad_micro_blog_meta_title,

      description:
        post?.acf?.delhi_micro_blog_meta_description ||
        post?.acf?.gujarat_micro_blog_meta_description ||
        post?.acf?.tamil_nadu_micro_blog_meta_description ||
        post?.acf?.telangana_micro_blog_meta_description ||
        post?.acf?.karnataka_micro_blog_meta_description ||
        post?.acf?.haryana_micro_blog_meta_description ||
        post?.acf?.maha_micro_blog_meta_description ||
        post?.acf?.hyderabad_micro_blog_meta_description,

      openGraph: {
        title:
          post?.acf?.goa_micro_blog_meta_title ||
          post?.acf?.delhi_micro_blog_meta_title ||
          post?.acf?.gujarat_micro_blog_meta_title ||
          post?.acf?.tamil_nadu_micro_blog_meta_title ||
          post?.acf?.telangana_micro_blog_meta_title ||
          post?.acf?.goa_micro_blog_meta_description ||
          post?.acf?.karnataka_micro_blog_meta_title ||
          post?.acf?.haryana_micro_blog_meta_title ||
          post?.acf?.maha_micro_blog_meta_title ||
          post?.acf?.hyderabad_micro_blog_meta_title,

        description:
          post?.acf?.delhi_micro_blog_meta_description ||
          post?.acf?.gujarat_micro_blog_meta_description ||
          post?.acf?.tamil_nadu_micro_blog_meta_description ||
          post?.acf?.telangana_micro_blog_meta_description ||
          post?.acf?.karnataka_micro_blog_meta_description ||
          post?.acf?.haryana_micro_blog_meta_description ||
          post?.acf?.maha_micro_blog_meta_description ||
          post?.acf?.hyderabad_micro_blog_meta_description,
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title:
          post?.acf?.goa_micro_blog_meta_title ||
          post?.acf?.delhi_micro_blog_meta_title ||
          post?.acf?.gujarat_micro_blog_meta_title ||
          post?.acf?.tamil_nadu_micro_blog_meta_title ||
          post?.acf?.telangana_micro_blog_meta_title ||
          post?.acf?.goa_micro_blog_meta_description ||
          post?.acf?.karnataka_micro_blog_meta_title ||
          post?.acf?.haryana_micro_blog_meta_title ||
          post?.acf?.maha_micro_blog_meta_title ||
          post?.acf?.hyderabad_micro_blog_meta_title,
        description:
          post?.acf?.delhi_micro_blog_meta_description ||
          post?.acf?.gujarat_micro_blog_meta_description ||
          post?.acf?.tamil_nadu_micro_blog_meta_description ||
          post?.acf?.telangana_micro_blog_meta_description ||
          post?.acf?.karnataka_micro_blog_meta_description ||
          post?.acf?.haryana_micro_blog_meta_description ||
          post?.acf?.maha_micro_blog_meta_description ||
          post?.acf?.hyderabad_micro_blog_meta_description,
      },
    };
  } catch (error) {
    return {
      title: "Horizon",
      description: "Horizon microblog",
    };
  }
}

export default async function MicroBlogPage({ params }) {
  const { slug, stateslug } = await params;

  const baseUrl = microblogApiMap[slug];

  if (!baseUrl) {
    return <h1>Invalid State </h1>;
  }

  // Fetch only the microblog that matches the slug
  const apiUrl = `${baseUrl}?slug=${stateslug}`;

  const res = await fetch(apiUrl, { cache: "no-store" });
  const data = await res.json();

  const post = data[0]; // WP returns an array

  if (!post) {
    return <h1>No microblog found</h1>;
  }

  return (
    <>
      <div className="w-full pt-[45px] pb-0 bg-white">
        <div className="fix">
          {/* Breadcrumb */}
          <div className="mb-0">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "blog", href: "/media" },
              ]}
              color="#000000"
            />
          </div>

          {/* Title with Abstract Pattern */}
          <div className="mt-[15px]">
            <h1
              className="bw-r text-[28px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px]
                tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] mb-2 lg:mb-[20px] text-[#000000]"
              dangerouslySetInnerHTML={{
                __html: post?.title?.rendered,
              }}
            />
            <img
              src="/abstract_pattern.svg"
              alt="Abstract Pattern"
              className="abstract_svg"
            />
          </div>

          <div
            className="blog-content mb-10"
            dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
          />
        </div>
      </div>
    </>
  );
}
