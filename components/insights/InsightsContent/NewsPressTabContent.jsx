"use client";
import React, { useState, useEffect } from "react";
import BlogGrid from "./BlogGrid"; // Reuse grid for displaying cards
import LoadMoreButton from "./LoadMoreButton";
import cmsApi from "@/src/lib/cmsApi";

const NewsPressTabContent = ({ pressReleaseFilter }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const postsPerPage = 6;

  const fetchItems = async (page = 1) => {
    setLoading(true);
    try {
      const params = { per_page: postsPerPage, page };
      let result;
      if (pressReleaseFilter === "news") {
        result = await cmsApi.getNews(params);
      } else {
        result = await cmsApi.getPressReleases(params);
      }

      if (result.success) {
        const data = result.data || [];
        if (page === 1) setItems(data);
        else setItems((prev) => [...prev, ...data]);
        setHasMore(data.length >= postsPerPage);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems(1);
    setCurrentPage(1);
  }, [pressReleaseFilter]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchItems(nextPage);
  };

  if (loading && items.length === 0)
    return (
      <div className="text-center py-10">Loading {pressReleaseFilter}...</div>
    );

  if (items.length === 0)
    return (
      <div className="text-center py-10">
        No {pressReleaseFilter === "news" ? "news" : "press releases"} found.
      </div>
    );

  return (
    <>
      <BlogGrid blogs={items} /> {/* Reuse BlogGrid for cards */}
      {hasMore && <LoadMoreButton onLoadMore={loadMore} loading={loading} />}
    </>
  );
};

export default NewsPressTabContent;
