import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import pricing from "../data/spaPricing";
import PricingPlanCard from "./PricingPlanCard";
const SpaPricing = () => {
  const [category, setCategory] = React.useState(pricing.categories[0]);

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="flex flex-col items-center gap-4">
        <h2>Pricing</h2>
        <img src={FlowerUnderHeader} alt="" />
      </div>
      <h2 className="text-[44px] font-normal mt-3">Our Pricing Plan</h2>
      <div className="flex gap-2 md:gap-12 my-12">
        {pricing.categories.map((category,index) => (
          <div className="text-[18px] font-medium text-[#6A6A6A] hover:bg-[#D1AE62] hover:text-white px-3 md:px-8 py-3 cursor-pointer" onClick={() => setCategory(category)} key={index}>
            {category}
          </div>
        ))}
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-10 px-6">
        {pricing.services[category].map((service) => (
          <PricingPlanCard key={service.id} service={service} />
        ))}
      </div>
      <p className="text-[20px] font-medium px-4 md:px-0 mt-16">
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
