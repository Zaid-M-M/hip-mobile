// categories for industrial parks
export const industrialCategoryMap = {
  maharashtra: 4,
  gujarat: 3,
  NCR: 2,
  goa: 5,
  karnataka: 7,
  telangana: 6,
  tamilnadu: 59,
};

// categories for incity Centers
export const incityCategoryMap = {
  NCR: 2,
  maharashtra: 57,
  gujarat: 3,
  karnataka: 56,
  telangana: 6,
  tamilnadu: 59,
  goa: 5,
};

export const staticRegionDataIndustrial = {
  maharashtra: {
    label: "Maharashtra",
    slug: "/maharashtra",
    fill: "#2E373A",
    stroke: "#000",
    strokeWidth: 0.8,
    numberBox: { x: 320, y: 460 },
    zoom: { scale: 3.5, x: 400, y: -200 },
    numberBoxMobile: {
      label: "12",
      x: 320,
      y: 460,
    },
    locationStyle: {
      circleRadius: 1.8, // <== circle radius
      fontSize: 5, // <== font size for labels
      yOffset: 3.8,
    },
  },
  gujarat: {
    label: "Gujarat",
    slug: "/gujarat",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 235, y: 380 },
    numberBoxMobile: {
      label: "12",
      x: 246,
      y: 370,
    },
    locationStyle: {
      circleRadius: 2,
      fontSize: 5.6,
      yOffset: 4.3,
    },
    zoom: { scale: 3.5, x: 700, y: 30 },
  },
  NCR: {
    label: "Delhi",
    slug: "/delhi",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 340, y: 238 },
    numberBoxMobile: {
      label: "12",
      x: 340,
      y: 246,
    },
    locationStyle: {
      circleRadius: 0.8,
      fontSize: 2.2,
      yOffset: 1.8,
    },
    zoom: { scale: 8, x: 980, y: 1160 },
  },
  telangana: {
    label: "Telangana",
    slug: "/telangana",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 395, y: 500 },
    numberBoxMobile: {
      x: 395,
      y: 490,
    },
    locationStyle: {
      circleRadius: 1.5,
      fontSize: 4,
      yOffset: 3.4,
    },
    zoom: { scale: 4.5, x: 320, y: -380 },
  },
  // goa: {
  //   label: "Goa",
  //   stroke: "#505050",
  //   slug: "/goa",
  //   strokeWidth: 0.2,
  //   numberBox: { x: 270, y: 570 },
  //   numberBoxMobile: {
  //     x: 285,
  //     y: 550,
  //   },
  //   // zoom: { scale: 6, x: 720, y: -820 },
  //   locationStyle: {
  //     circleRadius: 0.65,
  //     fontSize: 1.7,
  //     yOffset: 1.2,
  //   },
  //   zoom: { scale: 10, x: 1500, y: -1610 },
  // },
  karnataka: {
    label: "Karnataka",
    slug: "/karnataka",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 320, y: 560 },
    numberBoxMobile: {
      x: 325,
      y: 560,
    },
    locationStyle: {
      circleRadius: 1.6,
      fontSize: 6,
      yOffset: 4,
    },
    zoom: { scale: 3, x: 350, y: -400 },
  },
  tamilnadu: {
    label: "Tamil Nadu",
    slug: "/tamil-nadu",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 385, y: 660 },
    numberBoxMobile: {
      label: "12",
      x: 385,
      y: 630,
    },
    locationStyle: {
      circleRadius: 1.6,
      fontSize: 4,
      yOffset: 3.3,
    },
    zoom: { scale: 3.6, x: 250, y: -800 },
  },
};

export const staticRegionDataIncity = {
  maharashtra: {
    label: "Maharashtra",
    slug: "/maharashtra",
    fill: "#2E373A",
    stroke: "#000",
    strokeWidth: 0.8,
    numberBox: { x: 320, y: 460 },
    zoom: { scale: 3.5, x: 400, y: -200 },
    numberBoxMobile: {
      label: "12",
      x: 320,
      y: 460,
    },
    locationStyle: {
      circleRadius: 1.8,
      fontSize: 4.8,
      yOffset: 3.8,
    },
  },

  NCR: {
    label: "Delhi",
    slug: "/delhi",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.1,
    numberBox: { x: 340, y: 238 },
    numberBoxMobile: {
      label: "12",
      x: 340,
      y: 246,
    },
    locationStyle: {
      circleRadius: 0.6,
      fontSize: 2,
      yOffset: 1.8,
    },
    zoom: { scale: 8, x: 980, y: 1160 },
  },

  // goa: {
  //   label: "Goa",
  //   slug: "/goa",
  //   fill: "#2E373A",
  //   stroke: "#505050",
  //   strokeWidth: 0.2,
  //   numberBox: { x: 270, y: 570 },
  //   numberBoxMobile: {
  //     x: 285,
  //     y: 550,
  //   },
  //   locationStyle: {
  //     circleRadius: 0.65,
  //     fontSize: 2,
  //     yOffset: 1.2,
  //   },
  //   zoom: { scale: 12, x: 1980, y: -1900 },
  // },

  goa: {
    label: "Goa",
    slug: "/goa",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    xOffset: 1,
    numberBox: { x: 270, y: 570 },
    numberBoxMobile: {
      x: 285,
      y: 550,
    },
    locationStyle: {
      circleRadius: 0.65,
      fontSize: 2,
      yOffset: 1.2,
    },
    zoom: { scale: 8, x: 1080, y: -1400 },
  },
  karnataka: {
    label: "Karnataka",
    slug: "/karnataka",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 320, y: 560 },
    numberBoxMobile: {
      x: 325,
      y: 560,
    },
    locationStyle: {
      circleRadius: 1.6,
      fontSize: 5,
      yOffset: 4,
    },
    zoom: { scale: 3, x: 350, y: -400 },
  },
  tamilnadu: {
    label: "Tamil Nadu",
    slug: "/tamil-nadu",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 385, y: 660 },
    numberBoxMobile: {
      label: "12",
      x: 385,
      y: 630,
    },
    locationStyle: {
      circleRadius: 1.6,
      fontSize: 4,
      yOffset: 3.3,
    },
    zoom: { scale: 3.6, x: 250, y: -800 },
  },
};
