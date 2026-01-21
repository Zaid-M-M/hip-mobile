"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cmsApi from "@/src/lib/cmsApi";

const EventDetailHero = ({ slug }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const result = await cmsApi.getEventBySlug(slug);
        if (result.success && result.data) {
          setEvent(result.data);
        } else {
          console.error("Event not found:", result.error);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      }
      setLoading(false);
    };

    if (slug) {
      fetchEvent();
    }
  }, [slug]);

  // Get image URL
  const getImageUrl = () => {
    return cmsApi.getFeaturedImage(event) || "";
  };

  // Get title
  const getTitle = () => {
    if (typeof event?.title === "object") {
      return event.title.rendered || event.title;
    }
    return event?.title || "";
  };

  // Get event date
  const getEventDate = () => {
    return cmsApi.getFormattedDate(event);
  };

  if (loading) {
    return (
      <div className="w-full pt-[102px] pb-[40px] md:pb-[60px] lg:pb-[80px] bg-white">
        <div className="fix">
          <div className="text-center">
            <div className="bw-r text-[18px] text-[#666666]">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="w-full pt-[102px] pb-[40px] md:pb-[60px] lg:pb-[80px] bg-white">
        <div className="fix">
          <div className="text-center">
            <div className="bw-r text-[18px] text-[#666666]">
              Event not found
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-[40px] pb-[40px] bg-white">
      <div className="fix">
        {/* Breadcrumb */}
        <div className="mb-[30px]">
          <div className="flex items-center gap-[8px] text-[14px] text-[#666666] bw-r">
            <span>Home</span>
            <span>/</span>
            <span>Events</span>
          </div>
        </div>

        {/* Title with Abstract Pattern */}
        <div className="mb-[40px]">
          <h1 className="text-[40px] md:text-[48px] leading-[1.2] bw-r text-[#000000] mb-[20px] max-w-[600px]">
            {getTitle()}
            <div className="w-[150px] h-[20px] mt-[10px]">
              <img
                src="/abstract_pattern.svg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </h1>
          {getEventDate() && (
            <div className="text-[18px] text-[#666666] bw-r mt-[20px]">
              {getEventDate()}
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden mb-[60px]">
          <Image
            src={getImageUrl()}
            alt={getTitle()}
            fill
            className="object-cover"
            onError={(e) => {
              e.target.src = "";
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetailHero;
