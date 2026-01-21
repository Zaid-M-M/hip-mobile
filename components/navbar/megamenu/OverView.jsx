"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransitionLink from "@/src/app/TransitionLink";

const OverView = ({ setIsNavOpen, isNavOpen }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full h-fit overflow-hidden pt-5 1440:w-[1340px] 1440:mx-auto 1440:pr-0 pr-[max(5%,calc((100vw-1340px)/2))]">
      {/* Left gradient + image */}
      <div
        className="w-[30%] flex flex-col gap-[29px] p-10 min-h-screen"
        style={{
          background:
            "linear-gradient(-245deg, #8F53A1 19.06%, #F47922 105.78%)",
        }}
      >
        <img
          src="/network_overview_menu.webp"
          alt="Park Overview"
          className="w-[325px] h-[200px] object-cover"
        />
        <div className="relative z-10 flex items-center w-full justify-between cursor-pointer">
          <TransitionLink
            href="/network-overview/"
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            className="text-white text-[28px] font-medium underline"
          >
            Network Overview
          </TransitionLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M13.3281 36.666L36.6615 13.3326"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3281 13.3326H36.6615V36.666"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Right tabs section */}
      <div className="flex-1 bg-white pl-6 2xl:pl-12 pb-12 flex flex-col">
        {/* Tabs header */}
        <div className="flex w-full mb-4 gap-[30px]">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-4 py-2 flex-1 border-b cursor-pointer text-left transition-all duration-500 border-gray-300 font-medium text-[16px] ${
              activeTab === 0
                ? "border-orange-500 bg-[rgba(0,0,0,0.02)] text-black"
                : "text-gray-500"
            }`}
          >
            Industrial & Logistics Parks
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 flex-1 border-b cursor-pointer text-left transition-all duration-500 border-gray-300 font-medium text-[16px] ${
              activeTab === 1
                ? "border-orange-500 bg-[rgba(0,0,0,0.02)] text-black"
                : "text-gray-500"
            }`}
          >
            InCity Centers
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 flex-1 border-b cursor-pointer text-left transition-all duration-500 border-gray-300 font-medium text-[16px] ${
              activeTab === 2
                ? "border-orange-500 bg-[rgba(0,0,0,0.02)] text-black"
                : "text-gray-500"
            }`}
          >
            View by States
          </button>
        </div>

        {/* Tab content */}
        <div className="flex gap-6 relative flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* ──────────────────────── TAB 0 ──────────────────────── */}
              {activeTab === 0 && (
                <div className="flex flex-col gap-5 w-full">
                  <div
                    className="w-full"
                    style={{ columnCount: 5, columnGap: "2.5rem" }}
                  >
                    {/* Delhi NCR */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Delhi NCR
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-bilaspur/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Bilaspur
                          </TransitionLink>
                        </li>
                        {/* <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/warehousing-park-delhi-i/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Delhi I
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/warehousing-park-delhi-ii"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Delhi II
                          </TransitionLink>
                        </li> */}
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/warehousing-park-farukhnagar-i/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Farukhnagar I
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/warehousing-park-farukhnagar-ii/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Farukhnagar II
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/warehousing-park-koka/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Koka
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/warehousing-park-luhari-delhi-ncr/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Luhari
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Ahmedabad */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Ahmedabad
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-bhayala/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Bhayala
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Pune */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Pune
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-chakan-ii/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Chakan II
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-chakan-v/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Chakan V
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/talegaon/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Talegaon
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Mumbai */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Mumbai
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/bhiwandi/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Bhiwandi
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Nashik */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Nashik
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/nashik/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Nashik
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Nagpur */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Nagpur
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/xsio-park-one/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            XSIO Park One
                          </TransitionLink>
                        </li>

                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/xsio-park-two/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            XSIO Park Two
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/xsio-park-three/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            XSIO Park Three
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/xsio-park-one-north/"
                            className="text-left hover:text-[#F47922] transition-colors duration-200"
                          >
                            XSIO Park One North
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Goa */}
                    {/* <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Goa
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-verna"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Verna
                          </TransitionLink>
                        </li>
                      </ul>
                    </div> */}

                    {/* Chennai */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Chennai
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-chengalpattu/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Chengalpattu
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehouse-park-mappedu-chennai/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Mappedu
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehouse-park-mwc-chennai/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            MWC
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/oragadam/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Oragadam
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/oragadam-ii/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Oragadam II
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-redhills-i/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Redhills-I
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-hosur/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Hosur
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Hyderabad */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Hyderabad
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-kothur/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Kothur
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-patancheru"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Patancheru
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Bengaluru */}
                    <div className="break-inside-avoid mb-6 inline-block w-full align-top">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Bengaluru
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-dobbaspet-i/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Dobbaspet I
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-dobbaspet-ii/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Dobbaspet II
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/hoskote/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Hoskote
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/warehousing-park-malur/"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Malur
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-[42px] flex w-full justify-end mt-[-20px]">
                    <TransitionLink
                      isNavOpen={isNavOpen}
                      setIsNavOpen={setIsNavOpen}
                      href="/industrial-logistics-parks/"
                      className="text-black border flex items-center gap-3 px-4 py-2 bg-white !capitalize text-[16px]"
                    >
                      <span className="text-[16px]">
                        Industrial & Logistics Parks
                      </span>
                      <img
                        className="h-3.5 w-3.5"
                        src="/value_added_services/link.svg"
                        alt=""
                      />
                    </TransitionLink>
                  </div>
                </div>
              )}

              {/* ──────────────────────── TAB 1 ──────────────────────── */}
              {activeTab === 1 && (
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex gap-6 w-full flex-wrap">
                    {/* Delhi NCR */}
                    <div className="flex-1">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Delhi NCR
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/gurugram/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Gurugram
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/kirti-nagar/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Kirti Nagar
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/narela/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Narela
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/okhla-1/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Okhla I
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/okhla-2/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Okhla II
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/rp-bagh/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            RP Bagh
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/sahibabad-2/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Sahibabad II
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Mumbai */}
                    <div className="flex flex-1 flex-col gap-6">
                      <div className="">
                        <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                          Mumbai
                        </h4>
                        <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                          {/* <li>
                            <TransitionLink
                              isNavOpen={isNavOpen}
                              setIsNavOpen={setIsNavOpen}
                              href="/incity-centers/horizon-incity-kurla"
                              className="hover:text-[#F47922] transition-colors duration-200"
                            >
                              Kurla
                            </TransitionLink>
                          </li> */}
                          <li>
                            <TransitionLink
                              isNavOpen={isNavOpen}
                              setIsNavOpen={setIsNavOpen}
                              href="/incity-centers/vashi/"
                              className="hover:text-[#F47922] transition-colors duration-200"
                            >
                              Vashi
                            </TransitionLink>
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-black underline font-semibold text-[14px]">
                          Thane
                        </h4>
                        <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                          <li>
                            <TransitionLink
                              isNavOpen={isNavOpen}
                              setIsNavOpen={setIsNavOpen}
                              href="/incity-centers/thane/"
                              className="hover:text-[#F47922] transition-colors duration-200"
                            >
                              Thane
                            </TransitionLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Nagpur */}
                    <div className="flex-1">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Nagpur
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/vardhaman-nagar/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Vardhaman Nagar
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Pune */}
                    <div className="flex-1">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Pune
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/horizon-incity-pimpri/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Pimpri
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Chennai */}
                    <div className="flex-1">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Chennai
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/chromepet/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Chromepet
                          </TransitionLink>
                        </li>
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/virugambakkam/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Virugambakkam
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>

                    {/* Bengaluru */}
                    <div className="flex-1">
                      <h4 className="text-black underline font-semibold mb-2 text-[14px]">
                        Bengaluru
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/yeshwantpur/"
                            className="hover:text-[#F47922] transition-colors duration-200"
                          >
                            Yeshwantpur
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-[42px] flex w-full justify-end mt-[-20px]">
                    <TransitionLink
                      isNavOpen={isNavOpen}
                      setIsNavOpen={setIsNavOpen}
                      href="/incity-centers/"
                      className="text-black border flex items-center gap-3 px-4 py-2 bg-white !capitalize text-[16px]"
                    >
                      <span className="text-[16px]">InCity Centers</span>
                      <img
                        className="h-3.5 w-3.5"
                        src="/value_added_services/link.svg"
                        alt=""
                      />
                    </TransitionLink>
                  </div>
                </div>
              )}

              {/* ──────────────────────── TAB 2 ──────────────────────── */}
              {activeTab === 2 && (
                <div className="flex w-full justify-between h-fit flex-wrap gap-4">
                  {/* Delhi */}
                  <div className="text-black h-fit text-[14px] bw-m p-2">
                    <h4 className="mb-1">
                      <TransitionLink
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        href="/delhi"
                        className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
                      >
                        Delhi
                      </TransitionLink>
                    </h4>
                    <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
                      {/* <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/warehousing-park-delhi-i/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Delhi I
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/warehousing-park-delhi-ii/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Delhi II
                        </TransitionLink>
                      </li> */}
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/kirti-nagar/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Kirti Nagar
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/narela/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Narela
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/okhla-1/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Okhla I
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/okhla-2/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Okhla II
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/rp-bagh/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          RP Bagh
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/sahibabad-2/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Sahibabad II
                        </TransitionLink>
                      </li>
                    </ul>
                  </div>

                  {/* Haryana */}
                  <div className="text-black h-fit text-[14px] bw-m p-2">
                    <h4 className="mb-1">
                      <TransitionLink
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        href="/haryana/"
                        className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
                      >
                        Haryana
                      </TransitionLink>
                    </h4>
                    <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-bilaspur/"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Bilaspur
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/warehousing-park-farukhnagar-i"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Farukhnagar I
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/warehousing-park-farukhnagar-ii"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Farukhnagar II
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/Gurugram"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Gurugram
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/warehousing-park-koka"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Koka
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/warehousing-park-luhari-delhi-ncr"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Luhari
                        </TransitionLink>
                      </li>
                    </ul>
                  </div>

                  {/* GOA AND GUJARAT */}
                  <div className="flex h-fit flex-col gap-4">
                    {/* Goa */}
                    {/* <div className="text-black h-fit text-[14px] bw-m p-2">
                      <h4 className="mb-1">
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/goa"
                          className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
                        >
                          Goa
                        </TransitionLink>
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/incity-centers/verna"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Verna
                          </TransitionLink>
                        </li>
                      </ul>
                    </div> */}

                    {/* Gujarat */}
                    <div className="text-black h-fit text-[14px] bw-m p-2">
                      <h4 className="mb-1">
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/gujarat"
                          className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
                        >
                          Gujarat
                        </TransitionLink>
                      </h4>
                      <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
                        <li>
                          <TransitionLink
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            href="/industrial-and-warehousing-park-bhayala"
                            className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                          >
                            Bhayala
                          </TransitionLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Maharashtra */}
                  <div className="text-black h-fit text-[14px] bw-m p-2">
                    <h4 className="mb-1">
                      <TransitionLink
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        href="/maharashtra"
                        className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
                      >
                        Maharashtra
                      </TransitionLink>
                    </h4>
                    <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/bhiwandi"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Bhiwandi
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-chakan-ii"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Chakan II
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-chakan-v"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Chakan V
                        </TransitionLink>
                      </li>
                      {/* <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/horizon-incity-kurla"
                          className="hover:text-[#F47922] transition-colors duration-200"
                        >
                          Kurla
                        </TransitionLink>
                      </li> */}
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/nashik"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Nashik
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/horizon-incity-pimpri"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Pimpri
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/talegaon"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Talegaon
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/thane"
                          className="hover:text-[#F47922] transition-colors duration-200"
                        >
                          Thane
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/vardhaman-nagar"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Vardhaman Nagar
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/vashi"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Vashi
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/xsio-park-one"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          XSIO Park One
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/xsio-park-two"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          XSIO Park Two
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/xsio-park-three"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          XSIO Park Three
                        </TransitionLink>
                      </li>
                    </ul>
                  </div>

                  {/* Karnataka */}
                  <div className="text-black h-fit text-[14px] bw-m p-2">
                    <h4 className="mb-1">
                      <TransitionLink
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        href="/karnataka"
                        className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
                      >
                        Karnataka
                      </TransitionLink>
                    </h4>
                    <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-dobbaspet-i"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Dobbaspet I
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-dobbaspet-ii"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Dobbaspet II
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/hoskote"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Hoskote
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/warehousing-park-malur"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Malur
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/yeshwantpur"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Yeshwantpur
                        </TransitionLink>
                      </li>
                    </ul>
                  </div>

                  {/* Tamil Nadu */}
                  <div className="text-black h-fit text-[14px] bw-m p-2">
                    <h4 className="mb-1">
                      <TransitionLink
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        href="/tamil-nadu"
                        className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
                      >
                        Tamil Nadu
                      </TransitionLink>
                    </h4>
                    <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-chengalpattu"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Chengalpattu
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/chromepet"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Chromepet
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehouse-park-mappedu-chennai"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Mappedu
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehouse-park-mwc-chennai"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          MWC
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="#"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Oragadam
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-redhills-i"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Redhills-I
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-hosur"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Hosur
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/incity-centers/virugambakkam"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Virugambakkam
                        </TransitionLink>
                      </li>
                    </ul>
                  </div>

                  {/* Telangana */}
                  <div className="text-black h-fit text-[14px] bw-m p-2">
                    <h4 className="mb-1">
                      <TransitionLink
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        href="/telangana"
                        className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
                      >
                        Telangana
                      </TransitionLink>
                    </h4>
                    <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-kothur"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Kothur
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          isNavOpen={isNavOpen}
                          setIsNavOpen={setIsNavOpen}
                          href="/industrial-and-warehousing-park-patancheru"
                          className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
                        >
                          Patancheru
                        </TransitionLink>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OverView;
