// components/workforce/WorkWrapper.js
import React from "react";
import Work_sec1 from "./Work_sec1/Work_sec1";
import Work_sec3 from "./Work_sec3/Work_sec3";
import Work_sec4 from "./Work_sec4/Work_sec4";
import Work_sec5 from "./Work_sec5/Work_sec5";


const WorkWrapper = () => {
  const sectionData = {
    heading: "Human Centric Parks ",
    heading1: "Designed for People and Productivity",

    desc: "A truly productive work environment is one that takes care of people beyond just their job roles. At Horizon, we believe that industrial and logistics parks should embody thriving business ecosystems - environments where people feel safe, supported, and inspired to work at their best. ",
    para: "Our human-centric parks are designed with this philosophy at their core, blending operational efficiency with thoughtful features and amenities that enhance the day-to-day experience of everyone on-site.",
    extra:
      "Horizon parks feature dedicated medical room and 24x7 ambulance to attend to any emergencies with speed and care. We also regularly organise health camps and safety training to ensure people well-being. ",
    extra1:
      "And because work can get demanding, we’ve integrated multi-sports arenas in our parks, that allow people to unwind and recharge.",
    extra2:
      "These are small details, but ones that make a big difference in nurturing a positive, human-centric environment where people feel supported in both their professional and personal needs.",
    amenities: [
      {
        title: "Convention Centers & Banquet Areas",
        image: "/workflow/convention.svg",
      },
      {
        title: "Food & Conveniences",
        image: "/workflow/food.svg",
      },
      {
        title: "Centre for Skill Development",
        image: "/workflow/centre.svg",
      },
      {
        title: "Medical Services & Safety Initiatives",
        image: "/workflow/medical.svg",
      },
      {
        title: "Sports Arenas",
        image: "/workflow/sport.svg",
      },
      {
        title: "Drivers’ Rest Areas",
        image: "/workflow/driver.svg",
      },
    ],
  };

  return (
    <div>
      <Work_sec1 data={sectionData} /> {/* ✅ data passed here */}
      <Work_sec3/>
      <Work_sec4/>
      <Work_sec5/>
    </div>
  );
};

export default WorkWrapper;
