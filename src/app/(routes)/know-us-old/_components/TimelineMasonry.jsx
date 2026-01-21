"use client";
import TimelineCard from "./TimelineCard";

export default function TimelineMasonry({ events }) {
  return (
    <div className="columns-1 md:columns-2 gap-6 space-y-6 max-h-[600px] overflow-y-auto pr-3 styled-scroll">
      {events.map((event) => (
        <TimelineCard key={event.id} event={event} />
      ))}
    </div>
  );
}
