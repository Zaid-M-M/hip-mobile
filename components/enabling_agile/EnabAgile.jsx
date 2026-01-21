// components/workforce/WorkWrapper.js
import React from "react";

import Enab_Agil_sec1 from "./Enab_Agil_sec1/Enab_Agil_sec1";
import Enab_Agil_sec2 from "./Enab_Agil_sec2/Enab_Agil_sec2";
import Enab_Agil_sec3 from "./Enab_Agil_sec3/Enab_Agil_sec3";
import Enab_Agil_sec4 from "./Enab_Agil_sec4/Enab_Agil_sec4";
import Enab_Agil_sec5 from "./Enab_Agil_sec5/Enab_Agil_sec5";
import Enab_Agil_sec6 from "./Enab_Agil_sec6/Enab_Agil_sec6";
import Enab_Agil_sec2_5 from "./Enab_Agil_sec2_5/Enab_Agil_sec2_5";
import Enab_Agil_sec7 from "./Enab_Agil_sec7/Enab_Agil_sec7";

const EnabAgile = () => {
  const sectionData = {
    heading: "Enabling ",
    heading1: "Agile Growth",
    desc: "We deliver value by combining scale, experience, and disciplined execution across our industrial and logistics portfolio. Our pan-India footprint, established local networks, and adherence to global best practices enable us to develop and manage Grade A assets that support efficient operations and long-term customer engagement.",
    para: "Our design and delivery processes are tailored to meet the distinct needs of each customer and location.",
    para1:
      "Our parks are built to global standards of institutional  players. Every warehouse facility is built to meet high performance and operational efficiency standards, while also prioritising human comfort. Our designs adhere to all applicable building and safety regulations, including IGBC guidelines for green buildings. All our operational parks are Platinum Certified by IGBC and we are targeting pre-certifications for our under- construction assets.",
    para2:
      "Whether it's a standard ready-to-move unit or a built-to-suit development, we treat every business requirement as unique. Even our plug-and-play offerings are designed with flexibility in mind, allowing for fit-out customisations, phased expansions, or add-on services that match your operational goals. ",
    extra:
      "Our in-house project and development experts work with leading architects, consultants, and contractors to accelerate the design cycle, maximise value engineering, and ensure consistent technical excellence. With real-time construction updates, phased delivery models, and stringent quality checks at every stage, we stay accountable to both speed and standards.",
    extra1:
      "Because building better isn’t just about the structure. It is about delivering value, faster, and with purpose.",

    amenities: [
      {
        title: "Pan India Presence",
        image: "/enabling_agile/panindia_icon.svg",
      },
      {
        title: "Proactive expansion",
        image: "/enabling_agile/proactive_icon.svg",
      },
      {
        title: "Strategic locations",
        image: "/enabling_agile/location_icon.svg",
      },
      {
        title: "Brownfield & Greenfield Assets, JV Partnerships",
        image: "/enabling_agile/brownfield_icon.svg",
      },
      {
        title: "Connectivity to consumption centres and major highways",
        image: "/enabling_agile/conectivity_icon.svg",
      },
      {
        title: "Local community partnerships And government support",
        image: "/enabling_agile/localcommuni_icon.svg",
      },
    ],
    amenitiesdesign: [
      {
        title: "Built-to-Suit",
        image: "/enabling_agile/build_icon_sec4.svg",
      },
      {
        title: "Ready-to-move",
        image: "/enabling_agile/ready_icon_sec4.svg",
      },
      {
        title: "Environment-friendly construction",
        image: "/enabling_agile/environment_icon_sec4.svg",
      },
      {
        title: "Global design and expertise",
        image: "/enabling_agile/global_icon_sec4.svg",
      },
      {
        title: "Real-time construction updates",
        image: "/enabling_agile/realtime_icon_sec4.svg",
      },
      {
        title: "Maximizing Value Engineering",
        image: "/enabling_agile/maximizing_icon_sec4.svg",
      },
    ],
    amenitiespark: [
      {
        title: "Clear Land Title",
        image: "/enabling_agile/clearland_icon_sec5.svg",
      },
      {
        title: "Statutory and Regulatory Expertise",
        image: "/enabling_agile/statutory_icon_sec5.svg",
      },
      {
        title: "Risk Mitigation",
        image: "/enabling_agile/risk_icon_sec5.svg",
      },
      {
        title: "Customer-Centric Approach",
        image: "/enabling_agile/customer_icon_sec5.svg",
      },
      {
        title: "Commitment to Ethical Business Practices",
        image: "/enabling_agile/commitment_icon_sec5.svg",
      },
      {
        title: "Data Monitoring",
        image: "/enabling_agile/data_icon_sec5.svg",
      },
    ],
    amenitiesasset: [
      {
        title: "Safety and Security Services ",
        image: "/enabling_agile/safety_icon_sec6.svg",
      },
      {
        title: "Emergency Preparedness",
        image: "/enabling_agile/emergency_icon_sec6.svg",
      },
      {
        title: "24/7 Uninterrupted Operations",
        image: "/enabling_agile/24x7_icon_sec6.svg",
      },
      {
        title: "Green Landscapes",
        image: "/enabling_agile/green_icon_sec6.svg",
      },
      {
        title: "First-aid and Ambulance Services",
        image: "/enabling_agile/firstaid_icon_sec6.svg",
      },
      {
        title: "Community Building Initiatives",
        image: "/enabling_agile/community_icon_sec6.svg",
      },
    ],
  };

  return (
    <div>
      <Enab_Agil_sec1 data={sectionData} />
      <Enab_Agil_sec2 />
      <Enab_Agil_sec2_5 />
      {/* ✅ pass amenities to section 3 */}
      <Enab_Agil_sec3 amenities={sectionData.amenities} />
      <Enab_Agil_sec4
        amenitiesdesign={sectionData.amenitiesdesign}
        data={sectionData}
      />
      <Enab_Agil_sec5 amenitiespark={sectionData.amenitiespark} />
      <Enab_Agil_sec6 amenitiesasset={sectionData.amenitiesasset} />
      <Enab_Agil_sec7 />
    </div>
  );
};

export default EnabAgile;
