// import React from "react";

// const SlideCard = () => {
//   return <div>hello world</div>;
// };

// export default SlideCard;
// SlideCard.jsx
// import React from "react";

// const SlideCard = ({ src }) => {
//   return (
//     <div className='flex items-center justify-center h-28 w-40 border border-gray-200 rounded-md bg-white shadow-sm'>
//       <img
//         src={src}
//         alt='brand'
//         className='max-h-full max-w-full object-contain'
//       />
//     </div>
//   );
// };

// export default SlideCard;
// SlideCard.jsx
import React from "react";

const SlideCard = ({ src }) => {
  return (
    <div className="flex items-center justify-center border-t border-x border-[#CDCDCD] aspect-square min-w-full">
      <img src={src} alt="brand" className="lg:w-auto w-[80%] object-contain" />
    </div>
  );
};

export default SlideCard;
