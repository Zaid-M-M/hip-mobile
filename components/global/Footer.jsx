"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { usePathname } from "next/navigation";
import Socials from "./Socials";
import Newsletter from "../home/Newsletter/Newsletter";
import TransitionLink from "@/src/app/TransitionLink";

// Link Data
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Network", href: "/network-overview/" },
  { label: "Capabilities", href: "/capabilities-overview/" },
  { label: "Integrated Solutions", href: "/integrated-business-solutions/" },
  { label: "Insights", href: "/media/" },
  { label: "Sustainability", href: "/sustainability/" },
  // { label: "Investor Relations", href: "/corporate-governance" },
  { label: "Know Us", href: "/know-us/" },
  { label: "Contact Us", href: "/contact/" },
  { label: "FAQs", href: "/faqs/" },
];

const networkLinks = [
  { label: "Delhi", href: "/delhi/" },
  { label: "Haryana", href: "/haryana/" },
  { label: "Maharashtra", href: "/maharashtra/" },
  { label: "Goa", href: "/goa/" },
  { label: "Gujarat", href: "/gujarat/" },
  { label: "Tamil Nadu", href: "/tamil-nadu/" },
  { label: "Telangana", href: "/telangana/" },
  { label: "Karnataka", href: "/karnataka/" },
];

const sectorLinks = [
  { label: "Auto & Auto Components", href: "/automotive/" },
  { label: "Engineering & Aerospace", href: "/aerospace/" },
  { label: "Logistics & Supply Chain", href: "/logistics/" },
  { label: "FMCG & Retail", href: "/fmcg/" },
  { label: "Packaging", href: "/packaging/" },
  { label: "E-Commerce", href: "/ecommerce/" },
  { label: "Energy", href: "/renewable-energy/" },
  { label: "Chemicals", href: "/chemical/" },
];

