import React from "react";
import { Link } from "react-router-dom";
const NavLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-white transition-all duration-300
        hover:bg-gradient-to-r hover:from-[#B08B3B] hover:to-[#EAC980]
        hover:bg-clip-text hover:text-transparent cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default NavLink;
