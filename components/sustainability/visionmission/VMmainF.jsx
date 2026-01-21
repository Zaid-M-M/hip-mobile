"use client";
import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function VMmainF() {
  const container_new = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container_new,
    offset: ["start start", "end end"],
  });

  /* -------------------------------------------------
     IMPORTANT FIX:
     ❌ Remove custom wheel override (breaks all scrolling)
     ✔ Let Lenis handle smoothing normally
  ---------------------------------------------------*/

  return (
    <>
      {/* ---------- Desktop Scroll Section ---------- */}
      <main
        ref={container_new}
        className="hidden w-full lg:block"
        style={{ height: "135vh" }}
      >
        <ReactLenis root>
          <Purpose progress={scrollYProgress} />
        </ReactLenis>
      </main>

      {/* ---------- Mobile Static Section ---------- */}
      <section className="lg:hidden grid grid-cols-1 gap-6 px-[5%] py-12 bg-black">
        <div className="flex flex-col gap-0">
          <img
            src="/sustainability/ripple.jpg"
            alt="ESG Vision"
            className="w-full object-cover h-[250px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
          />
          <div
            className="w-full p-5 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] flex flex-col"
            style={{ background: "#0db14b" }}
          >
            <h3 className="text-white text-[30px] md:text-[28px] bw-m mb-2">
              ESG Vision
            </h3>
            <p className="text-white text-[16px] md:text-[18px] leading-[24px]">
              To set new benchmarks for India’s industrial and logistics sector
              by delivering more than spaces — building responsible,
              future-ready ecosystems that serve our customers, communities, and
              climate.
            </p>
          </div>
        </div>

        {/* ESG Mission */}
        <div className="flex flex-col gap-0">
          <img
            src="/sustainability/stones.jpg"
            alt="ESG Mission"
            className="w-full object-cover h-[250px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
          />
          <div
            className="w-full p-5 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] flex flex-col"
            style={{ background: "#8A52A0" }}
          >
            <h3 className="text-white text-[30px] md:text-[28px] bw-m mb-2">
              ESG Mission
            </h3>
            <div className="flex flex-col gap-[17px] mt-2">
              {[
                {
                  ic: "/sustainability/m1.svg",
                  pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
                },
                {
                  ic: "/sustainability/m2.svg",
                  pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
                },
                {
                  ic: "/sustainability/m3.svg",
                  pg: "Embed diversity, health, safety, and learning into our people and community practices.",
                },
                {
                  ic: "/sustainability/m4.svg",
                  pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-[14px] lg:gap-[36px] items-start"
                >
                  <img
                    src={item.ic}
                    alt={`mission-${idx}`}
                    className="w-[54px] h-[54px]"
                  />
                  <span className="text-white text-[16px] leading-[20px]">
                    {item.pg}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- DESKTOP ANIMATION ---------- */
function Purpose({ progress }) {
  const container1 = useRef(null);
  const [is2xl, setIs2xl] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIs2xl(window.innerWidth >= 1536);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  /* ---------- FASTER SCROLL RANGES (0 → 0.27) ---------- */
  const frst_img_width = useTransform(progress, [0, 0.6], ["50%", "0%"]);
  const third_img_width = useTransform(progress, [0, 0.6], ["0%", "50%"]);

  const prps_dv_height = useTransform(progress, [0, 0.6], [420, 0]);
  const msn_dv_height = useTransform(
    progress,
    [0, 0.6],
    [is2xl ? 204 : 170, is2xl ? 636 : 600]
  );

  const msn_dv_opacity = useTransform(progress, [0, 0.6], [0, 1]);
  const prps_dv_opacity = useTransform(progress, [0, 0.6], [1, 0]);

  const p_dv_height = useTransform(progress, [0, 0.6], [0, 450]);
  const gapbetween = useTransform(progress, [0, 0.6], [20, 0]);
  const gapbetween2 = useTransform(progress, [0, 0.6], [0, 20]);

  const iconBoxes = [
    {
      ic: "/sustainability/m1.svg",
      pg: "Deliver beyond carbon reduction, enabling decarbonised operations and climate resilience.",
    },
    {
      ic: "/sustainability/m2.svg",
      pg: "Lead with a design-first mindset, integrating sustainability and global best practices.",
    },
    {
      ic: "/sustainability/m3.svg",
      pg: "Embed diversity, health, safety, and learning into our people and community practices.",
    },
    {
      ic: "/sustainability/m4.svg",
      pg: "Build trust through accountable governance, strong partnerships, and transparent performance.",
    },
  ];

  return (
    <div
      ref={container1}
      className="bg-white sticky top-0 w-full min-h-screen overflow-hidden flex py-12 2xl:py-24"
    >
      <div className="fixup w-full">
        <motion.div>
          <div
            className="relative justify-between w-full flex overflow-hidden"
            style={{ gap: gapbetween }}
          >
            {/* Left image */}
            <motion.div
              style={{ width: frst_img_width }}
              className="relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
            >
              <img
                src="/sustainability/ripple.jpg"
                className="min-w-full pr-[20px] h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
              />
            </motion.div>

            {/* Center boxes */}
            <div className="w-[50%] overflow-hidden">
              <div className="relative flex flex-col">
                {/* Vision Box */}
                <motion.div
                  style={{
                    height: prps_dv_height,
                    background: "#0db14b",
                  }}
                  className="relative w-full justify-center flex flex-col overflow-hidden px-[30px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
                >
                  <motion.h3
                    style={{ opacity: prps_dv_opacity }}
                    className="bw-m text-[56px] 2xl:text-[76px] text-white"
                  >
                    ESG Vision
                  </motion.h3>

                  <motion.p
                    style={{ opacity: prps_dv_opacity }}
                    className="text-[25px] pt-5 bw-r text-white leading-[33px] max-w-[530px]"
                  >
                    To set new benchmarks for India’s industrial and logistics
                    sector by delivering more than spaces — building
                    responsible, future-ready ecosystems that serve our
                    customers, communities, and climate.
                  </motion.p>

                  <motion.img
                    style={{ opacity: prps_dv_opacity }}
                    src="/sustainability/plant3.png"
                    className="absolute top-0 right-0"
                  />
                </motion.div>

                {/* Mission Box */}
                <motion.div
                  style={{
                    height: msn_dv_height,
                    background: "#8A52A0",
                    gap: gapbetween2,
                  }}
                  className="w-full flex flex-col mt-5 justify-start pt-10 overflow-hidden px-[30px] relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
                >
                  <motion.h3 className="bw-m text-[56px] 2xl:text-[76px] text-white">
                    ESG Mission
                  </motion.h3>

                  <motion.div
                    style={{
                      opacity: msn_dv_opacity,
                      height: p_dv_height,
                    }}
                    className="text-white overflow-hidden text-[18px] leading-[28px] xl:leading-[30px] xl:text-[20px] bw-r max-w-[530px]"
                  >
                    <div className="flex flex-col gap-[20px]">
                      {iconBoxes.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex gap-4 2xl:gap-[60px] items-center"
                        >
                          <img
                            src={item.ic}
                            className="2xl:w-[90px] w-[75px] aspect-square"
                          />
                          <span>{item.pg}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.img
                    style={{ opacity: msn_dv_opacity }}
                    src="/sustainability/plant4.png"
                    className="absolute right-0 top-0"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              style={{ width: third_img_width }}
              className="relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
            >
              <img
                src="/sustainability/stones.jpg"
                className="min-w-full pl-[20px] h-full object-cover rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
