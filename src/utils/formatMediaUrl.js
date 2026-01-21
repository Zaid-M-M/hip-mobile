export function formatMediaUrl(url) {
  if (!url) return "";
  
  // Replace WordPress domain with your domain
  return url.replace(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms",
    ""
  );
}
