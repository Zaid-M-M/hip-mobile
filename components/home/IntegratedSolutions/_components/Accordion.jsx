"use client";
import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";
import { motion } from "framer-motion";

const items = [
  {
    title: "Enabling Agile Growth",
    content:
      "From land acquisition to world class construction and ongoing park operations, we provide support to your businesses anywhere in India, and synchronise every step, so you stay ahead.",
    readMoreLink: "/enabling-agile-growth",
  },
  {
    title: "Value Added Solutions",
    content:
      "Need renewable energy integration, turnkey factory and warehouse solutions, cold storage facilities, or staff accommodations? Our value added solutions make it easier to meet your carbon goals, increase workforce productivity, and add flexibility to your business.",
    readMoreLink: "/value-added-services",
  },
];

const Accordion = () => {
  // ✅ All accordions closed by default
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Track if items are allowed to close based on screen width
  const [isClosable, setIsClosable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsClosable(window.innerWidth <= 1950); // <=1280 allow close
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (index) => {
    if (openIndex === index) {
      if (isClosable) {
        setOpenIndex(null); // allow closing on smaller screens
      }
      return;
    }
    setOpenIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay: 0.3,
        duration: 1.2,
        ease: [0.7, 0, 0.4, 1],
      }}
      className="divide-y pt-[20px] lg:pt-[25px]  2xl:pt-[50px] 3xl:pt-[80px] min-w-[100%] sm:min-w-auto pb-3 lg:max-w-[400px] divide-gray-200 xl:h-full xl:pb-[60px] 2xl:h-[auto]"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          isOpen={openIndex === index}
          title={item.title}
          content={item.content}
          readMoreLink={item.readMoreLink}
          onToggle={handleToggle}
        />
      ))}
    </motion.div>
  );
};

export default Accordion;
