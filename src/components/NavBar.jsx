import React from "react";
import logo from "/img/Logo.svg";
import SeachIcon from "/img/Search-Icon.svg";
import CartIcon from "/img/Cart-Icon.svg";
import UserIcon from "/img/User-Icon.svg";
import NavLink from "./NavLink";
const NavBar = () => {
  return (
    <div className="w-full flex justify-center gap-24 absolute top-0 pt-4 z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-[60px]" />
      </div>
      <div className="flex gap-12 justify-center text-white items-center text-[18px] leading-[26px]">
        <NavLink to="/">Giới thiệu</NavLink>
        <NavLink to="/about">Về chúng tôi</NavLink>
        <NavLink to="/services">Hệ thống dịch vụ</NavLink>
        <NavLink to="/testimonials">Câu chuyện khách hàng</NavLink>
        <NavLink to="/news">Tin tức</NavLink>
        <NavLink to="/contact">Liên hệ</NavLink>
      </div>

      <div className="flex gap-5 justify-center text-black *:w-[24px] *:cursor-pointer">
        <img src={SeachIcon}></img>
        <img src={UserIcon}></img>
        <img src={CartIcon}></img>
      </div>
    </div>
  );
};

export default NavBar;
