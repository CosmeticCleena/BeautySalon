import React, { useState } from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import spaExpertInfo from "../data/spaExperInfo";
import SpaExpertCard from "./SpaExpertCard";

const SpaExpertTeam = ({pt}) => {
  const [displayCount, setDisplayCount] = useState(4);
  
  const handleLoadMore = () => {
    if (displayCount < spaExpertInfo.length) {
      setDisplayCount(displayCount + 4);
    } else {
      setDisplayCount(4);
    }
  };

  const displayedExperts = spaExpertInfo.slice(0, displayCount);
  
  const buttonText = displayCount >= spaExpertInfo.length ? "Show Less" : "More Team";

  return (
    <div className={`flex flex-col pb-8 md:pb-12 lg:pb-16`}>
      <div className="flex flex-col items-center gap-3 md:gap-4">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-1 md:mb-2">Expert Team</h2>
        <img src={FlowerUnderHeader} alt="Decorative element" className="h-5 md:h-auto" />
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 mt-4 md:mt-6">
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal text-center px-4">Expertise You Can Trust</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full md:w-[90%] lg:w-[80%] px-4 md:px-0 mb-12 md:mb-16 lg:mb-24">
          {displayedExperts.map((expert, index) => (
            <SpaExpertCard key={index} expert={expert} />
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full px-4">
        <button 
          className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base"
          onClick={handleLoadMore}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SpaExpertTeam;