export default function Footer() {
  const pathname = usePathname();

  // 🔹 ADDED: Page name
  const pageName =
    pathname === "/"
      ? "Home"
      : pathname
          .replace("/", "")
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

  // 🔹 ADDED: Current date & time
  const currentDate = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
  });

  const hideNewsletter =
    pathname === "/network-overview" || pathname === "/sustainability";

  const formRef = useRef();

  // Field states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [parkLocation, setParkLocation] = useState("");
  const [space, setSpace] = useState("");
  const [message, setMessage] = useState("");

  // Error states
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    organisation: "",
    email: "",
    parkLocation: "",
    space: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const alpha_allwd = /^[A-Za-z ]+$/;
  const phoneRegex = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // --- Validate the whole form on submit ---
  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Please Enter Full Name";
    else if (!alpha_allwd.test(name)) newErrors.name = "Letters and space only";

    if (!phone) newErrors.phone = "Please Enter Phone No";
    else if (!phoneRegex.test(phone))
      newErrors.phone = "Please Enter Valid Phone No";

    if (!email) newErrors.email = "Please Enter Email Address";
    else if (!emailRegex.test(email))
      newErrors.email = "Please Enter Valid Email Address";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Real-time validation on typing ---
  const handleChange = (field) => (e) => {
    const value = e.target.value;

    switch (field) {
      case "name":
        setName(value);
        if (!value)
          setErrors((prev) => ({ ...prev, name: "Please Enter Full Name" }));
        else if (!alpha_allwd.test(value))
          setErrors((prev) => ({ ...prev, name: "Letters and space only" }));
        else setErrors((prev) => ({ ...prev, name: "" }));
        break;

      case "phone":
        setPhone(value);
        if (!value)
          setErrors((prev) => ({ ...prev, phone: "Please Enter Phone No" }));
        else if (!phoneRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            phone: "Please Enter Valid Phone No",
          }));
        else setErrors((prev) => ({ ...prev, phone: "" }));
        break;

      case "email":
        setEmail(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            email: "Please Enter Email Address",
          }));
        else if (!emailRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            email: "Please Enter Valid Email Address",
          }));
        else setErrors((prev) => ({ ...prev, email: "" }));
        break;

      default:
        break;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    if (!validateForm()) return;

    setLoading(true);

    const formData = {
      name,
      phone,
      email,
    };

    try {
      // 1️⃣ Send via EmailJS
      await emailjs.sendForm(
        "service_38rulc9",
        "template_tozwe51",
        formRef.current,
        "SsPYHKCapw4h-xBn_"
      );

      await fetch(
        "https://script.google.com/macros/s/AKfycbyGehH7BQf6TL9nYqRgls9td0kbVKAE_TimCMyiSOhv7nqP7Cw5FpDYl-yKbETeQKY1/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      )
        .then(() => {
          console.log("SUCCESSFULLY SUBMITTED");
          setLoading(false);
        })
        .catch((err) => console.log(err));

      var demo_url =
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/New-Horizon-Brochure.pdf";
      window.open(demo_url, "_blank");

      setStatusMessage("Your message has been sent successfully!");
      formRef.current.reset();
      setName("");
      setPhone("");
      setEmail("");
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatusMessage("Error sending message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Conditionally render Newsletter */}
      {!hideNewsletter && <Newsletter />}

      <Socials />
      <div className="flex flex-col lg:flex-row md:gap-[45px] lg:gap-[40px] w-full md:py-[40px] py-8 px-4 md:pr-[45px] md:pl-[45px] lg:pl-[50px] lg:pr-[50px] lg:py-[40px] xl:pr-[80px] xl:py-[80px]">
        {/* Left Column */}
        <div className="md:w-[30%] pb-8 md:pb-0 w-full flex flex-col md:gap-[30px] lg:gap-[60px]">
          <div>
            <img
              src="/horizonlogo.png"
              width={191}
              height={45}
              alt="Horizon Logo"
            />
          </div>
          <div className="flex flex-col gap-[12px] md:gap-[30px]">
            <div className="pt-8 sm:pt-0">
              <h2 className="text-[22px] bw-sb text-black">Contact</h2>
            </div>
            <div className="text-black flex flex-col gap-[12px]">
              <p className="inter-r leading-[24px] text-[#4D4D4D] text-[15px] sm:text-[16px]">
                Horizon Industrial Parks Ltd
                <br />
                Floor 15, Tower 1, One World Center
                <br />
                Lower Parel, Mumbai 400 013
              </p>
              <div className="flex flex-col gap-[8px] sm:gap-[16px] inter-r text-[15px] md:text-[16px]">
                <span>contactus@HiParks.com</span>
                <span>+91 88799 70705</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full">
          <div className="flex flex-col gap-8 md:flex-row xl:gap-[58px] 1366:gap-[80px] 1440:gap-[100px] 1536:gap-[120px] 1920:justify-between xl:justify-end ">
            {/* <div className="flex flex-col gap-8 md:flex-row justify-between 2xl:justify-between 1920:gap-[330px]"> */}
            {/* Quick Links */}
            <div className="flex flex-col gap-[12px] md:gap-[15px]">
              <h2 className="text-[22px] bw-sb text-black">Quick Links</h2>
              <ul className="flex justify-between inter-r text-[15px] md:text-[16px] text-[#4D4D4D]">
                {/* Desktop */}
                <div className="hidden md:flex md:flex-col md:gap-[16px]">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </div>
                {/* Mobile */}
                <div className="flex w-full md:hidden">
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {quickLinks.slice(0, 5).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {quickLinks.slice(5).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                </div>
              </ul>
            </div>

            {/* Network */}
            <div className="flex flex-col gap-[12px] md:gap-[15px]">
              <h2 className="text-[22px] bw-sb text-black">Network</h2>
              <ul className="flex justify-between inter-r text-[15px] md:text-[16px] text-[#4D4D4D]">
                {/* Desktop */}
                <div className="hidden md:flex md:flex-col md:gap-[16px]">
                  {networkLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </div>
                {/* Mobile */}
                <div className="flex w-full md:hidden">
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {networkLinks.slice(0, 4).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {networkLinks.slice(4).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                </div>
              </ul>
            </div>

            {/* Sectors */}
            <div className="flex flex-col gap-[12px] md:gap-[15px]">
              <h2 className="text-[22px] bw-sb text-black">Sectors</h2>
              <ul className="flex justify-between inter-r text-[15px] md:text-[16px] text-[#4D4D4D]">
                {/* Desktop */}
                <div className="hidden md:flex md:flex-col md:gap-[16px]">
                  {sectorLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </div>
                {/* Mobile */}
                <div className="flex w-full flex-row-reverse gap-4 md:hidden">
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {sectorLinks.slice(4).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {sectorLinks.slice(0, 4).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                </div>
              </ul>
            </div>

            {/* Download */}
            <div className="flex flex-col gap-[12px] md:gap-[15px]">
              <h2 className="text-[22px] bw-sb text-black">Download</h2>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-[60px]"
              >
                <div className="relative mb-[25px]">
                  <input type="hidden" name="Page_name" value={pageName} />
                  <input type="hidden" name="Date" value={currentDate} />
                  <input
                    type="text"
                    placeholder="Full Name*"
                    name="name"
                    value={name}
                    onChange={handleChange("name")}
                    className={`w-full border-b border-[#CDCDCD] py-2 text-black placeholder-[#4D4D4D] bw-r focus:outline-none ${
                      errors.name
                        ? "border-red-500 error_line"
                        : "border-[#CDCDCD]"
                    }`}
                  />
                  {errors.name && (
                    <p className="form_error_msg">{errors.name}</p>
                  )}
                </div>
                <div className="relative mb-[25px]">
                  <input
                    placeholder="Email Address*"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange("email")}
                    className={`w-full border-b border-[#CDCDCD] py-2 text-black placeholder-[#4D4D4D] bw-r focus:outline-none ${
                      errors.email
                        ? "border-red-500 error_line"
                        : "border-[#CDCDCD]"
                    }`}
                  />
                  {errors.email && (
                    <p className="form_error_msg">{errors.email}</p>
                  )}
                </div>
                <div className="relative mb-[25px]">
                  <input
                    type="text"
                    placeholder="Phone No*"
                    name="phone"
                    value={phone}
                    onChange={handleChange("phone")}
                    className={`w-full border-b border-[#CDCDCD] py-2 text-black placeholder-[#4D4D4D] bw-r focus:outline-none ${
                      errors.phone
                        ? "border-red-500 error_line"
                        : "border-[#CDCDCD]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="form_error_msg">{errors.phone}</p>
                  )}
                </div>
                <button
                  type="submit"
                  name="Download Brochure"
                  className="text-[14px] flex gap-[10px] lg:w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer px-[20px] mt-[40px] justify-center items-center w-fit"
                >
                  {loading ? "Downloading..." : "Download Brochure"}
                  <img
                    class="w-[23px] md:w-[20px] lg:w-[20px] "
                    src="/wht_download_icon.svg"
                  ></img>
                </button>
                {statusMessage && (
                  <p
                    className={`mt-4 font-semibold ${
                      statusMessage.includes("success")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex lg:flex-row flex-col items-center lg:pb-5 pb-14 py-5 px-[5%] lg:px-12 justify-between border-t border-[#CDCDCD]">
        <span className="inter-r text-[16px]   text-[#4D4D4C] py-[10px]">
          2025 Horizon Industrial Parks. All Rights Reserved.
        </span>
        <div>
          <TransitionLink
            href="/privacy-policy/"
            className="inter-r text-[16px] text-[#4D4D4C] py-[10px] mr-4"
          >
            Privacy Policy
          </TransitionLink>
          |{" "}
          <TransitionLink
            href="/disclaimer/"
            className="inter-r text-[16px] text-[#4D4D4C] py-[10px] ml-4"
          >
            Disclaimer
          </TransitionLink>
          <TransitionLink></TransitionLink>
        </div>
      </div>
    </div>
  );
}
