/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   instrumentationHook: true,
  // },
  trailingSlash: true, // Crucial for PHP servers
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phpstack-725513-2688800.cloudwaysapps.com",
      },
      {
        protocol: "https",
        hostname: "phpstack-725513-2801524.cloudwaysapps.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/industrial-and-logistics-parks-in-india/",
        destination: "/industrial-logistics-parks/",
        permanent: true,
      },
      {
        source: "/parks",
        destination: "/network-overview/",
        permanent: true,
      },
      {
        source: "/solutions/",
        destination: "/capabilities-overview/",
        permanent: true,
      },
      {
        source: "/solutions/strategic-land-acquisition/",
        destination: "/integrated-business-solutions/",
        permanent: true,
      },
      {
        source: "/solutions/park-compliances-and-approvals/",
        destination: "/integrated-business-solutions/",
        permanent: true,
      },
      {
        source: "/solutions/park-construction-and-development/",
        destination: "/integrated-business-solutions/",
        permanent: true,
      },
      {
        source: "/solutions/property-management/",
        destination: "/integrated-business-solutions/",
        permanent: true,
      },
      {
        source: "/explore/",
        destination: "/know-us/",
        permanent: true,
      },
      {
        source: "/reverse-logistics-india-supply-chain-strategy/",
        destination: "/white-paper/reverse-logistics-in-india/",
        permanent: true,
      },

      {
        source: "/media/press_releases/",
        destination: "/media/?tab=press-release",
        permanent: true,
      },
      {
        source:
          "/press_releases/japanese-auto-parts-giant-yazaki-expands-india-footprint-joins-hands-with-blackstones-horizon-industrial-parks",
        destination:
          "/press-release/yazaki-india-expands-footprint-in-collaboration-with-horizon-industrial-parks/",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },
      {
        source: "/blogs/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },
      {
        source: "/events/",
        destination: "/media/?tab=events",
        permanent: true,
      },
      {
        source: "/blog/category/technology/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },
      {
        source: "/blog/category/esg/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },
      {
        source: "/blog/category/policy/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },

      {
        source: "/press_releases/:slug",
        destination: "/press-release/:slug",
        permanent: true,
      },
      {
        source: "/privacy_policy/",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/gujara",
        destination: "/gujarat/",
        permanent: true,
      },
      {
        source: "/tamil_nadu",
        destination: "/tamil-nadu/",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_21.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_21.pdf",
        permanent: true,
      },
      {
        source: "/compliance_report/Hosur/Six_Monthly_Compliance_June_21.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_21.pdf",
        permanent: true,
      },
      {
        source: "/ESG-Report-FY25.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/ESG-Report-FY25.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2021.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2021.pdf",
        permanent: true,
      },
      {
        source: "/lead-report/LEADS2023_REPORT.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/lead-report/LEADS2023_REPORT.pdf",
        permanent: true,
      },
      {
        source: "/compliance_report/Hosur/Six_Monthly_Compliance_June_22.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_22.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2022.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2022.pdf",
        permanent: true,
      },
      {
        source: "/ESG-Policy-FY25.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/ESG-Policy-FY25.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2021.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2021.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_22.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_22.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2020.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2020.pdf",
        permanent: true,
      },
      {
        source: "/compliance_report/Hosur/Environment Clearance.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Environment Clearance.pdf",
        permanent: true,
      },
      {
        source: "/industrial-and-warehousing-park-hosur-i",
        destination: "/industrial-and-warehousing-park-hosur/",
        permanent: true,
      },
      {
        source: "/warehousing-park-farukhnagar",
        destination: "/warehousing-park-farukhnagar-i/",
        permanent: true,
      },
      {
        source: "/parks/farukhnagar",
        destination: "/warehousing-park-farukhnagar-i/",
        permanent: true,
      },
      {
        source: "/industrial-and-warehousing-park-verna",
        destination: "/incity-centers/verna/",
        permanent: true,
      },
      {
        source: "/chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/warehousing-park-bilaspur-i",
        destination: "/industrial-and-warehousing-park-bilaspur/",
        permanent: true,
      },
      {
        source: "/warehousing-park-bilaspur-ii",
        destination: "/industrial-and-warehousing-park-bilaspur/",
        permanent: true,
      },
      {
        source: "/industrial-and-warehousing-park-kothur-2",
        destination: "/industrial-and-warehousing-park-kothur/",
        permanent: true,
      },
      {
        source: "/industrial-and-warehousing-park-dobbaspet-idobbaspet-i",
        destination: "/industrial-and-warehousing-park-dobbaspet-i/",
        permanent: true,
      },
      {
        source: "/goa/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/haryana/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/gujarat/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/delhi/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/maharashtra/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/warehousing-park-narasapura",
        destination: "/",
        permanent: true,
      },
      // {
      //   source: "/industrial-and-logistics-parks-in-india?trk=test",
      //   destination: "/industrial-logistics-parks/",
      //   permanent: true,
      // },
      {
        source: "/malur",
        destination: "/warehousing-park-malur/",
        permanent: true,
      },
      {
        source: "/hosur-i",
        destination: "/industrial-and-warehousing-park-hosur/",
        permanent: true,
      },
      {
        source: "/bhayala",
        destination: "/industrial-and-warehousing-park-bhayala/",
        permanent: true,
      },
      {
        source: "/assets/park_2.f9e4e004dbeb877cc28c.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/faqs/",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/culture/",
        permanent: true,
      },
      {
        source: "/reverse-logistics-india-supply-chain-strategy",
        destination: "/white-paper/reverse-logistics-in-india/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/privacy_policy",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/assets/career_spotlight.f155edd13af063453f51.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/assets/park_const_bts.2057b326bf92e60344a2.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/assets/park_exterior.fb650a0cd5ce538c301d.webp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/events/cricket-dhamaka",
        destination: "/media/?tab=events",
        permanent: true,
      },
      {
        source: "/events/hiparks-cricket-dhamaka-2024",
        destination: "/media/?tab=events",
        permanent: true,
      },
      {
        source: "/events/elsc-awards-2023",
        destination: "/media/?tab=events",
        permanent: true,
      },
      {
        source: "/blog/where-wings-are-made",
        destination:
          "/blog/where-wings-are-made-a-guide-to-aerospace-warehousing/",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-a-warehouse-location",
        destination: "/blog/how-to-find-the-right-warehouse/",
        permanent: true,
      },
      {
        source: "/blog/goa-the-new-",
        destination:
          "/blog/goa-the-new-economic-and-warehousing-destination-on-the-west-coast/",
        permanent: true,
      },
    ];
  },

  // Keep wp-content here if it's working, but REMOVE /newsletter/ from here
  async rewrites() {
    return [
      {
        source: "/wp-content/:path*",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/:path*",
      },
    ];
  },
};

export default nextConfig;
