import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../components/about/Hero'
import Mission from '../components/about/Mission'
import KeyPoints from '../components/about/KeyPoints'
import Testimonials from '../components/testimonials/Testimonials'
import WhyChoose from '../components/about/WhyChoose'

function About() {
  return (
    <Layout>
      <Hero/>
      <Mission/>
      <WhyChoose />
      <KeyPoints/>
      {/* <Testimonials/> */}

    </Layout>
  )
}

export default About