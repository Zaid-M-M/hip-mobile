"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const TabHead = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { title: "Green Certifications & Accreditations" },
    { title: "ISO Certifications" },
  ];

  return (
    <div className="flex flex-col md:gap-10 gap-5">
      <div className="flex flex-col md:flex-row xl:gap-6">
        {/* ---- LEFT ---- */}
        <div className="w-full flex-1 flex flex-col justify-center">
          <h2 className="text-[35px] flex flex-col md:text-[45px] xl:text-[64px] xl:leading-[74px] 2xl:text-[76px] 2xl:leading-[86px] md:leading-[55px] leading-[45px] bw-r xl:tracking-[-3.04px]">
            <span className="bw-r">Proof in Practice</span>
            <span className="flex xl:gap-[17px] gap-[10px]">
              <img
                className="abstract_sustian_svg"
                src="/abstract_pattern_sustain.png"
                alt="Sustainability Gradient"
              />
            </span>
          </h2>
        </div>

        {/* ---- RIGHT ---- */}
        <div className="xl:max-w-[45%] md:max-w-[50%] flex flex-col justify-center gap-4">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-[#CDCDCD] flex rounded-2xl lg:rounded-[28px] overflow-hidden mt-4 xl:mt-[90px]"
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
                        "linear-gradient(110deg, #2BB04C -1.66%, #8F53A1 80.67%), linear-gradient(111deg, #0db14b 6.59%, #772BF2 113.67%), linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%), radial-gradient(146.84% 113.11% at 27.16% 116.5%, #F47922 0%, #8B37A4 100%)",
                    }}
                  />

                  {/* content */}
                  <div className="relative z-10 flex w-full gap-2">
                    <h2
                      className={clsx(
                        "md:text-[16px] text-[14px] text-left transition-colors duration-100 lg:text-[20px] xl:text-[23px] bw-r",
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
          Horizon is committed to responsible practices — not just in how we
          design, build, and operate our parks, but also how we work every
          day—prioritising the planet, people, partners, customers, and
          communities. We act with purpose on impactful sustainability
          initiatives, and champion awareness and accountability across our
          teams at our offices and our parks. The following certifications and
          affiliations serve as a testament to this commitment.
        </p>
      </div>
    </div>
  );
};

export default TabHead;
