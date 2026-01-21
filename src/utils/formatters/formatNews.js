// export function formatNews(news) {
//   return news.slice(0, 5).map((item) => ({
//     id: item.id,
//     title: item.title?.rendered,
//     date: item.acf?.m_news_publish_date || item.date,
//     image: item.acf?.m_news_image,
//     description: item.acf?.m_news_description || item.excerpt?.rendered,
//     slug: item.slug ? `/news/${item.slug}` : "#",
//     link: item.link,
//   }));
// }
export function formatNews(news) {
  return news.slice(0, 5).map((item) => {
    const dateObj = new Date(item.date);
    const formattedDate = dateObj.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    return {
      id: item.id,
      title: item.title?.rendered,
      date: formattedDate,
      image: item.acf?.m_news_image,
      description: item.excerpt?.rendered,
      slug: item.slug ? `/news/${item.slug}` : "#",
      link: item.link,
    };
  });
}
