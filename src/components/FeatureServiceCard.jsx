import React from "react";
import Circle from "/img/Circle.svg";

const FeatureServiceCard = ({ service, isUsingIcon }) => {
  return (
    <div className="flex flex-col bg-[#FFF7F4] p-10 justify-start gap-5 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 hover:bg-[#FFF0EA]">
      <div className="relative">
        {isUsingIcon ? (
          <>
            <img src={`${service.icon}`} alt="" />
          </>
        ) : (
          <>
            <h2 className="relative text-[44px] font-bold z-[1]">
              {service.id}
            </h2>
            <img
              src={Circle}
              className="absolute w-[47px] top-1/4 left-7 z-0 transition-transform duration-300 group-hover:scale-110"
            ></img>
          </>
        )}
      </div>
      <h3 className="text-[20px] font-semibold">{service.title}</h3>
      <p>{service.description}</p>
      <div className="flex justify-start w-full">
        <button className="text-[#D1AE62] font-semibold transition-colors duration-300 hover:text-[#B89347] flex items-center gap-2">
          Explore now{" "}
          <i className="fa-solid fa-arrow-right transition-transform duration-300 hover:translate-x-1"></i>
        </button>
      </div>
    </div>
  );
};

export default FeatureServiceCard;
