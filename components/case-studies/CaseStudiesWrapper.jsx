import React from "react";
import CaseStudiesHero from "./CaseStudiesHero/CaseStudiesHero";
import CaseStudiesContent from "./CaseStudiesContent/CaseStudiesContent";
import { ReactLenis } from "lenis/react";

const CaseStudiesWrapper = () => {
  return (
    <div className="w-full h-full bg-white overflow-x-hidden">
      {/* <ReactLenis root> */}
      <CaseStudiesHero />
      <CaseStudiesContent />
      {/* </ReactLenis> */}
    </div>
  );
};

export default CaseStudiesWrapper;
