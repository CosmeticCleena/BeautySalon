import React from 'react'

const NavLink = ({ children }) => {
  return (
    <p className="text-white transition-all duration-300 
      hover:bg-gradient-to-r hover:from-[#B08B3B] hover:to-[#EAC980] 
      hover:bg-clip-text hover:text-transparent cursor-pointer">
    {children}
  </p>
  )
}

export default NavLink