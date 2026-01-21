"use client";
import React from "react";

const Culture_sec1 = ({ career_spotlight_title }) => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden">
        <img
          className="w-[100%] md:block hidden"
          src="/culture/cultspot.webp"
        ></img>
        <img
          className="w-[100%] min-h-[70vh] object-cover md:!hidden block"
          src="/culture/mobcult.webp"
        ></img>

        <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
          <div className="bw-m px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white ">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px] ">
              Culture
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="bw-m text-white text-[38px] leading-[47px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px] tracking-[-1.92px] ld:tracking-[-2px] xl:tracking-[-3.04px]">
              <span
                dangerouslySetInnerHTML={{ __html: career_spotlight_title }}
              />
              <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture_sec1;

//export const dynamic = "force-dynamic"; // ensure SSR (not cached at build time)

// export default async function CareerPage() {
//   const apiBase = process.env.NEXT_PUBLIC_API_BASE; // from .env.local

//   // SSR fetch (runs on server)
//   const res = await fetch(`${apiBase}/career_page`, {
//     cache: "no-store", // ensures SSR, no caching
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch career page data");
//   }

//   const data = await res.json();

//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Career Page</h1>

//       {data.length > 0 ? (
//         data.map((item) => (
//           <div key={item.id} className="mb-6 border p-4 rounded">
//             <h2 className="text-xl font-semibold">{item.title?.rendered}</h2>
//             <div
//               className="prose"
//               dangerouslySetInnerHTML={{ __html: item.content?.rendered }}
//             />
//           </div>
//         ))
//       ) : (
//         <p>No career data found.</p>
//       )}
//     </main>
//   );
// }
