import TransitionLink from "@/src/app/TransitionLink";
import React from "react";

const Industrial = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div
        className="w-full  h-[273px]"
        style={{ columnCount: 5, columnGap: "2.5rem" }}
      >
        {/* Delhi NCR */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Delhi NCR
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/warehousing-park-farukhnagar-i/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Farukhnagar I
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/warehousing-park-farukhnagar-ii/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Farukhnagar II
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-bilaspur/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Bilaspur
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/warehousing-park-koka/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Koka
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/warehousing-park-luhari-delhi-ncr/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Luhari
              </TransitionLink>
            </li>
            {/* <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/warehousing-park-delhi-i"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Delhi I
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/warehousing-park-delhi-ii"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Delhi II
              </TransitionLink>
            </li> */}
          </ul>
        </div>

        {/* Ahmedabad */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Ahmedabad
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-bhayala/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Bhayala
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Pune */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Pune
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-chakan-ii/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Chakan II
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-chakan-v/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Chakan V
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/talegaon/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Talegaon
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Mumbai */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Mumbai
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/bhiwandi/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Bhiwandi
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Nashik */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Nashik
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/nashik/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Nashik
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Nagpur */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Nagpur
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/xsio-park-one/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                XSIO Park One
              </TransitionLink>
            </li>

            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/xsio-park-two/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                XSIO Park Two
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/xsio-park-three/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                XSIO Park Three
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/xsio-park-one-north/"
                className="text-left hover:text-[#F47922] transition-colors duration-200"
              >
                XSIO Park One North
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Goa */}
        {/* <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Goa
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-verna"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Verna
              </TransitionLink>
            </li>
          </ul>
        </div> */}

        {/* Chennai */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Chennai
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-chengalpattu/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Chengalpattu
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-redhills-i/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Redhills-I
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehouse-park-mappedu-chennai/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Mappedu
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehouse-park-mwc-chennai/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                MWC
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/oragadam/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Oragadam
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/oragadam-ii/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Oragadam II
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Hyderabad */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Hyderabad
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-kothur/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Kothur
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-patancheru/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Patancheru
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Bengaluru */}
        <div className="break-inside-avoid mb-6 inline-block w-full align-top">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Bengaluru
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-dobbaspet-i/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Dobbaspet I
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-dobbaspet-ii/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Dobbaspet II
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/warehousing-park-malur/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Malur
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/hoskote/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Hoskote
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/industrial-and-warehousing-park-hosur/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Hosur
              </TransitionLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[42px] flex w-full justify-end mt-[-20px]">
        <TransitionLink
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          href="/industrial-logistics-parks/"
          className="text-black border flex items-center gap-3 px-4 py-2 bg-white !capitalize text-[16px]"
        >
          <span className="text-[16px]">Industrial & Logistics Parks</span>
          <img
            className="h-3.5 w-3.5"
            src="/value_added_services/link.svg"
            alt=""
          />
        </TransitionLink>
      </div>
    </div>
  );
};

export default Industrial;
