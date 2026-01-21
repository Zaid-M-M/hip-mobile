import React from "react";
import NewsHero from "./NewsHero";
import NewsContent from "./NewsContent";
import { ReactLenis } from 'lenis/react';

const NewsWrapper = () => {
  return (
    <div className="w-full h-full bg-white">
      <ReactLenis root>
        <NewsHero />
        <NewsContent />
      </ReactLenis>
    </div>
  );
};

export default NewsWrapper;