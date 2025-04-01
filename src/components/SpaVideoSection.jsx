import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import spaFeedback from "../data/spaFeedback";
const SpaVideoSection = () => {
  const [feedbackIndex, setFeedbackIndex] = React.useState(0);
  return (
    <div className="w-full relative">
      <video
        muted="muted"
        playsinline=""
        autoplay="autoplay"
        loop="loop"
        className="w-full h-[750px] object-cover flex items-center justify-center"
      >
        <source src="/172687-849651731.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-full left-1/2 w-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[36px] font-bold z-10 border-[1px] border-[#D8D8D8] text-center">
        <div className="flex flex-col items-center gap-5 mt-16">
          <h2 className="text-[44px] font-normal">Satisfied Customers</h2>
          <img src={FlowerUnderHeader} alt="" />
        </div>
        <div className="flex justify-center gap-5  my-16 text-[#6A6A6A] items-center">
          <button
            onClick={() =>
              setFeedbackIndex(
                !feedbackIndex ? spaFeedback.length - 1 : feedbackIndex - 1
              )
            }
            className="text-[18px] font-medium p-12 border-r-[1px] border-r-[#D8D8D8]"
          >
            Prev
          </button>
          <div className="flex flex-col items-center gap-8">
            <p className="text-[20px] font-normal">
              {spaFeedback[feedbackIndex].feedback}
            </p>
            <p className="text-[#D1AE62] text-[22px]">{spaFeedback[feedbackIndex].name}</p>
          </div>

          <button
            onClick={() =>
              setFeedbackIndex(
                feedbackIndex == spaFeedback.length - 1 ? 0 : feedbackIndex + 1
              )
            }
            className="text-[18px] font-medium p-12 border-l-[1px] border-l-[#D8D8D8]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaVideoSection;
