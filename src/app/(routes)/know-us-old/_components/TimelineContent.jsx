// import { motion, AnimatePresence } from "framer-motion";

// export default function TimelineContent({ events = [] }) {
//   return (
//     // <div className="relative w-full  md:h-[650px] 1280:h-[600px] pr-4 custom-scroll overflow-y-auto">
//     <div className="relative w-full  pr-4">
//       <AnimatePresence mode="wait">
//         <motion.div

//           key={JSON.stringify(events)} // Forces re-animation on data change
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//           // data-lenis-prevent
//           className="columns-2 md:columns-2 lg:columns-3 gap-6 1280:gap-[60px]"
//         >

//           {events.map((item, index) => {
//             // Randomly choose layout type
//             const layoutType = index % 4; // or use Math.random() for true randomness

//             return (
//               <div
//                 key={index}
//                 className="break-inside-avoid border-b border-[#4B4B4B]  py-5 flex flex-col items-start space-y-3"
//               >
//                 {/* Layout variations */}
//                 {layoutType === 0 && (
//                   <>
//                     {item.image && (
//                       <img
//                         src={item.image}
//                         alt="timeline-img"
//                         className="w-full sm:w-[284px] h-[128px] sm:h-[150px] object-cover"
//                       />
//                     )}
//                     {item.icon && (
//                       <img
//                         src={item.icon}
//                         alt="timeline-icon"
//                         className="sm:w-[70px] w-[46px] h-[46px] sm:h-[70px]"
//                       />
//                     )}
//                     <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 
//         1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
//                       {item.text}
//                     </p>
//                   </>
//                 )}

//                 {layoutType === 1 && (
//                   <>
//                     {item.icon && (
//                       <img
//                         src={item.icon}
//                         alt="timeline-icon"
//                         className="sm:w-[70px] w-[46px] h-[46px] sm:h-[70px]"
//                       />
//                     )}
//                     <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 
//         1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
//                       {item.text}
//                     </p>
//                     {item.image && (
//                       <img
//                         src={item.image}
//                         alt="timeline-img"
//                         className="w-full sm:w-[284px] h-[80px] sm:h-[150px] object-cover"
//                       />
//                     )}
//                   </>
//                 )}

//                 {layoutType === 2 && (
//                   <>
//                     <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 
//         1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
//                       {item.text}
//                     </p>
//                     {item.image && (
//                       <img
//                         src={item.image}
//                         alt="timeline-img"
//                         className="w-full sm:w-[284px] h-[128px] sm:h-[150px] object-cover"
//                       />
//                     )}
//                     {item.icon && (
//                       <img
//                         src={item.icon}
//                         alt="timeline-icon"
//                         className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px]"
//                       />
//                     )}
//                   </>
//                 )}

//                 {layoutType === 3 && (
//                   <>
//                     {item.image && (
//                       <img
//                         src={item.image}
//                         alt="timeline-img"
//                         className="w-full sm:w-[284px] h-[128px] sm:h-[150px] object-cover"
//                       />
//                     )}
//                     <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 
//         1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
//                       {item.text}
//                     </p>
//                     {item.icon && (
//                       <img
//                         src={item.icon}
//                         alt="timeline-icon"
//                         className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px]"
//                       />
//                     )}
//                   </>
//                 )}
//               </div>


//             );
//           })}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TimelineContent({ events = [] }) {
  const [numColumns, setNumColumns] = useState(2); // Default to 2 columns

  // Update number of columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setNumColumns(3); // lg:columns-3
      } else {
        setNumColumns(2); // columns-2
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Estimate items per column for border logic
  const itemsPerColumn = Math.floor(events.length / numColumns); // Base items per column
  const extraItems = events.length % numColumns; // Extra items to distribute
  const lastItemsInColumns = new Set();
  let currentIndex = 0;
  for (let i = 0; i < numColumns; i++) {
    // Add one extra item to earlier columns if there are extra items
    const itemsInThisColumn = itemsPerColumn + (i < extraItems ? 1 : 0);
    if (itemsInThisColumn > 0) {
      const lastIndexInColumn = currentIndex + itemsInThisColumn - 1;
      if (lastIndexInColumn < events.length) {
        lastItemsInColumns.add(lastIndexInColumn);
      }
      currentIndex += itemsInThisColumn;
    }
  }

  return (
    <div className="relative w-full pr-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={JSON.stringify(events)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
          className="columns-2 md:columns-2 lg:columns-3 gap-6 1280:gap-[60px]"
        >
          {events.map((item, index) => {
            // Use item.id for layoutType, except for last two elements
            const layoutType = index < events.length - 2 ? item.id % 4 : null;

            return (
              <div
                key={item.id}
                className={`break-inside-avoid py-5 flex flex-col items-start space-y-3 ${lastItemsInColumns.has(index) ? '' : 'border-b border-[#4B4B4B]'
                  }`}
              >
                {/* Custom layout for last two elements */}
                {index >= events.length - 2 ? (
                  <>
                    {item.image && (
                      <img
                        src={item.image}
                        alt="timeline-img"
                        className="w-full sm:w-[284px] h-[128px] sm:h-[150px] object-cover"
                      />
                    )}
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt="timeline-icon"
                        className="sm:w-[70px] w-[46px] h-[46px] sm:h-[70px]"
                      />
                    )}
                    <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
                      {item.text}
                    </p>
                  </>
                ) : (
                  <>
                    {/* Dynamic layout variations based on item.id */}
                    {layoutType === 0 && (
                      <>
                        {item.image && (
                          <img
                            src={item.image}
                            alt="timeline-img"
                            className="w-full sm:w-[284px] h-[128px] sm:h-[150px] object-cover"
                          />
                        )}
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt="timeline-icon"
                            className="sm:w-[70px] w-[46px] h-[46px] sm:h-[70px]"
                          />
                        )}
                        <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
                          {item.text}
                        </p>
                      </>
                    )}

                    {layoutType === 1 && (
                      <>
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt="timeline-icon"
                            className="sm:w-[70px] w-[46px] h-[46px] sm:h-[70px]"
                          />
                        )}
                        <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
                          {item.text}
                        </p>
                        {item.image && (
                          <img
                            src={item.image}
                            alt="timeline-img"
                            className="w-full sm:w-[284px] h-[80px] sm:h-[150px] object-cover"
                          />
                        )}
                      </>
                    )}

                    {layoutType === 2 && (
                      <>
                        <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
                          {item.text}
                        </p>
                        {item.image && (
                          <img
                            src={item.image}
                            alt="timeline-img"
                            className="w-full sm:w-[284px] h-[128px] sm:h-[150px] object-cover"
                          />
                        )}
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt="timeline-icon"
                            className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px]"
                          />
                        )}
                      </>
                    )}

                    {layoutType === 3 && (
                      <>
                        {item.image && (
                          <img
                            src={item.image}
                            alt="timeline-img"
                            className="w-full sm:w-[284px] h-[128px] sm:h-[150px] object-cover"
                          />
                        )}
                        <p className="text-[14px] leading-[24px] bw-r sm:text-lg md:text-[16px] 1280:leading-[26px] sm:leading-relaxed text-[#E0E0E0]">
                          {item.text}
                        </p>
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt="timeline-icon"
                            className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px]"
                          />
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}