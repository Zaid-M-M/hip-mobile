import React from "react";
import ContCard from "./ContCard";
// const contppl = [
//   {
//     name: "Saaransh Billa",
//     number: "+91 9958864756",
//     email: "saaransh.billa@hiparks.com",
//   },
//   {
//     name: "Aanchal Kaul",
//     number: "+91 7899449668",
//     email: "aanchal.kaul@hiparks.com",
//   },
// ];
const ContMain = ({ leasing_details }) => {
  return (
    <div className="bg-[url(/parkdetail/contact_bg.jpg)] w-full bg-cover bg-no-repeat xl:h-[285px] flex items-center">
      <div className="fix">
        <div className="lg:px-10 py-12 flex lg:flex-row flex-col w-full lg:gap-0 gap-5 lg:justify-between lg:items-center">
          <h2 className="lg:text-[32px] text-[30px] leading-[42px] bw-m uppercase text-white ">
            For Leasing
            <br />
            Enquiries
          </h2>
          <div className="flex xl:gap-10 gap-5 md:flex-row flex-col">
            {leasing_details &&
              leasing_details?.map((item, index) => (
                <div className="xl:w-fit w-[320px]">
                  <ContCard
                    name={item.incity_person_name}
                    number={item.incity_person_number}
                    email={item.incity_person_email}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContMain;
