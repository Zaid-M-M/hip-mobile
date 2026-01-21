"use client";
import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { usePathname } from "next/navigation";

const PopForm = ({ onClose }) => {
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

  // Form field states
  const [park, setPark] = useState("");
  const [report, setReport] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Validation states
  const [errors, setErrors] = useState({
    park: "",
    report: "",
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // 🧠 Park → Reports mapping
  const parkReports = {
    alipur_i: [
      "COMPLIANCE REPORT JUNE-2023",
      "COMPLIANCE REPORT DEC-2023",
      "COMPLIANCE REPORT JUNE-2024",
      "COMPLIANCE REPORT DEC-2024",
      "COMPLIANCE REPORT DEC-2025",
    ],
    alipur_ii: [
      "ENVIRONMENT CLEARANCE",
      "COMPLIANCE REPORT JUNE-2023",
      "COMPLIANCE REPORT DEC-2023",
      "COMPLIANCE REPORT JUNE-2024",
      "COMPLIANCE REPORT DEC-2024",
      "COMPLIANCE REPORT JUNE-2025",
      "COMPLIANCE REPORT DEC-2025",
    ],
    bilaspur: [
      "ENVIRONMENT CLEARANCE",
      "COMPLIANCE REPORT DEC-2020",
      "COMPLIANCE REPORT DEC-2021",
      "COMPLIANCE REPORT JUNE-2021",
      "COMPLIANCE REPORT JUNE-2022",
      "COMPLIANCE REPORT JUNE-2023",
      "COMPLIANCE REPORT JUNE-2024",
      "COMPLIANCE REPORT DEC-2024",
      "COMPLIANCE REPORT JUNE-2025",
      "COMPLIANCE REPORT DEC-2025",
    ],
    farukhnagar: [
      "ENVIRONMENT CLEARANCE",
      "COMPLIANCE REPORT DEC-2020",
      "COMPLIANCE REPORT DEC-2021",
      "COMPLIANCE REPORT JUNE-2021",
      "COMPLIANCE REPORT JUNE-2022",
      "COMPLIANCE REPORT DEC-2025",
    ],
    hosur: [
      "ENVIRONMENT CLEARANCE",
      "COMPLIANCE REPORT DEC-2020",
      "COMPLIANCE REPORT DEC-2021",
      "COMPLIANCE REPORT JUNE-2021",
      "COMPLIANCE REPORT JUNE-2022",
      "COMPLIANCE REPORT JUNE-2023",
      "COMPLIANCE REPORT DEC-2023",
      "COMPLIANCE REPORT JUNE-2024",
      "COMPLIANCE REPORT DEC-2024",
      "ENVIRONMENT COMPLIANCE",
    ],
    koka: ["COMPLIANCE REPORT DEC-2025"],
    luhari: [
      "COMPLIANCE REPORT JUNE-2024",
      "COMPLIANCE REPORT LLIP DEC-2024",
      "COMPLIANCE REPORT ILP DEC-2024",
      "COMPLIANCE REPORT LI DEC-2024",
      "COMPLIANCE REPORT ILP JUNE-2025",
      "COMPLIANCE REPORT JUNE-2025",
      "LI COMPLIANCE REPORT ILP JUNE-2025",
      "COMPLIANCE REPORT LI JUNE-2025",
    ],
  };

  // 🧠 Park → Report URL mapping
  const reportLinks = {
    alipur_i: {
      "COMPLIANCE REPORT JUNE-2023":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_i/Six_Monthly_Compliance_June_2023.pdf",
      "COMPLIANCE REPORT DEC-2023":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_i/Goodluck_Buildtech_22acres_Six_Monthly_Compliance_Report_DEC_2023_(2).pdf",
      "COMPLIANCE REPORT JUNE-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_i/Goodluck_Buildtech_22acres_june_2024_(1).pdf",
      "COMPLIANCE REPORT DEC-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_i/Goodluck_Buildtech_22_acres_Compliance_Report_December_2024.pdf",
      "COMPLIANCE REPORT DEC-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_i/Goodluck_Buildtech_22_Dec_2025.pdf",
    },
    alipur_ii: {
      "ENVIRONMENT CLEARANCE":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_ii/AnnexureXII_EC%20granted.pdf",
      "COMPLIANCE REPORT JUNE-2023":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_ii/Six_Monthly_Compliance_Jun_2023.pdf",
      "COMPLIANCE REPORT DEC-2023":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_ii/Six_Monthly_Compliance_Dec_2023.pdf",
      "COMPLIANCE REPORT JUNE-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_ii/Six_Monthly_Compliance_Jun_2024.pdf",
      "COMPLIANCE REPORT DEC-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_ii/Six_Monthly_Compliance_Dec_2024.pdf",
      "COMPLIANCE REPORT JUNE-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_ii/Compliance_Report_June_2025.pdf.pdf",
      "COMPLIANCE REPORT DEC-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/alipur_ii/Compliance_Report_Dec_2025.pdf.pdf",
    },
    bilaspur: {
      "ENVIRONMENT CLEARANCE":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Environmet%20Clearance.pdf",
      "COMPLIANCE REPORT DEC-2020":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2020.pdf",
      "COMPLIANCE REPORT DEC-2021":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2021.pdf",
      "COMPLIANCE REPORT JUNE-2021":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2021.pdf",
      "COMPLIANCE REPORT JUNE-2022":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2022.pdf",
      "COMPLIANCE REPORT JUNE-2023":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2023.pdf",
      "COMPLIANCE REPORT JUNE-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_with_Annexure_Embassy_June_2024.pdf",
      "COMPLIANCE REPORT DEC-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_with_Annexure_Horizon_Dec_2024.pdf",
      "COMPLIANCE REPORT JUNE-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Horizon_Industrial_Parks_SMCR_June_2025.pdf",
      "COMPLIANCE REPORT DEC-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Horizon_Industrial_Parks_SMCR_Dec_2025.pdf",
    },
    farukhnagar: {
      "ENVIRONMENT CLEARANCE":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Environment%20clearance.pdf",
      "COMPLIANCE REPORT DEC-2020":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_Dec_20.pdf",
      "COMPLIANCE REPORT DEC-2021":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_Dec_21.pdf",
      "COMPLIANCE REPORT JUNE-2021":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_21.pdf",
      "COMPLIANCE REPORT JUNE-2022":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_22.pdf",
      "COMPLIANCE REPORT DEC-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_Dec_25.pdf",
    },
    hosur: {
      "ENVIRONMENT CLEARANCE":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Environment%20Clearance.pdf",
      "COMPLIANCE REPORT DEC-2020":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_Dec_20.pdf",
      "COMPLIANCE REPORT DEC-2021":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_Dec_21.pdf",
      "COMPLIANCE REPORT JUNE-2021":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_21.pdf",
      "COMPLIANCE REPORT JUNE-2022":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_22.pdf",
      "COMPLIANCE REPORT JUNE-2023":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_23.pdf",
      "COMPLIANCE REPORT DEC-2023":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_Dec_23.pdf",
      "COMPLIANCE REPORT JUNE-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_24.pdf",
      "COMPLIANCE REPORT DEC-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_Dec_24.pdf",
      "ENVIRONMENT COMPLIANCE":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Envorinment_Compliance_report.pdf",
    },
    koka: {
      "COMPLIANCE REPORT DEC-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/koka/Six_Monthly_Compliance_Dec_25.pdf",
    },
    luhari: {
      "COMPLIANCE REPORT JUNE-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/luhari/Compliance_Report_June_24.pdf",
      "COMPLIANCE REPORT LLIP DEC-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/luhari/Compliance_Report_LLIP_Dec_24.pdf",
      "COMPLIANCE REPORT ILP DEC-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/luhari/Six_Month_Compliance_report_ILP_Dec_24.pdf",
      "COMPLIANCE REPORT LI DEC-2024":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/luhari/Six_Month_Compliance_report_LI_Logo_Dec_24.pdf",
      "COMPLIANCE REPORT ILP JUNE-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/luhari/Compliance_Parks_ILP_June25.pdf",
      "COMPLIANCE REPORT JUNE-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/luhari/Compliance_Parks_LI_June25.pdf",
      "LI COMPLIANCE REPORT ILP JUNE-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/luhari/LI_Compliance_Report_ILP_June25.pdf",
      "COMPLIANCE REPORT LI JUNE-2025":
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/luhari/LI_Compliance_Report_June25.pdf",
    },
  };

  // Regex
  const alpha_allwd = /^[A-Za-z ]+$/;
  const phoneRegex = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // --- Validate form ---
  const validateForm = () => {
    const newErrors = {};
    if (!park) newErrors.park = "Please select park";
    if (!report) newErrors.report = "Please select report";
    if (!name) newErrors.name = "Please enter full name";
    else if (!alpha_allwd.test(name)) newErrors.name = "Letters and space only";
    if (!phone) newErrors.phone = "Please enter phone number";
    else if (!phoneRegex.test(phone))
      newErrors.phone = "Please enter valid phone number";
    if (!email) newErrors.email = "Please enter email address";
    else if (!emailRegex.test(email))
      newErrors.email = "Please enter valid email address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Real-time validation + dependent logic ---
  const handleChange = (field) => (e) => {
    const value = e.target.value;
    switch (field) {
      case "park":
        setPark(value);
        setReport(""); // reset report when park changes
        setErrors((prev) => ({
          ...prev,
          park: value ? "" : "Please select park",
        }));
        break;
      case "report":
        setReport(value);
        setErrors((prev) => ({
          ...prev,
          report: value ? "" : "Please select report",
        }));
        break;
      case "name":
        setName(value);
        if (!value)
          setErrors((prev) => ({ ...prev, name: "Please enter full name" }));
        else if (!alpha_allwd.test(value))
          setErrors((prev) => ({ ...prev, name: "Letters and space only" }));
        else setErrors((prev) => ({ ...prev, name: "" }));
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
      case "email":
        setEmail(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            email: "Please enter email address",
          }));
        else if (!emailRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            email: "Please enter valid email address",
          }));
        else setErrors((prev) => ({ ...prev, email: "" }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    if (!validateForm()) return;
    setLoading(true);

    // ✅ Get the selected park/report PDF link
    const selectedPark = park;
    const selectedReport = report;
    const pdfLink = reportLinks[selectedPark]?.[selectedReport];

    // ✅ Open a blank tab early (to avoid popup blocker)
    let newTab;
    if (pdfLink) {
      newTab = window.open("", "_blank");
      newTab.document.write("<p>Loading your report...</p>");
    }

    try {
      // Send via EmailJS
      await emailjs.sendForm(
        "service_38rulc9",
        "template_nvksf0m",
        formRef.current,
        "SsPYHKCapw4h-xBn_"
      );

      // Send to Google Sheet
      await fetch(
        "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      setStatusMessage("Report request submitted successfully!");

      // ✅ Reset form
      formRef.current.reset();
      setPark("");
      setReport("");
      setName("");
      setPhone("");
      setEmail("");
      setErrors({});

      // ✅ Navigate new tab to the PDF link
      if (newTab && pdfLink) {
        newTab.location.href = pdfLink;
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("Error submitting form. Try again later.");

      // ❌ If error, close the opened tab
      if (newTab && !newTab.closed) {
        newTab.close();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-[#F5F5F5] z-50 max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh]">
      <button
        onClick={onClose}
        className="absolute cursor-pointer top-5 lg:top-4 right-4 text-black hover:text-gray-600"
      >
        <X size={28} />
      </button>

      <div className="flex w-full h-full items-center flex-row">
        <div className="bg-white md:p-10 p-5 h-fit w-full">
          <h3 className="bw-s text-[21px] leading-[29px] xl:leading-[45px] xl:text-[35px]">
            <span className="bw-m">DOWNLOAD COMPLIANCE REPORTS</span>
          </h3>

          <div className="w-full pt-[20px]">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-[40px]"
            >
              {/* Row 1: Park + Report */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-[15px] mb-[15px]">
                <input type="hidden" name="Page_name" value={pageName} />
                <input type="hidden" name="Date" value={currentDate} />
                <div className="relative">
                  <select
                    name="enquiry"
                    value={park}
                    onChange={handleChange("park")}
                    className={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-black bw-r focus:outline-none ${
                      errors.park ? "border-red-500" : "border-[#CDCDCD]"
                    }`}
                  >
                    <option value="" disabled>
                      Select Park*
                    </option>
                    {Object.keys(parkReports).map((key) => (
                      <option key={key} value={key}>
                        {key.replace("_", " ").toUpperCase()}
                      </option>
                    ))}
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
                  {errors.park && (
                    <p className="form_error_msg">{errors.park}</p>
                  )}
                </div>

                <div className="relative">
                  <select
                    name="report"
                    value={report}
                    onChange={handleChange("report")}
                    disabled={!park}
                    className={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-black bw-r focus:outline-none ${
                      errors.report ? "border-red-500" : "border-[#CDCDCD]"
                    } ${!park ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  >
                    <option value="" disabled>
                      {park ? "Select Report*" : "Select Park First*"}
                    </option>
                    {park &&
                      parkReports[park]?.map((rep, idx) => (
                        <option key={idx} value={rep}>
                          {rep}
                        </option>
                      ))}
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
                  {errors.report && (
                    <p className="form_error_msg">{errors.report}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-[15px] mb-[15px]">
                <div className="relative">
                  <input
                    placeholder="Name*"
                    name="name"
                    value={name}
                    onChange={handleChange("name")}
                    className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                      errors.name ? "border-red-500" : "border-[#CDCDCD]"
                    }`}
                  />
                  {errors.name && (
                    <p className="form_error_msg">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    placeholder="Phone*"
                    name="phone"
                    value={phone}
                    onChange={handleChange("phone")}
                    className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                      errors.phone ? "border-red-500" : "border-[#CDCDCD]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="form_error_msg">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Email */}
              <div className="relative">
                <input
                  placeholder="Email*"
                  name="email"
                  value={email}
                  onChange={handleChange("email")}
                  className={`w-full border-b py-2 text-black placeholder-black bw-r focus:outline-none ${
                    errors.email ? "border-red-500" : "border-[#CDCDCD]"
                  }`}
                />
                {errors.email && (
                  <p className="form_error_msg">{errors.email}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition"
              >
                {loading ? "Submitting..." : "Download Report"}
              </button>

              {statusMessage && (
                <p
                  className={`mt-4 font-semibold text-center ${
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
  );
};

export default PopForm;
