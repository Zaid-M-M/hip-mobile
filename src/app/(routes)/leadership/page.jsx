import React from "react";
import TeamSec from "./Components/TeamSec";
import TeamSecF from "./Components/TeamSecF";
import Footer from "../../../../components/global/Footer";

export const metadata = {
  title: "Leadership & Governance | Horizon Industrial Parks India",
  description:
    "Meet the seasoned leadership driving India’s largest logistics platform. We combine expert project management with a commitment to good governance and ESG.",
};

const page = () => {
  return (
    <>
      <div className="overflow-hidden">
        <TeamSecF />
      </div>
    </>
  );
};

export default page;
