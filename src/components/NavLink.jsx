import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ children, to, className = "" }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  // Check if this NavLink is being used in mobile sidebar
  const isMobileMenu = className.includes("mobile-menu");
  
  return (
    <Link
      to={to}
      className={`transition-all duration-300 cursor-pointer ${className}
        ${isMobileMenu ? "w-full block py-3 px-6 border-b border-gray-100 hover:bg-gray-50" : "lg:text-center"}
        ${isActive 
          ? "bg-gradient-to-r from-[#B08B3B] to-[#EAC980] bg-clip-text text-transparent" 
          : "text-white lg:text-white hover:bg-gradient-to-r hover:from-[#B08B3B] hover:to-[#EAC980] hover:bg-clip-text hover:text-transparent"
        }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;