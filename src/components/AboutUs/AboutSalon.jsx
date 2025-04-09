import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import { Star } from "lucide-react";

const AboutSalon = () => {
  return (
    <div className="flex justify-center py-20 gap-40 mx-auto">
      <div className="relative">
        <img
          src="/img/aboutUs/AboutBigImg.svg"
          alt=""
          className="w-[320px] h-auto"
        />
        <div className="absolute top-1/2 left-1/2 w-[240px] h-[300px]">
          <img
            src="/img/aboutUs/AboutTinyImg.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-start w-1/3 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-medium mb-2">About the salon</h2>
          <img src={FlowerUnderHeader} alt="" />
        </div>
        <p className="text-[44px] font-normal">
          Body Treatments Skin Care Beauty.
        </p>
        <p className="text-lg font-normal text-[#6A6A6A]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
        <div className="flex gap-8">
          <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-3 px-8 transition-colors">
            About Salon
          </button>
          <button className=" text-[#6A6A6A] hover:underline py-3 px-8 transition-colors">
            How We Work
          </button>
        </div>

        <div className="flex items-center gap-4  p-4">
          <div className="text-6xl font-bold text-gray-800">4.9</div>
          <div className="h-12 w-px bg-gray-300"></div>
          <div className="flex flex-col">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill="#FF9F40"
                  color="#FF9F40"
                  size={20}
                  className="mr-0.5"
                />
              ))}
            </div>

            <div className="text-gray-500 text-lg mt-1">
              3,499 Genuine rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSalon;
