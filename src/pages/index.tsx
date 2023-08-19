import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

import { Seo } from "../components/seo/seo"
import { HeroSection } from "../components/marketing/hero-section/hero-section"
import { AboutUsSection } from "../components/marketing/about-us-section/about-us-section"
import { HowItWorksSection } from "../components/marketing/how-it-works-section/how-it-works-section"
import { Footer } from "../components/marketing/footer/footer"
import { Header } from "../components/marketing/header/header"
import { DisclaimerSection } from "../components/marketing/disclaimer-section/about-us-section"

type DataProps = {}

const Index: React.FC<PageProps<DataProps>> = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <HowItWorksSection />
      <DisclaimerSection/>
      <Footer />
    </>
  )
}

export const Head: HeadFC<DataProps> = () => (
  <Seo
    title="Uncover the Key Ingredients to Your Success - streamerinsights.org"
    description="Join us in the pursuit of unraveling the secrets to success through an exploration of In-Game Data and Content Creators' metrics."
  />
)

export default Index
