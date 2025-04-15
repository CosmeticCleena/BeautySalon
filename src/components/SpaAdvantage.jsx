import React from "react";
import SpaTherapy from "/img/SpaTherapy.svg";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import spaAdvantages from "../data/spaTherapy";

const SpaAdvantage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-4/5 lg:w-3/5 mx-auto justify-center gap-12 md:gap-16 lg:gap-24 py-16 md:py-20 lg:py-24 px-4 md:px-8">
      <div className="flex-1">
        <img 
          src={SpaTherapy} 
          className="w-full h-auto object-cover" 
          alt="Spa Therapy"
        />
      </div>
      <div className="flex flex-col flex-1 gap-6 md:gap-8 lg:gap-12 *:text-center *:md:text-start">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-2 md:mb-3">
            {spaAdvantages.heading}
          </h2>
          <img src={FlowerUnderHeader} alt="Decorative divider" />
        </div>
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal mt-2 md:mt-3">
          {spaAdvantages.title}
        </h2>
        <p className="text-base md:text-lg font-normal">
          {spaAdvantages.description}
        </p>
        <div className="flex flex-col gap-4 md:gap-5">
          {spaAdvantages.benefits.map((advantage, index) => (
            <div key={index} className="border-b-[1px] border-b-[#D8D8D8]">
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-4 md:mb-5">
                {advantage}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-start w-full mt-2 md:mt-4">
          <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaAdvantage;