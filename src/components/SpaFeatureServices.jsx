import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import services_data from "../data/featureServices";
import FeatureServiceCard from "./FeatureServiceCard";

const SpaFeatureServices = () => {
  return (
    <div className="w-[90%] md:w-4/5 mx-auto py-10 md:py-16 lg:py-20 px-4 md:px-0">
      <div className="flex flex-col items-center justify-center mb-6 md:mb-8 lg:mb-10 gap-3 md:gap-4">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-2 md:mb-3">CÁC DỊCH VỤ NỔI BẬT CỦA CLEENA</h2>
        <img src={FlowerUnderHeader} alt="Decorative divider" className="h-5 md:h-auto" />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20">
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal text-center px-4">Điểm đến để thư giãn và trẻ hóa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-5 w-full">
          {services_data.slice(0,4).map((service) => (
            <FeatureServiceCard key={service.id} service={service} isUsingIcon={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpaFeatureServices;