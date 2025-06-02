import React from "react";
import HeroSubpage from "../components/AboutUs/HeroSubpage";
import SpaExpertTeam from "../components/SpaExpertTeam";
import LogoBar from "../components/LogoBar";
import FeatureServices from "../components/OurServices/FeatureServices";
import SpaPricing from "../components/SpaPricing";
import InclusivePackages from "../components/OurServices/InclusivePackages";
import Video from "../components/OurServices/Video";
import BookAppointment from "../components/OurServices/BookAppointment";
import SpaForm from "../components/SpaForm";

const ServicesPage = () => {
  return (
    <>
      <HeroSubpage
        title={"Our Services"}
        subtitle={"Home / Our Services"}
        imgLink={"/img/ourServices/hero.png"}
      />
      <FeatureServices />
      {/* <SpaExpertTeam pt={"pt-8"} /> */}
      {/* <LogoBar bgColor={""} /> */}
      <InclusivePackages />
      {/* <SpaPricing /> */}
      {/* <Video /> */}
      <SpaForm display={"flex"}/>
    </>
  );
};

export default ServicesPage;
