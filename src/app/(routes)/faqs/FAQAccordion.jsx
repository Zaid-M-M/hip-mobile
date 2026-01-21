"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to convert relative links to absolute
  const convertRelativeLinks = (htmlContent) => {
    return htmlContent.replace(
      /href=['"]\/((?!http)[^'"]*)['"]]/g,
      'href="/$1"'
    );
  };

  // Split FAQs into two columns for desktop
  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midPoint);
  const rightColumn = faqData.slice(midPoint);

  return (
    <>
      {/* Mobile: Single Column */}
      <div className="lg:hidden max-w-4xl">
        {faqData.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`border-b ${
              index + "faq"
            } border-[#E5E5E5] py-[20px] last:border-b-0 cursor-pointer`}
          >
            <button className="cursor-pointer w-full flex justify-between items-center text-left group">
              <h3 className="bw-m text-[18px] md:text-[20px] lg:text-[22px] leading-[28px] md:leading-[30px] lg:leading-[32px] text-[#101828] pr-4">
                {faq.web_faq_title}
              </h3>
              <div className="flex-shrink-0">
                {activeIndex === index ? (
                  <Minus className="w-6 h-6 text-[#101828]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#101828]" />
                )}
              </div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div
                    className="mt-4 text-[#666666] text-[16px] bw-r leading-[26px] blog-content"
                    dangerouslySetInnerHTML={{
                      __html: convertRelativeLinks(faq.web_faq_description),
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Desktop: Two Columns */}
      <div className="hidden lg:flex lg:gap-[60px] max-w-7xl">
        {/* Left Column */}
        <div className="flex-1">
          {leftColumn.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`border-b ${
                index + "faq"
              } border-[#E5E5E5] py-[20px] last:border-b-0 cursor-pointer`}
            >
              <button className="cursor-pointer w-full flex justify-between items-center text-left group">
                <h3 className="bw-m text-[18px] md:text-[20px] lg:text-[22px] leading-[28px] md:leading-[30px] lg:leading-[32px] text-[#101828] pr-4">
                  {faq.web_faq_title}
                </h3>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus className="w-6 h-6 text-[#101828]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#101828]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-4 text-[#666666] text-[16px] bw-r leading-[26px] blog-content"
                      dangerouslySetInnerHTML={{
                        __html: convertRelativeLinks(faq.web_faq_description),
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1">
          {rightColumn.map((faq, index) => {
            const actualIndex = leftColumn.length + index;
            return (
              <div
                key={actualIndex}
                onClick={() => toggleFAQ(actualIndex)}
                className={`border-b ${
                  actualIndex + "faq"
                } border-[#E5E5E5] py-[20px] last:border-b-0 cursor-pointer`}
              >
                <button className="cursor-pointer w-full flex justify-between items-center text-left group">
                  <h3 className="bw-m text-[18px] md:text-[20px] lg:text-[22px] leading-[28px] md:leading-[30px] lg:leading-[32px] text-[#101828] pr-4">
                    {faq.web_faq_title}
                  </h3>
                  <div className="flex-shrink-0">
                    {activeIndex === actualIndex ? (
                      <Minus className="w-6 h-6 text-[#101828]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#101828]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === actualIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="mt-4 text-[#666666] text-[16px] bw-r leading-[26px] blog-content"
                        dangerouslySetInnerHTML={{
                          __html: convertRelativeLinks(faq.web_faq_description),
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
