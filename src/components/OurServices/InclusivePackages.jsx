import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import packageData from "../../data/inclusivePackages";
import FeatureServiceCard from "../FeatureServiceCard";

const InclusivePackages = () => {
  return (
    <div className="flex flex-col items-center py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center gap-3 md:gap-4">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-medium mb-1 sm:mb-2 text-center">
          {packageData.title}
        </h2>
        <img src={FlowerUnderHeader} alt="Decorative element" className="h-5 md:h-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-16 pt-6 sm:pt-8 md:pt-10 w-full max-w-7xl">
        {packageData.features.map((item) => (
          <FeatureServiceCard key={item.id} service={item} isUsingIcon={true} />
        ))}
      </div>
    </div>
  );
};

export default InclusivePackages;