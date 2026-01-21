// Utility function to extract searchable text from ACF fields
// This recursively traverses ACF objects and extracts string values
function extractACFText(acf) {
  if (!acf || typeof acf !== "object") return "";

  let text = "";

  const traverse = (obj) => {
    if (typeof obj === "string") {
      text += " " + obj.trim();
    } else if (Array.isArray(obj)) {
      obj.forEach(traverse);
    } else if (obj && typeof obj === "object") {
      Object.values(obj).forEach(traverse);
    }
  };

  traverse(acf);
  return text.trim();
}

// Main search function
export async function searchAll(query) {
  if (!query || typeof query !== "string" || query.trim() === "") {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results = [];

  // Fetch all endpoints in parallel
  const fetchPromises = API_ENDPOINTS.map(async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) return [];

      const posts = await response.json();

      return posts
        .filter((post) => {
          // Search in post title
          const title = post.title?.rendered || "";
          if (title.toLowerCase().includes(searchTerm)) {
            return true;
          }

          // Search in ACF fields
          const acfText = extractACFText(post.acf);
          return acfText.toLowerCase().includes(searchTerm);
        })
        .map((post) => ({
          title: post.title.rendered, // Use WP post title, not ACF title
          description: extractACFText(post.acf) || "No description available.", // All ACF as description
          url: post.link, // Permalink for linking back
          source: endpoint.split("/wp-json/wp/v2/")[1].split("?")[0], // e.g., 'client_stories'
          id: post.id,
        }));
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      return [];
    }
  });

  const allEndpointResults = await Promise.all(fetchPromises);

  // Flatten and return
  return allEndpointResults.flat();
}

// Example usage in a React component:
// const [results, setResults] = useState([]);
// const [loading, setLoading] = useState(false);

// const handleSearch = async (searchQuery) => {
//   setLoading(true);
//   const searchResults = await searchAll(searchQuery);
//   setResults(searchResults);
//   setLoading(false);
// };
