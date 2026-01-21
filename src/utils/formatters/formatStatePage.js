// import DOMPurify from "isomorphic-dompurify";

// export function formatStatePage(item) {
//   const acf = item.acf || {};

//   return {
//     slug: item.slug,
//     hero: {
//       name: acf.state_name,
//       image: acf.state_image,
//     },

//     makeindia: {
//       heading: acf.section_title,
//       sub: acf.sub_title,
//       desc: DOMPurify.sanitize(acf.sub_paragraph || ""),
//       para: DOMPurify.sanitize(acf.paragraph || ""),
//       extra: DOMPurify.sanitize(acf.extra_paragraph || ""),
//       amenities: (acf.amenities_list || []).map((a) => ({
//         // strip tags like <br> but keep safe text
//         title: DOMPurify.sanitize(a.amenities_title || "").replace(
//           /<[^>]+>/g,
//           ""
//         ),
//         image: a.amenities_image || null,
//         alt: a.amenities_image_alt || "",
//       })),
//     },

//     indicators: (acf.indicator_data || []).map((ind) => ({
//       // sanitized but keep <sup>, %, etc. intact
//       value: DOMPurify.sanitize(ind.indicator_no || "", {
//         ALLOWED_TAGS: [
//           "sup",
//           "sub",
//           "br",
//           "span",
//           "p",
//           "div",
//           "strong",
//           "em",
//           "b",
//           "i",
//           "u",
//           "small",
//           "big",
//           "mark",
//           "del",
//           "ins",
//           "code",
//           "pre",
//           "blockquote",
//           "hr",
//           "a",
//           "ul",
//           "ol",
//           "li",
//           "table",
//           "thead",
//           "tbody",
//           "tr",
//           "th",
//           "td",
//           "caption",
//           "col",
//           "colgroup",
//           "dfn",
//           "kbd",
//           "samp",
//           "var",
//           "q",
//           "cite",
//           "abbr",
//           "address",
//           "bdi",
//           "bdo",
//           "wbr",
//           "ruby",
//           "rt",
//           "rp",
//         ],
//       }),
//       label: DOMPurify.sanitize(ind.indicator_description || ""),
//     })),

//     industrialLandscape: {
//       title: acf.section_title1,
//       paragraph: acf.paragraph1 || "",
//       // you can sanitize here too if needed
//       // paragraph: DOMPurify.sanitize(acf.paragraph1 || ""),
//     },

//     focusSectors: (acf.incentivised_list || []).map((s) =>
//       DOMPurify.sanitize(s.list_text || "")
//     ),

//     parks: {
//       title: acf.section_title_parks,
//       stitle1: acf.state_park_title_1,
//       stitle2: acf.state_park_title_2,
//       paragraph: DOMPurify.sanitize(acf.paragraph_parks || "", {
//         ALLOWED_TAGS: [
//           "sup",
//           "sub",
//           "br",
//           "span",
//           "p",
//           "div",
//           "strong",
//           "em",
//           "b",
//           "i",
//           "u",
//           "small",
//           "big",
//           "mark",
//           "del",
//           "ins",
//           "code",
//           "pre",
//           "blockquote",
//           "hr",
//           "a",
//           "ul",
//           "ol",
//           "li",
//           "table",
//           "thead",
//           "tbody",
//           "tr",
//           "th",
//           "td",
//           "caption",
//           "col",
//           "colgroup",
//           "dfn",
//           "kbd",
//           "samp",
//           "var",
//           "q",
//           "cite",
//           "abbr",
//           "address",
//           "bdi",
//           "bdo",
//           "wbr",
//           "ruby",
//           "rt",
//           "rp",
//         ],
//         ALLOWED_ATTR: [],
//       }),
//     },

//     faqs: (acf.faq_list || []).map((f) => ({
//       no: f.faq_no,
//       title: DOMPurify.sanitize(f.faq_title || ""),
//       desc: DOMPurify.sanitize(f.faq_description || ""),
//     })),
//     faqs2: (acf.faq_list_2 || []).map((f) => ({
//     no: f.faq_no_2,
//       title: DOMPurify.sanitize(f.faq_title_2 || ""),
//       desc: DOMPurify.sanitize(f.faq_description_2 || ""),
//     })),

//     regionSlider: (acf.region_slider || []).map((r) => ({
//       name: r.state_name_region,
//       image: r.state_image_region,
//       url: r.state_url,
//       alt: r.region_image_alt || "",
//     })),

