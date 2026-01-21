"use client";
import React, { useState } from "react";
import TeamCards from "./TeamCards";
import TeamPop from "./TeamPop";
import { AnimatePresence } from "framer-motion";
const teamData = [
  {
    name: "RK Narayan",
    title: "President Strategy & Business Development",
    image: "/home/clients/c1.png",
    description: "Dummy description about RK Narayan",
  },
  {
    name: "Mahendra Waghule",
    title: "Head of Projects and Development",
    image: "/home/clients/c1.png",
    description: "Dummy description about Mahendra Waghule",
  },
  {
    name: "Pooja Malik",
    title: "Head of Leasing",
    image: "/home/clients/c1.png",
    description: "Dummy description about Pooja Malik",
  },
  {
    name: "Aviraj Nandan",
    title: "Head of Human Resources",
    image: "/home/clients/c1.png",
    description: "Dummy description about Aviraj Nandan",
  },
  {
    name: "Taruna Mahajan",
    title: "Head of Marketing",
    image: "/home/clients/c1.png",
    description: "Dummy description about Taruna Mahajan",
  },
  {
    name: "Swati Karmarkar",
    title: "Head of Legal",
    image: "/home/clients/c1.png",
    description: "Dummy description about Swati Karmarkar",
  },
  {
    name: "Mitesh Garg",
    title: "Head of Technology",
    image: "/home/clients/c1.png",
    description: "Dummy description about Mitesh Garg",
  },
  {
    name: "Kunal Shah",
    title: "Chief Financial Officer",
    image: "/home/clients/c1.png",
    description: "Dummy description about Kunal Shah",
  },
  {
    name: "Nikhil Navalkar",
    title: "Head of Operations",
    image: "/home/clients/c1.png",
    description: "Dummy description about Nikhil Navalkar",
  },
  {
    name: "Prapti Zaveri",
    title: "Head – Investor Relations",
    image: "/home/clients/c1.png",
    description: "Dummy description about Prapti Zaveri",
  },
];

const TeamSec = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="px-6 py-12 flex justify-center">
      <div className="flex flex-wrap justify-center gap-x-[70px] gap-y-[84px] fix">
        {teamData.slice(0, 10).map((member, index) => (
          <TeamCards
            key={index}
            member={member}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <TeamPop
            key={selectedMember.name}
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSec;
