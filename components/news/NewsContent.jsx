"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cmsApi from "@/src/lib/cmsApi";
import BlogCard from "@/components/insights/InsightsContent/BlogCard";
import NewsCard from "./NewsCard";
import LoadMoreButton from "@/components/insights/InsightsContent/LoadMoreButton";
import InsightsFilters from "@/components/insights/InsightsContent/InsightsFilters";

const NewsContent = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const postsPerPage = 6;

  // Fetch news data
  const fetchData = async (page = 1, reset = false) => {
    setLoading(true);
    try {
      const params = {
        per_page: postsPerPage,
        page: page,
        _embed: true
      };

      const result = await cmsApi.getNews(params);

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch news');
      }

      const newsArray = result.data;
      setTotalPages(result.totalPages ? parseInt(result.totalPages) : 1);

      // Check if this is the last page
      const isLastPage = page >= parseInt(result.totalPages) || newsArray.length < postsPerPage;

      if (reset || page === 1) {
        setNews(newsArray);
        setFilteredNews(newsArray);
        setHasMore(!isLastPage);
        // Update available categories and years from the fetched data
        setAvailableCategories(cmsApi.extractCategories(newsArray));
        setAvailableYears(cmsApi.extractYears(newsArray));
      } else {
        const newNews = [...news, ...newsArray];
        setNews(newNews);
        setFilteredNews(newNews);
        setHasMore(!isLastPage);
        // Update available categories and years from all fetched data
        setAvailableCategories(cmsApi.extractCategories(newNews));
        setAvailableYears(cmsApi.extractYears(newNews));
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setHasMore(false);

      if (reset || page === 1) {
        setNews([]);
        setFilteredNews([]);
        setAvailableCategories([]);
        setAvailableYears([]);
      }
    }
    setLoading(false);
  };

  // Fetch data on component mount
  useEffect(() => {
    setCurrentPage(1);
    setHasMore(true);
    fetchData(1, true);
  }, []);

  // Filter news based on selected category and year
  useEffect(() => {
    if (news.length > 0) {
      const filtered = cmsApi.filterPosts(news, selectedCategory, selectedYear);
      setFilteredNews(filtered);
    }
  }, [news, selectedCategory, selectedYear]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchData(nextPage, false);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedYear("");
  };

  return (
    <div className="w-full bg-white">
      <div className="fix pb-[60px] md:pb-[80px] lg:pb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Filters */}
          <div className="mb-[40px] md:mb-[60px]">
            <InsightsFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              onClearFilters={clearFilters}
              availableCategories={availableCategories}
              availableYears={availableYears}
            />
          </div>

          {/* News Grid */}
          {loading && news.length === 0 ? (
            <div className="text-center py-[40px]">
              <div className="bw-r text-[18px] text-[#666666]">Loading...</div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px]">
                {filteredNews.map((newsItem, index) => (
                  <motion.div
                    key={newsItem.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.7, 0, 0.4, 1]
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <NewsCard item={newsItem} />
                  </motion.div>
                ))}
              </div>

              {/* Load More Button - only show if there's more content to load */}
              {hasMore && !loading && news.length > 0 && (
                <div className="text-center mt-[40px] md:mt-[60px]">
                  <LoadMoreButton onLoadMore={loadMore} loading={loading} />
                </div>
              )}
            </>
          )}

          {/* No results message */}
          {!loading && filteredNews.length === 0 && news.length > 0 && (
            <div className="text-center py-[40px]">
              <div className="bw-r text-[18px] text-[#666666]">
                No news items found matching your filters.
              </div>
            </div>
          )}

          {/* No news at all */}
          {!loading && news.length === 0 && (
            <div className="text-center py-[40px]">
              <div className="bw-r text-[18px] text-[#666666]">
                No news items available.
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsContent;