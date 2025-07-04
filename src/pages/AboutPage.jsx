import React from "react";
import HeroSubpage from "../components/AboutUs/HeroSubpage";
import AboutSalon from "../components/AboutUs/AboutSalon";
import LogoBar from "../components/LogoBar";
import SpaExpertTeam from "../components/SpaExpertTeam";
import Slider from "../components/AboutUs/Slider";
import Advantages from "../components/AboutUs/Advantages";
import Review from "../components/AboutUs/Review";
import StatsComponent from "../components/AboutUs/StatsComponent";
const AboutPage = () => {
  return (
    <>
      <HeroSubpage
        title={"About Us"}
        subtitle={"Home / About Us"}
        imgLink={"/img/aboutUs/hero.png"}
      />
      <AboutSalon />

      <StatsComponent/>
      
      {/* <LogoBar bgColor={""} /> */}
      <Slider type={"aboutUs"}/>
      <Advantages pageType={"aboutPage"}/>
      {/* <SpaExpertTeam pt={"pt-2"} /> */}
      <Review />
    </>
  );
};

export default AboutPage;
