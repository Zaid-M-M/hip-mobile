import TeamSecCommittees from "@/src/app/(routes)/leadership/Components/TeamSecCommittees";
import React from "react";
const BoardCommitteesSec = () => {
  return (
    <div className="w-full bg-[#EBEBEB]">
      <div className="fix flex xl:flex-row flex-col 2xl:gap-20 gap-5 lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <h1 className="1280:text-[56px] xl:w-[40%] 1280:leading-[66px] lg:text-[37px] lg:leading-[43px] text-[30px] leading-[36px] bw-r">
          Board
          <br />
          Committees
        </h1>
        <TeamSecCommittees />
      </div>
    </div>
  );
};

export default BoardCommitteesSec;
