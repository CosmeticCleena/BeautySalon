import React from "react";
import NavLink from "./NavLink";
import logo from "/img/Logo.svg";
import FooterIcon from "/img/FooterIcon.svg";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-20 px-8 lg:px-40 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
        <div className="flex flex-col gap-6">
          <img
            src={logo}
            alt="LEENA"
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
          />
          <div className="flex flex-col md:flex-row gap-6 cursor-pointer">
            <span className="text-white hover:text-primary-300">
              Giới thiệu
            </span>
            <span className="text-white hover:text-primary-300">
              Về chúng tôi
            </span>
            <span className="text-white hover:text-primary-300">
              Hệ thống dịch vụ
            </span>
            <span className="text-white hover:text-primary-300">
              Câu chuyện khách hàng
            </span>
            <span className="text-white hover:text-primary-300">Tin tức</span>
            <span className="text-white hover:text-primary-300">Liên hệ</span>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-[#D1AE62] min-w-[20px]"></i>
              <span className="text-sm text-gray-300">150 Nguyễn Sơn, Long Biên, Hà Nội</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone text-[#D1AE62] min-w-[20px]"></i>
              <span className="text-sm text-gray-300">Hotline: 088 886 8856</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fab fa-facebook text-[#D1AE62] min-w-[20px]"></i>
              <a
                href="https://www.facebook.com/ThammyCLEENA?locale=vi_VN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#D1AE62] hover:underline"
              >
                facebook.com/ThammyCLEENA
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <p className="text-sm md:text-base">Subscribe our newsletter</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white bg-opacity-15 p-3 md:p-4 pr-6 text-white text-sm md:text-base"
            />
            <button className="bg-[#D1AE62] text-black px-4 text-sm md:text-base">
              Subscribe Now
            </button>
          </div>
          <div className="flex gap-5">
            <img
              src={FooterIcon}
              alt=""
              className="w-5 h-5 md:w-auto md:h-auto"
            />
            <span className="text-sm md:text-base">
              Protecting your Privacy
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full mt-10 pt-6 border-t-[0.5px] border-t-[#6A6A6A]">
        <div className="flex gap-5">
          <span className="text-white hover:text-primary-300">Terms</span>
          <span className="text-white hover:text-primary-300">Policy</span>
          <span className="text-white hover:text-primary-300">Contact</span>
        </div>
        <div className="flex gap-5">
          <i className="fa-brands fa-facebook text-base md:text-lg"></i>
          <i className="fa-brands fa-instagram text-base md:text-lg"></i>
          <i className="fa-brands fa-twitter text-base md:text-lg"></i>
          <i className="fa-brands fa-youtube text-base md:text-lg"></i>
        </div>
        <p className="text-[16px] md:text-[18px] text-center font-medium text-[#6A6A6A]">
          © 2024 Glamspot All Rights Reserved and Cleena Rights.
        </p>
      </div>
    </div>
  );
};

export default Footer;