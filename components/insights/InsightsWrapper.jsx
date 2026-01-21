import React from "react";
import InsightsHero from "./InsightsHero/InsightsHero";
import InsightsContent from "./InsightsContent/InsightsContent";
import { ReactLenis } from "lenis/react";
import InsightsContentF from "./InsightsContent/InsightsContentF";

const InsightsWrapper = () => {
  return (
    <div className="w-full h-full bg-white">
      <ReactLenis root>
        <InsightsHero />
        <InsightsContentF />
      </ReactLenis>
    </div>
  );
};

export default InsightsWrapper;
