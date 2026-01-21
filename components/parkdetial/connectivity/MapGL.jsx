// "use client";
// import * as React from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
// import { motion, AnimatePresence } from "framer-motion";
// import "mapbox-gl/dist/mapbox-gl.css";

// // Haversine distance (meters)
// function getDistance(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const R = 6371e3; // Earth radius in meters
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);
//   const dLat = toRad(coord2[1] - coord1[1]);
//   const dLon = toRad(coord2[0] - coord1[0]);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; // meters
// }

// export default function MapGLF() {
//   const [route, setRoute] = React.useState(null);
//   const [duration, setDuration] = React.useState(null);
//   const [activeTab, setActiveTab] = React.useState(0);

//   const routesData = [
//     {
//       id: 0,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "SH 15A",
//         coordinates: [76.8043671931145, 28.477278864805193],
//       },
//     },
//     {
//       id: 1,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "KMP Expressway",
//         coordinates: [76.87629417148328, 28.465241597915853],
//       },
//     },
//     {
//       id: 2,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "NH 352",
//         coordinates: [76.55356340253185, 28.934118184971528],
//       },
//     },
//   ];

//   const current = routesData[activeTab];

//   React.useEffect(() => {
//     const fetchRoute = async () => {
//       const dist = getDistance(
//         current.from.coordinates,
//         current.to.coordinates
//       );

//       if (dist < 200) {
//         // Too close → straight line instead of API
//         setRoute({
//           type: "LineString",
//           coordinates: [current.from.coordinates, current.to.coordinates],
//         });
//         setDuration(null);
//         return;
//       }

//       // Otherwise fetch driving route
//       const query = await fetch(
//         `https://api.mapbox.com/directions/v5/mapbox/driving/${current.from.coordinates.join(
//           ","
//         )};${current.to.coordinates.join(
//           ","
//         )}?geometries=geojson&overview=full&access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//         }`
//       );
//       const data = await query.json();
//       if (data.routes && data.routes.length > 0) {
//         setRoute(data.routes[0].geometry);
//         setDuration(Math.round(data.routes[0].duration / 60));
//       }
//     };
//     fetchRoute();
//   }, [activeTab]);

//   const routeCoords = route?.coordinates || [];
//   const snapStart = routeCoords[0];
//   const snapEnd = routeCoords[routeCoords.length - 1];
//   const midPoint =
//     routeCoords.length > 0
//       ? routeCoords[Math.floor(routeCoords.length / 2)]
//       : null;

//   return (
//     <div className="relative w-screen h-screen">
//       {/* Tabs */}
//       <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//         {routesData.map((r, i) => (
//           <button
//             key={r.id}
//             onClick={() => setActiveTab(i)}
//             className={`px-4 py-2 rounded-md font-medium text-sm ${
//               activeTab === i ? "bg-gray-300 text-black" : "bg-white text-black"
//             }`}
//           >
//             {r.from.name} → {r.to.name}
//           </button>
//         ))}
//       </div>

//       {/* Map with fade animation */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <Map
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//             initialViewState={{
//               longitude: current.from.coordinates[0],
//               latitude: current.from.coordinates[1],
//               zoom: 13,
//             }}
//             style={{ width: "100%", height: "100%" }}
//             mapStyle="mapbox://styles/mapbox/dark-v11"
//           >
//             {/* Start & End markers */}
//             <Marker
//               longitude={current.from.coordinates[0]}
//               latitude={current.from.coordinates[1]}
//               anchor="center"
//             >
//               <div className="w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-md"></div>
//             </Marker>
//             <Marker
//               longitude={current.to.coordinates[0]}
//               latitude={current.to.coordinates[1]}
//               anchor="center"
//             >
//               <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md"></div>
//             </Marker>

//             {/* Duration pill */}
//             {duration && midPoint && (
//               <Marker longitude={midPoint[0]} latitude={midPoint[1]}>
//                 <div className="flex items-center gap-2 bg-white text-black text-[14px] bw-m px-3 py-1 rounded-full shadow-md">
//                   ⏱ {duration} min
//                 </div>
//               </Marker>
//             )}

//             {/* Main route line */}
//             {route && (
//               <Source
//                 id="route"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: route,
//                 }}
//               >
//                 <Layer
//                   id="route-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "#FF7F0E",
//                     "line-width": 4,
//                   }}
//                 />
//               </Source>
//             )}

//             {/* Faint connectors (only if using snapped route) */}
//             {duration && snapStart && (
//               <Source
//                 id="connector-start"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [current.from.coordinates, snapStart],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-start-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//             {duration && snapEnd && (
//               <Source
//                 id="connector-end"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [snapEnd, current.to.coordinates],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-end-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//           </Map>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import * as React from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
// import { motion, AnimatePresence } from "framer-motion";
// import "mapbox-gl/dist/mapbox-gl.css";

// // Haversine distance (meters)
// function getDistance(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const R = 6371e3; // Earth radius in meters
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);
//   const dLat = toRad(coord2[1] - coord1[1]);
//   const dLon = toRad(coord2[0] - coord1[0]);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; // meters
// }

// // Format duration (minutes → hr/min string)
// function formatDuration(mins) {
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLF() {
//   const [route, setRoute] = React.useState(null);
//   const [duration, setDuration] = React.useState(null);
//   const [activeTab, setActiveTab] = React.useState(0);

//   const routesData = [
//     {
//       id: 0,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "SH 15A",
//         coordinates: [76.8043671931145, 28.477278864805193],
//       },
//       zoom: 17,
//     },
//     {
//       id: 1,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "KMP Expressway",
//         coordinates: [76.87629417148328, 28.465241597915853],
//       },
//       zoom: 12,
//     },
//     {
//       id: 2,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "NH 352",
//         coordinates: [76.55356340253185, 28.934118184971528],
//       },
//       zoom: 8,
//     },
//   ];

//   const current = routesData[activeTab];

//   React.useEffect(() => {
//     const fetchRoute = async () => {
//       const dist = getDistance(
//         current.from.coordinates,
//         current.to.coordinates
//       );

//       if (dist < 200) {
//         // Too close → straight line instead of API
//         setRoute({
//           type: "LineString",
//           coordinates: [current.from.coordinates, current.to.coordinates],
//         });
//         setDuration(null);
//         return;
//       }

//       // Otherwise fetch driving route
//       const query = await fetch(
//         `https://api.mapbox.com/directions/v5/mapbox/driving/${current.from.coordinates.join(
//           ","
//         )};${current.to.coordinates.join(
//           ","
//         )}?geometries=geojson&overview=full&access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//         }`
//       );
//       const data = await query.json();
//       if (data.routes && data.routes.length > 0) {
//         setRoute(data.routes[0].geometry);
//         setDuration(Math.round(data.routes[0].duration / 60));
//       }
//     };
//     fetchRoute();
//   }, [activeTab]);

//   const routeCoords = route?.coordinates || [];
//   const snapStart = routeCoords[0];
//   const snapEnd = routeCoords[routeCoords.length - 1];
//   const midPoint =
//     routeCoords.length > 0
//       ? routeCoords[Math.floor(routeCoords.length / 2)]
//       : null;

//   return (
//     <div className="relative w-screen h-screen">
//       {/* Tabs */}
//       <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//         {routesData.map((r, i) => (
//           <button
//             key={r.id}
//             onClick={() => setActiveTab(i)}
//             className={`px-4 py-2 rounded-md font-medium text-sm ${
//               activeTab === i ? "bg-gray-300 text-black" : "bg-white text-black"
//             }`}
//           >
//             {r.from.name} → {r.to.name}
//           </button>
//         ))}
//       </div>

//       {/* Map with fade animation */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <Map
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//             initialViewState={{
//               longitude: current.from.coordinates[0],
//               latitude: current.from.coordinates[1],
//               zoom: current.zoom,
//             }}
//             style={{ width: "100%", height: "100%" }}
//             mapStyle="mapbox://styles/mapbox/dark-v11"
//           >
//             {/* Start marker with label */}
//             <Marker
//               longitude={current.from.coordinates[0]}
//               latitude={current.from.coordinates[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-white text-black text-[14px] bw-m px-3 py-1 rounded-full shadow-md mb-1">
//                   {current.from.name}
//                 </div>
//                 <div className="w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-md"></div>
//               </div>
//             </Marker>

//             {/* End marker with label */}
//             <Marker
//               longitude={current.to.coordinates[0]}
//               latitude={current.to.coordinates[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-white text-black text-[14px] bw-m px-3 py-1 rounded-full shadow-md mb-1">
//                   {current.to.name}
//                 </div>
//                 <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md"></div>
//               </div>
//             </Marker>

//             {/* Duration pill */}
//             {duration && midPoint && (
//               <Marker longitude={midPoint[0]} latitude={midPoint[1]}>
//                 <div className="flex items-center gap-2 bg-white text-black text-[14px] bw-m px-3 py-1 rounded-full shadow-md">
//                   ⏱ {formatDuration(duration)}
//                 </div>
//               </Marker>
//             )}

//             {/* Main route line */}
//             {route && (
//               <Source
//                 id="route"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: route,
//                 }}
//               >
//                 <Layer
//                   id="route-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "#FF7F0E",
//                     "line-width": 4,
//                   }}
//                 />
//               </Source>
//             )}

//             {/* Faint connectors (only if using snapped route) */}
//             {duration && snapStart && (
//               <Source
//                 id="connector-start"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [current.from.coordinates, snapStart],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-start-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//             {duration && snapEnd && (
//               <Source
//                 id="connector-end"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [snapEnd, current.to.coordinates],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-end-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//           </Map>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import * as React from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
// import { motion, AnimatePresence } from "framer-motion";
// import "mapbox-gl/dist/mapbox-gl.css";

// // Haversine distance (meters)
// function getDistance(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const R = 6371e3; // Earth radius in meters
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);
//   const dLat = toRad(coord2[1] - coord1[1]);
//   const dLon = toRad(coord2[0] - coord1[0]);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; // meters
// }

