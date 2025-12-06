import React from 'react'
import HeroBanner from '../component/HeroBanner'
import Navigation from '../component/Navigation'
import ResortSection from '../component/ResortSection'
import AboutUs from '../component/AboutUs'
import VillaBookingSection from '../component/VillaBookingSection'

const Home = () => {
  return (
    <>
    <Navigation/>
    <HeroBanner/>
    <AboutUs/>
    <ResortSection/>
    <VillaBookingSection/>
    </>
  )
}

export default Home
