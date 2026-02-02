"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Btn from "../global/Btn";
import Image from "next/image";

const businessTabs = [
  {
    id: 1,
    title: "Technology & IT Infrastructure",
    tabtext: (
      <>
        Technology & IT <br /> Infrastructure
      </>
    ),
    description: [
      "Our parks come equipped with integrated IT systems that enhance visibility, security, and operational efficiency from day one. This includes high-definition surveillance, smart energy metering, and access control systems powered by a centralised visitor management platform, enabling secure and trackable movement across the park. Fully functional ATMs, high-speed internet lines and telecom towers are installed at Horizon parks for assured connectivity are installed within park premises.",
      "We also provide an ERP-integrated communication system that supports streamlined coordination between tenants, facility managers, and Horizon’s on-ground teams, reducing delays, simplifying maintenance requests, and keeping everyone aligned in real time.",
      "For construction phase visibility, we deploy drone monitoring to capture real-time aerial progress updates, enabling faster decisions, transparent reporting, and milestone tracking with precision.",
    ],
    image: "/value_added_services/business.png",
  },
  {
    id: 2,
    tabtext: "Inventory Management",
    title: "Inventory Management",
    description: [
      "Our InCity logistics parks are designed to support last-mile businesses that need to operate fast, smart—and often with limited capital. We offer modular, right-sized spaces for small businesses, startups, and entrepreneurs who may not require full warehouse blocks but still need reliable infrastructure to scale.",
      "Using the same capital-backed model as our first mile and mid-mile parks, we invest upfront in shared human resources, setting up storage racks, inventory management systems, and integrated security infrastructure. Businesses can access these as flexible rental components, eliminate the burden of high setup costs, and achieve a quicker go-to-market. Whether it’s cloud kitchens, quick-commerce setups, or hyperlocal warehousing, you choose what you need, and we work to fulfil it.",
    ],
    image: "/value_added_services/inventory.png",
    btnText: "InCity Logistics Parks",
    btnLink: "/incity-centers",
  },
  {
    id: 3,
    tabtext: "Workforce Amenities",
    title: "Workforce Amenities",
    description: [
      "We build for businesses, but we also plan for people and productivity.",
      "At Horizon, every park is designed with the belief that a well-supported workforce is central to long-term operational success. Our workforce amenities are thoughtfully integrated to improve wellbeing, enable retention, and create a more liveable work environment for everyone at our parks.",
      "These amenities go beyond convenience — they represent our commitment to building holistic, human-centered workplaces that balance efficiency with empathy, ensuring every person who works within our parks feels supported, engaged, and inspired to do their best.",
    ],
    image: "/value_added_services/workforce.png",
    btnText: "Workforce Amenities",
    btnLink: "/workforce",
  },
];

/* -------------------- ICONS (FROM AccMob) -------------------- */
const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
    <defs>
      <linearGradient
        id="gradPlus"
        x1="0"
        y1="0"
        x2="12"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#AC38D9" />
        <stop offset="100%" stopColor="#F47922" />
      </linearGradient>
    </defs>
    <rect x="5.28" y="1.2" width="1.44" height="9.6" fill="url(#gradPlus)" />
    <rect x="1.2" y="5.28" width="9.6" height="1.44" fill="url(#gradPlus)" />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
    <defs>
      <linearGradient
        id="gradMinus"
        x1="0"
        y1="0"
        x2="12"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#AC38D9" />
        <stop offset="100%" stopColor="#F47922" />
      </linearGradient>
    </defs>
    <rect x="1.2" y="5.28" width="9.6" height="1.44" fill="url(#gradMinus)" />
  </svg>
);


