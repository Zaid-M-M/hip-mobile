import React from "react";
import EventDetailHero from "./EventDetailHero";
import EventDetailContent from "./EventDetailContent";
import { ReactLenis } from 'lenis/react';

const EventDetailWrapper = ({ slug }) => {
  return (
    <ReactLenis root>
      <div className="w-full min-h-screen bg-white">
        <EventDetailHero slug={slug} />
        <EventDetailContent slug={slug} />
      </div>
    </ReactLenis>
  );
};

export default EventDetailWrapper;