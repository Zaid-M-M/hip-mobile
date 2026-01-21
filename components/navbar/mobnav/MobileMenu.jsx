"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "../icons/MenuIcon";
import { usePathname } from "next/navigation";
import CloseMenu from "../icons/CloseMenu";
import {
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import TransitionLink from "@/src/app/TransitionLink";
import { useNav } from "@/src/app/context/NavContext";

const menuLinks = {
  Network: [
    { text: "Network Overview", url: "/network-overview/" },

    // 🏗 Industrial & Logistics Parks
    {
      text: "Industrial & Logistics Parks",
      subLinks: [
        {
          text: "Industrial & Logistics Parks",
          url: "/industrial-logistics-parks/",
        },

        // Delhi NCR
        {
          text: "Delhi NCR",
          subLinks: [
            { text: "Farukhnagar I", url: "/warehousing-park-farukhnagar-i/" },
            {
              text: "Farukhnagar II",
              url: "/warehousing-park-farukhnagar-ii/",
            },
            {
              text: "Bilaspur",
              url: "/industrial-and-warehousing-park-bilaspur/",
            },
            { text: "Koka", url: "/warehousing-park-koka/" },
            { text: "Luhari", url: "/warehousing-park-luhari-delhi-ncr/" },
          ],
        },

        // Ahmedabad
        {
          text: "Ahmedabad",
          subLinks: [
            {
              text: "Bhayala",
              url: "/industrial-and-warehousing-park-bhayala/",
            },
          ],
        },

        // Pune
        {
          text: "Pune",
          subLinks: [
            {
              text: "Chakan II",
              url: "/industrial-and-warehousing-park-chakan-ii/",
            },
            {
              text: "Chakan V",
              url: "/industrial-and-warehousing-park-chakan-v/",
            },
            { text: "Talegaon", url: "/talegaon/" },
          ],
        },

        // Mumbai
        {
          text: "Mumbai",
          subLinks: [{ text: "Bhiwandi", url: "/bhiwandi/" }],
        },

        // Nashik
        {
          text: "Nashik",
          subLinks: [{ text: "Nashik", url: "/nashik/" }],
        },

        // Nagpur
        {
          text: "Nagpur",
          subLinks: [
            { text: "XSIO Park One", url: "/xsio-park-one/" },
            { text: "XSIO Park Two", url: "/xsio-park-two/" },
            { text: "XSIO Park Three", url: "/xsio-park-three/" },
            { text: "XSIO Park One North", url: "/xsio-park-one-north/" },
          ],
        },

        // Goa
        // {
        //   text: "Goa",
        //   subLinks: [
        //     { text: "Verna", url: "/industrial-and-warehousing-park-verna" },
        //   ],
        // },

        // Hyderabad
        {
          text: "Hyderabad",
          subLinks: [
            { text: "Kothur", url: "/industrial-and-warehousing-park-kothur/" },
            {
              text: "Patancheru",
              url: "/industrial-and-warehousing-park-patancheru/",
            },
          ],
        },

        // Bengaluru
        {
          text: "Bengaluru",
          subLinks: [
            {
              text: "Dobbaspet I",
              url: "/industrial-and-warehousing-park-dobbaspet-i/",
            },
            {
              text: "Dobbaspet II",
              url: "/industrial-and-warehousing-park-dobbaspet-ii/",
            },
            { text: "Malur", url: "/warehousing-park-malur/" },
            { text: "Hoskote", url: "/hoskote/" },
            { text: "Hosur", url: "/industrial-and-warehousing-park-hosur/" },
          ],
        },

        // Chennai
        {
          text: "Chennai",
          subLinks: [
            {
              text: "Chengalpattu",
              url: "/industrial-and-warehousing-park-chengalpattu/",
            },
            {
              text: "Redhills-I",
              url: "/industrial-and-warehousing-park-redhills-i/",
            },
            {
              text: "Mappedu",
              url: "/industrial-and-warehouse-park-mappedu-chennai/",
            },
            { text: "MWC", url: "/industrial-and-warehouse-park-mwc-chennai/" },
            { text: "Oragadam", url: "/oragadam/" },
            { text: "Oragadam II", url: "/oragadam-ii/" },
          ],
        },
      ],
    },

    // 🏙 InCity Centers
    {
      text: "InCity Centers",
      subLinks: [
        { text: "InCity Centers", url: "/incity-centers/" },

        {
          text: "Bengaluru",
          subLinks: [
            { text: "Yeshwantpur", url: "/incity-centers/yeshwantpur/" },
          ],
        },

        {
          text: "Chennai",
          subLinks: [
            { text: "Chromepet", url: "/incity-centers/chromepet/" },
            { text: "Virugambakkam", url: "/incity-centers/virugambakkam/" },
          ],
        },

        {
          text: "Delhi NCR",
          subLinks: [
            { text: "Alipur I", url: "/incity-centers/incity-alipur-i/" },
            { text: "Alipur II", url: "/incity-centers/incity-alipur-ii/" },
            { text: "Gurugram", url: "/incity-centers/gurugram/" },
            { text: "Kirti Nagar", url: "/incity-centers/kirti-nagar/" },
            { text: "Narela", url: "/incity-centers/narela/" },
            { text: "Okhla I", url: "/incity-centers/okhla-1/" },
            { text: "Okhla II", url: "/incity-centers/okhla-2/" },
            { text: "RP Bagh", url: "/incity-centers/rp-bagh/" },
            { text: "Sahibabad II", url: "/incity-centers/sahibabad-22/" },
          ],
        },

        {
          text: "Mumbai",
          subLinks: [
            // { text: "Kurla", url: "/incity-centers/horizon-incity-kurla" },
            { text: "Vashi", url: "/incity-centers/vashi/" },
          ],
        },
        {
          text: "Thane",
          subLinks: [{ text: "Thane", url: "incity-centers/thane/" }],
        },

        {
          text: "Nagpur",
          subLinks: [
            {
              text: "Vardhaman Nagar",
              url: "/incity-centers/vardhaman-nagar/",
            },
          ],
        },

        {
          text: "Pune",
          subLinks: [
            { text: "Pimpri", url: "/incity-centers/horizon-incity-pimpri/" },
          ],
        },
        {
          text: "Goa",
          subLinks: [{ text: "Verna", url: "/incity-centers/verna/" }],
        },
      ],
    },

    // 🗺 View by States
    // {
    //   text: "View by States",
    //   subLinks: [
    //     {
    //       text: "Delhi",
    //       url: "/delhi/",
    //       subLinks: [
    //         { text: "Alipur I", url: "/incity-centers/incity-alipur-i/" },
    //         { text: "Alipur II", url: "/incity-centers/incity-alipur-ii/" },
    //         { text: "Kirti Nagar", url: "/incity-centers/kirti-nagar/" },
    //         { text: "Narela", url: "/incity-centers/narela/" },
    //         { text: "Okhla I", url: "/incity-centers/okhla-i/" },
    //         { text: "Okhla II", url: "/incity-centers/okhla-2/" },
    //         { text: "RP Bagh", url: "/incity-centers/rp-bagh/" },
    //         { text: "Sahibabad II", url: "/incity-centers/sahibabad-2/" },
    //       ],
    //     },

    //     {
    //       text: "Haryana",
    //       url: "/haryana/",
    //       subLinks: [
    //         { text: "Farukhnagar I", url: "/warehousing-park-farukhnagar-i/" },
    //         { text: "Farukhnagar II", url: "/warehousing-park-farukhnagar-ii/" },
    //         {
    //           text: "Bilaspur",
    //           url: "/industrial-and-warehousing-park-bilaspur/",
    //         },
    //         { text: "Koka", url: "/warehousing-park-koka/" },
    //         { text: "Luhari", url: "/warehousing-park-luhari-delhi-ncr/" },
    //         { text: "Gurugram", url: "/incity-centers/gurugram/" },
    //       ],
    //     },

    //     {
    //       text: "Goa",
    //       url: "/goa/",
    //       subLinks: [
    //         { text: "Verna", url: "/industrial-and-warehousing-park-verna/" },
    //       ],
    //     },

    //     {
    //       text: "Gujarat",
    //       url: "/gujarat/",
    //       subLinks: [
    //         {
    //           text: "Bhayala",
    //           url: "/industrial-and-warehousing-park-bhayala/",
    //         },
    //       ],
    //     },

    //     {
    //       text: "Karnataka",
    //       url: "/karnataka/",
    //       subLinks: [
    //         {
    //           text: "Dobbaspet I",
    //           url: "/industrial-and-warehousing-park-dobbaspet-i/",
    //         },
    //         {
    //           text: "Dobbaspet II",
    //           url: "/industrial-and-warehousing-park-dobbaspet-ii/",
    //         },
    //         { text: "Malur", url: "/warehousing-park-malur/" },
    //         { text: "Hoskote", url: "/hoskote/" },
    //         { text: "Hosur", url: "/industrial-and-warehousing-park-hosur/" },
    //         { text: "Yeshwantpur", url: "/incity-centers/yeshwantpur/" },
    //       ],
    //     },

    //     {
    //       text: "Maharashtra",
    //       url: "/maharashtra/",
    //       subLinks: [
    //         {
    //           text: "Chakan II",
    //           url: "/industrial-and-warehousing-park-chakan-ii/",
    //         },
    //         {
    //           text: "Chakan V",
    //           url: "/industrial-and-warehousing-park-chakan-v/",
    //         },
    //         { text: "Talegaon", url: "/talegaon/" },
    //         {
    //           text: "Bhiwandi",
    //           url: "/industrial-and-warehousing-park-bhiwandi/",
    //         },
    //         { text: "Nashik", url: "/industrial-and-warehousing-park-nashik/" },
    //         { text: "XSIO Park One", url: "/xsio-park-one/" },
    //         { text: "XSIO Park Three", url: "/xsio-park-three/" },
    //         { text: "XSIO Park Two", url: "/xsio-park-two/" },

    //         { text: "Kurla", url: "/incity-centers/horizon-incity-kurla/" }, // ✅ Added missing
    //         { text: "Pimpri", url: "/incity-centers/horizon-incity-pimpri/" },
    //         { text: "Thane", url: "/incity-centers/thane/" },
    //         { text: "Vardhaman Nagar", url: "/incity-centers/vardhaman-nagar/" },
    //         { text: "Vashi", url: "/incity-centers/vashi/" },
    //       ],
    //     },

    //     {
    //       text: "Tamil Nadu",
    //       url: "/tamil-nadu/",
    //       subLinks: [
    //         {
    //           text: "Chengalpattu",
    //           url: "/industrial-and-warehousing-park-chengalpattu/",
    //         },
    //         {
    //           text: "Redhills-I",
    //           url: "/industrial-and-warehousing-park-redhills-i/",
    //         },
    //         {
    //           text: "Mappedu",
    //           url: "/industrial-and-warehouse-park-mappedu-chennai/",
    //         },
    //         { text: "MWC", url: "/industrial-and-warehouse-park-mwc-chennai/" },
    //         { text: "Oragadam", url: "/oragadam/" },
    //         { text: "Chromepet", url: "/incity-centers/chromepet/" },
    //         { text: "Virugambakkam", url: "/incity-centers/virugambakkam/" },
    //       ],
    //     },

    //     {
    //       text: "Telangana",
    //       url: "/telangana/",
    //       subLinks: [
    //         { text: "Kothur", url: "/industrial-and-warehousing-park-kothur/" },
    //         {
    //           text: "Patancheru",
    //           url: "/industrial-and-warehousing-park-patancheru",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // 🗺 View by States
    {
      text: "View by States",
      subLinks: [
        { text: "Delhi", url: "/delhi/" },
        { text: "Haryana", url: "/haryana/" },
        // { text: "Goa", url: "/goa" },
        { text: "Gujarat", url: "/gujarat/" },
        { text: "Karnataka", url: "/karnataka/" },
        { text: "Maharashtra", url: "/maharashtra/" },
        { text: "Tamil Nadu", url: "/tamil-nadu/" },
        { text: "Telangana", url: "/telangana/" },
      ],
    },
  ],
  Capabilities: [
    {
      text: "Capabilities Overview",
      subLinks: [
        { text: "Overview", url: "/capabilities-overview/" },
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
      subLinks: [
        { text: "Overview", url: "/sector-specialists/" },
        { text: "Automotive & Auto Components", url: "/automotive/" },
        { text: "Logistics & Supply Chain", url: "/logistics/" },
        { text: "Chemicals", url: "/chemical/" },
        { text: "Renewable Energy", url: "/renewable-energy/" },
        { text: "Engineering & Aerospace", url: "/aerospace/" },
        { text: "Packaging", url: "/packaging/" },
        { text: "FMCG & Retail", url: "/fmcg/" },
        { text: "Ecommerce", url: "/ecommerce/" },
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
    { text: "Case Studies & Testimonials", url: "/case-studies/" },
  ],
  "Sustainability & Impact": [
    { text: "Sustainability Overview", url: "/sustainability/" },
    { text: "Environment", url: "/environment/" },
    { text: "Social", url: "/social/" },
    { text: "Governance", url: "/governance/" },
  ],
  "Investor Relations": [
    { text: "Offer Documents", url: "/offer-documents" },
    { text: "Financial Information", url: "/financial-information" },
    { text: "Corporate Governance", url: "/corporate-governance" },
    // { text: "Investor Resources", url: "/investor-resources" },
  ],
  "Explore Horizon": [
    { text: "Know Us", url: "/know-us/" },
    { text: "Culture", url: "/culture/" },
    { text: "Contact Us", url: "/contact/" },
  ],
};
const MobileMenu = ({ topBarHeight = 70 }) => {
  const [menuStack, setMenuStack] = useState([]);
  const [expandedFirstLevel, setExpandedFirstLevel] = useState(null);
  const { isNavOpen, setIsNavOpen } = useNav(); // use global state

  const openSubMenu = (title, links) => {
    setMenuStack((prev) => [...prev, { title, links }]);
  };

  const goBack = () => {
    setMenuStack((prev) => prev.slice(0, -1));
  };

  const handleClose = () => {
    setIsNavOpen(false);
    setMenuStack([]);
    setExpandedFirstLevel(null);
  };

  const renderLinks = (links, indent = false) => {
    const paddingClass = indent
      ? "pl-[7%] text-[18px] pr-[5%] py-1"
      : "px-[5%] border-b text-[18px] border-black/20 py-2";

    return links.map((link, idx) => {
      if (link.subLinks) {
        return (
          <button
            key={idx}
            onClick={() => openSubMenu(link.text, link.subLinks)}
            className={`w-full flex justify-between items-center ${paddingClass} text-left bw-r`}
          >
            {link.text}
            <ChevronRight className="w-6 h-6 text-gray-500" />
          </button>
        );
      }
      return (
        <TransitionLink
          // isNavOpen={isNavOpen}
          // setIsNavOpen={setIsNavOpen}
          key={idx}
          href={link.url}
          className={`block ${paddingClass} w-full text-left hover:bg-gray-100 transition-colors`}
          onClick={handleClose}
        >
          {link.text}
        </TransitionLink>
      );
    });
  };

  const renderTopLevel = () =>
    Object.entries(menuLinks).map(([title, sublinks], idx) => {
      const isExpanded = expandedFirstLevel === title;
      const activeClass = isExpanded ? "text-[#F47920]" : "";
      const iconClass = `${activeClass} transition-colors`;

      return (
        <div className="border-b border-black/20 pb-5" key={idx}>
          <button
            onClick={() =>
              setExpandedFirstLevel((prev) => (prev === title ? null : title))
            }
            className={`w-full flex justify-between items-center px-[5%] pt-5 text-left text-[20px] bw-r ${activeClass}`}
          >
            <span className={activeClass}>{title}</span>
            {isExpanded ? (
              <Minus className={`w-6 h-6 ${iconClass}`} />
            ) : (
              <Plus className={`w-6 h-6 ${iconClass}`} />
            )}
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key={title}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-3">{renderLinks(sublinks, true)}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });

  return (
    <div className="lg:hidden">
      {/* Top Bar */}
      <div
        className="fixed top-0 left-0 w-full lg:z-[1000999999] z-[1099999] flex justify-between items-center px-6 bg-[#2a2a2a]"
        style={{ height: topBarHeight }}
      >
        <div
          // isNavOpen={isNavOpen}
          // setIsNavOpen={setIsNavOpen}

          className="flex items-center h-full"
          onClick={handleClose}
        >
          <div className="w-[220px] flex gap-[14px]">
            <TransitionLink href="/">
              <img
                src="/nav/Horizon_White_mob.svg"
                alt="Hipark Logo White"
                className="max-w-full"
              />
            </TransitionLink>
            <a href="https://www.blackstone.com/" target="_blank">
              <img
                className="max-w-full"
                src={"/nav/blackstone_white.svg"}
                alt="Blackstone Logo"
              />
            </a>
          </div>
        </div>
        <div
          className="flex gap-1 bg-[#2a2a2a] items-center justify-center rounded-[4px] h-10 cursor-pointer"
          onClick={() => (isNavOpen ? handleClose() : setIsNavOpen(true))}
        >
          <span className="text-white uppercase text-[12px]">
            {!isNavOpen && "Menu"}
          </span>
          <div>{isNavOpen ? <CloseMenu /> : <MenuIcon />}</div>
        </div>
      </div>
      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            className="fixed top-0 right-0 w-full h-full bg-white z-[500999999900] overflow-y-auto px-[5%] overflow-x-hidden"
          >
            <AnimatePresence>
              {/* Base menu */}
              <motion.div
                key={0}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full flex flex-col gap-0 pt-0"
                style={{ zIndex: 10 }}
              >
                <div className="w-full flex justify-between py-5 px-[5%]">
                  {/* <img src="/nav/black.svg" className="max-w-2/3" alt="" /> */}

                  <div className="w-[220px] flex gap-[14px]">
                    <TransitionLink href="/">
                      <img
                        src="/nav/Horizon_black.svg"
                        alt="Hipark Logo Black"
                        className="max-w-full"
                      />
                    </TransitionLink>
                    <a href="https://www.blackstone.com/" target="_blank">
                      <img
                        className="max-w-full"
                        src={"/nav/blackstone_black.svg"}
                        alt="Blackstone Logo"
                      />
                    </a>
                  </div>

                  <X onClick={handleClose} />
                </div>
                <div className="flex flex-col">{renderTopLevel()}</div>
              </motion.div>
              {/* Submenus stack */}
              {menuStack.map((menu, idx) => (
                <motion.div
                  key={idx + 1}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
                  className="absolute top-0 left-0 w-full h-full bg-white"
                  style={{ zIndex: 20 + idx }}
                >
                  <div className="w-full items-center py-5 mb-4 bg-gray-300 flex justify-between px-[5%]">
                    <button
                      onClick={goBack}
                      className="flex gap-0 items-center text-[18px] bw-m text-black"
                    >
                      <ChevronLeft size={20} /> <span>Back</span>
                    </button>
                    <X onClick={handleClose} />
                  </div>
                  <div className="flex flex-col gap-1">
                    {renderLinks(menu.links)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MobileMenu;
