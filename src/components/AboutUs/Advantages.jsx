import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";

const Advantages = () => {
  return (
    <div className="w-full flex justify-center px-3 py-32 gap-40 mx-auto">
      <div className="flex flex-col items-start w-1/3 gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-medium mb-2">
            Advantages of Spa Therapy
          </h2>
          <img src={FlowerUnderHeader} alt="" />
        </div>
        <p className="text-[44px] font-normal">
          Relax at the Luxury Spa Massage and Therapy Studio.
        </p>
        <p className="text-lg font-normal text-[#6A6A6A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          risus nulla. Curabitur vel sapien velit. Pellentesque vitae felis
          euismod, suscipit risus ac, dictum velit. In facilisis purus non
          libero fermentum, in commodo metus sagittis.
        </p>
        <div className="flex gap-8">
          <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-3 px-8 transition-colors">
            Book Treatment{" "}
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="/img/aboutUs/Advantages1.svg" alt="" />
        <div className="absolute top-1/2 right-3/4 w-[223px] h-[262px]">
          <img
            src="/img/aboutUs/Advantages2.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
