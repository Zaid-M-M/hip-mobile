import React from "react";

const CharCardSkeleton = ({ index = 0 }) => {
  const labelColors = ["#8A52A0", "#000000", "#F47922"];
  const bgColor = labelColors[index % labelColors.length];

  return (
    <>
      {/* Inline style for smooth pulse animation */}
      <style>
        {`
          @keyframes pulseSmooth {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-pulse-smooth {
            animation: pulseSmooth 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Desktop Skeleton */}
      <div className="hidden 1024:block animate-pulse-smooth">
        <div className="w-full h-fit relative overflow-hidden border border-[#E5E5E5]">
          <div className="w-full h-[200px] bg-gray-200 relative">
            <div
              className="absolute top-4 left-4 h-[28px] w-[100px] rounded"
              style={{ backgroundColor: bgColor, opacity: 0.3 }}
            />
          </div>
          <div className="flex flex-col border h-[270px] bg-white border-[#C3C3C3] gap-[14px] p-[24px] relative">
            <div className="flex items-center gap-[5px]">
              <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
              <div className="h-[16px] w-[100px] bg-gray-200 rounded" />
            </div>
            <div className="flex flex-col justify-between h-[150px] mt-[20px] relative">
              <div className="space-y-2">
                <div className="h-[20px] bg-gray-200 rounded w-3/4" />
                <div className="h-[20px] bg-gray-200 rounded w-5/6" />
                <div className="h-[20px] bg-gray-200 rounded w-2/3" />
              </div>
              <div className="absolute bottom-0 left-0 h-[40px] w-[120px] bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Skeleton */}
      <div className="block 1024:!hidden animate-pulse-smooth">
        <div className="w-full min-h-[400px] 1440:w-[424px] 1280:min-h-[424px] relative overflow-hidden border border-[#E5E5E5]">
          <div className="w-full h-[200px] bg-gray-200 relative">
            <div
              className="absolute top-4 left-4 h-[24px] w-[90px] rounded"
              style={{ backgroundColor: bgColor, opacity: 0.3 }}
            />
          </div>
          <div className="flex flex-col border h-[210px] sm:h-[242px] bg-white border-[#C3C3C3] gap-[14px] p-[18px] sm:p-[24px] relative">
            <div className="flex items-center gap-[5px]">
              <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
              <div className="h-[16px] w-[90px] bg-gray-200 rounded" />
            </div>
            <div className="flex flex-col justify-between h-[170px] mt-[10px] relative">
              <div className="space-y-2">
                <div className="h-[18px] bg-gray-200 rounded w-4/5" />
                <div className="h-[18px] bg-gray-200 rounded w-3/4" />
                <div className="h-[18px] bg-gray-200 rounded w-2/3" />
              </div>
              <div className="absolute bottom-0 left-0 h-[40px] sm:h-[48px] w-[120px] sm:w-[140px] bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharCardSkeleton;
