import React, { useState, useRef } from "react";
import HeroImage from "/img/Hero.svg";
import rightButton from "/img/rightButton.svg";
import leftButton from "/img/leftButton.svg";
import heroImage from "../data/spaHeroimages";

const Hero = () => {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const heroRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      setHeroImageIndex((heroImageIndex + 1) % heroImage.length);
    }

    if (touchStart - touchEnd < -100) {
      setHeroImageIndex((heroImageIndex - 1 + heroImage.length) % heroImage.length);
    }
  };
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className="w-full h-[110vh] md:h-[110vh] bg-cover bg-center -z-10"
      style={{ backgroundImage: `url(${heroImage[heroImageIndex].image})` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex flex-col items-center justify-center h-full px-4 md:px-0">
        {/* <h1 className="text-white text-[14px] md:text-[16px] font-[600]">
          Chào mừng đến với Cleena
        </h1>
        <p className="text-white text-[36px] md:text-[74px] font-[400] max-w-[800px] text-center leading-tight md:leading-normal">
          <span className="text-[#D1AE62]">Support for </span>a Calm and Relaxed
          Mind
        </p>
        <button
          className="text-[16px] md:text-[18px] font-bold border-white border-[1px] text-white px-4 md:px-5 py-2 mt-6 md:mt-8 relative
            before:absolute before:w-full before:h-full before:translate-x-1 before:translate-y-1 
            before:bg-white before:bg-opacity-50 before:content-[''] before:-z-9 before:top-0 before:left-0"
            onClick={scrollToForm}        >
          Get An Appointment <i className="fa-solid fa-arrow-right"></i>
        </button> */}
        
        {/* Nút điều hướng - chỉ hiển thị trên màn hình md trở lên */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full hidden md:flex justify-between px-6 lg:px-24 z-20">
          <button
            onClick={() =>
              setHeroImageIndex(
                (heroImageIndex - 1 + heroImage.length) % heroImage.length
              )
            }
          >
            <img
              src={leftButton}
              alt="Previous"
              className="h-12 w-12 md:h-16 md:w-16 p-3 md:p-5 rounded-full bg-[#0D0D0D80] opacity-50 hover:opacity-90"
            />
          </button>
          <button
            onClick={() =>
              setHeroImageIndex((heroImageIndex + 1) % heroImage.length)
            }
          >
            <img
              src={rightButton}
              alt="Next"
              className="h-12 w-12 md:h-16 md:w-16 p-3 md:p-5 rounded-full bg-[#0D0D0D80] opacity-50 hover:opacity-90"
            />
          </button>
        </div>
        
        {/* Điểm đánh dấu vị trí ảnh - Responsive cho cả mobile và desktop */}
        <div className="absolute bottom-[20px] md:bottom-[40px] -translate-y-1/2 flex justify-center gap-4 md:gap-8">
          {heroImage.map((image, index) => (
            <div
              className={`w-6 md:w-12 border-2 md:border-4 rounded-full cursor-pointer ${
                heroImageIndex === index ? "border-[#D1AE62]" : "border-white"
              }`}
              key={index}
              onClick={() => setHeroImageIndex(index)}
            ></div>
          ))}
        </div>
        
        {/* Hướng dẫn swipe - chỉ hiển thị trên mobile */}
        <div className="absolute bottom-[80px] text-white text-center text-xs md:hidden">
          <p>Vuốt sang trái hoặc phải để xem thêm</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;