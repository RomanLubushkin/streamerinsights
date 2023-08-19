import * as React from "react"
import { GiMicroscope } from "react-icons/gi"

interface Props {

}

export const AboutUsSection: React.FC<Props> = () => {
  return (
    <section className="bg-stone-100 py-14">
      <div className="container mx-auto px-4 flex gap-14 items-center">
        <div className="w-full sm:w-8/12">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-stone-700 mb-6">
            Streamer Insights is a <strong>non-commercial project</strong> run by a small group of enthusiasts dedicated to exploring
            the correlations between In-Game data and streamer's audience. Participation is completely <strong>free, but limited</strong>,
            as we don't have funding and cover all computations ourselves.
          </p>
        </div>
        <div className="hidden sm:flex w-4/12 flex items-center justify-center text-stone-800">
          <GiMicroscope className="w-36 h-36" />
        </div>
      </div>
    </section>
  )
}