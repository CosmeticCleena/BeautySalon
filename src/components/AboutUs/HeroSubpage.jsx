import React from "react";

const HeroSubpage = ({ title, subtitle, imgLink }) => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img 
          src={imgLink} 
          alt="" 
          className="w-full h-full object-cover -z-50" 
        />
      </div>
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-3 md:gap-4 lg:gap-5 px-4 text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] text-white font-normal">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white font-normal max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSubpage;