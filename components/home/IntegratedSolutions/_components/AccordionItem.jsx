import React from "react";
import { PlusIcon, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({
  index,
  isOpen,
  title,
  content,
  readMoreLink,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex items-center text-[20px] py-[12px] md:py-[15px] 2xl:py-[20px] justify-between w-full text-left bg-[#ffffff]"
        onClick={() => onToggle(index)}
      >
        <h3 className=" md:text-[25px] md:leading-[35px] xl:text-[26px] xl:leading-[36px] cursor-pointer bw-m">
          {title}
        </h3>
        {/* <span className="ml-2 text-[18px] sm:text-xl cursor-pointer">
          {isOpen ? <Minus size={30} /> : <PlusIcon size={30} />}
        </span> */}
        <span className="ml-2 text-[18px] sm:text-xl cursor-pointer">
          {isOpen ? (
            <Minus className="w-5 h-5 sm:w-7 sm:h-7" />
          ) : (
            <PlusIcon className="w-5 h-5 sm:w-7 sm:h-7" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col bg-[#ffffff] pb-[20px]">
              <p className="text-[16px] sm:text-[16px] bw-r leading-[23px] sm:leading-[26px] text-[#000]">
                {content}
              </p>
              <div className="flex gap-[8px] border w-fit px-[11px] py-[5px] 768:py-[12px]  1024:px-[12px] 1024:py-[8px] mt-5 sm:gap-[10px] items-center">
                <Link
                  href={readMoreLink}
                  className=" text-[12px] leading-[24px] tracking-[0.1em] sm:text-[14px] sm:leading-[24px] uppercase inter-sb text-[#000000]"
                >
                  Know More
                </Link>
                <div className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px]">
                  <img src="/home/Integrated/link.svg" alt="" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
