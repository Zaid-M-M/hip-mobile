// lib/fetch-wp.js
const WP_ORIGIN =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

// Save original fetch
const originalFetch = global.fetch;

// Override it
global.fetch = async function (input, init) {
  // Convert input to string URL
  const url = typeof input === "string" ? input : input.url;

  // Only proxy WordPress REST API calls
  if (url.includes(WP_ORIGIN)) {
    const proxyUrl = url.replace(WP_ORIGIN, "/api/wp");
    return originalFetch(proxyUrl, init);
  }

  // Everything else: use normal fetch
  return originalFetch(input, init);
};
