import React from "react";
import TestHead from "./TestHead";
import TestTest from "./TestTest";
import TestMob from "./TestMob";

const TestMain = ({ testimonials = [] }) => {
  return (
    <div className="relative pt-13 pb-16 flex flex-col gap-10">
      <img
        src="/parkdetail/ovarr3.svg"
        className="absolute top-14 xl:top-16 right-[max(5%,calc((100vw-1340px)/2))]"
        alt="Arrow"
      />
      <TestHead />
      <TestTest testimonials={testimonials} />
      <TestMob testimonials={testimonials} />
    </div>
  );
};

export default TestMain;
