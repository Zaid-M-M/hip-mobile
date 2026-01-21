"use client";
import React from "react";
import { motion } from "framer-motion";
import ClientTestimonialCard from "./ClientTestimonialCard";

const ClientTestimonialGrid = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-[60px]">
        <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
          No testimonials found
        </div>
        <div className="bw-r text-[16px] text-[#999999]">
          Check back later for client feedback.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px]">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: [0.7, 0, 0.4, 1] 
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ClientTestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonialGrid;