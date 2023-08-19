import * as React from "react"
import { useAuth } from "../../../hooks/use-auth"
import { Link } from "gatsby"
import { AppPath } from "../../../utils/path"

export const HeroSection: React.FC = () => {
  const { isAuth, isLoaded } = useAuth()
  return (
    <section className="text-white" style={{
      backgroundImage: "linear-gradient(to right, rgba(27, 25, 23, 1) 40%, rgba(27, 25, 23, 0.8)), url(/images/hero-bg.jpg)",
      backgroundSize: "cover",
      backgroundPositionY: '60%',
      backgroundPositionX: '00%',
      backgroundRepeat: "no-repeat"
    }}>
      <div className="container mx-auto px-6 py-24 flex items-stretch">
        <div className="w-full sm:w-6/12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Learn how your In-Game Performance affects your stream
          </h1>
          <p className="text-lg md:text-xl mb-12 text-stone-300">
            Participate in research focused on correlations between streamers' in-game performance and key metrics of their audience such as audience size and engagement.
          </p>
          <div className="flex space-x-4 h-14 flex items-center">
            {isLoaded && (
              <>
                {isAuth ? (
                  <Link to={AppPath.PROFILE}
                        className="px-6 py-3 bg-blue-500 min-w-[10rem] text-center hover:bg-blue-600 text-white rounded-full transition duration-300">
                    My Profile
                  </Link>
                ) : (
                  <a href="https://forms.gle/RqFNYuNKQUK79NqH6" target="_blank"
                     rel="noopener noreferrer"
                     className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300">
                    Apply for Participation
                  </a>
                )}
                <a href="#how-it-works" rel="noopener noreferrer"
                   className="px-6 py-3 border border-stone-300 min-w-[10rem] text-center text-stone-300 rounded-full cursor-pointer transition duration-300 hover:bg-stone-700">
                  How It Works
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}