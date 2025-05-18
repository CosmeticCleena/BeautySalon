import React from "react";
import Hero from "../components/Hero";
import SpaProperties from "../components/SpaProperties";
import SpaGallerySection from "../components/SpaGallerySection";
import SpaFeatureServices from "../components/SpaFeatureServices";
import LogoBar from "../components/LogoBar";
import SpaAdvantage from "../components/SpaAdvantage";
import SpaPricing from "../components/SpaPricing";
import SpaVideoSection from "../components/SpaVideoSection";
import SpaExpertTeam from "../components/SpaExpertTeam";
import SpaAchievement from "../components/SpaAchievement";
import SpaForm from "../components/SpaForm";
import SpaBlog from "../components/SpaBlog";
import SpaBeforeAfter from "../components/SpaBeforeAfter";
const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <SpaProperties /> */}
      <SpaGallerySection />
      <SpaFeatureServices />
      {/* <LogoBar bgColor={"bg-[#0D0D0D]"}/> */}
      <SpaAdvantage />
      {/* <SpaPricing /> */}
      <SpaVideoSection pageType={"HomePage"}/>
      {/* <SpaExpertTeam pt={"pt-[400px]"}/> */}
      <SpaAchievement />
      <SpaBeforeAfter/>
      <SpaForm display={"flex"}/>
      {/* <SpaBlog pageType={"blog"}/> */}
    </>
  );
};

export default HomePage;
