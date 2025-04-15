import React from "react";
import Circle from "/img/Circle.svg";

const FeatureServiceCard = ({ service, isUsingIcon }) => {
  return (
    <div className="flex flex-col bg-[#FFF7F4] p-6 sm:p-8 md:p-10 justify-start gap-3 sm:gap-4 md:gap-5 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 hover:bg-[#FFF0EA]">
      <div className="relative">
        {isUsingIcon ? (
          <img 
            src={`${service.icon}`} 
            alt={`${service.title} icon`}
            className="w-10 h-10 md:w-auto md:h-auto"
          />
        ) : (
          <>
            <h2 className="relative text-[32px] sm:text-[38px] md:text-[44px] font-bold z-[1]">
              {service.id}
            </h2>
            <img
              src={Circle}
              alt="Circle background"
              className="absolute w-[35px] sm:w-[40px] md:w-[47px] top-1/4 left-5 sm:left-6 md:left-7 z-0 transition-transform duration-300 group-hover:scale-110"
            />
          </>
        )}
      </div>
      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">{service.title}</h3>
      <p className="text-sm sm:text-base">{service.description}</p>
      <div className="flex justify-start w-full mt-1 sm:mt-2">
        <button className="text-[#D1AE62] text-sm sm:text-base font-semibold transition-colors duration-300 hover:text-[#B89347] flex items-center gap-1 sm:gap-2">
          Explore now
          <i className="fas fa-arrow-right text-xs sm:text-sm md:text-base transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
      </div>
    </div>
  );
};

export default FeatureServiceCard;