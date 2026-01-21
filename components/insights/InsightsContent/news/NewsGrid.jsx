import NewsCard from "@/components/news/NewsCard";
import React from "react";

const NewsGrid = ({ news = [] }) => {
  if (!news || news.length === 0) {
    return null; // NewsTabContent will handle the empty state
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsGrid;
