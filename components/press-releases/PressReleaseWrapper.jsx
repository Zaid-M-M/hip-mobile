import React from "react";
import PressReleaseHero from "./PressReleaseHero";
import PressReleaseContent from "./PressReleaseContent";
import { ReactLenis } from 'lenis/react';

const PressReleaseWrapper = () => {
  return (
    <div className="w-full h-full bg-white">
      <ReactLenis root>
        <PressReleaseHero />
        <PressReleaseContent />
      </ReactLenis>
    </div>
  );
};

export default PressReleaseWrapper;