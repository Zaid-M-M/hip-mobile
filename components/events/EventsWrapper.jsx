import React from "react";
import EventsHero from "./EventsHero";
import EventsContent from "./EventsContent";
import { ReactLenis } from 'lenis/react';

const EventsWrapper = () => {
  return (
    <div className="w-full h-full bg-white">
      <ReactLenis root>
        <EventsHero />
        <EventsContent />
      </ReactLenis>
    </div>
  );
};

export default EventsWrapper;