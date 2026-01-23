"use client";
import MissionDesk from "./MissionDesk";
import MissionMobile from "./MissionMobile";

export default function Mission_value() {
  return (
    <>
      <div className="hidden xl:block">
        <MissionDesk />
      </div>
      <div className="block xl:hidden">
        <MissionMobile />
      </div>
    </>
  );
}
