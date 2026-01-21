"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  OverlayView,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon, PlusIcon } from "lucide-react";
import Btn from "@/components/global/Btn";
import Link from "next/link";

// ✅ Dark-only roads theme
const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
  { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ visibility: "off" }] },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#383838" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212121" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8a8a8a" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ visibility: "off" }],
  },
];

// Duration formatting
function formatDuration(mins) {
  if (mins == null) return "";
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h} hr ${m} min`;
}

// 🔑 Map distance → zoom
function getZoomLevel(distanceMeters) {
  const distanceKm = distanceMeters / 1000;
  let zoom = 10; // default
  if (distanceKm < 2) zoom = 15;
  else if (distanceKm < 5) zoom = 14;
  else if (distanceKm < 10) zoom = 13;
  else if (distanceKm < 25) zoom = 12;
  else if (distanceKm < 50) zoom = 11;
  else if (distanceKm < 100) zoom = 10;
  else if (distanceKm < 200) zoom = 9;
  else if (distanceKm < 400) zoom = 8;
  else zoom = 7;

  // Reduce zoom for mobile screens (~50%)
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    zoom = Math.max(5, Math.floor(zoom / 1.1)); // avoid too low zoom
  }
  return zoom;
}

export default function MapGLFF({
  clat,
  clon,
  fromcoord,
  sp,
  ep,
  park_name,
  map_button_url,
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
    libraries: ["places", "geometry"],
  });

  const mapRef = useRef(null);
  const [routePath, setRoutePath] = useState([]);
  const [durationMin, setDurationMin] = useState(null);
  const [midPoint, setMidPoint] = useState(null);
  const [zoom, setZoom] = useState(10);

  const fromCoords =
    Array.isArray(fromcoord) && fromcoord.length === 2 ? fromcoord : null;
  const toCoords = [parseFloat(clon), parseFloat(clat)];

  const validCoords =
    fromCoords &&
    fromCoords.length === 2 &&
    !Number.isNaN(fromCoords[0]) &&
    !Number.isNaN(fromCoords[1]) &&
    !Number.isNaN(toCoords[0]) &&
    !Number.isNaN(toCoords[1]);

  useEffect(() => {
    if (!isLoaded || !validCoords || !window.google) return;

    const origin = { lat: fromCoords[1], lng: fromCoords[0] };
    const destination = { lat: toCoords[1], lng: toCoords[0] };
    const service = new window.google.maps.DirectionsService();

    service.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result.routes?.length > 0) {
          const path = result.routes[0].overview_path.map((p) => ({
            lat: p.lat(),
            lng: p.lng(),
          }));
          setRoutePath(path);

          const legs = result.routes[0].legs;
          if (legs?.length > 0) {
            setDurationMin(Math.round(legs[0].duration.value / 60));
          }

          const midIndex = Math.floor(path.length / 2);
          setMidPoint(path[midIndex] || null);

          if (mapRef.current) {
            const dist =
              window.google.maps.geometry.spherical.computeDistanceBetween(
                new window.google.maps.LatLng(origin.lat, origin.lng),
                new window.google.maps.LatLng(destination.lat, destination.lng)
              );

            setZoom(getZoomLevel(dist));

            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(origin);
            bounds.extend(destination);
            mapRef.current.fitBounds(bounds, 100);
          }
        } else {
          const fallback = [origin, destination];
          setRoutePath(fallback);
          setMidPoint(fallback[0]);

          if (mapRef.current) {
            const dist =
              window.google.maps.geometry.spherical.computeDistanceBetween(
                new window.google.maps.LatLng(origin.lat, origin.lng),
                new window.google.maps.LatLng(destination.lat, destination.lng)
              );
            setZoom(getZoomLevel(dist));

            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(origin);
            bounds.extend(destination);
            mapRef.current.fitBounds(bounds, 100);
          }
        }
      }
    );
  }, [isLoaded, clat, clon, fromcoord]);

  if (!isLoaded || !window.google) {
    return (
      <div className="relative w-full h-[400px] lg:h-full bg-[#1d1d1d] flex items-center justify-center animate-pulse rounded-lg">
        <span className="text-gray-400">Loading map…</span>
      </div>
    );
  }

  const handleZoomIn = () => {
    if (mapRef.current) {
      const newZoom = Math.min(mapRef.current.getZoom() + 1, 21);
      mapRef.current.setZoom(newZoom);
      setZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      const newZoom = Math.max(mapRef.current.getZoom() - 1, 2);
      mapRef.current.setZoom(newZoom);
      setZoom(newZoom);
    }
  };

  return (
    <div className="relative w-full h-[450px] lg:h-full bg-black" id="map">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${clat}_${clon}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-black"
        >
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: fromCoords[1], lng: fromCoords[0] }}
            zoom={zoom}
            options={{ styles: darkMapStyle, disableDefaultUI: true }}
            onLoad={(map) => (mapRef.current = map)}
          >
            {/* Route */}
            {routePath.length > 0 && (
              <Polyline
                path={routePath}
                options={{
                  strokeColor: "#FF7F0E",
                  strokeOpacity: 1,
                  strokeWeight: 4,
                }}
              />
            )}

            {/* Start */}
            <OverlayView
              position={{ lat: fromCoords[1], lng: fromCoords[0] }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div
                style={{ transform: "translate(-50%, -100%)" }}
                className="flex flex-col items-center"
              >
                <div
                  className="bg-[#bfbdbb] w-max md:w-[150px] min-h-auto md:min-h-[50px] flex items-center justify-center text-black md:text-[14px] text-[12px] bw-m px-3 py-2 rounded-full shadow-md mb-1"
                  dangerouslySetInnerHTML={{ __html: park_name || "" }}
                ></div>
                <div className="p-[9px] bg-[#8B37A4] rounded-full">
                  <div className="bg-white w-3 h-3 rounded-full"></div>
                </div>
              </div>
            </OverlayView>

            {/* End */}
            {routePath.length > 0 && (
              <OverlayView
                position={routePath[routePath.length - 1]}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div
                  style={{ transform: "translate(-50%, -100%)" }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="bg-[#bfbdbb] w-max md:w-[150px] min-h-auto md:min-h-[50px] flex items-center justify-center text-black text-[12px] md:text-[14px] bw-m px-3 py-2 rounded-full shadow-md mb-1"
                    dangerouslySetInnerHTML={{ __html: ep || "" }}
                  ></div>
                  <div className="p-[9px] bg-[#8B37A4] rounded-full">
                    <div className="bg-white w-3 h-3 rounded-full"></div>
                  </div>
                </div>
              </OverlayView>
            )}

            {/* Duration pill */}
            {durationMin && midPoint && (
              <OverlayView
                position={midPoint}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div
                  style={{ transform: "translate(-50%, -50%)" }}
                  className="bg-[#bfbdbb] w-max md:w-[150px] min-h-auto md:min-h-[50px] flex items-center justify-center text-black text-[12px] md:text-[14px] bw-m px-3 py-2 rounded-full shadow-md gap-2"
                >
                  {/* Clock SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={19}
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M11.3406 1.59521H7.51562C6.16563 1.59521 5.86563 2.27022 5.69313 3.10272L5.07812 6.04271H13.7781L13.1631 3.10272C12.9906 2.27022 12.6906 1.59521 11.3406 1.59521Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.8567 10.8352C14.9167 11.4727 14.4067 12.0202 13.7542 12.0202H12.7342C12.1492 12.0202 12.0667 11.7727 11.9617 11.4577L11.8492 11.1351C11.6992 10.6926 11.6017 10.3927 10.8142 10.3927H8.03168C7.25168 10.3927 7.13167 10.7301 6.99667 11.1351L6.88418 11.4577C6.77918 11.7652 6.69668 12.0202 6.11168 12.0202H5.09168C4.43918 12.0202 3.92918 11.4727 3.98918 10.8352L4.29668 7.52019C4.37168 6.70269 4.52917 6.03516 5.95417 6.03516H12.8917C14.3167 6.03516 14.4742 6.70269 14.5492 7.52019L14.8567 10.8352Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.07679 4.40771H4.5293"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3248 4.40771H13.7773"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.16406 8.21777H7.79157"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.0625 8.21777H12.69"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.42578 12.8452V13.5952"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.42578 15.8452V16.5952"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.67578 13.5952L1.92578 16.5952"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.1758 13.5952L16.9258 16.5952"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{formatDuration(durationMin)}</span>
                </div>
              </OverlayView>
            )}
          </GoogleMap>

          {/* Zoom buttons */}
          <div className="absolute bottom-0 left-0 flex flex-col gap-0 z-50">
            <button
              onClick={handleZoomIn}
              className="xl:w-[70px] xl:h-[70px] w-10 h-10 bg-white text-[20px] flex items-center justify-center text-black font-bold border-b border-black"
            >
              <PlusIcon className="w-[30px] h-[30px]" />
            </button>
            <button
              onClick={handleZoomOut}
              className="xl:w-[70px] xl:h-[70px] w-10 h-10 bg-white text-[20px] flex items-center justify-center text-black font-bold"
            >
              <MinusIcon className="w-[30px] h-[30px]" />
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col gap-0 z-50">
            <a
              target="_blank"
              className="flex items-center gap-[10px] text-[12px] px-[18px] py-[12px] lg:px-[22px] cursor-pointer lg:py-[15px] w-fit lg:text-[16px] uppercase inter-sb tracking-[1.6px] bg-[#1d1d1d] text-white"
              href={map_button_url}
            >
              VIEW ON MAP
              <img
                className="w-[23px] md:w-[24px] lg:w-[25px] "
                src="/btn_whit_arrow.svg"
              />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
