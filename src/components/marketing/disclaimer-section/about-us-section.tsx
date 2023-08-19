import * as React from "react"
import { FiCoffee } from "react-icons/fi"

interface Props {

}

export const DisclaimerSection: React.FC<Props> = () => {
  return (
    <section className="bg-stone-100 py-14">
      <div className="container mx-auto px-4 flex gap-14 items-center">
        <div className="hidden sm:flex w-4/12 flex items-center justify-center text-stone-800">
          <FiCoffee className="w-36 h-36" />
        </div>
        <div className="w-full sm:w-8/12">
          <h2 className="text-3xl font-semibold mb-4">Pet Project Disclaimer</h2>
          <p className="text-stone-700 mb-6">
            Streamer Insights is a <strong>pet project</strong> with <strong>research goals</strong>; we're not aiming to generate any profits from it. This also means that we're working on the project in our free time. Since we all have jobs, families, and a love for gaming, we're okay with the fact that the project sometimes progresses <strong>very slowly</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}