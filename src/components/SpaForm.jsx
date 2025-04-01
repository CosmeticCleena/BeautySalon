import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import CallIcon from "/img/Call-Icon.svg";
const SpaForm = () => {
  return (
    <div className="w-full flex justify-center gap-12 py-24">
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-[44px]">Make Appointment</h2>
        <img src={FlowerUnderHeader} alt="" />
        <p className="max-w-[500px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex bg-[#FFF7F4] p-5 gap-5">
          <img src={CallIcon} alt="" />
          <div className="flex flex-col justify-center items-start">
            <p className="text-[20px] font-medium">Phone Appointment</p>
            <p className="text-[24px] font-bold">+ 00 12345 67890</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[830px] gap-5">
        <div className="grid gap-5">
          <input
            type="text"
            placeholder="Your Name*"
            className="border border-[#D8D8D8] focus:border-[#D1AE62] p-3 placeholder:px-1"
          />
          <input
            type="text"
            placeholder="Email Address*"
            className="border border-[#D8D8D8] focus:border-[#D1AE62] p-3 placeholder:px-1"
          />
          <input
            type="text"
            placeholder="Enter Date*"
            className="border border-[#D8D8D8] focus:border-[#D1AE62] p-3 placeholder:px-1"
          />
          <button className="bg-[#D4AF37] text-white px-6 py-3">
            Book Appointment
          </button>
        </div>
        <div className="grid grid-rows-4 gap-5">
          <select
            className="border border-[#D8D8D8] focus:border-[#D1AE62] p-3 placeholder:px-4 row-span-1"
            defaultValue=""
          >
            <option value="" disabled>
              Select your option
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <textarea
            className="border border-[#D8D8D8] focus:border-[#D1AE62] p-3 placeholder:px-1 row-span-2"
            placeholder="Your Message*"
          ></textarea>
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600">
              Your privacy is our priority; we never collect personal data
              without consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaForm;
