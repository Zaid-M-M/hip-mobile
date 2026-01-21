import React from "react";
import Btn from "@/components/global/Btn";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants } from "../../../../src/animations/motionVariants";
import { tabTexts } from "@/src/utils/tabTexts";
import { CardSlider } from "../tabbed-mobile/CardSlider";

const TabContent = ({ content, activeTab, isLoading }) => {
  if (!Array.isArray(content)) return null;

  const cards = content;
  console.log(content);
  const handleViewAll = () => {
    console.log("View all clicked for:", tabTexts[activeTab]?.title);
  };
  console.log("Check Content", content);
  console.log("Current tab type:", tabTexts[activeTab]?.slug);

  return (
    <div className="relative z-10 grid grid-cols-1 768:gap-[30px] 1024:gap-[0px] xl:gap-[60px] xl:mt-[35px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // important! triggers animation on tab change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Right Cards Section */}
          <div className="w-full">
            <CardSlider
              cards={cards}
              onViewAll={handleViewAll}
              type={tabTexts[activeTab]?.slug || ""}
              isLoading={isLoading}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabContent;
