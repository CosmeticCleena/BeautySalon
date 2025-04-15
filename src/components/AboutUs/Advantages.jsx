import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import { advanceData } from "../../data/advantageData";
const Advantages = ({pageType}) => {
  console.log(advanceData[pageType]);
  return (
    <div className="w-full flex justify-center px-3 py-32 gap-40 mx-auto">
      <div className="flex flex-col items-start w-1/3 gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-medium mb-2">
            {advanceData[pageType].header}
          </h2>
          <img src={FlowerUnderHeader} alt="" />
        </div>
        <p 
          className={`${advanceData[pageType].fontSize} font-normal`}
          dangerouslySetInnerHTML={{ __html: advanceData[pageType].title }}
        ></p>
        <p className="text-lg font-normal text-[#6A6A6A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          risus nulla. Curabitur vel sapien velit. Pellentesque vitae felis
          euismod, suscipit risus ac, dictum velit. In facilisis purus non
          libero fermentum, in commodo metus sagittis.
        </p>
        <div className="flex gap-8">
          <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-3 px-8 transition-colors">
            Book Treatment{" "}
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={`${advanceData[pageType].bigImg}`} alt="" />
        <div className="absolute top-1/2 right-3/4 w-[223px] h-[262px]">
          <img
            src={`${advanceData[pageType].smallImg}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
