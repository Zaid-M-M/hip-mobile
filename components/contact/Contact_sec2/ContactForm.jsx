"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { usePathname } from "next/navigation";
//
//
//

const ContactForm = () => {
  const formRef = useRef();

  // Field states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [parkLocation, setParkLocation] = useState("");
  const [space, setSpace] = useState("");
  const [message, setMessage] = useState("");
  const [enquiryType, setEnquiryType] = useState(""); // ✅ NEW

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
        "https://script.google.com/macros/s/AKfycbz22_jhxDq5iLt3LiKuAkQwnEgjknAJofrKxLqX2hiyt1A8UkEK1BtXGhmBgfG_9iAo/exec",
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
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-8 sm:space-y-10 w-full"
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
            className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
              errors.name ? "border-red-500 error_line" : "border-[#CDCDCD]"
            }`}
          />
          {errors.name && <p className="form_error_msg">{errors.name}</p>}
        </div>

        <div className="relative">
          <input
            placeholder="Email Address*"
            type="email"
            name="email"
            value={email}
            onChange={handleChange("email")}
            className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
              errors.email ? "border-red-500 error_line" : "border-[#CDCDCD]"
            }`}
          />
          {errors.email && <p className="form_error_msg">{errors.email}</p>}
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
            className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
              errors.organisation
                ? "border-red-500 error_line"
                : "border-[#CDCDCD]"
            }`}
          />
          {errors.organisation && (
            <p className="form_error_msg">{errors.organisation}</p>
          )}
        </div>
        <div className="relative">
          <input
            placeholder="Phone No*"
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange("phone")}
            className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
              errors.phone ? "border-red-500 error_line" : "border-[#CDCDCD]"
            }`}
          />
          {errors.phone && <p className="form_error_msg">{errors.phone}</p>}
        </div>
      </div>

      {/* Enquiry Type */}
      <div className="relative xl:mb-[40px]">
        <div className="relative">
          <select
            name="enquiry"
            value={enquiryType}
            onChange={handleChange("enquiryType")} // ✅ NEW
            className={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-black placeholder-black bw-r focus:outline-none ${
              errors.enquiryType
                ? "border-red-500 error_line"
                : "border-[#CDCDCD]"
            }`}
          >
            <option value="" disabled>
              Select Type of Enquiry*
            </option>
            <option value="Leasing">Leasing</option>
            <option value="Land & Warehouse Investments">
              Land & Warehouse Investments
            </option>
            <option value="HR & Admin">HR & Admin</option>
            <option value="Media / Marketing">Media / Marketing</option>
            <option value="Projects & Development">
              Projects & Development
            </option>
            <option value="ESG Grievance ">ESG Grievance </option>
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
            <p className="form_error_msg">{errors.enquiryType}</p> // ✅ NEW
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
              className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                errors.space ? "border-red-500 error_line" : "border-[#CDCDCD]"
              }`}
            />
            {errors.space && <p className="form_error_msg">{errors.space}</p>}
          </div>

          <div className="relative">
            <input
              placeholder="Park location*"
              type="text"
              name="park_location"
              value={parkLocation}
              onChange={handleChange("parkLocation")}
              className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                errors.parkLocation
                  ? "border-red-500 error_line"
                  : "border-[#CDCDCD]"
              }`}
            />
            {errors.parkLocation && (
              <p className="form_error_msg">{errors.parkLocation}</p>
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
          className={`mb-[-5px] w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none resize-none ${
            errors.message ? "border-red-500 error_line" : "border-[#CDCDCD]"
          }`}
        />
        {errors.message && <p className="form_error_msg">{errors.message}</p>}
      </div>

      {/* Submit */}
      <div className="pt-4">
        {/* <button
          type="submit"
          className="w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
        >
          Submit
        </button> */}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
        >
          {loading ? "Sending..." : "Submit"}
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
      </div>
    </form>
  );
};

export default ContactForm;
