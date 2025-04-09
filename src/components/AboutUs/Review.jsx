import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";

const Review = () => {
  return (
    <div className="flex flex-col justify-center mb-24 gap-8">
      <div className="flex justify-center gap-8 mb-8">
        <div className="flex flex-col gap-5">
          <div className="flex shadow-lg shadow-black/5 p-5 gap-5 w-[90%] self-end">
            <img
              src="/img/aboutUs/GaiXinhVcl1.svg"
              alt="Team member"
              className="w-20 h-20"
            />
            <div className="flex flex-col gap-4 justify-center max-w-[400px]">
              <p className="text-2xl font-semibold">
                Brooklyn Simmons, UX Designer
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="flex shadow-lg shadow-black/5 p-5 gap-5 w-[90%] self-start">
            <img
              src="/img/aboutUs/GaiXinhVcl2.svg"
              alt="Team member"
              className="w-20 h-20"
            />
            <div className="flex flex-col gap-4 justify-center max-w-[400px]">
              <p className="text-2xl font-semibold">
                Brooklyn Simmons, UX Designer
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-1/3 gap-6">
          <p className="text-[44px] font-normal">
            Genuine Testimonials From Real Users.{" "}
          </p>
          <img src={FlowerUnderHeader} alt="" />

          <p className="text-lg font-normal text-[#6A6A6A]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex gap-8">
            <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-3 px-8 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl">Trusted By Over <span className="font-bold">8,000</span> Reputable Companies Worldwide.</p>
    </div>
  );
};

export default Review;
