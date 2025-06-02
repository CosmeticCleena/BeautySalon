import React from "react";
import HeroSubpage from "../components/AboutUs/HeroSubpage";
import SpaGallerySection from "../components/SpaGallerySection";
import BookAppointment from "../components/OurServices/BookAppointment";
import Slider from "../components/AboutUs/Slider";
import Advantages from "../components/AboutUs/Advantages";
import SpaBlog from "../components/SpaBlog";
import SpaVideoSection from "../components/SpaVideoSection";
import SpaForm from "../components/SpaForm";

const TestimonialsPage = () => {
  return (
    <>
      <HeroSubpage
        title={"Customer Stories"}
        subtitle={"Home / Customer Stories"}
        imgLink={"/img/customerStories/hero.png"}
      />
      <SpaGallerySection />
      <Advantages pageType={"customerStory"}/>
      {/* <Slider type={"customerStories"}/> */}
      <SpaBlog pageType={"customerStories"}/>
      <SpaVideoSection pageType={"CustomerStories"}/>
      <SpaForm display={"flex"}/>
    </>
  );
};

export default TestimonialsPage;
