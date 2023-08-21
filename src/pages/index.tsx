import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

import { Seo } from "../components/seo/seo"
import { HeroSection } from "../components/marketing/hero-section/hero-section"
import { AboutUsSection } from "../components/marketing/about-us-section/about-us-section"
import { HowItWorksSection } from "../components/marketing/how-it-works-section/how-it-works-section"
import { Footer } from "../components/marketing/footer/footer"
import { Header } from "../components/marketing/header/header"
import { DisclaimerSection } from "../components/marketing/disclaimer-section/about-us-section"

export const Head: HeadFC = () => (
  <Seo
    title="Learn how your In-Game Performance affects your stream - streamerinsights.org"
    description="Participate in research focused on correlations between streamers' in-game performance and key metrics of their audience such as audience size and engagement"
  />
)

const Page: React.FC<PageProps> = () => {
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

export default Page
