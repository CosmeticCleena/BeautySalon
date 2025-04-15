import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import { Star } from "lucide-react";

const AboutSalon = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center py-10 md:py-16 lg:py-20 gap-8 md:gap-16 lg:gap-24 xl:gap-40 px-4 sm:px-8 md:px-12 mx-auto">
      <div className="relative flex justify-center mb-10 lg:mb-0">
        <img
          src="/img/aboutUs/AboutBigImg.svg"
          alt="Salon interior"
          className="w-[260px] sm:w-[280px] md:w-[320px] h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 sm:-translate-x-1/3 lg:-translate-x-1/2 translate-y-0 w-[180px] sm:w-[200px] md:w-[240px] h-auto aspect-[4/5]">
          <img
            src="/img/aboutUs/AboutTinyImg.svg"
            alt="Treatment detail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex flex-col items-center lg:items-start w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3 gap-6 md:gap-8">
        <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-1 md:mb-2 text-center lg:text-left">About the salon</h2>
          <img src={FlowerUnderHeader} alt="Decorative element" className="h-5 md:h-auto" />
        </div>
        
        <p className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-normal leading-tight text-center lg:text-left">
          Body Treatments Skin Care Beauty.
        </p>
        
        <p className="text-base md:text-lg font-normal text-[#6A6A6A] text-center lg:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full justify-center lg:justify-start">
          <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
            About Salon
          </button>
          <button className="text-[#6A6A6A] hover:underline py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
            How We Work
          </button>
        </div>

        <div className="flex items-center gap-4 p-2 sm:p-3 md:p-4 mt-4 md:mt-6">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">4.9</div>
          <div className="h-10 md:h-12 w-px bg-gray-300"></div>
          <div className="flex flex-col">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill="#FF9F40"
                  color="#FF9F40"
                  size={16}
                  className="mr-0.5 md:mr-1"
                />
              ))}
            </div>

            <div className="text-gray-500 text-sm sm:text-base md:text-lg mt-1">
              3,499 Genuine rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSalon;