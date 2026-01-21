"use client";
import React, { useState } from "react";
import HoverCard from "../Environment/HoverCard";
import { cards } from "../social/data/CommunityData";
import GovernCard from "./GovernCard";

const GovernShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      title: "Compliance and Reporting",
      description:
        "We deploy a structured governance mechanism to cover all aspects of compliance:",
      image: "/governance/compliance.png",
      large: true,
      keypoints: [
        "We deploy a structured governance mechanism to cover all aspects of compliance.",
        "Regular reviews via audits to maintain global standards and meet regulatory requirements in our facilities.",
        "Submitting periodic regulatory, statutory and voluntary compliances for our operational parks.",
      ],
    },
    {
      title: "Data Security",
      image: "/governance/security.png",
      description:
        "We are committed to reducing our carbon footprint and investing in sustainable energy sources.",
      keypoints: [
        "Horizon follows rigorous data protection protocols and partners with secure digital platforms to safeguard client, vendor, and employee information.",
        "Access controls, regular audits, and cybersecurity frameworks are implemented across internal systems and park-level technologies.",
        "Our smart infrastructure and park management systems are aligned with industry-standard practices to ensure data privacy and operational continuity.",
      ],
    },
    {
      title: "Active Governing Committees",
      image: "/governance/active.png",
      description:
        "We implement efficient water management practices to reduce consumption and promote reuse.",
      keypoints: [
        "Horizon has an ESG steering committee that oversee ESG compliance, ethical conduct, and enterprise risk management.",
        "These internal bodies ensure transparency, track sustainability KPIs, and guide strategic decisions in line with stakeholder interests.",
        "Regular reviews and reporting cycles help us remain accountable to our business, environmental, and community commitments.",
      ],
    },
    {
      title: "Statutory Requirements",
      image: "/governance/stautory.png",
      description:
        "Driving sustainable consumption through recycling, reuse, and responsible waste disposal.",
      keypoints: [
        "We comply with all statutory norms.",
        "We conform to POSH Policy, Code of Conduct, and Compliance Manual.",
        "We say no to vendors and contractors who engage in child labour, forced labour, bribery, and corruption.",
      ],
    },
  ];

  return (
    <div className="bg-black relative py-[45px] overflow-hidden 1366:py-[100px]">
      <div>
        <div className="absolute -top-56 -right-96 1280:-top-6 768:-right-72 1280:right-0">
          <img src="/governance/topr.svg" alt="" />
        </div>
        <div className="absolute -top-56 1280:-top-24 -left-96 768:-left-56 1280:left-0">
          <img src="/governance/topl.svg" alt="" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/governance/center.svg"
            alt=""
            className="w-40 h-40 sm:w-96 sm:h-96 xl:w-auto xl:h-auto object-contain"
          />
        </div>

        <div className="absolute -left-96 768:-left-80 1280:-left-32 1366:left-0 bottom-0">
          <img src="/governance/bottoml.svg" alt="" />
        </div>
        {/* <div className="absolute -right-[420px] 768:-right-80 1280:-right-36 1366:right-0 sm:bottom-0">
          <img src="/govern/bottomright.svg" alt="" />
        </div> */}
      </div>{" "}
      <div className="fixup  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] 768:gap-[20px]  1024:gap-[0px] 1280:gap-[60px] 1366:gap-0 1536:gap-[60px] ">
          {/* First Column */}
          <div className="flex flex-col items-center gap-[40px] 1024:gap-[55px] 1280:gap-[60px] 1366:gap-[80px]">
            {cards.slice(0, 2).map((card, idx) => (
              <GovernCard
                key={idx}
                {...card}
                index={idx}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          {/* Second Column with margin top */}
          <div className="flex flex-col items-center gap-[40px] 1024:gap-[55px] 1280:gap-[60px] 1366:gap-[80px] md:mt-[132px]">
            {cards.slice(2, 4).map((card, idx) => (
              <GovernCard
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

export default GovernShowcase;
