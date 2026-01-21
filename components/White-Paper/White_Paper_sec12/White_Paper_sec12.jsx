"use client";
import React, { useState } from "react";

const White_Paper_sec12 = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-[#EBEBEB] py-[45px] lg:py-[100px] relative">
      {/* ---------- HEADER ---------- */}
      <div className="flex justify-between items-center fixup">
        <h2 className="text-black bw-m text-[28px] xl:text-[64px] xl:leading-[74px] tracking-[-0.04em] md:text-[56px]">
          References
        </h2>

        {/* ---------- TOGGLE BUTTON ---------- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[45px] h-[45px] cursor-pointer 1280:w-[80px] 1280:h-[80px] border border-[#BEBEBE] flex items-center justify-center"
        >
          {isOpen ? (
            // Minus icon
            <span className="w-[16px] 1280:w-[22px] h-[2px] bg-black block"></span>
          ) : (
            // Plus icon
            <div className="relative w-[16px] h-[16px] 1280:w-[22px] 1280:h-[22px]">
              <span className="absolute inset-x-0 top-1/2 h-[2px] bg-black"></span>
              <span className="absolute inset-y-0 left-1/2 w-[2px] bg-black"></span>
            </div>
          )}
        </button>
      </div>

      {/* ---------- COLLAPSIBLE BOXES ---------- */}
      <div
        className={`overflow-hidden transition-all fixup duration-500 ease-in-out ${
          isOpen ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-[25px] px-[0px] pt-5 lg:pt-16">
          {/* BOX 1: Market & Returns - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">Market & Returns</h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    IMARC Group - India Reverse Logistics Market (2024-2033):
                  </strong>
                  <br />
                  <a
                    href="https://www.imarcgroup.com/india-reverse-logistics-market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.imarcgroup.com/india-reverse-logistics-market
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Market reached USD 33.2B in 2024, projected to USD 57.54B by
                    2033 (CAGR 6.3%). Driven by e-commerce growth,
                    sustainability focus.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Grand View Research - India Reverse Logistics Market
                    (2024-2033):
                  </strong>
                  <br />
                  <a
                    href="https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Revenue USD 90.7B in 2024, to USD 387.3B by 2033 (CAGR
                    18.7%). B2B returns largest segment (38.43% share).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Return Prime (via ET/IndiaRetailing) - India return rates
                    (2024):
                  </strong>
                  <br />
                  <a
                    href="https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/more-than-a-third-of-fashion-and-footwear-products-get-returned-in-online-shopping-report/articleshow/112142214.cms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://economictimes.indiatimes.com/.../articleshow/112142214.cms
                  </a>{" "}
                  ;
                  <a
                    href="https://www.indiaretailing.com/2024/08/18/brands-could-lose-20-30-billion-in-revenue-to-returns-by-2025-report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.indiaretailing.com/2024/08/18/...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    30-35% returns in fashion/footwear; overall ecommerce 17.6%.
                    Brands risk $20-30B loss by 2025. 84% loyalty with easy
                    returns.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    ShipNotes 2025 - COD vs prepaid RTO (26% vs 2%):
                  </strong>
                  <br />
                  <a
                    href="https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/
                  </a>{" "}
                  ;
                  <a
                    href="https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor-to-return-to-origin-in-e-commerce-report"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    26% RTO for COD vs &lt;2% prepaid. COD biggest RTO driver;
                    rates rise with delivery delays (up to 35% &gt;5 days).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Redseer - India’s Festive Ecommerce Market 2024 (GMV
                    ~US$14B, +12% YoY):
                  </strong>
                  <br />
                  <a
                    href="https://redseer.com/reports/indias-festive-e-commerce-market-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://redseer.com/reports/indias-festive-e-commerce-market-2024/
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    GMV $14B, +12% YoY. Tier 2+ cities +13% growth; fashion
                    sales tripled, premiumization in electronics.
                  </p> */}
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>

          {/* BOX 2: Compliance & Waste - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">
                Compliance & waste
              </h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    PIB/CPCB - Electronic Waste Management (FY24-FY25 tonnage):
                  </strong>
                  <br />
                  <a
                    href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2155124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2155124
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Market reached USD 33.2B in 2024, projected to USD 57.54B by
                    2033 (CAGR 6.3%). Driven by e-commerce growth,
                    sustainability focus.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    CPCB - FAQ under EWaste (Management) Rules, 2022 (Jan 23,
                    2024):
                  </strong>
                  <br />
                  <a
                    href="https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Revenue USD 90.7B in 2024, to USD 387.3B by 2033 (CAGR
                    18.7%). B2B returns largest segment (38.43% share).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Return Prime (via ET/IndiaRetailing) - India return rates
                    (2024):
                  </strong>
                  <br />
                  <a
                    href="https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/more-than-a-third-of-fashion-and-footwear-products-get-returned-in-online-shopping-report/articleshow/112142214.cms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://economictimes.indiatimes.com/.../articleshow/112142214.cms
                  </a>{" "}
                  ;
                  <a
                    href="https://www.indiaretailing.com/2024/08/18/brands-could-lose-20-30-billion-in-revenue-to-returns-by-2025-report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.indiaretailing.com/2024/08/18/...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    30-35% returns in fashion/footwear; overall ecommerce 17.6%.
                    Brands risk $20-30B loss by 2025. 84% loyalty with easy
                    returns.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    ShipNotes 2025 - COD vs prepaid RTO (26% vs 2%):
                  </strong>
                  <br />
                  <a
                    href="https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/
                  </a>{" "}
                  ;
                  <a
                    href="https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor-to-return-to-origin-in-e-commerce-report"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    26% RTO for COD vs &lt;2% prepaid. COD biggest RTO driver;
                    rates rise with delivery delays (up to 35% &gt;5 days).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Redseer - India’s Festive Ecommerce Market 2024 (GMV
                    ~US$14B, +12% YoY):
                  </strong>
                  <br />
                  <a
                    href="https://redseer.com/reports/indias-festive-e-commerce-market-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://redseer.com/reports/indias-festive-e-commerce-market-2024/
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    GMV $14B, +12% YoY. Tier 2+ cities +13% growth; fashion
                    sales tripled, premiumization in electronics.
                  </p> */}
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>

          {/* BOX 3 - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">Market & Returns</h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    IMARC Group - India Reverse Logistics Market (2024-2033):
                  </strong>
                  <br />
                  <a
                    href="https://www.imarcgroup.com/india-reverse-logistics-market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.imarcgroup.com/india-reverse-logistics-market
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Market reached USD 33.2B in 2024, projected to USD 57.54B by
                    2033 (CAGR 6.3%). Driven by e-commerce growth,
                    sustainability focus.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Grand View Research - India Reverse Logistics Market
                    (2024-2033):
                  </strong>
                  <br />
                  <a
                    href="https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Revenue USD 90.7B in 2024, to USD 387.3B by 2033 (CAGR
                    18.7%). B2B returns largest segment (38.43% share).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Return Prime (via ET/IndiaRetailing) - India return rates
                    (2024):
                  </strong>
                  <br />
                  <a
                    href="https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/more-than-a-third-of-fashion-and-footwear-products-get-returned-in-online-shopping-report/articleshow/112142214.cms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://economictimes.indiatimes.com/.../articleshow/112142214.cms
                  </a>{" "}
                  ;
                  <a
                    href="https://www.indiaretailing.com/2024/08/18/brands-could-lose-20-30-billion-in-revenue-to-returns-by-2025-report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.indiaretailing.com/2024/08/18/...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    30-35% returns in fashion/footwear; overall ecommerce 17.6%.
                    Brands risk $20-30B loss by 2025. 84% loyalty with easy
                    returns.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    ShipNotes 2025 - COD vs prepaid RTO (26% vs 2%):
                  </strong>
                  <br />
                  <a
                    href="https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/
                  </a>{" "}
                  ;
                  <a
                    href="https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor-to-return-to-origin-in-e-commerce-report"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    26% RTO for COD vs &lt;2% prepaid. COD biggest RTO driver;
                    rates rise with delivery delays (up to 35% &gt;5 days).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Redseer - India’s Festive Ecommerce Market 2024 (GMV
                    ~US$14B, +12% YoY):
                  </strong>
                  <br />
                  <a
                    href="https://redseer.com/reports/indias-festive-e-commerce-market-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://redseer.com/reports/indias-festive-e-commerce-market-2024/
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    GMV $14B, +12% YoY. Tier 2+ cities +13% growth; fashion
                    sales tripled, premiumization in electronics.
                  </p> */}
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>

          {/* BOX 4 - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">Market & Returns</h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    IMARC Group - India Reverse Logistics Market (2024-2033):
                  </strong>
                  <br />
                  <a
                    href="https://www.imarcgroup.com/india-reverse-logistics-market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.imarcgroup.com/india-reverse-logistics-market
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Market reached USD 33.2B in 2024, projected to USD 57.54B by
                    2033 (CAGR 6.3%). Driven by e-commerce growth,
                    sustainability focus.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Grand View Research - India Reverse Logistics Market
                    (2024-2033):
                  </strong>
                  <br />
                  <a
                    href="https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Revenue USD 90.7B in 2024, to USD 387.3B by 2033 (CAGR
                    18.7%). B2B returns largest segment (38.43% share).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Return Prime (via ET/IndiaRetailing) - India return rates
                    (2024):
                  </strong>
                  <br />
                  <a
                    href="https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/more-than-a-third-of-fashion-and-footwear-products-get-returned-in-online-shopping-report/articleshow/112142214.cms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://economictimes.indiatimes.com/.../articleshow/112142214.cms
                  </a>{" "}
                  ;
                  <a
                    href="https://www.indiaretailing.com/2024/08/18/brands-could-lose-20-30-billion-in-revenue-to-returns-by-2025-report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.indiaretailing.com/2024/08/18/...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    30-35% returns in fashion/footwear; overall ecommerce 17.6%.
                    Brands risk $20-30B loss by 2025. 84% loyalty with easy
                    returns.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    ShipNotes 2025 - COD vs prepaid RTO (26% vs 2%):
                  </strong>
                  <br />
                  <a
                    href="https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/
                  </a>{" "}
                  ;
                  <a
                    href="https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor-to-return-to-origin-in-e-commerce-report"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    26% RTO for COD vs &lt;2% prepaid. COD biggest RTO driver;
                    rates rise with delivery delays (up to 35% &gt;5 days).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Redseer - India’s Festive Ecommerce Market 2024 (GMV
                    ~US$14B, +12% YoY):
                  </strong>
                  <br />
                  <a
                    href="https://redseer.com/reports/indias-festive-e-commerce-market-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://redseer.com/reports/indias-festive-e-commerce-market-2024/
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    GMV $14B, +12% YoY. Tier 2+ cities +13% growth; fashion
                    sales tripled, premiumization in electronics.
                  </p> */}
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>

          {/* BOX 5: Corporate Responsibility - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">Market & Returns</h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    IMARC Group - India Reverse Logistics Market (2024-2033):
                  </strong>
                  <br />
                  <a
                    href="https://www.imarcgroup.com/india-reverse-logistics-market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.imarcgroup.com/india-reverse-logistics-market
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Market reached USD 33.2B in 2024, projected to USD 57.54B by
                    2033 (CAGR 6.3%). Driven by e-commerce growth,
                    sustainability focus.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Grand View Research - India Reverse Logistics Market
                    (2024-2033):
                  </strong>
                  <br />
                  <a
                    href="https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    Revenue USD 90.7B in 2024, to USD 387.3B by 2033 (CAGR
                    18.7%). B2B returns largest segment (38.43% share).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Return Prime (via ET/IndiaRetailing) - India return rates
                    (2024):
                  </strong>
                  <br />
                  <a
                    href="https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/more-than-a-third-of-fashion-and-footwear-products-get-returned-in-online-shopping-report/articleshow/112142214.cms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://economictimes.indiatimes.com/.../articleshow/112142214.cms
                  </a>{" "}
                  ;
                  <a
                    href="https://www.indiaretailing.com/2024/08/18/brands-could-lose-20-30-billion-in-revenue-to-returns-by-2025-report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.indiaretailing.com/2024/08/18/...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    30-35% returns in fashion/footwear; overall ecommerce 17.6%.
                    Brands risk $20-30B loss by 2025. 84% loyalty with easy
                    returns.
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    ShipNotes 2025 - COD vs prepaid RTO (26% vs 2%):
                  </strong>
                  <br />
                  <a
                    href="https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/
                  </a>{" "}
                  ;
                  <a
                    href="https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor-to-return-to-origin-in-e-commerce-report"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor...
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    26% RTO for COD vs &lt;2% prepaid. COD biggest RTO driver;
                    rates rise with delivery delays (up to 35% &gt;5 days).
                  </p> */}
                </div>
                <div className="mb-2">
                  <strong>
                    Redseer - India’s Festive Ecommerce Market 2024 (GMV
                    ~US$14B, +12% YoY):
                  </strong>
                  <br />
                  <a
                    href="https://redseer.com/reports/indias-festive-e-commerce-market-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://redseer.com/reports/indias-festive-e-commerce-market-2024/
                  </a>
                  {/* <p className="text-sm mt-1 text-gray-600">
                    GMV $14B, +12% YoY. Tier 2+ cities +13% growth; fashion
                    sales tripled, premiumization in electronics.
                  </p> */}
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default White_Paper_sec12;
