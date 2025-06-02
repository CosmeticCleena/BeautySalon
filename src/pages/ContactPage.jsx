import React from "react";
import HeroSubpage from "../components/AboutUs/HeroSubpage";
import GetInTouch from "../components/ContactUs/GetInTouch";

const ContactPage = () => {
  return (
    <>
      <HeroSubpage
        title={"Contact Us"}
        subtitle={"Home / Contact Us"}
        imgLink={"/img/contact/hero.png"}
      />
      <GetInTouch />
    </>
  );
};

export default ContactPage;
