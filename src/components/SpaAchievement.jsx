import React from "react";
const SpaAchievement = () => {
  return (
    <div className="w-full bg-[#0D0D0D] flex flex-col md:flex-row justify-center px-8 gap-16 text-white mx-auto py-24">
      <div className="flex gap-12 items-center">
        <p className="text-[#D1AE62] text-[44px] font-normal">24+</p>
        <p className="text-[18px] font-normal max-w-[178px]">
          Years in the field offering spa services
        </p>
      </div>

      <div className="hidden md:block h-16 w-px bg-gray-700"></div>

      <div className="flex gap-12 items-center">
        <p className="text-[#D1AE62] text-[44px] font-normal">440</p>
        <p className="text-[18px] font-normal max-w-[178px]">Client Served</p>
      </div>

      <div className="hidden md:block h-16 w-px bg-gray-700"></div>

      <div className="flex gap-12 items-center">
        <p className="text-[#D1AE62] text-[44px] font-normal">100%</p>
        <p className="text-[18px] font-normal max-w-[178px]">
          Satisfactory rate of Our Customers
        </p>
      </div>
    </div>
  );
};

export default SpaAchievement;
