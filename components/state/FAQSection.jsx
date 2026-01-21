"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQSection = ({ data, data2 }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftColumn = data || [];
  const rightColumn = data2 || [];
  return (
    <section className="w-full xl:min-h-[100vh] min-h-[auto] md:py-[80px] lg:py-[100px] py-[45px] bg-black text-white F">
      <div className="fix">
        {/* Heading */}
        <div className="flex md:justify-center">
          <h2 className="md:text-center max-w-fit text-[35px] md:text-[45px] xl:text-[64px] pb-4 leading-[45px] md:leading-[55px] xl:leading-[74px] tracking-[-0.04em] bw-m txt_gradient">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row 1024:gap-[50px]">
          {/* Left Column */}
          <div className="flex-1 lg:space-y-6">
            {leftColumn.map((faq, index) => (
              <div
                key={index}
                className={`border-b ${
                  index + "faq"
                } border-b border-[#303030] py-3 lg:py-[20px] lg:mb-[0px]`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer bw-m text-[15px] md:text-[17px] lg:text-[18px] leading-[25px] md:leading-[27px] lg:leading-[28px] pr-5 w-full flex justify-between items-center text-left  bw-md transition"
                >
                  {faq.title}
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 shrink-0 ml-2" />
                  ) : (
                    <Plus className="w-5 h-5 shrink-0 ml-2" />
                  )}
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-[#e0e0e0cf] text-[16px] bw-r leading-[26px] overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: faq.desc || "" }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column */}
          {rightColumn.length > 0 && (
            <div className="flex-1 space-y-0 lg:space-y-6">
              {rightColumn.map((faq, index) => {
                const actualIndex = leftColumn.length + index; // ✅ updated
                return (
                  <div
                    key={actualIndex}
                    className={`border-b ${
                      actualIndex + "faq"
                    } border-[#303030] py-3 lg:py-[20px] lg:mb-[0px]`}
                  >
                    <button
                      onClick={() => toggleFAQ(actualIndex)}
                      className="cursor-pointer pr-5 w-full flex justify-between items-center text-left text-[18px] leading-[30px] bw-md transition"
                    >
                      <p className="lg:w-[80%] bw-m text-[15px] md:text-[17px] lg:text-[18px] leading-[25px] md:leading-[27px] lg:leading-[28px]">
                        {faq.title}
                      </p>
                      {activeIndex === actualIndex ? (
                        <Minus className="w-5 h-5 shrink-0 ml-2" />
                      ) : (
                        <Plus className="w-5 h-5 shrink-0 ml-2" />
                      )}
                    </button>

                    <AnimatePresence>
                      {activeIndex === actualIndex && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 text-[#E0E0E093] text-[16px] bw-r leading-[26px] overflow-hidden"
                          dangerouslySetInnerHTML={{ __html: faq.desc || "" }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
