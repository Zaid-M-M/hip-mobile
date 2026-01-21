"use client";
import { useState, useEffect } from "react";
import EnquiryForm from "./EnquiryForm";

const EnquiryButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleButtonClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;

  const fontSize = isMobile
    ? "text-[12px]"
    : isTablet
    ? "text-[12px]"
    : "text-[14px]";

  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`md:fixed left-0 md:left-auto right-auto md:right-0 md:bottom-auto bottom-0 top-[auto] md:top-[36%] xl:top-[33%]
          md:rotate-180 md:[writing-mode:vertical-rl]
          bg-[#888b8f] text-white font-barlow font-semibold 
          ${fontSize} tracking-[0.08em] uppercase 
          cursor-pointer h-[40px] md:h-[130px] leading-[0px] w-[50%] md:w-[40px] py-[15px] 
          text-center z-[50]
        `}
        // Tailwind doesn’t yet support writing-mode
      >
        Enquire Now
      </button>

      <EnquiryForm show={showForm} onClose={handleCloseForm} />
    </>
  );
};

export default EnquiryButton;
