"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PressGrid from "./PressGrid";
import cmsApi from "@/src/lib/cmsApi";
import LoadMoreButton from "../LoadMoreButton";
import Skeleton from "../Skeleton";

const PressTabContent = () => {
  const postsPerPage = 6;

  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const fetchPressReleases = async (page = 1) => {
    setLoading(true);
    setShowSkeleton(true); // Show skeleton on every fetch
    try {
      const params = {
        per_page: postsPerPage,
        page: page,
      };

      const result = await cmsApi.getPressReleases(params);

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch press releases");
      }

      const pressReleaseArray = result.data || [];
      const isLastPage =
        page >= parseInt(result.totalPages || 1) ||
        pressReleaseArray.length < postsPerPage;

      setPressReleases((prev) =>
        page === 1 ? pressReleaseArray : [...prev, ...pressReleaseArray]
      );
      setHasMore(!isLastPage);
      if (pressReleaseArray.length > 0) {
        setShowSkeleton(false); // Hide skeleton if press releases are found
      }
    } catch (error) {
      console.error("Error fetching press releases:", error);
      setHasMore(false);
      if (page === 1) setPressReleases([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPressReleases(1);

    // Set timeout to hide skeleton after 10 seconds if no press releases are found
    const skeletonTimeout = setTimeout(() => {
      if (pressReleases.length === 0 && loading === false) {
        setShowSkeleton(false);
      }
    }, 10000);

    return () => clearTimeout(skeletonTimeout); // Cleanup timeout
  }, []);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchPressReleases(nextPage);
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
        ) : pressReleases.length === 0 ? (
          <motion.div
            key="no-press-releases"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center py-[40px]"
          >
            <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
              No press releases found
            </div>
            <div className="bw-r text-[16px] text-[#999999]">
              Check back later for new content.
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="press-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-12"
          >
            <PressGrid
              pressReleases={pressReleases}
              activeTab="Press Release"
            />
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

export default PressTabContent;
