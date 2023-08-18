import * as React from "react"
import {startAuth} from "../../../utils/auth";
import {genProfileUrl} from "../../../utils/path";
import {Link} from "gatsby";
import {useAuth} from "../../../hooks/use-auth";
import {FaTwitch} from "react-icons/fa";

interface Props {

}

export const Header: React.FC<Props> = () => {
    const {isAuth, userInfo} = useAuth();
    return (
        <header className="bg-stone-900 h-14 font-semibold flex justify-between items-center container mx-auto">
            <div className="text-stone-100 text-xl">
                Streamer Insights
            </div>
            <div>
                {isAuth ? (
                    <Link to={genProfileUrl(userInfo.login)}
                          className="text-sm px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300">
                        My Profile
                    </Link>
                ) : (
                    <button
                        onClick={startAuth}
                        className="flex gap-2 items-center justify-center text-sm px-5 py-3 bg-twitch-100 hover:bg-twitch-200 text-white rounded-full transition duration-300">
                        <FaTwitch className="h-4 w-4"/> Sign In
                    </button>
                )}
            </div>
        </header>
    );
};