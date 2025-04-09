import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import packageData from "../../data/inclusivePackages";
import FeatureServiceCard from "../FeatureServiceCard";

const InclusivePackages = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-[44px] font-medium mb-2 text-center">
          {packageData.title}
        </h2>
        <img src={FlowerUnderHeader} alt="" />
      </div>

      <div className="flex items-around gap-16 pt-8 px-16">
            {packageData.features.map((item) => (
                <FeatureServiceCard key={item.id} service={item} isUsingIcon={true}/>
            ))}
      </div>
    </div>
  );
};

export default InclusivePackages;