const BusinessTab = () => {
  const [activeTab, setActiveTab] = useState(0);
    const [mobileActive, setMobileActive] = useState(0);

  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ Preload all tab images on mount
  useEffect(() => {
    businessTabs.forEach((tab) => {
      const img = new window.Image();
      img.src = tab.image;
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Tabs (Desktop) */}
      <div className="w-[898px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:h-[80px] xl:h-[100px] fixup bg-[#808080] 1024:grid grid-cols-3 
               border border-[#808080] md:rounded-2xl lg:rounded-[28px] overflow-hidden mt-12"
        >
          {businessTabs.map((tab, i) => {
            const isActive = i === activeTab;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                initial={false}
                animate={{
                  backgroundImage: isActive
                    ? "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)"
                    : "linear-gradient(to right, #3E3E3E, #3E3E3E)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={clsx(
                  "relative flex items-center justify-between px-4 border-r border-[#808080] last:border-r-0 cursor-pointer focus:outline-none"
                )}
              >
                <motion.h2
                  animate={{ color: isActive ? "#ffffff" : "#ffffff" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="md:text-[17px] xl:text-[20px] bw-l"
                >
                  {tab.tabtext}
                </motion.h2>
                <AnimatePresence mode="wait" initial={false}>
                  {isActive && (
                    <motion.img
                      key={`active-icon-${i}`}
                      initial={{ y: "100%", x: "-100%", opacity: 0 }}
                      animate={{ y: 0, x: 0, opacity: 1 }}
                      exit={{ y: "100%", x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                      src="/whiteexternal.svg"
                      alt="Active"
                      className="w-[15%]"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile Dropdown */}
      {/* <div className="w-full fixup 1024:hidden mt-4 relative">
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="w-full border-0 border-b border-[#CDCDCD] mb-6 mt-12 py-3 px-2 bg-white text-black flex justify-between items-center rounded-none"
        >
          <span>{businessTabs[activeTab].title}</span>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute left-0 right-0 bg-white border !border-t-0 border-[#CDCDCD] -mt-6 shadow-md z-20"
            >
              {businessTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveTab(i);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    activeTab === i ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}

      {/* Tab Content - Desktop */}
      <div className="mt-[60px] hidden lg:flex lg:flex-row gap-5 lg:gap-[60px] w-full">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col 1024:pl-[max(5%,calc((100vw-1340px)/2))] lg:flex-row gap-5 bg-black z-50"
        >
          {/* Text */}
          <div className="lg:w-[50%]">
            <h3 className="lg:text-[32px] text-[24px] tracking-[-0.015em] sm:whitespace-nowrap bw-m mb-4 text-white">
              {businessTabs[activeTab].title}
            </h3>
            {businessTabs[activeTab].description.map((para, idx) => (
              <p
                key={idx}
                className="text-white bw-r text-[16px] xl:text-[17px] xl:leading-[27px] pr-[40px] 1440:pr-[70px] 1440:text-[20px] 1440:leading-[30px] mb-3"
              >
                {para}
              </p>
            ))}
            {businessTabs[activeTab].btnText && (
              <Btn
                text={businessTabs[activeTab].btnText}
                className="mt-4 !pl-0"
                href={businessTabs[activeTab].btnLink || "#"}
              />
            )}
          </div>

          {/* Image */}
          <div className="lg:w-[50%] h-full">
            <Image
              src={businessTabs[activeTab].image}
              alt={businessTabs[activeTab].title}
              width={600}
              height={400}
              className="w-full object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Tab Content - Mobile */}
      {/* <div className="mt-[50px] flex fixup flex-col lg:hidden gap-5 lg:gap-[60px] w-full">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col 1024:pl-[max(5%,calc((100vw-1340px)/2))] lg:flex-row gap-5 bg-black relative"
        >
   
          <div className="lg:w-[45%]">
            <h3 className="lg:text-[32px] text-[24px] bw-m mb-4 text-white">
              {businessTabs[activeTab].title}
            </h3>
            {businessTabs[activeTab].description.map((para, idx) => (
              <p
                key={idx}
                className="text-white bw-r text-[16px] 1024:pr-[70px] 1440:text-[20px] 1440:leading-[30px] mb-3"
              >
                {para}
              </p>
            ))}
            {businessTabs[activeTab].btnText && (
              <Btn
                text={businessTabs[activeTab].btnText}
                className="mt-4 !pl-0"
                href={businessTabs[activeTab].btnLink || "#"}
              />
            )}
          </div>

  
          <div className="lg:w-[55%] flex relative justify-start">
            <Image
              src={businessTabs[activeTab].image}
              alt={businessTabs[activeTab].title}
              width={600}
              height={400}
              className="w-full object-contain"
              priority
            />
          </div>
        </motion.div>
      </div> */}

   {/* -------------------- MOBILE ACCORDION (NEW) -------------------- */}
      <div className="lg:hidden relative z-20 px-[5%] mt-4 w-full">
        {businessTabs.map((tab, i) => {
          const isActive = mobileActive === i;

          return (
            <div key={tab.id} className="border-b border-gray-600 py-3">
              <button
                onClick={() =>
                  setMobileActive((prev) => (prev === i ? null : i))
                }
                className="w-full flex items-center gap-3 text-left"
              >
                {isActive ? <MinusIcon /> : <PlusIcon />}
                <h3 className="text-white text-[18px]">{tab.title}</h3>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden mt-4"
                  >
                    

                    {tab.description.map((p, i) => (
                      <p key={i} className="text-white mb-3">
                        {p}
                      </p>
                    ))}
{/* 
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      width={600}
                      height={400}
                      className="w-full  object-contain mb-4"
                    /> */}

                    {tab.btnText && (
                      <Btn
                        text={tab.btnText}
                        href={tab.btnLink}
                        className="mt-3 !pl-0"
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default BusinessTab;
