"use client";
import TransitionLink from "@/src/app/TransitionLink";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RelatedLinks = ({ slug }) => {
  // console.log(slug, "dafs");
  const [links, setLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const urlMap = {
    goa: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog",
    delhi:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog",
    gujarat:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog",
    "tamil-nadu":
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo",
    telangana:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog",
    maharashtra:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog",
    karnataka:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog",
    haryana:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog",
  };

  useEffect(() => {
    if (!slug) return;

    const fetchLinks = async () => {
      setLoading(true);
      try {
        const res = await fetch(urlMap[slug]);
        if (!res.ok) throw new Error("Failed to fetch links");
        const data = await res.json();

        const formatted = data.map((item) => ({
          title: item.title.rendered,
          slug: item.slug,
        }));

        setLinks(formatted);
      } catch (err) {
        console.error("Error fetching related links:", err);
        setLinks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, [slug]);

  return (
    <section className="w-full bg-[#EBEBEB] py-[45px] lg:py-[100px] relative">
      {/* Header */}
      <div className="flex justify-between items-center fixup">
        <h2 className="text-black bw-m text-[28px] xl:text-[64px] xl:leading-[74px] tracking-[-0.04em] md:text-[56px]">
          Related <span className="bw-r">Links</span>
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[45px] h-[45px] cursor-pointer 1280:w-[80px] 1280:h-[80px] border border-[#BEBEBE] flex items-center justify-center"
        >
          {isOpen ? (
            <span className="w-[16px] 1280:w-[22px] h-[2px] bg-black block"></span>
          ) : (
            <div className="relative w-[16px] h-[16px] 1280:w-[22px] 1280:h-[22px]">
              <span className="absolute inset-x-0 top-1/2 h-[2px] bg-black"></span>
              <span className="absolute inset-y-0 left-1/2 w-[2px] bg-black"></span>
            </div>
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all fixup duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] px-[0px] pt-5 lg:pt-16">
          {loading ? (
            <p>Loading...</p>
          ) : links.length > 0 ? (
            links.map((link, index) => (
              <TransitionLink
                key={index}
                className="relative overflow-hidden flex items-center bw-r w-full bg-white text-black lg:text-[20px] text-[14px] md:text-[16px] leading-[20px] md:leading-[23px] lg:leading-[30px] tracking-[-0.5px] h-[70px] md:h-[100px] px-10 shadow-sm"
                href={`/${slug}/${link.slug}`} // ✅ dynamic path
              >
                <p
                  className="max-w-fit flex"
                  dangerouslySetInnerHTML={{ __html: link.title }}
                />
                <img
                  src="/state/rlbg.svg"
                  className="absolute lg:bottom-0 bottom-[-15px] lg:left-0 left-[-15px] w-[100px] aspect-square"
                  alt=""
                />
              </TransitionLink>
            ))
          ) : (
            <p>No links available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
