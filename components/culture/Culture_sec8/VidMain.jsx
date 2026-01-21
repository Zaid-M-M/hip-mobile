import React from "react";
import Header from "./Header";
import VidSec from "./VidSec";

const VidMain = async ({ career_sec8_video = [] }) => {
  return (
    <div className="w-full pt-12 xl:pt-24 relative bg-black overflow-hidden">
      <img
        src="/culture/vidbg.svg"
        className="top-12 right-[max(5%,calc((100vw-1340px)/2))] z-0 absolute"
        alt=""
      />
      <div className="fixup relative z-10 flex flex-col gap-8">
        <Header careerVideos={career_sec8_video} /> {/* ✅ pass as prop */}
        <VidSec career_sec8_video={career_sec8_video} />
      </div>
    </div>
  );
};

export default VidMain;
