import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import { Star } from "lucide-react";

const AboutSalon = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center py-10 md:py-16 lg:py-20 gap-8 md:gap-16 lg:gap-24 xl:gap-40 px-4 sm:px-8 md:px-12 mx-auto">

      {/* Image Section - 2 images stacked vertically */}
      <div className="flex flex-col gap-4 md:gap-6 mb-10 lg:mb-0">
        <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden rounded-lg">
          <img
            src="/img/aboutUs/bigimg.png"
            alt="CLEENA - Nội thất salon sang trọng"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden rounded-lg">
          <img
            src="/img/aboutUs/smallimg.png"
            alt="CLEENA - Chi tiết điều trị"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center lg:items-start w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3 gap-6 md:gap-8">
        {/* <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-1 md:mb-2 text-center lg:text-left">Về chúng tôi</h2>
          <img src={FlowerUnderHeader} alt="Decorative element" className="h-5 md:h-auto" />
        </div> */}

        <p className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-normal leading-tight text-center lg:text-left">
          Cleena – Nơi khách hàng chọn mặt gửi vàng
        </p>

        {/* <p className="text-base md:text-lg font-normal text-[#6A6A6A] text-center lg:text-left">
         Làm đẹp không chỉ là một nhu cầu, mà còn là hành trình tìm lại sự tự tin và yêu thương chính mình. <br></br>
Và Cleena tự hào là nơi được khách hàng tin tưởng đồng hành trong hành trình đó. <br></br>
Với đội ngũ kỹ thuật viên giàu kinh nghiệm, tận tâm trong từng thao tác – cùng hệ thống máy móc công nghệ cao tiên tiến, Cleena không ngừng nâng tầm chất lượng dịch vụ, mang đến trải nghiệm thư giãn – an toàn – hiệu quả cho từng khách hàng.<br></br>
Chúng tôi tin rằng: sự hài lòng không đến từ lời quảng cáo, mà đến từ trải nghiệm thực tế và những lời khen chân thành của chính khách hàng.
Hàng ngàn đánh giá tích cực chính là minh chứng rõ ràng nhất cho sự khác biệt mà Cleena mang lại.

        </p> */}
        <div className="flex flex-col gap-4 md:gap-5">
          <p className="text-base md:text-lg font-normal text-[#6A6A6A] text-center lg:text-left">
            Làm đẹp không chỉ là một nhu cầu, mà còn là hành trình tìm lại sự tự tin và yêu thương chính mình.
          </p>

          <p className="text-base md:text-lg font-normal text-[#6A6A6A] text-center lg:text-left">
            Và Cleena tự hào là nơi được khách hàng tin tưởng đồng hành trong hành trình đó.
          </p>

          <p className="text-base md:text-lg font-normal text-[#6A6A6A] text-center lg:text-left">
            Với đội ngũ kỹ thuật viên giàu kinh nghiệm, tận tâm trong từng thao tác – cùng hệ thống máy móc công nghệ cao tiên tiến, Cleena không ngừng nâng tầm chất lượng dịch vụ, mang đến trải nghiệm thư giãn – an toàn – hiệu quả cho từng khách hàng.
          </p>

          <p className="text-base md:text-lg font-normal text-[#6A6A6A] text-center lg:text-left">
            Chúng tôi tin rằng: sự hài lòng không đến từ lời quảng cáo, mà đến từ trải nghiệm thực tế và những lời khen chân thành của chính khách hàng.
            Hàng ngàn đánh giá tích cực chính là minh chứng rõ ràng nhất cho sự khác biệt mà Cleena mang lại.
          </p>
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full justify-center lg:justify-start">
          <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
            About Salon
          </button>
          <button className="text-[#6A6A6A] hover:underline py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
            How We Work
          </button>
        </div> */}
        {/* 
        <div className="flex items-center gap-4 p-2 sm:p-3 md:p-4 mt-4 md:mt-6">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">4.9</div>
          <div className="h-10 md:h-12 w-px bg-gray-300"></div>
          <div className="flex flex-col">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill="#FF9F40"
                  color="#FF9F40"
                  size={16}
                  className="mr-0.5 md:mr-1"
                />
              ))}
            </div>

            <div className="text-gray-500 text-sm sm:text-base md:text-lg mt-1">
              3,499 đánh giá
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSalon;