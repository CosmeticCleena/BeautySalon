import React, { Suspense, lazy } from "react";
import HeroSubpage from "../components/AboutUs/HeroSubpage";

// Lazy load the GetInTouch component
const GetInTouch = lazy(() => import("../components/ContactUs/GetInTouch"));

const ContactPage = () => {
  return (
    <>
      <HeroSubpage
        title={"Contact Us"}
        subtitle={"Home / Contact Us"}
        imgLink={"/img/contact/hero.png"}
      />
      <Suspense fallback={<div className="w-full h-40 flex items-center justify-center">Loading...</div>}>
        <GetInTouch />
      </Suspense>
    </>
  );
};

export default ContactPage;
