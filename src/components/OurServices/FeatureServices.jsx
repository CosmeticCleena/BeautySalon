import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import services_data from "../../data/featureServices";
import FeatureServiceCard from "../FeatureServiceCard";

const FeatureServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
 <div className="flex flex-col items-center md:items-start w-full gap-5 sm:gap-6 md:gap-8 mb-4 md:mb-0">
  <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
    <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium mb-1 sm:mb-2 text-center md:text-left">
      Dịch vụ nổi bật
    </h2>
    <img src={FlowerUnderHeader} alt="Yếu tố trang trí" className="h-5 md:h-auto" />
  </div>
  <p className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-normal w-full text-center md:text-left leading-tight">
    Trung tâm chăm sóc sắc đẹp & sức khỏe
  </p>
</div>

      
      {services_data.map((service) => (
        <FeatureServiceCard 
          key={service.id} 
          service={service} 
          isUsingIcon={false}
        />
      ))}
    </div>
  );
};

export default FeatureServices;