import * as React from "react"
import { startAuth } from "../../../utils/auth"
import { AppPath } from "../../../utils/path"
import { Link } from "gatsby"
import { useAuth } from "../../../hooks/use-auth"
import { FaTwitch } from "react-icons/fa"
import { clsx } from "clsx"

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = props => {
  const { className } = props
  const { isAuth, isLoaded } = useAuth()
  return (
    <header
      className={clsx(
        "container mx-auto height-header p-4 md:p-6 lg:p-0",
        "bg-stone-900  font-semibold flex justify-between items-center",
        className
      )}>
      <div className="text-stone-100 text-xl">
        Streamer Insights
      </div>
      <div>
        {isLoaded && (
          isAuth ? (
            <Link to={AppPath.PROFILE}
                  className="text-sm px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300">
              My Profile
            </Link>
          ) : (
            <button
              onClick={startAuth}
              className="flex gap-2 items-center justify-center text-sm px-5 py-3 bg-twitch-100 hover:bg-twitch-200 text-white rounded-full transition duration-300">
              <FaTwitch className="h-4 w-4" /> Sign In
            </button>
          )
        )}
      </div>
    </header>
  )
}