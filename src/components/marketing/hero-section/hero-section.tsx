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
        <div className="w-full sm:w-8/12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Uncover the Key Ingredients to Your Success
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 text-stone-300">
            Join us in the pursuit of unraveling the secrets to success through an exploration of
            In-Game Data and Content Creators' metrics.
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