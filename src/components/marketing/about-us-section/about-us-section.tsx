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
            We are a non-commercial project dedicated to exploring the correlations between In-Game data
            and the growth of content creators' audiences. Participation is completely free, but limited,
            as we cover all computations ourselves.
          </p>
          <p className="text-stone-700">
            Join us in this exciting journey of discovery and innovation. Your insights contribute to
            shaping the future of gaming and content creation.
          </p>
        </div>
        <div className="hidden sm:flex w-4/12 flex items-center justify-center text-stone-800">
          <GiMicroscope className="w-48 h-48" />
        </div>
      </div>
    </section>
  )
}