// "use client";
// import { useState } from "react";
// import VerticalTabs from "./VerticalTab";
// import TimelineTabs from "./TimelineTabs";
// import TimelineContent from "./TimelineContent";
// import TimelineTabsMobile from "./TimelineTabsMobile";

// const timelineData = {
//   2022: [
//     {
//       id: 1,
//       text: " Platform launched with a portfolio of 6 MSFT in Pune and NCR",
//       image: "/timeline/2022/farukhnagar.png",
//     },
//     {
//       id: 2,
//       text: " Announced ₹4,500 Cr investment to expand logistics facilities across India",
//       icon: "/timeline/2022/icon/investment.svg",
//     },
//     {
//       id: 3,
//       text: "Portfolio grew to 16.3 MSFT spanning 10 assets in 5 markets",
//       image: "/timeline/2022/Portfolio_grew_22.jpg",
//     },
//   ],
//   2023: [
//     {
//       id: 1,
//       text: "Introduced Value Added Services",
//       // image: "/timeline/2023/xsio.png",
//       icon: "/timeline/2023/icon/VAS.svg",
//     },
//     {
//       id: 2,
//       text: "Acquired 2nd site in Nagpur",
//       image: "/timeline/2023/xsio.png",
//     },
//     {
//       id: 3,
//       text: "Won our first award for ‘Fastest Growing Industrial Warehousing Developer in India’ at ELSC Awards",
//       image: "/timeline/2023/elsc.png",
//     },
//     {
//       id: 4,
//       text: "Entered new markets – Chennai and Goa",
//       icon: "/timeline/2023/icon/state.svg",
//     },
//     {
//       id: 5,
//       text: "Certified as Great Place To Work",
//       image: "/timeline/2023/gptw.png",
//     },
//     {
//       id: 6,
//       text: "Portfolio grew to 26.8 MSFT spanning 18 assets in 5 markets",
//       image: "/timeline/2023/icongraph.png",
//     },
//   ],
//   2024: [
//     {
//       id: 1,
//       text: "Expanded presence in Pune with new greenfield development in Chakan MIDC",
//       image: "/timeline/2024/cgbi.png",
//     },
//     // {
//     //   id: 2,
//     //   text: "Deployed IoT sensors and smart meters for predictive maintenance and better operational oversight",
//     //   image: "/timeline/2024/smi.png",
//     // },
//     {
//       id: 3,
//       text: "Delivered 1st BTS cold chain facility in Shoolagiri",
//       icon: "/timeline/2024/icon/cci.svg",
//     },
//     // {
//     //   id: 4,
//     //   text: "1st operational park IGBC Platinum Certified - Bilaspur",
//     //   // image: "/timeline/2024/icon/igbc.png",
//     // },
//     {
//       id: 5,
//       text: "Partnered with CWC for the largest portfolio of 13 last-mile logistics assets in India",
//       icon: "/timeline/2024/icon/lastmile.svg",
//       // image: "/timeline/2024/skillcenter.png",
//     },
//     {
//       id: 6,
//       text: "Expanded presence in NCR and Chennai with 4 parks",
//       // image: "",
//     },
//     {
//       id: 7,
//       text: "Portfolio grew to 34.5 MSFT spanning 33 assets in 8 markets",
//       image: "/timeline/2024/Portfolio_grew1.jpg",
//     },
//     {
//       id: 8,
//       text: "Deployed IoT sensors and smart meters for predictive maintenance and better operational oversight",
//       image: "/timeline/2024/smi.png",
//     },
//     {
//       id: 9,
//       text: "1st operational park IGBC Platinum Certified - Bilaspur",
//       // image: "/timeline/2024/icon/igbc.png",
//     },
//   ],
//   2025: [
//     {
//       id: 1,
//       text: "Secured LEED Platinum certificate for our head office",
//       image: "/timeline/2025/icon/leed.jpg",
//     },
//     {
//       id: 2,
//       text: "12 operational parks IGBC Platinum certified",
//       // image: "/timeline/2025/icon/igbc.jpg",
//     },
//     {
//       id: 3,
//       text: "Certified by ISO (IMS and ISMS)",
//       image: "/timeline/2025/icon/iso_new.jpg",
//     },
//     {
//       id: 4,
//       text: "Inaugurated our first skill development centre at Farukhnagar",
//       image: "/timeline/2025/icon/skills.png",
//     },
//     {
//       id: 5,
//       text: "Acquired 1st development site in Nashik",
//       image: "/timeline/2025/maharashtra.jpg",
//     },
//     {
//       id: 6,
//       text: "Launched EV charging stations and sports arenas at our parks",
//       image: "/timeline/2025/sport.png",
//     },
//     {
//       id: 7,
//       text: "Portfolio grew to 52.3 MSFT spanning 41 assets in 9 markets",
//       image: "/timeline/2025/Portfolio_grew.jpg",
//     },
//   ],
// };

// export default function TimelineSection() {
//   const years = Object.keys(timelineData);
//   const [activeYear, setActiveYear] = useState(years[0]);

//   return (
//     <section className="py-[32px] sm:py-[70px] text-white bg-black">
//       {/* Mobile layout */}
//       <div className="flex flex-col h-[auto] md:h-[650px] md:hidden">
//         <TimelineContent events={timelineData[activeYear]} />
//         <TimelineTabsMobile
//           years={years}
//           activeYear={activeYear}
//           setActiveYear={setActiveYear}
//         />
//       </div>

