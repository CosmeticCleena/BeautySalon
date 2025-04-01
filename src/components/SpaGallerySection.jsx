import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import Spa1 from "/img/Spa1.svg";
import Spa2 from "/img/Spa2.svg";
import Spa3 from "/img/Spa3.svg";
import Spa4 from "/img/Spa4.svg";
import Spa5 from "/img/Spa5.svg";
const SpaGallerySection = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex flex-col text-center justify-center mb-10 gap-4">
        <h2 className="text-[20px] font-normal">About Us</h2>
        <img
          src={FlowerUnderHeader}
          alt="Decorative divider"
          className="h-6"
        />
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

      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-2 flex flex-col justify-center">
          <p className="transform -rotate-90 origin-center whitespace-nowrap text-gray-600 font-medium">
            Skilled and Certified Professionals
          </p>
        </div>

        <div className="col-span-5">
  <img
    src={Spa1}
    alt="Relaxing massage treatment"
    className="w-full h-full object-cover"
  />
  <p className="text-center mt-4 text-gray-600">
    Certified FDA-Approved Materials
  </p>
</div>

<div className="col-span-5 grid grid-cols-2 gap-4 h-1/2">
  <div>
    <img
      src={Spa3}
      alt="Couple massage"
      className="w-full h-full object-cover"
    />
  </div>
  <div>
    <img
      src={Spa5}
      alt="Spa interior"
      className="w-full h-full object-cover"
    />
    <p className="text-center mt-2 text-gray-600">
      More Than 20 Operators
    </p>
  </div>
</div>

      </div>

      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-3">
          <img
            src={Spa2}
            alt="Facial treatment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-4 col-start-9">
          <img
            src={Spa4}
            alt="Head massage"
            className="w-full h-full object-cover"
          />
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
