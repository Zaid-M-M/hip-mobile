// import Image from 'next/image';
// import { fetchHeroContent } from '@/lib/cms';
// import Btn from '@/components/global/Btn';

// export default async function HeroBanner() {
//   const heroData = await fetchHeroContent();

//   return (
//     <section className="relative w-full h-screen text-white">
//       <Image
//         src={heroData.backgroundImage}
//         alt="Hero background"
//         fill
//         className="z-0 object-cover"
//         priority
//       />
//       <div className="absolute z-10 w-full h-full p-12 bg-gradient-to-r from-black/60 to-transparent">
//         <h1 className="mb-4 text-5xl font-bold">{heroData.title}</h1>
//         <p className="mb-6 text-xl">{heroData.subtitle}</p>
//         <div className="flex gap-4">
//           {heroData.buttons.map((btn, i) => (
//             <Btn
//               key={i}
//               text={btn.label}
//               href={btn.link}
//               className="bg-gradient-to-r from-purple-500 to-orange-400"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import { fetchHeroContent } from "@/lib/cms";
import HeroBannerClient from "./HeroBannerClient";

export default async function HeroBanner() {
  // const heroData = await fetchHeroContent();
  return <HeroBannerClient />;
}
