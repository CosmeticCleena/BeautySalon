// import React, { useState, useEffect } from "react";
// import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
// import spaFeedback from "../data/spaFeedback";

// const SpaVideoSection = ({pageType}) => {
//   const [feedbackIndex, setFeedbackIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
  
//   // Minimum swipe distance (in px)
//   const minSwipeDistance = 50;

//   const nextFeedback = () => {
//     setFeedbackIndex(
//       feedbackIndex === spaFeedback[pageType].comment.length - 1 ? 0 : feedbackIndex + 1
//     );
//   };

//   const prevFeedback = () => {
//     setFeedbackIndex(
//       feedbackIndex === 0 ? spaFeedback[pageType].comment.length - 1 : feedbackIndex - 1
//     );
//   };

//   const onTouchStart = (e) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const onTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > minSwipeDistance;
//     const isRightSwipe = distance < -minSwipeDistance;
    
//     if (isLeftSwipe) {
//       nextFeedback();
//     } else if (isRightSwipe) {
//       prevFeedback();
//     }
//   };

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         nextFeedback();
//       } else if (e.key === "ArrowLeft") {
//         prevFeedback();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [feedbackIndex]);

//   return (
//     <div className="w-full relative mb-8 md:mb-80">
//       <video
//         muted="muted"
//         playsInline
//         autoPlay
//         loop
//         aria-hidden="true"
//         className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] object-cover flex items-center justify-center"
//       >
//         <source src="/172687-849651731.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div 
//         className="md:absolute md:top-full md:left-1/2 w-full md:w-2/3 transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white text-[36px] font-bold z-10 border-[1px] border-[#D8D8D8] text-center shadow-md"
//       >
//         <div className="flex flex-col items-center gap-5 mt-12 md:mt-16">
//           <h2 className="text-[32px] md:text-[44px] font-normal">{spaFeedback[pageType].title}</h2>
//           <img src={FlowerUnderHeader} alt="" />
//         </div>
//         <div 
//           className="flex justify-center gap-5 my-12 md:my-16 text-[#6A6A6A] items-center"
//           onTouchStart={onTouchStart}
//           onTouchMove={onTouchMove}
//           onTouchEnd={onTouchEnd}
//           role="region"
//           aria-label="Testimonials"
//         >
//           {/* Prev button - hidden on mobile */}
//           <button
//             onClick={prevFeedback}
//             className="hidden md:block text-[18px] font-medium p-8 lg:p-12 border-r-[1px] border-r-[#D8D8D8]"
//             aria-label="Previous testimonial"
//           >
//             Prev
//           </button>
          
//           <div className="flex flex-col items-center gap-6 md:gap-8 px-4 md:px-0">
//             <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal">
//               {spaFeedback[pageType].comment[feedbackIndex].feedback}
//             </p>
//             <p className="text-[#D1AE62] text-[18px] sm:text-[20px] md:text-[22px]">
//               {spaFeedback[pageType].comment[feedbackIndex].name}
//             </p>
            
//             {/* Mobile-only indicator dots */}
//             <div className="flex gap-2 md:hidden">
//               {spaFeedback[pageType].comment.map((_, index) => (
//                 <button 
//                   key={index}
//                   onClick={() => setFeedbackIndex(index)}
//                   className={`w-2 h-2 rounded-full ${
//                     index === feedbackIndex ? "bg-[#D1AE62]" : "bg-gray-300"
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                   aria-current={index === feedbackIndex ? "true" : "false"}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Next button - hidden on mobile */}
//           <button
//             onClick={nextFeedback}
//             className="hidden md:block text-[18px] font-medium p-8 lg:p-12 border-l-[1px] border-l-[#D8D8D8]"
//             aria-label="Next testimonial"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//     <></>
//   );
// };

// export default SpaVideoSection;



import React, { useState, useRef, useEffect } from "react";
import SpaTherapy from "/img/SpaTherapy.svg";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import spaAdvantagesData from "../data/spaFeedback";
// Giả lập dữ liệu cho 5 bài viết spa


const SpaAdvantageSlider = () => {
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [direction, setDirection] = useState(null); // 'left' | 'right'
  const [animating, setAnimating] = useState(false);

  // Touch state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto play
  useEffect(() => {
    if (animating) return;
    const timer = setInterval(() => {
      setDirection('right');
      setAnimating(true);
      setTimeout(() => {
        setDisplayedIndex((prev) => (prev + 1) % spaAdvantagesData.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, [animating]);

  // Touch handlers
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

  const handleNext = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setDisplayedIndex((prev) => (prev + 1) % spaAdvantagesData.length);
      setAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setDisplayedIndex((prev) =>
        prev === 0 ? spaAdvantagesData.length - 1 : prev - 1
      );
      setAnimating(false);
    }, 400);
  };

  const currentSpa = spaAdvantagesData[displayedIndex];

  // Animation classes
  const animationClass = animating
    ? direction === 'right'
      ? 'opacity-0 translate-x-16'
      : 'opacity-0 -translate-x-16'
    : 'opacity-100 translate-x-0';

  return (
    <div className="relative w-full py-16 md:py-20 lg:py-24 px-4 md:px-8">
      {/* Navigation Controls - Left (hidden on mobile) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-[#D1AE62] hover:bg-[#D1B76E] text-white p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors shadow-md hidden md:flex"
        disabled={animating}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Navigation Controls - Right (hidden on mobile) */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-[#D1AE62] hover:bg-[#D1B76E] text-white p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors shadow-md hidden md:flex"
        disabled={animating}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="overflow-hidden flex flex-col items-center gap-20">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-2 md:mb-3 w-full text-center">
            Khách Hàng FeedBack
          </h2>
          <img src={FlowerUnderHeader} alt="Decorative divider" />
        </div>
        <div
          className={`flex flex-col md:flex-row w-full md:w-4/5 lg:w-3/5 mx-auto justify-center gap-12 md:gap-16 lg:gap-24
            transition-all duration-500 ease-in-out
            ${animationClass}
          `}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex-1 flex items-center justify-center">
            <img
              src={currentSpa.image}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow"
              alt={currentSpa.heading}
            />
          </div>
          <div className="flex flex-col flex-1 gap-6 lg:gap-5 *:text-center *:md:text-start">
            <h2 className="text-[28px] md:text-[26px] lg:text-[30px] font-normal md:mt-3">
              {currentSpa.title}
            </h2>
            <p className="text-base md:text-lg font-normal">
              {currentSpa.description}
            </p>
          </div>
        </div>
      </div>
      {/* Pagination indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {spaAdvantagesData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === displayedIndex ? 'bg-[#D1AE62]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaAdvantageSlider;