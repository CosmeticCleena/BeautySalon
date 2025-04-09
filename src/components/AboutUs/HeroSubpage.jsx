import React from "react";

const HeroSubpage = ({title,subtitle, imgLink}) => {
  return (
    <div className="w-full relative">
      <img src={imgLink} alt="" className="-z-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-5 *:text-white *:font-normal">
        <h2 className="text-[44px]">{title}</h2>
        <p className="text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSubpage;
