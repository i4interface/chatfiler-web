import React from 'react'
import Layout from '../layout/Layout'
import StepsToNote from '../components/home/StepsToNote'
import TaxPayerSnippet from '../components/home/TaxPayerSnippet'
import HowItWorks from '../components/home/HowItWorks'
import OurFeatures from '../components/home/OurFeatures'
import HomePrice from '../components/home/HomePrice'
import Testimonials from '../components/testimonials/Testimonials'

function Home() {
  return (
    <Layout>

      <StepsToNote />
      <OurFeatures />
      <TaxPayerSnippet />
      <HowItWorks />
      <HomePrice />
      <Testimonials/>
    </Layout>
  )
}

export default Home