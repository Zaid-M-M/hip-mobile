"use client";
import React from "react";
import { motion } from "framer-motion";
import cmsApi from "@/src/lib/cmsApi";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";

const InsightsFilters = ({
  selectedCategory,
  setSelectedCategory,
  selectedYear,
  setSelectedYear,
  onClearFilters,
  availableCategories = [],
  availableYears = [],
  showPressType = false,
  pressReleaseFilter = "news",
  setPressReleaseFilter = () => {},
  activeTab = "",
}) => {
  // Check if any filters are active (for Events tab, only check year)
  const hasActiveFilters =
    activeTab === "Events" ? selectedYear : selectedCategory || selectedYear;

  return (
    <motion.div
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
      // viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-[16px] fixup lg:gap-[24px]">
        {/* Filters Container */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[40px] mt-10 flex-1">
          {/* Press Type Filter - only for News & Press Release */}
          {showPressType && (
            <div className="relative w-full md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]">
              <CustomDropdown
                categories={["News", "Press Release"]}
                activeTab={pressReleaseFilter === "news" ? 0 : 1}
                setActiveTab={(i) =>
                  setPressReleaseFilter(i === 0 ? "news" : "press_release")
                }
                className="w-full mt-0 relative"
              />
            </div>
          )}

          {/* Category Filter - custom dropdown (hidden for Events tab) */}
          {activeTab !== "Events" && (
            <div className="relative w-full md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]">
              {availableCategories.length > 0 ? (
                <CustomDropdown
                  categories={[
                    "Categories",
                    ...availableCategories.map(cmsApi.decodeHtmlEntities),
                  ]}
                  activeTab={
                    selectedCategory
                      ? availableCategories.findIndex(
                          (c) => c === selectedCategory
                        ) + 1
                      : 0
                  }
                  setActiveTab={(i) => {
                    if (i === 0) setSelectedCategory("");
                    else setSelectedCategory(availableCategories[i - 1]);
                  }}
                  className="w-full mt-0 relative"
                />
              ) : (
                <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
                  <span>Categories</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              )}
            </div>
          )}

          {/* Year Filter - custom dropdown */}
          <div className="relative w-full md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]">
            {availableYears.length > 0 ? (
              <CustomDropdown
                categories={["Year", ...availableYears.map(String)]}
                activeTab={
                  selectedYear
                    ? availableYears.findIndex(
                        (y) => String(y) === String(selectedYear)
                      ) + 1
                    : 0
                }
                setActiveTab={(i) => {
                  if (i === 0) setSelectedYear("");
                  else setSelectedYear(String(availableYears[i - 1]));
                }}
                className="w-full mt-0 relative"
              />
            ) : (
              <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
                <span>Year</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down opacity-50"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Clear All Button - Only show when filters are active */}
        {hasActiveFilters && (
          <div className="flex justify-start">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClearFilters}
              className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
            >
              <img
                src="/cross.svg"
                alt="Cross"
                className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
              />
              <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
                Clear All
              </span>
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InsightsFilters;
