"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import OverView from "../megamenu/overview/OverView";
import TransitionLink from "@/src/app/TransitionLink";
import CapOverView from "../megamenu/CapOverView";
import KnowUsOverView from "../megamenu/KnowUsOverView";

const menuItems = [
  "Network",
  "Capabilities",
  "Integrated Solutions",
  "Insights",
  "Sustainability & Impact",
  "Investor Relations",
  "Explore Horizon",
];

export const menuLinks = {
  "Explore Horizon": [
    { text: "Culture", url: "/culture/" },
    { text: "Contact", url: "/contact/" },
  ],
  Capabilities: [
    {
      text: "Capabilities Overview",
      url: "/capabilities-overview/",
      dropdown: [
        {
          text: "Industrial Facilities",
          url: "/factory-and-inplant-solutions/",
        },
        { text: "InCity Centres", url: "/incity-centers/" },
        { text: "Fulfillment Centres", url: "/fulfillment/" },
      ],
    },
    {
      text: "Sector Specialists",
      url: "/sector-specialists/",
      dropdown: [
        {
          text: "Automotive & Auto Components",
          url: "/automotive/",
        },
        { text: "Engineering & Aerospace", url: "/aerospace/" },
        {
          text: "Logistics & Supply Chain",
          url: "/logistics/",
        },
        { text: "Packaging", url: "/packaging/" },
        { text: "Chemicals", url: "/chemical/" },
        { text: "FMCG & Retail", url: "/fmcg/" },
        { text: "Renewable Energy", url: "/renewable-energy/" },
        { text: "E-Commerce", url: "/ecommerce/" },
      ],
    },
  ],
  "Integrated Solutions": [
    {
      text: "Integrated Solutions Overview",
      url: "/integrated-business-solutions/",
    },
    { text: "Enabling Agile Growth", url: "/enabling-agile-growth/" },
    { text: "Value Added Solutions", url: "/value-added-services/" },
    { text: "Workforce Amenities", url: "/workforce/" },
  ],
  Insights: [
    { text: "Media", url: "/media/" },
    { text: "Case Studies and Client Testimonials", url: "/case-studies/" },
    // { text: "Client Testimonials", url: "/case-studies/#client-testimonials" },
  ],
  "Sustainability & Impact": [
    { text: "Sustainability Overview", url: "/sustainability/" },
    { text: "Environment", url: "/environment/" },
    { text: "Social", url: "/social/" },
    { text: "Governance", url: "/governance/" },
  ],
  "Investor Relations": [
    { text: "Offer Documents", url: "/offer-documents/" },
    { text: "Financial Information", url: "/financial-information/" },
    { text: "Corporate Governance", url: "/corporate-governance/" },
    // { text: "Investor Resources", url: "/investor-resources/" },
  ],
};

const HoverDrop = ({
  openIndex,
  activeLinkIndex,
  setActiveLinkIndex,
  setOpenIndex,
  setSubDrop,
  setIsNavOpen,
  isNavOpen,
}) => {
  const getLinksForMenu = (menu) => menuLinks[menu] || [];

  return (
    <div className="relative  bg-white">
      {/* Top Menu */}
      <div className="flex justify-between relative z-20 fixup">
        {menuItems.map((item, idx) => (
          <div key={idx} className="relative">
            <button
              className="flex items-center h-[60px] gap-[10px] cursor-pointer group"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span
                className="bw-sb text-[16px] 2xl:text-[20px] tracking-[-0.8px] capitalize transition-colors duration-200"
                style={{ color: openIndex === idx ? "#F47922" : "#A1A1A1" }}
              >
                {item}
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-500 ${
                  openIndex === idx
                    ? "rotate-180 text-[#F47922]"
                    : "rotate-0 text-[#A1A1A1]"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            key={openIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
            className="absolute left-0 top-full w-screen bg-white overflow-visible z-10"
          >
            {/* <div className="w-full bg-white 1440:max-w-[1340px] max-w-full 1440:mx-auto"> */}
            <div
              className={`w-full bg-white ${
                menuItems[openIndex] !== "Capabilities"
                  ? "1440:max-w-[1340px] max-w-full 1440:mx-auto"
                  : "1440:max-w-[1340px] max-w-full 1440:mx-auto"
              }`}
            >
              {menuItems[openIndex] === "Capabilities" ? (
                <CapOverView
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                />
              ) : menuItems[openIndex] === "Network" ? (
                <OverView isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
              ) : menuItems[openIndex] === "Explore Horizon" ? (
                <KnowUsOverView
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                />
              ) : (
                <div className="flex 1440:mx-0 mx-[max(5%,calc((100vw-1340px)/2))] gap-5 pt-0 pb-5 1440:pt-5 1440:pb-10">
                  {getLinksForMenu(menuItems[openIndex]).map((link, i) => (
                    <div
                      key={i}
                      className="relative w-full flex-1"
                      onMouseEnter={() => {
                        setActiveLinkIndex(i);
                        if (link.dropdown) {
                          setSubDrop(true); // Set subDrop to true only if the link has a dropdown
                        }
                      }}
                      onMouseLeave={() => {
                        setActiveLinkIndex(null);
                        setSubDrop(false); // This will set subDrop to false on mouse leave
                      }}
                    >
                      <TransitionLink
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        href={link.url}
                        onClick={() => setOpenIndex(null)}
                        // onClick={() => isNavOpen && setIsNavOpen(!isNavOpen)}
                        className={`flex w-full justify-between items-center px-6 py-4 cursor-pointer transition-colors duration-200
                        ${
                          activeLinkIndex === i
                            ? "border-b border-[#F47922] bg-[rgba(0,0,0,0.02)] text-[#000]"
                            : "border-b border-[#D4D4D4] bg-transparent text-[#595959]"
                        }
                        bw-m text-[16px] leading-[24px] 1440:text-[20px] 1440:leading-[26px]`}
                      >
                        {link.text}
                        {link.dropdown && (
                          <ChevronDown
                            size={18}
                            className={`ml-2 transition-transform duration-300 ${
                              activeLinkIndex === i ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        )}
                      </TransitionLink>

                      {link.dropdown && activeLinkIndex === i && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="fixed left-0 top-[200px] 1440:top-[220px] w-full bg-white border-b border-gray-300 flex justify-between gap-5 py-4 z-[9999] overflow-hidden"
                        >
                          <div className="flex flex-wrap pl-2 justify-between fixup gap-2.5 1440:gap-5">
                            {link.dropdown.map((subLink, si) => (
                              <TransitionLink
                                isNavOpen={isNavOpen}
                                setIsNavOpen={setIsNavOpen}
                                key={si}
                                href={subLink.url}
                                onClick={() => setOpenIndex(null)}
                                // onClick={() =>
                                //   isNavOpen && setIsNavOpen(!isNavOpen)
                                // }
                                className="1440:flex-[1_0_calc(25%-20px)] flex-[1_0_calc(25%-10px)] flex justify-start px-4 py-3 cursor-pointer transition-colors duration-200 hover:border-[#F47922] border-b border-gray-200 hover:bg-[rgba(0,0,0,0.02)] text-[#595959] bw-m text-[16px]"
                              >
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="text-left w-full"
                                  transition={{
                                    duration: 0.5,
                                  }} // optional stagger
                                >
                                  {subLink.text}
                                </motion.span>
                              </TransitionLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverDrop;
