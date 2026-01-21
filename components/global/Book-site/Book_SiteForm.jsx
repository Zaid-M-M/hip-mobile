"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Book_Site_Form = ({ show, onClose }) => {
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
  const [message, setMessage] = useState("");
  const [locationType, setLocationType] = useState(""); // ✅ NEW
  const [sectorType, setSectorType] = useState("");
  const [space, setSpace] = useState("");
  const [date, setDate] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  // Error states
  const [errors, setErrors] = useState({
    date: "",
    name: "",
    phone: "",
    organisation: "",
    email: "",
    message: "",
    locationType: "",
    sectorType: "",
    space: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const alpha_allwd = /^[A-Za-z ]+$/;
  const phoneRegex = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // --- Validate the whole form on submit ---
  const validateForm = () => {
    const newErrors = {};

    if (!date) newErrors.date = "Please Enter date";

    if (!name) newErrors.name = "Please Enter Full Name";
    else if (!alpha_allwd.test(name)) newErrors.name = "Letters and space only";

    if (!phone) newErrors.phone = "Please Enter Phone No";
    else if (!phoneRegex.test(phone))
      newErrors.phone = "Please Enter Valid Phone No";

    if (!organisation) newErrors.organisation = "Please Enter Organisation";

    if (!email) newErrors.email = "Please Enter Email Address";
    else if (!emailRegex.test(email))
      newErrors.email = "Please Enter Valid Email Address";

    if (!message) newErrors.message = "Please Enter Message";
    else if (!alpha_allwd.test(message))
      newErrors.message = "Letters and space only";

    if (!locationType) newErrors.locationType = "Please Select Location";

    if (!sectorType) newErrors.sectorType = "Please Select Sector";

    if (!space) newErrors.space = "Please Enter Space";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Real-time validation on typing ---
  const handleChange = (field) => (e) => {
    const value = e.target.value;

    switch (field) {
      case "date":
        setDate(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            date: "Please Enter date",
          }));
        else setErrors((prev) => ({ ...prev, date: "" }));
        break;

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

      case "message":
        setMessage(value);
        if (!value)
          setErrors((prev) => ({ ...prev, message: "Please Enter Message" }));
        else if (!alpha_allwd.test(value))
          setErrors((prev) => ({ ...prev, message: "Letters and space only" }));
        else setErrors((prev) => ({ ...prev, message: "" }));
        break;

      case "locationType": // ✅ NEW
        setLocationType(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            locationType: "Please Select Location",
          }));
        else setErrors((prev) => ({ ...prev, locationType: "" }));
        break;

      case "sectorType": // ✅ NEW
        setSectorType(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            sectorType: "Please Select Location",
          }));
        else setErrors((prev) => ({ ...prev, sectorType: "" }));
        break;

      case "space":
        setSpace(value);
        if (!value)
          setErrors((prev) => ({ ...prev, space: "Please Enter Space" }));
        else setErrors((prev) => ({ ...prev, space: "" }));
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
      date,
      name,
      phone,
      organisation,
      email,
      message,
      space,
    };

    try {
      // 🧠 Select EmailJS Template based on Enquiry Type
      let templateId = "";

      switch (locationType) {
        //-------------------------- North Zone
        case "Farukhnagar-I":
          templateId = "template_8xqcdvi";
          break;
        case "Farukhnagar-II":
          templateId = "template_8xqcdvi";
          break;
        case "Bilaspur":
          templateId = "template_8xqcdvi";
          break;
        case "Koka":
          templateId = "template_8xqcdvi";
          break;
        case "Luhari":
          templateId = "template_8xqcdvi";
          break;
        // case "Delhi-I":
        //   templateId = "template_8xqcdvi";
        //   break;
        // case "Delhi-II":
        //   templateId = "template_8xqcdvi";
        //   break;

        //-------------------------- West Zone
        case "Bhayala":
          templateId = "template_r9mkbyb";
          break;
        case "Chakan-V":
          templateId = "template_r9mkbyb";
          break;
        case "Chakan-II":
          templateId = "template_r9mkbyb";
          break;
        case "Talegaon":
          templateId = "template_r9mkbyb";
          break;
        case "Bhiwandi":
          templateId = "template_r9mkbyb";
          break;
        case "Nashik":
          templateId = "template_r9mkbyb";
          break;
        case "XSIO Park One":
          templateId = "template_r9mkbyb";
          break;
        case "XSIO Park Two":
          templateId = "template_r9mkbyb";
          break;
        case "XSIO Park Three":
          templateId = "template_r9mkbyb";
          break;
        case "XSIO Park One North":
          templateId = "template_r9mkbyb";
          break;

        //-------------------------- South Zone
        case "Kothur":
          templateId = "template_a6m74s3";
          break;
        case "Patancheru":
          templateId = "template_a6m74s3";
          break;
        case "Dobbaspet-I":
          templateId = "template_a6m74s3";
          break;
        case "Dobbaspet-II":
          templateId = "template_a6m74s3";
          break;
        case "Malur":
          templateId = "template_a6m74s3";
          break;
        case "Hoskote":
          templateId = "template_a6m74s3";
          break;
        case "Hosur":
          templateId = "template_a6m74s3";
          break;
        case "Chengalpattu":
          templateId = "template_a6m74s3";
          break;
        case "Redhills-I":
          templateId = "template_a6m74s3";
          break;
        case "Mappedu":
          templateId = "template_a6m74s3";
          break;
        case "MWC":
          templateId = "template_a6m74s3";
          break;
        case "Oragadam":
          templateId = "template_a6m74s3";
          break;
        case "Oragadam-II":
          templateId = "template_a6m74s3";
          break;

        default:
          templateId = "template_r9mkbyb";
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
        "https://script.google.com/macros/s/AKfycbxg37VAUtKWvT0jKRStPB-b2pvgSY5oUdN8r61Umd2IMWADbiLRGYrm-WQ20uFjx_AIlg/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      setStatusMessage("Your message has been sent successfully!");
      formRef.current.reset();
      setDate("");
      setName("");
      setPhone("");
      setOrganisation("");
      setEmail("");
      setMessage("");
      setLocationType("");
      setSectorType("");
      setSpace("");
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
              <h2 className="text-black lg:text-[33px] text-[25px] bw-r lg:mt-[25px] mt-[55px] uppercase">
                Book A Site Visit
              </h2>

              {/* Close Button */}
              <button
                onClick={onClose}
                className=" text-black md:text-7xl font-[100] cursor-pointer md:mt-auto mt-[30px] text-[50px]"
              >
                &times;
              </button>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="xl:space-y-8 space-y-4 sm:space-y-10 w-full mt-[20px]"
            >
              {/* location Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative xl:mb-[40px]">
                <input type="hidden" name="Page_name" value={pageName} />
                {/* <input type="hidden" name="Date" value={currentDate} /> */}
                <input
                  type="hidden"
                  name="enquiry_type_radio"
                  value={enquiryType || "Not Selected"}
                />
                <div className="relative">
                  <select
                    name="location"
                    value={locationType}
                    onChange={handleChange("locationType")} // ✅ NEW
                    className={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-[#000] placeholder-[#000] bw-r focus:outline-none ${
                      errors.locationType
                        ? "border-[#fb2c36] error_line"
                        : "border-[#CDCDCD] "
                    }`}
                  >
                    <option value="" disabled className="text-black">
                      Select Location*
                    </option>
                    <option className="text-black" value="Bhayala">
                      Bhayala
                    </option>
                    <option className="text-black" value="Bhiwandi">
                      Bhiwandi
                    </option>
                    <option className="text-black" value="Bilaspur">
                      Bilaspur
                    </option>

                    <option className="text-black" value="Chakan-II">
                      Chakan-II
                    </option>
                    <option className="text-black" value="Chakan-V">
                      Chakan-V
                    </option>
                    <option className="text-black" value="Chengalpattu">
                      Chengalpattu
                    </option>

                    <option className="text-black" value="Dobbaspet-I">
                      Dobbaspet-I
                    </option>
                    <option className="text-black" value="Dobbaspet-II">
                      Dobbaspet-II
                    </option>

                    <option className="text-black" value="Farukhnagar-I">
                      Farukhnagar-I
                    </option>
                    <option className="text-black" value="Farukhnagar-II">
                      Farukhnagar-II
                    </option>

                    <option className="text-black" value="Hoskote">
                      Hoskote
                    </option>
                    <option className="text-black" value="Hosur">
                      Hosur
                    </option>

                    <option className="text-black" value="Koka">
                      Koka
                    </option>
                    <option className="text-black" value="Kothur">
                      Kothur
                    </option>

                    <option className="text-black" value="Luhari">
                      Luhari
                    </option>

                    <option className="text-black" value="Malur">
                      Malur
                    </option>
                    <option className="text-black" value="Mappedu">
                      Mappedu
                    </option>
                    <option className="text-black" value="MWC">
                      MWC
                    </option>

                    <option className="text-black" value="Nashik">
                      Nashik
                    </option>

                    <option className="text-black" value="Oragadam">
                      Oragadam
                    </option>
                    <option className="text-black" value="Oragadam-II">
                      Oragadam-II
                    </option>

                    <option className="text-black" value="Patancheru">
                      Patancheru
                    </option>
                    <option className="text-black" value="Redhills-I">
                      Redhills-I
                    </option>

                    <option className="text-black" value="Talegaon">
                      Talegaon
                    </option>

                    <option className="text-black" value="XSIO-Park-One">
                      XSIO Park One
                    </option>
                    <option className="text-black" value="XSIO-Park-Two">
                      XSIO Park Two
                    </option>
                    <option className="text-black" value="XSIO-Park-Three">
                      XSIO Park Three
                    </option>
                    <option className="text-black" value="XSIO-Park-One-North">
                      XSIO Park One North
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
                  {errors.locationType && (
                    <p className="eqstky_error_msg">{errors.locationType}</p> // ✅ NEW
                  )}
                </div>

                {/* <div className="relative">
                  <input
                    placeholder="Selet Date*"
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleChange("date")}
                    className={`w-full border-b py-2 text-black! placeholder-[#00000]! bw-r focus:outline-none ${
                      errors.date
                        ? "border-[#fb2c36] error_line"
                        : "border-[#CDCDCD] "
                    }`}
                  />
                  {errors.date && (
                    <p className="eqstky_error_msg">{errors.date}</p>
                  )}
                </div> */}
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleChange("date")}
                    className={`w-full border-b py-2 text-black focus:outline-none ${
                      errors?.date ? "border-[#fb2c36]" : "border-[#CDCDCD]"
                    }`}
                  />

                  {errors?.date && (
                    <p className="eqstky_error_msg">{errors.date}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative xl:mb-[40px]">
                <div className="relative">
                  <select
                    name="sector"
                    value={sectorType}
                    onChange={handleChange("sectorType")} // ✅ NEW
                    className={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-[#000] placeholder-[#000] bw-r focus:outline-none ${
                      errors.sectorType
                        ? "border-[#fb2c36] error_line"
                        : "border-[#CDCDCD] "
                    }`}
                  >
                    <option value="" disabled className="text-black">
                      Select Sector*
                    </option>
                    <option className="text-black" value="3PL">
                      3PL
                    </option>
                    <option className="text-black" value="Automobile">
                      Automobile
                    </option>
                    <option className="text-black" value="Automotive Ancillary">
                      Automotive Ancillary
                    </option>
                    <option
                      className="text-black"
                      value="Construction Materials"
                    >
                      Construction Materials
                    </option>
                    <option className="text-black" value="Consumer Durable">
                      Consumer Durable
                    </option>
                    <option className="text-black" value="E-Commerce">
                      E-Commerce
                    </option>
                    <option className="text-black" value="Electronics">
                      Electronics
                    </option>
                    <option className="text-black" value="Engineering">
                      Engineering
                    </option>
                    <option className="text-black" value="FMCD">
                      FMCD
                    </option>
                    <option className="text-black" value="FMCG">
                      FMCG
                    </option>
                    <option className="text-black" value="IT">
                      IT
                    </option>
                    <option className="text-black" value="Pharma">
                      Pharma
                    </option>
                    <option className="text-black" value="Renewable Energy">
                      Renewable Energy
                    </option>
                    <option className="text-black" value="Others">
                      Others
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
                  {errors.sectorType && (
                    <p className="eqstky_error_msg">{errors.sectorType}</p> // ✅ NEW
                  )}
                </div>
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
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[40px]">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[40px]">
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

              {/* ✅ Enquiry Type */}
              <div className="lg:mb-[20px]">
                <p className="bw-r text-black mb-2">
                  {/* Enquiry Type <span className="text-gray-400">(Optional)</span> */}
                  Enquiry Type
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="enquiry_type"
                      value="Broker"
                      checked={enquiryType === "Broker"}
                      onChange={(e) => setEnquiryType(e.target.value)}
                    />
                    Broker
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="enquiry_type"
                      value="Customer"
                      checked={enquiryType === "Customer"}
                      onChange={(e) => setEnquiryType(e.target.value)}
                    />
                    Customer
                  </label>
                </div>
              </div>

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
                  className="w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
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

export default Book_Site_Form;
