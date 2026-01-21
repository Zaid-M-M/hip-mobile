"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { usePathname } from "next/navigation";

export default function CForm() {
  const formRef = useRef();

  // ✅ Field States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

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

  // ✅ Error States
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    terms: "",
  });

  // ✅ Submission State
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // ✅ Regex
  const alpha_allwd = /^[A-Za-z ]+$/;
  const phoneRegex = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // ✅ Handle Field Changes with Validation
  const handleChange = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        if (!value)
          setErrors((prev) => ({ ...prev, name: "Please enter full name" }));
        else if (!alpha_allwd.test(value))
          setErrors((prev) => ({
            ...prev,
            name: "Letters and spaces only",
          }));
        else setErrors((prev) => ({ ...prev, name: "" }));
        break;

      case "email":
        setEmail(value);
        if (!value)
          setErrors((prev) => ({ ...prev, email: "Please enter email" }));
        else if (!emailRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            email: "Please enter valid email address",
          }));
        else setErrors((prev) => ({ ...prev, email: "" }));
        break;

      case "phone":
        setPhone(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            phone: "Please enter phone number",
          }));
        else if (!phoneRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            phone: "Please enter valid phone number",
          }));
        else setErrors((prev) => ({ ...prev, phone: "" }));
        break;

      case "location":
        setLocation(value);
        if (!value)
          setErrors((prev) => ({ ...prev, location: "Please enter location" }));
        else setErrors((prev) => ({ ...prev, location: "" }));
        break;

      default:
        break;
    }
  };

  // ✅ Handle CV Upload
  const handleCvChange = (e) => {
    if (e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  // ✅ Handle Checkbox
  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    if (!e.target.checked)
      setErrors((prev) => ({
        ...prev,
        terms: "Please agree to terms before submitting",
      }));
    else setErrors((prev) => ({ ...prev, terms: "" }));
  };

  // ✅ Validate all fields before submission
  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Please enter full name";
    if (!email) newErrors.email = "Please enter email";
    else if (!emailRegex.test(email))
      newErrors.email = "Please enter valid email";
    if (!phone) newErrors.phone = "Please enter phone number";
    else if (!phoneRegex.test(phone))
      newErrors.phone = "Please enter valid phone number";
    if (!location) newErrors.location = "Please enter location";
    if (!isChecked) newErrors.terms = "Please agree to terms before submitting";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit Handler (EmailJS + Google Sheet)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      // ✅ Send via EmailJS
      await emailjs.sendForm(
        "service_38rulc9", // your service ID
        "template_0vmids6", // your EmailJS template for Join Us
        formRef.current,
        "SsPYHKCapw4h-xBn_" // your public key
      );

      // ✅ Send to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbxjXwa_H__4DTdgh22-m9p3K-sKxa7a81030av4UcQRGc_bOsUPdTTrM_irlVZTU3WbIQ/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      setStatusMessage("Your details have been submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setCvFile(null);
      setIsChecked(false);
      setErrors({});
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatusMessage("Error submitting form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="joinus" className="bg-[#F5F5F5]">
      <div className="fix lg:px-16 py-[45px] lg:py-[100px]">
        <div className="flex w-full h-full items-center flex-row">
          {/* LEFT SIDE FORM */}
          <div className="bg-white md:p-10 p-[20px] lg:h-[600px] lg:py-[40px] lg:px-10 md:w-[100%] lg:w-[50%]">
            <h3 className="bw-s text-[30px] md:text-[40px] xl:text-[64px] md:leading-[45px] xl:leading-[74px] leading-[35px] tracking-tighter">
              <span className="bw-m">Join Us</span>
              <br />
              Now
            </h3>
            {/* <p className="text-[16px] leading-[26px] bw-r mt-[19px]">
              Talk to our team to explore how Horizon’s network can give your
              business an edge.
            </p> */}

            <div className="w-full pt-[20px]">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-[40px]"
              >
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="hidden" name="Page_name" value={pageName} />
                  <input type="hidden" name="Date" value={currentDate} />

                  <div className="relative">
                    <input
                      name="name"
                      placeholder="Full Name*"
                      type="text"
                      value={name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                        errors.name ? "border-red-500" : "border-[#CDCDCD]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      name="email"
                      placeholder="Email*"
                      type="email"
                      value={email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                        errors.email ? "border-red-500" : "border-[#CDCDCD]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      name="phone"
                      placeholder="Phone Number*"
                      type="text"
                      value={phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                        errors.phone ? "border-red-500" : "border-[#CDCDCD]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      name="location"
                      placeholder="Location*"
                      type="text"
                      value={location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                        errors.location ? "border-red-500" : "border-[#CDCDCD]"
                      }`}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Attach CV */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cvUpload"
                    className="text-black text-[14px] underline cursor-pointer"
                  >
                    + Attach CV*
                  </label>
                  <input
                    type="file"
                    id="cvUpload"
                    name="cv"
                    className="hidden"
                    onChange={handleCvChange}
                  />
                  {cvFile && (
                    <p className="text-sm text-gray-700">{cvFile.name}</p>
                  )}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    id="terms"
                    type="checkbox"
                    name="terms_condition"
                    className="sr-only"
                    checked={isChecked}
                    value="Yes"
                    onChange={handleCheckbox}
                  />
                  <label
                    htmlFor="terms"
                    className="flex items-center gap-3 cursor-pointer select-none"
                  >
                    <span
                      className={`inline-flex items-center justify-center w-[28px] h-[28px] border-2 border-black/70 transition-all`}
                    >
                      {isChecked && (
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6L6 10L15 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-black text-[14px] font-[Barlow]">
                      I agree to the Terms for Use of Personal Data
                    </span>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>

                  {statusMessage && (
                    <p
                      className={`mt-3 font-semibold ${
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
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="bg-[url('/culture/cformbg.jpg')] md:w-[0%] lg:w-[50%] lg:h-[600px] bg-cover lg:flex hidden items-end bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}
