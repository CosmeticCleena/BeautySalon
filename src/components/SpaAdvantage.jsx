import React from "react";
import SpaTherapy from "/img/SpaTherapy.svg";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import spaAdvantages from "../data/spaTherapy";
const SpaAdvantage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/5 mx-auto justify-center gap-24 py-24">
      <div className="flex-1 md:max-w-1/2">
        <img src={SpaTherapy} className="w-full min-w-[400px] md:w-[600px] h-auto"></img>
      </div>
      <div className="flex flex-col flex-1 max-w-1/2 gap-12 *:text-center *:md:text-start">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[20px] font-medium mb-3">
            {spaAdvantages.heading}
          </h2>
          <img src={FlowerUnderHeader} alt="Decorative divider"></img>
        </div>
        <h2 className="text-[44px]  font-normal mt-3">{spaAdvantages.title}</h2>
        <p className="text-lg font-normal">{spaAdvantages.description}</p>
        <div className="flex flex-col gap-5">
          {spaAdvantages.benefits.map((advantage) => (
            <div className="border-b-[1px] border-b-[#D8D8D8]">
              <p className="text-[20px] font-semibold mb-5">{advantage}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-start w-full">
          <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-3 px-8 transition-colors">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaAdvantage;
