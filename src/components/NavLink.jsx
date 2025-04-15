import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children, className, darkMode, ...props }) => {
  const { pathname } = useLocation();
  
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));

  const gradientTextStyle = isActive ? {
    background: "linear-gradient(124.38deg, #B08B3B 7.88%, #EAC980 87.45%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent"
  } : {};

  return (
    <Link
      to={to}
      className={`${className || ""} relative group transition-colors duration-300`}
      {...props}
    >
      <span 
        style={gradientTextStyle}
        className={`
          ${!isActive && (
            darkMode 
              ? "text-white hover:text-primary-300" 
              : "text-gray-800 hover:text-primary-500"
          )}
        `}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;