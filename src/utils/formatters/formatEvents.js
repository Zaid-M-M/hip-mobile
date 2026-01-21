// import { decodeHTML } from "../decodeHTML";

import { decodeHTML } from "../decodeHTML";

// export function formatEvents(events) {
//   return events.slice(0, 5).map((event) => ({
//     id: event.id,
//     title: decodeHTML(event.title?.rendered),
//     date: event.acf?.date || event.date,
//     location: event.acf?.event_location,
//     image: event.acf?.feature_image || event.acf?.in_thes_potlight_image_home,
//     link: event.link,
//   }));
// }

export function formatEvents(events) {
  return events.slice(0, 5).map((event) => {
    // Process media items
    const mediaItems = [];

    // Add feature image if exists
    if (event.acf?.feature_image) {
      mediaItems.push({
        type: "image",
        url: event.acf.feature_image,
      });
    }

    // Add youtube videos if they exist
    if (Array.isArray(event.acf?.youtube_video_filed)) {
      event.acf.youtube_video_filed.forEach((item) => {
        if (item.youtube_video) {
          mediaItems.push({
            type: "video",
            url: item.youtube_video,
          });
        }
      });
    }

    return {
      id: event.id,
      title: decodeHTML(event.title?.rendered || ""),
      date: event.acf?.date || event.date,
      location: event.acf?.event_location || "",
      image:
        event.acf?.feature_image ||
        event.acf?.in_thes_potlight_image_home ||
        event.acf?.youtube_video_filed?.[0]?.youtube_video ||
        "", // for card display
      media: mediaItems, // array of all media items
      link: event.link,
      description: event.content?.rendered || "",
    };
  });
}

// Utility to strip HTML tags
function stripHTML(html) {
  return html.replace(/<[^>]*>?/gm, "").trim();
}
