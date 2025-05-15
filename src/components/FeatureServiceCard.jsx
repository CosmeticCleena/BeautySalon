import React from "react";
import Circle from "/img/Circle.svg";

const FeatureServiceCard = ({ service, isUsingIcon }) => {
  return (
    <div className="group flex flex-col bg-[#FFF7F4] p-6 sm:p-8 md:p-10 justify-start gap-3 sm:gap-4 md:gap-5 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 hover:bg-[#FFF0EA]">
      <div className="relative">
        {isUsingIcon ? (
          <img 
            src={`${service.icon}`} 
            alt={`${service.title} icon`}
            className="w-10 h-10 md:w-12 md:h-12"
          />
        ) : (
          <div className="relative w-full overflow-hidden rounded-md mb-2">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-white bg-opacity-80">
              <span className="text-xs font-light text-[#D1AE62]">{service.category}</span>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">{service.title}</h3>
      <p className="text-sm sm:text-base text-[#6A6A6A]">{service.description}</p>
      <div className="flex justify-start w-full mt-1 sm:mt-2 md:mt-3">
        <button className="text-[#D1AE62] text-sm sm:text-base font-semibold transition-colors duration-300 hover:text-[#B89347] flex items-center gap-1 sm:gap-2">
          Khám phá ngay
          <i className="fas fa-arrow-right text-xs sm:text-sm md:text-base transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
      </div>
    </div>
  );
};

export default FeatureServiceCard;