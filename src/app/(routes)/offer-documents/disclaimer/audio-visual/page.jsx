import MainLayout from "@/src/layouts/MainLayout";
// import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Offer Documents | Horizon Industrial Parks | Compliance",
  description:
    "Access official offer documents for Horizon Industrial Parks. We focus on good governance and sustainable, Grade A logistics infrastructure across India.",
};

export default function Drhpvideo() {
  return (
    <MainLayout>
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex flex-col lg:gap-0 gap-10 w-full justify-between 360:pb-[15px]">
          <div>
            <h2 className="bw-r sec_hd text-[34px] sm:text-[44px] md:text-[54px] lg:text-[66px] leading-tight">
              <span className="flex gap-[10px] md:gap-[17px] items-center md:flex-row flex-row text-[28px] leading-[25px] md:text-[45px] md:leading-[55px] lg:text-[64px] lg:leading-[76px] lg:tracking-[-2.56px]">
                DRHP AV{" "}
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg flex"
                  alt=""
                />
              </span>
            </h2>
          </div>
          <div className="md:mt-[50px] lg:mt-[50px]">
            <div className="flex md:flex-row flex-col gap-[30px] lg:gap-[50px]">
              <div className="w-[100%] lg:w-[450px] xl:w-[600px] ">
                <h3 className="text-[25px] leading-[35px] capitalize xl:text-[25px] xl:leading-[25px] 1440:text-[28px] 1440:leading-[28px] 1600:text-[30px] 1600:leading-[40px] bw-r mb-[0px] md:mb-[14px]">
                  English Version
                </h3>
                <iframe
                  src="https://player.vimeo.com/video/1150929831?"
                  className="AV_video"
                ></iframe>
              </div>
              <div className="w-[100%] lg:w-[450px] xl:w-[600px] ">
                <h3 className="text-[25px] leading-[35px] capitalize xl:text-[25px] xl:leading-[25px] 1440:text-[28px] 1440:leading-[28px] 1600:text-[30px] 1600:leading-[40px] bw-r mb-[0px] md:mb-[14px]">
                  Hindi Version
                </h3>
                <iframe
                  src="https://player.vimeo.com/video/1150929962?"
                  className="AV_video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
