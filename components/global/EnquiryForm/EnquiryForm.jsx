"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const EnquiryForm = ({ show, onClose }) => {
  // const [enquiryType, setEnquiryType] = useState("");

  const formRef = useRef();

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

  // Field states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [parkLocation, setParkLocation] = useState("");
  const [space, setSpace] = useState("");
  const [message, setMessage] = useState("");
  const [enquiryType, setEnquiryType] = useState(""); // ✅ NEW

  // Error states
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    organisation: "",
    email: "",
    parkLocation: "",
    space: "",
    message: "",
    enquiryType: "",
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

    if (!organisation) newErrors.organisation = "Please Enter Organisation";

    if (!email) newErrors.email = "Please Enter Email Address";
    else if (!emailRegex.test(email))
      newErrors.email = "Please Enter Valid Email Address";

    // With this condition:
    if (enquiryType === "Leasing") {
      if (!parkLocation) newErrors.parkLocation = "Please Enter Park Location";
      if (!space) newErrors.space = "Please Enter Space";
    }

    if (!message) newErrors.message = "Please Enter Message";
    else if (!alpha_allwd.test(message))
      newErrors.message = "Letters and space only";

    if (!enquiryType) newErrors.enquiryType = "Please Select Type of Enquiry";

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

      case "organisation":
        setOrganisation(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            organisation: "Please Enter Organisation",
          }));
        else setErrors((prev) => ({ ...prev, organisation: "" }));
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

      case "parkLocation":
        setParkLocation(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            parkLocation: "Please Enter Park Location",
          }));
        else setErrors((prev) => ({ ...prev, parkLocation: "" }));
        break;

      case "space":
        setSpace(value);
        if (!value)
          setErrors((prev) => ({ ...prev, space: "Please Enter Space" }));
        else setErrors((prev) => ({ ...prev, space: "" }));
        break;

      case "message":
        setMessage(value);
        if (!value)
          setErrors((prev) => ({ ...prev, message: "Please Enter Message" }));
        else if (!alpha_allwd.test(value))
          setErrors((prev) => ({ ...prev, message: "Letters and space only" }));
        else setErrors((prev) => ({ ...prev, message: "" }));
        break;

      case "enquiryType": // ✅ NEW
        setEnquiryType(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            enquiryType: "Please Select Type of Enquiry",
          }));
        else setErrors((prev) => ({ ...prev, enquiryType: "" }));
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
      organisation,
      email,
      parkLocation,
      space,
      message,
    };

    try {
      // 🧠 Select EmailJS Template based on Enquiry Type
      let templateId = "";

      switch (enquiryType) {
        case "Leasing":
          templateId = "template_qxw1h39";
          break;
        case "Land & Warehouse Investments":
          templateId = "template_0rku4hn";
          break;
        case "HR & Admin":
          templateId = "template_o4u61xa";
          break;
        case "Media / Marketing":
          templateId = "template_0svsn5t";
          break;
        case "Projects & Development":
          templateId = "template_a76d30l";
          break;
        case "ESG":
          templateId = "template_5iougvq";
          break;
        default:
          templateId = "template_5iougvq";
          break;
      }

      // ✅ Send via EmailJS (Dynamic template)
      await emailjs.sendForm(
        "service_38rulc9",
        templateId,
        formRef.current,
        "SsPYHKCapw4h-xBn_"
      );

      // ✅ Also send data to Google Sheet
      await fetch(
        "https://script.google.com/macros/s/AKfycbx1VjbZ_gfx_OfppiJyIzRMH-eBtvWhiS9WPb8VSvMHj5uwE4_da0tziLWfV2inUG8H/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      setStatusMessage("Your message has been sent successfully!");
      formRef.current.reset();
      setName("");
      setPhone("");
      setOrganisation("");
      setEmail("");
      setParkLocation("");
      setSpace("");
      setMessage("");
      setEnquiryType("");
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatusMessage("Error sending message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // const handleChange = (setter) => (e) => setter(e.target.value);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className="fixed inset-0 flex justify-end items-center z-[99977999]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} // 👈 30% transparent black
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="bg-[#fff] p-6 w-full max-w-[480px] h-full overflow-auto relative"
          >
            <div className="flex justify-between">
              {/* Header */}
              <h2 className="text-black lg:text-[33px] text-[25px] bw-r mt-[55px] lg:mt-[25px]">
                CONNECT WITH US
              </h2>
              {/* Close Button */}
              <button
                onClick={onClose}
                className=" text-black md:text-7xl font-[100] cursor-pointer md:mt-auto mt-[30px] text-[50px]"
              >
                &times;
              </button>
            </div>

            {/* <form className="space-y-0 mt-4">
       
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label className="text-black mb-1 bw-r">Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full border-b border-[#CDCDCD]  focus:border-white focus:outline-none py-2 text-black placeholder-[#000] "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black mb-1 bw-r">Email</label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full border-b border-[#CDCDCD]  focus:border-white focus:outline-none py-2 text-black placeholder-[#000] "
                  />
                </div>
              </div>

   
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="flex flex-col">
                  <label className="text-black mb-1 bw-r">Organization</label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full border-b border-[#CDCDCD]  focus:border-white focus:outline-none py-2 text-black placeholder-[#000] "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black mb-1 bw-r">Phone No</label>
                  <input
                    type="tel"
                    placeholder=""
                    className="w-full border-b border-[#CDCDCD]  focus:border-white focus:outline-none py-2 text-black placeholder-[#000] "
                  />
                </div>
              </div>

           
              <div className="flex flex-col mt-4">
                <label className="text-black mb-1 bw-r">Type of Enquiry</label>
                <div className="relative">
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full border-b border-[#CDCDCD]  focus:border-white focus:outline-none py-3 bg-transparent appearance-none pr-8 text-black"
                  >
                    <option className="text-black bw-r" value="">
                      Select Type of Enquiry
                    </option>
                    <option className="text-black bw-r" value="Development">
                      Development
                    </option>
                    <option className="text-black bw-r" value="Leasing">
                      Leasing
                    </option>
                    <option className="text-black bw-r" value="HTML">
                      HTML
                    </option>
                    <option className="text-black bw-r" value="CSS">
                      CSS
                    </option>
                    <option className="text-black bw-r" value="JS">
                      JS
                    </option>
                    <option className="text-black bw-r" value="React">
                      React
                    </option>
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
              </div>

         
              {enquiryType === "Leasing" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <label className="text-black mb-1 bw-r">
                      Park Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter park location"
                      className=" bw-r w-full border-b border-[#CDCDCD]  focus:border-white focus:outline-none py-3 text-black placeholder-[#000] "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black mb-1 bw-r">
                      Space Required
                    </label>
                    <input
                      type="text"
                      placeholder="Enter space required"
                      className=" bw-r w-full border-b border-[#CDCDCD]  focus:border-white focus:outline-none py-3 text-black placeholder-[#000] "
                    />
                  </div>
                </div>
              )}

            
              <div className="flex flex-col mt-4">
                <label className="text-black mb-1 bw-r">Tell us more</label>
                <textarea
                  placeholder="Enter your message"
                  rows="3"
                  className=" bw-r w-full border-b border-[#CDCDCD]  focus:border-white focus:outline-none py-2 resize-none text-black placeholder-[#000] "
                />
              </div>

             
              <button
                type="submit"
                className="w-[35%] rounded-full bg-black text-black py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer mt-3 bw-m"
              >
                Submit
              </button>

            </form> */}

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="xl:space-y-8 space-y-4 sm:space-y-10 w-full mt-[20px]"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[55px]">
                <input type="hidden" name="Page_name" value={pageName} />
                <input type="hidden" name="Date" value={currentDate} />
                <div className="relative">
                  <input
                    placeholder="Name*"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange("name")}
                    className={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${
                      errors.name
                        ? "border-[#fb2c36] error_line"
                        : "border-[#CDCDCD] "
                    }`}
                  />
                  {errors.name && (
                    <p className="eqstky_error_msg">{errors.name}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    placeholder="Email Address*"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange("email")}
                    className={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${
                      errors.email
                        ? "border-[#fb2c36] error_line"
                        : "border-[#CDCDCD] "
                    }`}
                  />
                  {errors.email && (
                    <p className="eqstky_error_msg">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Organisation & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[55px]">
                <div className="relative">
                  <input
                    placeholder="Organisation*"
                    type="text"
                    name="organisation"
                    value={organisation}
                    onChange={handleChange("organisation")}
                    className={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${
                      errors.organisation
                        ? "border-[#fb2c36] error_line"
                        : "border-[#CDCDCD] "
                    }`}
                  />
                  {errors.organisation && (
                    <p className="eqstky_error_msg">{errors.organisation}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    placeholder="Phone No*"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleChange("phone")}
                    className={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${
                      errors.phone
                        ? "border-[#fb2c36] error_line"
                        : "border-[#CDCDCD] "
                    }`}
                  />
                  {errors.phone && (
                    <p className="eqstky_error_msg">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Enquiry Type */}
              <div className="relative xl:mb-[40px]">
                <div className="relative">
                  <select
                    name="enquiry"
                    value={enquiryType}
                    onChange={handleChange("enquiryType")} // ✅ NEW
                    className={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-[#000] placeholder-[#000] bw-r focus:outline-none ${
                      errors.enquiryType
                        ? "border-[#fb2c36] error_line"
                        : "border-[#CDCDCD] "
                    }`}
                  >
                    <option value="" disabled className="text-black">
                      Select Type of Enquiry*
                    </option>
                    <option className="text-black" value="Leasing">
                      Leasing
                    </option>
                    <option
                      className="text-black"
                      value="Land & Warehouse Investments"
                    >
                      Land & Warehouse Investments
                    </option>
                    <option className="text-black" value="HR & Admin">
                      HR & Admin
                    </option>
                    <option className="text-black" value="Media / Marketing">
                      Media / Marketing
                    </option>
                    <option
                      className="text-black"
                      value="Projects & Development"
                    >
                      Projects & Development
                    </option>
                    <option className="text-black" value="ESG">
                      ESG
                    </option>
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
                  {errors.enquiryType && (
                    <p className="eqstky_error_msg">{errors.enquiryType}</p> // ✅ NEW
                  )}
                </div>
              </div>

              {/* Space Required & Park location */}
              {enquiryType === "Leasing" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[55px]">
                  <div className="relative">
                    <input
                      placeholder="Space required*"
                      name="space_required"
                      value={space}
                      onChange={handleChange("space")}
                      className={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${
                        errors.space
                          ? "border-[#fb2c36] error_line"
                          : "border-[#CDCDCD] "
                      }`}
                    />
                    {errors.space && (
                      <p className="eqstky_error_msg">{errors.space}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      placeholder="Park location*"
                      type="text"
                      name="park_location"
                      value={parkLocation}
                      onChange={handleChange("parkLocation")}
                      className={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${
                        errors.parkLocation
                          ? "border-[#fb2c36] error_line"
                          : "border-[#CDCDCD] "
                      }`}
                    />
                    {errors.parkLocation && (
                      <p className="eqstky_error_msg">{errors.parkLocation}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Tell Us More*"
                  name="message"
                  rows="3"
                  value={message}
                  onChange={handleChange("message")}
                  className={`mb-[-5px] w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none resize-none ${
                    errors.message
                      ? "border-[#fb2c36] error_line"
                      : "border-[#CDCDCD] "
                  }`}
                />
                {errors.message && (
                  <p className="eqstky_error_msg">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-4">
                {/* <button
          type="submit"
          className="w-full bg-black text-black py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
        >
          Submit
        </button> */}

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full enq_sticky_btn bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

                {statusMessage && (
                  <p
                    className={`mt-4 font-semibold ${
                      statusMessage.includes("success")
                        ? "text-green-600"
                        : "text-[#fff59d]"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryForm;
