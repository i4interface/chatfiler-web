import React from "react";
import Layout from "../layout/Layout";
import StepsToNote from "../components/home/StepsToNote";
import HeroSection from "../components/home/HeroSection";
import TaxPayerSnippet from "../components/home/TaxPayerSnippet";
import HowItWorks from "../components/home/HowItWorks";
import OurFeatures from "../components/home/OurFeatures";
import HomePrice from "../components/home/HomePrice";
import Testimonials from "../components/testimonials/Testimonials";
import FaqComp from "../components/home/FaqComp";
import NewsSection from "../components/home/NewsSection";
import Heronew from "../components/home/Heronew";

function Home() {
  return (
    <Layout>
      <Heronew />
      <StepsToNote />
      <OurFeatures />
      <TaxPayerSnippet />
      <HowItWorks />
      <HomePrice />
      <Testimonials />
      <FaqComp />
      <NewsSection />
    </Layout>
  );
}

export default Home;
