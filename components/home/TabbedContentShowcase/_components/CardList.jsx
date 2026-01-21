// import React from "react";
// import Card from "./Card";
// import { motion } from "framer-motion";

// const CardList = ({ cards }) => {
//   return (
//     <motion.div
//       initial={{ x: 100, opacity: 0 }}
//       whileInView={{ x: 0, opacity: 1 }}
//       viewport={{ once: true, amount: 0 }}
//       transition={{ duration: 1.3, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//       className=" flex flex-col justify-center min-h-[577px] gap-[15px]  md:gap-[25px] 1280:gap-[20px]"
//     >
//       {cards.map((card, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true, amount: 0.1 }}
//           transition={{
//             duration: 1.2,
//             delay: idx * 0.3,
//             ease: [1, 0, 0.4, 1],
//           }}
//         >
//           <Card
//             title={card.title}
//             image={card.image}
//             category={card.category}
//             link={card.link}
//           />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default CardList;

// CardList.jsx (Corrected)
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const CardList = ({ cards, activeTab }) => {
  return (
    <div className="flex flex-col justify-center min-h-[577px] gap-[15px] md:gap-[25px] 1280:gap-[20px]">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.2,
            delay: idx * 0.3,
            ease: [1, 0, 0.4, 1],
          }}
        >
          <Card
            key={idx}
            title={card.title}
            image={card.image}
            category={card.category}
            description={card.description}
            link={card.link}
            activeTab={activeTab}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CardList;
