"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AwardSlider from "./_components/AwardSlider";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// 🔹 Unified Awards Array with images as arrays
const awards = [
  {
    year: 2023,
    title: "Frontiers of Grade A Industrial Parks",
    subtitle: "10th CII IL Supply Chain & Logistics Excellence (SCALE) Awards",
    description:
      "Horizon Industrial Parks recognised for redefining Grade A warehousing standards in India",
    images: ["/brand_journey/awards/2023/frontiers_cll_2023.png"],
  },
  {
    year: 2023,
    title: "Fastest Growing Industrial & Logistics Park",
    subtitle: "15th Express Logistics & Supply Chain Awards 2023",
    description:
      "Awarded for rapid growth and establishing India’s largest in-city Grade A logistics network. Leadership in developing high-performance logistics ecosystems",
    images: ["/brand_journey/awards/2023/fast_growing_2023.png"],
  },
  {
    year: 2024,
    title: "Warehousing Project of the Year – Chakan II",
    subtitle: "GRI Awards 2024",
    description:
      "Recognised for cutting-edge design, human-centric features  and operational excellence",
    images: ["/brand_journey/awards/2024/warehouse_project_2024.png"],
  },
  {
    year: 2024,
    title: "Industrial Park of the Year – West Zone",
    subtitle: "Realty+ Excellence Awards 2024",
    description:
      "Horizon Industrial Park Chakan II celebrated as the premier Grade A park and benchmark in Western India",
    images: ["/brand_journey/awards/2024/industy_park_west.png"],
  },
  {
    year: 2024,
    title: "Warehousing Park of the Year – North Zone",
    subtitle: "Realty+ Excellence Awards 2024",
    description:
      "Horizon Industrial Park Bilaspur honoured for scale, ESG certifications, occupier and regional impact",
    images: ["/brand_journey/awards/2024/Bilaspur.jpg"],
  },
  {
    year: 2024,
    title: "Industrial / Warehousing Project of the Year – South Zone",
    subtitle: "Realty+ Excellence Awards 2024",
    description:
      "JCK Horizon Industrial Park Kothur awarded for innovation and sustainability features like rooftop solar and smart layouts",
    images: ["/brand_journey/awards/2024/Kothur.jpg"],
  },
  {
    year: 2024,
    title: "Leader in Innovative Industrial Real Estate Solutions",
    subtitle: "11th CII IL SCALE Awards 2024",
    description:
      "Recognised for pioneering and delivering integrated, agile, future-ready solutions across India, that set new industry benchmarks",
    images: ["/brand_journey/awards/2024/leader_estate_2024.png"],
  },
  {
    year: 2024,
    title: "IGBC Green Champion Award",
    subtitle: "Green Building Congress 2024",
    description:
      "Honoured as a pioneer in large-scale adoption of green logistics parks and warehouses - with Chakan II, Bilaspur, Malur, and Delhi I achieving IGBC Platinum status",
    images: [
      "/brand_journey/awards/2024/IGBC_bilaspur.png",
      "/brand_journey/awards/2024/IGBC_chakanII.png",
      "/brand_journey/awards/2024/IGBC_faruknagarI.png",
    ],
  },
  {
    year: 2024,
    title: "Industrial Warehousing – West Zone Winner",
    subtitle: "The Economic Times Real Estate Awards 2024 (National Edition)",
    description:
      "Horizon Industrial Park Chakan II awarded for excellence in industrial warehousing",
    images: ["/brand_journey/awards/2024/industy_ware_2024.png"],
  },
  {
    year: 2025,
    title: "Realty+ Conclave & Excellence Awards South 2025",
    subtitle:
      "Horizon Recognised as Developer of the Year – Industrial & Warehousing",
    description:
      "Horizon Industrial Parks was honoured as the Developer of the Year – Industrial & Warehousing at the Realty+ Conclave & Excellence Awards South 2025; We are also delighted to receive the Warehousing Project of the Year award for Horizon Industrial Park Hosur, recognised for its  customer-centric design and facilities built for operational excellence.",
    images: [
      "/brand_journey/awards/2025/Realty_awd1.png",
      "/brand_journey/awards/2025/Realty_awd2.png",
    ],
  },
  {
    year: 2025,
    title: "CII SCALE Awards 2025",
    subtitle:
      "Horizon Recognised as Leader in Essential Industrial Infrastructure",
    description:
      "Horizon Industrial Parks was honoured as the Leader in Essential Industrial Infrastructure at the 12th CII SCALE Awards 2025. This recognition highlights our commitment to delivering institutional-grade, future-ready industrial and logistics infrastructure that powers India’s manufacturing growth and strengthens nationwide supply-chain resilience. Horizon’s capability in executing complex technical requirements, has positioned us as the partner of choice for essential industrial infrastructure.",
    images: ["/brand_journey/awards/2025/CII_Scale_25.png"],
  },
  {
    year: 2025,
    title: "IGBC Green Building Congress 2025",
    subtitle:
      "Horizon Bilaspur Wins IGBC Performance Challenge Award – Warehouse Category",
    description:
      "Horizon Industrial Park Bilaspur has been honoured with the IGBC Performance Challenge Award in the Warehouse Category at the IGBC Green Building Congress 2025. This recognition highlights the park’s role as a benchmark for responsible, future-ready industrial infrastructure reflecting Horizon’s commitment to building high-performance, climate-conscious industrial ecosystems where growth and sustainability progress together.",
    images: ["/brand_journey/awards/2025/IGBC_green_cong_25.png"],
  },
  // {
  //   year: 2025,
  //   title: "GRI Global Awards 2025",
  //   subtitle: "Horizon Recognised for Global Industrial Excellence",
  //   description:
  //     "Horizon Industrial Parks has been recognised among the top three industrial and logistics developments globally at the GRI Global Awards 2025. This acknowledgement reflects our commitment to building Grade-A, sustainable, and future-ready industrial ecosystems. The recognition of our Farukhnagar II development underscores Horizon’s continued leadership in shaping high-performance logistics infrastructure that meets global benchmarks in innovation, sustainability, and impact.",
  //   images: ["/brand_journey/award_img.png"],
  // },
  {
    year: 2025,
    title: "CII Performance Excellence Awards 2025",
    subtitle: "Horizon Recognised for Sustainability Leadership",
    description:
      "Horizon Industrial Parks was honoured with the “Leadership in Performance” recognition at the CII Performance Excellence Awards 2025 for Solar, Wind & Hybrid Plants. Our 486 kWp rooftop solar plant at Chakan II – Block A was recognised for its consistent operational excellence, sustainability benchmarks, and strong on-ground performance.",
    images: ["/brand_journey/awards/2025/cci_performance_award_25.png"],
  },
  {
    year: 2025,
    title: "Realty+ Conclave Excellence Awards 2025",
    subtitle: "Horizon Recognised for Industry Leadership",
    description:
      "Horizon Industrial Park Bhayala was honoured as the “Industrial / Warehousing Project of the Year – West Zone”. The built-to-suit factory developed by Horizon at Bhayala park for a global aseptic carton packaging manufacturing company, stood out as the project of the year, for its world-class industrial infrastructure.",
    images: ["/brand_journey/awards/2025/Bhayala_award_25.png"],
  },
  {
    year: 2025,
    title: "Realty+ Excellence Awards 2025",
    subtitle:
      "Horizon Crowned Developer of the Year – Industrial & Warehousing (North)",
    description:
      "Horizon Industrial Parks was honoured as the “Developer of the Year – Industrial & Warehousing” at the Realty+ Conclave & Excellence Awards 2025 (North). The recognition underscores Horizon’s leadership in delivering Grade-A, ESG-compliant, and future-ready industrial and logistics infrastructure across India",
    images: ["/brand_journey/awards/2025/Industrial_north_award_25.png"],
  },

  // you can keep adding year: 2025, etc.
];

