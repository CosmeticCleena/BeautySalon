import React, { Suspense, lazy } from "react";

// Components that are part of the initial render
import HeroSubpage from "../components/AboutUs/HeroSubpage";

// Lazy loaded components
const AboutSalon = lazy(() => import("../components/AboutUs/AboutSalon"));
const Slider = lazy(() => import("../components/AboutUs/Slider"));
const Advantages = lazy(() => import("../components/AboutUs/Advantages"));
const Review = lazy(() => import("../components/AboutUs/Review"));
const StatsComponent = lazy(() => import("../components/AboutUs/StatsComponent"));
const AboutPage = () => {
  return (
    <>
      <HeroSubpage
        title={"About Us"}
        subtitle={"Home / About Us"}
        imgLink={"/img/aboutUs/hero.png"}
      />
      <Suspense fallback={<div className="w-full h-40 flex items-center justify-center">Loading...</div>}>
        <AboutSalon />
        <StatsComponent/>
        <Slider type={"aboutUs"}/>
        <Advantages pageType={"aboutPage"}/>
        <Review />
      </Suspense>
    </>
  );
};

export default AboutPage;
