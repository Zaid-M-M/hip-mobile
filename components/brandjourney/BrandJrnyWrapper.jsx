import React from "react";
import Btn from "../global/Btn";
import Socials from "../global/Socials";
import Newsletter from "../home/Newsletter/Newsletter";
import TabbedContentShowcase from "../home/TabbedContentShowcase/TabbedContentShowcase";
import BrandShowcase from "../home/Brands/BrandShowcase";
import TestimonialsSlider from "../home/ClientTestimonials/TestimonialsSlider";
import HeroBanner from "../home/Hero/HeroBanner";
import KeySectors from "../home/keySectors";
import IntegratedSolutionsSection from "../home/IntegratedSolutions/IntegratedSolutionsSection";
import MapWrapper from "../home/Map/MapWrapper";
import BJ_Sec1 from "./BJ_Sec1/BJ_Sec1";
import Mission_value from "./Mission_value/Mission_value";
import Mission_value_Copy from "./Mission_value/Mission_value_Copy";
import Leadership from "./Leadership/Leadership";
import TeamSecF from "../../src/app/(routes)/leadership/Components/TeamSecF";
import Awards from "./Awards/Awards";

import Milestone from "../../src/app/(routes)/know-us-old/_components/Milestone";
import Thriving from "../../src/app/(routes)/know-us-old/_components/Thriving";
import { ReactLenis } from "lenis/react";
const BrandJrnyWrapper = () => {
  return (
    <div className="w-full h-full bg-[#FFFFFF] ">
      <ReactLenis root>
        <BJ_Sec1 />
        <Milestone />
        <Mission_value />

        {/* <Leadership /> */}
        <TeamSecF />
        <Thriving />
        <Awards />
      </ReactLenis>
    </div>
  );
};

export default BrandJrnyWrapper;
