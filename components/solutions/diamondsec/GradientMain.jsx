"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { accordionItems } from "./accordionItems";
import Accordion from "./Accordion";
import GradientDiamond from "./GradientDiamond";
import DHead from "./DHead";
import Link from "next/link";
import TransitionLink from "@/src/app/TransitionLink";
import { ReactLenis } from "lenis/react";
// Main Section
export default function GradientMain() {
  const [activeId, setActiveId] = useState(1); // ✅ First accordion active by default

  return (
    <ReactLenis root>
      <section className="bg-black min-h-[100vh] flex flex-col py-12 xl:py-24 overflow-hidden">
        <DHead />
        <div className="w-full grid md:grid-cols-2 gap-8 items-center 1440:pr-20 pr-[5%] mt-[5%] lg:mt-20 pl-[max(5%,calc((100vw-1350px)/2))]">
          {/* Left side - Accordions */}
          <div className="relative flex flex-col gap-0 xl:gap-12 z-20 lg:w-[90%] w-full">
            <div className="1440:min-h-[576px] xl:min-h-[600px] min-h-[400px]">
              {accordionItems.map((item) => (
                <Accordion
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  Icon={item.icon}
                  activeId={activeId}
                  setActiveId={setActiveId}
                />
              ))}
            </div>
            <TransitionLink
              href="/enabling-agile-growth/"
              className="text-white items-center flex gap-2 bw-r text-[16px] uppercase"
            >
              <span className="bw-m">AGile Growth</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  d="M7.04688 27.0119L26.7863 7.27246"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.04688 7.27246H26.7863V27.0119"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </TransitionLink>
          </div>
          {/* Right side - Diamond */}
          <div className="pb-20 scale-[80%] lg:!flex !hidden">
            <GradientDiamond activeId={activeId} />
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
