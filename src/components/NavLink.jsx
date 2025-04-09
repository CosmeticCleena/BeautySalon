import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ children, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`transition-all duration-300 cursor-pointer
        ${isActive 
          ? "bg-gradient-to-r from-[#B08B3B] to-[#EAC980] bg-clip-text text-transparent" 
          : "text-white hover:bg-gradient-to-r hover:from-[#B08B3B] hover:to-[#EAC980] hover:bg-clip-text hover:text-transparent"
        }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;