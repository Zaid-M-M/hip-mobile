import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamPop = ({ member, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: [0.7, 0, 0.4, 1] },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, ease: [0.7, 0, 0.4, 1] },
      }}
    >
      <motion.div
        className="bg-white p-6 max-w-md w-full relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: [0.7, 0, 0.4, 1] },
        }}
        exit={{
          y: 50,
          opacity: 0,
          transition: { duration: 0.3, ease: [0.7, 0, 0.4, 1] },
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-black text-2xl cursor-pointer"
        >
          ×
        </button>
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h2 className="text-lg font-bold mb-1">{member.name}</h2>
          <h4 className="text-sm text-gray-600 mb-3">{member.title}</h4>
          <p className="text-sm text-center">{member.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamPop;
