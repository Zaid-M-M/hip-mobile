"use client";
import React, { useState } from "react";
import HoverCard from "./HoverCard";

const EnvironmentM = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      title: "Smart, Low-Impact Construction",
      description:
        "We adopt pre-engineered buildings (PEBs) and high-quality steel structures across our parks to accelerate construction timelines, minimise material waste, and reduce embodied carbon. These choices aren’t just efficient—they’re resilient, reusable, and better for the planet.",
      image: "/environment/s1.png",
      large: true,
      keypoints: [
        "Regular reviews via operational audits to maintain global standards.",
        "Meet regulatory requirements in our facilities.",
        "Ensure transparency across reporting mechanisms.",
      ],
    },
    {
      title: "Renewable Energy and Carbon Reduction",
      image: "/environment/s2.png",
      description:
        "With over 20 MW of rooftop solar installed and counting, we’re offsetting over ~21,000 tonnes of CO₂ emissions every year. From LED retrofits to smarter energy monitoring, we’re improving efficiency across our parks and moving steadily toward our long-term (2050) operational net-zero pathway. In parallel, we’re building a clearer baseline for tracking and reducing construction-related emissions.",
      keypoints: [
        "Increased solar energy adoption across facilities.",
        "Carbon offset programs implemented across operations.",
        "Energy-efficient infrastructure upgrades ongoing.",
      ],
    },
    {
      title: "Water Stewardship",
      image: "/environment/s3.png",
      description:
        "Every drop counts. We treat 100% of greywater on-site, harvest rain through more than 200 recharge pits, and use low-flow fixtures to reduce freshwater consumption. Advanced metering helps us track water usage and close the loop.",
      keypoints: [
        "Rainwater harvesting systems in place.",
        "Water recycling in key facilities.",
        "Monitoring water usage with IoT tech.",
      ],
    },
    {
      title: "Circularity and Waste",
      image: "/environment/s4.png",
      description:
        "From reusing fly-ash in concrete to composting landscaping waste, our parks are built with a circular mindset.",
      keypoints: [
        "Recycling bins installed across campuses.",
        "Waste segregation at source implemented.",
        "E-waste responsibly disposed and tracked.",
      ],
    },
    {
      title: "Biodiversity and Green Cover",
      image: "/environment/s5.png",
      description:
        "We integrate urban forests, butterfly gardens, and native plants in landscape pockets to restore ecosystems and enhance site liveability. Our green areas accounts for 15% tree cover across parks—naturally cooling micro-climate and promoting biodiversity.",
      keypoints: [
        "Native species plantation initiatives.",
        "Green rooftops and vertical gardens.",
        "Biodiversity assessments conducted yearly.",
      ],
    },
    {
      title: "Awareness and Engagement",
      image: "/environment/s6.png",
      description:
        "Sustainability isn’t static. From Earth Day drives to recycling initiatives and tree-planting activities, we host regular environment-focused programs with our tenants and employees, fostering awareness, collective action, and shared responsibility",
      keypoints: [
        "Regular workshops and green campaigns.",
        "Employee engagement in sustainability drives.",
        "Digital dashboards to track green metrics.",
      ],
    },
  ];

  return (
    <div className="relative min-h-[100vh] bg-black overflow-hidden">
      {/* Background corner SVGs */}
      <div>
        <div className="absolute -top-56 -right-96 768:-right-72 1280:right-0 sm:top-0">
          <img src="/environment/topright.svg" alt="" />
        </div>
        <div className="absolute -top-56 -left-96 768:-left-56 1280:left-0">
          <img src="/environment/topleft.svg" alt="" />
        </div>
        <div className="absolute -left-96 768:-left-80 1280:-left-32 1366:left-0 bottom-0">
          <img src="/environment/bottomleft.svg" alt="" />
        </div>
        <div className="absolute -right-[420px] 768:-right-80 1280:-right-36 1366:right-0 sm:bottom-0">
          <img src="/environment/bottomright.svg" alt="" />
        </div>
      </div>

      <div className="fixup py-[45px] 1280:py-[100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] 768:gap-[20px] 1024:gap-[0px] 1280:gap-[60px] 1366:gap-[80px]">
          {/* First Column */}
          <div className="flex flex-col items-center gap-[20px] 1024:gap-[55px] 1280:gap-[70px]">
            {cards.slice(0, 3).map((card, idx) => (
              <HoverCard
                key={idx}
                {...card}
                index={idx}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          {/* Second Column with margin top */}
          <div className="flex flex-col items-center gap-[20px] 1024:gap-[55px] 1280:gap-[70px] md:mt-[90px]">
            {cards.slice(3, 6).map((card, idx) => (
              <HoverCard
                key={idx + 3}
                {...card}
                index={idx + 3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentM;
