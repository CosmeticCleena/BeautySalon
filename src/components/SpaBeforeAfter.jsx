import React, { useState, useRef, useEffect } from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";

const images = [
  "/img/beforeAfter/1.png",
  "/img/beforeAfter/2.jpg",
  "/img/beforeAfter/3.jpg",
  "/img/beforeAfter/4.jpg",

];

const SpaBeforeAfter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const totalPages = images.length; // Sửa đổi: mỗi trang hiển thị 1 ảnh

  // Touch state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto play
  useEffect(() => {
    if (animating) return;
    const timer = setInterval(() => {
      setDirection("right");
      setAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
        setAnimating(false);
      }, 350);
    }, 3000);
    return () => clearInterval(timer);
  }, [animating, totalPages]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50 && !animating) {
      if (distance > 0) {
        // Swipe left
        handleNext();
      } else {
        // Swipe right
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handlePrev = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
      setAnimating(false);
    }, 350);
  };

  const handleNext = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
      setAnimating(false);
    }, 350);
  };

  // Lấy ảnh hiện tại: chỉ 1 ảnh
  const currentImage = images[currentPage];

  // Animation classes
  const animationClass = animating
    ? direction === "right"
      ? "opacity-0 translate-x-8"
      : "opacity-0 -translate-x-8"
    : "opacity-100 translate-x-0";

  return (
    <div className="w-full flex flex-col items-center pt-24 pb-12 relative">
      <div className="flex flex-col text-center justify-center mb-6 md:mb-8 lg:mb-10 gap-4">
        <h2 className="text-[18px] md:text-[20px] font-normal">
          KHÁCH HÀNG LÀM ĐẸP THÀNH CÔNG
        </h2>
        <img
          src={FlowerUnderHeader}
          alt="Decorative divider"
          className="h-5 md:h-6 mx-auto"
        />
      </div>

      <div className="flex items-center justify-center gap-6 mb-8 w-full">
        {/* Nút chuyển trang trái */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#D1AE62] text-white hover:bg-[#D1B76E] transition-colors hidden md:block"
          disabled={animating}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Container ảnh - giờ chỉ hiển thị 1 ảnh */}
        <div
          className={`flex justify-center px-5 w-full max-w-md transition-all duration-300 ease-in-out ${animationClass}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full aspect-square max-h-[70vh] overflow-hidden rounded-lg shadow-lg">
            <img

              src={currentImage}
              alt={`Khách hàng ${currentPage + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Nút chuyển trang phải */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#D1AE62] text-white hover:bg-[#D1B76E] transition-colors hidden md:block"
          disabled={animating}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      
      {/* Chấm pagination để chỉ báo vị trí hiện tại */}
      <div className="flex justify-center gap-2 mb-5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!animating) {
                setCurrentPage(idx);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentPage
                ? "bg-[#D1AE62] w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Chuyển đến ảnh ${idx + 1}`}
          />
        ))}
      </div>
      
      <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl px-5 mt-4">
        Hàng trăm khách hàng đã chia sẻ những câu chuyện và tình trạng riêng,
        tin tưởng đồng hành cùng CLEENA trên hành trình hoàn thiện ngoại hình của
        bản thân.
      </p>
    </div>
  );
};

export default SpaBeforeAfter;