//       {/* Desktop layout */}
//       <div className="hidden md:flex gap-10 1280:gap-[70px]">
//         <TimelineTabs
//           years={years}
//           activeYear={activeYear}
//           setActiveYear={setActiveYear}
//         />
//         <div className="flex-1">
//           <TimelineContent events={timelineData[activeYear]} />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import TimelineContent from "./TimelineContent";
// import TimelineTabsMobile from "./TimelineTabsMobile";
import TimelineMobile from "./TimelineMobile"; // NEW
import TimelineTabs from "./TimelineTabs";

const timelineData = {
  2022: [
    {
      id: 1,
      text: "Platform launched with a portfolio of 6 MSFT in Pune and NCR",
      image: "/timeline/2022/farukhnagar.png",
    },
    {
      id: 2,
      text: "Announced ₹4,500 Cr investment to expand logistics facilities across India",
      icon: "/timeline/2022/icon/investment.svg",
    },
    {
      id: 3,
      text: "Portfolio grew to 16.3 MSFT spanning 10 assets in 5 markets",
      image: "/timeline/2022/Portfolio_grew_22.jpg",
    },
  ],
  2023: [
    {
      id: 1,
      text: "Introduced Value Added Services",
      icon: "/timeline/2023/icon/VAS.svg",
    },
    {
      id: 2,
      text: "Acquired 2nd site in Nagpur",
      image: "/timeline/2023/xsio.png",
    },
    {
      id: 3,
      text: "Won our first award for ‘Fastest Growing Industrial Warehousing Developer in India’ at ELSC Awards",
      image: "/timeline/2023/elsc.png",
    },
    {
      id: 4,
      text: "Entered new markets – Chennai and Goa",
      icon: "/timeline/2023/icon/state.svg",
    },
    {
      id: 5,
      text: "Certified as Great Place To Work",
      image: "/timeline/2023/gptw.png",
    },
    {
      id: 6,
      text: "Portfolio grew to 26.8 MSFT spanning 18 assets in 5 markets",
      image: "/timeline/2023/icongraph.png",
    },
  ],
  2024: [
    {
      id: 1,
      text: "Expanded presence in Pune with new greenfield development in Chakan MIDC",
      image: "/timeline/2024/cgbi.png",
    },
    {
      id: 2,
      text: "Expanded presence in NCR and Chennai with 4 parks",
    },
    {
      id: 4,
      text: "Delivered 1st BTS cold chain facility in Shoolagiri",
      icon: "/timeline/2024/icon/cci.svg",
    },
    {
      id: 3,
      text: "Deployed IoT sensors and smart meters for predictive maintenance and better operational oversight",
      image: "/timeline/2024/smi.png",
    },
    // {
    //   id: 2,
    //   text: "Delivered 1st BTS cold chain facility in Shoolagiri",
    //   icon: "/timeline/2024/icon/cci.svg",
    // },
    {
      id: 5,
      text: "Partnered with CWC for the largest portfolio of 13 last-mile logistics assets in India",
      icon: "/timeline/2024/icon/lastmile.svg",
    },
    // {
    //   id: 4,
    //   text: "Expanded presence in NCR and Chennai with 4 parks",
    // },
    {
      id: 6,
      text: "Portfolio grew to 34.5 MSFT spanning 33 assets in 8 markets",
      // image: "/timeline/2024/Portfolio_grew1.jpg",
    },
    // {
    //   id: 6,
    //   text: "Expanded presence in NCR and Chennai with 4 parks",
    // },
    // {
    //   id: 7,
    //   text: "Deployed IoT sensors and smart meters for predictive maintenance and better operational oversight",
    //   image: "/timeline/2024/smi.png",
    // },
    {
      id: 7,
      text: "1st operational park IGBC Platinum Certified - Bilaspur",
      image: "/timeline/2024/IGBC_bilaspur.jpg",
    },
  ],
  2025: [
    {
      id: 1,
      text: "Secured LEED Platinum certificate for our head office",
      image: "/timeline/2025/icon/leed.jpg",
    },
    {
      id: 2,
      text: "18 operational parks IGBC Platinum certified",
    },
    {
      id: 3,
      text: "Certified by ISO (IMS and ISMS)",
      image: "/timeline/2025/icon/iso_new.jpg",
    },
    {
      id: 4,
      text: "Inaugurated our first skill development centre at Farukhnagar",
      image: "/timeline/2025/icon/skills.png",
    },
    // {
    //   id: 5,
    //   text: "Acquired 1st development site in Nashik",
    //   image: "/timeline/2025/maharashtra.jpg",
    // },
    {
      id: 6,
      text: "Launched EV charging stations and sports arenas at our parks",
      image: "/timeline/2025/sport.png",
    },
    {
      id: 7,
      text: "Portfolio grew to 52.3 MSFT spanning 41 assets in 10 markets",
      image: "/timeline/2025/Portfolio_grew.jpg",
    },
  ],
};

export default function TimelineSection() {
  const years = Object.keys(timelineData);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <section className="py-[32px] sm:py-[70px] text-white bg-black">
      {/* Mobile layout */}
      {/* <div className="flex flex-col h-[auto] md:h-[650px] md:hidden">
        <TimelineContent events={timelineData[activeYear]} />
        <TimelineTabsMobile
          years={years}
          activeYear={activeYear}
          setActiveYear={setActiveYear}
        />
      </div> */}
      <div className="md:hidden">
        <TimelineMobile years={years} data={timelineData} />
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex gap-10 1280:gap-[70px]">
        <TimelineTabs
          years={years}
          activeYear={activeYear}
          setActiveYear={setActiveYear}
        />
        <div className="flex-1">
          <TimelineContent events={timelineData[activeYear]} />
        </div>
      </div>
    </section>
  );
}
