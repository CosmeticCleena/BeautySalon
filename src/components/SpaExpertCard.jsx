import React from "react";

const SpaExpertCard = ({ expert }) => {
  return (
    <div className="relative group pt-5 sm:pt-6 flex justify-center">
      <div className="w-[210px] h-[290px] sm:w-[230px] sm:h-[320px] md:w-[250px] md:h-[350px] flex justify-center">
        <img
          src={`${expert.image}`}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
          alt={expert.name}
        />
      </div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[190px] md:w-[200px] bg-[#FFF7F4] p-2 sm:p-3 md:p-4 *:text-center shadow-md rounded-lg">
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold">{expert.name}</p>
        <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium">{expert.role}</p>
      </div>
    </div>
  );
};

export default SpaExpertCard;