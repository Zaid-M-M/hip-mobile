"use client";
import React, { useState } from "react";
import { PlusIcon, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact_sec2 = () => {
  // Single state for accordion
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="fix py-[45px] lg:py-[100px] px-4 sm:px-6 md:px-8 360:px-0">
        <div className="flex flex-col lg:flex-row w-full h-full items-stretch gap-0 lg:gap-0 360:flex-col-reverse">
          {/* LEFT SIDE – Form */}
          <div className="bg-white w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-[45px] py-8 sm:py-10 md:py-12">
            <h3 className="bw-s text-[28px] leading-[30px] tracking-[-1px] sm:text-[26px] sm:leading-[36px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-1.2px]">
              <span className="bw-r">Connect</span>{" "}
              <span className="bw-m">With Us</span>
            </h3>

            <div className="w-full pt-9 flex-1 flex flex-col justify-start xl:pt-13">
              <ContactForm />
              {/* <form className="space-y-8 sm:space-y-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[55px]">
                  <input
                    placeholder="Full Name"
                    type="text"
                    className="w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 text-black placeholder-black bw-r"
                  />
                  <input
                    placeholder="Email Address"
                    type="email"
                    className="w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 text-black placeholder-black bw-r"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[55px]">
                  <input
                    placeholder="Organization"
                    type="text"
                    className="w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 text-black placeholder-black bw-r"
                  />
                  <input
                    placeholder="Phone No"
                    type="text"
                    className="w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 text-black placeholder-black bw-r"
                  />
                </div>

                <div className="relative xl:mb-[40px]">
                  <select className="w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 bg-transparent appearance-none pr-8 text-black placeholder-black bw-r">
                    <option value="">Type of Enquiry</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <svg
                    className="absolute right-2 bottom-3 w-4 h-4 pointer-events-none text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>

                <textarea
                  placeholder="Your Message"
                  rows="3"
                  className="w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 resize-none text-black placeholder-black bw-r"
                />

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form> */}
            </div>
          </div>

          {/* RIGHT SIDE – Contact Info */}
          <div className="bg-[linear-gradient(141deg,#8F53A1_32.62%,#F47922_101.53%)] text-white w-full lg:w-1/2 p-6 sm:p-8 md:p-10 xl:px-[30px] xl:py-[46px] flex flex-col text-sm leading-6">
            <h3 className="text-[24px] font-semibold sm:text-[26px] md:text-[28px] bw-m">
              Connect With Us
            </h3>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="md:p-2 xl:p-0 1440:p-2 rounded">
                <p className="bw-m text-[16px]">Mumbai - Head Office</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l">
                  Horizon Industrial Parks Ltd, <br /> Floor 15, Tower 1, One
                  World Center <br /> Lower Parel, Mumbai 400 013
                </p>
              </div>
              <div>
                <p className="bw-m text-[16px]">Phone</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l pb-[10px]">
                  +91 22 4158 1000 | +91 88799 70705
                </p>
                <div>
                  <p className="bw-m text-[16px]">Business Hours</p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l">
                    Monday to Friday | 9 am to 6 pm IST
                  </p>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>
              <div className=" rounded">
                <div className="md:pt-2 xl:pt-0 1440:pt-2 rounded">
                  <p className="bw-m text-[16px]">Delhi - Zonal Office</p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l">
                    Tower 2, 1608, 16th Floor, <br /> Magnum Global Park, Golf
                    Course Ext. Road, Sector 58, Gurugram,
                    <br />
                    Haryana-122 011
                  </p>
                  {/* <div className="pt-[10px]">
                    <p className="bw-m text-[16px]">Phone</p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l pb-[10px]">
                      +91 99711 44317
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="md:p-2 xl:p-0 1440:p-2 rounded">
                <p className="bw-m text-[16px]">Bengaluru - Zonal Office</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l">
                  2nd Floor, Marquis Ventures, <br /> Vittal Mallya Road,
                  Shanthala Nagar, <br /> Ashok Nagar, Bengaluru, <br />{" "}
                  Karnataka 560001.
                </p>
                {/* <div className="pt-[10px]">
                  <p className="bw-m text-[16px]">Phone</p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l pb-[10px]">
                    +91 80695 39800
                  </p>
                </div> */}
              </div>
              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>
            </div>

            {/* Accordions */}
            <div className="space-y-6 mt-1 xl:mt-[16px]">
              {/* Industrial Leasing Accordion */}
              <div className="mb-[14px] md:mb-[0px]">
                <button
                  className="flex items-center justify-between w-full bw-r text-left cursor-pointer"
                  onClick={() => toggleSection("industrial")}
                >
                  <span className="text-[16px] bw-m">
                    For Industrial Leasing Inquiries
                  </span>
                  <span>
                    {openSection === "industrial" ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openSection === "industrial" && (
                    <motion.div
                      key="industrial"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
                      className="overflow-hidden mt-2 space-y-2 "
                    >
                      <p className="text-[16px] mb-[10px]">
                        Venkatraman V &nbsp;|&nbsp; +91 9819090612 &nbsp;|{" "}
                        <a
                          href="mailto:venkatraman.v@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          venkatraman.v@hiparks.com
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>

              {/* Incity Leasing Accordion */}
              <div className="mb-[14px] md:mb-[0px]">
                <button
                  className="flex items-center justify-between w-full bw-r text-left mt-5 cursor-pointer"
                  onClick={() => toggleSection("incity")}
                >
                  <span className="text-[16px]  bw-m">
                    For InCity Leasing Inquiries
                  </span>
                  <span>
                    {openSection === "incity" ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openSection === "incity" && (
                    <motion.div
                      key="incity"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
                      className="overflow-hidden mt-2 "
                    >
                      {/* South */}
                      <p className="text-[16px] mb-[10px]">
                        <span className="bw-m text-[16px]">- South Region</span>
                        <br />
                        Jeyaraj Antony &nbsp;|&nbsp; +91 90084 95077 &nbsp;|{" "}
                        <a
                          href="mailto:jeyaraj.antony@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          jeyaraj.antony@hiparks.com
                        </a>
                        <br />
                        Michael Jackson &nbsp;|&nbsp; +91 97897 85230 &nbsp;|{" "}
                        <a
                          href="mailto:michael.jackson@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          michael.jackson@hiparks.com
                        </a>
                        <br />
                        Shankar U &nbsp;|&nbsp; +91 97892 22506 &nbsp;|{" "}
                        <a
                          href="mailto:shankar.u@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          shankar.u@hiparks.com
                        </a>
                      </p>
                      {/* West */}
                      <p className="text-[16px] mb-[10px]">
                        <span className="bw-m text-[16px]">- West Region</span>
                        <br />
                        Muktesh Sheth &nbsp;|&nbsp; +91 99229 56032 &nbsp;|{" "}
                        <a
                          href="mailto:muktesh.sheth@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          muktesh.sheth@hiparks.com
                        </a>
                        <br />
                        Shubham Tekade &nbsp;|&nbsp; +91 77569 67505 &nbsp;|{" "}
                        <a
                          href="mailto:shubham.tekade@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          shubham.tekade@hiparks.com
                        </a>
                      </p>
                      {/* North */}
                      <p className="text-[16px] mb-[10px]">
                        <span className="bw-m text-[16px]">
                          - North and East Regions
                        </span>
                        {/* <br />
                        Aanchal Kaul &nbsp;|&nbsp; +91 78994 49668 &nbsp; |{" "}
                        <a
                          href="mailto:aanchal.kaul@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          aanchal.kaul@hiparks.com
                        </a> */}
                        <br />
                        Saaransh Billa &nbsp;|&nbsp; +91 99588 64756 &nbsp; |{" "}
                        <a
                          href="mailto:saaransh.billa@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          saaransh.billa@hiparks.com
                        </a>
                        <br />
                        Ashish Sheoran &nbsp;|&nbsp; +91 88606 23900 &nbsp; |{" "}
                        <a
                          href="mailto:ashish.sheoran@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          ashish.sheoran@hiparks.com
                        </a>
                        <br />
                        Ankur Mukherjee &nbsp;|&nbsp; +91 99209 92904 &nbsp; |{" "}
                        <a
                          href="mailto:ankur.mukherjee@hiparks.com"
                          className="underline pl-[3px] text-[16px]"
                        >
                          ankur.mukherjee@hiparks.com
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>

              {/* Land/Warehouse Proposals */}
              <div className="mt-2 xl:mt-[20px]">
                <p className="bw-m text-[16px]">
                  For Land and Warehouse Investment Proposals
                </p>
                <a
                  href="mailto:acquisitions@hiparks.com"
                  className=" pl-[3px] bw-l text-[16px]"
                >
                  acquisitions@hiparks.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_sec2;
