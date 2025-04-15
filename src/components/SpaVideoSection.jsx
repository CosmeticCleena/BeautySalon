import React, { useState, useEffect } from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import spaFeedback from "../data/spaFeedback";

const SpaVideoSection = ({pageType}) => {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextFeedback = () => {
    setFeedbackIndex(
      feedbackIndex === spaFeedback[pageType].comment.length - 1 ? 0 : feedbackIndex + 1
    );
  };

  const prevFeedback = () => {
    setFeedbackIndex(
      feedbackIndex === 0 ? spaFeedback[pageType].comment.length - 1 : feedbackIndex - 1
    );
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextFeedback();
    } else if (isRightSwipe) {
      prevFeedback();
    }
  };

  return (
    <div className="w-full relative mb-8 md:mb-80">
      <video
        muted="muted"
        playsInline
        autoPlay
        loop
        className="w-full h-[750px] object-cover flex items-center justify-center"
      >
        <source src="/172687-849651731.mp4" type="video/mp4" />
      </video>
      <div 
        className="md:absolute md:top-full md:left-1/2 w-full md:w-2/3 transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white text-[36px] font-bold z-10 border-[1px] border-[#D8D8D8] text-center"
      >
        <div className="flex flex-col items-center gap-5 mt-16">
          <h2 className="text-[32px] md:text-[44px] font-normal">{spaFeedback[pageType].title}</h2>
          <img src={FlowerUnderHeader} alt="" />
        </div>
        <div 
          className="flex justify-center gap-5 my-16 text-[#6A6A6A] items-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Prev button - hidden on mobile */}
          <button
            onClick={prevFeedback}
            className="hidden md:block text-[18px] font-medium p-12 border-r-[1px] border-r-[#D8D8D8]"
          >
            Prev
          </button>
          
          <div className="flex flex-col items-center gap-8 px-4 md:px-0">
            <p className="text-[18px] md:text-[20px] font-normal">
              {spaFeedback[pageType].comment[feedbackIndex].feedback}
            </p>
            <p className="text-[#D1AE62] text-[20px] md:text-[22px]">
              {spaFeedback[pageType].comment[feedbackIndex].name}
            </p>
            
            {/* Mobile-only indicator dots */}
            <div className="flex gap-2 md:hidden">
              {spaFeedback[pageType].comment.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === feedbackIndex ? "bg-[#D1AE62]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next button - hidden on mobile */}
          <button
            onClick={nextFeedback}
            className="hidden md:block text-[18px] font-medium p-12 border-l-[1px] border-l-[#D8D8D8]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaVideoSection;