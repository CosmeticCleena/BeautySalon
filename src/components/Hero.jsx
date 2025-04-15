import React from "react";
import rightButton from "/img/rightButton.svg";
import leftButton from "/img/leftButton.svg";
import heroImage from "../data/spaHeroimages";

const Hero = () => {
  const [heroImageIndex, setHeroImageIndex] = React.useState(0);
  return (
    <div
      className="w-full h-[90vh] md:h-[100vh] lg:h-[110vh] bg-cover bg-center -z-10 relative"
      style={{ backgroundImage: `url(${heroImage[heroImageIndex].image})` }}
    >
      <div className="flex flex-col items-center justify-center h-full px-4 md:px-8">
        <h1 className="text-white text-[12px] sm:text-[14px] md:text-[16px] font-[600]">
          Chào mừng đến với Cleena
        </h1>
        <p className="text-white text-[32px] sm:text-[48px] md:text-[60px] lg:text-[74px] font-[400] max-w-[800px] text-center leading-tight md:leading-normal">
          <span className="text-[#D1AE62]">Support for </span>a Calm and Relaxed
          Mind
        </p>
        <button
          className="text-[14px] sm:text-[16px] md:text-[18px] font-bold border-white border-[1px] text-white px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 mt-4 sm:mt-6 md:mt-8 relative
  before:absolute before:w-full before:h-full before:translate-x-1 before:translate-y-1 
  before:bg-white before:bg-opacity-50 before:content-[''] before:-z-9 before:top-0 before:left-0"
        >
          Get An Appointment <i className="fa-solid fa-arrow-right"></i>
        </button>
        
        {/* Navigation buttons - hidden on very small screens */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-8 md:px-16 lg:px-24 z-20">
          <button 
            onClick={() => setHeroImageIndex((heroImageIndex - 1 + heroImage.length) % heroImage.length)}
            className="hidden sm:block"
          >
            <img 
              src={leftButton} 
              alt="Previous" 
              className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 p-2 sm:p-3 md:p-5 rounded-full bg-[#0D0D0D80] opacity-50 hover:opacity-90"
            />
          </button>
          <button 
            onClick={() => setHeroImageIndex((heroImageIndex + 1) % heroImage.length)}
            className="hidden sm:block"
          >
            <img 
              src={rightButton} 
              alt="Next" 
              className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 p-2 sm:p-3 md:p-5 rounded-full bg-[#0D0D0D80] opacity-50 hover:opacity-90"
            />
          </button>
        </div>
        
        {/* Indicator dots */}
        <div className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[40px] -translate-y-1/2 flex justify-center gap-2 sm:gap-4 md:gap-8">
            {heroImage.map((image, index) => (
              <div 
                className={`w-4 h-4 sm:w-8 sm:h-8 md:w-12 md:h-12 border-2 sm:border-3 md:border-4 rounded-full cursor-pointer ${
                  heroImageIndex === index ? 'border-[#D1AE62]' : 'border-white'
                }`} 
                key={index} 
                onClick={() => setHeroImageIndex(index)}
              >
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;