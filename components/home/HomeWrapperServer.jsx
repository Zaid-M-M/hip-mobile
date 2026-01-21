// // components/home/HomeWrapperServer.tsx (or .jsx)
// // import { fetchHeroContent, fetchTabData } from "@/lib/cms";
// import TestimonialsSchemaServer from "./ClientTestimonials/TestimonialsSchemaServer";
// import { fetchTestimonials } from "@/lib/fetchTestimonials";
// import HomeWrapper from "./HomeWrapper";

// export default async function HomeWrapperServer() {
//   // const heroData = await fetchHeroContent();
//   // const tabData = await fetchTabData();
//   return (
//     <>
//       <TestimonialsSchemaServer
//         testimonials={testimonials}
//         siteName="Your Site Name"
//       />
//       <HomeWrapper testimonials={testimonials} />
//     </>
//   );
// }
import HomeWrapper from "./HomeWrapper";
import { fetchTestimonials } from "@/src/lib/fetchTestimonials";
import TestimonialsSchemaServer from "./ClientTestimonials/TestimonialsSchemaServer";

export default async function HomeWrapperServer() {
  // ✅ FETCH HERE
  const testimonials = await fetchTestimonials();

  return (
    <>
      {/* ✅ Pass fetched data to schema */}
      <TestimonialsSchemaServer
        testimonials={testimonials}
        siteName="Your Site Name"
      />
      {/* ✅ Pass testimonials down to HomeWrapper */}
      <HomeWrapper testimonials={testimonials} />
    </>
  );
}
