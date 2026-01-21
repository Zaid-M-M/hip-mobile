"use client";
import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function Mission_value() {
  const container_new = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container_new,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main
        ref={container_new}
        className="hidden w-full xl:block "
        style={{ height: "250vh" }}
      >
        {/* Purpose Card */}
        <ReactLenis root>
          <Purpose progress={scrollYProgress} className="" />
        </ReactLenis>
      </main>

      <div className="bg-[#000000] px-[20px] lg:px-[52px] md:px-[35px] py-[45px]  block xl:hidden">
        <div className="flex flex-col md:flex-row md:gap-[20px]">
          {/* Purpose Div Mob     */}
          <div className="mb-[30px] md:flex-1">
            <div className="relative w-full overflow-hidden pt-[20px] pb-[65px] px-[15px] bg-[#0db14b]  md:h-[240px]">
              <h3 className="bw-m text-[43px] leading-[52px] mb-[10px] text-white ">
                <span className="bw-l">Our</span> Purpose{" "}
              </h3>
              <p className=" bw-m text-white text-[21px] leading-[28px] md:text-[19px] md:leading-[26px] w-[100%]">
                Enable our customers succeed by proactively delivering agile
                solutions for accelerated growth.
              </p>
              <img
                src="/brand_journey/purpose_arrow.svg"
                className="absolute right-[22px] top-[auto] bottom-[-2px] w-[225px]"
              />
            </div>
            <img
              src="/brand_journey/purpose_img.jpg"
              className="w-full object-cover h-[250px]"
            />
          </div>

          {/* Mission Div Mob     */}
          <div className="mb-[30px] md:flex-1">
            <div className="relative w-full overflow-hidden pt-[20px] pb-[65px] px-[15px] bg-[#f47920] md:h-[240px]">
              <h3 className="bw-m text-[43px] leading-[52px] mb-[10px] text-white ">
                <span className="bw-l">Our</span> Mission{" "}
              </h3>
              <p className=" bw-m text-white text-[21px] leading-[28px] md:text-[19px] md:leading-[26px] w-[100%]">
                Make Horizon the dominant and preferred industrial and
                warehousing partner, sustainably delivering benchmark quality
                and superior returns.
              </p>
              <img
                src="/brand_journey/purpose_arrow.svg"
                className="absolute right-[22px] top-[auto] bottom-[-2px] w-[225px]"
              />
            </div>
            <img
              src="/brand_journey/mission_img.jpg"
              className="w-full object-cover h-[250px]"
            />
          </div>
        </div>

        {/* Values Div Mob     */}
        <div className="flex flex-col md:flex-row">
          <div className="relative overflow-hidden pt-[30px] pb-[40px] px-[15px] w-[100%] bg-[#8F53A1]">
            <h3 className="text-white bw-m text-[43px] leading-[52px] mb-[10px]">
              <span className="bw-l">Our</span> Values{" "}
            </h3>
            <p>
              Our values define who we are. These are the ideals that give us
              roots to anchor and wings to fly. They help us create a better,
              sustainable future for all our stakeholders.
            </p>
            <div className="mt-[30px] flex flex-col gap-[20px]">
              {/* Agility  */}
              <div className="flex gap-[15px]">
                <img
                  src="/brand_journey/agility_icon.svg"
                  className="w-[50px]"
                />
                <div className="">
                  <h4 className="text-white text-[20px] leading-[34px] bw-m">
                    Agility
                  </h4>
                  <p className="text-white text-[16px] bw-l leading-[21px]">
                    Be proactive and alert to the needs of our stakeholders
                  </p>
                </div>
              </div>

              {/* Collaboration */}
              <div className="flex gap-[15px]">
                <img
                  src="/brand_journey/collabration_icon.svg"
                  className="w-[50px]"
                />
                <div className="">
                  <h4 className="text-white text-[20px] leading-[34px] bw-m">
                    Collaboration
                  </h4>
                  <p className="text-white text-[16px] bw-l leading-[21px]">
                    Practise mutual respect and teamwork to maximise value of
                    partnerships
                  </p>
                </div>
              </div>

              {/* EXCELLENCE */}
              <div className="flex gap-[15px]">
                <img
                  src="/brand_journey/excellence_icon.svg"
                  className="w-[50px]"
                />
                <div className="">
                  <h4 className="text-white text-[20px] leading-[34px] bw-m">
                    EXCELLENCE
                  </h4>
                  <p className="text-white text-[16px] bw-l leading-[21px]">
                    Create systems to continuously establish and surpass
                    benchmarks
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/brand_journey/value_img.jpg"
            className="w-full object-cover h-[250px] md:h-[445px] md:w-[50%]"
          />
        </div>
      </div>
    </>
  );
}

