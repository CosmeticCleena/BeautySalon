import React from "react";
import Loreal from "/img/logo/Loreal.svg";
import Jovian from "/img/logo/Jovian.svg";
import Lakme from "/img/logo/Lakme.svg";
import Revion from "/img/logo/Revion.svg";
import Biotherm from "/img/logo/Biotherm.svg";
const LogoBar = () => {
  return (
    <div className="flex bg-[#0D0D0D] w-full items-center justify-around py-28">
      <img src={Revion}></img>
      <img src={Jovian}></img>
      <img src={Lakme}></img>
      <img src={Biotherm}></img>
      <img src={Loreal}></img>
    </div>
  );
};

export default LogoBar;
