import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../../data/sliderImages";

export default function ImageSlider({ type }) {
  const sliderRef = useRef(null);
  const animationFrameId = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 10
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current) return;
      setScrollPosition(sliderRef.current.scrollLeft);
      checkScroll();
    };

    const throttledScroll = () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(handleScroll);
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", throttledScroll);
    }

    checkScroll(); // initial check

    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
      if (slider) slider.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth;
    const newPosition = Math.max(0, sliderRef.current.scrollLeft - scrollAmount);
    sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth;
    const newPosition = sliderRef.current.scrollLeft + scrollAmount;
    sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  // Touch controls
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
    if (distance > 50) scrollRight();
    if (distance < -50) scrollLeft();
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
              alt={`CLEENA Spa - Dịch vụ ${index + 1}`}
              loading="lazy"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded shadow-sm"
              width="300"
              height="240"
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
