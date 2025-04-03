import React from "react";
import NavLink from "./NavLink";
import logo from "/img/Logo.svg";
import FooterIcon from "/img/FooterIcon.svg";
const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-20 px-40 flex flex-col items-center">
      <div className="flex justify-between  w-full">
        <div className="flex flex-col gap-6">
          <img src={logo} alt="" className="w-[120px] h-[120px]" />
          <div className="flex gap-6">
            <NavLink>Giới thiệu</NavLink>
            <NavLink>Về chúng tôi</NavLink>
            <NavLink>Hệ thống dịch vụ</NavLink>
            <NavLink>Câu chuyện khách hàng</NavLink>
            <NavLink>Tin tức</NavLink>
            <NavLink>Liên hệ</NavLink>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p>Subscribe our newsletter</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white bg-opacity-15 p-4 pr-6 text-white"
            />
            <button className="bg-[#D1AE62] text-black px-4">Subscribe Now</button>
          </div>
          <div className="flex gap-5">
            <img src={FooterIcon} alt="" />
            <span>Protecting your Privacy</span>
            </div>
        </div>
      </div>
      <div className="flex justify-between w-full  mt-10 pt-10 border-t-[0.5px] border-t-[#6A6A6A]">
          <div className="flex gap-5">
              <NavLink>Terms</NavLink>
              <NavLink>Policy</NavLink>
              <NavLink>Contact</NavLink>
          </div>
          <div className="flex gap-5">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          </div>
          <p className="text-[18px] font-medium text-[#6A6A6A]">© 2024 Glamspot All Rights Reserved and Cleena Rights.</p>
      </div>
    </div>
  );
};

export default Footer;
