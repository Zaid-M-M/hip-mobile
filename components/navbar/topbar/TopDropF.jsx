"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SearchIcon from "../icons/SearchIcon";
import MenuIcon from "../icons/MenuIcon";
import CloseMenu from "../icons/CloseMenu";
import HoverDrop from "../othertab/HoverDrop";
import TransitionLink from "@/src/app/TransitionLink";
import SearchInput from "./SearchInput";

const TopDropF = ({
  isNavOpen,
  setIsNavOpen,
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const contentRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [subDrop, setSubDrop] = useState(false);
  // Detect screen size on load and resize
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const getTargetHeight = () => {
    if (!isNavOpen) return 0;
    if (openIndex === null) return 150; // default open height
    return isLargeScreen
      ? openIndex === 0
        ? 600
        : openIndex === 1
        ? 530
        : 260
      : openIndex === 0
      ? 600
      : openIndex === 1
      ? 530
      : 220; // Network = 530px, others = 220px
  };
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: getTargetHeight() }}
      transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
      className={`fixed left-0 top-0 w-full z-[9999999] transition-[border-bottom] border-gray-300 overflow-hidden bg-white ${
        isNavOpen
          ? "border-b-[1px] delay-500 duration-200"
          : "border-none duration-500 delay-500"
      }`}
    >
      <div ref={contentRef} className="bg-white">
        {/* Top Bar */}
        <div
          className="flex justify-between items-center px-[max(5%,calc((100vw-1340px)/2))]"
          style={{ height: 80 }}
        >
          {/* Logo */}
          <div
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            className="flex items-center pr-4"
            style={{ width: "60%", height: "100%" }}
            // onClick={setIsNavOpen(!isNavOpen)}
          >
            <div className="w-[323px]  flex gap-[14px]">
              <Link href="/">
                <img
                  className="max-w-full"
                  src={"/nav/Horizon_black.svg"}
                  alt="Hipark Logo"
                />
              </Link>
              <a href="https://www.blackstone.com/" target="_blank">
                <img
                  className="max-w-full"
                  src={"/nav/blackstone_black.svg"}
                  alt="Blackstone Logo"
                />
              </a>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex gap-2 items-center w-[40%] justify-end">
            <SearchInput
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
            />

            {/* Menu Toggle */}
            <motion.div
              initial={{
                width: 92,
                padding: "12px 20px",
              }}
              animate={{
                width: isNavOpen ? 40 : 92,
                padding: isNavOpen ? "0px" : "12px 20px",
              }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              onClick={() => isNavOpen && setIsNavOpen(!isNavOpen)}
              className="flex bg-[#2a2a2a] items-center justify-center rounded-[4px] h-10 cursor-pointer"
            >
              <motion.span
                initial={{ opacity: 1, width: "37px" }}
                animate={{
                  opacity: isNavOpen ? 0 : 1,
                  width: isNavOpen ? 0 : "37px",
                }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                className="text-white font-medium uppercase text-[10px] overflow-hidden"
              >
                Menu
              </motion.span>
              <div className="h-4 flex items-center">
                {isNavOpen ? <CloseMenu isOpen={isNavOpen} /> : <MenuIcon />}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dropdown Nav */}
        <HoverDrop
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          activeLinkIndex={activeLinkIndex}
          openIndex={openIndex}
          setActiveLinkIndex={setActiveLinkIndex}
          setOpenIndex={setOpenIndex}
          setSubDrop={setSubDrop}
        />
      </div>
    </motion.div>
  );
};

export default TopDropF;
