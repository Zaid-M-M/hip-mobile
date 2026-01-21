// // Placeholder function

// import { heroMockData } from "@/components/home/Hero/hero.mock";
// import { showcaseItems } from "@/components/home/heroIntroSector/_components/dynamicShowcase.mock";

// export async function fetchHeroContent() {
//   // Future: Fetch from WP REST API or GraphQL
//   // const res = await fetch('https://your-wp.com/wp-json/wp/v2/hero');
//   // return await res.json();

//   return heroMockData;
// }

// export async function getShowcaseItems() {
//   // Simulate CMS call
//   return showcaseItems;
// }

// export async function fetchTabData() {
//   const [postsRes, eventsRes, newsRes, pressRes] = await Promise.all([
//     fetch(`${BASE_URL}/posts`),
//     fetch(`${BASE_URL}/events`),
//     fetch(`${BASE_URL}/news`),
//     fetch(`${BASE_URL}/press_release`),
//   ]);

//   const [posts, events, news, pressRelease] = await Promise.all([
//     postsRes.json(),
//     eventsRes.json(),
//     newsRes.json(),
//     pressRes.json(),
//   ]);

//   return { posts, events, news, pressRelease };
// }

import { formatEvents } from "@/src/utils/formatters/formatEvents";
import { formatNews } from "@/src/utils/formatters/formatNews";
import { formatPosts } from "@/src/utils/formatters/formatPosts";
import { formatPressRelease } from "@/src/utils/formatters/formatPressRelease";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
export async function fetchTabData() {
  const [postsRes, eventsRes, newsRes, pressRes] = await Promise.all([
    fetch(`${BASE_URL}/posts`),
    fetch(`${BASE_URL}/events`),
    fetch(`${BASE_URL}/news`),
    fetch(`${BASE_URL}/press_release`),
  ]);

  const [posts, events, news, pressRelease] = await Promise.all([
    postsRes.json(),
    eventsRes.json(),
    newsRes.json(),
    pressRes.json(),
  ]);

  return {
    posts: formatPosts(posts),
    events: formatEvents(events),
    news: formatNews(news),
    pressRelease: formatPressRelease(pressRelease),
  };
}
