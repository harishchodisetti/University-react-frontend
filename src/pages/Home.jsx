import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Program from '../components/program/program'
import Programs from '../components/programs/programs'
import About from '../components/about/About'
import Campus from '../components/campus/campus'
import Campusphoto from '../components/campusphotos/campusphoto'
import Contact from '../components/contact/contact'
import Testimonial from '../components/testimonials/testimonials'
import Title from '../components/hcontact/hcontact'

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Program/>
      <Programs/>
      <About/>
      <Campus/>
      <Campusphoto/>
       <Title  subtitle="Testimonials"
        title="What students say"/>
      <Testimonial/>
       <Title  subtitle="Contact Us"
        title="Get in Touch"/>
      <Contact/>
      
      



    </>
  )
}

export default Home