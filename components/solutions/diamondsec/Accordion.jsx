"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({
  id,
  title,
  content,
  activeId,
  setActiveId,
  Icon,
}) {
  const open = activeId === id;

  return (
    <div className="mb-4 rounded-lg">
      <div className="bg-[url(/solutions/accbg.jpg)] w-full bg-cover bg-no-repeat text-black overflow-hidden">
        <button
          className="w-full overflow-hidden flex items-center gap-3 py-4 lg:py-3 px-4 text-left cursor-pointer"
          onClick={() => setActiveId(id)} // ✅ always set id, no toggle to null
        >
          <h3
            className={`bw-m xl:py-5 ${
              open ? "text-[#F47920]" : "text-black"
            } lg:text-[28px] text-[20px] overflow-hidden transition-colors duration-500`}
          >
            {title}
          </h3>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="pb-4 px-4 text-black text-[16px]">{content}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
