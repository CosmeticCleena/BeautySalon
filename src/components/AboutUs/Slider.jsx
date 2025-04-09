import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {images} from "../../data/sliderImages";
export default function ImageSlider() {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  return (
    <div className="relative w-full">
      <div
        ref={sliderRef}
        className="w-full flex overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onScroll={handleScroll}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {images.map((image, index) => (
          <div key={index} className="w-1/4 flex-shrink-0 px-1">
            <img
              src={image}
              alt={`Spa service ${index + 1}`}
              className="w-full h-64 object-cover rounded"
            />
          </div>
        ))}
      </div>

      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Previous images"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Next images"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
