"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import clsx from "clsx";

const Heading = ({
  heading,
  acbtn,
  setAcBtn,
  showPhotos = false,
  showRenders = false,
  showVids = false,
}) => {
  const spotlight_btn_content = [
    showPhotos && { title: "Photos" },
    showRenders && { title: "Site Plan" },
    showVids && { title: "Videos" },
  ].filter(Boolean);

  useEffect(() => {
    if (spotlight_btn_content.length > 0) {
      const firstTab = spotlight_btn_content[0].title;
      if (!acbtn || !spotlight_btn_content.some((t) => t.title === acbtn)) {
        setAcBtn(firstTab);
      }
    }
  }, [spotlight_btn_content, acbtn, setAcBtn]);

  return (
    <div className="relative pb-5 md:pb-[50px]">
      {/* Desktop layout */}
      <div className="lg:flex hidden items-center justify-between w-full gap-[20px] relative z-20">
        <h2 className="inline-block w-fit text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:tracking-[-1.92px] lg:text-[48px] lg:leading-[58px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] bw-m txt_gradient bw-m capitalize whitespace-nowrap">
          Park Gallery
        </h2>

        {/* Tabs row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white flex md:rounded-2xl lg:rounded-[28px] overflow-hidden"
        >
          {spotlight_btn_content.map((btntitle, i) => {
            const isActive = btntitle.title === acbtn;

            return (
              <motion.button
                key={btntitle.title + " " + String(i)}
                onClick={() => setAcBtn(btntitle.title)}
                className={clsx(
                  "relative flex items-center justify-between last:border-r-0 border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none w-[150px] xl:w-[190px] h-[70px] xl:h-[100px] px-[20px]",
                  isActive ? "text-white" : "text-black"
                )}
              >
                {/* gradient overlay */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)",
                  }}
                />

                {/* content */}
                <div className="relative z-10 flex items-center justify-between w-full gap-2">
                  <h2
                    className={clsx(
                      "whitespace-nowrap md:text-[16px] transition-colors duration-100 lg:text-[20px] xl:text-[23px] bw-r",
                      isActive ? "text-white" : "text-black"
                    )}
                  >
                    {btntitle.title}
                  </h2>

                  {/* <span className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden block">
                    <AnimatePresence mode="wait" initial={false}>
                      {isActive && (
                        <motion.img
                          key="active-icon"
                          initial={{ y: "100%", x: "-100%", opacity: 0 }}
                          animate={{ y: 0, x: 0, opacity: 1 }}
                          exit={{ y: "100%", x: "-100%", opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.7, 0, 0.4, 1],
                          }}
                          src="/whiteexternal.svg"
                          alt="Active"
                          className="w-full h-full"
                        />
                      )}
                    </AnimatePresence>
                  </span> */}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex md:flex-row md:justify-between flex-col gap-6 relative z-20">
        <h2 className="text-[35px] md:text-[45px] md:leading-[55px] leading-[42px] bw-m txt_gradient font-medium capitalize whitespace-nowrap">
          Park Gallery
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white flex rounded-[16px] overflow-hidden md:w-fit w-full"
        >
          {spotlight_btn_content.map((btntitle, i) => {
            const isActive = btntitle.title === acbtn;

            return (
              <motion.button
                key={btntitle.title + " " + String(i)}
                onClick={() => setAcBtn(btntitle.title)}
                className={clsx(
                  "relative flex items-center justify-between border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none md:w-[150px] w-full h-[60px] px-[16px]",
                  isActive ? "text-white" : "text-black"
                )}
                initial={false} // prevent flashing
                animate={{
                  background: isActive
                    ? "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)"
                    : "#ffffff",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* content */}
                <div className="relative z-10 flex items-center justify-between w-full gap-2">
                  <h2 className="whitespace-nowrap text-[16px] bw-r">
                    {btntitle.title}
                  </h2>

                  {/* <span className="w-[20px] h-[20px] relative overflow-hidden block">
                    <AnimatePresence mode="wait" initial={false}>
                      {isActive && (
                        <motion.img
                          key="active-icon"
                          initial={{ y: "100%", x: "-100%", opacity: 0 }}
                          animate={{ y: 0, x: 0, opacity: 1 }}
                          exit={{ y: "100%", x: "-100%", opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.7, 0, 0.4, 1],
                          }}
                          src="/whiteexternal.svg"
                          alt="Active"
                          className="w-full h-full"
                        />
                      )}
                    </AnimatePresence>
                  </span> */}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Heading;
