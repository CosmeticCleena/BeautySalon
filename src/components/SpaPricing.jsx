import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import pricing from "../data/spaPricing";
import PricingPlanCard from "./PricingPlanCard";
const SpaPricing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-40">
      <div className="flex flex-col items-center gap-4">
        <h2>Pricing</h2>
        <img src={FlowerUnderHeader} alt="" />
      </div>
      <h2 className="text-[44px] font-normal mt-3">Our Pricing Plan</h2>
      <div className="flex gap-12 my-12">
        {pricing.categories.map((category) => (
          <div className="text-[18px] font-medium text-[#6A6A6A] hover:bg-[#D1AE62] hover:text-white px-8 py-3 cursor-pointer">
            {category}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-10">
        {pricing.services.map((service) => (
          <PricingPlanCard key={service.id} service={service} />
        ))}
      </div>
      <p className="text-[20px] font-bold mt-16">
        {" "}
        <i class="fa-solid fa-clock"></i>{" "}
        <span className="mx-3">{pricing.openingHours}</span>
        <i class="fa-solid fa-arrow-right"></i>
        <span className="ml-3 text-[#D1AE62] font-bold cursor-pointer">{pricing.appointmentLinkText}</span>
      </p>
    </div>
  );
};

export default SpaPricing;
