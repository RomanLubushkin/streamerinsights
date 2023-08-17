import * as React from "react"
import {HeadFC, PageProps} from "gatsby"

import {Seo} from "../components/seo/seo"
import {HeroSection} from "../components/marketing/hero-section/hero-section";
import {AboutUsSection} from "../components/marketing/about-us-section/about-us-section";
import {HowItWorksSection} from "../components/marketing/how-it-works-section/how-it-works-section";
import {Footer} from "../components/layout/footer/footer";

type DataProps = {}

const Index: React.FC<PageProps<DataProps>> = () => {
    return (
        <div className="bg-stone-900">
            <HeroSection/>
            <AboutUsSection/>
            <HowItWorksSection/>
            <Footer/>
        </div>
    )
}

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript"/>

export default Index
