import React from 'react'
import Hero from '../components/Hero'
import SpaProperties from '../components/SpaProperties'
import SpaGallerySection from '../components/SpaGallerySection'
import SpaFeatureServices from '../components/SpaFeatureServices'
import LogoBar from '../components/LogoBar'
import SpaAdvantage from '../components/SpaAdvantage'
import SpaPricing from '../components/SpaPricing'
import SpaVideoSection from '../components/SpaVideoSection'
import SpaExpertTeam from '../components/SpaExpertTeam'
import SpaAchievement from '../components/SpaAchievement'
import SpaForm from '../components/SpaForm'
import Footer from '../components/Footer'
import SpaBlog from '../components/SpaBlog'
const HomePage = () => {
  return (
    <div className='h-screen w-full p-0 m-0 text-[16px]'>
        <Hero/>
        <SpaProperties/>
        <SpaGallerySection/>
        <SpaFeatureServices/>
        <LogoBar/>
        <SpaAdvantage/>
        <SpaPricing/>
        <SpaVideoSection/>
        <SpaExpertTeam/>
        <SpaAchievement/>
        <SpaForm/>
        <SpaBlog/>
        <Footer/>
    </div>
  )
}

export default HomePage