"use client";
import { useState, useEffect } from "react";
import BookSiteForm from "./Book_SiteForm";

const Book_Site_Button = () => {
  const [showForm, setShowForm] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [topPosition, setTopPosition] = useState("60%");

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleButtonClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  // Responsive conditions
  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;
  const fontSize = isMobile
    ? "text-[12px]"
    : isTablet
    ? "text-[12px]"
    : "text-[14px]";

  // Top position logic
  useEffect(() => {
    const updatePosition = () => {
      const width = window.innerWidth;
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`md:fixed top-[auto] bottom-0 md:bottom-auto md:top-[58%] 1440:top-[54%] 1536:top-[55%] 1920:top-[50%] md:right-0 right-auto left-[180px] md:left-auto md:transform md:rotate-180 md:[writing-mode:vertical-rl] 
          bg-black text-white font-barlow font-semibold ${fontSize} tracking-[0.08em] leading-[0px] h-[40px] md:h-[175px]
          uppercase cursor-pointer w-[50%] md:w-[40px] py-[15px] text-center z-40`}
      >
        Book A Site Visit
      </button>

      <BookSiteForm show={showForm} onClose={handleCloseForm} />
    </>
  );
};

export default Book_Site_Button;
