import React from "react";
import Loreal from "/img/logo/Loreal.svg";
import Jovian from "/img/logo/Jovian.svg";
import Lakme from "/img/logo/Lakme.svg";
import Revion from "/img/logo/Revion.svg";
import Biotherm from "/img/logo/Biotherm.svg";
import LorealWhite from "/img/logo/Loreal_Light.svg";
import JovianWhite from "/img/logo/jovian_Light.svg";
import LakmeWhite from "/img/logo/Lakme_Light.svg";
import RevionWhite from "/img/logo/Revion_Light.svg";
import BiothermWhite from "/img/logo/Biotherm_Light.svg";

const LogoBar = ({bgColor}) => {
  return (
    <div className={`flex flex-col md:flex-row gap-10 ${bgColor} w-full items-center justify-around py-14 md:py-28`}>
      <img src={bgColor !== "" ? Revion : RevionWhite} alt="Revion logo" />
      <img src={bgColor !== "" ? Jovian : JovianWhite} alt="Jovian logo" />
      <img src={bgColor !== "" ? Lakme : LakmeWhite} alt="Lakme logo" />
      <img src={bgColor !== "" ? Biotherm : BiothermWhite} alt="Biotherm logo" />
      <img src={bgColor !== "" ? Loreal : LorealWhite} alt="Loreal logo" />
    </div>
  );
};

export default LogoBar;