import React, { useState, useEffect } from "react";
import logo from "/img/Logo.svg";
import SeachIcon from "/img/Search-Icon.svg";
import CartIcon from "/img/Cart-Icon.svg";
import UserIcon from "/img/User-Icon.svg";
import NavLink from "./NavLink";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { 
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className="w-full flex justify-between top-0 py-3 z-30 px-6 md:px-12 lg:px-18 xl:px-24 fixed bg-white shadow-md lg:shadow-none lg:bg-transparent">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[60px]" />
        </div>
        <div className="hidden lg:flex gap-12 justify-center text-white items-center text-[18px] leading-[26px] ">
          <NavLink to="/">Giới thiệu</NavLink>
          <NavLink to="/about">Về chúng tôi</NavLink>
          <NavLink to="/services">Hệ thống dịch vụ</NavLink>
          <NavLink to="/testimonials">Câu chuyện khách hàng</NavLink>
          <NavLink to="/news">Tin tức</NavLink>
          <NavLink to="/contact">Liên hệ</NavLink>
        </div>

        <div className="hidden lg:flex gap-5 justify-center text-black *:w-[24px] *:cursor-pointer">
          <img src={SeachIcon} alt="Search" />
          <img src={UserIcon} alt="User" />
          <img src={CartIcon} alt="Cart" />
        </div>
        <div className="flex justify-center items-center lg:hidden cursor-pointer z-35" onClick={toggleSidebar}>
          <img src="/img/bar.svg" alt="Menu" />
        </div>
      </div>

      <div className={`fixed top-[83px] right-0 h-full w-full bg-white z-30 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       
        <div className="flex flex-col *:px-6 *:md:px-12">
          <NavLink to="/" className="py-3 border-b border-t border-gray-100 text-gray-900 hover:bg-gray-50">Giới thiệu</NavLink>
          <NavLink to="/about" className="py-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50">Về chúng tôi</NavLink>
          <NavLink to="/services" className="py-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50">Hệ thống dịch vụ</NavLink>
          <NavLink to="/testimonials" className="py-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50">Câu chuyện khách hàng</NavLink>
          <NavLink to="/news" className="py-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50">Tin tức</NavLink>
          <NavLink to="/contact" className="py-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50">Liên hệ</NavLink>
        </div>
      </div>

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default NavBar;