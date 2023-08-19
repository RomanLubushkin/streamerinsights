import * as React from "react"
import { GiLetterBomb } from "react-icons/gi"
import { BsDatabaseFillDown, BsFillClipboardDataFill } from "react-icons/bs"
import { DemoChart } from "../demo-chart/demo-chart"

interface Props {

}

export const HowItWorksSection: React.FC<Props> = () => {
  return (
    <section id="how-it-works" className="bg-stone-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center mb-6">
          How It Works
        </h2>
        <p className="text-stone-200 mb-8 max-w-5xl mx-auto text-center">
          Once you apply for participation and agree to share your data with us, we will begin gathering and analyzing your in-game performance, stream audience metrics, and more. Currently, the collected data and all findings are available only to profile owners and researchers. Even though all the data we're using for analytics is publicly available, we don't know what we'll find, so it is a good practice to let people decide whether they want to share it.
        </p>
        <div className="grid grid-cols-3 gap-2 md:gap-8 mb-6 sm:mb-14">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-xl mb-0 sm:mb-4">
              Apply for Participation
            </div>
            <p className="hidden sm:flex text-stone-600 flex items-center justify-center">
              <GiLetterBomb className="w-10 h-10" />
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-xl mb-0 sm:mb-4">
              Start Data Gathering
            </div>
            <p className="hidden sm:flex text-stone-600 flex items-center justify-center">
              <BsDatabaseFillDown className="w-10 h-10" />
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-xl mb-0 sm:mb-4">
              Get Access to Insights
            </div>
            <p className="hidden sm:flex text-stone-600 flex items-center justify-center">
              <BsFillClipboardDataFill className="w-10 h-10" />
            </p>
          </div>
        </div>
        <div className="w-full h-96 bg-stone-300 rounded overflow-hidden">
          <DemoChart />
        </div>
      </div>
    </section>
  )
}