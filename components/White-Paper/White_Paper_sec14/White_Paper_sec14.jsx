"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const White_Paper_sec14 = () => {
  // Separate active state for each column
  const [leftActive, setLeftActive] = useState(null);
  const [rightActive, setRightActive] = useState(null);

  const toggleLeft = (index) => {
    setLeftActive(leftActive === index ? null : index);
  };

  const toggleRight = (index) => {
    setRightActive(rightActive === index ? null : index);
  };

  // ---------- LEFT COLUMN DATA ----------
  const data = [
    {
      title: "What is reverse logistics in India?",
      desc: "Reverse logistics is the process of managing returns, repairs, recycling, and re-commerce after a product is sold. In India, it covers activities like COD rejections, fashion returns, e-waste recycling, and secondary market resale.",
    },
    {
      title: "Why is reverse logistics important for e-commerce companies?",
      desc: "Nearly 1 in 5 e-commerce orders in India are returned. Efficient reverse logistics lowers costs, builds customer trust with faster refunds, and ensures compliance with e-waste and packaging regulations.",
    },
    {
      title: ": What is the market size of reverse logistics in India?",
      desc: "The Indian reverse logistics market is estimated between $33-90 billion in 2024, with projected growth of 15-20% CAGR through 2030",
    },
    {
      title: "Which sectors have the highest product return rates in India?",
      desc: "Fashion & footwear (30-35%), electronics (18-22%), furniture (12-15%), and FMCG (5-8%). COD orders alone see up to 26% rejection rates",
    },
  ];

  // ---------- RIGHT COLUMN DATA ----------
  const data2 = [
    {
      title: " How does reverse logistics link to sustainability and ESG?",
      desc: "With Extended Producer Responsibility (EPR) rules, companies must collect and recycle products. Reverse logistics supports circular economy goals, reduces landfill waste, and strengthens ESG reporting credibility.",
    },
    {
      title:
        "What are some examples of reverse logistics innovations in India?",
      desc: "Flipkart’s open-box delivery reduced smartphone return rates; Amazon Renewed created a resale channel for certified refurbished devices; Cashify built a structured refurb ecosystem across Tier-2/3 cities",
    },
    {
      title: "What challenges do Indian companies face in reverse logistics?",
      desc: "High costs (1.5x forward delivery), unpredictability of returned goods, fraud (fake returns), and compliance pressures around e-waste, plastics, and batteries.",
    },
    {
      title:
        " How can businesses make reverse logistics a competitive advantage?",
      desc: "By setting up dedicated returns hubs, integrating tech platforms, incentivising prepaid orders, building re-commerce channels, and partnering with licensed recyclers for compliance",
    },
  ];

  return (
    <section className="w-full md:py-[80px] flex items-center lg:py-24 py-[45px] bg-black text-white">
      <div className="fix">
        {/* ---------- HEADING ---------- */}
        <div className="flex md:justify-center">
          <h2 className="md:text-center max-w-fit text-[35px] md:text-[45px] xl:text-[64px] pb-4 leading-[45px] md:leading-[55px] xl:leading-[74px] tracking-[-0.04em] bw-m txt_gradient">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ---------- TWO COLUMN FAQ LAYOUT ---------- */}
        <div className="flex flex-col lg:flex-row 1024:gap-[50px]">
          {/* ---------- LEFT COLUMN ---------- */}
          <div className="flex-1 lg:space-y-6">
            {data.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#303030] py-3 lg:py-[20px]"
              >
                <button
                  onClick={() => toggleLeft(index)}
                  className="cursor-pointer w-full flex justify-between items-center text-left bw-m text-[17px] lg:text-[18px] leading-[26px] transition"
                >
                  {faq.title}
                  {leftActive === index ? (
                    <Minus className="w-5 h-5 shrink-0 ml-2" />
                  ) : (
                    <Plus className="w-5 h-5 shrink-0 ml-2" />
                  )}
                </button>

                <AnimatePresence>
                  {leftActive === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="mt-3 text-[#E0E0E0CF] text-[16px] bw-r leading-[26px] overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: faq.desc }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ---------- RIGHT COLUMN ---------- */}
          <div className="flex-1 lg:space-y-6">
            {data2.map((faq, index) => {
              const actualIndex = index; // Now using rightActive, so index is 0-3
              return (
                <div
                  key={actualIndex}
                  className="border-b border-[#303030] py-3 lg:py-[20px]"
                >
                  <button
                    onClick={() => toggleRight(actualIndex)}
                    className="cursor-pointer w-full flex justify-between items-center text-left bw-m text-[17px] lg:text-[18px] leading-[26px] transition"
                  >
                    <p className="lg:w-[80%]">{faq.title}</p>
                    {rightActive === actualIndex ? (
                      <Minus className="w-5 h-5 shrink-0 ml-2" />
                    ) : (
                      <Plus className="w-5 h-5 shrink-0 ml-2" />
                    )}
                  </button>

                  <AnimatePresence>
                    {rightActive === actualIndex && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="mt-3 text-[#E0E0E0CF] text-[16px] bw-r leading-[26px] overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: faq.desc }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default White_Paper_sec14;
