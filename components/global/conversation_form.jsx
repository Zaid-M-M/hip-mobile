"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { usePathname } from "next/navigation";

const Conversation_form = () => {
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

    if (!organisation) newErrors.organisation = "Please Enter Organisation";

    if (!email) newErrors.email = "Please Enter Email Address";
    else if (!emailRegex.test(email))
      newErrors.email = "Please Enter Valid Email Address";

    if (!parkLocation) newErrors.parkLocation = "Please Enter Park Location";

    if (!space) newErrors.space = "Please Enter Space";

    if (!message) newErrors.message = "Please Enter Message";
    else if (!alpha_allwd.test(message))
      newErrors.message = "Letters and space only";

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
      // 1️⃣ Send via EmailJS
      await emailjs.sendForm(
        "service_38rulc9",
        "template_5iougvq",
        formRef.current,
        "SsPYHKCapw4h-xBn_"
      );

      await fetch(
        "https://script.google.com/macros/s/AKfycbzApJansIkse1MoyXVygffQ1DxW1YH5zIn7YJ28DVYy27hkmCcGw0nrfG9ib6vAXyZsRA/exec",
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

      setStatusMessage("Your message has been sent successfully!");
      formRef.current.reset();
      setName("");
      setPhone("");
      setOrganisation("");
      setEmail("");
      setParkLocation("");
      setSpace("");
      setMessage("");
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
    <div>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-[60px]">
        {/* Row 1 */}
        <div className="mb-[20px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 1440:mb-[50px]  grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="hidden" name="Page_name" value={pageName} />
          <input type="hidden" name="Date" value={currentDate} />
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name*"
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
              type="number"
              placeholder="Phone No*"
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

        {/* Row 2 */}
        <div className="mb-[20px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 1440:mb-[50px]    grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Organisation*"
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
              type="text"
              placeholder="Park Location*"
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

        {/* Row 3 */}
        <div className="mb-[20px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 1440:mb-[50px]    grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div className="relative">
            <input
              placeholder="Space required*"
              name="space"
              value={space}
              onChange={handleChange("space")}
              className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                errors.space ? "border-red-500 error_line" : "border-[#CDCDCD]"
              }`}
            />
            {errors.space && <p className="form_error_msg">{errors.space}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="relative mb-[20px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] ">
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
      </form>
    </div>
  );
};

export default Conversation_form;