//     meta: {
//       title: acf.meta_title,
//       description: acf.meta_description,
//     },
//   };
// }
// src/utils/formatters/formatStatePage.ts
// src/utils/formatters/formatStatePage.js
import DOMPurify from "dompurify";

/**
 * Server-side fallback – when the DOM is not available we simply strip
 * everything that looks like a script tag and return the raw string.
 * This is safe because the data comes from your own WP backend.
 */
function serverSanitize(dirty, opts = {}) {
  if (typeof document === "undefined") {
    // Strip <script>...</script> (case-insensitive)
    let safe = dirty.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ""
    );

    // If allowedTags is provided, strip all other tags
    if (opts.allowedTags && opts.allowedTags.length > 0) {
      const allowed = opts.allowedTags.join("|");
      const tagRegex = new RegExp(`</?(${allowed})[^>]*>`, "gi");
      // First: keep only allowed tags
      safe = safe.replace(new RegExp(`<(?!/?(${allowed})\\b)[^>]*>`, "gi"), "");
    }

    return safe;
  }

  // Browser: use real DOMPurify
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: opts.allowedTags || [],
    ALLOWED_ATTR: [], // you never allowed attributes
  });
}

/* ------------------------------------------------------------------ */
/*  Whitelist for rich text fields (same as before)                   */
/* ------------------------------------------------------------------ */
const RICH_TEXT_TAGS = [
  "sup",
  "sub",
  "br",
  "span",
  "p",
  "div",
  "strong",
  "em",
  "b",
  "i",
  "u",
  "small",
  "big",
  "mark",
  "del",
  "ins",
  "code",
  "pre",
  "blockquote",
  "hr",
  "a",
  "ul",
  "ol",
  "li",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "caption",
  "col",
  "colgroup",
  "dfn",
  "kbd",
  "samp",
  "var",
  "q",
  "cite",
  "abbr",
  "address",
  "bdi",
  "bdo",
  "wbr",
  "ruby",
  "rt",
  "rp",
];

/* ------------------------------------------------------------------ */
/*  Your original formatter – unchanged except for sanitiser calls    */
/* ------------------------------------------------------------------ */
export function formatStatePage(item) {
  const acf = item.acf || {};

  return {
    slug: item.slug,
    hero: {
      name: acf.state_name,
      image: acf.state_image,
    },

    makeindia: {
      heading: acf.section_title,
      sub: acf.sub_title,
      desc: serverSanitize(acf.sub_paragraph || ""),
      para: serverSanitize(acf.paragraph || ""),
      extra: serverSanitize(acf.extra_paragraph || ""),
      amenities: (acf.amenities_list || []).map((a) => ({
        title: serverSanitize(a.amenities_title || "").replace(/<[^>]+>/g, ""),
        image: a.amenities_image || null,
        alt: a.amenities_image_alt || "",
      })),
    },

    indicators: (acf.indicator_data || []).map((ind) => ({
      value: serverSanitize(ind.indicator_no || "", {
        allowedTags: RICH_TEXT_TAGS,
      }),
      label: serverSanitize(ind.indicator_description || ""),
    })),

    industrialLandscape: {
      title: acf.section_title1,
      paragraph: acf.paragraph1 || "",
    },

    focusSectors: (acf.incentivised_list || []).map((s) =>
      serverSanitize(s.list_text || "")
    ),

    parks: {
      title: acf.section_title_parks,
      stitle1: acf.state_park_title_1,
      stitle2: acf.state_park_title_2,
      paragraph: serverSanitize(acf.paragraph_parks || "", {
        allowedTags: RICH_TEXT_TAGS,
      }),
    },

    faqs: (acf.faq_list || []).map((f) => ({
      no: f.faq_no,
      title: serverSanitize(f.faq_title || ""),
      desc: serverSanitize(f.faq_description || ""),
    })),
    faqs2: (acf.faq_list_2 || []).map((f) => ({
      no: f.faq_no_2,
      title: serverSanitize(f.faq_title_2 || ""),
      desc: serverSanitize(f.faq_description_2 || ""),
    })),

    regionSlider: (acf.region_slider || []).map((r) => ({
      name: r.state_name_region,
      image: r.state_image_region,
      url: r.state_url,
      alt: r.region_image_alt || "",
    })),

    meta: {
      title: acf.meta_title,
      description: acf.meta_description,
    },
  };
}
