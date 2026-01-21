"use client";

// import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Btn from "../../global/Btn";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Newsletter = () => {
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

  const [subscriber_email, setSubscriber_email] = useState("");

  // ✅ Error States
  const [errors, setErrors] = useState({
    subscriber_email: "",
  });

  // ✅ Submission State
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // ✅ Regex
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // ✅ Handle Field Changes with Validation
  const handleChange = (field, value) => {
    switch (field) {
      case "subscriber_email":
        setSubscriber_email(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            subscriber_email: "Please enter email",
          }));
        else if (!emailRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            subscriber_email: "Please enter valid email address",
          }));
        else setErrors((prev) => ({ ...prev, subscriber_email: "" }));
        break;
    }
  };

  // ✅ Validate all fields before submission
  const validateForm = () => {
    const newErrors = {};
    if (!subscriber_email) newErrors.subscriber_email = "Please enter email";
    else if (!emailRegex.test(subscriber_email))
      newErrors.subscriber_email = "Please enter valid email";
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
        "template_y80dvie", // your EmailJS template for Join Us
        formRef.current,
        "SsPYHKCapw4h-xBn_" // your public key
      );

      // ✅ Send to Google Sheets
      // await fetch(
      //   "https://script.google.com/macros/s/AKfycbxjXwa_H__4DTdgh22-m9p3K-sKxa7a81030av4UcQRGc_bOsUPdTTrM_irlVZTU3WbIQ/exec",
      //   {
      //     method: "POST",
      //     body: new FormData(formRef.current),
      //   }
      // );

      setStatusMessage("Your details have been submitted successfully!");
      setSubscriber_email("");
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
    <div
      className="h-full lg:h-[464px] overflow-hidden w-full relative bg-cover  bg-center"
      style={{ backgroundImage: "url('/Newsletter_bg.jpg')" }}
    >
      <div className="fix">
        <div className="flex items-center sm:items-end md:justify-center lg:justify-between ">
          {/* Left Section */}
          <div className="flex flex-1 items-end pl-0 md:pl-[0px] lg:pl-[40px] xl:pl-[0px] py-[45px] md:py-[70px]">
            <div className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[20px]">
              {/* Title */}
              <div className="flex flex-col gap-0 md:gap-0 lg:gap-[4px]">
                <motion.h2
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: 0,
                    ease: [1, 0, 0.2, 1],
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className=" text-[36px] sm:text-[48px] md:text-[52px] xl:text-[56px] bw-m leading-[120%] text-white"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  Sign Up For Our
                </motion.h2>

                <motion.h2
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.25,
                    ease: [0.7, 0, 0.4, 1],
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[56px] bw-r sm:leading-2.5 md:leading-[120%] text-white"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  Newsletter
                </motion.h2>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] text-[#ffffff] inter-r leading-[22px] sm:leading-[28px] lg:leading-[32px] w-[60%] md:w-[80%]"
              >
                Let’s Co-Create The Right Solution For Your Business
              </motion.p>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.35, 1] }}
                viewport={{ once: true, amount: 0.1 }}
                className="pt-[8px] sm:pt-[10px]"
              >
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="flex gap-[10px] md:gap-[16px] flex-col md:flex-row">
                    <input type="hidden" name="Page_name" value={pageName} />
                    <input type="hidden" name="Date" value={currentDate} />
                    <div className="relative">
                      <input
                        type="email"
                        name="subscriber_email"
                        value={subscriber_email}
                        onChange={(e) =>
                          handleChange("subscriber_email", e.target.value)
                        }
                        className="bg-[#fff] px-[14px] w-[100%] md:w-[270px] h-[47px] sm:w-[270px] sm:py-[10px] lg:w-[314px] lg:py-[14px] focus:outline-none focus:ring-0 focus:border-none"
                        placeholder="Enter your email*"
                      />
                      {errors.subscriber_email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subscriber_email}
                        </p>
                      )}
                    </div>
                    {/* <Btn text={"Subscribe"} /> */}
                    <div>
                      <button
                        type="Subscribe"
                        disabled={loading}
                        className="w-full bg-black text-white py-3 px-5 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
                      >
                        {loading ? "Subscribing..." : "Subscribe"}
                      </button>
                    </div>
                  </div>

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

                  <p className="text-[#ffffff] pt-[10px] inter-r text-[12px] sm:text-sm">
                    We care about your data in our{" "}
                    <Link className="underline" href={"/privacy-policy"}>
                      privacy policy
                    </Link>
                  </p>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden sm:flex items-end justify-center flex-auto md:-ml-36 xl:-mr-24 2xl:ml-44 ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.1 }}
              style={{ width: 324, height: 429 }}
            >
              <Image
                src="/peoplesafety.png"
                alt="Safety Image"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
