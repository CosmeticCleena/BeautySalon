import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import services_data from "../data/featureServices";
import FeatureServiceCard from "./FeatureServiceCard";
const SpaFeatureServices = () => {
  return (
    <div className=" w-4/5 mx-auto py-20">
      <div className="flex flex-col items-center justify-center mb-10 gap-4">
        <h2 className="text-[20px] font-[500] mb-3">Featured Services</h2>
        <img src={FlowerUnderHeader} alt="Decorative divider"></img>
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <h2 className="text-[44px] font-normal text-center">Wellness & Beauty Hub</h2>
        <div className="flex flex-col md:flex-row justify-between gap-5">
            {services_data.slice(0,3).map((service) => (
                <FeatureServiceCard key={service.id} service={service} isUsingIcon={false} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SpaFeatureServices;
