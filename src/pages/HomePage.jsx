import React, { Suspense, lazy } from "react";

// Components that are part of the initial render
import Hero from "../components/Hero";

// Lazy loaded components
const SpaGallerySection = lazy(() => import("../components/SpaGallerySection"));
const SpaFeatureServices = lazy(() => import("../components/SpaFeatureServices"));
const SpaAdvantage = lazy(() => import("../components/SpaAdvantage"));
const SpaAchievement = lazy(() => import("../components/SpaAchievement"));
const SpaBeforeAfter = lazy(() => import("../components/SpaBeforeAfter"));
const SpaForm = lazy(() => import("../components/SpaForm"));
const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="w-full h-40 flex items-center justify-center">Loading...</div>}>
        <SpaGallerySection />
        <SpaFeatureServices />
        <SpaAdvantage />
        <SpaAchievement />
        <SpaBeforeAfter/>
        <SpaForm display={"flex"}/>
      </Suspense>
    </>
  );
};

export default HomePage;
