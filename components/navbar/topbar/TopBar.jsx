"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { useNav } from "@/app/context/NavContext";
import HiparkLogo from "../icons/HiparkLogo";
import SearchIcon from "../icons/SearchIcon";
import MenuIcon from "../icons/MenuIcon";
import CloseMenu from "../icons/CloseMenu";
import { useNav } from "@/src/app/context/NavContext";

const NavTab = () => (
  <div className="w-full flex flex-col bg-gray-100">
    <div className="w-full p-5 bg-blue-600 text-white">
      <h3 className="text-xl">Navigation Tabs</h3>
    </div>
    <ul className="flex flex-col gap-4 py-4">
      <li>
        <Link href="/" className="text-blue-600">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about/" className="text-blue-600">
          About
        </Link>
      </li>
      <li>
        <Link href="/services/" className="text-blue-600">
          Services
        </Link>
      </li>
      <li>
        <Link href="/contact/" className="text-blue-600">
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

const Navlist = () => (
  <div className="w-full flex flex-col bg-gray-200">
    <div className="p-5 bg-green-600 text-white">
      <h3 className="text-xl">Additional Links</h3>
    </div>
    <ul className="flex flex-col gap-4 py-4">
      <li>
        <Link href="/blog" className="text-green-600">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/faq" className="text-green-600">
          FAQ
        </Link>
      </li>
      <li>
        <Link href="/terms" className="text-green-600">
          Terms
        </Link>
      </li>
      <li>
        <Link href="/privacy" className="text-green-600">
          Privacy Policy
        </Link>
      </li>
    </ul>
  </div>
);

export default function TopBar({ onClose }) {
  const { isNavOpen, setIsNavOpen } = useNav();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const topBarHeight = 80;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-[10000000] bg-white flex justify-between items-center px-[max(5%,calc((100vw-1340px)/2))]"
        style={{ height: topBarHeight }}
      >
        <Link
          onClick={onClose}
          href="/"
          className="flex items-center pr-4"
          style={{ width: "60%", height: "100%" }}
        >
          <div className="w-[323px]">
            <HiparkLogo fillColor="black" />
          </div>
        </Link>
        <div className="flex gap-[10px] min-1440:gap-[55px] items-center py-[20px] flex-[0.4] w-[40%] justify-end">
          <div className="flex items-center gap-[10px]">
            <motion.div
              className="flex items-center justify-start h-10 bg-white border-2 border-[#292D32] rounded-[5px] overflow-hidden"
              initial={{ width: 45 }}
              animate={{ width: isSearchOpen ? 200 : 45 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
            >
              <div
                className="p-[11px] aspect-square flex items-center justify-center cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <div className="h-[18px] w-[18px] aspect-square">
                  <SearchIcon />
                </div>
              </div>
              {isSearchOpen && (
                <motion.input
                  type="text"
                  placeholder="Search..."
                  className="p-2 text-sm outline-none"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                />
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{
              width: 92,
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            animate={{
              width: isNavOpen ? 40 : 92,
              paddingLeft: isNavOpen ? "0px" : "20px",
              paddingRight: isNavOpen ? "0px" : "20px",
              paddingTop: isNavOpen ? "0px" : "12px",
              paddingBottom: isNavOpen ? "0px" : "12px",
            }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
            onClick={() => isNavOpen && setIsNavOpen(!isNavOpen)}
            // className="flex gap-2 bg-black px-5 py-3 items-center justify-center rounded-[4px] h-10 cursor-pointer"
            className="flex bg-[#2a2a2a] px-5 py-3 gap-0 items-center justify-center rounded-[4px] h-10 cursor-pointer"
          >
            <motion.span
              initial={{ opacity: 1, width: "37px" }}
              animate={{
                opacity: isNavOpen ? 0 : 1,
                width: isNavOpen ? 0 : "37px",
              }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              className="text-white bw-m uppercase flex justify-start text-[10px] overflow-hidden"
            >
              Menu
            </motion.span>
            <div className="max-w-4 min-w-4 h-4 cursor-pointer flex items-center">
              {isNavOpen ? (
                <CloseMenu isOpen={isNavOpen} />
              ) : (
                <MenuIcon isOpen={isNavOpen} />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isNavOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
        className="fixed left-0 w-full z-[9999999] bg-white overflow-hidden"
        style={{
          top: topBarHeight,
          height: "fit-content",
          maxHeight: "fit-content",
        }}
      >
        <div className="flex flex-col lg:flex-row w-full h-fit">
          <NavTab />
          <Navlist />
        </div>
      </motion.div>
    </>
  );
}
