const API_BASE_URL =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

class WordPressCMSAPI {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Generic method to fetch data from WordPress API
   * @param {string} endpoint - API endpoint
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - API response
   */
  async fetchData(endpoint, params = {}) {
    try {
      // Build query parameters
      const queryParams = new URLSearchParams({
        per_page: params.per_page || 100,
        page: params.page || 1,
        ...params,
      });

      // Keep _embed for events endpoint as it's needed for ACF data
      if (endpoint !== "events" && queryParams.has("_embed")) {
        queryParams.delete("_embed");
      }

      const url = `${this.baseURL}/${endpoint}?${queryParams}`;

      console.log(`Fetching from: ${url}`);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: Array.isArray(data) ? data : [data],
        totalPages: response.headers.get("X-WP-TotalPages"),
        total: response.headers.get("X-WP-Total"),
      };
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      return {
        success: false,
        data: [],
        error: error.message,
      };
    }
  }

  /**
   * Fetch blog posts
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - Blog posts
   */
  async getPosts(params = {}) {
    return this.fetchData("posts", params);
  }

  /**
   * Fetch a single post by slug
   * @param {string} slug - Post slug
   * @returns {Promise<any>} - Single post
   */
  async getPostBySlug(slug) {
    const result = await this.fetchData("posts", { slug, _embed: true });
    return {
      ...result,
      data: result.data[0] || null,
    };
  }

  /**
   * Fetch news items
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - News items
   */
  async getNews(params = {}) {
    return this.fetchData("news", params);
  }

  /**
   * Fetch media news items
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - Media news items
   */
  async getNewNews(params = {}) {
    return this.fetchData("media_news", params);
  }

  /**
   * Fetch a single media news item by slug
   * @param {string} slug - Media news item slug
   * @returns {Promise<any>} - Single media news item
   */
  async getNewNewsBySlug(slug) {
    const result = await this.fetchData("media_news", { slug, _embed: true });
    return {
      ...result,
      data: result.data[0] || null,
    };
  }

  /**
   * Fetch a single news item by slug
   * @param {string} slug - News item slug
   * @returns {Promise<any>} - Single news item
   */
  async getNewsBySlug(slug) {
    const result = await this.fetchData("news", { slug, _embed: true });
    return {
      ...result,
      data: result.data[0] || null,
    };
  }

  /**
   * Fetch press releases
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - Press releases
   */
  async getPressReleases(params = {}) {
    return this.fetchData("press_release", params);
  }

  /**
   * Fetch a single press release by slug
   * @param {string} slug - Press release slug
   * @returns {Promise<any>} - Single press release
   */
  async getPressReleaseBySlug(slug) {
    const result = await this.fetchData("press_release", {
      slug,
      _embed: true,
    });
    return {
      ...result,
      data: result.data[0] || null,
    };
  }

  /**
   * Fetch events
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - Events
   */
  async getEvents(params = {}) {
    return this.fetchData("events", params);
  }

  /**
   * Fetch a single event by slug
   * @param {string} slug - Event slug
   * @returns {Promise<any>} - Single event
   */
  async getEventBySlug(slug) {
    const result = await this.fetchData("events", { slug, _embed: true });
    return {
      ...result,
      data: result.data[0] || null,
    };
  }

  /**
   * Fetch client stories (case studies)
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - Client stories
   */
  async getClientStories(params = {}) {
    return this.fetchData("client_stories", params);
  }

  /**
   * Fetch a single client story by slug
   * @param {string} slug - Client story slug
   * @returns {Promise<any>} - Single client story
   */
  async getClientStoryBySlug(slug) {
    const result = await this.fetchData("client_stories", {
      slug,
      _embed: true,
    });
    return {
      ...result,
      data: result.data[0] || null,
    };
  }

  /**
   * Fetch customers speak testimonials
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - Customers speak data
   */
  async getCustomersSpeak(params = {}) {
    return this.fetchData("customers_speak", params);
  }

  /**
   * Fetch categories
   * @param {object} params - Query parameters
   * @returns {Promise<any>} - Categories
   */
  async getCategories(params = {}) {
    return this.fetchData("categories", params);
  }

  /**
   * Extract categories from posts data
   * @param {array} posts - Array of posts
   * @param {string} contentType - Type of content (posts, events, news, press_release)
   * @returns {array} - Unique categories
   */
  extractCategories(posts, contentType = "posts") {
    if (!Array.isArray(posts)) return [];

    const categorySet = new Set();

    posts.forEach((post) => {
      if (!post || typeof post !== "object") return;

      // Handle different content types with specific logic
      switch (contentType) {
        case "posts":
        case "blogs":
          // Method 1: Direct category field (most common in actual data)
          if (post.category && typeof post.category === "string") {
            const category = post.category.trim();
            if (category && category !== "Uncategorized") {
              categorySet.add(this.decodeHtmlEntities(category));
            }
          }

          // Method 2: ACF category fields
          if (
            post.acf?.category_id &&
            typeof post.acf.category_id === "string"
          ) {
            const category = post.acf.category_id.trim();
            // Skip numeric-only category IDs unless they represent actual categories
            if (category && category !== "Uncategorized" && isNaN(category)) {
              categorySet.add(this.decodeHtmlEntities(category));
            }
          }
          break;

        case "events":
          // Events might have event_categories or use _embedded data
          if (
            post.event_categories &&
            Array.isArray(post.event_categories) &&
            post.event_categories.length > 0
          ) {
            post.event_categories.forEach((cat) => {
              if (cat.name) {
                const categoryName = this.decodeHtmlEntities(cat.name);
                // Filter out generic category names
                if (!this.isGenericCategoryName(categoryName)) {
                  categorySet.add(categoryName);
                }
              }
            });
          }

          // Check embedded event categories
          if (post._embedded?.["wp:term"]?.[1]) {
            const eventCategoryTerms = post._embedded["wp:term"][1];
            if (Array.isArray(eventCategoryTerms)) {
              eventCategoryTerms.forEach((term) => {
                if (term.name && term.name !== "Uncategorized") {
                  const categoryName = this.decodeHtmlEntities(term.name);
                  // Filter out generic category names
                  if (!this.isGenericCategoryName(categoryName)) {
                    categorySet.add(categoryName);
                  }
                }
              });
            }
          }
          break;

        case "news":
          // News items might have categories in embedded data
          if (post._embedded?.["wp:term"]?.[0]) {
            const categoryTerms = post._embedded["wp:term"][0];
            if (Array.isArray(categoryTerms)) {
              categoryTerms.forEach((term) => {
                if (term.name && term.name !== "Uncategorized") {
                  categorySet.add(this.decodeHtmlEntities(term.name));
                }
              });
            }
          }

          // Could categorize by title or description patterns
          if (post.title?.rendered) {
            const title = post.title.rendered.toLowerCase();
            if (title.includes("award") || title.includes("recognition")) {
              categorySet.add("Awards & Recognition");
            } else if (
              title.includes("partnership") ||
              title.includes("collaboration")
            ) {
              categorySet.add("Partnerships");
            } else if (title.includes("expansion") || title.includes("new")) {
              categorySet.add("Business Growth");
            } else {
              categorySet.add("General News");
            }
          }
          break;

        case "press_release":
          // Press releases could be categorized by content or ACF fields
          if (post.acf?.pr_category) {
            categorySet.add(this.decodeHtmlEntities(post.acf.pr_category));
          } else if (post.title?.rendered) {
            const title = post.title.rendered.toLowerCase();
            if (title.includes("partnership") || title.includes("agreement")) {
              categorySet.add("Partnerships");
            } else if (
              title.includes("expansion") ||
              title.includes("development") ||
              title.includes("construction")
            ) {
              categorySet.add("Development");
            } else if (
              title.includes("award") ||
              title.includes("recognition")
            ) {
              categorySet.add("Awards");
            } else if (
              title.includes("investment") ||
              title.includes("funding")
            ) {
              categorySet.add("Investment");
            } else {
              categorySet.add("Corporate News");
            }
          }
          break;

        default:
          // Fallback to original logic for backwards compatibility
          if (post.category && typeof post.category === "string") {
            const category = post.category.trim();
            if (category && category !== "Uncategorized") {
              categorySet.add(this.decodeHtmlEntities(category));
            }
          }
      }

      // Generic WordPress embedded categories (when available)
      if (
        post._embedded?.["wp:term"]?.[0] &&
        !["events", "news"].includes(contentType)
      ) {
        const categoryTerms = post._embedded["wp:term"][0];
        if (Array.isArray(categoryTerms)) {
          categoryTerms.forEach((term) => {
            if (term.name && term.name !== "Uncategorized") {
              categorySet.add(this.decodeHtmlEntities(term.name));
            }
          });
        }
      }

      // Industry and sector fields for case studies
      if (post.acf?.industry && typeof post.acf.industry === "string") {
        const industry = post.acf.industry.trim();
        if (industry) {
          categorySet.add(this.decodeHtmlEntities(industry));
        }
      }

      // Extract sectors from case studies using title patterns
      // if (post.acf?.client_stories_image) {
      //   // This indicates it's a case study
      //   const title = (post.title?.rendered || post.title || "").toLowerCase();

      //   if (title.includes("manufacturing") || title.includes("facility")) {
      //     categorySet.add("Manufacturing");
      //   } else if (title.includes("automotive") || title.includes("auto ")) {
      //     categorySet.add("Automotive");
      //   } else if (
      //     title.includes("cold chain") ||
      //     title.includes("logistics")
      //   ) {
      //     categorySet.add("Logistics");
      //   } else if (title.includes("infrastructure")) {
      //     categorySet.add("Infrastructure");
      //   } else {
      //     categorySet.add("General");
      //   }
      // }

      // Extract sectors from case studies using title patterns
      if (post.acf?.client_stories_image) {
        // This indicates it's a case study
        const title = (post.title?.rendered || post.title || "").toLowerCase();

        // Match titles to their respective categories
        // if (
        //   title.includes(
        //     "top infrastructure features that define grade-a industrial parks"
        //   ) ||
        //   title.includes(
        //     "elevating standards: high-efficiency, human-centric industrial parks"
        //   )
        // ) {
        //   categorySet.add("Industrial Parks");
        // } else if (
        //   title.includes(
        //     "aseptic carton manufacturing facility delivered for sig combibloc"
        //   )
        // ) {
        //   categorySet.add("Packaging");
        // } else if (
        //   title.includes(
        //     "built-to-suit manufacturing facility for renk india in shoolagiri"
        //   )
        // ) {
        //   categorySet.add("Engineering");
        // } else if (
        //   title.includes(
        //     "plug-and-play auto component facility for anand mando in hosur"
        //   ) ||
        //   title.includes(
        //     "plug and play automotive component manufacturing facility for yazaki india"
        //   ) ||
        //   title.includes(
        //     "auto major lumax industries limited partners horizon for a build-to-suit manufacturing facility"
        //   ) ||
        //   title.includes(
        //     "horizon catalyses benteler’s success with bts facility"
        //   )
        // ) {
        //   categorySet.add("Auto & Auto Components");
        // } else if (
        //   title.includes(
        //     "a state-of-the-art, built-to-suit cold chain facility for ig international at shoolagiri"
        //   )
        // ) {
        //   categorySet.add("State of the Art");
        // } else if (
        //   title.includes("horizon delivers bespoke solution for fosroc")
        // ) {
        //   categorySet.add("Chemicals");
        // } else if (
        //   title.includes(
        //     "horizon’s accelerated development emerges as a masterstroke for 3pl player"
        //   )
        // ) {
        //   categorySet.add("Logistics & Supply Chain");
        // }
      }
    });

    // Add fallback categories if none were found for specific content types
    if (categorySet.size === 0 && posts.length > 0) {
      switch (contentType) {
        case "events":
          categorySet.add("General");
          break;
      }
    }

    return Array.from(categorySet).sort();
  }

  /**
   * Extract years from posts data
   * @param {array} posts - Array of posts
   * @returns {array} - Unique years
   */
  extractYears(posts) {
    if (!Array.isArray(posts)) return [];

    const yearSet = new Set();

    posts.forEach((post) => {
      if (!post || typeof post !== "object") return;

      // Try different date fields in priority order
      const dateFields = [
        post.acf?.blog_publish_date, // Custom publish date (preferred)
        post.acf?.publish_date,
        post.acf?.date, // For events
        post.acf?.completion_date,
        post.date, // WordPress post date
        post.modified,
      ];

      for (const dateField of dateFields) {
        if (dateField) {
          // Handle different date formats
          let date;

          // Try parsing custom format first (e.g., "12 September 2025")
          if (typeof dateField === "string" && dateField.includes(" ")) {
            date = new Date(dateField);
          } else {
            // Standard ISO date
            date = new Date(dateField);
          }

          if (!isNaN(date.getTime())) {
            yearSet.add(date.getFullYear().toString());
            break; // Use the first valid date found
          }
        }
      }
    });

    return Array.from(yearSet).sort((a, b) => b.localeCompare(a)); // Sort descending
  }

  /**
   * Filter posts by category and year
   * @param {array} posts - Array of posts
   * @param {string} category - Category to filter by
   * @param {string} year - Year to filter by
   * @param {string} contentType - Type of content for better filtering
   * @returns {array} - Filtered posts
   */
  filterPosts(posts, category = "", year = "", contentType = "posts") {
    if (!Array.isArray(posts)) return [];

    let filtered = posts;

    // Filter by category
    if (category && category.trim() !== "") {
      const searchCategory = this.decodeHtmlEntities(category.toLowerCase());

      filtered = filtered.filter((post) => {
        // Get categories for this post using the same logic as extractCategories
        const postCategories = [];

        switch (contentType) {
          case "posts":
          case "blogs":
            if (post.category && typeof post.category === "string") {
              postCategories.push(post.category);
            }
            if (
              post.acf?.category_id &&
              typeof post.acf.category_id === "string" &&
              isNaN(post.acf.category_id)
            ) {
              postCategories.push(post.acf.category_id);
            }
            break;

          case "events":
            if (post.event_categories && Array.isArray(post.event_categories)) {
              post.event_categories.forEach((cat) => {
                if (cat.name && !this.isGenericCategoryName(cat.name)) {
                  postCategories.push(cat.name);
                }
              });
            }
            // Check embedded event categories
            if (post._embedded?.["wp:term"]?.[1]) {
              const eventCategoryTerms = post._embedded["wp:term"][1];
              if (Array.isArray(eventCategoryTerms)) {
                eventCategoryTerms.forEach((term) => {
                  if (term.name && !this.isGenericCategoryName(term.name)) {
                    postCategories.push(term.name);
                  }
                });
              }
            }
            // Fallback for events without categories
            if (postCategories.length === 0) {
              postCategories.push("General");
            }
            break;

          case "news":
            // Check embedded categories first
            if (post._embedded?.["wp:term"]?.[0]) {
              const categoryTerms = post._embedded["wp:term"][0];
              if (Array.isArray(categoryTerms)) {
                postCategories.push(...categoryTerms.map((term) => term.name));
              }
            }
            // Categorize by title patterns if no embedded categories
            if (postCategories.length === 0 && post.title?.rendered) {
              const title = post.title.rendered.toLowerCase();
              if (title.includes("award") || title.includes("recognition")) {
                postCategories.push("Awards & Recognition");
              } else if (
                title.includes("partnership") ||
                title.includes("collaboration")
              ) {
                postCategories.push("Partnerships");
              } else if (title.includes("expansion") || title.includes("new")) {
                postCategories.push("Business Growth");
              } else {
                postCategories.push("General News");
              }
            }
            break;

          case "press_release":
            if (post.acf?.pr_category) {
              postCategories.push(post.acf.pr_category);
            } else if (post.title?.rendered) {
              const title = post.title.rendered.toLowerCase();
              if (
                title.includes("partnership") ||
                title.includes("agreement")
              ) {
                postCategories.push("Partnerships");
              } else if (
                title.includes("expansion") ||
                title.includes("development") ||
                title.includes("construction")
              ) {
                postCategories.push("Development");
              } else if (
                title.includes("award") ||
                title.includes("recognition")
              ) {
                postCategories.push("Awards");
              } else if (
                title.includes("investment") ||
                title.includes("funding")
              ) {
                postCategories.push("Investment");
              } else {
                postCategories.push("Corporate News");
              }
            }
            break;

          default:
            // Fallback for other content types
            if (post.category && typeof post.category === "string") {
              postCategories.push(post.category);
            }
        }

        // Check embedded categories for general cases (not events/news as they're handled above)
        if (
          !["events", "news"].includes(contentType) &&
          post._embedded?.["wp:term"]?.[0]
        ) {
          const categoryTerms = post._embedded["wp:term"][0];
          if (Array.isArray(categoryTerms)) {
            postCategories.push(...categoryTerms.map((term) => term.name));
          }
        }

        // Industry field for case studies
        if (post.acf?.industry && typeof post.acf.industry === "string") {
          postCategories.push(post.acf.industry);
        }

        // Extract sectors from case studies using title patterns (same logic as extractCategories)
        if (post.acf?.client_stories_image) {
          // This indicates it's a case study
          const title = (
            post.title?.rendered ||
            post.title ||
            ""
          ).toLowerCase();

          if (title.includes("manufacturing") || title.includes("facility")) {
            postCategories.push("Manufacturing");
          } else if (title.includes("automotive") || title.includes("auto ")) {
            postCategories.push("Automotive");
          } else if (
            title.includes("cold chain") ||
            title.includes("logistics")
          ) {
            postCategories.push("Logistics");
          } else if (title.includes("infrastructure")) {
            postCategories.push("Infrastructure");
          } else {
            postCategories.push("General");
          }
        }

        return postCategories.some((field) => {
          if (!field || typeof field !== "string") return false;
          // Skip numeric-only category IDs
          if (!isNaN(field)) return false;
          const decodedField = this.decodeHtmlEntities(field.toLowerCase());
          return (
            decodedField.includes(searchCategory) ||
            searchCategory.includes(decodedField)
          );
        });
      });
    }

    // Filter by year
    if (year && year.trim() !== "") {
      filtered = filtered.filter((post) => {
        const dateFields = [
          post.acf?.blog_publish_date, // Custom publish date (preferred)
          post.acf?.publish_date,
          post.acf?.date, // For events
          post.acf?.completion_date,
          post.date, // WordPress post date
          post.modified,
        ];

        return dateFields.some((dateField) => {
          if (!dateField) return false;

          // Handle different date formats
          let date;
          if (typeof dateField === "string" && dateField.includes(" ")) {
            date = new Date(dateField);
          } else {
            date = new Date(dateField);
          }

          return (
            !isNaN(date.getTime()) && date.getFullYear().toString() === year
          );
        });
      });
    }

    return filtered;
  }

  /**
   * Check if a category name is generic/placeholder
   * @param {string} categoryName - Category name to check
   * @returns {boolean} - True if generic
   */
  isGenericCategoryName(categoryName) {
    if (typeof categoryName !== "string") return true;

    const genericPatterns = [
      /^Event Category\d+$/i,
      /^Category\d+$/i,
      /^Test Category/i,
      /^Uncategorized$/i,
      /^Default$/i,
    ];

    return genericPatterns.some((pattern) => pattern.test(categoryName.trim()));
  }

  /**
   * Decode HTML entities
   * @param {string} text - Text with HTML entities
   * @returns {string} - Decoded text
   */
  decodeHtmlEntities(text) {
    if (typeof text !== "string") return text;

    if (typeof window !== "undefined") {
      const textArea = document.createElement("textarea");
      textArea.innerHTML = text;
      return textArea.value;
    }

    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ");
  }

  /**
   * Get formatted date from post
   * @param {object} post - Post object
   * @returns {string} - Formatted date
   */
  getFormattedDate(post) {
    if (!post) return "";

    // Try different date fields
    const dateFields = [
      post.acf?.blog_publish_date,
      post.acf?.publish_date,
      post.acf?.date, // For events
      post.date,
      post.modified,
    ];

    for (const dateField of dateFields) {
      if (dateField) {
        // Handle custom date formats
        if (typeof dateField === "string") {
          // If it's already formatted, return as is
          if (dateField.includes(" ")) {
            return dateField;
          }
          // Try to parse as date
          const date = new Date(dateField);
          if (!isNaN(date.getTime())) {
            return date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          }
        }
      }
    }

    return "";
  }

  /**
   * Get featured image URL from post
   * @param {object} post - Post object
   * @returns {string} - Image URL
   */
  getFeaturedImage(post) {
    if (!post) return "";

    // Try ACF fields first - specific to content types
    if (post.acf?.client_stories_image) return post.acf.client_stories_image; // For case studies
    if (post.acf?.blog_image) return post.acf.blog_image;
    if (post.acf?.featured_image) return post.acf.featured_image;
    if (post.acf?.news_image) return post.acf.news_image;
    if (post.acf?.feature_image) return post.acf.feature_image; // For events

    // Try WordPress embedded media
    if (post._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
      return post._embedded["wp:featuredmedia"][0].source_url;
    }

    return "";
  }

  /**
   * Get excerpt/description from post
   * @param {object} post - Post object
   * @returns {string} - Excerpt
   */
  getExcerpt(post) {
    if (!post) return "";

    // Try ACF description fields first
    if (post.acf?.news_description) return post.acf.news_description;
    if (post.acf?.description) return post.acf.description;
    if (post.acf?.short_description) return post.acf.short_description;
    if (post.acf?.event_description) return post.acf.event_description; // For events

    // Try WordPress excerpt
    if (post.excerpt?.rendered) {
      return this.stripHtmlTags(post.excerpt.rendered);
    }

    // Try content
    if (post.content?.rendered) {
      const content = this.stripHtmlTags(post.content.rendered);
      return content.length > 150 ? content.substring(0, 150) + "..." : content;
    }

    return "";
  }

  /**
   * Get objectives from post (for case studies)
   * @param {object} post - Post object
   * @returns {array} - Array of objectives
   */
  getObjectives(post) {
    if (!post) return [];

    // Try ACF objectives field
    if (post.acf?.objectives) {
      if (Array.isArray(post.acf.objectives)) {
        return post.acf.objectives.map((obj) => ({
          text: obj.text || obj.objective || obj.title || obj,
        }));
      }
      // If it's a string, return as single objective
      if (typeof post.acf.objectives === "string") {
        return [{ text: post.acf.objectives }];
      }
    }

    return [];
  }

  /**
   * Strip HTML tags from text
   * @param {string} html - HTML text
   * @returns {string} - Plain text
   */
  stripHtmlTags(html) {
    if (typeof html !== "string") return "";
    return html.replace(/<[^>]*>/g, "").trim();
  }

  /**
   * Fetch categories from specific content type
   * @param {string} endpoint - API endpoint (posts, events, news, press_release)
   * @returns {Promise<array>} - Categories for that content type
   */
  async getCategoriesByEndpoint(endpoint) {
    try {
      const result = await this.fetchData(endpoint, {
        per_page: 100,
        _embed: true,
      });
      if (!result.success) {
        return [];
      }
      return this.extractCategories(result.data, endpoint);
    } catch (error) {
      console.error(`Error fetching categories from ${endpoint}:`, error);
      return [];
    }
  }

  /**
   * Fetch years from specific content type
   * @param {string} endpoint - API endpoint (posts, events, news, press_release)
   * @returns {Promise<array>} - Years for that content type
   */
  async getYearsByEndpoint(endpoint) {
    try {
      const result = await this.fetchData(endpoint, {
        per_page: 100,
        _embed: true,
      });
      if (!result.success) {
        return [];
      }
      return this.extractYears(result.data);
    } catch (error) {
      console.error(`Error fetching years from ${endpoint}:`, error);
      return [];
    }
  }

  /**
   * Fetch filtered posts from a specific endpoint
   * @param {string} endpoint - API endpoint
   * @param {string} category - Category to filter by
   * @param {string} year - Year to filter by
   * @param {object} params - Additional parameters
   * @returns {Promise<any>} - Filtered posts
   */
  async getFilteredPosts(endpoint, category = "", year = "", params = {}) {
    try {
      // Optimized approach: fetch smaller chunks and use more efficient filtering
      const postsPerPage = params.per_page || 6;
      const requestedPage = params.page || 1;

      // For initial filtering, fetch a reasonable amount of data (not all)
      const maxItemsToFetch = Math.max(100, postsPerPage * 10); // At least 10 pages worth
      let allData = [];
      let page = 1;
      let hasMore = true;

      // Fetch data in smaller, more efficient chunks
      while (allData.length < maxItemsToFetch && hasMore && page <= 3) {
        // Limit to 3 pages max
        const fetchParams = {
          per_page: 50, // Reduced from 100 for faster individual requests
          page: page,
        };

        // Events need _embed for proper ACF data (feature_image, youtube_video_filed)
        if (endpoint === "events") {
          fetchParams._embed = true;
        }

        const result = await this.fetchData(endpoint, fetchParams);

        if (!result.success) {
          if (page === 1) {
            return result; // Return error if first page fails
          } else {
            break; // Stop if subsequent pages fail
          }
        }

        allData = allData.concat(result.data || []);

        // Check if there are more pages
        const totalPages = parseInt(result.totalPages) || 1;
        hasMore = page < totalPages && (result.data || []).length === 50;
        page++;
      }

      console.log(
        `Fetched ${allData.length} items for filtering from ${endpoint}`
      );

      // Apply filters if any are specified
      let filteredData = allData;
      if (category || year) {
        filteredData = this.filterPosts(allData, category, year, endpoint);
        console.log(
          `After filtering: ${filteredData.length} items match criteria`
        );
      }

      // Apply pagination to the filtered results
      const startIndex = (requestedPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      // Estimate if there are more items (more conservative approach)
      const estimatedTotal = filteredData.length;
      const hasMoreEstimated = endIndex < estimatedTotal;

      return {
        success: true,
        data: paginatedData,
        total: estimatedTotal,
        totalPages: Math.ceil(estimatedTotal / postsPerPage),
        hasMore: hasMoreEstimated,
      };
    } catch (error) {
      console.error(`Error fetching filtered posts from ${endpoint}:`, error);
      return {
        success: false,
        data: [],
        error: error.message,
      };
    }
  }
}

// Create and export a singleton instance
const cmsApi = new WordPressCMSAPI();
export default cmsApi;

// Export individual methods for convenience
export const {
  getPosts,
  getPostBySlug,
  getNews,
  getNewsBySlug,
  getPressReleases,
  getPressReleaseBySlug,
  getEvents,
  getEventBySlug,
  getClientStories,
  getClientStoryBySlug,
  getCustomersSpeak,
  getCategories,
  extractCategories,
  extractYears,
  filterPosts,
  decodeHtmlEntities,
  getFormattedDate,
  getFeaturedImage,
  getExcerpt,
  getObjectives,
  getCategoriesByEndpoint,
  getYearsByEndpoint,
  getFilteredPosts,
  getNewNews,
  getNewNewsBySlug,
} = cmsApi;
