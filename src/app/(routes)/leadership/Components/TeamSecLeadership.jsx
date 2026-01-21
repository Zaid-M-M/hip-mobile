"use client";

import React, { useState } from "react";
import { teamDataLeadership } from "../data/teamDataLeadership";
import TeamCardsF from "./TeamCardsF";
import TeamPopF from "./TeamPopF";
import { AnimatePresence, motion } from "framer-motion";

const TeamSecLeadership = ({ cardWidth = "xl:w-[calc(25%-35px)]" }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative w-full flex justify-center">
      {/* <div className="hidden xl:flex justify-center w-full"> */}
      <div className="flex justify-center w-full">
        <motion.div
          className="flex flex-wrap justify-center! gap-5 xl:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamDataLeadership.map((member) => (
            <motion.div
              className={`${cardWidth} w-[calc(50%-10px)]`}
              key={member.id}
              variants={itemVariants}
            >
              <TeamCardsF
                name={member.name}
                role={member.role}
                image={member.image}
                onClick={() => openModal(member)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {isModalOpen && selectedMember && (
          <TeamPopF
            key={selectedMember.name}
            isOpen={isModalOpen}
            onClose={closeModal}
            member={selectedMember}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamSecLeadership;
