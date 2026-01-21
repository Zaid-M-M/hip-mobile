import React from "react";
import Image from "next/image";

const TeamCards = ({ member, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer text-center"
      style={{ width: "280px", height: "432px" }}
    >
      <div className="relative w-full h-[340px] mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-base text-[#000000] bw-sb text-[32px]">
        {member.name}
      </h3>
      <p className="text-[24px] text-[#433F45] bw-m">{member.title}</p>
    </div>
  );
};

export default TeamCards;
