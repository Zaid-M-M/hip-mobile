"use client";

import React, { useState } from "react";
import TabHead from "./STabHead";
import CardSec from "./SCardSec";
import { AnimatePresence, motion } from "framer-motion";
import Btn2 from "@/components/global/Btn2";
import Btn from "@/components/global/Btn";

const STabMain = () => {
  const isoCertifications = [
    "/sustainability/iso/i1.svg",
    "/sustainability/iso/i2.svg",
    "/sustainability/iso/i3.svg",
    "/sustainability/iso/i4.svg",
  ];

  const greenCertifications = [
    "/sustainability/gc/gc1.png",
    "/sustainability/gc/gc2.png",
    "/sustainability/gc/gc3.png",
    "/sustainability/gc/gc4.png",
    "/sustainability/gc/gc5.png",
    "/sustainability/gc/gc6.png",
  ];

  const [activeTab, setActiveTab] = useState(
    "Green Certifications & Accreditations"
  );

  const cardsToShow =
    activeTab === "ISO Certifications"
      ? isoCertifications
      : greenCertifications;

  // Decide grid columns based on activeTab
  const gridCols =
    activeTab === "ISO Certifications"
      ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-3";

  return (
    <div className="w-full xl:py-24 py-12">
      <div className="fix">
        <div className="flex flex-col gap-5 md:gap-10">
          <TabHead activeTab={activeTab} setActiveTab={setActiveTab} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // triggers exit/enter animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardSec cards={cardsToShow} cols={gridCols} />
            </motion.div>
          </AnimatePresence>
          <div className="w-full flex lg:justify-end lg:mt-6">
            <Btn text="Governance" href="/governance/" tgt={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default STabMain;