const Awards = () => {
  const [value, setValue] = useState("2025"); // default selected year

  // Get unique years from awards data
  const years = [...new Set(awards.map((a) => a.year))].sort((a, b) => b - a);

  // For mobile dropdown (keep both in sync)
  const [activeTab, setActiveTab] = useState(
    years.findIndex((y) => y.toString() === value)
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const index = years.findIndex((y) => y.toString() === newValue);
    setActiveTab(index);
  };

  const handleDropdownChange = (index) => {
    setActiveTab(index);
    setValue(years[index].toString());
  };

  return (
    <div className="relative overflow-hidden bg-[#f5f5f5]">
      {/* Background Vectors */}
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[0px] md:left-[-100px] left-[-80px] lg:top-[-100px] xl:left-[-300px] 1920:left-[-200px]"
        src="/green_vector.svg"
        alt="green vector"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[50px] md:left-[-100px] left-[0px] lg:top-[-200px] xl:left-[-200px] 1920:left-[0px]"
        src="/orange_vector.svg"
        alt="orange vector"
      />

      {/* Main Section */}
      <div className="relative fix overflow-hidden pt-[45px] md:pt-[80px] pb-[45px] lg:pb-[0px]">
        <div className="flex w-full">
          <div className="w-full">
            <TabContext value={value.toString()}>
              <div className="w-full flex justify-between items-center gap-3 flex-col md:gap-5 md:flex-row xl:gap-[100px]">
                <div className="flex md:flex-row flex-col gap-2 md:gap-10 justify-between w-full">
                  {/* Left Heading Section */}
                  <div className="flex gap-[10px] md:gap-[17px] flex-col">
                    <h2 className="1366:text-[56px] 1024:text-[48px] text-[28px] md:text-[35px] leading-[38px] 1366:leading-[66px] 1024:leading-[58px] 1024:tracking-[-1.92px] 1366:tracking-[-2.24px] bw-r ">
                      <span className="inline-flex bw-m items-center">
                        Recognised for{" "}
                      </span>
                      <br />
                      What We Deliver.
                    </h2>
                    <img
                      src="/abstract_pattern.svg"
                      alt="pattern"
                      className="abstract_svg w-max"
                    />
                  </div>

                  {/* Right Tabs or Dropdown */}
                  <div className="flex md:w-1/2 flex-col lg:justify-center gap-5 mt-[10px]">
                    {/* ✅ Show dropdown for mobile/tablet */}
                    <CustomDropdown
                      categories={years.map((y) => y.toString())}
                      activeTab={activeTab}
                      setActiveTab={handleDropdownChange}
                      className="w-full mt-6 relative xl:hidden" // visible below 1024px
                    />

                    {/* ✅ Show tabs for desktop only */}
                    <div className="hidden xl:flex lg:justify-end">
                      <div className="w-fit mt-0">
                        <TabList
                          onChange={handleChange}
                          aria-label="awards year tabs"
                          className="border border-[#CDCDCD] rounded-[20px]"
                        >
                          {years.map((year) => (
                            <Tab
                              key={year}
                              value={year.toString()}
                              className="!border-r last:!border-none !border-[#CDCDCD]"
                              label={
                                <div className="flex items-center gap-1">
                                  <span>{year}</span>
                                  {value.toString() === year.toString() && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="30"
                                      viewBox="0 0 39 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M8.125 31.3745L30.875 8.62451"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.125 8.62451H30.875V31.3745"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </div>
                              }
                              sx={{
                                height: {
                                  xs: "60px",
                                  lg: "100px",
                                  xl: "100px",
                                },
                                width: { xs: "50%", lg: "160px", xl: "165px" },
                                color: "#000",
                                fontFamily: "Barlow",
                                fontSize: {
                                  xs: "19px",
                                  md: "21px",
                                  lg: "23px",
                                },
                                fontWeight: "400",
                                textTransform: "none",
                                "&.Mui-selected": {
                                  background:
                                    "linear-gradient(110deg, #8f53a1 24.35%, #f47922 107.33%)",
                                  color: "#fff",
                                  border: "none",
                                },
                              }}
                            />
                          ))}
                        </TabList>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Panels --- */}
              {years.map((year) => (
                <TabPanel
                  key={year}
                  value={year.toString()}
                  sx={{
                    float: "left",
                    paddingTop: "70px",
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "100%",
                  }}
                >
                  <AwardSlider awards={awards.filter((a) => a.year === year)} />
                </TabPanel>
              ))}
            </TabContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
