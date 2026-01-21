import React from "react";
import CaseStudyDetailHero from "./CaseStudyDetail/CaseStudyDetailHero";
import CaseStudyDetailContent from "./CaseStudyDetail/CaseStudyDetailContent";
import { ReactLenis } from "lenis/react";
import FormSec from "../Factory/Formsec";

const CaseStudyDetailWrapper = ({ data = [], slug }) => {
  return (
    <ReactLenis root>
      <div className="w-full min-h-screen bg-white">
        <CaseStudyDetailHero data={data} slug={slug} />
        <CaseStudyDetailContent data={data} slug={slug} />
        <FormSec />
      </div>
    </ReactLenis>
  );
};

export default CaseStudyDetailWrapper;
