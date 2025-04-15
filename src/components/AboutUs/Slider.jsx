import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {images} from "../../data/sliderImages";

export default function ImageSlider({type}) {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const checkScroll = () => {
      if (!sliderRef.current) return;

      setShowLeftArrow(scrollPosition > 0);
      setShowRightArrow(
        scrollPosition <
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
      );
    };

    checkScroll();
    
    // Re-check when window resizes
    const handleResize = () => {
      checkScroll();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollPosition]);

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth;
    const newPosition = Math.max(0, scrollPosition - scrollAmount);

    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth;
    const newPosition = scrollPosition + scrollAmount;

    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  // Enhanced touch controls
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      scrollRight();
    }
    
    if (isRightSwipe) {
      scrollLeft();
    }
  };

  return (
    <div className="relative w-full px-2 sm:px-4">
      <div
        ref={sliderRef}
        className="w-full flex overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {images[type].map((image, index) => (
          <div 
            key={index} 
            className="w-4/5 sm:w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0 px-1 sm:px-2"
          >
            <img
              src={image}
              alt={`Spa service ${index + 1}`}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded shadow-sm"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 sm:p-2 rounded-full shadow-md z-10"
          aria-label="Previous images"
        >
          <ChevronLeft size={20} className="sm:hidden" />
          <ChevronLeft size={24} className="hidden sm:block" />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 sm:p-2 rounded-full shadow-md z-10"
          aria-label="Next images"
        >
          <ChevronRight size={20} className="sm:hidden" />
          <ChevronRight size={24} className="hidden sm:block" />
        </button>
      )}
    </div>
  );
}