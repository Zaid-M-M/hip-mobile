"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewsGrid from "./NewsGrid";
import cmsApi from "@/src/lib/cmsApi";
import LoadMoreButton from "../LoadMoreButton";
import Skeleton from "../Skeleton";
import BlogGrid from "../BlogGrid";

const NewsTabContent = () => {
  const postsPerPage = 6;

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const fetchNews = async (page = 1) => {
    setLoading(true);
    setShowSkeleton(true); // Show skeleton on every fetch
    try {
      const params = {
        per_page: postsPerPage,
        page: page,
      };

      console.log("Fetching media news with params:", params);
      const result = await cmsApi.getNewNews(params);
      console.log("Media news result:", result);

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch news");
      }

      const newsArray = result.data || [];
      console.log("Received news array:", newsArray);

      // Check if we got any valid news items
      if (Array.isArray(newsArray) && newsArray.length === 0) {
        console.log("No news items found in response");
      }

      const isLastPage =
        page >= parseInt(result.totalPages || 1) ||
        newsArray.length < postsPerPage;

      setNews((prev) => (page === 1 ? newsArray : [...prev, ...newsArray]));
      setHasMore(!isLastPage);
      if (newsArray.length > 0) {
        setShowSkeleton(false); // Hide skeleton if news items are found
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setHasMore(false);
      if (page === 1) setNews([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(1);

    // Set timeout to hide skeleton after 10 seconds if no news are found
    const skeletonTimeout = setTimeout(() => {
      if (news.length === 0 && loading === false) {
        setShowSkeleton(false);
      }
    }, 10000);

    return () => clearTimeout(skeletonTimeout); // Cleanup timeout
  }, []);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchNews(nextPage);
  };

  return (
    <div className="fix">
      <AnimatePresence>
        {showSkeleton ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Skeleton type="grid" count={6} />
          </motion.div>
        ) : news.length === 0 ? (
          <motion.div
            key="no-news"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center py-[40px]"
          >
            <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
              No news found
            </div>
            <div className="bw-r text-[16px] text-[#999999]">
              Check back later for new content.
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="news-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-12"
          >
            <NewsGrid news={news} />
            {hasMore && !loading && (
              <div className="text-center mt-[20px] md:mt-[30px]">
                <LoadMoreButton onLoadMore={loadMore} loading={loading} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsTabContent;
