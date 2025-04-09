import React from 'react'
import HeroSubpage from "../components/AboutUs/HeroSubpage";
import SpaGallerySection from "../components/SpaGallerySection";
import BookAppointment from "../components/OurServices/BookAppointment";

const TestimonialsPage = () => {
  return (
    <>
      <HeroSubpage
        title={"Customer Stories"}
        subtitle={"Home / Customer Stories"}
        imgLink={"/img/customerStories/Hero.svg"}
      />
            <SpaGallerySection />
            <BookAppointment />

    </>
  )
}

export default TestimonialsPage