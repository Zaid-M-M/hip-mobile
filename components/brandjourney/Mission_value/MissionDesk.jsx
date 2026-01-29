"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function MissionDesk() {
  const container_new = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container_new,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container_new} className="w-full" style={{ height: "250vh" }}>
      <Purpose progress={scrollYProgress} />
    </main>
  );
}

function Purpose({ progress }) {
  const container1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container1,
    offset: ["start end", "start start"],
  });

  // First box
  const frst_img_width = useTransform(progress, [0, 0.4], ["50%", "0%"]);

  // Purpose box
  const prps_dv_height = useTransform(progress, [0, 0.4], ["350px", "170px"]);
  const prps_dv_bg = useTransform(progress, [0, 0.4], ["#0db14b", "#fff"]);
  const prps_dv_hd = useTransform(progress, [0, 0.4], ["#fff", "#000"]);
  const prps_dv_p = useTransform(progress, [0, 0.4], ["1", "0"]);
  const prps_dv_vctr = useTransform(progress, [0, 0.4], ["1", "0"]);

  // Mission box
  const msn_dv_height = useTransform(progress, [0, 0.4], ["170px", "350px"]);
  const msn_dv_bg = useTransform(progress, [0, 0.4], ["#FFFFFF", "#f47920"]);
  const msn_dv_hd = useTransform(progress, [0, 0.4], ["#000", "#fff"]);
  const msn_dv_vctr = useTransform(progress, [0, 0.4], ["0", "1"]);

  const scnd_box_height = useTransform(
    progress,
    [0.5, 0.9],
    ["540px", "470px"],
  );

  // Third box
  const third_img_height = useTransform(
    progress,
    [0.5, 0.9],
    ["540px", "470px"],
  );
  const third_img_width = useTransform(progress, [0, 0.4], ["0%", "50%"]);

  const Mission_bx_Y = useTransform(progress, [0.5, 0.9], ["0", "-120%"]);
  const third_img_Y = useTransform(progress, [0.5, 0.9], ["0", "-120%"]);

  // Fourth box
  const fourth_box = useTransform(progress, [0.5, 0.9], ["0%", "-100%"]);
  const fourth_box_opacity = useTransform(progress, [0.5, 0.9], ["0", "1"]);

  const fadeIn = useTransform(progress, [0, 0.4], [0, 1]);
  const fadeOut = useTransform(progress, [0.5, 0.9], [1, 0]);

  const [msn_dv_p, setMsnDvP] = useState(0);

  useEffect(() => {
    const unsubscribe = progress.on("change", () => {
      const fi = fadeIn.get();
      const fo = fadeOut.get();
      setMsnDvP(fi * fo);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      ref={container1}
      // className="bg-[#F5F5F5] sticky top-0 w-full py-[90px] 1280:py-[40px] 1600:pt-[80px] 1920:py-[90px] 1920:h-[750px] 1600:h-[750px] 1280:h-[640px] overflow-hidden"
      className="bg-[#F5F5F5] sticky top-0 w-full 1280:pt-[60px] 1440:pt-[100px] 1920:pt-[220px] 1920:h-[950px] 1440:h-[750px] 1280:h-[680px] overflow-hidden"
    >
      <motion.div>
        <div className="relative fix">
          <div className="">
            <div className="relative flex gap-[20px] overflow-hidden">
              {/*------------ First box ------------*/}
              <motion.div
                style={{ width: frst_img_width }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative pr-[0px]"
              >
                <img
                  src="/brand_journey/purpose_img.jpg"
                  className="w-full object-cover h-[540px]"
                />
              </motion.div>

              {/*------------ Second box ------------*/}
              <motion.div
                style={{ y: Mission_bx_Y, height: scnd_box_height }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[50%] pl-[0px] pr-[0px] overflow-hidden"
              >
                <div className="relative flex flex-col gap-[20px]">
                  {/*------------ Purpose box ------------*/}
                  <motion.div
                    style={{ height: prps_dv_height, background: prps_dv_bg }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full overflow-hidden py-[50px] px-[30px]"
                  >
                    <motion.h3
                      style={{ color: prps_dv_hd }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bw-m text-[76px] leading-[60px] mb-[15px] tracking-[-3.04px]"
                    >
                      <span className="bw-l">Our</span> Purpose{" "}
                    </motion.h3>
                    <motion.p
                      style={{ opacity: prps_dv_p }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="text-[25px] bw-m text-white leading-[33px] w-[530px]"
                    >
                      Enable our customers succeed by proactively delivering
                      agile solutions for accelerated growth.
                    </motion.p>
                    <motion.img
                      style={{ opacity: prps_dv_vctr }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src="/brand_journey/purpose_arrow.svg"
                      className="absolute right-[30px] top-[78px]"
                    />
                  </motion.div>

                  {/*------------ Mission box ------------*/}
                  <motion.div
                    style={{ height: msn_dv_height, background: msn_dv_bg }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full overflow-hidden pt-[50px] pb-[50px] px-[30px] relative"
                  >
                    <motion.h3
                      style={{ color: msn_dv_hd }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bw-m text-[76px] leading-[60px] mb-[15px] tracking-[-3.04px]"
                    >
                      <span className="bw-l">Our</span> Mission{" "}
                    </motion.h3>
                    <motion.p
                      style={{ opacity: msn_dv_p }}
                      transition={{ duration: 0.2, ease: "linear" }}
                      className="text-white text-[25px] bw-m leading-[33px] w-[530px]"
                    >
                      Make Horizon the dominant and preferred industrial and
                      warehousing partner, sustainably delivering benchmark
                      quality and superior returns.
                    </motion.p>
                    <motion.img
                      style={{ opacity: msn_dv_vctr }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src="/brand_journey/purpose_arrow.svg"
                      className="absolute right-[30px] top-[78px]"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/*------------ Third box ------------*/}
              <motion.div
                style={{
                  width: third_img_width,
                  y: third_img_Y,
                  height: third_img_height,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative pl-[0px] overflow-hidden"
              >
                <img
                  src="/brand_journey/mission_img.jpg"
                  className="w-full  h-[540px] object-cover"
                />
              </motion.div>
            </div>

            {/*------------ fourth box ------------*/}
            <motion.div
              style={{ y: fourth_box, opacity: fourth_box_opacity }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="w-[100%]"
            >
              <div className="relative flex gap-[20px] pl-[20px] mt-[0px] h-[600px]">
                {/*------------ Value box ------------*/}
                <div className="relative overflow-hidden py-[25px] px-[30px] w-[50%] bg-[#8F53A1]">
                  <motion.img
                    style={{ opacity: msn_dv_vctr }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src="/brand_journey/value_arrow.svg"
                    className="absolute right-[30px] top-[78px]"
                  />
                  <h3
                    style={{ color: prps_dv_hd }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white bw-m text-[76px] leading-[67px] mb-[10px] tracking-[-3.04px]"
                  >
                    <span className="bw-l">Our</span> Values{" "}
                  </h3>
                  <p className="bw-m text-white text-[25px] leading-[33px]">
                    Our values define who we are. These are the ideals that give
                    us roots to anchor and wings to fly. They help us create a
                    better, sustainable future for all our stakeholders.
                  </p>
                  <div className="mt-[30px] flex flex-col gap-y-[22px] gap-x-[25px]">
                    {/* Agility  */}
                    <div className="flex gap-[45px] pl-[25px]">
                      <img
                        src="/brand_journey/agility_icon.svg"
                        className="w-[70px]"
                      />
                      <div className="">
                        <h4 className="text-white text-[28px] bw-m">AGILITY</h4>
                        <p className="text-white text-[17px] bw-l leading-[25px]">
                          Be proactive and alert to the needs of our
                          stakeholders
                        </p>
                      </div>
                    </div>

                    {/* Collaboration */}
                    <div className="flex gap-[45px] pl-[25px]">
                      <img
                        src="/brand_journey/collabration_icon.svg"
                        className="w-[70px]"
                      />
                      <div className="">
                        <h4 className="text-white text-[28px] bw-m">
                          COLLABORATION
                        </h4>
                        <p className="text-white text-[17px] bw-l leading-[25px]">
                          Practise mutual respect and teamwork to maximise value
                          of partnerships
                        </p>
                      </div>
                    </div>

                    {/* EXCELLENCE */}
                    <div className="flex gap-[45px] pl-[25px]">
                      <img
                        src="/brand_journey/excellence_icon.svg"
                        className="w-[70px]"
                      />
                      <div className="">
                        <h4 className="text-white text-[28px] bw-m">
                          EXCELLENCE
                        </h4>
                        <p className="text-white text-[17px] bw-l leading-[25px]">
                          Create systems to continuously establish and surpass
                          benchmarks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[50%]">
                  <img
                    src="/brand_journey/value_img.jpg"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
