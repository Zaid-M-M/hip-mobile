// "use client";
// import { useEffect, useState } from "react";

// export default function useIdleRender(delay = 0) {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     const run = () => setReady(true);

//     if ("requestIdleCallback" in window) {
//       requestIdleCallback(run, { timeout: 2000 });
//     } else {
//       setTimeout(run, 300 + delay);
//     }
//   }, [delay]);

//   return ready;
// }

"use client";
import { useEffect, useState } from "react";

export default function useIdleRender(delay = 0) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    let idleId = null;

    const run = () => setReady(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(run, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(run, 300 + delay);
    }

    return () => {
      if (
        idleId &&
        typeof window !== "undefined" &&
        "cancelIdleCallback" in window
      ) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay]);

  return ready;
}
