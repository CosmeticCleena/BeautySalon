import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import { advanceData } from "../../data/advantageData";

const Advantages = ({pageType}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center md:items-start lg:items-start justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32 gap-12 md:gap-16 lg:gap-20 xl:gap-40 mx-auto">
      <div className="flex flex-col items-center md:items-start w-full lg:w-1/2 xl:w-1/3 gap-4 sm:gap-5 md:gap-6">
        {/* <div className="flex flex-col items-center gap-3 md:gap-4">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium mb-1 sm:mb-2">
            {advanceData[pageType].header}
          </h2>
          <img src={FlowerUnderHeader} alt="Decorative element" className="h-5 md:h-auto" />
        </div> */}
        
        <p 
          className={`text-[28px] text-center md:text-start sm:text-[32px] md:text-[36px] lg:${advanceData[pageType].fontSize} font-normal leading-tight`}
          dangerouslySetInnerHTML={{ __html: advanceData[pageType].title }}
        ></p>
        
        <p className="text-sm sm:text-base md:text-base font-normal text-[#6A6A6A] leading-relaxed" dangerouslySetInnerHTML={{ __html: advanceData[pageType].content }}>
        </p>
        
        <div className="flex gap-6 sm:gap-8 mt-2 sm:mt-4">
          <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 sm:py-3 px-6 sm:px-8 transition-colors text-sm sm:text-base">
            Đặt lịch hẹn
          </button>
        </div>
      </div>
      
      <div className="relative w-[75%] sm:w-[60%] md:w-[55%] lg:w-[40%] max-w-[450px] mt-8 lg:mt-0 mx-auto lg:mx-0">
        <img 
          src={`${advanceData[pageType].bigImg}`} 
          alt="Hình ảnh điều trị chính - CLEENA" 
          className="w-full h-auto"
          loading="lazy"
          width="450"
          height="540"
        />
        {/* <div className="absolute top-1/2 right-auto left-0 transform -translate-x-1/3 -translate-y-1/3 w-[120px] h-[144px] sm:w-[150px] sm:h-[180px] md:w-[180px] md:h-[216px] lg:right-3/4 lg:left-auto">
          <img
            src={`${advanceData[pageType].smallImg}`}
            alt="Hình ảnh chi tiết điều trị - CLEENA"
            className="w-full h-full object-cover shadow-md"
            loading="lazy"
            width="180"
            height="216"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Advantages;