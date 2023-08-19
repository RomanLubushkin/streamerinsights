import * as React from "react"
import { startAuth } from "../../../utils/auth"
import { FaTwitch } from "react-icons/fa"
import { clsx } from "clsx"

interface Props {
  isLoaded: boolean;
  isAuth: boolean;
  onSignOut: () => void;
  className?: string;
}

export const Header: React.FC<Props> = props => {
  const { isAuth, isLoaded, onSignOut, className } = props
  return (
    <header
      className={clsx(
        "container mx-auto height-header p-4 md:p-6 lg:p-0",
        "bg-stone-900 font-semibold flex justify-between items-center",
        className
      )}>
      <div className="text-stone-100 text-xl">
        Streamer Insights
      </div>
      <div>
        {isLoaded && (
          isAuth ? (
            <button
              onClick={onSignOut}
              className="flex gap-2 items-center justify-center text-sm px-3 py-2 border border-stone-400 hover:border-stone-100 text-stone-100 hover:text-stone-400 rounded-full transition duration-300">
              Sign Out
            </button>
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