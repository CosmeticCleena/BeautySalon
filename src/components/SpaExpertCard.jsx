import React from "react";

const SpaExpertCard = ({ expert }) => {
  return (
    <div className="relative group pt-8 flex justify-center">
      <div className="w-[315px] h-[431px] min-w-[315px] flex justify-center">
        <img
          src={`${expert.image}`}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
          alt={expert.name}
        />
      </div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[246px] min-w-[246px] bg-[#FFF7F4] p-5 *:text-center shadow-md rounded-lg">
        <p className="text-[20px] font-semibold">{expert.name}</p>
        <p className="text-base font-medium">{expert.role}</p>
      </div>
    </div>
  );
};

export default SpaExpertCard;
