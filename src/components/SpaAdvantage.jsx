import React, { useState } from "react";
import SpaTherapy from "/img/DSC05316.jpg";
import Dg1 from "/img/dg1.jpg";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import spaAdvantages from "../data/spaTherapy";
import leftButton from "/img/leftButton.svg";
import rightButton from "/img/rightButton.svg";

const images = [Dg1,SpaTherapy];

const SpaAdvantage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Phần tiêu đề chính ở trên cùng */}
        <div className="flex flex-col items-center text-center mb-4 md:mb-8">
          <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-medium mb-2 md:mb-3">
            {spaAdvantages.heading}
          </h2>
          <img 
            src={FlowerUnderHeader} 
            alt="Yếu tố trang trí hoa - CLEENA" 
            className="h-5 md:h-6"
            loading="lazy"
            width="auto"
            height="24"
          />
        </div>
        
        {/* Khung chính chứa ảnh và nội dung */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Phần ảnh chiều ngang */}
          <div className="w-full lg:w-3/5 relative">
            <img 
              src={images[currentImage]} 
              className="w-full h-auto object-cover rounded-md" 
              alt={`CLEENA Spa - Hình ảnh dịch vụ ${currentImage + 1}`}
              loading="lazy"
              width="600"
              height="400"
            />
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#D1AE62] rounded-full p-2 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-[#D1B76E] hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D1AE62] focus:ring-offset-2"
              aria-label="Ảnh trước"
            >
              <img src={leftButton} alt="" className="w-6 h-6" loading="lazy" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D1AE62] rounded-full p-2 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-[#D1B76E] hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D1AE62] focus:ring-offset-2"
              aria-label="Ảnh tiếp theo"
            >
              <img src={rightButton} alt="" className="w-6 h-6" loading="lazy" />
            </button>
          </div>
          
          {/* Phần nội dung */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6 md:gap-8">
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-normal text-center lg:text-left">
              {spaAdvantages.title}
            </h2>
            
            <p className="text-base md:text-lg font-normal text-center lg:text-left">
              {spaAdvantages.description}
            </p>
            
            <div className="flex flex-col gap-4 md:gap-5">
              {spaAdvantages.benefits.map((advantage, index) => (
                <div key={index} className="border-b-[1px] border-b-[#D8D8D8] pb-2">
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-2 text-center lg:text-left">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center lg:justify-start mt-4">
              <button 
                className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base"
                aria-label="Tìm hiểu thêm về dịch vụ CLEENA"
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaAdvantage;