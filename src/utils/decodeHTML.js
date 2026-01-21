// export function decodeHTML(html) {
//   if (!html) return "";
//   return html
//     .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
//     .replace(/&amp;/g, "&");
// }

export function decodeHTML(html) {
  if (!html) return "";
  return html
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}
