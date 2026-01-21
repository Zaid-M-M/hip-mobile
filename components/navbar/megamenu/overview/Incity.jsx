import TransitionLink from "@/src/app/TransitionLink";
import React from "react";

const Incity = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex gap-6 w-full flex-wrap h-[273px]">
        {/* Delhi NCR */}
        <div className="flex-1">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Delhi NCR
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/incity-alipur-i/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Alipur I
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/incity-alipur-ii/"
                className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
              >
                Alipur II
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/gurugram/"
                className="hover:text-[#F47922] transition-colors duration-200"
              >
                Gurugram
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/kirti-nagar/"
                className="text-left hover:text-[#F47922] transition-colors duration-200"
              >
                Kirti Nagar
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/narela/"
                className="hover:text-[#F47922] transition-colors duration-200"
              >
                Narela
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/okhla-1/"
                className="hover:text-[#F47922] transition-colors duration-200"
              >
                Okhla I
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/okhla-2/"
                className="hover:text-[#F47922] transition-colors duration-200"
              >
                Okhla II
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/rp-bagh/"
                className="hover:text-[#F47922] transition-colors duration-200"
              >
                RP Bagh
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/sahibabad-2/"
                className="text-left hover:text-[#F47922] transition-colors duration-200"
              >
                Sahibabad II
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Mumbai */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="">
            <h4 className="text-black underline font-semibold mb-2 text-[14px]">
              Mumbai
            </h4>
            <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
              {/* <li>
                <TransitionLink
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  href="/incity-centers/horizon-incity-kurla"
                  className="hover:text-[#F47922] transition-colors duration-200"
                >
                  Kurla
                </TransitionLink>
              </li> */}
              <li>
                <TransitionLink
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  href="/incity-centers/vashi/"
                  className="hover:text-[#F47922] transition-colors duration-200"
                >
                  Vashi
                </TransitionLink>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-black underline font-semibold mb-2 text-[14px]">
              Thane
            </h4>
            <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
              <li>
                <TransitionLink
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  href="/incity-centers/thane/"
                  className="hover:text-[#F47922] transition-colors duration-200"
                >
                  Thane
                </TransitionLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Nagpur */}
        <div className="">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Nagpur
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/vardhaman-nagar/"
                className="hover:text-[#F47922] transition-colors duration-200 text-left"
              >
                Vardhaman Nagar
              </TransitionLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col gap-5">
          {/* Pune */}
          <div className="">
            <h4 className="text-black underline font-semibold mb-2 text-[14px]">
              Pune
            </h4>
            <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
              <li>
                <TransitionLink
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  href="/incity-centers/horizon-incity-pimpri/"
                  className="hover:text-[#F47922] transition-colors duration-200"
                >
                  Pimpri
                </TransitionLink>
              </li>
            </ul>
          </div>
          {/* Goa */}
          <div className="flex-1">
            <h4 className="text-black underline font-semibold mb-2 text-[14px]">
              Goa
            </h4>
            <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
              <li>
                <TransitionLink
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  href="/incity-centers/verna/"
                  className="hover:text-[#F47922] transition-colors duration-200"
                >
                  Verna
                </TransitionLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Chennai */}
        <div className="flex-1">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Chennai
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/chromepet/"
                className="hover:text-[#F47922] transition-colors duration-200"
              >
                Chromepet
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/virugambakkam/"
                className="hover:text-[#F47922] transition-colors duration-200"
              >
                Virugambakkam
              </TransitionLink>
            </li>
          </ul>
        </div>

        {/* Bengaluru */}
        <div className="flex-1">
          <h4 className="text-black underline font-semibold mb-2 text-[14px]">
            Bengaluru
          </h4>
          <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px]">
            <li>
              <TransitionLink
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                href="/incity-centers/yeshwantpur/"
                className="hover:text-[#F47922] transition-colors duration-200"
              >
                Yeshwantpur
              </TransitionLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[42px] flex w-full justify-end mt-[-20px]">
        <TransitionLink
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          href="/incity-centers/"
          className="text-black border flex items-center gap-3 px-4 py-2 bg-white !capitalize text-[16px]"
        >
          <span className="text-[16px]">InCity Centers</span>
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

export default Incity;
