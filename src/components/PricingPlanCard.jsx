import React from "react";

const PricingPlanCard = ({ service }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 bg-[#FFF7F4] border-b-[1px] border-b-[#D1AE62] p-4 sm:p-6 md:p-8 justify-between items-center transition-all duration-300 hover:bg-[#FFE8E0] hover:shadow-md hover:transform hover:scale-[1.02]">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-6">
        <img 
          src={`${service.image}`} 
          alt={service.title} 
          className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] transition-transform duration-300 hover:scale-110" 
        />
        <div className="flex flex-col justify-center text-center sm:text-left">
          <p className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">{service.title}</p>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium">{service.description}</p>
        </div>
      </div>
      
      <p className="mt-3 sm:mt-0 sm:w-20 md:w-24 text-[28px] sm:text-[36px] md:text-[44px] font-normal p-2 sm:p-3 sm:pl-4 md:pl-5 sm:border-l-[1px] sm:border-l-[#D8D8D8] transition-colors duration-300 group-hover:text-[#D1AE62]">${service.price}</p>
    </div>
  );
};

export default PricingPlanCard;