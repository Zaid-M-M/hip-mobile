"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ClientTestimonialCard = ({ testimonial }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get client information
  const getClientName = () => {
    if (testimonial.acf?.client_name) return testimonial.acf.client_name;
    return testimonial.client_name || "Client Name";
  };

  const getClientPosition = () => {
    if (testimonial.acf?.client_position)
      return testimonial.acf.client_position;
    return testimonial.client_position || "Position";
  };

  const getCompanyName = () => {
    if (testimonial.acf?.company_name) return testimonial.acf.company_name;
    return testimonial.company_name || "Company";
  };

  const getTestimonialText = () => {
    if (testimonial.acf?.testimonial_text)
      return testimonial.acf.testimonial_text;
    if (typeof testimonial.content === "object") {
      return testimonial.content.rendered || testimonial.content;
    }
    return (
      testimonial.content ||
      testimonial.testimonial_text ||
      "Great experience working together."
    );
  };

  const getClientImage = () => {
    if (testimonial.acf?.client_image) return testimonial.acf.client_image;
    return testimonial.client_image || "";
  };

  // Get company logo
  const getCompanyLogo = () => {
    if (testimonial.acf?.company_logo) return testimonial.acf.company_logo;
    return testimonial.company_logo || null;
  };

  return (
    <motion.div
      className="group cursor-pointer bg-white border border-[#CDCDCD] p-[24px] md:p-[32px] transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: [0.7, 0, 0.4, 1] },
      }}
    >
      <div className="flex flex-col h-full">
        {/* Quote icon */}
        <motion.div
          className="mb-[20px]"
          animate={{
            rotate: isHovered ? 15 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12.72C0 6.6 2.4 1.68 7.2 1.68C9.6 1.68 10.8 3.36 10.8 5.52C10.8 7.68 9.6 9.36 7.2 9.36C6 9.36 5.04 8.88 4.32 7.92C4.32 11.76 5.04 14.88 6.48 17.28L0 24C0 19.92 0 16.32 0 12.72ZM20.48 12.72C20.48 6.6 22.88 1.68 27.68 1.68C30.08 1.68 31.28 3.36 31.28 5.52C31.28 7.68 30.08 9.36 27.68 9.36C26.48 9.36 25.52 8.88 24.8 7.92C24.8 11.76 25.52 14.88 26.96 17.28L20.48 24C20.48 19.92 20.48 16.32 20.48 12.72Z"
              fill="#AC38D9"
            />
          </svg>
        </motion.div>

        {/* Testimonial text */}
        <div className="mb-[20px]">
          <p className="bw-r text-[16px] md:text-[18px] text-[#333333] leading-[1.6] line-clamp-6">
            {getTestimonialText()}
          </p>
        </div>

        {/* Client info */}
        <div className="flex items-center gap-[16px]">
          {/* Client image */}
          <div className="w-[60px] h-[60px] overflow-hidden flex-shrink-0">
            <Image
              src={getClientImage()}
              alt={getClientName()}
              width={60}
              height={60}
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.src = "";
              }}
            />
          </div>

          {/* Client details */}
          <div className="flex-1">
            <h4 className="bw-m text-[16px] text-[#000000] mb-[4px]">
              {getClientName()}
            </h4>
            <p className="bw-r text-[14px] text-[#666666] mb-[4px]">
              {getClientPosition()}
            </p>
            <div className="flex items-center gap-[8px]">
              {/* Company logo if available */}
              {getCompanyLogo() && (
                <div className="w-[24px] h-[24px] relative">
                  <Image
                    src={getCompanyLogo()}
                    alt={getCompanyName()}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}
              <p className="bw-m text-[14px] text-[#AC38D9]">
                {getCompanyName()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientTestimonialCard;