// // Calculate initial bearing (degrees, 0-360)
// function getBearing(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const toDeg = (v) => (v * 180) / Math.PI;
//   const lon1 = toRad(coord1[0]);
//   const lon2 = toRad(coord2[0]);
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);

//   const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
//   const x =
//     Math.cos(lat1) * Math.sin(lat2) -
//     Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
//   let brng = toDeg(Math.atan2(y, x));
//   brng = (brng + 360) % 360;
//   return Math.round(brng);
// }

// // Format duration (minutes → hr/min string)
// function formatDuration(mins) {
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLF({
//   main_access,
//   connectivity,
//   industrial_clusters_nearby,
//   clan,
//   clon,
// }) {
//   const [route, setRoute] = React.useState(null);
//   const [duration, setDuration] = React.useState(null);
//   const [activeTab, setActiveTab] = React.useState(0);

//   const routesData = [
//     {
//       id: 0,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "SH 15A",
//         coordinates: [76.8043671931145, 28.477278864805193],
//       },
//       zoom: 17,
//     },
//     {
//       id: 1,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "KMP Expressway",
//         coordinates: [76.85489779875378, 28.458607644554547],
//       },
//       zoom: 12,
//     },
//     {
//       id: 2,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "NH 352",
//         coordinates: [76.55356340253185, 28.934118184971528],
//       },
//       zoom: 8,
//     },
//   ];

//   const current = routesData[activeTab];

//   React.useEffect(() => {
//     const fetchRoute = async () => {
//       const dist = getDistance(
//         current.from.coordinates,
//         current.to.coordinates
//       );

//       if (dist < 200) {
//         // Too close → straight line instead of API
//         setRoute({
//           type: "LineString",
//           coordinates: [current.from.coordinates, current.to.coordinates],
//         });
//         setDuration(null);
//         return;
//       }

//       // Calculate bearing for directional constraints
//       const bearing = getBearing(
//         current.from.coordinates,
//         current.to.coordinates
//       );

//       // First try with bearings to avoid U-turns
//       let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${current.from.coordinates.join(
//         ","
//       )};${current.to.coordinates.join(
//         ","
//       )}?geometries=geojson&overview=full&bearings=${bearing},45;${bearing},45&access_token=${
//         process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//       }`;

//       let query = await fetch(url);
//       let data = await query.json();

//       // If no route found with bearings, fallback without
//       if (!data.routes || data.routes.length === 0) {
//         url = `https://api.mapbox.com/directions/v5/mapbox/driving/${current.from.coordinates.join(
//           ","
//         )};${current.to.coordinates.join(
//           ","
//         )}?geometries=geojson&overview=full&access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//         }`;
//         query = await fetch(url);
//         data = await query.json();
//       }

//       if (data.routes && data.routes.length > 0) {
//         setRoute(data.routes[0].geometry);
//         setDuration(Math.round(data.routes[0].duration / 60));
//       } else {
//         // If still no route, fallback to straight line
//         setRoute({
//           type: "LineString",
//           coordinates: [current.from.coordinates, current.to.coordinates],
//         });
//         setDuration(null);
//       }
//     };
//     fetchRoute();
//   }, [activeTab]);

//   const routeCoords = route?.coordinates || [];
//   const snapStart = routeCoords[0];
//   const snapEnd = routeCoords[routeCoords.length - 1];
//   const midPoint =
//     routeCoords.length > 0
//       ? routeCoords[Math.floor(routeCoords.length / 2)]
//       : null;

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       {/* Tabs */}
//       <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//         {routesData.map((r, i) => (
//           <button
//             key={r.id}
//             onClick={() => setActiveTab(i)}
//             className={`px-4 py-2 rounded-md font-medium text-sm ${
//               activeTab === i ? "bg-gray-300 text-black" : "bg-white text-black"
//             }`}
//           >
//             {r.from.name} → {r.to.name}
//           </button>
//         ))}
//       </div>

//       {/* Map with fade animation */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <Map
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//             initialViewState={{
//               longitude: current.from.coordinates[0],
//               latitude: current.from.coordinates[1],
//               zoom: current.zoom,
//             }}
//             style={{ width: "100%", height: "100%" }}
//             mapStyle="mapbox://styles/mapbox/dark-v11"
//           >
//             {/* Start marker with label */}
//             <Marker
//               longitude={current.from.coordinates[0]}
//               latitude={current.from.coordinates[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   {current.from.name}
//                 </div>
//                 {/* <div className="w-10 h-10 bg-white rounded-full border-[9px] border-[#8B37A4] shadow-md"></div> */}
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </Marker>

//             {/* End marker with label */}
//             <Marker
//               longitude={current.to.coordinates[0]}
//               latitude={current.to.coordinates[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   {current.to.name}
//                 </div>
//                 {/* <div className="w-10 h-10 bg-white rounded-full border-[9px] border-[#8B37A4] shadow-md"></div> */}
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </Marker>

//             {/* Duration pill */}
//             {duration && midPoint && (
//               <Marker longitude={midPoint[0]} latitude={midPoint[1]}>
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex  py-2 h-fit xl:h-[50px] items-center justify-center min-w-[120px] rounded-full shadow-md mb-1 gap-2">
//                   {/* SVG clock icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="19"
//                     height="19"
//                     viewBox="0 0 19 19"
//                     fill="none"
//                   >
//                     <path
//                       d="M11.3406 1.59521H7.51562C6.16563 1.59521 5.86563 2.27022 5.69313 3.10272L5.07812 6.04271H13.7781L13.1631 3.10272C12.9906 2.27022 12.6906 1.59521 11.3406 1.59521Z"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M14.8567 10.8352C14.9167 11.4727 14.4067 12.0202 13.7542 12.0202H12.7342C12.1492 12.0202 12.0667 11.7727 11.9617 11.4577L11.8492 11.1351C11.6992 10.6926 11.6017 10.3927 10.8142 10.3927H8.03168C7.25168 10.3927 7.13167 10.7301 6.99667 11.1351L6.88418 11.4577C6.77918 11.7652 6.69668 12.0202 6.11168 12.0202H5.09168C4.43918 12.0202 3.92918 11.4727 3.98918 10.8352L4.29668 7.52019C4.37168 6.70269 4.52917 6.03516 5.95417 6.03516H12.8917C14.3167 6.03516 14.4742 6.70269 14.5492 7.52019L14.8567 10.8352Z"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M5.07679 4.40771H4.5293"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M14.3248 4.40771H13.7773"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M6.16406 8.21777H7.79157"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M11.0625 8.21777H12.69"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M9.42578 12.8452V13.5952"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M9.42578 15.8452V16.5952"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M2.67578 13.5952L1.92578 16.5952"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M16.1758 13.5952L16.9258 16.5952"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>

//                   {/* Duration text */}
//                   {formatDuration(duration)}
//                 </div>
//               </Marker>
//             )}

//             {/* Main route line */}
//             {route && (
//               <Source
//                 id="route"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: route,
//                 }}
//               >
//                 <Layer
//                   id="route-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "#FF7F0E",
//                     "line-width": 4,
//                   }}
//                 />
//               </Source>
//             )}

//             {/* Faint connectors (only if using snapped route) */}
//             {duration && snapStart && (
//               <Source
//                 id="connector-start"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [current.from.coordinates, snapStart],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-start-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//             {duration && snapEnd && (
//               <Source
//                 id="connector-end"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [snapEnd, current.to.coordinates],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-end-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//           </Map>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import * as React from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
// import { motion, AnimatePresence } from "framer-motion";
// import "mapbox-gl/dist/mapbox-gl.css";

// // Haversine distance (meters)
// function getDistance(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const R = 6371e3;
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);
//   const dLat = toRad(coord2[1] - coord1[1]);
//   const dLon = toRad(coord2[0] - coord1[0]);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// }

// // Bearing (0-360)
// function getBearing(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const toDeg = (v) => (v * 180) / Math.PI;
//   const lon1 = toRad(coord1[0]);
//   const lon2 = toRad(coord2[0]);
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);

//   const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
//   const x =
//     Math.cos(lat1) * Math.sin(lat2) -
//     Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
//   let brng = toDeg(Math.atan2(y, x));
//   brng = (brng + 360) % 360;
//   return Math.round(brng);
// }

