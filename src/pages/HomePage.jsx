import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import SpaServiceFeature from '../components/SpaServiceFeature'
import SpaGallerySection from '../components/SpaGallerySection'
const HomePage = () => {
  return (
    <div className='h-screen w-full p-0 m-0 text-[16px]'>
        <NavBar/>
        <Hero/>
        <SpaServiceFeature/>
        <SpaGallerySection/>
    </div>
  )
}

export default HomePage