// Purpose
function Purpose({ progress }) {
  const container1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container1,
    offset: ["start end", "start start"],
  });

  // First box
  const frst_img_width = useTransform(progress, [0, 0.4], ["50%", "0%"]);

  // Purpose box
  const prps_dv_height = useTransform(progress, [0, 0.4], ["350px", "218px"]);
  const prps_dv_bg = useTransform(progress, [0, 0.4], ["#0db14b", "#fff"]);
  const prps_dv_hd = useTransform(progress, [0, 0.4], ["#fff", "#000"]);
  const prps_dv_p = useTransform(progress, [0, 0.4], ["1", "0"]);
  const prps_dv_vctr = useTransform(progress, [0, 0.4], ["1", "0"]);

  // Mission box
  const msn_dv_height = useTransform(progress, [0, 0.4], ["218px", "350px"]);
  const msn_dv_bg = useTransform(progress, [0, 0.4], ["#FFFFFF", "#f47920"]);
  const msn_dv_hd = useTransform(progress, [0, 0.4], ["#000", "#fff"]);
  // const msn_dv_p = useTransform(progress, [0, 0.4], ['0', '1']);
  const msn_dv_vctr = useTransform(progress, [0, 0.4], ["0", "1"]);

  const scnd_box_height = useTransform(
    progress,
    [0.5, 0.9],
    ["540px", "470px"]
  );

  // Third box
  const third_img_height = useTransform(
    progress,
    [0.5, 0.9],
    ["540px", "470px"]
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
      // Multiply both to get combined effect
      setMsnDvP(fi * fo);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      ref={container1}
      className="bg-[#161515] sticky top-0 w-full py-[90px] 1280:py-[40px] 1600:pt-[80px] 1920:py-[90px] 1920:h-[750px] 1600:h-[750px] 1280:h-[640px] overflow-hidden"
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
                      className="bw-m text-[76px] leading-[90px] mb-[10px]"
                    >
                      <span className="bw-l">Our</span> Purpose{" "}
                    </motion.h3>
                    <motion.p
                      style={{ opacity: prps_dv_p }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="text-[28px] bw-m text-white leading-[33px] w-[530px]"
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
                      className="bw-m text-[76px] leading-[90px] mb-[10px]"
                    >
                      <span className="bw-l">Our</span> Mission{" "}
                    </motion.h3>
                    <motion.p
                      style={{ opacity: msn_dv_p }}
                      transition={{ duration: 0.2, ease: "linear" }}
                      className="text-white text-[28px] bw-m leading-[33px] w-[530px]"
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
              <div className="relative flex gap-[20px] pl-[20px] mt-[0px]  h-[570px]">
                {/*------------ Value box ------------*/}
                <div className="relative overflow-hidden py-[25px] px-[30px] w-[50%] bg-[#8F53A1]">
                  <h3
                    style={{ color: prps_dv_hd }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white bw-m text-[76px] leading-[67px] mb-[10px]"
                  >
                    <span className="bw-l">Our</span> Values{" "}
                  </h3>
                  <p className="bw-r text-white text-[18px]">
                    Our values define who we are. These are the ideals that give
                    us roots to anchor and wings to fly. They help us create a
                    better, sustainable future for all our stakeholders.
                  </p>
                  <div className="mt-[30px] flex flex-col gap-[45px]">
                    {/* Agility  */}
                    <div className="flex gap-[45px] pl-[25px]">
                      <img src="/brand_journey/agility_icon.svg" />
                      <div className="">
                        <h4 className="text-white text-[30px] bw-m">Agility</h4>
                        <p className="text-white text-[20px] bw-l leading-[28px]">
                          Be proactive and alert to the needs of our
                          stakeholders
                        </p>
                      </div>
                    </div>

                    {/* Collaboration */}
                    <div className="flex gap-[45px] pl-[25px]">
                      <img src="/brand_journey/collabration_icon.svg" />
                      <div className="">
                        <h4 className="text-white text-[30px] bw-m">
                          Collaboration
                        </h4>
                        <p className="text-white text-[20px] bw-l leading-[28px]">
                          Practise mutual respect and teamwork to maximise value
                          of partnerships
                        </p>
                      </div>
                    </div>

                    {/* EXCELLENCE */}
                    <div className="flex gap-[45px] pl-[25px]">
                      <img src="/brand_journey/excellence_icon.svg" />
                      <div className="">
                        <h4 className="text-white text-[30px] bw-m">
                          EXCELLENCE
                        </h4>
                        <p className="text-white text-[20px] bw-l leading-[28px]">
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
