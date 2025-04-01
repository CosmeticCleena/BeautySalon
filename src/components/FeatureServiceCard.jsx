import React from "react";
import Circle from "/img/Circle.svg";
const FeatureServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col bg-[#FFF7F4] p-10 justify-start gap-5">
      <div className="relative">
        <h2 className="relative text-[44px] font-bold z-[1]">{service.id}</h2>
        <img
          src={Circle}
          className="absolute w-[47px] top-1/4 left-7 z-0"
        ></img>
      </div>
      <h3 className="text-[20px] font-semibold">{service.title}</h3>
      <p>{service.description}</p>
      <div className="flex justify-start w-full">
        <button className="text-[#D1AE62] font-semibold">
          Explore now  <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default FeatureServiceCard;
