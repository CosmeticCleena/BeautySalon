import React, { useState } from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import spaExpertInfo from "../data/spaExperInfo";
import SpaExpertCard from "./SpaExpertCard";

const SpaExpertTeam = () => {
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
    <div className="flex flex-col pt-[400px] pb-16">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[20px] font-medium mb-2">Expert Team</h2>
        <img src={FlowerUnderHeader} alt="" />
      </div>
      <div className="flex flex-col items-center gap-10 mt-6">
        <h2 className="text-[44px] font-normal">Expertise You Can Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-4  w-[80%] mb-24">
          {displayedExperts.map((expert, index) => (
            <SpaExpertCard key={index} expert={expert} />
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button 
          className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-3 px-8 transition-colors"
          // onClick={handleLoadMore}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SpaExpertTeam;