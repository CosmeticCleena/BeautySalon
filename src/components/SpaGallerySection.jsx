import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import Spa1 from "/img/Spa1.svg";
import Spa2 from "/img/Spa2.svg";
import Spa3 from "/img/Spa3.svg";
import Spa4 from "/img/Spa4.svg";
import Spa5 from "/img/Spa5.svg";
const SpaGallerySection = () => {
  return (
    <div className="container mx-auto py-16 max-w-6xl">
      <div className="flex flex-col text-center justify-center mb-10 gap-4">
        <h2 className="text-[20px] font-normal">About Us</h2>
        <img src={FlowerUnderHeader} alt="Decorative divider" className="h-6" />
      </div>

      <h1 className="text-4xl md:text-5xl text-center font-light text-gray-800 mb-6">
        Your Destination for Relaxation and Rejuvenation.
      </h1>

      <div className="max-w-3xl mx-auto text-center text-gray-600 mb-16">
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div className="flex justify-between gap-28 mb-12">
        <div className="flex">
          <div className="self-end pb-40">
            {" "}
            <img src={Spa2} alt="" className="w-[202px] h-[202px]" />
          </div>
          <div className="flex items-center justify-center h-64 w-16 ">
            <p className="transform -rotate-90 origin-center whitespace-nowrap  font-medium">
              Skilled and Certified Professionals
            </p>
          </div>
          <div className="relative">
            <img src={Spa1} alt="" className="w-[363px] h-[554px]" />
            <p className="text-[18px] absolute left-1/3 w-full">Certified FDA-Approved Materials</p>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-20 relative">
            <img src={Spa3} alt="" className="w-[250px] h-[300px]" />
            <p className="absolute top-1/2 -translate-y-1/2 left-1/2 w-full">
              More Than 20 Operators
            </p>
            <img src={Spa4} alt="" className="w-[250px] h-[300px]" />
          </div>
          <div className="flex flex-col">
            <div className="pt-10">
              <img src={Spa5} alt="" className="w-[203px] h-[203px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-3 px-8 transition-colors">
          More About Us
        </button>
        <button className="border border-[#E2C87E] text-[#E2C87E] hover:bg-[#E2C87E] hover:text-white py-3 px-8 transition-colors">
          Make A Call
        </button>
      </div>
    </div>
  );
};

export default SpaGallerySection;
