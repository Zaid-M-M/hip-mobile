import BlogDetailWrapper from "@/components/insights/BlogDetailWrapper";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const BASE =
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

  const posts = await fetch(`${BASE}/posts?slug=${slug}&_embed=true`, {
    cache: "no-store",
  }).then((res) => (res.ok ? res.json() : null));

  if (!posts || posts.length === 0) {
    return { title: "Not Found" };
  }

  const blog = posts[0];
  const acf = blog.acf || {};

  const ogImage = acf.featured_slider_image?.url || acf.featured_slider_image; // supports both object or direct URL string

  return {
    title: acf.meta_title || blog.title.rendered,
    description: acf.meta_description || "",
    keywords: acf.meta_keyword || "",

    openGraph: {
      title: acf.meta_title || blog.title.rendered,
      description: acf.meta_description || "",
      images: ogImage ? [ogImage] : [], // if no image → no og:image tag at all (better than wrong one)
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const BASE =
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

  async function get(url) {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  }

  const posts = await get(`${BASE}/posts?slug=${slug}&_embed=true`);
  if (!posts || !posts[0]) return <div style={{ padding: 50 }}>Not found</div>;

  const blog = posts[0];

  // Related posts logic (unchanged)
  let relatedBlogs = [];
  const categoryId = blog.categories?.[0];

  if (categoryId) {
    const related = await get(
      `${BASE}/posts?categories=${categoryId}&exclude=${blog.id}&per_page=6&_embed=true`
    );
    if (related?.length) relatedBlogs = related;
  }

  if (!relatedBlogs.length) {
    const latest = await get(
      `${BASE}/posts?exclude=${blog.id}&per_page=6&_embed=true`
    );
    relatedBlogs = latest || [];
  }

  return (
    <BlogDetailWrapper slug={slug} blog={blog} relatedBlogs={relatedBlogs} />
  );
}
