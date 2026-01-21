// NavControls.js
import Btn from "@/components/global/Btn";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const NavControls = (
  { onViewAll } // onPrev/onNext are no longer needed
) => (
  <div className="flex items-center justify-between px-4 mt-4">
    <div className="flex gap-3">
      {/* Add the specific Swiper class names */}
      <button className="swiper-button-prev">
        <ArrowLeft className="text-gray-800" />
      </button>
      <button className="swiper-button-next">
        <ArrowRight className="text-gray-800" />
      </button>
    </div>
    <Btn text={"View All"} onClick={onViewAll} />
  </div>
);
