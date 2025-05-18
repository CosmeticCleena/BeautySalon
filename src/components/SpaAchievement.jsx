import React from "react";
const SpaAchievement = () => {
  return (
    <div className="w-full bg-[#0D0D0D] flex flex-col md:flex-row justify-center px-8 gap-16 text-white mx-auto py-24">
      <div className="flex gap-12 items-center justify-between lg:justify-start">
        <p className="text-[#D1AE62] text-[44px] font-normal">10+</p>
        <p className="text-[18px] font-normal max-w-[178px]">
        Năm trong lĩnh vực cung cấp dịch vụ spa
        </p>
      </div>

      <div className="hidden md:block h-16 w-px bg-gray-700"></div>

      <div className="flex gap-12 items-center justify-between lg:justify-start">
        <p className="text-[#D1AE62] text-[44px] font-normal">5000+</p>
        <p className="text-[18px] font-normal max-w-[178px]">Khách hàng được phục vụ 
        </p>
      </div>

      <div className="hidden md:block h-16 w-px bg-gray-700"></div>

      <div className="flex gap-12 items-center justify-between lg:justify-start">
        <p className="text-[#D1AE62] text-[44px] font-normal">98%</p>
        <p className="text-[18px] font-normal max-w-[178px]">
         Tỷ lệ khách hàng hài lòng về chúng tôi        </p>
      </div>
    </div>
  );
};

export default SpaAchievement;
