import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";

const Review = () => {
  return (
    <div className="flex flex-col justify-center py-10 md:py-16 lg:mb-24 gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10">
        {/* Testimonial Cards */}
        <div className="flex flex-col gap-5 md:gap-6 w-full lg:w-auto order-2 lg:order-1">
          <div className="flex flex-col sm:flex-row shadow-lg shadow-black/5 p-4 md:p-5 gap-4 md:gap-5 w-full sm:w-[90%] self-center sm:self-end">
            <img
              src="/img/aboutUs/GaiXinhVcl1.svg"
              alt="Customer testimonial"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-2 md:gap-4 justify-center max-w-full sm:max-w-[400px] text-center sm:text-left">
              <p className="text-xl md:text-2xl font-semibold">
                Chị Huyền, 39 tuổi, Hà Nội
              </p>
              <p className="text-sm md:text-base">
                "Không gian spa vô cùng sang trọng và ấm cúng. Nhân viên chu
                đáo, nhẹ nhàng và chuyên nghiệp. Mỗi lần đến đây là một lần được
                thư giãn thực sự!"
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row shadow-lg shadow-black/5 p-4 md:p-5 gap-4 md:gap-5 w-full sm:w-[90%] self-center sm:self-start">
            <img
              src="/img/aboutUs/GaiXinhVcl2.svg"
              alt="Customer testimonial"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-2 md:gap-4 justify-center max-w-full sm:max-w-[400px] text-center sm:text-left">
              <p className="text-xl md:text-2xl font-semibold">
                Chị Phương 44 tuổi, Hà Nội
              </p>
              <p className="text-sm md:text-base">
                "Tôi rất ấn tượng với quy trình chăm sóc bài bản, rõ ràng. Dịch
                vụ xử lí nám ở đây rất hiệu quả, không đau hay sưng đỏ gì, sau 2
                tuần tôi thấy da mình cải thiện rõ nám, tàn nhang đỡ đi khá
                nhiều."
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 gap-4 md:gap-6 order-1 lg:order-2">
          <p className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-normal text-center lg:text-left leading-tight">
            Lắng nghe khách hàng nói về hành trình làm đẹp tại Cleena{" "}
          </p>
          <img
            src={FlowerUnderHeader}
            alt="Decorative element"
            className="h-5 md:h-auto"
          />

          <p className="text-base md:text-lg font-normal text-[#6A6A6A] text-center lg:text-left">
            Sự hài lòng của khách hàng luôn là kim chỉ nam của Cleena. Chúng tôi
            không ngừng nỗ lực hoàn thiện để mang đến trải nghiệm tốt nhất, xứng
            đáng với tình cảm và sự tin yêu mà khách hàng dành cho Cleena.
          </p>
          <div className="flex gap-6 md:gap-8 mt-2 md:mt-4">
            <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 sm:py-3 px-6 sm:px-8 transition-colors text-sm md:text-base">
              Bắt đầu{" "}
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-xl md:text-2xl">
        
 	
Cleena – Nơi hơn <span className="font-bold">5,000</span> khách hàng đã trao trọn niềm tin và nhận lại sự hài lòng.
      </p>
    </div>
  );
};

export default Review;
