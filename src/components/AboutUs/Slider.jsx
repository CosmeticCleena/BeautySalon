import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../../data/sliderImages";
import "./slider-optimizations.css";

export default React.memo(function ImageSlider({ type }) {
  const sliderRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Memoize images để tránh re-render không cần thiết
  const imagesList = useMemo(() => images[type] || [], [type]);

  const checkScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 10
    );
  }, []);

  // Debounced scroll handler để giảm số lần re-render
  const debouncedCheckScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(checkScroll, 16); // ~60fps
  }, [checkScroll]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", debouncedCheckScroll, { passive: true });
    }

    checkScroll(); // initial check
    window.addEventListener("resize", checkScroll);
    
    return () => {
      window.removeEventListener("resize", checkScroll);
      if (slider) slider.removeEventListener("scroll", debouncedCheckScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [debouncedCheckScroll, checkScroll]);

  const scrollLeft = useCallback(() => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth;
    const newPosition = Math.max(0, sliderRef.current.scrollLeft - scrollAmount);
    sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth;
    const newPosition = sliderRef.current.scrollLeft + scrollAmount;
    sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  }, []);

  // Touch controls với debouncing
  const handleTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSignificantSwipe = Math.abs(distance) > 50;
    
    if (isSignificantSwipe) {
      if (distance > 0) {
        scrollRight();
      } else {
        scrollLeft();
      }
    }
  }, [touchStart, touchEnd, scrollLeft, scrollRight]);

  return (
    <div className="relative w-full px-2 sm:px-4">
      <div
        ref={sliderRef}
        className="optimized-slider w-full flex overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          willChange: "scroll-position",
          transform: "translateZ(0)" // Force hardware acceleration
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <style>{`
          .image-slider::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {imagesList.map((image, index) => (
          <div
            key={`${type}-${index}`}
            className="optimized-slider-item w-4/5 sm:w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0 px-1 sm:px-2"
          >
            <div className="relative overflow-hidden rounded shadow-sm bg-gray-100">
              <img
                src={image}
                alt={`CLEENA Spa - Dịch vụ ${index + 1}`}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
                className={`w-full h-48 sm:h-56 md:h-64 object-cover transition-opacity duration-300 ${
                  index < 3 ? 'priority-image' : ''
                }`}
                width={300}
                height={240}
                style={{
                  aspectRatio: '300/240',
                  backgroundColor: '#f3f4f6'
                }}
                onLoad={(e) => {
                  e.target.style.opacity = '1';
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
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
});