// // Duration formatting
// function formatDuration(mins) {
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLFF({
//   main_access,
//   connectivity,
//   industrial_clusters_nearby,
//   clat,
//   clon,
//   fromcoord,
// }) {
//   const [route, setRoute] = React.useState(null);
//   const [duration, setDuration] = React.useState(null);
//   const [activeTab, setActiveTab] = React.useState(0);

//   // Parse dynamic destination
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const routesData = [
//     {
//       id: 0,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "Dynamic Point",
//         coordinates: toCoords,
//       },
//       zoom: 17,
//     },
//     {
//       id: 1,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "Dynamic Point",
//         coordinates: toCoords,
//       },
//       zoom: 12,
//     },
//     {
//       id: 2,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "Dynamic Point",
//         coordinates: toCoords,
//       },
//       zoom: 8,
//     },
//   ];

//   const current = routesData[activeTab];

//   React.useEffect(() => {
//     const fetchRoute = async () => {
//       if (!current?.to?.coordinates) return;

//       const dist = getDistance(fromcoord, current.to.coordinates);

//       if (dist < 200) {
//         setRoute({
//           type: "LineString",
//           coordinates: [fromcoord, current.to.coordinates],
//         });
//         setDuration(null);
//         return;
//       }

//       const bearing = getBearing(fromcoord, current.to.coordinates);

//       let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${fromcoord.join(
//         ","
//       )};${current.to.coordinates.join(
//         ","
//       )}?geometries=geojson&overview=full&bearings=${bearing},45;${bearing},45&access_token=${
//         process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//       }`;

//       let query = await fetch(url);
//       let data = await query.json();

//       if (!data.routes || data.routes.length === 0) {
//         url = `https://api.mapbox.com/directions/v5/mapbox/driving/${fromcoord.join(
//           ","
//         )};${current.to.coordinates.join(
//           ","
//         )}?geometries=geojson&overview=full&access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//         }`;
//         query = await fetch(url);
//         data = await query.json();
//       }

//       if (data.routes && data.routes.length > 0) {
//         setRoute(data.routes[0].geometry);
//         setDuration(Math.round(data.routes[0].duration / 60));
//       } else {
//         setRoute({
//           type: "LineString",
//           coordinates: [fromcoord, current.to.coordinates],
//         });
//         setDuration(null);
//       }
//     };
//     fetchRoute();
//   }, [activeTab, clat, clon]);

//   const routeCoords = route?.coordinates || [];
//   const snapStart = routeCoords[0];
//   const snapEnd = routeCoords[routeCoords.length - 1];
//   const midPoint =
//     routeCoords.length > 0
//       ? routeCoords[Math.floor(routeCoords.length / 2)]
//       : null;

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       {/* Tabs */}

//       {/* Map with fade animation */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <Map
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//             initialViewState={{
//               longitude: fromcoord[0],
//               latitude: fromcoord[1],
//               zoom: current.zoom,
//             }}
//             style={{ width: "100%", height: "100%" }}
//             mapStyle="mapbox://styles/mapbox/dark-v11"
//           >
//             {/* Start marker */}
//             <Marker
//               longitude={fromcoord[0]}
//               latitude={fromcoord[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   {current.from.name}
//                 </div>
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </Marker>

//             {/* End marker */}
//             <Marker
//               longitude={current.to.coordinates[0]}
//               latitude={current.to.coordinates[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   {current.to.name}
//                 </div>
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </Marker>

//             {/* Duration pill */}
//             {duration && midPoint && (
//               <Marker longitude={midPoint[0]} latitude={midPoint[1]}>
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex py-2 h-fit xl:h-[50px] items-center justify-center min-w-[120px] rounded-full shadow-md mb-1 gap-2">
//                   ⏱ {formatDuration(duration)}
//                 </div>
//               </Marker>
//             )}

//             {/* Route line */}
//             {route && (
//               <Source
//                 id="route"
//                 type="geojson"
//                 data={{ type: "Feature", geometry: route }}
//               >
//                 <Layer
//                   id="route-layer"
//                   type="line"
//                   paint={{ "line-color": "#FF7F0E", "line-width": 4 }}
//                 />
//               </Source>
//             )}

//             {/* Connectors */}
//             {duration && snapStart && (
//               <Source
//                 id="connector-start"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [fromcoord, snapStart],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-start-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//             {duration && snapEnd && (
//               <Source
//                 id="connector-end"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [snapEnd, current.to.coordinates],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-end-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//           </Map>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
//
// import * as React from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
// import { motion, AnimatePresence } from "framer-motion";
// import "mapbox-gl/dist/mapbox-gl.css";

// // Haversine distance (meters)
// function getDistance(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const R = 6371e3;
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);
//   const dLat = toRad(coord2[1] - coord1[1]);
//   const dLon = toRad(coord2[0] - coord1[0]);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// }

// // Bearing (0-360)
// function getBearing(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const toDeg = (v) => (v * 180) / Math.PI;
//   const lon1 = toRad(coord1[0]);
//   const lon2 = toRad(coord2[0]);
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);

//   const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
//   const x =
//     Math.cos(lat1) * Math.sin(lat2) -
//     Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
//   let brng = toDeg(Math.atan2(y, x));
//   brng = (brng + 360) % 360;
//   return Math.round(brng);
// }

// // Duration formatting
// function formatDuration(mins) {
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLFF({
//   main_access,
//   connectivity,
//   industrial_clusters_nearby,
//   clat,
//   clon,
//   fromcoord,
// }) {
//   const [route, setRoute] = React.useState(null);
//   const [duration, setDuration] = React.useState(null);
//   const [activeTab, setActiveTab] = React.useState(0);
//   const mapRef = React.useRef(null);

//   // Parse dynamic destination
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const routesData = [
//     {
//       id: 0,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: fromcoord,
//       },
//       to: {
//         name: "Dynamic Point",
//         coordinates: toCoords,
//       },
//     },
//   ];

//   const current = routesData[activeTab];

//   // ✅ Auto fit bounds
//   React.useEffect(() => {
//     if (!mapRef.current || !fromcoord || !toCoords) return;

//     const bounds = [
//       [
//         Math.min(fromcoord[0], toCoords[0]),
//         Math.min(fromcoord[1], toCoords[1]),
//       ],
//       [
//         Math.max(fromcoord[0], toCoords[0]),
//         Math.max(fromcoord[1], toCoords[1]),
//       ],
//     ];

//     mapRef.current.fitBounds(bounds, {
//       padding: 100,
//       duration: 1000,
//     });
//   }, [fromcoord, toCoords]);

//   React.useEffect(() => {
//     const fetchRoute = async () => {
//       if (!current?.to?.coordinates) return;

//       const dist = getDistance(fromcoord, current.to.coordinates);

//       if (dist < 200) {
//         setRoute({
//           type: "LineString",
//           coordinates: [fromcoord, current.to.coordinates],
//         });
//         setDuration(null);
//         return;
//       }

//       const bearing = getBearing(fromcoord, current.to.coordinates);

//       let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${fromcoord.join(
//         ","
//       )};${current.to.coordinates.join(
//         ","
//       )}?geometries=geojson&overview=full&bearings=${bearing},45;${bearing},45&access_token=${
//         process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//       }`;

//       let query = await fetch(url);
//       let data = await query.json();

//       if (!data.routes || data.routes.length === 0) {
//         url = `https://api.mapbox.com/directions/v5/mapbox/driving/${fromcoord.join(
//           ","
//         )};${current.to.coordinates.join(
//           ","
//         )}?geometries=geojson&overview=full&access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//         }`;
//         query = await fetch(url);
//         data = await query.json();
//       }

//       if (data.routes && data.routes.length > 0) {
//         setRoute(data.routes[0].geometry);
//         setDuration(Math.round(data.routes[0].duration / 60));
//       } else {
//         setRoute({
//           type: "LineString",
//           coordinates: [fromcoord, current.to.coordinates],
//         });
//         setDuration(null);
//       }
//     };
//     fetchRoute();
//   }, [activeTab, clat, clon]);

//   const routeCoords = route?.coordinates || [];
//   const snapStart = routeCoords[0];
//   const snapEnd = routeCoords[routeCoords.length - 1];
//   const midPoint =
//     routeCoords.length > 0
//       ? routeCoords[Math.floor(routeCoords.length / 2)]
//       : null;

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <Map
//             ref={mapRef}
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//             initialViewState={{
//               longitude: fromcoord[0],
//               latitude: fromcoord[1],
//               zoom: 10, // just a fallback zoom
//             }}
//             style={{ width: "100%", height: "100%" }}
//             mapStyle="mapbox://styles/mapbox/dark-v11"
//           >
//             {/* Start marker */}
//             <Marker
//               longitude={fromcoord[0]}
//               latitude={fromcoord[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   {current.from.name}
//                 </div>
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </Marker>

//             {/* End marker */}
//             <Marker
//               longitude={current.to.coordinates[0]}
//               latitude={current.to.coordinates[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   {current.to.name}
//                 </div>
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </Marker>

//             {/* Duration pill */}
//             {duration && midPoint && (
//               <Marker longitude={midPoint[0]} latitude={midPoint[1]}>
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex py-2 h-fit xl:h-[50px] items-center justify-center min-w-[120px] rounded-full shadow-md mb-1 gap-2">
//                   ⏱ {formatDuration(duration)}
//                 </div>
//               </Marker>
//             )}

//             {/* Route line */}
//             {route && (
//               <Source
//                 id="route"
//                 type="geojson"
//                 data={{ type: "Feature", geometry: route }}
//               >
//                 <Layer
//                   id="route-layer"
//                   type="line"
//                   paint={{ "line-color": "#FF7F0E", "line-width": 4 }}
//                 />
//               </Source>
//             )}

//             {/* Connectors */}
//             {duration && snapStart && (
//               <Source
//                 id="connector-start"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [fromcoord, snapStart],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-start-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//             {duration && snapEnd && (
//               <Source
//                 id="connector-end"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [snapEnd, current.to.coordinates],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-end-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//           </Map>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   GoogleMap,
//   OverlayView,
//   Polyline,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { motion, AnimatePresence } from "framer-motion";

// // Dark style approximating Mapbox's dark-v11
// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.stroke", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.fill", stylers: [{ color: "#bfbdbb" }] },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [{ color: "#2c2c2c" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#383838" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.stroke",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#8a8a8a" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ color: "#000000" }],
//   },
// ];

// // keep your duration formatting function
// function formatDuration(mins) {
//   if (mins == null) return "";
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLFF({ clat, clon, fromcoord }) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
//     libraries: ["places"],
//   });

//   const mapRef = useRef(null);
//   const [routePath, setRoutePath] = useState([]); // [{lat,lng}, ...]
//   const [durationMin, setDurationMin] = useState(null);
//   const [midPoint, setMidPoint] = useState(null);

//   // parse coords; fromcoord should be [lon, lat] (as you set earlier)
//   const fromCoords =
//     Array.isArray(fromcoord) && fromcoord.length === 2 ? fromcoord : null;
//   const toCoords = [Number.parseFloat(clon), Number.parseFloat(clat)];

//   const validCoords =
//     fromCoords &&
//     fromCoords.length === 2 &&
//     !Number.isNaN(fromCoords[0]) &&
//     !Number.isNaN(fromCoords[1]) &&
//     !Number.isNaN(toCoords[0]) &&
//     !Number.isNaN(toCoords[1]);

//   // fetch directions and compute route path + duration + midpoint
//   useEffect(() => {
//     if (!isLoaded || !validCoords) return;

//     const origin = { lat: fromCoords[1], lng: fromCoords[0] };
//     const destination = { lat: toCoords[1], lng: toCoords[0] };
//     const service = new window.google.maps.DirectionsService();

//     service.route(
//       {
//         origin,
//         destination,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//         drivingOptions: { departureTime: new Date() },
//       },
//       (result, status) => {
//         if (status === "OK" && result.routes && result.routes.length > 0) {
//           // convert overview_path to simple {lat,lng} objects
//           const path = result.routes[0].overview_path.map((p) => ({
//             lat: p.lat(),
//             lng: p.lng(),
//           }));
//           setRoutePath(path);

//           // duration (sec -> min)
//           const legs = result.routes[0].legs;
//           if (legs && legs.length > 0) {
//             setDurationMin(Math.round(legs[0].duration.value / 60));
//           } else {
//             setDurationMin(null);
//           }

//           // midpoint by cumulative distance would be ideal, but keeping parity with your earlier behavior:
//           const midIndex = Math.floor(path.length / 2);
//           setMidPoint(path[midIndex] ?? (path.length ? path[0] : null));

//           // fit bounds to include entire path (if map loaded)
//           if (mapRef.current && path.length > 0) {
//             const bounds = new window.google.maps.LatLngBounds();
//             path.forEach((pt) =>
//               bounds.extend(new window.google.maps.LatLng(pt.lat, pt.lng))
//             );
//             // padding in px
//             mapRef.current.fitBounds(bounds, 100);
//           }
//         } else {
//           // fallback: straight line (2 points)
//           const fallback = [
//             { lat: origin.lat, lng: origin.lng },
//             { lat: destination.lat, lng: destination.lng },
//           ];
//           setRoutePath(fallback);
//           setDurationMin(null);
//           setMidPoint(fallback[Math.floor(fallback.length / 2)]);
//           if (mapRef.current) {
//             const bounds = new window.google.maps.LatLngBounds();
//             bounds.extend(
//               new window.google.maps.LatLng(origin.lat, origin.lng)
//             );
//             bounds.extend(
//               new window.google.maps.LatLng(destination.lat, destination.lng)
//             );
//             mapRef.current.fitBounds(bounds, 100);
//           }
//         }
//       }
//     );
//   }, [isLoaded, clat, clon, fromcoord]);

//   if (!validCoords) {
//     // render nothing or placeholder — keep layout intact
//     return (
//       <div className="relative w-full h-[400px] lg:h-full bg-black" id="map">
//         <div className="text-white p-6">Waiting for valid coordinates...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`${clat}_${clon}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={{ lat: fromCoords[1], lng: fromCoords[0] }}
//             zoom={10}
//             options={{
//               styles: darkMapStyle,
//               disableDefaultUI: true,
//             }}
//             onLoad={(map) => {
//               mapRef.current = map;
//               // Fit bounds once when map loads if we already have a route
//               if (routePath && routePath.length > 0) {
//                 const bounds = new window.google.maps.LatLngBounds();
//                 routePath.forEach((pt) =>
//                   bounds.extend(new window.google.maps.LatLng(pt.lat, pt.lng))
//                 );
//                 map.fitBounds(bounds);
//               }
//             }}
//           >
//             {/* Route polyline (orange) */}
//             {routePath.length > 0 && (
//               <Polyline
//                 path={routePath}
//                 options={{
//                   strokeColor: "#FF7F0E",
//                   strokeOpacity: 1,
//                   strokeWeight: 4,
//                   clickable: false,
//                   geodesic: true,
//                 }}
//               />
//             )}

//             {/* Start overlay (label + dot) - anchored to coordinate */}
//             <OverlayView
//               position={{ lat: fromCoords[1], lng: fromCoords[0] }}
//               mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             >
//               <div
//                 style={{ transform: "translate(-50%, -100%)" }}
//                 className="flex flex-col items-center pointer-events-auto"
//               >
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   Farukhnagar II
//                 </div>
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </OverlayView>

//             {/* End overlay */}
//             {routePath.length > 0 && (
//               <OverlayView
//                 position={{
//                   lat: routePath[routePath.length - 1].lat,
//                   lng: routePath[routePath.length - 1].lng,
//                 }}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -100%)" }}
//                   className="flex flex-col items-center"
//                 >
//                   <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                     Dynamic Point
//                   </div>
//                   <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                     <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                   </div>
//                 </div>
//               </OverlayView>
//             )}

//             {/* Duration pill — centered on midpoint of route */}
//             {durationMin != null && midPoint && (
//               <OverlayView
//                 position={{ lat: midPoint.lat, lng: midPoint.lng }}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -50%)" }}
//                   className="bg-[#bfbdbb] w-[100px] text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md"
//                 >
//                   ⏱ {formatDuration(durationMin)}
//                 </div>
//               </OverlayView>
//             )}
//           </GoogleMap>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   GoogleMap,
//   OverlayView,
//   Polyline,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { motion, AnimatePresence } from "framer-motion";

// // Dark style approximating Mapbox's dark-v11
// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.stroke", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.fill", stylers: [{ color: "#bfbdbb" }] },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [{ color: "#2c2c2c" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#383838" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.stroke",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#8a8a8a" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ color: "#000000" }],
//   },
// ];

// // Duration formatting
// function formatDuration(mins) {
//   if (mins == null) return "";
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLFF({ clat, clon, fromcoord }) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
//     libraries: ["places"],
//   });

//   const mapRef = useRef(null);
//   const [routePath, setRoutePath] = useState([]);
//   const [durationMin, setDurationMin] = useState(null);
//   const [midPoint, setMidPoint] = useState(null);

//   // Parse coordinates
//   const fromCoords =
//     Array.isArray(fromcoord) && fromcoord.length === 2 ? fromcoord : null;
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const validCoords =
//     fromCoords &&
//     fromCoords.length === 2 &&
//     !Number.isNaN(fromCoords[0]) &&
//     !Number.isNaN(fromCoords[1]) &&
//     !Number.isNaN(toCoords[0]) &&
//     !Number.isNaN(toCoords[1]);

//   // Fetch route
//   useEffect(() => {
//     if (!isLoaded || !validCoords || !window.google) return;

//     const origin = { lat: fromCoords[1], lng: fromCoords[0] };
//     const destination = { lat: toCoords[1], lng: toCoords[0] };
//     const service = new window.google.maps.DirectionsService();

//     service.route(
//       {
//         origin,
//         destination,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK" && result.routes?.length > 0) {
//           const path = result.routes[0].overview_path.map((p) => ({
//             lat: p.lat(),
//             lng: p.lng(),
//           }));
//           setRoutePath(path);

//           const legs = result.routes[0].legs;
//           if (legs?.length > 0) {
//             setDurationMin(Math.round(legs[0].duration.value / 60));
//           }

//           const midIndex = Math.floor(path.length / 2);
//           setMidPoint(path[midIndex] || null);

//           if (mapRef.current && path.length > 0) {
//             const bounds = new window.google.maps.LatLngBounds();
//             path.forEach((pt) =>
//               bounds.extend(new window.google.maps.LatLng(pt.lat, pt.lng))
//             );
//             mapRef.current.fitBounds(bounds, 100);
//           }
//         } else {
//           const fallback = [origin, destination];
//           setRoutePath(fallback);
//           setMidPoint(fallback[0]);
//         }
//       }
//     );
//   }, [isLoaded, clat, clon, fromcoord]);

//   // ✅ Skeleton loader when Google Maps isn't ready
//   if (!isLoaded || !window.google) {
//     return (
//       <div className="relative w-full h-[400px] lg:h-full bg-[#1d1d1d] flex items-center justify-center animate-pulse rounded-lg">
//         <span className="text-gray-400">Loading map…</span>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`${clat}_${clon}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={{ lat: fromCoords[1], lng: fromCoords[0] }}
//             zoom={10}
//             options={{
//               styles: darkMapStyle,
//               disableDefaultUI: true,
//             }}
//             onLoad={(map) => (mapRef.current = map)}
//           >
//             {/* Route polyline */}
//             {routePath.length > 0 && (
//               <Polyline
//                 path={routePath}
//                 options={{
//                   strokeColor: "#FF7F0E",
//                   strokeOpacity: 1,
//                   strokeWeight: 4,
//                 }}
//               />
//             )}

//             {/* Start point */}
//             <OverlayView
//               position={{ lat: fromCoords[1], lng: fromCoords[0] }}
//               mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             >
//               <div
//                 style={{ transform: "translate(-50%, -100%)" }}
//                 className="flex flex-col items-center"
//               >
//                 <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                   Farukhnagar II
//                 </div>
//                 <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full"></div>
//                 </div>
//               </div>
//             </OverlayView>

//             {/* End point */}
//             {routePath.length > 0 && (
//               <OverlayView
//                 position={routePath[routePath.length - 1]}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -100%)" }}
//                   className="flex flex-col items-center"
//                 >
//                   <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                     Dynamic Point
//                   </div>
//                   <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                     <div className="bg-white w-3 h-3 rounded-full"></div>
//                   </div>
//                 </div>
//               </OverlayView>
//             )}

//             {/* Duration pill at midpoint */}
//             {durationMin && midPoint && (
//               <OverlayView
//                 position={midPoint}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -50%)" }}
//                   className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md"
//                 >
//                   ⏱ {formatDuration(durationMin)}
//                 </div>
//               </OverlayView>
//             )}
//           </GoogleMap>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   GoogleMap,
//   OverlayView,
//   Polyline,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { motion, AnimatePresence } from "framer-motion";

// // ✅ Dark-only roads theme
// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
//   { elementType: "labels.text.fill", stylers: [{ visibility: "off" }] },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     // stylers: [{ color: "#2c2c2c" }],
//     stylers: [{ visibility: "off" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#383838" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.stroke",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#8a8a8a" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ visibility: "off" }],
//   },
// ];
// // Duration formatting
// function formatDuration(mins) {
//   if (mins == null) return "";
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLFF({ clat, clon, fromcoord }) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
//     libraries: ["places"],
//   });

//   const mapRef = useRef(null);
//   const [routePath, setRoutePath] = useState([]);
//   const [durationMin, setDurationMin] = useState(null);
//   const [midPoint, setMidPoint] = useState(null);

//   // Parse coordinates
//   const fromCoords =
//     Array.isArray(fromcoord) && fromcoord.length === 2 ? fromcoord : null;
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const validCoords =
//     fromCoords &&
//     fromCoords.length === 2 &&
//     !Number.isNaN(fromCoords[0]) &&
//     !Number.isNaN(fromCoords[1]) &&
//     !Number.isNaN(toCoords[0]) &&
//     !Number.isNaN(toCoords[1]);

//   // Fetch route
//   useEffect(() => {
//     if (!isLoaded || !validCoords || !window.google) return;

//     const origin = { lat: fromCoords[1], lng: fromCoords[0] };
//     const destination = { lat: toCoords[1], lng: toCoords[0] };
//     const service = new window.google.maps.DirectionsService();

//     service.route(
//       {
//         origin,
//         destination,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK" && result.routes?.length > 0) {
//           const path = result.routes[0].overview_path.map((p) => ({
//             lat: p.lat(),
//             lng: p.lng(),
//           }));
//           setRoutePath(path);

//           const legs = result.routes[0].legs;
//           if (legs?.length > 0) {
//             setDurationMin(Math.round(legs[0].duration.value / 60));
//           }

//           const midIndex = Math.floor(path.length / 2);
//           setMidPoint(path[midIndex] || null);

//           if (mapRef.current && path.length > 0) {
//             const bounds = new window.google.maps.LatLngBounds();
//             path.forEach((pt) =>
//               bounds.extend(new window.google.maps.LatLng(pt.lat, pt.lng))
//             );
//             mapRef.current.fitBounds(bounds, 100);
//           }
//         } else {
//           const fallback = [origin, destination];
//           setRoutePath(fallback);
//           setMidPoint(fallback[0]);
//         }
//       }
//     );
//   }, [isLoaded, clat, clon, fromcoord]);

//   // ✅ Skeleton loader
//   if (!isLoaded || !window.google) {
//     return (
//       <div className="relative w-full h-[400px] lg:h-full bg-[#1d1d1d] flex items-center justify-center animate-pulse rounded-lg">
//         <span className="text-gray-400">Loading map…</span>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`${clat}_${clon}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={{ lat: fromCoords[1], lng: fromCoords[0] }}
//             zoom={10}
//             options={{
//               styles: darkMapStyle, // ✅ only show roads
//               disableDefaultUI: true,
//             }}
//             onLoad={(map) => (mapRef.current = map)}
//           >
//             {/* Route polyline */}
//             {routePath.length > 0 && (
//               <Polyline
//                 path={routePath}
//                 options={{
//                   strokeColor: "#FF7F0E",
//                   strokeOpacity: 1,
//                   strokeWeight: 4,
//                 }}
//               />
//             )}

//             {/* Start point */}
//             <OverlayView
//               position={{ lat: fromCoords[1], lng: fromCoords[0] }}
//               mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             >
//               <div
//                 style={{ transform: "translate(-50%, -100%)" }}
//                 className="flex flex-col items-center"
//               >
//                 <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                   Farukhnagar II
//                 </div>
//                 <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full"></div>
//                 </div>
//               </div>
//             </OverlayView>

//             {/* End point */}
//             {routePath.length > 0 && (
//               <OverlayView
//                 position={routePath[routePath.length - 1]}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -100%)" }}
//                   className="flex flex-col items-center"
//                 >
//                   <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                     Dynamic Point
//                   </div>
//                   <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                     <div className="bg-white w-3 h-3 rounded-full"></div>
//                   </div>
//                 </div>
//               </OverlayView>
//             )}

//             {/* Duration pill */}
//             {durationMin && midPoint && (
//               <OverlayView
//                 position={midPoint}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -50%)" }}
//                   className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md"
//                 >
//                   ⏱ {formatDuration(durationMin)}
//                 </div>
//               </OverlayView>
//             )}
//           </GoogleMap>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   GoogleMap,
//   OverlayView,
//   Polyline,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { motion, AnimatePresence } from "framer-motion";

// // ✅ Dark-only roads theme (fixed)
// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
//   { elementType: "labels.text.fill", stylers: [{ visibility: "off" }] },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     // stylers: [{ color: "#2c2c2c" }],
//     stylers: [{ visibility: "off" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#383838" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.stroke",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#8a8a8a" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ visibility: "off" }],
//   },
// ];
// // Duration formatting
// function formatDuration(mins) {
//   if (mins == null) return "";
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLFF({ clat, clon, fromcoord }) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
//     libraries: ["places"],
//   });

//   const mapRef = useRef(null);
//   const [routePath, setRoutePath] = useState([]);
//   const [durationMin, setDurationMin] = useState(null);
//   const [midPoint, setMidPoint] = useState(null);

//   // Parse coordinates
//   const fromCoords =
//     Array.isArray(fromcoord) && fromcoord.length === 2 ? fromcoord : null;
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const validCoords =
//     fromCoords &&
//     fromCoords.length === 2 &&
//     !Number.isNaN(fromCoords[0]) &&
//     !Number.isNaN(fromCoords[1]) &&
//     !Number.isNaN(toCoords[0]) &&
//     !Number.isNaN(toCoords[1]);

//   // Fetch route
//   useEffect(() => {
//     if (!isLoaded || !validCoords || !window.google) return;

//     const origin = { lat: fromCoords[1], lng: fromCoords[0] };
//     const destination = { lat: toCoords[1], lng: toCoords[0] };
//     const service = new window.google.maps.DirectionsService();

//     service.route(
//       {
//         origin,
//         destination,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK" && result.routes?.length > 0) {
//           const path = result.routes[0].overview_path.map((p) => ({
//             lat: p.lat(),
//             lng: p.lng(),
//           }));
//           setRoutePath(path);

//           const legs = result.routes[0].legs;
//           if (legs?.length > 0) {
//             setDurationMin(Math.round(legs[0].duration.value / 60));
//           }

//           const midIndex = Math.floor(path.length / 2);
//           setMidPoint(path[midIndex] || null);

//           if (mapRef.current && path.length > 0) {
//             const bounds = new window.google.maps.LatLngBounds();
//             path.forEach((pt) =>
//               bounds.extend(new window.google.maps.LatLng(pt.lat, pt.lng))
//             );
//             mapRef.current.fitBounds(bounds, 100);
//           }
//         } else {
//           const fallback = [origin, destination];
//           setRoutePath(fallback);
//           setMidPoint(fallback[0]);
//         }
//       }
//     );
//   }, [isLoaded, clat, clon, fromcoord]);

//   // ✅ Skeleton loader
//   if (!isLoaded || !window.google) {
//     return (
//       <div className="relative w-full h-[400px] lg:h-full bg-[#1d1d1d] flex items-center justify-center animate-pulse rounded-lg">
//         <span className="text-gray-400">Loading map…</span>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`${clat}_${clon}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={{ lat: fromCoords[1], lng: fromCoords[0] }}
//             zoom={10}
//             options={{
//               styles: darkMapStyle, // ✅ now correctly applied
//               disableDefaultUI: true,
//             }}
//             onLoad={(map) => (mapRef.current = map)}
//           >
//             {/* Route polyline */}
//             {routePath.length > 0 && (
//               <Polyline
//                 path={routePath}
//                 options={{
//                   strokeColor: "#FF7F0E",
//                   strokeOpacity: 1,
//                   strokeWeight: 4,
//                 }}
//               />
//             )}

//             {/* Start point */}
//             <OverlayView
//               position={{ lat: fromCoords[1], lng: fromCoords[0] }}
//               mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             >
//               <div
//                 style={{ transform: "translate(-50%, -100%)" }}
//                 className="flex flex-col items-center"
//               >
//                 <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                   Farukhnagar II
//                 </div>
//                 <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full"></div>
//                 </div>
//               </div>
//             </OverlayView>

//             {/* End point */}
//             {routePath.length > 0 && (
//               <OverlayView
//                 position={routePath[routePath.length - 1]}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -100%)" }}
//                   className="flex flex-col items-center"
//                 >
//                   <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                     Dynamic Point
//                   </div>
//                   <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                     <div className="bg-white w-3 h-3 rounded-full"></div>
//                   </div>
//                 </div>
//               </OverlayView>
//             )}

//             {/* Duration pill */}
//             {durationMin && midPoint && (
//               <OverlayView
//                 position={midPoint}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -50%)" }}
//                   className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md"
//                 >
//                   ⏱ {formatDuration(durationMin)}
//                 </div>
//               </OverlayView>
//             )}
//           </GoogleMap>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   GoogleMap,
//   OverlayView,
//   Polyline,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { motion, AnimatePresence } from "framer-motion";

// // ✅ Dark-only roads theme (fixed)
// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
//   { elementType: "labels.text.fill", stylers: [{ visibility: "off" }] },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [{ visibility: "off" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#383838" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.stroke",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#8a8a8a" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ visibility: "off" }],
//   },
// ];

// // Duration formatting
// function formatDuration(mins) {
//   if (mins == null) return "";
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// // 🔑 Utility: map distance → zoom level
// function getZoomLevel(distanceMeters) {
//   if (!distanceMeters) return 10;
//   const distanceKm = distanceMeters / 1000;

//   if (distanceKm < 2) return 15;
//   if (distanceKm < 5) return 14;
//   if (distanceKm < 10) return 13;
//   if (distanceKm < 25) return 12;
//   if (distanceKm < 50) return 11;
//   if (distanceKm < 100) return 10;
//   if (distanceKm < 200) return 9;
//   if (distanceKm < 400) return 8;
//   return 7;
// }

// export default function MapGLFF({ clat, clon, fromcoord }) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
//     libraries: ["places", "geometry"], // ✅ need geometry lib
//   });

//   const mapRef = useRef(null);
//   const [routePath, setRoutePath] = useState([]);
//   const [durationMin, setDurationMin] = useState(null);
//   const [midPoint, setMidPoint] = useState(null);
//   const [zoom, setZoom] = useState(10);

//   // Parse coordinates
//   const fromCoords =
//     Array.isArray(fromcoord) && fromcoord.length === 2 ? fromcoord : null;
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const validCoords =
//     fromCoords &&
//     fromCoords.length === 2 &&
//     !Number.isNaN(fromCoords[0]) &&
//     !Number.isNaN(fromCoords[1]) &&
//     !Number.isNaN(toCoords[0]) &&
//     !Number.isNaN(toCoords[1]);

//   // Fetch route
//   useEffect(() => {
//     if (!isLoaded || !validCoords || !window.google) return;

//     const origin = { lat: fromCoords[1], lng: fromCoords[0] };
//     const destination = { lat: toCoords[1], lng: toCoords[0] };
//     const service = new window.google.maps.DirectionsService();

//     service.route(
//       {
//         origin,
//         destination,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK" && result.routes?.length > 0) {
//           const path = result.routes[0].overview_path.map((p) => ({
//             lat: p.lat(),
//             lng: p.lng(),
//           }));
//           setRoutePath(path);

//           const legs = result.routes[0].legs;
//           if (legs?.length > 0) {
//             setDurationMin(Math.round(legs[0].duration.value / 60));
//           }

//           const midIndex = Math.floor(path.length / 2);
//           setMidPoint(path[midIndex] || null);

//           // ✅ dynamic zoom calculation
//           if (window.google.maps.geometry?.spherical) {
//             const dist =
//               window.google.maps.geometry.spherical.computeDistanceBetween(
//                 new window.google.maps.LatLng(origin.lat, origin.lng),
//                 new window.google.maps.LatLng(destination.lat, destination.lng)
//               );
//             setZoom(getZoomLevel(dist));
//           }

//           // Fit bounds for better visibility
//           if (mapRef.current && path.length > 0) {
//             const bounds = new window.google.maps.LatLngBounds();
//             path.forEach((pt) =>
//               bounds.extend(new window.google.maps.LatLng(pt.lat, pt.lng))
//             );
//             mapRef.current.fitBounds(bounds, 100);
//           }
//         } else {
//           const fallback = [origin, destination];
//           setRoutePath(fallback);
//           setMidPoint(fallback[0]);

//           if (window.google.maps.geometry?.spherical) {
//             const dist =
//               window.google.maps.geometry.spherical.computeDistanceBetween(
//                 new window.google.maps.LatLng(origin.lat, origin.lng),
//                 new window.google.maps.LatLng(destination.lat, destination.lng)
//               );
//             setZoom(getZoomLevel(dist));
//           }
//         }
//       }
//     );
//   }, [isLoaded, clat, clon, fromcoord]);

//   // ✅ Skeleton loader
//   if (!isLoaded || !window.google) {
//     return (
//       <div className="relative w-full h-[400px] lg:h-full bg-[#1d1d1d] flex items-center justify-center animate-pulse rounded-lg">
//         <span className="text-gray-400">Loading map…</span>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`${clat}_${clon}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={{ lat: fromCoords[1], lng: fromCoords[0] }}
//             zoom={zoom} // ✅ dynamic zoom
//             options={{
//               styles: darkMapStyle,
//               disableDefaultUI: true,
//             }}
//             onLoad={(map) => (mapRef.current = map)}
//           >
//             {/* Route polyline */}
//             {routePath.length > 0 && (
//               <Polyline
//                 path={routePath}
//                 options={{
//                   strokeColor: "#FF7F0E",
//                   strokeOpacity: 1,
//                   strokeWeight: 4,
//                 }}
//               />
//             )}

//             {/* Start point */}
//             <OverlayView
//               position={{ lat: fromCoords[1], lng: fromCoords[0] }}
//               mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             >
//               <div
//                 style={{ transform: "translate(-50%, -100%)" }}
//                 className="flex flex-col items-center"
//               >
//                 <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                   Farukhnagar II
//                 </div>
//                 <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full"></div>
//                 </div>
//               </div>
//             </OverlayView>

//             {/* End point */}
//             {routePath.length > 0 && (
//               <OverlayView
//                 position={routePath[routePath.length - 1]}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -100%)" }}
//                   className="flex flex-col items-center"
//                 >
//                   <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                     Dynamic Point
//                   </div>
//                   <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                     <div className="bg-white w-3 h-3 rounded-full"></div>
//                   </div>
//                 </div>
//               </OverlayView>
//             )}

//             {/* Duration pill */}
//             {durationMin && midPoint && (
//               <OverlayView
//                 position={midPoint}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -50%)" }}
//                   className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md"
//                 >
//                   ⏱ {formatDuration(durationMin)}
//                 </div>
//               </OverlayView>
//             )}
//           </GoogleMap>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   GoogleMap,
//   OverlayView,
//   Polyline,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { motion, AnimatePresence } from "framer-motion";

// // ✅ Dark-only roads theme
// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
//   { elementType: "labels.text.fill", stylers: [{ visibility: "off" }] },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [{ visibility: "off" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#383838" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.stroke",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#8a8a8a" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ visibility: "off" }],
//   },
// ];

// // Duration formatting
// function formatDuration(mins) {
//   if (mins == null) return "";
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLFF({ clat, clon, fromcoord }) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
//     libraries: ["places", "geometry"],
//   });

//   const mapRef = useRef(null);
//   const [routePath, setRoutePath] = useState([]);
//   const [durationMin, setDurationMin] = useState(null);
//   const [midPoint, setMidPoint] = useState(null);

//   // Parse coordinates
//   const fromCoords =
//     Array.isArray(fromcoord) && fromcoord.length === 2 ? fromcoord : null;
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const validCoords =
//     fromCoords &&
//     fromCoords.length === 2 &&
//     !Number.isNaN(fromCoords[0]) &&
//     !Number.isNaN(fromCoords[1]) &&
//     !Number.isNaN(toCoords[0]) &&
//     !Number.isNaN(toCoords[1]);

//   // Fetch route
//   useEffect(() => {
//     if (!isLoaded || !validCoords || !window.google) return;

//     const origin = { lat: fromCoords[1], lng: fromCoords[0] };
//     const destination = { lat: toCoords[1], lng: toCoords[0] };
//     const service = new window.google.maps.DirectionsService();

//     service.route(
//       {
//         origin,
//         destination,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK" && result.routes?.length > 0) {
//           const path = result.routes[0].overview_path.map((p) => ({
//             lat: p.lat(),
//             lng: p.lng(),
//           }));
//           setRoutePath(path);

//           const legs = result.routes[0].legs;
//           if (legs?.length > 0) {
//             setDurationMin(Math.round(legs[0].duration.value / 60));
//           }

//           const midIndex = Math.floor(path.length / 2);
//           setMidPoint(path[midIndex] || null);

//           // ✅ Fit bounds so both start & end are visible
//           if (mapRef.current) {
//             const bounds = new window.google.maps.LatLngBounds();
//             bounds.extend(origin);
//             bounds.extend(destination);
//             mapRef.current.fitBounds(bounds, 100); // 100px padding
//           }
//         } else {
//           const fallback = [origin, destination];
//           setRoutePath(fallback);
//           setMidPoint(fallback[0]);

//           if (mapRef.current) {
//             const bounds = new window.google.maps.LatLngBounds();
//             bounds.extend(origin);
//             bounds.extend(destination);
//             mapRef.current.fitBounds(bounds, 100);
//           }
//         }
//       }
//     );
//   }, [isLoaded, clat, clon, fromcoord]);

//   // ✅ Skeleton loader
//   if (!isLoaded || !window.google) {
//     return (
//       <div className="relative w-full h-[400px] lg:h-full bg-[#1d1d1d] flex items-center justify-center animate-pulse rounded-lg">
//         <span className="text-gray-400">Loading map…</span>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`${clat}_${clon}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={{ lat: fromCoords[1], lng: fromCoords[0] }} // center doesn’t matter, fitBounds will override
//             zoom={100}
//             options={{
//               styles: darkMapStyle,
//               disableDefaultUI: true,
//             }}
//             onLoad={(map) => (mapRef.current = map)}
//           >
//             {/* Route polyline */}
//             {routePath.length > 0 && (
//               <Polyline
//                 path={routePath}
//                 options={{
//                   strokeColor: "#FF7F0E",
//                   strokeOpacity: 1,
//                   strokeWeight: 4,
//                 }}
//               />
//             )}

//             {/* Start point */}
//             <OverlayView
//               position={{ lat: fromCoords[1], lng: fromCoords[0] }}
//               mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             >
//               <div
//                 style={{ transform: "translate(-50%, -100%)" }}
//                 className="flex flex-col items-center"
//               >
//                 <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                   Farukhnagar II
//                 </div>
//                 <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full"></div>
//                 </div>
//               </div>
//             </OverlayView>

//             {/* End point */}
//             {routePath.length > 0 && (
//               <OverlayView
//                 position={routePath[routePath.length - 1]}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -100%)" }}
//                   className="flex flex-col items-center"
//                 >
//                   <div className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1">
//                     Dynamic Point
//                   </div>
//                   <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                     <div className="bg-white w-3 h-3 rounded-full"></div>
//                   </div>
//                 </div>
//               </OverlayView>
//             )}

//             {/* Duration pill */}
//             {durationMin && midPoint && (
//               <OverlayView
//                 position={midPoint}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -50%)" }}
//                   className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md"
//                 >
//                   ⏱ {formatDuration(durationMin)}
//                 </div>
//               </OverlayView>
//             )}
//           </GoogleMap>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   GoogleMap,
//   OverlayView,
//   Polyline,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { motion, AnimatePresence } from "framer-motion";

// // ✅ Dark-only roads theme
// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
//   { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
//   { elementType: "labels.text.fill", stylers: [{ visibility: "off" }] },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [{ visibility: "off" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#383838" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.stroke",
//     stylers: [{ color: "#212121" }],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [{ color: "#8a8a8a" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ visibility: "off" }],
//   },
// ];

// // Duration formatting
// function formatDuration(mins) {
//   if (mins == null) return "";
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// // 🔑 Map distance → zoom
// function getZoomLevel(distanceMeters) {
//   const distanceKm = distanceMeters / 1000;
//   if (distanceKm < 2) return 15;
//   if (distanceKm < 5) return 14;
//   if (distanceKm < 10) return 13;
//   if (distanceKm < 25) return 12;
//   if (distanceKm < 50) return 11;
//   if (distanceKm < 100) return 10;
//   if (distanceKm < 200) return 90;
//   if (distanceKm < 400) return 8;
//   return 7;
// }

// export default function MapGLFF({ clat, clon, fromcoord, sp, ep, park_name }) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
//     libraries: ["places", "geometry"],
//   });

//   const mapRef = useRef(null);
//   const [routePath, setRoutePath] = useState([]);
//   const [durationMin, setDurationMin] = useState(null);
//   const [midPoint, setMidPoint] = useState(null);
//   const [zoom, setZoom] = useState(10);

//   // Parse coordinates
//   const fromCoords =
//     Array.isArray(fromcoord) && fromcoord.length === 2 ? fromcoord : null;
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const validCoords =
//     fromCoords &&
//     fromCoords.length === 2 &&
//     !Number.isNaN(fromCoords[0]) &&
//     !Number.isNaN(fromCoords[1]) &&
//     !Number.isNaN(toCoords[0]) &&
//     !Number.isNaN(toCoords[1]);

//   useEffect(() => {
//     if (!isLoaded || !validCoords || !window.google) return;

//     const origin = { lat: fromCoords[1], lng: fromCoords[0] };
//     const destination = { lat: toCoords[1], lng: toCoords[0] };
//     const service = new window.google.maps.DirectionsService();

//     service.route(
//       {
//         origin,
//         destination,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK" && result.routes?.length > 0) {
//           const path = result.routes[0].overview_path.map((p) => ({
//             lat: p.lat(),
//             lng: p.lng(),
//           }));
//           setRoutePath(path);

//           const legs = result.routes[0].legs;
//           if (legs?.length > 0) {
//             setDurationMin(Math.round(legs[0].duration.value / 60));
//           }

//           const midIndex = Math.floor(path.length / 2);
//           setMidPoint(path[midIndex] || null);

//           if (mapRef.current) {
//             // ✅ Calculate distance
//             const dist =
//               window.google.maps.geometry.spherical.computeDistanceBetween(
//                 new window.google.maps.LatLng(origin.lat, origin.lng),
//                 new window.google.maps.LatLng(destination.lat, destination.lng)
//               );

//             // ✅ Dynamic zoom
//             setZoom(getZoomLevel(dist));

//             // ✅ Fit bounds so both points are visible
//             const bounds = new window.google.maps.LatLngBounds();
//             bounds.extend(origin);
//             bounds.extend(destination);
//             mapRef.current.fitBounds(bounds, 100); // 100px padding
//           }
//         } else {
//           const fallback = [origin, destination];
//           setRoutePath(fallback);
//           setMidPoint(fallback[0]);

//           if (mapRef.current) {
//             const dist =
//               window.google.maps.geometry.spherical.computeDistanceBetween(
//                 new window.google.maps.LatLng(origin.lat, origin.lng),
//                 new window.google.maps.LatLng(destination.lat, destination.lng)
//               );
//             setZoom(getZoomLevel(dist));

//             const bounds = new window.google.maps.LatLngBounds();
//             bounds.extend(origin);
//             bounds.extend(destination);
//             mapRef.current.fitBounds(bounds, 100);
//           }
//         }
//       }
//     );
//   }, [isLoaded, clat, clon, fromcoord]);

//   if (!isLoaded || !window.google) {
//     return (
//       <div className="relative w-full h-[400px] lg:h-full bg-[#1d1d1d] flex items-center justify-center animate-pulse rounded-lg">
//         <span className="text-gray-400">Loading map…</span>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[400px] lg:h-full bg-black" id="map">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`${clat}_${clon}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0 bg-black"
//         >
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={{ lat: fromCoords[1], lng: fromCoords[0] }} // initial center
//             zoom={zoom} // ✅ dynamic zoom
//             options={{ styles: darkMapStyle, disableDefaultUI: true }}
//             onLoad={(map) => (mapRef.current = map)}
//           >
//             {/* Route */}
//             {routePath.length > 0 && (
//               <Polyline
//                 path={routePath}
//                 options={{
//                   strokeColor: "#FF7F0E",
//                   strokeOpacity: 1,
//                   strokeWeight: 4,
//                 }}
//               />
//             )}

//             {/* Start */}
//             <OverlayView
//               position={{ lat: fromCoords[1], lng: fromCoords[0] }}
//               mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             >
//               <div
//                 style={{ transform: "translate(-50%, -100%)" }}
//                 className="flex flex-col items-center"
//               >
//                 <div
//                   className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1"
//                   dangerouslySetInnerHTML={{
//                     __html: park_name || "",
//                   }}
//                 ></div>

//                 <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full"></div>
//                 </div>
//               </div>
//             </OverlayView>

//             {/* End */}
//             {routePath.length > 0 && (
//               <OverlayView
//                 position={routePath[routePath.length - 1]}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -100%)" }}
//                   className="flex flex-col items-center"
//                 >
//                   <div
//                     className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1"
//                     dangerouslySetInnerHTML={{ __html: ep || "" }}
//                   ></div>

//                   <div className="p-[9px] bg-[#8B37A4] rounded-full">
//                     <div className="bg-white w-3 h-3 rounded-full"></div>
//                   </div>
//                 </div>
//               </OverlayView>
//             )}

//             {/* Duration pill */}
//             {durationMin && midPoint && (
//               <OverlayView
//                 position={midPoint}
//                 mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//               >
//                 <div
//                   style={{ transform: "translate(-50%, -50%)" }}
//                   className="bg-[#bfbdbb] min-w-[150px] min-h-[50px] flex items-center justify-center text-black text-[14px] bw-m px-3 py-2 rounded-full shadow-md gap-2"
//                 >
//                   {/* Clock SVG */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={19}
//                     height={19}
//                     viewBox="0 0 19 19"
//                     fill="none"
//                   >
//                     <path
//                       d="M11.3406 1.59521H7.51562C6.16563 1.59521 5.86563 2.27022 5.69313 3.10272L5.07812 6.04271H13.7781L13.1631 3.10272C12.9906 2.27022 12.6906 1.59521 11.3406 1.59521Z"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M14.8567 10.8352C14.9167 11.4727 14.4067 12.0202 13.7542 12.0202H12.7342C12.1492 12.0202 12.0667 11.7727 11.9617 11.4577L11.8492 11.1351C11.6992 10.6926 11.6017 10.3927 10.8142 10.3927H8.03168C7.25168 10.3927 7.13167 10.7301 6.99667 11.1351L6.88418 11.4577C6.77918 11.7652 6.69668 12.0202 6.11168 12.0202H5.09168C4.43918 12.0202 3.92918 11.4727 3.98918 10.8352L4.29668 7.52019C4.37168 6.70269 4.52917 6.03516 5.95417 6.03516H12.8917C14.3167 6.03516 14.4742 6.70269 14.5492 7.52019L14.8567 10.8352Z"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M5.07679 4.40771H4.5293"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M14.3248 4.40771H13.7773"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M6.16406 8.21777H7.79157"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M11.0625 8.21777H12.69"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M9.42578 12.8452V13.5952"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M9.42578 15.8452V16.5952"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M2.67578 13.5952L1.92578 16.5952"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M16.1758 13.5952L16.9258 16.5952"
//                       stroke="black"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>

//                   {/* Duration text */}
//                   <span>{formatDuration(durationMin)}</span>
//                 </div>
//               </OverlayView>
//             )}
//           </GoogleMap>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
// "use client";
// import * as React from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
// import { motion, AnimatePresence } from "framer-motion";
// import "mapbox-gl/dist/mapbox-gl.css";

// // Haversine distance (meters)
// function getDistance(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const R = 6371e3;
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);
//   const dLat = toRad(coord2[1] - coord1[1]);
//   const dLon = toRad(coord2[0] - coord1[0]);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// }

// // Bearing (0-360)
// function getBearing(coord1, coord2) {
//   const toRad = (v) => (v * Math.PI) / 180;
//   const toDeg = (v) => (v * 180) / Math.PI;
//   const lon1 = toRad(coord1[0]);
//   const lon2 = toRad(coord2[0]);
//   const lat1 = toRad(coord1[1]);
//   const lat2 = toRad(coord2[1]);

//   const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
//   const x =
//     Math.cos(lat1) * Math.sin(lat2) -
//     Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
//   let brng = toDeg(Math.atan2(y, x));
//   brng = (brng + 360) % 360;
//   return Math.round(brng);
// }

// // Duration formatting
// function formatDuration(mins) {
//   if (mins < 60) return `${mins} min`;
//   const h = Math.floor(mins / 60);
//   const m = mins % 60;
//   return `${h} hr ${m} min`;
// }

// export default function MapGLF({
//   main_access,
//   connectivity,
//   industrial_clusters_nearby,
//   clat,
//   clon,
//   fromcoord,
// }) {
//   const [route, setRoute] = React.useState(null);
//   const [duration, setDuration] = React.useState(null);
//   const [activeTab, setActiveTab] = React.useState(0);

//   // Parse dynamic destination
//   const toCoords = [parseFloat(clon), parseFloat(clat)];

//   const routesData = [
//     {
//       id: 0,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "Dynamic Point",
//         coordinates: toCoords,
//       },
//       zoom: 17,
//     },
//     {
//       id: 1,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "Dynamic Point",
//         coordinates: toCoords,
//       },
//       zoom: 12,
//     },
//     {
//       id: 2,
//       from: {
//         name: "Farukhnagar II",
//         coordinates: [76.80435676970751, 28.478215699677556],
//       },
//       to: {
//         name: "Dynamic Point",
//         coordinates: toCoords,
//       },
//       zoom: 8,
//     },
//   ];

//   const current = routesData[activeTab];

//   React.useEffect(() => {
//     const fetchRoute = async () => {
//       if (!current?.to?.coordinates) return;

//       const dist = getDistance(
//         current.from.coordinates,
//         current.to.coordinates
//       );

//       if (dist < 200) {
//         setRoute({
//           type: "LineString",
//           coordinates: [current.from.coordinates, current.to.coordinates],
//         });
//         setDuration(null);
//         return;
//       }

//       const bearing = getBearing(
//         current.from.coordinates,
//         current.to.coordinates
//       );

//       let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${current.from.coordinates.join(
//         ","
//       )};${current.to.coordinates.join(
//         ","
//       )}?geometries=geojson&overview=full&bearings=${bearing},45;${bearing},45&access_token=${
//         process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//       }`;

//       let query = await fetch(url);
//       let data = await query.json();

//       if (!data.routes || data.routes.length === 0) {
//         url = `https://api.mapbox.com/directions/v5/mapbox/driving/${current.from.coordinates.join(
//           ","
//         )};${current.to.coordinates.join(
//           ","
//         )}?geometries=geojson&overview=full&access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_TOKEN
//         }`;
//         query = await fetch(url);
//         data = await query.json();
//       }

//       if (data.routes && data.routes.length > 0) {
//         setRoute(data.routes[0].geometry);
//         setDuration(Math.round(data.routes[0].duration / 60));
//       } else {
//         setRoute({
//           type: "LineString",
//           coordinates: [current.from.coordinates, current.to.coordinates],
//         });
//         setDuration(null);
//       }
//     };
//     fetchRoute();
//   }, [activeTab, clat, clon]);

//   const routeCoords = route?.coordinates || [];
//   const snapStart = routeCoords[0];
//   const snapEnd = routeCoords[routeCoords.length - 1];
//   const midPoint =
//     routeCoords.length > 0
//       ? routeCoords[Math.floor(routeCoords.length / 2)]
//       : null;

//   return (
//     <div className="relative w-full h-[400px] lg:h-full" id="map">
//       {/* Tabs */}

//       {/* Map with fade animation */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0"
//         >
//           <Map
//             mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//             initialViewState={{
//               longitude: current.from.coordinates[0],
//               latitude: current.from.coordinates[1],
//               zoom: current.zoom,
//             }}
//             style={{ width: "100%", height: "100%" }}
//             mapStyle="mapbox://styles/mapbox/dark-v11"
//           >
//             {/* Start marker */}
//             <Marker
//               longitude={current.from.coordinates[0]}
//               latitude={current.from.coordinates[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   {current.from.name}
//                 </div>
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </Marker>

//             {/* End marker */}
//             <Marker
//               longitude={current.to.coordinates[0]}
//               latitude={current.to.coordinates[1]}
//               anchor="bottom"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex xl:py-0 py-2 h-fit xl:h-[50px] items-center justify-center min-w-[150px] rounded-full shadow-md mb-1">
//                   {current.to.name}
//                 </div>
//                 <div className="p-[9px] flex justify-center items-center bg-[#8B37A4] rounded-full">
//                   <div className="bg-white w-3 h-3 rounded-full aspect-square"></div>
//                 </div>
//               </div>
//             </Marker>

//             {/* Duration pill */}
//             {duration && midPoint && (
//               <Marker longitude={midPoint[0]} latitude={midPoint[1]}>
//                 <div className="bg-[#bfbdbb] text-black text-[14px] bw-m px-3 flex py-2 h-fit xl:h-[50px] items-center justify-center min-w-[120px] rounded-full shadow-md mb-1 gap-2">
//                   ⏱ {formatDuration(duration)}
//                 </div>
//               </Marker>
//             )}

//             {/* Route line */}
//             {route && (
//               <Source
//                 id="route"
//                 type="geojson"
//                 data={{ type: "Feature", geometry: route }}
//               >
//                 <Layer
//                   id="route-layer"
//                   type="line"
//                   paint={{ "line-color": "#FF7F0E", "line-width": 4 }}
//                 />
//               </Source>
//             )}

//             {/* Connectors */}
//             {duration && snapStart && (
//               <Source
//                 id="connector-start"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [current.from.coordinates, snapStart],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-start-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//             {duration && snapEnd && (
//               <Source
//                 id="connector-end"
//                 type="geojson"
//                 data={{
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     coordinates: [snapEnd, current.to.coordinates],
//                   },
//                 }}
//               >
//                 <Layer
//                   id="connector-end-layer"
//                   type="line"
//                   paint={{
//                     "line-color": "rgba(255,127,14,0.5)",
//                     "line-width": 2,
//                     "line-dasharray": [2, 2],
//                   }}
//                 />
//               </Source>
//             )}
//           </Map>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
