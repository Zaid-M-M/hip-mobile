"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import cmsApi from "@/src/lib/cmsApi";
import Btn2 from "@/components/global/Btn2";
import NewsCard from "@/components/news/NewsCard";

const NDContent = ({ slug }) => {
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await cmsApi.getNewNewsBySlug(slug);

        if (result?.success && result.data) {
          // Set the news data
          setNews(result.data);
          // Fetch related news after we have the current news
          await fetchRelatedNews(result.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    const fetchRelatedNews = async (newsData) => {
      try {
        // Fetch related news based on category if available
        const params = {
          exclude: newsData.id,
          per_page: 3,
        };

        const relatedResult = await cmsApi.getNewNews(params);
        if (relatedResult.success) {
          setRelatedNews(relatedResult.data || []);
        }
      } catch (error) {
        console.error("Error fetching related news:", error);
        setRelatedNews([]);
      }
      setRelatedLoading(false);
    };

    if (slug) fetchNews();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full bg-white my-12 xl:my-24">
        <div className="fix">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="w-full bg-white mb-[45px] md:mb-[125px]">
        <div className="fix text-center">
          <div className="bw-r text-[18px] text-[#666666]">
            Content not found
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white mb-[45px] md:mb-[125px]">
      <div className="fix">
        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[100px] news-content">
          <div className="w-full">
            <div
              className="content-wrapper bw-r text-[16px] leading-[28px] text-[#666666]"
              dangerouslySetInnerHTML={{
                __html: news.acf?.m_news_description || "",
              }}
            />
            {news.acf?.m_news_platform && news.acf?.m_news_link && (
              <Btn2
                href={news.acf?.m_news_link}
                tgt={true}
                className="buttonlink mt-5 xl:mt-12"
                text={news.acf?.m_news_platform}
                rel="noopener noreferrer"
              />
            )}
          </div>
        </div>

        {/* Related News Section */}
        {!relatedLoading && relatedNews.length > 0 && (
          <div className="mt-[60px] md:mt-[125px]">
            <div className="mb-[30px] md:mb-[50px]">
              <h2 className="bw-m text-[32px] leading-[40px] md:text-[45px] md:leading-[55px] tracking-[-1.8px] text-black">
                Related News
              </h2>
              <img
                src="/abstract_pattern.svg"
                alt="Abstract Pattern"
                className="abstract_svg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px]">
              {relatedNews.map((item, index) => (
                <NewsCard key={item.id || index} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NDContent;
