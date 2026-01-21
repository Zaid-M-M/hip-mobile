import BusinessEco from "@/components/Value_added_services/BusinessEco";
import Cold from "@/components/Value_added_services/Cold";
import Energy from "@/components/Value_added_services/Energy";
import Header from "@/components/Value_added_services/Header";
import Staff from "@/components/Value_added_services/Staff";
import Turnkey from "@/components/Value_added_services/Turnkey";
import ValueAddedForm from "@/components/Value_added_services/ValueAddedForm";
import React from "react";

export const metadata = {
  title: "Warehouse Value Added Services & Automation | Horizon",
  description:
    "Scale smarter with Horizon’s warehouse value added services. We provide automation, inventory management, and integrated solutions for agile operations.",
};
const page = () => {
  return (
    <>
      <Header />
      <Energy />
      <Turnkey />
      <Cold />
      <Staff />
      <BusinessEco />
      <ValueAddedForm />
    </>
  );
};

export default page;
