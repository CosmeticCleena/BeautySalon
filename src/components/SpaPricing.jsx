import React, { useState } from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import pricing from "../data/spaPricing";
import PricingPlanCard from "./PricingPlanCard";

const SpaPricing = () => {
  const [category, setCategory] = useState(pricing.categories[0]);

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-16">
      <div className="flex flex-col items-center gap-3 md:gap-4">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium">Pricing</h2>
        <img src={FlowerUnderHeader} alt="Decorative divider" className="h-5 md:h-auto" />
      </div>
      
      <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal mt-2 md:mt-3 text-center px-4">
        Our Pricing Plan
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-12 my-8 md:my-12 px-2 md:px-0">
        {pricing.categories.map((cat, index) => (
          <div 
            className={`text-[14px] md:text-[16px] lg:text-[18px] font-medium px-3 md:px-6 lg:px-8 py-2 md:py-3 cursor-pointer transition-colors rounded-sm
              ${category === cat 
                ? "bg-[#D1AE62] text-white" 
                : "text-[#6A6A6A] hover:bg-[#D1AE62] hover:text-white"}`} 
            onClick={() => setCategory(cat)} 
            key={index}
          >
            {cat}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-6 lg:px-8 w-full max-w-6xl">
        {pricing.services[category].map((service) => (
          <PricingPlanCard key={service.id} service={service} />
        ))}
      </div>
      
      <div className="flex flex-wrap items-center justify-center text-[16px] md:text-[18px] lg:text-[20px] font-medium px-4 md:px-6 mt-10 md:mt-16 text-center">
        <i className="fas fa-clock"></i>
        <span className="mx-2 md:mx-3">{pricing.openingHours}</span>
        <i className="fas fa-arrow-right"></i>
        <span className="ml-2 md:ml-3 text-[#D1AE62] font-bold cursor-pointer">
          {pricing.appointmentLinkText}
        </span>
      </div>
    </div>
  );
};

export default SpaPricing;