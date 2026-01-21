// export const Icon1 = ({ active = false, ...props }) => (
//   <svg
//     width="100%"
//     height="100%"
//     viewBox="0 0 110 111"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//     className="transition-all duration-500 overflow-auto"
//   >
//     <rect
//       x="0.547813"
//       y="0.683127"
//       width="108.92"
//       height="108.92"
//       rx="54.46"
//       fill={active ? "white" : "black"}
//       className="transition-all duration-500"
//     />
//     <rect
//       x="0.547813"
//       y="0.683127"
//       width="108.92"
//       height="108.92"
//       rx="54.46"
//       className="transition-all duration-500"
//       stroke={active ? "white" : "red"}
//       strokeWidth="2"
//     />
//     {/* Rest of the paths */}
//     <path
//       d="M67.735 56.5135V54.3625C67.735 53.7685 67.2535 53.287 66.6595 53.287H65.4651C65.2229 52.2298 64.8057 51.2394 64.2461 50.3474L65.0916 49.5018C65.5116 49.0819 65.5116 48.4009 65.0916 47.9809L63.5707 46.4599C63.1507 46.0399 62.4697 46.0399 62.0497 46.4599L61.2042 47.3055C60.3122 46.7459 59.3219 46.3287 58.2646 46.0865V44.8921C58.2646 44.2981 57.7831 43.8166 57.1891 43.8166H55.0381C54.4441 43.8166 53.9626 44.2981 53.9626 44.8921V46.0865C52.9054 46.3287 51.915 46.7459 51.023 47.3055L50.1774 46.4599C49.7575 46.0399 49.0765 46.0399 48.6565 46.4599L47.1355 47.9809C46.7155 48.4009 46.7155 49.0819 47.1355 49.5018L47.9811 50.3474C47.4215 51.2394 47.0043 52.2297 46.7621 53.287H45.5677C44.9737 53.287 44.4922 53.7685 44.4922 54.3625V56.5135C44.4922 57.1075 44.9737 57.589 45.5677 57.589H46.7621C47.0043 58.6462 47.4215 59.6365 47.9811 60.5286L47.1355 61.3741C46.7155 61.7941 46.7155 62.4751 47.1355 62.8951L48.6565 64.416C49.0765 64.836 49.7575 64.836 50.1774 64.416L51.023 63.5705C51.915 64.1301 52.9053 64.5473 53.9626 64.7895V65.9839C53.9626 66.5779 54.4441 67.0594 55.0381 67.0594H57.1891C57.7831 67.0594 58.2646 66.5779 58.2646 65.9839V64.7895C59.3218 64.5473 60.3121 64.1301 61.2042 63.5705L62.0497 64.416C62.4697 64.836 63.1507 64.836 63.5707 64.416L65.0916 62.8951C65.5116 62.4751 65.5116 61.7941 65.0916 61.3741L64.2461 60.5286C64.8057 59.6366 65.2229 58.6463 65.4651 57.589H66.6595C67.2535 57.589 67.735 57.1075 67.735 56.5135Z"
//       stroke={active ? "red" : "red"}
//       className="transition-all duration-500"
//       strokeWidth="1.08"
//       strokeMiterlimit="10"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     {/* Add remaining paths and circles, replacing stroke/fill as needed */}
//   </svg>
// );
export const Icon1 = ({ active = false, ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 110 111"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="transition-all duration-500 overflow-auto"
  >
    <defs className="transition-all duration-500">
      {/* Define Gradient */}
      <linearGradient
        id="gradientStroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
        className="transition-all duration-500"
      >
        <stop
          className="transition-all duration-500"
          offset="23%"
          stopColor="#AC38D9"
        />
        <stop
          className="transition-all duration-500"
          offset="100%"
          stopColor="#F47922"
        />
      </linearGradient>
    </defs>

    {/* Background Circle */}
    <rect
      x="0.547813"
      y="0.683127"
      width="108.92"
      height="108.92"
      rx="54.46"
      fill={active ? "white" : "black"}
      className="transition-all duration-500"
    />

    {/* Outer Stroke Circle */}
    <rect
      x="0.547813"
      y="0.683127"
      width="108.92"
      height="108.92"
      rx="54.46"
      className="transition-all duration-500"
      stroke={active ? "white" : "url(#gradientStroke)"} // Gradient stroke when inactive
      strokeWidth="2"
      style={{
        transition: "stroke 0.5s ease", // Add transition specifically for stroke
      }}
    />

    {/* Main Path */}
    <path
      d="M67.735 56.5135V54.3625C67.735 53.7685 67.2535 53.287 66.6595 53.287H65.4651C65.2229 52.2298 64.8057 51.2394 64.2461 50.3474L65.0916 49.5018C65.5116 49.0819 65.5116 48.4009 65.0916 47.9809L63.5707 46.4599C63.1507 46.0399 62.4697 46.0399 62.0497 46.4599L61.2042 47.3055C60.3122 46.7459 59.3219 46.3287 58.2646 46.0865V44.8921C58.2646 44.2981 57.7831 43.8166 57.1891 43.8166H55.0381C54.4441 43.8166 53.9626 44.2981 53.9626 44.8921V46.0865C52.9054 46.3287 51.915 46.7459 51.023 47.3055L50.1774 46.4599C49.7575 46.0399 49.0765 46.0399 48.6565 46.4599L47.1355 47.9809C46.7155 48.4009 46.7155 49.0819 47.1355 49.5018L47.9811 50.3474C47.4215 51.2394 47.0043 52.2297 46.7621 53.287H45.5677C44.9737 53.287 44.4922 53.7685 44.4922 54.3625V56.5135C44.4922 57.1075 44.9737 57.589 45.5677 57.589H46.7621C47.0043 58.6462 47.4215 59.6365 47.9811 60.5286L47.1355 61.3741C46.7155 61.7941 46.7155 62.4751 47.1355 62.8951L48.6565 64.416C49.0765 64.836 49.7575 64.836 50.1774 64.416L51.023 63.5705C51.915 64.1301 52.9053 64.5473 53.9626 64.7895V65.9839C53.9626 66.5779 54.4441 67.0594 55.0381 67.0594H57.1891C57.7831 67.0594 58.2646 66.5779 58.2646 65.9839V64.7895C59.3218 64.5473 60.3121 64.1301 61.2042 63.5705L62.0497 64.416C62.4697 64.836 63.1507 64.836 63.5707 64.416L65.0916 62.8951C65.5116 62.4751 65.5116 61.7941 65.0916 61.3741L64.2461 60.5286C64.8057 59.6366 65.2229 58.6463 65.4651 57.589H66.6595C67.2535 57.589 67.735 57.1075 67.735 56.5135Z"
      stroke={active ? "black" : "red"} // Apply the same gradient stroke to the path
      className="transition-all duration-500"
      strokeWidth="1.08"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "stroke 0.5s ease", // Add transition specifically for stroke
      }}
    />
  </svg>
);
