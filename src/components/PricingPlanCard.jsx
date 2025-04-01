import React from "react";

const PricingPlanCard = ({ service }) => {
  return (
    <div className="flex gap-5 bg-[#FFF7F4] border-b-[1px] border-b-[#D1AE62] p-8 justify-between items-center transition-all duration-300 hover:bg-[#FFE8E0] hover:shadow-md hover:transform hover:scale-[1.02]">
      <div className="flex gap-6">
        <img 
          src={`${service.image}`} 
          alt="" 
          className="w-[64px] h-[64px] font-serif transition-transform duration-300 hover:scale-110" 
        />
        <div className="flex flex-col justify-center">
          <p className="text-[22px] font-semibold"> {service.title}</p>
          <p className="text-[18px] font-medium">{service.description}</p>
        </div>
      </div>
      
      <p className="text-[44px] font-normal p-3 pl-10 border-l-[1px] border-l-[#D8D8D8] transition-colors duration-300 group-hover:text-[#D1AE62]">${service.price}</p>
    </div>
  );
};

export default PricingPlanCard;