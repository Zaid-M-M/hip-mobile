// import Footer from "@/components/global/Footer";
// import "./globals.css";
// import { Barlow, Inter } from "next/font/google";
// import { NavProvider } from "./context/NavContext";
// import ClientWrapper from "./ClientWrapper";
// import NavMain from "@/components/navbar/NavMain";
// import { PageLoaderProvider } from "./context/PageLoaderProvider";
// import EnquiryButton from "@/components/global/EnquiryForm/EnquiryButton";
// import Book_Site_Button from "@/components/global/Book-site/Book_SiteButton";
// import Script from "next/script";
// import { GoogleTagManager } from "@next/third-parties/google";
// import { Analytics } from "@vercel/analytics/next";

// const barlow = Barlow({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-barlow",
//   display: "swap",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-inter",
//   display: "swap",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
//       <body className="antialiased">
//         {/* ✅ OFFICIAL GTM (NO noscript needed) */}
//         <GoogleTagManager gtmId="GTM-PFD35H72" />

//         {/* Third-party chat */}
//         <Script
//           src="https://code.tidio.co/ie0hwxpri9o05xhjbf2zly2wuom4y6ri.js"
//           strategy="afterInteractive"
//         />

//         <NavProvider>
//           <PageLoaderProvider>
//             <NavMain />

//             <div className="lg:static lg:block fixed w-full flex bottom-0 left-0 z-[1000]">
//               <EnquiryButton />
//               <Book_Site_Button />
//             </div>

//             <ClientWrapper>{children}</ClientWrapper>
//             <Footer />
//           </PageLoaderProvider>
//         </NavProvider>

//         <Analytics />
//       </body>
//     </html>
//   );
// }

import Footer from "@/components/global/Footer";
import "./globals.css";
import { Barlow, Inter } from "next/font/google";
import { NavProvider } from "./context/NavContext";
import ClientWrapper from "./ClientWrapper";
import NavMain from "@/components/navbar/NavMain";
import { PageLoaderProvider } from "./context/PageLoaderProvider";
import EnquiryButton from "@/components/global/EnquiryForm/EnquiryButton";
import Book_Site_Button from "@/components/global/Book-site/Book_SiteButton";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  // Schema.org JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hiparks.com/#localbusiness",
    name: "Horizon Industrial Parks Ltd",
    alternateName: "HiParks",
    url: "https://www.hiparks.com/",
    logo: "https://www.hiparks.com/nav/Horizon_black.svg",
    image: "https://www.hiparks.com/nav/Horizon_black.svg",
    description:
      "Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India",
    address:
      "Horizon Industrial Parks Ltd Floor 15, Tower 1, One World Center Lower Parel, Mumbai 400 013",
    telephone: ["+91 22 4158 1000", "+91 88799 70705"],
    email: "contactus@HiParks.com",
    latitude: "19.00990",
    longitude: "72.83560",
    areaServed: [
      "Delhi",
      "Haryana",
      "Goa",
      "Maharashtra",
      "Gujarat",
      "Tamil Nadu",
      "Telangana",
      "Karnataka",
    ],
    sameAs: [
      "https://in.linkedin.com/company/horizon-industrial-parks",
      "https://www.facebook.com/horizonindustrialparks/",
      "https://www.youtube.com/channel/UCOfvGN61RBCKY48sE8I6mJQ",
      "https://www.instagram.com/horizonindustrialparks/",
    ],
    mainEntityOfPage: [
      "https://www.hiparks.com/delhi",
      "https://www.hiparks.com/haryana",
      "https://www.hiparks.com/goa",
      "https://www.hiparks.com/maharashtra",
      "https://www.hiparks.com/gujarat",
      "https://www.hiparks.com/tamil-nadu",
      "https://www.hiparks.com/telangana",
      "https://www.hiparks.com/karnataka",
    ],
  };

  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://phpstack-725513-2688800.cloudwaysapps.com"
        />
        <link
          rel="dns-prefetch"
          href="https://phpstack-725513-2688800.cloudwaysapps.com"
        />
        <link
          rel="preload"
          as="image"
          href="/home/home_banner_desk.webp"
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/home/home_banner_mob.webp"
          fetchpriority="high"
        />
      </head>
      <body className="antialiased">
        {/* ✅ Schema (THIS WORKS IN APP ROUTER) */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ✅ Updated GTM ID - Handles the script and dataLayer automatically */}
        <GoogleTagManager gtmId="GTM-W5TDXMD" />

        {/* ✅ Added Google Analytics 4 (gtag.js) */}
        <GoogleAnalytics gaId="G-2VB35ZXSZY" />

        {/* Third-party chat */}
        <Script
          src="https://code.tidio.co/ie0hwxpri9o05xhjbf2zly2wuom4y6ri.js"
          strategy="afterInteractive"
        />

        <NavProvider>
          <PageLoaderProvider>
            <NavMain />

            {/* Floating Action Buttons */}
            <div className="lg:static lg:block fixed w-full flex bottom-0 left-0 z-[1000]">
              <EnquiryButton />
              <Book_Site_Button />
            </div>

            <ClientWrapper>{children}</ClientWrapper>
            <Footer />
          </PageLoaderProvider>
        </NavProvider>
      </body>
    </html>
  );
}
