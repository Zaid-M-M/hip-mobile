// "use client";
// import React from "react";
// import TabbedContentShowcase from "./TabbedContentShowcase/TabbedContentShowcase";
// import BrandShowcase from "./Brands/BrandShowcase";
// import KeySectors from "./keySectors";
// import IntegratedSolutionsSection from "./IntegratedSolutions/IntegratedSolutionsSection";
// import MapWrapperOld from "./Map/MapWrapperOld";
// import { ReactLenis, useLenis } from "lenis/react";
// import HeroBannerClient from "./Hero/HeroBannerClient";
// import MobileMapWrapper from "./Map/mobile/MobileMapWrapper";
// import ScrollVideoSection from "./ScrollReveal/ScrollRevealSection";
// import TestScroll from "./ScrollReveal/Testscroll";
// import WhatNew from "./whatNew/page";
// import Sustainaibility from "./Sustainaibility/Sustainaibility";
// import ScrollSection from "./Sustainaibility/ScrollSection";
// import Agile from "./Agile/page";
// import MobileSustainaibility from "./Sustainaibility/mobile/MobileSustainaibility";
// import MobileScrollSection from "./ScrollReveal/MobileScrollSection";
// import Portfolio from "./Portfolio/Portfolio";
// import HomeMapWrapper from "./Map/MapWrapper";
// import Screen from "./Stats/Screen";
// import Screen2 from "./Sustainaibility/Screen2";
// import MobileScreen from "./Stats/MobileScreen";
// import ZoomableSVGMap from "./Map/ZoomableSVGMap";

// import MapWrapper from "./Map/MapWrapper";
// import InCityZoomable from "./Map/InCityZoomable";
// import MapSection from "./Map/MapSection";
// import HomeMobileMapSection from "./Map/HomeMobileMapSection";
// import TestMain from "./testimonials/TestMain";
// // import CardShowcase from "./Hero/CardShowcase";

// const HomeWrapper = ({ heroData, testimonials = [] }) => {
//   useLenis(() => {});

//   return (
//     <ReactLenis
//       root
//       options={{
//         lerp: 0.07,
//         wheelMultiplier: 1.2,
//         smoothWheel: true,
//         smoothTouch: false,
//       }}
//     >
//       <div className="w-full h-full bg-white">
//         <HeroBannerClient heroData={heroData} />
//         <Agile />
//         <Screen />
//         <MobileScreen />
//         <MapSection />
//         <HomeMobileMapSection />
//         {/* <MapWrapper
//           MapComponent={InCityZoomable}
//           title="Incity Centers Finder"
//           subtitle="Grow Your World In Ours"
//           type="incity"
//         /> */}
//         {/* <MapWrapper
//           MapComponent={ZoomableSVGMap}
//           title="Park Finder"
//           subtitle="Grow Your World In Ours"
//           type="industrial"
//         /> */}
//         <IntegratedSolutionsSection />
//         <KeySectors />
//         <TestMain testimonials={testimonials} />
//         <BrandShowcase />
//         <Screen2 />
//         <MobileSustainaibility />
//         <TabbedContentShowcase />
//       </div>
//     </ReactLenis>
//   );
// };

// export default HomeWrapper;
"use client";
import React from "react";
import TabbedContentShowcase from "./TabbedContentShowcase/TabbedContentShowcase";
import BrandShowcase from "./Brands/BrandShowcase";
import KeySectors from "./keySectors";
import IntegratedSolutionsSection from "./IntegratedSolutions/IntegratedSolutionsSection";
import { ReactLenis, useLenis } from "lenis/react";
import HeroBannerClient from "./Hero/HeroBannerClient";
import Agile from "./Agile/page";
import MobileSustainaibility from "./Sustainaibility/mobile/MobileSustainaibility";
import Screen from "./Stats/Screen";
import Screen2 from "./Sustainaibility/Screen2";
import MobileScreen from "./Stats/MobileScreen";
import useIdleRender from "@/hooks/useIdleRender";
import MapSection from "./Map/MapSection";
import HomeMobileMapSection from "./Map/HomeMobileMapSection";
import TestMain from "./testimonials/TestMain";
// import CardShowcase from "./Hero/CardShowcase";

const HomeWrapper = ({ heroData, testimonials = [] }) => {
  useLenis(() => {});

  const normalReady = useIdleRender(); // rest of the page
  const heavyReady = useIdleRender(600); // Screen & Screen2 dead last

  return (
    <ReactLenis root>
      <div className="w-full h-full bg-white">
        {/* :fire: Priority render */}
        <HeroBannerClient heroData={heroData} />
        <Agile />
        {heavyReady && (
          <>
            <Screen />
          </>
        )}
        {/* :bricks: Normal render */}
        {normalReady && (
          <>
            <MobileScreen />
            <MapSection />
            <HomeMobileMapSection />
            <IntegratedSolutionsSection />
            <KeySectors />
            <TestMain testimonials={testimonials} />
            <BrandShowcase />
            <MobileSustainaibility />
          </>
        )}
        {/* :turtle: Heavy components render last */}
        {heavyReady && (
          <>
            <Screen2 />
            {/* <CardShowcase /> */}
          </>
        )}
        {normalReady && <TabbedContentShowcase />}
      </div>
    </ReactLenis>
  );
};

export default HomeWrapper;
