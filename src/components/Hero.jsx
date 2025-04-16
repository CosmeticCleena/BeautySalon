import React from "react";
import HeroImage from "/img/Hero.svg";
import rightButton from "/img/rightButton.svg";
import leftButton from "/img/leftButton.svg";
import heroImage from "../data/spaHeroimages";

const Hero = () => {
  const [heroImageIndex, setHeroImageIndex] = React.useState(0);
  return (
    <div
      className="w-full h-[110vh] bg-cover bg-center -z-10"
      style={{ backgroundImage: `url(${heroImage[heroImageIndex].image})` }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-[16px] font-[600]">
          Chào mừng đến với Cleena
        </h1>
        <p className="text-white text-[74px] font-[400] max-w-[800px] text-center">
          <span className="text-[#D1AE62]">Support for </span>a Calm and Relaxed
          Mind
        </p>
        <button
          className="text-[18px] font-bold border-white border-[1px] text-white px-5 py-2 mt-8 relative
  before:absolute before:w-full before:h-full before:translate-x-1 before:translate-y-1 
  before:bg-white before:bg-opacity-50 before:content-[''] before:-z-9 before:top-0 before:left-0"
        >
          Get An Appointment <i class="fa-solid fa-arrow-right"></i>
        </button>
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-24 z-20">
          <button
            onClick={() =>
              setHeroImageIndex(
                (heroImageIndex - 1 + heroImage.length) % heroImage.length
              )
            }
          >
            <img
              src={leftButton}
              alt=""
              className="h-16 w-16 p-5 rounded-full bg-[#0D0D0D80] opacity-50 hover:opacity-90"
            />
          </button>
          <button
            onClick={() =>
              setHeroImageIndex((heroImageIndex + 1) % heroImage.length)
            }
          >
            <img
              src={rightButton}
              alt=""
              className="h-16 w-16 p-5 rounded-full bg-[#0D0D0D80] opacity-50 hover:opacity-90"
            />
          </button>
        </div>
        <div className="absolute bottom-[40px] -translate-y-1/2 flex justify-center gap-8">
          {heroImage.map((image, index) => (
            <div
              className={`w-12 border-4 rounded-full cursor-pointer ${
                heroImageIndex === index ? "border-[#D1AE62]" : "border-white"
              }`}
              key={index}
              onClick={() => setHeroImageIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
