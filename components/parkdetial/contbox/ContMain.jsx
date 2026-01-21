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
const ContMain = ({ leasing_details, park_brochure }) => {
  return (
    <div className="bg-[url(/parkdetail/contact_bg.jpg)] w-full bg-cover bg-no-repeat xl:h-[285px] flex items-center">
      <div className="fix">
        <div className="1440:pl-[100px] lg:px-10 py-12 flex lg:flex-row flex-col w-full lg:gap-0 gap-5 lg:justify-between lg:items-center">
          <h2 className="lg:text-[32px] text-[30px] leading-[42px] bw-m uppercase text-white ">
            For Leasing
            <br />
            Enquiries
          </h2>
          <div className="flex gap-[50px] lg:gap-[100px] 1440:gap-[147px] md:flex-row flex-col items-center justify-between">
            {leasing_details.map((item, index) => (
              <>
                <div className="xl:w-[420px] w-[320px]">
                  <ContCard
                    name={item.person_name}
                    number={item.person_number}
                    email={item.person_email}
                  />
                </div>
                {/* <a
                  href={park_brochure}
                  download
                  target="_blank"
                  class="flex items-center gap-[10px] text-[12px] px-[18px] py-[12px] lg:px-[22px]  lg:py-[15px] w-fit lg:text-[16px] uppercase inter-sb tracking-[1.6px] bg-black text-white cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  type="button"
                >
                  Download Brochure
                  <img
                    class="w-[23px] md:w-[24px] lg:w-[25px] "
                    src="/wht_download_icon.svg"
                  />
                </a> */}

                {park_brochure && (
                  <a
                    href={park_brochure}
                    download
                    target="_blank"
                    className="flex items-center gap-[10px] text-[12px] px-[18px] py-[12px] lg:px-[22px] lg:py-[15px] w-fit lg:text-[16px] uppercase inter-sb tracking-[1.6px] bg-black text-white cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  >
                    Download Brochure
                    <img
                      className="w-[23px] md:w-[24px] lg:w-[25px]"
                      src="/wht_download_icon.svg"
                      alt="Download"
                    />
                  </a>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContMain;
