import React from 'react'
import HeroBanner from '../component/HeroBanner'
import Navigation from '../component/Navigation'
import ResortSection from '../component/ResortSection'
import AboutUs from '../component/AboutUs'
import VillaBookingSection from '../component/VillaBookingSection'
import VisionMissionSection from '../component/VisionMissionSection'
import TestimonialCard from '../component/TestimonialCard'

const Home = () => {
  return (
    <>
    <Navigation/>
    <HeroBanner/>
    <AboutUs/>
    <ResortSection/>
    <VillaBookingSection/>
    <VisionMissionSection/>
    <TestimonialCard/>
    </>
  )
}

export default Home
