import { useState, useEffect } from "react";

export default function Drop({ categories, activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false);

  // 🔑 close dropdown automatically when activeTab changes
  useEffect(() => {
    setOpen(false);
  }, [activeTab]);

  return (
    <div className="lg:hidden w-full mt-6 relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full border border-[#CDCDCD] py-3 px-4 bg-white text-black flex justify-between items-center"
      >
        <span>{categories[activeTab]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Options */}
      {open && (
        <div className="absolute left-0 right-0 bg-white border border-[#CDCDCD] mt-1 shadow-md z-50">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                activeTab === i ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
