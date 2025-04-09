import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import services_data from "../../data/featureServices";
import FeatureServiceCard from "../FeatureServiceCard";

const FeatureServices = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center px-32 py-28">
      <div className="flex flex-col items-start w-full gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-medium mb-2">Featured Services</h2>
          <img src={FlowerUnderHeader} alt="" />
        </div>
        <p className="text-[44px] font-normal w-full">Wellness & Beauty Hub </p>
      </div>
      {services_data.map((service) => (
        <FeatureServiceCard key={service.id} service={service} isUsingIcon={false}/>
      ))}
    </div>
  );
};

export default FeatureServices;
