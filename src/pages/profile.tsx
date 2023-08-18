import * as React from "react";
import {PageProps} from "gatsby";
import {useAuth} from "../hooks/use-auth";
import {SystemStatus} from "../components/system-status/system-status";
import {Header} from "../components/app/header/header";

type DataProps = {}

type State = {};

const Twitch: React.FC<PageProps<DataProps>> = () => {
    const [state, setState] = React.useState<State>({});
    const {isAuth, isLoaded, signOut} = useAuth();

    return (
        <>
            <Header isAuth={isAuth} isLoaded={isLoaded} onSignOut={signOut}/>
            <main className="container mx-auto height-100vh flex-col text-stone-100">
                <SystemStatus
                    isAuth={isAuth}
                    isParticipant={false}
                    isTwitchDataLoaderActive={true}
                    isSteamDataLoaderActive={true}
                    isRiotDataLoaderActive={false}
                    className="mt-14"
                />
            </main>
        </>
    )
}

export default Twitch;