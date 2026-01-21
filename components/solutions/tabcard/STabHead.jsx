"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const STabHead = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { title: "Green Certifications & Accreditations" },
    { title: "ISO Certifications" },
  ];

  return (
    <div className="flex flex-col md:gap-10 gap-5">
      <div className="flex flex-col md:flex-row xl:gap-6">
        {/* ---- LEFT ---- */}
        <div className="w-full flex-1 flex flex-col justify-center">
          <h2 className="text-[35px] flex gap-2 xl:gap-5 md:text-[45px] xl:text-[52px] xl:leading-[62px] 2xl:text-[56px] 2xl:leading-[74px] md:leading-[55px] leading-[45px] bw-r xl:tracking-[-2.26px]">
            <span className="bw-m">Compliance</span>
            <span className="flex xl:gap-[17px] gap-[10px]">
              <img
                className="abstract_svg"
                src="/abstract_pattern.svg"
                alt="Sustainability Gradient"
              />
            </span>
          </h2>
          <h2 className="text-[35px] flex gap-5 md:text-[45px] xl:text-[52px] xl:leading-[62px] 2xl:text-[56px] 2xl:leading-[66px] md:leading-[55px] leading-[45px] bw-r xl:tracking-[-2.26px]">
            At the Core of Every Solution
          </h2>
        </div>

        {/* ---- RIGHT ---- */}
        <div className="xl:max-w-[40%] 1440:max-w-[38%] md:max-w-[50%] flex flex-col justify-center gap-4">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-[#CDCDCD] flex rounded-2xl lg:rounded-[28px] overflow-hidden mt-4"
          >
            {tabs.map((tab, i) => {
              const isActive = tab.title === activeTab;

              return (
                <motion.button
                  key={tab.title + i}
                  onClick={() => setActiveTab(tab.title)}
                  className={clsx(
                    "relative flex items-center justify-between cursor-pointer focus:outline-none md:w-[50%] w-full h-[60px] md:h-[90px] xl:h-[100px] md:px-[20px] px-2 overflow-hidden",
                    isActive ? "text-white" : "text-black"
                  )}
                >
                  {/* gradient overlay */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(110deg, #8F53A1 24%, #F47922 98.55%), linear-gradient(110deg, #AC38D9 12%, #F47922 104.87%), linear-gradient(111deg, #0db14b 6.59%, #772BF2 113.67%)",
                    }}
                  />

                  {/* content */}
                  <div className="relative z-10 flex w-full gap-2">
                    <h2
                      className={clsx(
                        "md:text-[16px] text-[14px] text-left transition-colors duration-100 lg:text-[20px] 1366:text-[23px] bw-r",
                        isActive ? "text-white" : "text-black"
                      )}
                    >
                      {tab.title}
                    </h2>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Optional paragraph under everything */}
      <div className="flex flex-col justify-center mt-0">
        <p className="bw-r md:text-[17px] lg:text-[18px] 1280:text-[20px] md:leading-[30px]">
          Whether it is land, power, labour, or safety, compliance is not an
          afterthought for us. It’s a built-in, ongoing promise. Our teams
          continuously monitor and manage adherence to evolving regulatory
          requirements across EHS, statutory audits, energy norms, and labour
          law provisions, so you can focus on scaling your business, not
          paperwork.
        </p>
      </div>
    </div>
  );
};

export default STabHead;
