import React from "react";

const Headerimg = () => {
  return (
    <div>
      <div className="w-full h-[100%] flex justify-center  ">
        {/* <img src="/value_added_services/technology.png" alt="" /> */}
        <iframe
          src="https://player.vimeo.com/video/1141083774?autoplay=1&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
          className="w-full h-[200px] md:h-[400px] lg:h-[525px] xl:h-[763px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Headerimg;
