"use client";
import React from "react";
import BlogCard from "../BlogCard";
import PressCard from "./PressCard";

const PressGrid = ({ pressReleases, activeTab }) => {
  if (!pressReleases || pressReleases.length === 0) {
    return (
      <div className="text-center py-[60px]">
        <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
          No press releases found
        </div>
        <div className="bw-r text-[16px] text-[#999999]">
          Check back later for new content.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 1440:w-[1340px] 1440:mx-auto mx-[5%] md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px] mb-10">
        {pressReleases.map((pressRelease, index) => (
          <div key={pressRelease.id || index}>
            <PressCard pressRelease={pressRelease} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressGrid;
