import React from "react";
import Layout from "../layout/Layout";
import StepsToNote from "../components/home/StepsToNote";
import HeroSection from "../components/homeNew/HeroSection";
import TaxPayerSnippet from "../components/home/TaxPayerSnippet";
import HowItWorks from "../components/home/HowItWorks";
import OurFeatures from "../components/home/OurFeatures";
import HomePrice from "../components/home/HomePrice";
import Testimonials from "../components/testimonials/Testimonials";
import FaqComp from "../components/home/FaqComp";
import NewsSection from "../components/home/NewsSection";
import Heronew from "../components/home/Heronew";
import NewPricingSnip from "../components/homeNew/NewPricingSnip";
import AboutSection from "../components/homeNew/AboutSection";
import ProgressSection from "../components/homeNew/ProgressSection";
import CounterSection from "../components/homeNew/CounterSection";
import FeatureSnippet from "../components/homeNew/FeatureSnippet";
import CTASection from "../components/homeNew/CTASection";
import HomeContact from "../components/homeNew/HomeContact";
import CTANew from "../components/homeNew/CTANew";

function Home() {
  return (
    <Layout>
      {/* <Heronew /> */}
      
      {/* <StepsToNote /> */}
      {/* <OurFeatures /> */}
      {/* <TaxPayerSnippet /> */}
      {/* <HowItWorks /> */}
      {/* <HomePrice /> */}
      {/* <Testimonials /> */}
      {/* <FaqComp /> */}
      {/* <NewsSection /> */}


      <HeroSection/>
      <AboutSection />
      <ProgressSection />
      <CounterSection />
      <FeatureSnippet />
      <NewPricingSnip/>
      <CTANew/>
      <HomeContact/>
    </Layout>
  );
}

export default Home;
