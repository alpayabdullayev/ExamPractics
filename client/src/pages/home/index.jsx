import React from 'react'
import Product from '../../components/product'
import HeroSection from '../../components/hero'
import AboutUs from '../../components/AboutUs'
import OurTeam from '../../components/oueTeam'
import ContactUs from '../../components/ContactUs'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
   
    <OurTeam/>
    <Product/>
    <ContactUs/>
    
    </>
  )
}

export default Home